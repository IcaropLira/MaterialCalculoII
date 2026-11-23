---
title: "2025.1 · 3º Estágio (tarde)"
summary: "Limites de sequências (L'Hôpital e confronto), teste do termo geral, Leibniz, soma de geométricas, série telescópica, raio de convergência e série de Taylor do seno."
tags: ["sequências", "séries", "geométrica", "telescópica", "séries de potências", "Taylor"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Prova do 3º estágio, turno da tarde (17/09/2025): sequências, séries numéricas e séries de potências, com o teste usado justificado em cada item."
instruction: "Resolva no papel antes de abrir o gabarito. Para cada série, diga qual teste usou e por quê."
gabaritoIntro: "Cada item diz qual teste foi escolhido, por que ele se aplica e a conclusão."
cta: {"text": "Os testes de convergência e as séries de Taylor estão no tópico de sequências e séries.", "label": "Sequências e séries", "href": "/topicos/sequencias-series"}
---

## Verifique quais das sequências abaixo são convergentes. Caso seja convergente, determine seu limite.

### a) $a_n=\dfrac{\ln(n+1)}{\sqrt n}$

1. Forma $\frac\infty\infty$. Troque $n$ por $x$ real e use L'Hôpital:

   $$
   \lim_{x\to\infty}\frac{\ln(x+1)}{\sqrt x}=\lim_{x\to\infty}\frac{\frac1{x+1}}{\frac1{2\sqrt x}}=\lim_{x\to\infty}\frac{2\sqrt x}{x+1}=0,
   $$

   pois o denominador cresce como $x$ e o numerador como $\sqrt x$.

:::result{kind="converge"}
**Converge** para $0$.
:::

### b) $b_n=\dfrac{\operatorname{sen}^2n}{2^n}$

1. Como $0\le\operatorname{sen}^2n\le1$: $0\le b_n\le\dfrac1{2^n}$.
2. $\dfrac1{2^n}\to0$. Pelo **teorema do confronto**, $b_n\to0$.

:::result{kind="converge"}
**Converge** para $0$.
:::

## Determine a convergência ou divergência das séries abaixo. Justifique o teste utilizado e, caso seja possível, encontre a sua soma.

### a) $\displaystyle\sum_{n=0}^{\infty}\frac{n}{n+10}$

1. **Teste do termo geral (divergência):** $\displaystyle\lim_{n\to\infty}\frac{n}{n+10}=1\ne0$.
2. Se os termos não vão a zero, a série não pode convergir.

:::result{kind="diverge"}
**Diverge** (termo geral tende a $1\neq0$).
:::

### b) $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n+1}}{n^2+4}$

1. Série alternada com $b_n=\dfrac1{n^2+4}>0$.
2. **Leibniz:** $b_{n+1}=\frac1{(n+1)^2+4}<\frac1{n^2+4}=b_n$ (decrescente) e $b_n\to0$. Logo converge.
3. Mais forte ainda: $\sum\frac{1}{n^2+4}$ converge por comparação com $\sum\frac1{n^2}$, então a série converge **absolutamente**.

:::result{kind="converge"}
**Converge** (absolutamente).
:::

### c) $\displaystyle\sum_{n=0}^{\infty}\frac{7+2^n}{3^n}$

1. Separe em duas geométricas: $\displaystyle\sum_{n=0}^\infty7\left(\frac13\right)^n+\sum_{n=0}^\infty\left(\frac23\right)^n$, ambas com $|r|<1$.
2. Some cada uma com $\dfrac{a}{1-r}$ ($a$ = primeiro termo):

   $$
   \frac{7}{1-\frac13}+\frac{1}{1-\frac23}=7\cdot\frac32+3=\frac{21}{2}+3=\frac{27}{2}.
   $$

:::result{kind="converge"}
**Converge** e a soma é $\dfrac{27}{2}$.
:::

### d) $\displaystyle\sum_{n=1}^{\infty}\left[\ln\left(\sqrt{n+1}\right)-\ln\left(\sqrt n\right)\right]$

1. **Telescópica.** Soma parcial:

   $$
   S_N=\big(\ln\sqrt2-\ln\sqrt1\big)+\big(\ln\sqrt3-\ln\sqrt2\big)+\cdots+\big(\ln\sqrt{N+1}-\ln\sqrt N\big)=\ln\sqrt{N+1}-\ln1 .
   $$

2. $S_N=\frac12\ln(N+1)\to\infty$.

:::result{kind="diverge"}
**Diverge** ($S_N=\frac12\ln(N+1)\to\infty$).
:::

:::warn[Armadilha]
Os termos $a_n=\frac12\ln\left(1+\frac1n\right)$ **tendem a zero**, e mesmo assim a série diverge. Termo indo a zero é necessário, não suficiente.
:::

## Para que valores de $x$ a série converge? Justifique sua resposta.

### $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^nx^{2n}}{2^{2n}(n!)^2}$

1. **Teste da razão** com $a_n=\dfrac{(-1)^nx^{2n}}{2^{2n}(n!)^2}$:

   $$
   \left|\frac{a_{n+1}}{a_n}\right|=\frac{x^{2n+2}}{2^{2n+2}((n+1)!)^2}\cdot\frac{2^{2n}(n!)^2}{x^{2n}}=\frac{x^2}{4(n+1)^2}.
   $$

2. Para qualquer $x$ fixo: $\displaystyle\lim_{n\to\infty}\frac{x^2}{4(n+1)^2}=0<1$.

:::result{kind="converge"}
Converge para **todo** $x\in\mathbb R$ (raio $R=\infty$).
:::

## Encontre a série de Taylor e os polinômios de Taylor gerados por $f(x)=\operatorname{sen}x$ em $a=0$.

### $f(x)=\operatorname{sen}x$, $a=0$

1. Derivadas em $0$ (repetem de 4 em 4):

   | $k$ | $f^{(k)}(x)$ | $f^{(k)}(0)$ |
   |---|---|---|
   | 0 | $\operatorname{sen}x$ | $0$ |
   | 1 | $\cos x$ | $1$ |
   | 2 | $-\operatorname{sen}x$ | $0$ |
   | 3 | $-\cos x$ | $-1$ |
   | 4 | $\operatorname{sen}x$ | $0$ |

2. Só as potências ímpares sobrevivem, com sinais alternados. Série de Taylor (Maclaurin):

   $$
   \operatorname{sen}x=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
   $$

3. Polinômios de Taylor: $P_1=P_2=x$, $P_3=P_4=x-\dfrac{x^3}{6}$, $P_5=P_6=x-\dfrac{x^3}{6}+\dfrac{x^5}{120}$, e assim por diante.
4. Pela razão, $\left|\frac{a_{n+1}}{a_n}\right|=\frac{x^2}{(2n+2)(2n+3)}\to0$: converge para todo $x$.

:::result
$\operatorname{sen}x=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}$, válida para todo $x\in\mathbb R$; $P_{2k+1}(x)=\displaystyle\sum_{n=0}^{k}\frac{(-1)^nx^{2n+1}}{(2n+1)!}$.
:::
