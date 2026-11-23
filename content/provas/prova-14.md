---
title: "2025.1 · 2º Estágio (manhã)"
summary: "Integrais impróprias (log e $\\ln x$ em $0$), teste da comparação, por partes com polinômio, potência ímpar de seno, substituição trigonométrica e frações parciais."
tags: ["impróprias", "comparação", "por partes", "trigonométricas", "subst. trigonométrica", "frações parciais"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Prova do 2º estágio, turno da manhã: técnicas de integração e integrais impróprias, resolvidas passo a passo."
instruction: "Resolva no papel antes de abrir o gabarito. Nas impróprias, escreva sempre o limite: é isso que a correção cobra."
gabaritoIntro: "Cada item começa pela técnica escolhida e o porquê; depois vêm as contas e a resposta."
cta: {"text": "Reveja as técnicas usadas nesta prova nos tópicos de teoria.", "label": "Integrais impróprias", "href": "/topicos/integrais-improprias"}
---

## Calcule as integrais impróprias.

### a) $\displaystyle\int_2^{\infty}\frac{x}{x^2-1}\,dx$

1. Escreva como limite: $\displaystyle\int_2^\infty\frac{x}{x^2-1}dx=\lim_{b\to\infty}\int_2^b\frac{x}{x^2-1}dx$.
2. Substituição $u=x^2-1$, $du=2x\,dx$: $\displaystyle\int\frac{x}{x^2-1}dx=\frac12\ln|x^2-1|+C$.
3. Avalie:

   $$
   \lim_{b\to\infty}\frac12\Big[\ln(b^2-1)-\ln3\Big]=+\infty .
   $$

:::result{kind="diverge"}
**Diverge** (o valor vai para $+\infty$).
:::

:::note[Intuição]
Para $x$ grande, $\frac{x}{x^2-1}\approx\frac1x$, e $\int^\infty\frac{dx}{x}$ diverge.
:::

### b) $\displaystyle\int_0^1\ln x\,dx$

1. O problema está em $x=0$ ($\ln x\to-\infty$): $\displaystyle\int_0^1\ln x\,dx=\lim_{a\to0^+}\int_a^1\ln x\,dx$.
2. Por partes: $u=\ln x$, $dv=dx$ $\Rightarrow$ $du=\frac1x dx$, $v=x$:

   $$
   \int\ln x\,dx=x\ln x-\int x\cdot\frac1x\,dx=x\ln x-x .
   $$

3. Avalie: $\Big[x\ln x-x\Big]_a^1=(0-1)-(a\ln a-a)$.
4. Limite que falta: $\displaystyle\lim_{a\to0^+}a\ln a=\lim_{a\to0^+}\frac{\ln a}{1/a}\overset{\text{L'H}}{=}\lim_{a\to0^+}\frac{1/a}{-1/a^2}=\lim_{a\to0^+}(-a)=0$.
5. Logo a integral vale $-1-0+0=-1$.

:::result{kind="converge"}
**Converge** e vale $-1$.
:::

## Aplique um teste para analisar a convergência da integral imprópria.

### $\displaystyle\int_1^{\infty}\frac{1}{x^3+1}\,dx$

1. Para $x\ge1$: $x^3+1>x^3>0$, então $0<\dfrac1{x^3+1}<\dfrac1{x^3}$.
2. A integral maior converge ($p$-integral com $p=3>1$):

   $$
   \int_1^\infty\frac{dx}{x^3}=\lim_{b\to\infty}\left[-\frac1{2x^2}\right]_1^b=\frac12 .
   $$

3. Pelo **teste da comparação**, a menor também converge (e vale menos que $\frac12$).

:::result{kind="converge"}
**Converge**, por comparação com $\displaystyle\int_1^\infty\frac{dx}{x^3}=\frac12$.
:::

## Calcule as seguintes integrais.

### a) $\displaystyle\int(x^2-5x)e^x\,dx$

**Técnica.** Polinômio $\times$ exponencial: **por partes** derivando o polinômio (duas vezes, até ele sumir).

1. $u=x^2-5x$, $dv=e^xdx$ $\Rightarrow$ $du=(2x-5)dx$, $v=e^x$:

   $$
   \int(x^2-5x)e^xdx=(x^2-5x)e^x-\int(2x-5)e^xdx .
   $$

2. De novo: $u=2x-5$, $dv=e^xdx$ $\Rightarrow$ $du=2dx$, $v=e^x$:

   $$
   \int(2x-5)e^xdx=(2x-5)e^x-2e^x=(2x-7)e^x .
   $$

3. Junte: $(x^2-5x)e^x-(2x-7)e^x=e^x\left(x^2-7x+7\right)$.
4. Conferência derivando: $e^x(x^2-7x+7)+e^x(2x-7)=e^x(x^2-5x)$ ✓.

:::result
$e^x\left(x^2-7x+7\right)+C$
:::

### b) $\displaystyle\int_0^{\pi/2}\operatorname{sen}^5x\,dx$

**Técnica.** Potência **ímpar** de seno: separe um $\operatorname{sen}x$ e troque o resto por cossenos.

1. $\operatorname{sen}^5x=(\operatorname{sen}^2x)^2\operatorname{sen}x=(1-\cos^2x)^2\operatorname{sen}x$.
2. $u=\cos x$, $du=-\operatorname{sen}x\,dx$; limites: $x=0\Rightarrow u=1$, $x=\frac\pi2\Rightarrow u=0$:

   $$
   \int_0^{\pi/2}\operatorname{sen}^5x\,dx=\int_1^0(1-u^2)^2(-du)=\int_0^1\left(1-2u^2+u^4\right)du .
   $$

3. $\left[u-\dfrac{2u^3}{3}+\dfrac{u^5}{5}\right]_0^1=1-\dfrac23+\dfrac15=\dfrac{15-10+3}{15}=\dfrac8{15}$.

:::result
$\dfrac{8}{15}$
:::

### c) $\displaystyle\int\sqrt{25-t^2}\,dt$

**Técnica.** $\sqrt{a^2-t^2}$ com $a=5$: **substituição trigonométrica** $t=5\operatorname{sen}\theta$.

1. $t=5\operatorname{sen}\theta$, $dt=5\cos\theta\,d\theta$, $\sqrt{25-t^2}=5\cos\theta$ (para $-\frac\pi2\le\theta\le\frac\pi2$).
2. $\displaystyle\int\sqrt{25-t^2}\,dt=\int5\cos\theta\cdot5\cos\theta\,d\theta=25\int\cos^2\theta\,d\theta=\frac{25}{2}\int(1+\cos2\theta)\,d\theta$.
3. $=\dfrac{25}{2}\left(\theta+\dfrac{\operatorname{sen}2\theta}{2}\right)+C=\dfrac{25}{2}\left(\theta+\operatorname{sen}\theta\cos\theta\right)+C$.
4. Volte para $t$ (triângulo: hipotenusa 5, cateto oposto $t$, adjacente $\sqrt{25-t^2}$): $\theta=\operatorname{arcsen}\frac t5$, $\operatorname{sen}\theta=\frac t5$, $\cos\theta=\frac{\sqrt{25-t^2}}{5}$.
5. $\dfrac{25}{2}\cdot\dfrac{t}{5}\cdot\dfrac{\sqrt{25-t^2}}{5}=\dfrac t2\sqrt{25-t^2}$.

:::result
$\dfrac{25}{2}\operatorname{arcsen}\left(\dfrac t5\right)+\dfrac t2\sqrt{25-t^2}+C$
:::

### d) $\displaystyle\int_0^1\frac{dx}{(x+1)(x^2+1)}$

**Técnica.** Frações parciais com um fator linear e um quadrático irredutível.

1. $\dfrac1{(x+1)(x^2+1)}=\dfrac{A}{x+1}+\dfrac{Bx+C}{x^2+1}\iff1=A(x^2+1)+(Bx+C)(x+1)$.
2. $x=-1$: $1=2A\Rightarrow A=\frac12$. Coeficiente de $x^2$: $0=A+B\Rightarrow B=-\frac12$. Termo constante: $1=A+C\Rightarrow C=\frac12$.
3. Integre cada parte:

   $$
   \int_0^1\left(\frac{1/2}{x+1}-\frac12\cdot\frac{x}{x^2+1}+\frac12\cdot\frac1{x^2+1}\right)dx=\left[\frac12\ln|x+1|-\frac14\ln(x^2+1)+\frac12\operatorname{arctg}x\right]_0^1 .
   $$

4. Em $x=1$: $\frac12\ln2-\frac14\ln2+\frac12\cdot\frac\pi4$; em $x=0$: $0$.

:::result
$\dfrac{\ln2}{4}+\dfrac{\pi}{8}\approx0{,}566$
:::
