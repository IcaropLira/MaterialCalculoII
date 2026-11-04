/*
  content.ts — lê TUDO que está em /content (arquivos .md e site.yml) e entrega
  estruturas prontas para as páginas. Para adicionar conteúdo você só cria
  arquivos .md; nenhum código muda.
*/
import { parse as parseYaml } from 'yaml';

const files = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const siteFile = import.meta.glob('/content/site.yml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

// ───────────────────────── tipos ─────────────────────────
export type Status = 'available' | 'soon';

export interface SiteConfig {
  brand: { word: string; tagline: string };
  author: string;
  repoUrl?: string;
  footerNote?: string;
  nav: { label: string; to: string }[];
  home: {
    eyebrow: string; title: string; lede: string; formula?: string; formulaLabel?: string;
    topicos: Section3; listas: Section3; provas: Section3;
    como: { title: string; text: string }[];
  };
}
interface Section3 { kicker: string; title: string; text: string }

export interface Doc {
  fm: Record<string, any>;
  body: string;
}

export interface Section {
  id: string;
  title: string; // markdown inline
  toc: string; // texto puro para a barra lateral
  kicker?: string;
  body: string;
  cheat: boolean;
}

export interface Entry {
  heading: string; // markdown inline (enunciado)
  letter?: string; // "a)", "b)"… quando existir
  body: string; // resolução
}
export interface Group {
  title: string; // instrução da questão (markdown inline)
  entries: Entry[];
}

export interface Topic {
  slug: string;
  title: string;
  number: string;
  summary: string;
  status: Status;
  theory: Doc;
  exercises?: Doc;
  exerciseCount: number;
}
export interface Lista {
  slug: string;
  title: string;
  number: string;
  summary: string;
  tags: string[];
  status: Status;
  itemsCount: string;
  statement?: Doc;
  solutions?: Doc;
}
export interface Prova {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  level?: string;
  status: Status;
  itemsCount: number;
  doc: Doc;
}

// ───────────────────────── parsing básico ─────────────────────────
export function parseDoc(src: string): Doc {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(src);
  if (!m) return { fm: {}, body: src };
  let fm: Record<string, any> = {};
  try {
    fm = (parseYaml(m[1]!) as Record<string, any>) ?? {};
  } catch (e) {
    console.error('Frontmatter inválido', e);
  }
  return { fm, body: m[2] ?? '' };
}

export const slugify = (s: string) =>
  s
    .replace(/\$[^$]*\$/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'secao';

export const plain = (s: string) =>
  s
    .replace(/\$([^$]*)\$/g, (_, t) => t.replace(/\\[a-zA-Z]+/g, '').replace(/[{}^_\\]/g, ''))
    .replace(/[*_`]/g, '')
    .trim();

const ATTR_BLOCK = /\s\{((?:#[\w-]+|kicker="[^"]*"|toc="[^"]*")(?:\s+(?:#[\w-]+|kicker="[^"]*"|toc="[^"]*"))*)\}\s*$/;

/** Numera automaticamente os :::example sem n="…" (e respeita os que têm). */
function autoNumber(body: string): string {
  let n = 0;
  return body.replace(/^(:{3,})example(\{[^}]*\})?[ \t]*$/gm, (_all, colons: string, attrs?: string) => {
    const explicit = attrs && /\bn="([^"]*)"/.exec(attrs);
    if (explicit) {
      if (/^\d+$/.test(explicit[1]!)) n = Number(explicit[1]);
      return _all;
    }
    n += 1;
    const inner = attrs ? attrs.slice(1, -1) + ' ' : '';
    return `${colons}example{${inner}n="${n}"}`;
  });
}

/** Divide o corpo em seções por linhas "## Título {#id kicker="…" toc="…"}". */
export function splitSections(body: string): { intro: string; sections: Section[] } {
  const lines = autoNumber(body).split('\n');
  const heads: { idx: number; title: string; attrs: string }[] = [];
  let fence = false;
  lines.forEach((l, i) => {
    if (/^(```|~~~)/.test(l)) fence = !fence;
    if (fence) return;
    const m = /^##\s+(.*)$/.exec(l);
    if (!m) return;
    let title = m[1]!.trim();
    let attrs = '';
    const a = ATTR_BLOCK.exec(title);
    if (a) {
      attrs = a[1]!;
      title = title.slice(0, a.index).trim();
    }
    heads.push({ idx: i, title, attrs });
  });
  const intro = lines.slice(0, heads[0]?.idx ?? lines.length).join('\n').trim();
  const used = new Set<string>();
  const sections = heads.map((h, k) => {
    const text = lines.slice(h.idx + 1, heads[k + 1]?.idx ?? lines.length).join('\n').trim();
    let id = /#([\w-]+)/.exec(h.attrs)?.[1] ?? slugify(h.title);
    while (used.has(id)) id += '-2';
    used.add(id);
    return {
      id,
      title: h.title,
      toc: /toc="([^"]*)"/.exec(h.attrs)?.[1] ?? plain(h.title),
      kicker: /kicker="([^"]*)"/.exec(h.attrs)?.[1],
      body: text,
      cheat: /^:{3,}cheat/.test(text),
    } satisfies Section;
  });
  return { intro, sections };
}

/** Provas / exercícios: "## instrução" agrupa; "### item" é cada questão (com a resolução logo abaixo). */
export function splitEntries(body: string): { intro: string; groups: Group[] } {
  const lines = body.split('\n');
  const groups: Group[] = [];
  const introLines: string[] = [];
  let g: Group | null = null;
  let e: { heading: string; lines: string[] } | null = null;
  let fence = false;
  const closeEntry = () => {
    if (!e) return;
    if (!g) groups.push((g = { title: '', entries: [] }));
    const m = /^((?:[a-zα-ω]|\d+)\))\s+(.*)$/i.exec(e.heading);
    g.entries.push({ heading: m ? m[2]! : e.heading, letter: m?.[1], body: e.lines.join('\n').trim() });
    e = null;
  };
  for (const l of lines) {
    if (/^(```|~~~)/.test(l)) fence = !fence;
    const h2 = !fence && /^##\s+(.*)$/.exec(l);
    const h3 = !fence && /^###\s+(.*)$/.exec(l);
    if (h2) {
      closeEntry();
      groups.push((g = { title: h2[1]!.trim(), entries: [] }));
    } else if (h3) {
      closeEntry();
      e = { heading: h3[1]!.trim(), lines: [] };
    } else if (e) e.lines.push(l);
    else if (!g) introLines.push(l);
  }
  closeEntry();
  return { intro: introLines.join('\n').trim(), groups };
}

export const countEntries = (body: string) => splitEntries(body).groups.reduce((n, g) => n + g.entries.length, 0);

// ───────────────────────── carregamento ─────────────────────────
export const site: SiteConfig = parseYaml(Object.values(siteFile)[0] ?? '') as SiteConfig;

const byPath = (re: RegExp) =>
  Object.entries(files)
    .map(([path, src]) => ({ path, m: re.exec(path), doc: parseDoc(src) }))
    .filter((x) => x.m);

const num = (v: unknown, fallback = 999) => {
  const n = parseFloat(String(v ?? ''));
  return Number.isNaN(n) ? fallback : n;
};
const status = (v: unknown): Status => (v === 'soon' ? 'soon' : 'available');

// /content/topicos/<slug>/teoria.md  (+ exercicios.md)
export const topics: Topic[] = byPath(/\/topicos\/([^/]+)\/teoria\.md$/)
  .map(({ m, doc }) => {
    const slug = m![1]!;
    const ex = byPath(new RegExp(`/topicos/${slug}/exercicios\\.md$`))[0]?.doc;
    return {
      slug,
      title: doc.fm.title ?? slug,
      number: String(doc.fm.number ?? ''),
      summary: doc.fm.summary ?? '',
      status: status(doc.fm.status),
      theory: doc,
      exercises: ex,
      exerciseCount: ex ? countEntries(ex.body) : 0,
    } satisfies Topic;
  })
  .sort((a, b) => num(a.number) - num(b.number) || a.slug.localeCompare(b.slug));

// /content/listas/<slug>/enunciado.md + resolucoes.md
export const listas: Lista[] = [...new Set(byPath(/\/listas\/([^/]+)\/[^/]+\.md$/).map((x) => x.m![1]!))]
  .map((slug) => {
    const statement = byPath(new RegExp(`/listas/${slug}/enunciado\\.md$`))[0]?.doc;
    const solutions = byPath(new RegExp(`/listas/${slug}/resolucoes\\.md$`))[0]?.doc;
    const fm = { ...(solutions?.fm ?? {}), ...(statement?.fm ?? {}) };
    return {
      slug,
      title: fm.title ?? slug,
      number: String(fm.number ?? ''),
      summary: fm.summary ?? '',
      tags: fm.tags ?? [],
      status: status(fm.status),
      itemsCount: String(fm.itemsCount ?? '130+'),
      statement,
      solutions,
    } satisfies Lista;
  })
  .sort((a, b) => num(a.number) - num(b.number));

// /content/provas/<slug>.md
export const provas: Prova[] = byPath(/\/provas\/([^/]+)\.md$/)
  .map(({ m, doc }) => ({
    slug: m![1]!,
    title: doc.fm.title ?? m![1]!,
    summary: doc.fm.summary ?? '',
    tags: doc.fm.tags ?? [],
    level: doc.fm.level,
    status: status(doc.fm.status),
    itemsCount: doc.fm.status === 'soon' ? 0 : countEntries(doc.body),
    doc,
  }))
  .sort((a, b) => num(a.slug.replace(/\D+/g, '')) - num(b.slug.replace(/\D+/g, '')));

export const getTopic = (slug?: string) => topics.find((t) => t.slug === slug);
export const getLista = (slug?: string) => listas.find((l) => l.slug === slug);
export const getProva = (slug?: string) => provas.find((p) => p.slug === slug);
