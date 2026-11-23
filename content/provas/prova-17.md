---
title: "2025.1 · Reposição do 2º Estágio (tarde)"
summary: "Duas impróprias divergentes, comparação com $\\frac1{x^2}$, por partes com $e^{-x}$, $\\operatorname{sen}^4x$, substituição trigonométrica com $\\sqrt{9+x^2}$ e frações parciais."
tags: ["impróprias", "comparação", "por partes", "trigonométricas", "subst. trigonométrica", "frações parciais"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Reposição do 2º estágio (tarde, 22/09/2025): integrais impróprias e técnicas de integração, resolvidas passo a passo."
instruction: "Resolva no papel antes de abrir o gabarito."
gabaritoIntro: "Cada item começa pela técnica e pelo porquê; depois vêm as contas e a conclusão."
cta: {"text": "A substituição $x=a\\,\\operatorname{tg}\\theta$ e a integral de $\\sec^3\\theta$ estão no tópico de substituição trigonométrica.", "label": "Substituição trigonométrica", "href": "/topicos/substituicao-trigonometrica"}
---

## Calcule as integrais impróprias.

### a) $\displaystyle\int_1^{\infty}\frac{x^2}{x^3+4}\,dx$

1. Substituição $u=x^3+4$, $du=3x^2dx$: $\displaystyle\int\frac{x^2}{x^3+4}dx=\frac13\ln(x^3+4)+C$.
2. $\displaystyle\lim_{b\to\infty}\frac13\Big[\ln(b^3+4)-\ln5\Big]=+\infty$.

:::result{kind="diverge"}
**Diverge** (comporta-se como $\frac1x$ para $x$ grande).
:::

### b) $\displaystyle\int_{-1}^{0}\frac{1}{x+1}\,dx$

1. O integrando explode em $x=-1$ (ponta inferior): $\displaystyle\lim_{a\to-1^+}\int_a^0\frac{dx}{x+1}$.
2. $\displaystyle\lim_{a\to-1^+}\Big[\ln|x+1|\Big]_a^0=\lim_{a\to-1^+}\big(0-\ln(a+1)\big)=+\infty$, pois $\ln(a+1)\to-\infty$.

:::result{kind="diverge"}
**Diverge** ($\frac1{x+1}$ perto de $-1$ é como $\frac1t$ perto de $0$).
:::

## Aplique um teste para analisar a convergência da integral imprópria.

### $\displaystyle\int_1^{\infty}\frac{x+3}{x^3+1}\,dx$

1. Para $x\ge1$: $x+3\le x+3x=4x$ e $x^3+1>x^3$. Logo

   $$
   0<\frac{x+3}{x^3+1}<\frac{4x}{x^3}=\frac4{x^2}.
   $$

2. $\displaystyle\int_1^\infty\frac4{x^2}dx=4$ converge.
3. Pela comparação, a integral dada converge. (Também dá para usar a comparação no limite: $\frac{x+3}{x^3+1}\big/\frac1{x^2}\to1$.)

:::result{kind="converge"}
**Converge**, por comparação com $\displaystyle\int_1^\infty\frac{4}{x^2}\,dx$.
:::

## Calcule as seguintes integrais.

### a) $\displaystyle\int(x^2-x)e^{-x}\,dx$

1. Por partes: $u=x^2-x$, $dv=e^{-x}dx$ $\Rightarrow$ $du=(2x-1)dx$, $v=-e^{-x}$:

   $$
   \int(x^2-x)e^{-x}dx=-(x^2-x)e^{-x}+\int(2x-1)e^{-x}dx .
   $$

2. De novo: $\displaystyle\int(2x-1)e^{-x}dx=-(2x-1)e^{-x}+\int2e^{-x}dx=-(2x-1)e^{-x}-2e^{-x}=-(2x+1)e^{-x}$.
3. Junte: $-e^{-x}\left(x^2-x+2x+1\right)=-e^{-x}\left(x^2+x+1\right)$.
4. Conferência: $\left[-e^{-x}(x^2+x+1)\right]'=e^{-x}(x^2+x+1)-e^{-x}(2x+1)=e^{-x}(x^2-x)$ ✓.

:::result
$-e^{-x}\left(x^2+x+1\right)+C$
:::

### b) $\displaystyle\int_0^{\pi/4}\operatorname{sen}^4x\,dx$

1. $\operatorname{sen}^4x=\left(\dfrac{1-\cos2x}{2}\right)^2=\dfrac14\left(1-2\cos2x+\cos^22x\right)=\dfrac38-\dfrac12\cos2x+\dfrac18\cos4x$.
2. Antiderivada: $\dfrac{3x}8-\dfrac{\operatorname{sen}2x}{4}+\dfrac{\operatorname{sen}4x}{32}$.
3. Em $\frac\pi4$: $\dfrac{3\pi}{32}-\dfrac14+0$. Em $0$: $0$.

:::result
$\dfrac{3\pi}{32}-\dfrac14\approx0{,}0445$
:::

### c) $\displaystyle\int\sqrt{9+x^2}\,dx$

**Técnica.** $\sqrt{a^2+x^2}$: $x=3\operatorname{tg}\theta$.

1. $dx=3\sec^2\theta\,d\theta$, $\sqrt{9+x^2}=3\sec\theta$. A integral vira $\displaystyle9\int\sec^3\theta\,d\theta$.
2. Integral clássica (por partes com $u=\sec\theta$, $dv=\sec^2\theta\,d\theta$):

   $$
   \int\sec^3\theta\,d\theta=\frac12\sec\theta\operatorname{tg}\theta+\frac12\ln|\sec\theta+\operatorname{tg}\theta|+C .
   $$

3. Volte para $x$: $\operatorname{tg}\theta=\frac x3$, $\sec\theta=\frac{\sqrt{9+x^2}}{3}$:

   $$
   9\left[\frac12\cdot\frac{\sqrt{9+x^2}}{3}\cdot\frac x3+\frac12\ln\left|\frac{\sqrt{9+x^2}+x}{3}\right|\right]=\frac x2\sqrt{9+x^2}+\frac92\ln\left|x+\sqrt{9+x^2}\right|+C .
   $$

   (O $-\frac92\ln3$ é constante e foi absorvido no $C$.)

:::result
$\dfrac x2\sqrt{9+x^2}+\dfrac92\ln\left(x+\sqrt{9+x^2}\right)+C$
:::

### d) $\displaystyle\int_0^1\frac{dx}{(x+2)(x^2+4)}$

1. Frações parciais: $1=A(x^2+4)+(Bx+C)(x+2)$ dá $A=\frac18$, $B=-\frac18$, $C=\frac14$ (faça $x=-2$, depois compare os coeficientes de $x^2$ e o termo constante).
2. Antiderivada: $\dfrac18\ln|x+2|-\dfrac1{16}\ln(x^2+4)+\dfrac18\operatorname{arctg}\dfrac x2$.
3. De $0$ a $1$:

:::result
$\dfrac18\ln\dfrac32-\dfrac1{16}\ln\dfrac54+\dfrac18\operatorname{arctg}\dfrac12\approx0{,}0947$
:::
