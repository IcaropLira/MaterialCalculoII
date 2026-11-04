# Cálculo II — material de estudo

Site de teoria, listas e provas resolvidas de Cálculo II. **Todo o conteúdo mora em arquivos `.md`** na pasta `content/`:
para escrever, corrigir ou adicionar qualquer coisa você só mexe em Markdown — nenhum HTML, CSS ou JavaScript.

```bash
npm install          # uma vez
npm run dev          # abre o site local; ao salvar um .md a página atualiza sozinha
npm run build        # confere o conteúdo e gera a pasta dist/
```

## Onde fica cada coisa

```
content/
  site.yml                          → nome, menu, textos da home, rodapé, link do repositório
  topicos/<slug>/teoria.md          → a teoria de um tópico
  topicos/<slug>/exercicios.md      → exercícios do tópico (opcional)
  listas/<slug>/enunciado.md        → enunciados de uma lista
  listas/<slug>/resolucoes.md       → resolução da lista (opcional)
  provas/prova-N.md                 → uma prova (enunciado + gabarito no mesmo arquivo)
src/styles/tokens.css               → cores, fontes e medidas (tema claro e escuro)
public/                             → logo e favicon
```

As páginas, os cards da home, a barra lateral, os contadores e as rotas são **gerados a partir desses arquivos**. Criou o `.md`, o card aparece.

## Criar algo novo (comando rápido)

```bash
npm run novo -- topico "Séries de potências"   # cria teoria.md + exercicios.md com exemplos
npm run novo -- lista  "Lista 02"               # cria enunciado.md + resolucoes.md
npm run novo -- prova                           # cria o próximo prova-N.md
```

Ou crie o arquivo na mão copiando um existente. Para **reservar um tópico "em breve"**, crie só o `teoria.md` com `status: soon`
(o card aparece cinza e travado). Para **tirar algo do ar**, apague o arquivo ou troque para `status: soon`.

`npm run check` (rodado também no `build`) aponta arquivo e linha de qualquer erro: caixinha `:::` aberta e não fechada, `$` sem par, campo faltando.

## Como escrever

### Frontmatter (o bloco `---` no topo)

```yaml
---
title: "Integração por partes"
number: "01"                 # ordem do card na home
summary: "Texto curto do card."
status: available            # ou: soon
eyebrow: "cálculo ii · técnicas de integração"
lede: "Frase de abertura da página."
formula: "\\int u\\,dv = uv - \\int v\\,du"     # fórmula em destaque no topo (opcional)
---
```

### Seções

Cada `## Título` vira uma seção, e a barra lateral é montada com elas. Opcional, entre chaves: `{#id kicker="texto pequeno" toc="nome curto no menu"}`.

```md
## Como escolher u e dv {#escolha kicker="a parte mais importante" toc="Escolhendo u e dv"}
```

### Matemática

`$ ... $` no meio do texto e `$$ ... $$` em destaque (KaTeX, a mesma sintaxe do LaTeX):

```md
Calcule $\int x e^x\,dx$.

$$
\int u\,dv = uv - \int v\,du
$$
```

### Caixinhas

```md
:::note[Ideia central]
Observação em azul-esverdeado.
:::

:::warn[Atenção]
Erro comum, em tom terracota.
:::

:::formula[Rótulo da fórmula]
$$
\sin^2\theta + \cos^2\theta = 1
$$
:::

::::example
#### Título do exemplo

1. Primeiro passo (a lista numerada vira "passos" com bolinhas).

   $$
   \int x e^x\,dx
   $$

2. Segundo passo.

:::result
$e^x(x-1) + C$
:::
::::
```

Detalhes: o número do exemplo é automático (`::::example{n="A"}` força outro rótulo); `:::result{kind="diverge"}` / `kind="converge"` colorem o resultado;
`:::tabular` (método tabular), `:::grid` (grade de fórmulas), `:::cheat` (resumo em cartões com `####`), `:::cta{label="…" href="/…"}` (chamada com botão),
`:::next` (links para os próximos temas) e, no texto, `:conv[convergente]` / `:div[divergente]`.
Quando uma caixinha tem outra dentro, use mais `:` na de fora (`::::example` … `::::`).

Links internos começam com `/`: `[exercícios](/topicos/integracao-por-partes/exercicios)`.

### Exercícios, listas e provas — o enunciado é escrito uma vez só

`## ` agrupa (a instrução da questão) e cada `### ` é um item; **o que vem logo abaixo é a resolução**:

```md
## Resolva as integrais indefinidas.

### a) $\displaystyle \int x e^x\,dx$

1. Por partes, com $u = x$ e $dv = e^x dx$.
2. Sobra $\int e^x dx$.

:::result
$e^x(x-1) + C$
:::

### b) $\displaystyle \int \ln x\,dx$

Resolução…
```

- **Prova**: a página monta sozinha a folha de enunciado (sem resolução) e o gabarito retrátil. Um `:::result{kind="diverge"}` na resolução já põe a etiqueta "divergente" no gabarito.
- **Exercícios do tópico**: mesma ideia, cada item vira um cartão com "Ver resolução comentada".
- **Lista (enunciado)**: `##` é o assunto, `###` é a questão e os itens a), b)… viram uma lista numerada.
- Frontmatter de prova: `title`, `summary`, `tags: [a, b]`, `level`, `instruction` (texto sob "Enunciado"), `gabaritoIntro`, `cta: {text, label, href}`.

## Tema e identidade visual

- Claro e escuro: botão ☾/☀ no cabeçalho; a escolha fica salva e, na primeira visita, segue o tema do sistema.
- Cores e fontes: **`src/styles/tokens.css`** (`:root` = claro, `[data-theme="dark"]` = escuro). Mudou ali, muda no site todo.
- Logo: `public/logo.svg` (com fundo escuro), `public/logo-mark.svg` (sem fundo) e `public/favicon.svg`. O ∫ é gerado por `python3 scripts/make-logo.py` (ajuste espessura/curva lá).
  Tipografia e degradê rosa→roxo vêm da marca pessoal (Playfair Display, Inter, Fira Code).

## Publicar

- **Vercel / Netlify / Cloudflare Pages**: build `npm run build`, saída `dist`. (O `vercel.json` já faz o rewrite das rotas.)
- **GitHub Pages**: em Settings → Pages escolha *GitHub Actions*; o workflow `.github/workflows/deploy.yml` faz o resto a cada push na `main`.
  Para build manual sob `/<repo>/`: `VITE_BASE=/MaterialCalculoII/ npm run build`.

## Notas

- `scripts/migrate-html-to-md.py` foi o conversor único que transformou o site antigo em HTML nestes `.md`. Fica só como registro; no dia a dia não é usado.
- Os `.md` aceitam HTML pontual (`<sup>`, `<sub>`, `<br />`) quando precisar.
