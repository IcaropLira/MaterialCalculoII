---
title: "Sequências e séries"
number: "10"
summary: "Convergência de sequências, séries numéricas, testes de convergência e séries de potências."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Estude limites de sequências e determine se somas infinitas convergem, usando testes adequados."
---

## Sequências e limites {#sequencias}

Uma sequência $(a_n)$ converge para $L$ quando $\lim_{n\to\infty}a_n=L$. Se os termos crescem sem limite ou oscilam sem se aproximar de um valor, diverge. Para quocientes de polinômios, compare os maiores graus.

## Séries e somas parciais {#series}

A série $\sum_{n=1}^{\infty}a_n$ converge se a sequência das somas parciais $S_N=\sum_{n=1}^{N}a_n$ converge. Condição necessária: $a_n\to0$. Se o termo geral não tende a zero, a série diverge.

## Série geométrica e p-série {#geometrica}

$\sum_{n=0}^{\infty} ar^n=\frac a{1-r}$ quando $|r|<1$; diverge se $|r|\geq1$. A p-série $\sum_{n=1}^{\infty}1/n^p$ converge se $p>1$ e diverge se $p\leq1$.

## Testes de convergência {#testes}

Comparação: compare termos positivos com uma série conhecida. Razão: calcule $L=\lim|a_{n+1}/a_n|$; se $L<1$, converge absolutamente; se $L>1$, diverge; se $L=1$, inconclusivo. Integral: para função positiva, contínua e decrescente, compare a série com a integral correspondente.

## Séries alternadas {#alternada}

Uma série $\sum(-1)^{n}b_n$, com $b_n\geq0$, converge se $b_n\to0$ e $b_n$ é decrescente a partir de algum ponto. Convergência absoluta ocorre quando $\sum|a_n|$ converge.

## Como escolher o teste {#erros}

Primeiro teste o termo geral. Reconheça geométrica e p-série. Para fatoriais/exponenciais, tente razão; para potências semelhantes a $1/n^p$, use comparação ou integral; para sinais alternados, teste alternado e depois absoluta.
