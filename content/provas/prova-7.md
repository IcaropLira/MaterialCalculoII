---
title: "Prova 7"
summary: "Integrais impróprias com limite no infinito e em pontos de singularidade, avaliando convergência e divergência."
tags: ["impróprias", "convergência", "limites"]
level: "avançado"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Integrais impróprias: limites infinitos, singularidades internas e decisão entre convergência e divergência."
instruction: "Cada integral exige uma interpretação correta do ponto singular ou do limite infinito."
gabaritoIntro: "A regra é transformar a integral imprópria em limite e avaliar exatamente o que acontece quando o ponto singular ou o limite infinito é alcançado."
cta: {"text": "Integrais impróprias são aquelas em que o limite ou o ponto singular precisa ser tratado com cuidado — o teste de convergência é parte central do curso.", "label": "Revisar integrais impróprias", "href": "/listas/lista-01/resolucoes#improp"}
---

## Calcule ou determine a convergência.

### a) $\displaystyle \int_0^\infty e^{-x}\,dx$

1. Como o limite superior é infinito:

   $$
   \int_0^\infty e^{-x}dx = \lim_{t\to\infty}\int_0^t e^{-x}dx
   $$

2. $$
   \int e^{-x}dx = -e^{-x}
   $$

   $$
   \lim_{t\to\infty}[-e^{-x}]_0^t = \lim_{t\to\infty}(-e^{-t}+1)=1
   $$

:::result{kind="converge"}
A integral converge e vale 1.
:::

### b) $\displaystyle \int_1^\infty \frac{1}{x^p}\,dx$ para $p>1$

1. Escrevemos como limite:

   $$
   \lim_{t\to\infty}\int_1^t x^{-p}dx
   $$

2. $$
   \int x^{-p}dx = \frac{x^{1-p}}{1-p} \quad (p\neq1)
   $$

   Como $p>1$, temos $1-p<0$, então ao levar $t\to\infty$, o termo $t^{1-p}\to0$:

   $$
   \lim_{t\to\infty}\left[\frac{x^{1-p}}{1-p}\right]_1^t = \frac{1}{p-1}
   $$

:::result{kind="converge"}
A integral converge para $\frac{1}{p-1}$.
:::

## Determine se convergem ou divergem.

### a) $\displaystyle \int_0^1 \frac{1}{\sqrt{x}}\,dx$

1. Há singularidade em 0, então escrevemos como limite lateral:

   $$
   \int_0^1 x^{-1/2}dx = \lim_{t\to0^+}\int_t^1 x^{-1/2}dx
   $$

2. $$
   \int x^{-1/2}dx = 2x^{1/2}
   $$

   $$
   \lim_{t\to0^+}[2\sqrt{x}]_t^1 = \lim_{t\to0^+}(2-2\sqrt{t})=2
   $$

:::result{kind="converge"}
A integral converge e vale 2.
:::

### b) $\displaystyle \int_0^1 \frac{1}{1-x}\,dx$

1. Temos singularidade em x=1, o extremo superior do intervalo:

   $$
   \lim_{t\to1^-}\int_0^t \frac{dx}{1-x}
   $$

2. $$
   \int \frac{dx}{1-x} = -\ln|1-x|
   $$

   $$
   \lim_{t\to1^-}[-\ln(1-x)]_0^t = \lim_{t\to1^-}(-\ln(1-t)) = +\infty
   $$

   Logo o valor cresce sem limite.

:::result{kind="diverge"}
A integral diverge.
:::

## Calcule a integral imprópria.

### $\displaystyle \int_2^\infty \frac{1}{x^2-1}\,dx$

1. Fatoramos o denominador:

   $$
   x^2-1=(x-1)(x+1)
   $$

   Use frações parciais:

   $$
   \frac{1}{x^2-1}=\frac{A}{x-1}+\frac{B}{x+1}
   $$

   Resolvendo, obtém $A=\frac12$, $B=-\frac12$. Então:

   $$
   \frac{1}{x^2-1}=\frac12\left(\frac{1}{x-1}-\frac{1}{x+1}\right)
   $$

2. $$
   \int_2^\infty \frac{1}{x^2-1}dx = \frac12\lim_{t\to\infty}\int_2^t\left(\frac1{x-1}-\frac1{x+1}\right)dx
   $$

   $$
   = \frac12\lim_{t\to\infty}\left[\ln\left|\frac{x-1}{x+1}\right|\right]_2^t
   $$

3. $$
   = \frac12\lim_{t\to\infty}\left(\ln\left|\frac{t-1}{t+1}\right|-\ln\frac{1}{3}\right) = \frac12\left(0 + \ln 3\right)=\frac12\ln 3
   $$

   Como o limite do quociente tende a 1, obtemos um valor finito.

:::result{kind="converge"}
A integral converge e vale $\frac12\ln 3$.
:::
