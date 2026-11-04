---
title: "Prova 8"
summary: "Estudo de sequências e séries, com análise de convergência e soma de séries geométricas e p-séries."
tags: ["sequências", "séries", "convergência"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Sequências e séries: convergência, termos gerais, séries geométricas e testes básicos."
instruction: "Decida sobre convergência e, quando possível, encontre o valor da série."
gabaritoIntro: "Convergência de sequências e séries começa pela análise do limite e pela identificação do tipo de série."
cta: {"text": "Sequências e séries são fundamentais para entender o comportamento de aproximações e da soma infinita como limite de somas parciais.", "label": "Revisar a lista de Cálculo II", "href": "/listas/lista-01/resolucoes"}
---

## Estude a sequência.

### a) $a_n = \dfrac{n}{n+1}$

1. Calculamos o limite:

   $$
   \lim_{n\to\infty}\frac{n}{n+1} = \lim_{n\to\infty}\frac{1}{1+1/n}=1
   $$

2. Como o limite é finito, a sequência converge para 1.

:::result{kind="converge"}
A sequência converge para 1.
:::

### b) $a_n = \dfrac{(-1)^n}{n}$

1. O termo alterna de sinal, mas em módulo vale:

   $$
   \left|\frac{(-1)^n}{n}\right| = \frac{1}{n}
   $$

2. Como $1/n\to0$, temos:

   $$
   \lim_{n\to\infty}\frac{(-1)^n}{n}=0
   $$

   Portanto, a sequência converge para 0.

:::result{kind="converge"}
A sequência converge para 0.
:::

## Determine se a série converge.

### $\displaystyle \sum_{n=1}^{\infty} \left(\frac{1}{3}\right)^n$

1. Essa é uma série geométrica com razão $r=1/3$.

   $$
   |r|<1
   $$

   Logo, a série converge.

2. A soma é dada por

   $$
   S=\frac{a_1}{1-r}
   $$

   com $a_1=1/3$:

   $$
   S=\frac{1/3}{1-1/3}=\frac{1/3}{2/3}=\frac12
   $$

:::result{kind="converge"}
A série converge e sua soma é $\frac12$.
:::

## Teste a convergência da série.

### $\displaystyle \sum_{n=1}^{\infty} \frac{1}{n^2}$

1. Essa é uma série p, com $p=2>1$.

   $$
   \sum \frac{1}{n^p} \text{ converge se } p>1
   $$

   Logo, ela converge.

2. O valor exato é conhecido:

   $$
   \sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}
   $$

:::result{kind="converge"}
A série converge, e a soma é $\pi^2/6$.
:::
