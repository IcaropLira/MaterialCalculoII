#!/usr/bin/env node
/*
  check-content.mjs — confere os .md de /content ANTES do build e aponta o arquivo/linha de cada problema:
  frontmatter inválido, campos faltando, caixinhas (:::) abertas e não fechadas, "$" sem par.
  Rode com:  npm run check   (o `npm run build` já roda isto sozinho)
*/
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const ROOT = 'content';
const BOXES = new Set(['note', 'warn', 'formula', 'example', 'result', 'tabular', 'grid', 'cta', 'next', 'cheat']);
const errors = [];
const warns = [];
const err = (f, line, msg) => errors.push(`${f}${line ? ':' + line : ''}  ${msg}`);
const warn = (f, line, msg) => warns.push(`${f}${line ? ':' + line : ''}  ${msg}`);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(ROOT).filter((f) => f.endsWith('.md'));
const seen = { number: new Map() };

for (const path of files) {
  const f = relative('.', path);
  const src = readFileSync(path, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(src);
  if (!m) { err(f, 1, 'faltou o bloco de frontmatter (--- ... ---) no topo'); continue; }
  let fm;
  try { fm = parse(m[1]) ?? {}; } catch (e) { err(f, 2, 'frontmatter inválido: ' + String(e.message).split('\n')[0]); continue; }
  const bodyStart = src.slice(0, src.length - m[2].length).split('\n').length - 1;
  const rel = f.replace(/\\/g, '/');
  if (!fm.title) err(f, 2, 'falta `title:` no frontmatter');
  const isTheory = /topicos\/[^/]+\/teoria\.md$/.test(rel);
  const isProva = /provas\/[^/]+\.md$/.test(rel);
  if (isTheory) {
    for (const k of ['number', 'summary']) if (!fm[k]) err(f, 2, `falta \`${k}:\` no frontmatter`);
    if (fm.number) { const key = String(fm.number); if (seen.number.has(key)) warn(f, 2, `número ${key} repetido (também em ${seen.number.get(key)})`); seen.number.set(key, f); }
  }
  if (isProva && !fm.summary) err(f, 2, 'falta `summary:` no frontmatter');
  if (fm.status && !['available', 'soon'].includes(fm.status)) err(f, 2, '`status:` deve ser available ou soon');
  if (fm.status === 'soon') continue;

  // caixinhas e matemática
  const lines = m[2].split('\n');
  const stack = [];
  let fence = false, mathBlock = false;
  lines.forEach((l, i) => {
    const ln = bodyStart + i + 1;
    if (/^(```|~~~)/.test(l)) fence = !fence;
    if (fence) return;
    const box = /^(:{3,})([A-Za-z-]+)?(\[.*\])?(\{.*\})?\s*$/.exec(l);
    if (box) {
      if (box[2]) {
        if (!BOXES.has(box[2])) err(f, ln, `caixinha desconhecida ":::${box[2]}" (use: ${[...BOXES].join(', ')})`);
        stack.push({ n: box[1].length, name: box[2], ln });
      } else {
        const top = stack.pop();
        if (!top) err(f, ln, 'fechamento ":::" sem abertura');
        else if (top.n !== box[1].length) err(f, ln, `fechamento com ${box[1].length} ":" mas a caixinha :::${top.name} (linha ${top.ln}) abriu com ${top.n}`);
      }
      return;
    }
    if (/^\s*(?:\d+\.|[-*])?\s*\$\$\s*$/.test(l)) { mathBlock = !mathBlock; return; }
    if (mathBlock) return;
    const noCode = l.replace(/`[^`]*`/g, '').replace(/\\\$/g, '');
    const dollars = (noCode.match(/\$/g) ?? []).length;
    if (dollars % 2 === 1 && !/^\s*\$\$/.test(noCode)) warn(f, ln, 'número ímpar de "$" nesta linha (fórmula sem fechar?)');
  });
  for (const t of stack) err(f, t.ln, `caixinha :::${t.name} aberta e nunca fechada`);
  if (mathBlock) err(f, null, 'bloco $$ aberto e nunca fechado');
}

for (const w of warns) console.log('  aviso  ' + w);
for (const e of errors) console.log('  ERRO   ' + e);
console.log(`\n${files.length} arquivos .md · ${errors.length} erro(s) · ${warns.length} aviso(s)`);
process.exit(errors.length ? 1 : 0);
