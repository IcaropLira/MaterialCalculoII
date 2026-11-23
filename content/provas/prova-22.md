---
title: "2025.2 · 2º Estágio (tarde)"
summary: "Por partes, potência ímpar de seno, substituição trigonométrica com $\\sqrt{x^2+1}$, frações parciais, imprópria via $x=\\sec\\theta$ e volume com $\\cos x$."
tags: ["por partes", "trigonométricas", "subst. trigonométrica", "frações parciais", "impróprias", "volume"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.2"
lede: "Prova do 2º estágio, turno da tarde (28/01/2026): técnicas de integração, uma imprópria por substituição trigonométrica e um volume de revolução."
instruction: "Calcule sem usar tabela: use as técnicas de integração. Resolva no papel antes de abrir o gabarito."
gabaritoIntro: "Cada item começa pela técnica e pelo porquê; depois vêm as contas e a conferência."
cta: {"text": "As três substituições trigonométricas (seno, tangente, secante) estão explicadas no tópico de teoria.", "label": "Substituição trigonométrica", "href": "/topicos/substituicao-trigonometrica"}
---

## Calcule as integrais abaixo sem usar tabela (use as técnicas de integração).

### a) $\displaystyle\int(2x+1)e^{2x}\,dx$

1. Por partes: $u=2x+1$, $dv=e^{2x}dx$ $\Rightarrow$ $du=2\,dx$, $v=\dfrac{e^{2x}}{2}$.
2. $\displaystyle\int(2x+1)e^{2x}dx=(2x+1)\frac{e^{2x}}{2}-\int\frac{e^{2x}}{2}\cdot2\,dx=(2x+1)\frac{e^{2x}}{2}-\frac{e^{2x}}{2}$.
3. Simplifique: $\dfrac{e^{2x}}{2}(2x+1-1)=xe^{2x}$.
4. Conferência: $(xe^{2x})'=e^{2x}+2xe^{2x}=(2x+1)e^{2x}$ ✓.

:::result
$xe^{2x}+C$
:::

### b) $\displaystyle\int_0^{\pi}\operatorname{sen}^5\left(\frac x2\right)dx$

1. Primeiro tire o $\frac x2$: $u=\frac x2$, $dx=2\,du$, limites $0$ a $\frac\pi2$:

   $$
   \int_0^\pi\operatorname{sen}^5\left(\tfrac x2\right)dx=2\int_0^{\pi/2}\operatorname{sen}^5u\,du .
   $$

2. Potência ímpar: $\operatorname{sen}^5u=(1-\cos^2u)^2\operatorname{sen}u$; com $w=\cos u$, $dw=-\operatorname{sen}u\,du$ (limites $1\to0$):

   $$
   \int_0^{\pi/2}\operatorname{sen}^5u\,du=\int_0^1(1-w^2)^2\,dw=1-\frac23+\frac15=\frac8{15}.
   $$

3. Multiplique por $2$.

:::result
$\dfrac{16}{15}$
:::

### c) $\displaystyle\int\frac{dx}{x^2\sqrt{x^2+1}}$

**Técnica.** $\sqrt{x^2+1}$: $x=\operatorname{tg}\theta$.

1. $dx=\sec^2\theta\,d\theta$, $\sqrt{x^2+1}=\sec\theta$:

   $$
   \int\frac{\sec^2\theta\,d\theta}{\operatorname{tg}^2\theta\,\sec\theta}=\int\frac{\sec\theta}{\operatorname{tg}^2\theta}\,d\theta=\int\frac{1/\cos\theta}{\operatorname{sen}^2\theta/\cos^2\theta}\,d\theta=\int\frac{\cos\theta}{\operatorname{sen}^2\theta}\,d\theta .
   $$

2. $w=\operatorname{sen}\theta$: $\displaystyle\int\frac{dw}{w^2}=-\frac1w=-\frac1{\operatorname{sen}\theta}$.
3. Volte (triângulo: oposto $x$, adjacente $1$, hipotenusa $\sqrt{x^2+1}$): $\operatorname{sen}\theta=\dfrac{x}{\sqrt{x^2+1}}$.

:::result
$-\dfrac{\sqrt{x^2+1}}{x}+C$
:::

### d) $\displaystyle\int\frac{x+3}{2x^3-8x}\,dx$

1. Fatore: $2x^3-8x=2x(x^2-4)=2x(x-2)(x+2)$.
2. Frações parciais:

   $$
   \frac{x+3}{2x(x-2)(x+2)}=\frac Ax+\frac B{x-2}+\frac C{x+2} .
   $$

3. "Tampe" cada fator (método de Heaviside):
   - $x=0$: $A=\dfrac{3}{2\cdot(-2)\cdot2}=-\dfrac38$;
   - $x=2$: $B=\dfrac{5}{2\cdot2\cdot4}=\dfrac5{16}$;
   - $x=-2$: $C=\dfrac{1}{2\cdot(-2)\cdot(-4)}=\dfrac1{16}$.
4. Integre cada termo (todos viram $\ln$).

:::result
$-\dfrac38\ln|x|+\dfrac5{16}\ln|x-2|+\dfrac1{16}\ln|x+2|+C$
:::

## Calcule o valor da integral imprópria abaixo usando o método de substituição trigonométrica. Informe se ela converge ou diverge; justifique.

### $\displaystyle\int_1^{\infty}\frac{1}{x\sqrt{x^2-1}}\,dx$

1. Dois problemas: o $\infty$ e o ponto $x=1$, onde $\sqrt{x^2-1}=0$.
2. $x=\sec\theta$ ($0\le\theta<\frac\pi2$): $dx=\sec\theta\operatorname{tg}\theta\,d\theta$ e $\sqrt{x^2-1}=\operatorname{tg}\theta$:

   $$
   \int\frac{\sec\theta\operatorname{tg}\theta}{\sec\theta\operatorname{tg}\theta}\,d\theta=\int d\theta=\theta=\operatorname{arcsec}x .
   $$

3. Limites: $x\to1^+\Rightarrow\theta\to0$; $x\to\infty\Rightarrow\theta\to\frac\pi2$. Então

   $$
   \int_1^\infty\frac{dx}{x\sqrt{x^2-1}}=\lim_{\substack{a\to1^+\\b\to\infty}}\Big[\operatorname{arcsec}x\Big]_a^b=\frac\pi2-0 .
   $$

:::result{kind="converge"}
**Converge** e vale $\dfrac{\pi}{2}$.
:::

## Determine o volume do sólido gerado pela rotação da região do primeiro quadrante delimitada pelos eixos coordenados e pela curva $y=\cos x$, $0\le x\le\frac\pi2$, em torno do eixo $x$.

### $y=\cos x$, $0\le x\le\frac\pi2$, girando em torno do eixo $x$

1. Discos de raio $\cos x$:

   $$
   V=\pi\int_0^{\pi/2}\cos^2x\,dx=\pi\int_0^{\pi/2}\frac{1+\cos2x}{2}\,dx=\pi\left[\frac x2+\frac{\operatorname{sen}2x}{4}\right]_0^{\pi/2}=\pi\cdot\frac\pi4 .
   $$

2. Conferência por cascas (em $y$, com $x=\arccos y$): $2\pi\int_0^1y\arccos y\,dy=2\pi\cdot\frac\pi8$ ✓.

:::result
$V=\dfrac{\pi^2}{4}\approx2{,}47$ u.v.
:::
