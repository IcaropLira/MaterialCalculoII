---
title: "2026.2 · 1ª Avaliação"
summary: "Substituição, por partes, substituição trigonométrica, frações parciais com fator quadrático e convergência de uma imprópria por comparação."
tags: ["substituição", "por partes", "subst. trigonométrica", "frações parciais", "impróprias"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2026.2"
lede: "1ª Avaliação de 2026.2 (19/10/2026): quatro integrais, cada uma pelo método sugerido no enunciado, e o estudo de convergência de uma imprópria."
instruction: "Resolva as integrais utilizando os métodos sugeridos. Resolva no papel antes de abrir o gabarito."
gabaritoIntro: "Cada item usa exatamente o método pedido no enunciado; quando há atalho, ele aparece como conferência."
cta: {"text": "Reveja os quatro métodos desta prova nos tópicos de teoria.", "label": "Integração por partes", "href": "/topicos/integracao-por-partes"}
---

## Resolva as integrais abaixo utilizando os métodos sugeridos.

### a) $\displaystyle\int_0^1te^{t^2+1}\,dt$, via substituição

1. $u=t^2+1$, $du=2t\,dt\Rightarrow t\,dt=\frac12du$. Limites: $t=0\Rightarrow u=1$; $t=1\Rightarrow u=2$.
2. $\displaystyle\int_0^1te^{t^2+1}dt=\frac12\int_1^2e^u\,du=\frac12\left(e^2-e\right)$.

:::result
$\dfrac{e^2-e}{2}=\dfrac{e(e-1)}{2}\approx2{,}34$
:::

### b) $\displaystyle\int(x+1)\operatorname{sen}(2x)\,dx$, via integração por partes

1. $u=x+1$, $dv=\operatorname{sen}(2x)\,dx$ $\Rightarrow$ $du=dx$, $v=-\dfrac{\cos(2x)}{2}$.
2. $\displaystyle\int(x+1)\operatorname{sen}2x\,dx=-\frac{(x+1)\cos2x}{2}+\frac12\int\cos2x\,dx=-\frac{(x+1)\cos2x}{2}+\frac{\operatorname{sen}2x}{4}$.
3. Conferência derivando: $-\frac{\cos2x}{2}+(x+1)\operatorname{sen}2x+\frac{\cos2x}{2}=(x+1)\operatorname{sen}2x$ ✓.

:::result
$-\dfrac{(x+1)\cos(2x)}{2}+\dfrac{\operatorname{sen}(2x)}{4}+C$
:::

### c) $\displaystyle\int x\sqrt{x^2+4}\,dx$, via substituição trigonométrica

1. $\sqrt{x^2+4}$: $x=2\operatorname{tg}\theta$, $dx=2\sec^2\theta\,d\theta$, $\sqrt{x^2+4}=2\sec\theta$.
2. A integral vira

   $$
   \int2\operatorname{tg}\theta\cdot2\sec\theta\cdot2\sec^2\theta\,d\theta=8\int\sec^2\theta\,(\sec\theta\operatorname{tg}\theta)\,d\theta .
   $$

3. $w=\sec\theta$, $dw=\sec\theta\operatorname{tg}\theta\,d\theta$: $8\displaystyle\int w^2\,dw=\frac{8}{3}\sec^3\theta$.
4. Volte: $\sec\theta=\dfrac{\sqrt{x^2+4}}{2}$, então $\dfrac83\cdot\dfrac{(x^2+4)^{3/2}}{8}=\dfrac13(x^2+4)^{3/2}$.
5. Conferência pela substituição simples $u=x^2+4$: $\frac12\int u^{1/2}du=\frac13u^{3/2}$ ✓ (o enunciado pede a trigonométrica, mas o resultado tem de bater).

:::result
$\dfrac13\left(x^2+4\right)^{3/2}+C$
:::

### d) $\displaystyle\int\frac{x+2}{(x^2+2)(x-1)}\,dx$, via frações parciais

1. Forma: $\dfrac{x+2}{(x^2+2)(x-1)}=\dfrac{A}{x-1}+\dfrac{Bx+C}{x^2+2}\iff x+2=A(x^2+2)+(Bx+C)(x-1)$.
2. $x=1$: $3=3A\Rightarrow A=1$.
3. Coeficiente de $x^2$: $0=A+B\Rightarrow B=-1$. Termo constante: $2=2A-C\Rightarrow C=0$.
4. Integre:

   $$
   \int\left(\frac1{x-1}-\frac{x}{x^2+2}\right)dx=\ln|x-1|-\frac12\ln\left(x^2+2\right)+C .
   $$

:::result
$\ln|x-1|-\dfrac12\ln\left(x^2+2\right)+C$
:::

## Estude a convergência da integral.

### $\displaystyle\int_1^{+\infty}\frac{x^2-1}{x^4+1}\,dx$

1. Sinal: para $x\ge1$, $x^2-1\ge0$, então o integrando é $\ge0$ (podemos usar comparação).
2. Cota superior: $x^2-1<x^2$ e $x^4+1>x^4$, logo

   $$
   0\le\frac{x^2-1}{x^4+1}<\frac{x^2}{x^4}=\frac1{x^2}.
   $$

3. $\displaystyle\int_1^\infty\frac{dx}{x^2}=1$ converge ($p=2>1$). Pela **comparação**, a integral dada converge (e vale menos que $1$).

:::result{kind="converge"}
**Converge** (comparação com $\displaystyle\int_1^\infty\frac{dx}{x^2}$).
:::

:::note[Regra de bolso]
Grau do denominador ($4$) menos grau do numerador ($2$) é $2>1$: o integrando se comporta como $\frac{1}{x^2}$ no infinito, então converge.
:::
