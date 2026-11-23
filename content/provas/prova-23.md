---
title: "2025.2 · 3º Estágio (tarde)"
summary: "Sequências com raiz $n$-ésima e $n!/n^n$, geométrica e telescópica com $\\ln$, comparação, teste da raiz, teste da razão, $p$-série e intervalo de convergência com extremos."
tags: ["sequências", "séries", "teste da raiz", "teste da razão", "séries de potências"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.2"
lede: "Prova do 3º estágio, turno da tarde (16/03/2026): sequências, séries numéricas e uma série de potências com análise dos extremos."
instruction: "Justifique todas as respostas. Resolva no papel antes de abrir o gabarito."
gabaritoIntro: "Cada item diz qual teste foi escolhido, por que ele se aplica e a conclusão."
cta: {"text": "Os testes da razão, da raiz e de comparação estão no tópico de sequências e séries.", "label": "Sequências e séries", "href": "/topicos/sequencias-series"}
---

## Quais das sequências convergem? Quais divergem? Encontre o limite das sequências convergentes.

### a) $a_n=8^{1/n}$

1. O expoente $\frac1n\to0$, e $x\mapsto8^x$ é contínua: $8^{1/n}\to8^0=1$.

:::result{kind="converge"}
**Converge** para $1$.
:::

### b) $a_n=\sqrt[n]{\dfrac{2n}{n+1}}$

1. A base $\dfrac{2n}{n+1}\to2$ fica presa entre $1$ e $2$ para $n\ge1$: $1\le\dfrac{2n}{n+1}<2$.
2. Logo $1\le a_n<2^{1/n}$. Como $2^{1/n}\to1$, pelo confronto $a_n\to1$.
3. (Alternativa: $\ln a_n=\frac1n\ln\frac{2n}{n+1}\to0\cdot\ln2=0$.)

:::result{kind="converge"}
**Converge** para $1$.
:::

### c) $a_n=\dfrac{n!}{n^n}$

1. $a_n=\dfrac1n\cdot\dfrac2n\cdots\dfrac nn\le\dfrac1n$ (todos os fatores após o primeiro são $\le1$).
2. $0<a_n\le\frac1n\to0$: confronto.

:::result{kind="converge"}
**Converge** para $0$.
:::

## Determine se as séries convergem ou divergem. Para as séries convergentes, determine a sua soma.

### a) $\displaystyle\sum_{n=1}^{\infty}\frac{2}{10^n}$

1. Geométrica com primeiro termo $a=\frac2{10}$ e razão $r=\frac1{10}$.
2. $S=\dfrac{a}{1-r}=\dfrac{2/10}{9/10}=\dfrac29$. (Faz sentido: $0{,}222\ldots=\frac29$.)

:::result{kind="converge"}
**Converge** e a soma é $\dfrac29$.
:::

### b) $\displaystyle\sum_{n=1}^{\infty}\ln\left(\frac{n}{n+1}\right)$

1. $\ln\frac n{n+1}=\ln n-\ln(n+1)$: **telescópica**.
2. $S_N=(\ln1-\ln2)+(\ln2-\ln3)+\cdots+(\ln N-\ln(N+1))=-\ln(N+1)\to-\infty$.

:::result{kind="diverge"}
**Diverge** ($S_N=-\ln(N+1)\to-\infty$).
:::

## Determine se as séries convergem ou divergem.

### a) $\displaystyle\sum_{n=2}^{\infty}\frac{\operatorname{sen}^2n}{2^n}$

1. $0\le\dfrac{\operatorname{sen}^2n}{2^n}\le\dfrac1{2^n}$.
2. $\sum\frac1{2^n}$ é geométrica com $r=\frac12$: converge. **Comparação**: converge.

:::result{kind="converge"}
**Converge** (comparação com $\sum\frac1{2^n}$).
:::

### b) $\displaystyle\sum_{n=2}^{\infty}\frac{n}{(\ln n)^n}$

1. Expoente $n$ no denominador: **teste da raiz**.

   $$
   \sqrt[n]{\frac{n}{(\ln n)^n}}=\frac{n^{1/n}}{\ln n}.
   $$

2. $n^{1/n}\to1$ e $\ln n\to\infty$, então o limite é $0<1$.

:::result{kind="converge"}
**Converge** (teste da raiz, limite $0$).
:::

### c) $\displaystyle\sum_{n=1}^{\infty}\frac{3^n\,n!\,n!}{(2n)!}$

1. Fatoriais: **teste da razão**.

   $$
   \frac{a_{n+1}}{a_n}=\frac{3^{n+1}((n+1)!)^2}{(2n+2)!}\cdot\frac{(2n)!}{3^n(n!)^2}=\frac{3(n+1)^2}{(2n+2)(2n+1)} .
   $$

   (Use $(n+1)!=(n+1)\,n!$ e $(2n+2)!=(2n+2)(2n+1)(2n)!$.)

2. Simplifique: $\dfrac{3(n+1)^2}{2(n+1)(2n+1)}=\dfrac{3(n+1)}{2(2n+1)}\to\dfrac34<1$.

:::result{kind="converge"}
**Converge** (teste da razão, limite $\frac34$).
:::

### d) $\displaystyle\sum_{n=1}^{\infty}\frac{3}{\sqrt n}$

1. $3\sum\frac1{n^{1/2}}$ é uma $p$-série com $p=\frac12\le1$.

:::result{kind="diverge"}
**Diverge** ($p$-série com $p=\frac12$).
:::

## Determine o raio e o intervalo de convergência da série.

### $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^n}{\sqrt n}$

1. **Razão:** $\left|\dfrac{a_{n+1}}{a_n}\right|=\sqrt{\dfrac{n}{n+1}}\,|x-1|\to|x-1|$. Converge se $|x-1|<1\iff0<x<2$. Raio $R=1$.
2. Extremos:
   - $x=2$: $\sum\frac{1}{\sqrt n}$, $p$-série com $p=\frac12$: **diverge**.
   - $x=0$: $\sum\frac{(-1)^n}{\sqrt n}$: $\frac1{\sqrt n}$ decresce e tende a $0$, então **converge** por Leibniz (condicionalmente).

:::result
Raio $R=1$; intervalo de convergência $[0,2)$.
:::
