---
title: "Sequências e séries"
number: "10"
summary: "Limites de sequências, séries numéricas, testes de convergência, convergência absoluta e séries de potências."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Construa uma estratégia para estudar limites e somas infinitas: primeiro entenda os termos, depois escolha o teste adequado."
---

## 1. Sequências: definição e limite {#sequencias}

Uma sequência real é uma lista ordenada de números $a_1,a_2,a_3,\ldots$, descrita por uma fórmula ou recorrência. Dizemos que $a_n$ converge para $L$ quando
$$\lim_{n\to\infty}a_n=L.$$
Se não existe um limite real finito, a sequência diverge. Isso pode acontecer porque os termos crescem sem limite, diminuem sem limite ou oscilam sem se aproximar de um único número.

**Ferramentas frequentes:**
- Em quocientes de polinômios, divida pelo maior grau de $n$.
- Se a expressão tem raízes, coloque em evidência a maior potência ou racionalize quando houver diferença de raízes.
- Para expressões exponenciais, compare bases e use limites conhecidos.
- Se houver oscilação, procure subsequências com limites diferentes para provar que o limite não existe.

## 2. Séries e somas parciais {#series}

Uma série é a soma formal de infinitos termos:
$$\sum_{n=1}^{\infty}a_n=a_1+a_2+a_3+\cdots.$$
Ela não é definida simplesmente somando todos os termos de uma vez. Definimos as somas parciais:
$$S_N=a_1+a_2+\cdots+a_N.$$
A série converge quando a sequência $(S_N)$ converge para um número finito. Esse limite é a soma da série.

### Teste do termo geral {#termo-geral}

Se $\sum a_n$ converge, então necessariamente $a_n\to0$. Portanto:
- Se $\lim a_n\ne0$ ou não existe, a série diverge.
- Se $a_n\to0$, ainda não sabemos se a série converge. É preciso outro teste.

A série harmônica $\sum1/n$ é o exemplo clássico de termos que tendem a zero, mas cuja soma diverge.

## 3. Séries geométricas {#geometrica}

Uma série geométrica tem razão constante $r$:
$$a+ar+ar^2+ar^3+\cdots=\sum_{n=0}^{\infty}ar^n.$$
A soma parcial é
$$S_N=a\frac{1-r^{N+1}}{1-r},\quad r\ne1.$$
Se $|r|<1$, então $r^{N+1}\to0$ e
$$\boxed{S=\frac a{1-r}}.$$
Se $|r|\geq1$ e $a\ne0$, a série diverge. Atenção ao índice inicial: uma série iniciada em $n=1$ tem primeiro termo $ar$, não $a$.

## 4. Séries telescópicas {#telescopicas}

Uma série telescópica é organizada para que termos consecutivos se cancelem. Por exemplo:
$$\sum_{n=1}^{N}\left(\frac1n-\frac1{n+1}\right)
=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots.$$
Após o cancelamento:
$$S_N=1-\frac1{N+1}.$$
Tomando $N\to\infty$, a soma é $1$. O procedimento correto é sempre escrever a soma parcial antes de concluir.

## 5. p-séries e comparação {#pseries}

A p-série é
$$\sum_{n=1}^{\infty}\frac1{n^p}.$$
Ela converge se $p>1$ e diverge se $p\leq1$.

**Comparação direta:** para termos não negativos, se $0\leq a_n\leq b_n$ e $\sum b_n$ converge, então $\sum a_n$ converge. Se $0\leq b_n\leq a_n$ e $\sum b_n$ diverge, então $\sum a_n$ diverge.

**Comparação no limite:** se $a_n,b_n>0$ e
$$\lim_{n\to\infty}\frac{a_n}{b_n}=L,\qquad0<L<\infty,$$
as séries têm o mesmo comportamento. Escolha $b_n$ como uma p-série ou geométrica conhecida.

## 6. Teste da integral {#integral}

Se $f$ é positiva, contínua e decrescente em $[1,\infty)$ e $a_n=f(n)$, então
$$\sum_{n=1}^{\infty}a_n$$
e
$$\int_1^{\infty}f(x)dx$$
convergem ou divergem juntas. As três hipóteses importam: não basta encontrar uma função cuja fórmula se pareça com o termo da série.

## 7. Teste da razão e da raiz {#razao-raiz}

**Razão:** calcule
$$L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|.$$
Se $L<1$, a série converge absolutamente; se $L>1$ (ou tende a infinito), diverge; se $L=1$, o teste não decide.

**Raiz:** calcule
$$L=\lim_{n\to\infty}\sqrt[n]{|a_n|}.$$
As mesmas conclusões valem. O teste da raiz costuma ser conveniente quando o termo geral está elevado a $n$; o da razão costuma simplificar fatoriais e produtos.

## 8. Séries alternadas e convergência absoluta {#alternada}

Uma série alternada tem sinais alternados, por exemplo
$$\sum_{n=1}^{\infty}(-1)^{n+1}b_n,\quad b_n\geq0.$$
O teste de Leibniz garante convergência se:
1. $b_n$ é decrescente a partir de algum índice;
2. $b_n\to0$.

Uma série converge **absolutamente** quando $\sum|a_n|$ converge. Converge **condicionalmente** quando $\sum a_n$ converge, mas $\sum|a_n|$ diverge. Se a própria série diverge, não é nem absoluta nem condicionalmente convergente.

## 9. Séries de potências {#potencias}

Uma série de potências centrada em $a$ tem a forma
$$\sum_{n=0}^{\infty}c_n(x-a)^n.$$
Existe um raio $R\in[0,\infty]$ tal que:
- converge absolutamente para $|x-a|<R$;
- diverge para $|x-a|>R$;
- nos extremos $x=a-R$ e $x=a+R$, é necessário testar separadamente.

A razão ou a raiz geralmente determina $R$. Nunca inclua os extremos apenas por terem aparecido na desigualdade do raio: cada extremo é uma série numérica diferente.

## 10. Taylor e Maclaurin {#taylor}

Se $f$ tem derivadas suficientes perto de $a$, seu polinômio de Taylor de grau $n$ é
$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k.
$$
Maclaurin é o caso particular $a=0$. Para construir o polinômio, calcule as derivadas, avalie todas em $a$ e só então substitua na fórmula. Uma série de Taylor infinita representa a função apenas nos pontos em que a série realmente converge para ela.

## 11. Como escolher um teste {#escolha}

1. Calcule $\lim a_n$. Se não for zero, a série diverge.
2. Procure uma série geométrica ou uma p-série disfarçada.
3. Se houver fatoriais ou produtos, tente razão.
4. Se houver uma potência do tipo $[g(n)]^n$, tente raiz.
5. Se os termos forem positivos e lembrarem uma função integrável, verifique as hipóteses do teste da integral.
6. Se os sinais alternarem, teste Leibniz e depois a convergência absoluta.
7. Se houver uma variável $x$, determine o raio e teste os dois extremos separadamente.

:::warn[O que um teste inconclusivo significa]
Quando o teste da razão ou da raiz fornece $L=1$, isso **não** significa que a série diverge nem que converge. Significa apenas que aquele teste não decidiu. Troque de ferramenta.
:::
