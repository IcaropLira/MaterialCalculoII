/*
  site-data.js
  ============
  ÚNICA FONTE DE VERDADE do conteúdo "estrutural" do site.

  Para ADICIONAR um tópico novo: acrescente um objeto em TOPICS.
  Para ADICIONAR uma lista nova: acrescente um objeto em LISTAS.
  Para ADICIONAR uma prova nova: acrescente um objeto em PROVAS.
  Para REMOVER: apague o objeto (ou mude status para "soon" para deixar
  como "em breve" sem apagar).

  Nenhum outro arquivo precisa ser tocado — index.html lê estes arrays
  e desenha os cards sozinho (veja home.js). O header e o footer também
  são desenhados a partir do objeto SITE (veja layout.js).
*/

window.SITE = {
  brand: { mark: "∫", word: "Cálculo II" },

  tagline: "Material de estudo de Cálculo II — teoria, exercícios comentados e provas resolvidas, tudo no mesmo formato.",

  // usados no header (todas as páginas) e na coluna "Navegação" do footer
  nav: [
    { key: "home",    label: "Início",  href: "index.html" },
    { key: "topicos", label: "Tópicos", href: "index.html#topicos" },
    { key: "listas",  label: "Listas",  href: "index.html#listas" },
    { key: "provas",  label: "Provas",  href: "index.html#provas" }
  ],

  // link para o repositório — aparece no footer como "código-fonte"
  repoUrl: "https://github.com/Hiraku-L/MaterialCalculoII",

  author: "Ícaro Lira",
  footerNote: "Cálculo II · conteúdo em construção"
};

/*
  TOPICS
  ------
  id       -> usado apenas como referência interna
  number   -> número de exibição no card ("01", "02"...)
  title    -> título do card
  summary  -> descrição curta (1-2 frases)
  status   -> "available" (card ativo, com links) | "soon" (card bloqueado, cinza)
  links    -> lista de { label, href } — cada botão do card.
              hrefs são relativos à raiz do site (index.html está na raiz).
*/
window.TOPICS = [
  {
    id: "integracao-por-partes",
    number: "01",
    title: "Integração por partes",
    summary: "A fórmula, de onde ela vem, como escolher u e dv (LIATE), integrais cíclicas, método tabular e 35 exercícios comentados.",
    status: "available",
    links: [
      { label: "Ver teoria",     href: "topicos/integracao-por-partes.html" },
      { label: "35 exercícios",  href: "topicos/integracao-por-partes-exercicios.html" }
    ]
  },
  {
    id: "substituicao-trigonometrica",
    number: "02",
    title: "Substituição trigonométrica",
    summary: "Como resolver integrais com √(a²−x²), √(a²+x²) e √(x²−a²) trocando x por seno, tangente ou secante.",
    status: "available",
    links: [
      { label: "Ver teoria",     href: "topicos/substituicao-trigonometrica.html" },
      //{ label: "35 exercícios",  href: "topicos/integracao-por-partes-exercicios.html" }
    ]
  },
  {
    id: "fracoes-parciais",
    number: "03",
    title: "Frações parciais",
    summary: "Decompondo funções racionais em frações mais simples para integrar termo a termo — casos lineares, repetidos e quadráticos.",
    status: "soon"
  },
  {
    id: "integrais-improprias",
    number: "04",
    title: "Integrais impróprias",
    summary: "Limites de integração infinitos e descontinuidades no integrando — como calcular e como decidir convergência ou divergência.",
    status: "soon"
  },
  {
    id: "sequencias-series",
    number: "05",
    title: "Sequências e séries",
    summary: "Convergência de sequências, séries numéricas, testes de convergência e séries de potências.",
    status: "soon"
  },
  {
    id: "coordenadas-polares",
    number: "06",
    title: "Coordenadas polares",
    summary: "Curvas em coordenadas polares, área entre curvas polares e conversão entre sistemas de coordenadas.",
    status: "soon"
  }
];

/*
  LISTAS
  ------
  status "available" precisa de href (para onde o botão aponta).
  status "soon" não precisa de href — o card fica travado.
*/
window.LISTAS = [
  {
    id: "lista-01",
    number: "01",
    title: "Lista 01",
    itemsCount: "130+",
    tags: ["técnicas de integração", "fórmulas", "classificação"],
    summary: "Resolução comentada e guia de decisão para integração por partes, integrais trigonométricas, substituição trigonométrica, frações parciais e integrais impróprias.",
    status: "available",
    href: "topicos/calc2_lista01-enunciado.html",
    links: [
      { label: "Ver questões", href: "topicos/calc2_lista01-enunciado.html" },
      { label: "Ver resoluções", href: "topicos/calc2_lista01.html" }
    ]
  }
];

/*
  PROVAS
  ------
  status "available" precisa de href (para onde o botão "Resolver prova" aponta).
  status "soon" não precisa de href — o card fica travado.
*/
window.PROVAS = [
  {
    id: "prova-1",
    title: "Prova 1",
    itemsCount: 7,
    tags: ["substituição", "por partes", "frações parciais", "impróprias"],
    summary: "Integrais indefinidas, uma integral definida com frações parciais e duas integrais impróprias com análise de convergência.",
    status: "available",
    href: "provas/prova-1.html"
  },
  {
    id: "prova-2",
    title: "Prova 2",
    itemsCount: 7,
    tags: ["substituição", "por partes", "frações parciais", "impróprias"],
    summary: "Integrais indefinidas, uma integral definida e duas integrais impróprias, cobrindo os principais métodos do Cálculo II.",
    status: "available",
    href: "provas/prova-2.html"
  },
  {
    id: "prova-3",
    title: "Prova 3",
    itemsCount: 6,
    tags: ["substituição", "trigonométrica", "por partes", "impróprias"],
    summary: "Integrais trigonométricas, integração por partes, substituição trigonométrica e convergência de integrais impróprias.",
    status: "available",
    href: "provas/prova-3.html"
  },
  {
    id: "prova-4",
    title: "Prova 4",
    itemsCount: 6,
    tags: ["substituição", "frações parciais", "por partes", "impróprias"],
    summary: "Revisão de técnicas de integração e convergência, com foco em substituição, frações parciais e integrais impróprias.",
    status: "available",
    href: "provas/prova-4.html"
  },
  {
    id: "prova-5",
    title: "Prova 5",
    itemsCount: 7,
    tags: ["por partes", "trigonométrica", "frações parciais", "impróprias"],
    summary: "Prova de revisão final com por partes, substituição trigonométrica, simplificação em frações parciais e análise de convergência.",
    status: "available",
    href: "provas/prova-5.html"
  },
  {
    id: "prova-6",
    title: "Prova 6",
    itemsCount: 6,
    tags: ["frações parciais", "funções racionais", "integração"],
    summary: "Decomposição em frações parciais, integração de funções racionais e identificação dos padrões mais importantes.",
    status: "available",
    href: "provas/prova-6.html"
  },
  {
    id: "prova-7",
    title: "Prova 7",
    itemsCount: 6,
    tags: ["impróprias", "convergência", "limites"],
    summary: "Integrais impróprias com limite no infinito e em pontos de singularidade, avaliando convergência e divergência.",
    status: "available",
    href: "provas/prova-7.html"
  },
  {
    id: "prova-8",
    title: "Prova 8",
    itemsCount: 6,
    tags: ["sequências", "séries", "convergência"],
    summary: "Estudo de sequências e séries, com análise de convergência e soma de séries geométricas e p-séries.",
    status: "available",
    href: "provas/prova-8.html"
  },
  {
    id: "prova-9",
    title: "Prova 9",
    itemsCount: 6,
    tags: ["coordenadas polares", "área", "conversão"],
    summary: "Conversão entre sistemas de coordenadas e cálculo de áreas em coordenadas polares.",
    status: "available",
    href: "provas/prova-9.html"
  }
];
