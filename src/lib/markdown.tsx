/*
  markdown.tsx — Markdown + matemática (KaTeX) + "caixinhas" do site.

  Sintaxe das caixinhas (veja README para exemplos):
    :::note[Título]        :::warn[Título]       :::formula[Rótulo]
    ::::example{n="A"}  (#### Título + passos numerados)
    :::result{kind="diverge"}      :::tabular      :::grid
    :::cta{label="…" href="/…"}    :::next{kicker="…"}    :::cheat
    texto inline:  :conv[convergente]  :div[divergente]
*/
import { Fragment, useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';
import 'katex/dist/katex.min.css';

type N = any;

const cls = (...c: string[]) => ({ hProperties: { className: c } });
const el = (tag: string, classes: string[], children: N[], extra: Record<string, unknown> = {}): N => ({
  type: 'paragraph',
  data: { hName: tag, hProperties: { className: classes, ...extra } },
  children,
});
const txt = (value: string): N => ({ type: 'text', value });

/** tira o rótulo `[…]` do início de um container directive */
function takeLabel(node: N): N[] | null {
  const first = node.children?.[0];
  if (first?.data?.directiveLabel) {
    node.children.shift();
    return first.children;
  }
  return null;
}

function remarkSiteBoxes() {
  return (tree: N) => {
    visit(tree, (node: N) => {
      // ── inline: :conv[...] :div[...]
      if (node.type === 'textDirective') {
        if (node.name === 'conv' || node.name === 'div') {
          node.data = { hName: 'span', ...cls('conclusion-tag', node.name) };
        }
        return;
      }
      if (node.type === 'leafDirective' && node.name === 'result') {
        node.data = { hName: 'div', ...cls('result-box') };
        return;
      }
      if (node.type !== 'containerDirective') return;
      const a = node.attributes ?? {};

      switch (node.name) {
        case 'note':
        case 'warn': {
          const label = takeLabel(node);
          const kids = node.children;
          node.data = { hName: 'div', ...cls(node.name) };
          if (label) node.children = [el('span', [`${node.name}-label`], label), ...kids];
          break;
        }
        case 'formula': {
          const label = takeLabel(node);
          const kids = node.children;
          node.data = { hName: 'div', ...cls('formula-block') };
          if (label) node.children = [el('div', ['formula-label'], label), ...kids];
          break;
        }
        case 'result': {
          const k = a.kind === 'diverge' ? 'diverge' : a.kind === 'converge' ? 'converg' : '';
          node.data = { hName: 'div', ...cls('result-box', ...(k ? [k] : [])) };
          break;
        }
        case 'example': {
          const kids: N[] = node.children;
          const head = kids[0]?.type === 'heading' ? kids.shift() : null;
          node.data = { hName: 'div', ...cls('example') };
          node.children = [
            el('div', ['example-head'], [
              el('span', ['example-num'], [txt(String(a.n ?? ''))]),
              el('span', ['example-title'], head?.children ?? []),
            ]),
            el('div', ['example-body'], kids),
          ];
          break;
        }
        case 'tabular': {
          for (const c of node.children) if (c.type === 'table') c.data = { ...(c.data ?? {}), hProperties: { className: ['di-table'] } };
          node.data = { hName: 'div', ...cls('di-wrap') };
          break;
        }
        case 'grid': {
          const items: N[] = [];
          for (const c of node.children) {
            if (c.type !== 'list') continue;
            for (const li of c.children) items.push(el('div', ['formula'], li.children[0]?.type === 'paragraph' ? li.children[0].children : li.children));
          }
          node.data = { hName: 'div', ...cls('grid2') };
          node.children = items;
          break;
        }
        case 'cta': {
          const kids: N[] = node.children.map((c: N) =>
            c.type === 'heading' ? el('span', ['cta-label'], c.children) : c,
          );
          node.data = { hName: 'div', ...cls('cta-more') };
          node.children = [
            el('div', ['cta-text'], kids),
            { type: 'link', url: a.href ?? '#', data: cls('cta-btn'), children: [txt(a.label ?? 'Abrir')] },
          ];
          break;
        }
        case 'next': {
          const out: N[] = [];
          if (a.kicker) out.push(el('div', ['kicker'], [txt(a.kicker)]));
          for (const c of node.children) {
            if (c.type === 'heading') out.push({ ...c, depth: 3, data: cls('sub-title') });
            else if (c.type === 'list') {
              const pills = c.children.map((li: N) => {
                const p = li.children[0];
                const link = p?.children?.find((x: N) => x.type === 'link');
                if (link) {
                  link.data = cls('next-pill');
                  return link;
                }
                return el('span', ['next-pill'], p?.children ?? []);
              });
              out.push(el('div', ['next-list'], pills));
            } else out.push(c);
          }
          node.data = { hName: 'div', ...cls('next') };
          node.children = out;
          break;
        }
        case 'cheat': {
          const cards: N[] = [];
          let cur: N[] | null = null;
          for (const c of node.children) {
            if (c.type === 'heading') {
              cur = [el('h4', [], c.children)];
              cards.push(el('div', ['cheat-card'], cur));
            } else cur?.push(c);
          }
          node.data = { hName: 'div', ...cls('cheat-grid') };
          node.children = cards;
          break;
        }
        default:
          node.data = { hName: 'div', ...cls(`box-${node.name}`) };
      }
    });
  };
}

// ───────────────────────── componentes ─────────────────────────
const isInternal = (href: string) => href.startsWith('/') && !href.startsWith('//');

const components: Components = {
  a({ href = '', children, className }) {
    if (isInternal(href)) return <Link to={href} className={className}>{children}</Link>;
    if (href.startsWith('#')) return <a href={href} className={className}>{children}</a>;
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
  },
  // a tabela do método tabular (:::tabular) mantém a classe própria
  table({ children, className }) {
    return /di-table/.test(String(className ?? '')) ? (
      <table className="di-table">{children}</table>
    ) : (
      <div className="table-wrap"><table>{children}</table></div>
    );
  },
};

const inlineComponents: Components = {
  ...components,
  p: ({ children }) => <Fragment>{children}</Fragment>,
};

const remarkPlugins = [remarkGfm, remarkMath, remarkDirective, remarkSiteBoxes];
const rehypePlugins: any[] = [rehypeRaw, [rehypeKatex, { throwOnError: false, strict: 'ignore' }]];

export function Md({ children }: { children: string }) {
  return useMemo(
    () => (
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
        {children}
      </ReactMarkdown>
    ),
    [children],
  );
}

/** Markdown de uma linha só (títulos, enunciados): sem <p> em volta. */
export function MdInline({ children }: { children: string }) {
  return useMemo(
    () => (
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={inlineComponents}>
        {children}
      </ReactMarkdown>
    ),
    [children],
  );
}
