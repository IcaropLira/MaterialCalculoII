---
title: "2025.1 · Reposição da 3ª Avaliação (tarde)"
summary: "Sequências ($n!/n^n$ e conjugado), comparação com geométrica, convergência absoluta, soma de geométricas e telescópica, intervalo de convergência e Taylor de $\\frac1{x^2}$ em $a=1$."
tags: ["sequências", "séries", "geométrica", "telescópica", "séries de potências", "Taylor"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Reposição da terceira avaliação, turno da tarde: sequências, séries numéricas e séries de potências, com o teste justificado em cada item."
instruction: "Resolva no papel antes de abrir o gabarito. Para cada série, diga qual teste usou e por quê."
gabaritoIntro: "Cada item diz qual teste foi escolhido, por que ele se aplica e a conclusão."
cta: {"text": "Os testes de convergência e as séries de Taylor estão no tópico de sequências e séries.", "label": "Sequências e séries", "href": "/topicos/sequencias-series"}
---

## Quais das sequências abaixo são convergentes? Caso a sequência seja convergente, calcule o seu limite.

### a) $b_n=\dfrac{n!}{n^n}$

1. Escreva como produto de $n$ frações:

   $$
   b_n=\frac{1}{n}\cdot\frac{2}{n}\cdot\frac3n\cdots\frac nn .
   $$

2. Cada fator está em $(0,1]$ e o primeiro é $\frac1n$. Logo $0<b_n\le\dfrac1n$.
3. Confronto: $\frac1n\to0$, então $b_n\to0$.

:::result{kind="converge"}
**Converge** para $0$.
:::

### b) $b_n=n-\sqrt{n^2-n}$

1. Forma $\infty-\infty$: multiplique e divida pelo **conjugado**:

   $$
   b_n=\frac{\left(n-\sqrt{n^2-n}\right)\left(n+\sqrt{n^2-n}\right)}{n+\sqrt{n^2-n}}=\frac{n^2-(n^2-n)}{n+\sqrt{n^2-n}}=\frac{n}{n+\sqrt{n^2-n}} .
   $$

2. Divida por $n$: $b_n=\dfrac{1}{1+\sqrt{1-\frac1n}}\to\dfrac1{1+1}=\dfrac12$.

:::result{kind="converge"}
**Converge** para $\dfrac12$.
:::

## Determine a convergência ou divergência das séries abaixo. Justifique o teste utilizado e, caso seja possível, encontre a sua soma.

### a) $\displaystyle\sum_{n=0}^{\infty}\frac{3^n}{5^n+1}$

1. $0<\dfrac{3^n}{5^n+1}<\dfrac{3^n}{5^n}=\left(\dfrac35\right)^n$.
2. $\sum\left(\frac35\right)^n$ é geométrica com $r=\frac35<1$: converge. Pela **comparação**, a série converge.
3. A soma exata não sai por fórmula elementar (o "$+1$" estraga a geométrica); a prova pede a soma só "caso seja possível".

:::result{kind="converge"}
**Converge** (comparação com a geométrica $\sum(3/5)^n$, que soma $\frac52$; a série dada soma menos que isso).
:::

### b) $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^{n+1}}{n^4+1}$

1. Valor absoluto: $\dfrac1{n^4+1}\le\dfrac1{n^4}$ ($n\ge1$), e $\sum\frac1{n^4}$ converge ($p=4$).
2. Logo a série converge **absolutamente**, e portanto converge. (Leibniz também funciona: $\frac1{n^4+1}$ decresce para $0$.)

:::result{kind="converge"}
**Converge** (absolutamente).
:::

### c) $\displaystyle\sum_{n=0}^{\infty}\frac{5\cdot3^n+2^n}{6^n}$

1. Separe: $\displaystyle5\sum_{n=0}^\infty\left(\frac36\right)^n+\sum_{n=0}^\infty\left(\frac26\right)^n=5\sum\left(\frac12\right)^n+\sum\left(\frac13\right)^n$.
2. Some: $5\cdot\dfrac1{1-\frac12}+\dfrac1{1-\frac13}=10+\dfrac32=\dfrac{23}{2}$.

:::result{kind="converge"}
**Converge** e a soma é $\dfrac{23}{2}$.
:::

### d) $\displaystyle\sum_{n=1}^{\infty}\frac{1}{(n+1)(n+2)}$

1. Frações parciais: $\dfrac1{(n+1)(n+2)}=\dfrac1{n+1}-\dfrac1{n+2}$.
2. **Telescópica:** $S_N=\left(\frac12-\frac13\right)+\left(\frac13-\frac14\right)+\cdots+\left(\frac1{N+1}-\frac1{N+2}\right)=\dfrac12-\dfrac1{N+2}$.
3. $S_N\to\dfrac12$.

:::result{kind="converge"}
**Converge** e a soma é $\dfrac12$.
:::

## Para que valores de $x$ a série converge? Justifique!

### $\displaystyle\sum_{n=0}^{\infty}\frac{n(x+5)^n}{3^n}$

1. **Razão:** $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{n+1}{n}\cdot\dfrac{|x+5|}{3}\to\dfrac{|x+5|}{3}$.
2. Converge se $|x+5|<3\iff-8<x<-2$ (centro $-5$, raio $3$).
3. Extremos:
   - $x=-2$: $\sum n$ diverge (termo geral $\to\infty$);
   - $x=-8$: $\sum n(-1)^n$ diverge (termo geral não vai a $0$).

:::result
Converge para $-8<x<-2$, isto é, no intervalo $(-8,-2)$ (raio $3$).
:::

## Encontre a série de Taylor da função $f(x)=\dfrac{1}{x^2}$ centrada em $a=1$.

### $f(x)=\dfrac1{x^2}$, $a=1$

1. Derivadas: $f(x)=x^{-2}$, $f'(x)=-2x^{-3}$, $f''(x)=6x^{-4}$, $f'''(x)=-24x^{-5}$. Padrão:

   $$
   f^{(n)}(x)=(-1)^n(n+1)!\,x^{-(n+2)}\quad\Rightarrow\quad f^{(n)}(1)=(-1)^n(n+1)! .
   $$

2. Coeficientes: $\dfrac{f^{(n)}(1)}{n!}=(-1)^n\dfrac{(n+1)!}{n!}=(-1)^n(n+1)$.
3. Série:

   $$
   \frac1{x^2}=\sum_{n=0}^{\infty}(-1)^n(n+1)(x-1)^n=1-2(x-1)+3(x-1)^2-4(x-1)^3+\cdots
   $$

4. Convergência pela razão: $\frac{n+2}{n+1}|x-1|\to|x-1|<1$, ou seja, $0<x<2$ (nos extremos o termo geral não vai a zero).
5. **Conferência:** derivando $\frac1x=\sum(-1)^n(x-1)^n$ (geométrica com $r=-(x-1)$) obtemos $-\frac1{x^2}=\sum(-1)^nn(x-1)^{n-1}$, que é a mesma série com o sinal trocado ✓.

:::result
$\dfrac{1}{x^2}=\displaystyle\sum_{n=0}^{\infty}(-1)^n(n+1)(x-1)^n$, válida para $0<x<2$.
:::
