---
title: "Prova 4"
summary: "Revisão de técnicas de integração e convergência, com foco em substituição, frações parciais e integrais impróprias."
tags: ["substituição", "frações parciais", "por partes", "impróprias"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Integrais por substituição, por partes, frações parciais e integrais impróprias, em uma revisão focada em técnicas e convergência."
instruction: "Resolva com calma antes de conferir o gabarito."
gabaritoIntro: "Cada item mostra a estratégia correta e o resultado final."
cta: {"text": "Esta prova revisa os temas mais usados em avaliações: substituição, por partes, frações parciais e convergência de integrais impróprias.", "label": "Revisar a lista 01", "href": "/listas/lista-01/resolucoes"}
---

## Calcule as integrais indefinidas.

### a) $\displaystyle \int \sin^2 x\cos^3 x\,dx$

1. A potência de cosseno é ímpar, então separamos um fator $\cos x$ e usamos $\cos^2x=1-\sin^2x$:

   $$
   \sin^2x\cos^3x = \sin^2x\cos^2x\cos x = \sin^2x(1-\sin^2x)\cos x
   $$

2. Faça $u=\sin x$. Então $du=\cos x\,dx$.

   $$
   \int \sin^2x\cos^3x\,dx = \int u^2(1-u^2)du = \int (u^2-u^4)du
   $$

3. $$
   = \frac{u^3}{3} - \frac{u^5}{5}+C
   $$

4. Voltando para x:

:::result
$\displaystyle \int \sin^2 x\cos^3 x\,dx = \frac{\sin^3x}{3}-\frac{\sin^5x}{5}+C$
:::

### b) $\displaystyle \int x e^{-x}\,dx$

1. Produto de uma função polinomial com uma exponencial: integração por partes.

   $$
   u=x, \quad dv=e^{-x}dx
   $$

   $$
   du=dx, \quad v=-e^{-x}
   $$

2. $$
   \int x e^{-x}dx = x(-e^{-x}) - \int (-e^{-x})dx = -x e^{-x} + \int e^{-x}dx
   $$

3. $$
   = -x e^{-x} - e^{-x} + C
   $$

:::result
$\displaystyle \int x e^{-x}\,dx = -(x+1)e^{-x}+C$
:::

### c) $\displaystyle \int \frac{dx}{x^2+4x+3}$

1. Primeiro fatoramos o denominador:

   $$
   x^2+4x+3=(x+1)(x+3)
   $$

2. Escrevemos em frações parciais:

   $$
   \frac{1}{(x+1)(x+3)} = \frac{A}{x+1}+\frac{B}{x+3}
   $$

   $$
   1=A(x+3)+B(x+1)
   $$

3. Resolvendo, temos $A=\frac12$ e $B=-\frac12$. Então

   $$
   \frac{1}{(x+1)(x+3)} = \frac12\left(\frac{1}{x+1}-\frac{1}{x+3}\right)
   $$

4. $$
   \int \frac{dx}{x^2+4x+3} = \frac12\int \left(\frac{1}{x+1}-\frac{1}{x+3}\right)dx
   $$

   $$
   = \frac12\ln|x+1| - \frac12\ln|x+3| + C
   $$

   $$
   = \frac12\ln\left|\frac{x+1}{x+3}\right|+C
   $$

:::result
$\displaystyle \int \frac{dx}{x^2+4x+3} = \frac12\ln\left|\frac{x+1}{x+3}\right| + C$
:::

## Calcule as integrais definidas.

### a) $\displaystyle \int_0^1 \frac{x}{x^2+1}\,dx$

1. Use a substituição $u=x^2+1$, pois $du=2x\,dx$.

   $$
   x\,dx = \frac12 du
   $$

2. $$
   \int_0^1 \frac{x}{x^2+1}\,dx = \frac12\int_1^2 \frac{1}{u}du
   $$

3. $$
   = \frac12[\ln u]_1^2 = \frac12\ln 2
   $$

:::result
$\displaystyle \int_0^1 \frac{x}{x^2+1}\,dx = \frac12\ln 2$
:::

### b) $\displaystyle \int_1^\infty \frac{1}{x^2}\,dx$

1. Como o limite superior é infinito, escrevemos em forma de limite:

   $$
   \int_1^\infty x^{-2}dx = \lim_{t\to\infty}\int_1^t x^{-2}dx
   $$

2. $$
   \int x^{-2}dx = -x^{-1}
   $$

   Logo:

   $$
   \lim_{t\to\infty}\left[-\frac1x\right]_1^t = \lim_{t\to\infty}\left(-\frac1t + 1\right) = 1
   $$

:::result{kind="converge"}
A integral converge e vale 1.
:::

## Determine se a integral imprópria converge ou diverge.

### $\displaystyle \int_0^1 \frac{1}{\sqrt{x}}\,dx$

1. O integrando tem singularidade em $x=0$, então tratamos como limite:

   $$
   \int_0^1 x^{-1/2}dx = \lim_{t\to0^+}\int_t^1 x^{-1/2}dx
   $$

2. $$
   \int x^{-1/2}dx = 2x^{1/2}
   $$

   Portanto:

   $$
   \lim_{t\to0^+}[2\sqrt{x}]_t^1 = \lim_{t\to0^+}(2-2\sqrt{t}) = 2
   $$

:::result{kind="converge"}
A integral converge e seu valor é 2.
:::
