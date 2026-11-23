---
title: "2025.1 · Reposição do 2º Estágio (manhã)"
summary: "Impróprias com arco-tangente e $\\frac1{\\sqrt x}$, comparação que leva à divergência, por partes, $\\cos^4x$, substituição trigonométrica e frações parciais."
tags: ["impróprias", "comparação", "por partes", "trigonométricas", "subst. trigonométrica", "frações parciais"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Reposição do 2º estágio (manhã, 22/09/2025): integrais impróprias e técnicas de integração, resolvidas passo a passo."
instruction: "Resolva no papel antes de abrir o gabarito."
gabaritoIntro: "Cada item começa pela técnica e pelo porquê; depois vêm as contas e a conclusão."
cta: {"text": "Reveja frações parciais (fator quadrático irredutível) no tópico de teoria.", "label": "Frações parciais", "href": "/topicos/fracoes-parciais"}
---

## Calcule as integrais impróprias.

### a) $\displaystyle\int_1^{\infty}\frac{1}{x^2+4}\,dx$

1. Fórmula: $\displaystyle\int\frac{dx}{x^2+a^2}=\frac1a\operatorname{arctg}\frac xa$, com $a=2$.
2. Limite:

   $$
   \lim_{b\to\infty}\frac12\Big[\operatorname{arctg}\frac x2\Big]_1^b=\frac12\left(\frac\pi2-\operatorname{arctg}\frac12\right).
   $$

3. Como $\frac\pi2-\operatorname{arctg}\frac12=\operatorname{arctg}2$ (ângulos complementares), dá para escrever de forma mais curta.

:::result{kind="converge"}
**Converge** e vale $\dfrac\pi4-\dfrac12\operatorname{arctg}\dfrac12=\dfrac12\operatorname{arctg}2\approx0{,}554$.
:::

### b) $\displaystyle\int_0^1\frac{1}{\sqrt x}\,dx$

1. $\displaystyle\lim_{a\to0^+}\Big[2\sqrt x\Big]_a^1=2-0=2$.

:::result{kind="converge"}
**Converge** e vale $2$.
:::

## Aplique um teste para analisar a convergência da integral imprópria.

### $\displaystyle\int_1^{\infty}\frac{x^2+x}{x^3+1}\,dx$

1. Simplifique: $x^3+1=(x+1)(x^2-x+1)$ e $x^2+x=x(x+1)$, então $\dfrac{x^2+x}{x^3+1}=\dfrac{x}{x^2-x+1}$.
2. Para $x\ge1$: $x^2-x+1\le x^2$ (pois $-x+1\le0$), logo

   $$
   \frac{x}{x^2-x+1}\ge\frac{x}{x^2}=\frac1x>0 .
   $$

3. $\displaystyle\int_1^\infty\frac{dx}{x}=\lim_{b\to\infty}\ln b=\infty$ diverge. Pela comparação, a **maior** também diverge.

:::result{kind="diverge"}
**Diverge**, pois o integrando é $\ge\frac1x$ e $\int_1^\infty\frac{dx}{x}$ diverge.
:::

:::note[Regra de bolso]
Grau do denominador menos grau do numerador $=1$: comporta-se como $\frac1x$ e diverge. Se a diferença for $\ge2$, converge.
:::

## Calcule as seguintes integrais.

### a) $\displaystyle\int(2x^2-3x)e^x\,dx$

1. Por partes: $u=2x^2-3x$, $dv=e^xdx$ $\Rightarrow$ $du=(4x-3)dx$, $v=e^x$:

   $$
   \int(2x^2-3x)e^xdx=(2x^2-3x)e^x-\int(4x-3)e^xdx .
   $$

2. De novo: $\displaystyle\int(4x-3)e^xdx=(4x-3)e^x-\int4e^xdx=(4x-7)e^x$.
3. Junte: $e^x\left(2x^2-3x-4x+7\right)=e^x\left(2x^2-7x+7\right)$.
4. Conferência: $\left[e^x(2x^2-7x+7)\right]'=e^x(2x^2-7x+7+4x-7)=e^x(2x^2-3x)$ ✓.

:::result
$e^x\left(2x^2-7x+7\right)+C$
:::

### b) $\displaystyle\int_0^{\pi/4}\cos^4x\,dx$

**Técnica.** Potência **par**: reduza com $\cos^2x=\frac{1+\cos2x}{2}$.

1. $\cos^4x=\left(\dfrac{1+\cos2x}{2}\right)^2=\dfrac14\left(1+2\cos2x+\cos^22x\right)$.
2. Reduza de novo: $\cos^22x=\dfrac{1+\cos4x}{2}$. Então

   $$
   \cos^4x=\frac38+\frac12\cos2x+\frac18\cos4x .
   $$

3. Integre: $\dfrac{3x}{8}+\dfrac{\operatorname{sen}2x}{4}+\dfrac{\operatorname{sen}4x}{32}$.
4. Em $\frac\pi4$: $\dfrac{3\pi}{32}+\dfrac14\operatorname{sen}\dfrac\pi2+\dfrac1{32}\operatorname{sen}\pi=\dfrac{3\pi}{32}+\dfrac14$. Em $0$: $0$.

:::result
$\dfrac{3\pi}{32}+\dfrac14\approx0{,}545$
:::

### c) $\displaystyle\int\sqrt{16-x^2}\,dx$

1. $x=4\operatorname{sen}\theta$, $dx=4\cos\theta\,d\theta$, $\sqrt{16-x^2}=4\cos\theta$.
2. $\displaystyle\int16\cos^2\theta\,d\theta=8\int(1+\cos2\theta)\,d\theta=8\theta+4\operatorname{sen}2\theta=8\theta+8\operatorname{sen}\theta\cos\theta$.
3. Volte: $\operatorname{sen}\theta=\frac x4$, $\cos\theta=\frac{\sqrt{16-x^2}}{4}$, então $8\operatorname{sen}\theta\cos\theta=\frac x2\sqrt{16-x^2}$.

:::result
$8\operatorname{arcsen}\left(\dfrac x4\right)+\dfrac x2\sqrt{16-x^2}+C$
:::

### d) $\displaystyle\int_0^1\frac{dx}{(x+2)(x^2+4)}$

1. $\dfrac{1}{(x+2)(x^2+4)}=\dfrac{A}{x+2}+\dfrac{Bx+C}{x^2+4}\iff1=A(x^2+4)+(Bx+C)(x+2)$.
2. $x=-2$: $1=8A\Rightarrow A=\frac18$. Coeficiente de $x^2$: $0=A+B\Rightarrow B=-\frac18$. Constante: $1=4A+2C\Rightarrow C=\frac14$.
3. Integre:

   $$
   \int\left(\frac{1/8}{x+2}-\frac18\cdot\frac{x}{x^2+4}+\frac14\cdot\frac{1}{x^2+4}\right)dx=\frac18\ln|x+2|-\frac1{16}\ln(x^2+4)+\frac18\operatorname{arctg}\frac x2 .
   $$

4. Avalie de $0$ a $1$:

   $$
   \frac18\ln\frac32-\frac1{16}\ln\frac54+\frac18\operatorname{arctg}\frac12 .
   $$

:::result
$\dfrac18\ln\dfrac32-\dfrac1{16}\ln\dfrac54+\dfrac18\operatorname{arctg}\dfrac12\approx0{,}0947$
:::
