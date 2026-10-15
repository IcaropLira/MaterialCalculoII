# Cálculo II — sistema de estudo

Site estático (sem build, sem framework) para teoria, listas, exercícios comentados
e provas resolvidas de Cálculo II. Pensado para você (dev) adicionar,
editar ou remover conteúdo mexendo em pouquíssimos lugares — sem tocar em
CSS ou duplicar HTML de header/footer em cada página nova.

## Como rodar localmente

Não tem build step. Duas opções:

1. **Abrir direto no navegador** (`index.html`, duplo clique) — funciona,
   porque header/footer/dados são só `<script>` normais, sem `fetch`.
2. **Servir com um servidor local** (recomendado, mais fiel ao deploy):
   ```bash
   npx serve .
   # ou
   python3 -m http.server 8000
   ```

## Estrutura de pastas

```
index.html                                    → home (gera os cards sozinha)
topicos/
  integracao-por-partes.html                  → teoria
  integracao-por-partes-exercicios.html       → lista de exercícios
  calc2_lista02.html                          → Lista 02 resolvida
  _template.html                              → copie para criar um tópico novo
provas/
  prova-1.html
  _template.html                              → copie para criar uma prova nova
assets/
  css/
    tokens.css        → cores, fontes, espaçamentos (mude a cor 1x, propaga pro site todo)
    base.css           → reset, header, footer, layout de página, botões
    components.css      → cards, steps, tabelas, folha de prova, gabarito etc.
  js/
    site-data.js        → ⭐ ÚNICO lugar que você edita pra add/remover tópico ou prova
    layout.js            → desenha o header/footer a partir de site-data.js
    home.js               → desenha os cards da home a partir de site-data.js
    katex-init.js          → liga a renderização de matemática (KaTeX)
```

## Adicionar um tópico novo

1. Copie `topicos/_template.html` para `topicos/nome-do-topico.html`.
2. Escreva o conteúdo (o template já tem exemplos de `.note`, `.warn`,
   `.example` com `.step`, fórmula em destaque etc — reaproveite as classes).
3. Se for ter exercícios, duplique o padrão de
   `topicos/integracao-por-partes-exercicios.html` num novo arquivo
   `topicos/nome-do-topico-exercicios.html`.
4. Abra **`assets/js/site-data.js`** e acrescente um objeto no array
   `TOPICS`:
   ```js
   {
     id: "nome-do-topico",
     number: "02",
     title: "Nome do tópico",
     summary: "Descrição curta de 1-2 frases.",
     status: "available",
     links: [
       { label: "Ver teoria",    href: "topicos/nome-do-topico.html" },
       { label: "X exercícios",  href: "topicos/nome-do-topico-exercicios.html" }
     ]
   }
   ```
5. Pronto — o card aparece na home sozinho, sem tocar em `index.html`.

Se o tópico ainda não está pronto mas você já quer reservar o lugar dele
na home, use `status: "soon"` e omita `links` — o card aparece cinza,
travado, com a etiqueta "em breve" (é assim que os tópicos 04–07 já estão
configurados agora).

## Adicionar uma prova nova

1. Copie `provas/_template.html` para `provas/prova-N.html`.
2. Preencha o **Enunciado** (bloco `.sheet`) e o **Gabarito** (blocos
   `.gab-item`, cada um com `<details>` escondendo a resolução em `.step`).
3. Acrescente um objeto no array `PROVAS` em `assets/js/site-data.js`:
   ```js
   {
     id: "prova-2",
     title: "Prova 2",
     itemsCount: 5,
     tags: ["frações parciais", "impróprias"],
     summary: "Descrição curta.",
     status: "available",
     href: "provas/prova-2.html"
   }
   ```

## Adicionar uma lista de exercícios

1. Crie a página dentro de `topicos/`, usando `calc2_lista02.html` como
  referência para o header, navegação lateral, conteúdo e footer compartilhados.
2. Acrescente um objeto no array `LISTAS` em **`assets/js/site-data.js`**:
  ```js
  {
    id: "lista-01",
    number: "01",
    title: "Lista 01",
    itemsCount: 20,
    tags: ["técnica 1", "técnica 2"],
    summary: "Descrição curta da lista.",
    status: "available",
    href: "topicos/calc2_lista01.html"
  }
  ```
3. O card aparece automaticamente na seção **Listas de exercícios** da home.

## Mudar cor, fonte ou nome do site

- Cores/raios/medidas → `assets/css/tokens.css` (é só isso, nada mais).
- Nome da marca, texto do rodapé, autor, link do repositório, itens do
  menu → objeto `SITE` no topo de `assets/js/site-data.js`.

## Convenções

- Todo link interno é relativo. Páginas na raiz usam caminhos normais
  (`assets/css/...`); páginas em `topicos/` e `provas/` usam `../` na
  frente (`../assets/css/...`) porque estão uma pasta abaixo.
- `renderHeader({ active, base })` e `renderFooter({ base, related })` são
  chamados no fim de cada página (veja qualquer página existente como
  referência). `active` é a chave do item de menu que deve ficar destacado
  (`"home"`, `"topicos"` ou `"provas"`); `base` é `""` na raiz e `"../"`
  dentro de uma subpasta.
- Componentes visuais (caixinha de nota, aviso, passo a passo, tabela
  LIATE, tabular/DI, folha de prova, gabarito, cards) já existem prontos
  em `components.css` — evite criar CSS novo por página; se precisar de
  um componente novo que vá se repetir, acrescente-o lá.

## Deploy

O repositório já aponta para
`https://github.com/Hiraku-L/MaterialCalculoII`. Sendo um site 100%
estático, o caminho mais simples é **GitHub Pages**: em Settings → Pages,
aponte para a branch `main` (pasta raiz) e o site fica público em
`https://hiraku-l.github.io/MaterialCalculoII/`. Qualquer outro host
estático (Netlify, Vercel, Cloudflare Pages) também funciona sem nenhuma
configuração adicional — é só apontar para a raiz do repositório.
