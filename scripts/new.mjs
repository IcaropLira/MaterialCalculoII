#!/usr/bin/env node
/*
  new.mjs — cria um arquivo .md novo já com o esqueleto certo.

    npm run novo -- topico  "Séries de potências"
    npm run novo -- lista   "Lista 02"
    npm run novo -- prova                       (próximo número automático)
*/
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [kind, ...rest] = process.argv.slice(2);
const title = rest.join(' ').trim();
const slugify = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n) => String(n).padStart(2, '0');
const out = (path, text) => {
  if (existsSync(path)) { console.error('Já existe: ' + path); process.exit(1); }
  mkdirSync(join(path, '..'), { recursive: true });
  writeFileSync(path, text);
  console.log('Criado  ' + path);
};
const nextNumber = (dir, re) => 1 + Math.max(0, ...readdirSync(dir).map((n) => Number((re.exec(n) ?? [])[1] ?? 0)));

if (kind === 'topico') {
  if (!title) { console.error('Uso: npm run novo -- topico "Título do tópico"'); process.exit(1); }
  const slug = slugify(title);
  const dirs = readdirSync('content/topicos');
  const num = pad(1 + dirs.length);
  out(`content/topicos/${slug}/teoria.md`, `---
title: "${title}"
number: "${num}"
summary: "Descrição curta (1–2 frases) que aparece no card da home."
status: available        # troque para "soon" para reservar o lugar como "em breve"
eyebrow: "cálculo ii · técnicas de integração"
lede: "Uma frase explicando o que este tópico resolve e por que importa."
formula: "\\\\int f(x)\\\\,dx"
---

## Primeira seção {#primeira kicker="introdução"}

Texto da seção. Matemática: $x^2 + 1$ no meio do texto, ou em destaque:

$$
\\int_0^1 x\\,dx = \\frac{1}{2}
$$

:::note[Ideia central]
Uma observação importante.
:::

:::warn[Atenção]
Um erro comum.
:::

## Exemplos {#exemplos kicker="prática guiada"}

:::example
#### Título do exemplo

1. Primeiro passo.

   $$
   \\int x\\,dx
   $$

2. Segundo passo.

:::result
$\\dfrac{x^2}{2} + C$
:::
:::
`);
  out(`content/topicos/${slug}/exercicios.md`, `---
title: "Exercícios — ${title}"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Tente resolver antes de abrir cada resolução."
---

### Calcule $\\int x\\,dx$.

Resolução comentada aqui: $\\dfrac{x^2}{2} + C$.

### Calcule $\\int 2x\\,dx$.

Resolução: $x^2 + C$.
`);
} else if (kind === 'lista') {
  if (!title) { console.error('Uso: npm run novo -- lista "Lista 02"'); process.exit(1); }
  const slug = slugify(title);
  const num = pad(1 + readdirSync('content/listas').length);
  out(`content/listas/${slug}/enunciado.md`, `---
title: "${title}"
number: "${num}"
summary: "Descrição curta da lista."
tags: ["técnica 1", "técnica 2"]
itemsCount: "20"
heading: "${title}: enunciados"
eyebrow: "cálculo ii · lista de exercícios"
lede: "A lista organizada por assunto para você resolver no seu ritmo."
---

## Integração por partes {#por-partes}

### 1. Resolva as integrais.

1. $\\displaystyle \\int x e^x\\,dx$
2. $\\displaystyle \\int x\\cos x\\,dx$
`);
  out(`content/listas/${slug}/resolucoes.md`, `---
title: "${title} resolvida"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Resolução comentada, técnica por técnica."
---

## Integração por partes {#por-partes}

:::example{n="1a"}
#### $\\int x e^x\\,dx$ — polinômio × exponencial

1. $u = x$, $dv = e^x dx$.
2. $= x e^x - e^x + C$.
:::
`);
} else if (kind === 'prova') {
  const n = nextNumber('content/provas', /prova-(\d+)/);
  out(`content/provas/prova-${n}.md`, `---
title: "Prova ${n}"
summary: "Descrição curta do que esta prova cobre."
tags: ["assunto 1", "assunto 2"]
level: "médio"
eyebrow: "cálculo ii · prova resolvida"
lede: "Descrição curta do que esta prova cobre."
instruction: "Resolva no papel antes de abrir o gabarito."
---

## Calcule as integrais.

### a) $\\displaystyle \\int x e^x\\,dx$

1. Por partes, com $u = x$ e $dv = e^x dx$.
2. Integrando o que sobrou:

   $$
   xe^x - e^x + C
   $$

:::result
$e^x(x-1) + C$
:::

### b) $\\displaystyle \\int \\ln x\\,dx$

Resolução aqui.

## Estude a convergência.

### $\\displaystyle \\int_1^{\\infty} \\frac{1}{x^2}\\,dx$

Questão com um item só: sem letra no "###".

:::result{kind="converge"}
Converge para $1$.
:::
`);
} else {
  console.error('Uso: npm run novo -- topico|lista|prova ["Título"]');
  process.exit(1);
}
