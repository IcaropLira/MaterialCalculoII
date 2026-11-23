---
title: "2025.1 · Reposição da 3ª Avaliação (manhã)"
summary: "Sequências com L'Hôpital e o limite $(1+\\frac1n)^n$, geométricas, comparação, telescópica com tangente, intervalo de convergência e Maclaurin de $e^{-x}$."
tags: ["sequências", "séries", "geométrica", "telescópica", "séries de potências", "Maclaurin"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Reposição da terceira avaliação, turno da manhã: sequências, séries numéricas e séries de potências, com o teste justificado em cada item."
instruction: "Resolva no papel antes de abrir o gabarito. Para cada série, diga qual teste usou e por quê."
gabaritoIntro: "Cada item diz qual teste foi escolhido, por que ele se aplica e a conclusão."
cta: {"text": "Os testes de convergência e as séries de Taylor estão no tópico de sequências e séries.", "label": "Sequências e séries", "href": "/topicos/sequencias-series"}
---

## Quais das sequências abaixo são convergentes? Caso a sequência seja convergente, calcule o seu limite.

### a) $a_n=\dfrac{\ln(n+1)}{\sqrt n}$

1. Forma $\frac\infty\infty$; L'Hôpital na variável real $x$:

   $$
   \lim_{x\to\infty}\frac{\ln(x+1)}{\sqrt x}=\lim_{x\to\infty}\frac{1/(x+1)}{1/(2\sqrt x)}=\lim_{x\to\infty}\frac{2\sqrt x}{x+1}=0 .
   $$

:::result{kind="converge"}
**Converge** para $0$.
:::

### b) $b_n=\left(\dfrac{n}{n+1}\right)^n$

1. Inverta a fração: $\left(\dfrac{n}{n+1}\right)^n=\dfrac{1}{\left(\frac{n+1}{n}\right)^n}=\dfrac{1}{\left(1+\frac1n\right)^n}$.
2. Limite fundamental: $\left(1+\frac1n\right)^n\to e$.

:::result{kind="converge"}
**Converge** para $\dfrac1e$.
:::

:::warn[Armadilha]
"A base tende a 1, então tudo tende a 1" está **errado**: $1^\infty$ é indeterminação. Se preferir, use $\ln b_n=n\ln\frac{n}{n+1}$ e L'Hôpital, que dá $-1$.
:::

## Determine a convergência ou divergência das séries abaixo. Justifique o teste utilizado e, caso seja possível, encontre a sua soma.

### a) $\displaystyle\sum_{n=1}^{\infty}2^{2n}\,3^{1-n}$

1. Reescreva: $2^{2n}3^{1-n}=4^n\cdot\dfrac{3}{3^n}=3\left(\dfrac43\right)^n$.
2. Geométrica de razão $r=\frac43>1$ (os termos crescem; nem vão a zero).

:::result{kind="diverge"}
**Diverge** (geométrica com $r=\frac43>1$).
:::

### b) $\displaystyle\sum_{n=0}^{\infty}\frac{1}{n^2+4}$

1. $0<\dfrac1{n^2+4}\le\dfrac14$ para $n=0$ e $<\dfrac1{n^2}$ para $n\ge1$.
2. $\sum_{n\ge1}\frac1{n^2}$ converge ($p$-série, $p=2>1$). Pela **comparação**, converge.

:::result{kind="converge"}
**Converge** (comparação com $\sum\frac1{n^2}$).
:::

### c) $\displaystyle\sum_{n=0}^{\infty}\left(\frac{5}{2^n}+\frac{2}{3^n}\right)$

1. Duas geométricas com $|r|<1$:

   $$
   \sum_{n=0}^\infty5\left(\tfrac12\right)^n=\frac{5}{1-\frac12}=10,\qquad\sum_{n=0}^\infty2\left(\tfrac13\right)^n=\frac{2}{1-\frac13}=3 .
   $$

:::result{kind="converge"}
**Converge** e a soma é $13$.
:::

### d) $\displaystyle\sum_{n=1}^{\infty}\big(\operatorname{tg}(n)-\operatorname{tg}(n-1)\big)$

1. **Telescópica:** $S_N=(\operatorname{tg}1-\operatorname{tg}0)+(\operatorname{tg}2-\operatorname{tg}1)+\cdots+(\operatorname{tg}N-\operatorname{tg}(N-1))=\operatorname{tg}N$.
2. $\operatorname{tg}N$ **não tem limite**: oscila sem parar e assume valores arbitrariamente grandes, positivos e negativos.

:::result{kind="diverge"}
**Diverge** ($S_N=\operatorname{tg}N$ não converge).
:::

## Para que valores de $x$ a série converge? Justifique!

### $\displaystyle\sum_{n=0}^{\infty}\frac{n(x-5)^n}{3^n}$

1. **Razão:**

   $$
   \left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)|x-5|^{n+1}}{3^{n+1}}\cdot\frac{3^n}{n|x-5|^n}=\frac{n+1}{n}\cdot\frac{|x-5|}{3}\to\frac{|x-5|}{3}.
   $$

2. Converge se $\frac{|x-5|}{3}<1\iff2<x<8$ (raio $R=3$, centro $5$).
3. Extremos (a razão não decide):
   - $x=8$: $\sum n\cdot1^n=\sum n$, termo geral $\to\infty$: diverge.
   - $x=2$: $\sum n(-1)^n$, termo geral não vai a zero: diverge.

:::result
Converge para $2<x<8$, isto é, no intervalo $(2,8)$ (raio $3$).
:::

## Encontre a série de Maclaurin da função $f(x)=e^{-x}$.

### $f(x)=e^{-x}$

1. Derivadas: $f^{(k)}(x)=(-1)^ke^{-x}$, logo $f^{(k)}(0)=(-1)^k$.
2. Série: $\displaystyle\sum_{k=0}^\infty\frac{f^{(k)}(0)}{k!}x^k=\sum_{k=0}^\infty\frac{(-1)^kx^k}{k!}$.
3. Atalho: trocar $x$ por $-x$ em $e^x=\sum\frac{x^k}{k!}$ dá o mesmo resultado.
4. Razão: $\frac{|x|}{k+1}\to0$, converge para todo $x$.

:::result
$e^{-x}=\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^nx^n}{n!}=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\cdots$, para todo $x\in\mathbb R$.
:::
