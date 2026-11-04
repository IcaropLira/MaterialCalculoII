---
title: "Lista 03 resolvida"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Sequências, séries e séries de potências: todas as questões resolvidas e comentadas passo a passo."
kind: "doc"
---

:::note[Como usar]
Nesta primeira parte da Lista 03 você aprende a **manipular sequências** (calcular termos e decidir se convergem) e a **somar séries** que têm soma exata: as **geométricas** e as **telescópicas**. Os critérios que serão usados:

- **Limite de sequência:** divida numerador e denominador pela maior potência de $n$; use L'Hôpital (trocando $n$ por $x$) em formas $\infty/\infty$ ou $0/0$; use o **confronto** quando houver $(-1)^n$, $\sin n$ ou $\cos n$; lembre que $r^n\to0$ se $|r|<1$.
- **Série geométrica:** $\displaystyle\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r}$ se $|r|<1$ (e $a$ = primeiro termo); diverge se $|r|\ge1$.
- **Série telescópica:** ache a soma parcial $s_n$ (os termos do meio se cancelam) e calcule $\lim s_n$.
:::

## Questão 1 — Termos de uma sequência {#q1}

Basta **substituir** $n=1,2,3,4$ na fórmula do termo geral, com cuidado nos sinais de $(-1)^n$ (expoente par dá $+1$, ímpar dá $-1$).

### a) $a_n=\dfrac{1-(-1)^n}{n}$

- $n=1$: $\dfrac{1-(-1)^1}{1}=\dfrac{1+1}{1}=2$.
- $n=2$: $\dfrac{1-(+1)}{2}=0$.
- $n=3$: $\dfrac{1-(-1)}{3}=\dfrac23$.
- $n=4$: $\dfrac{1-1}{4}=0$.

O numerador vale $2$ para $n$ ímpar e $0$ para $n$ par.

:::result
$a_1=2,\quad a_2=0,\quad a_3=\dfrac23,\quad a_4=0$
:::

### b) $a_n=\dfrac1{n!}$

Lembre que $n!=1\cdot2\cdots n$: $1!=1$, $2!=2$, $3!=6$, $4!=24$.

:::result
$a_1=1,\quad a_2=\dfrac12,\quad a_3=\dfrac16,\quad a_4=\dfrac1{24}$
:::

### c) $a_n=\dfrac{(-1)^{n+1}}{2n-1}$

- $n=1$: $\dfrac{(-1)^2}{1}=1$.
- $n=2$: $\dfrac{(-1)^3}{3}=-\dfrac13$.
- $n=3$: $\dfrac{(-1)^4}{5}=\dfrac15$.
- $n=4$: $\dfrac{(-1)^5}{7}=-\dfrac17$.

Os sinais se alternam começando por $+$; os denominadores são os ímpares.

:::result
$a_1=1,\quad a_2=-\dfrac13,\quad a_3=\dfrac15,\quad a_4=-\dfrac17$
:::

### d) $a_n=2+(-1)^n$

- $n=1$: $2-1=1$; $n=2$: $2+1=3$; $n=3$: $2-1=1$; $n=4$: $2+1=3$.

A sequência oscila entre $1$ e $3$.

:::result
$a_1=1,\quad a_2=3,\quad a_3=1,\quad a_4=3$
:::

### e) $a_n=\dfrac{2^n}{2^{n+1}}$

Simplifique antes: $\dfrac{2^n}{2^{n+1}}=\dfrac{2^n}{2^n\cdot2}=\dfrac12$. A sequência é **constante**.

:::result
$a_1=a_2=a_3=a_4=\dfrac12$
:::

### f) $a_n=\dfrac{2^n-1}{2^n}$

- $n=1$: $\dfrac{2-1}{2}=\dfrac12$; $n=2$: $\dfrac{4-1}{4}=\dfrac34$; $n=3$: $\dfrac78$; $n=4$: $\dfrac{15}{16}$.

Note que $a_n=1-\dfrac1{2^n}$ (cresce rumo a $1$).

:::result
$a_1=\dfrac12,\quad a_2=\dfrac34,\quad a_3=\dfrac78,\quad a_4=\dfrac{15}{16}$
:::

## Questão 2 — Sequências por recorrência {#q2}

Numa recorrência, cada termo é calculado a partir do(s) anterior(es): **comece pelo dado inicial** e aplique a regra repetidamente, uma linha por termo.

### a) $a_1=1,\ a_{n+1}=a_n+\dfrac1{2^n}$

Para obter $a_{n+1}$ somamos $1/2^n$ ao termo anterior:

$$a_2=1+\tfrac12=\tfrac32,\quad a_3=\tfrac32+\tfrac14=\tfrac74,\quad a_4=\tfrac74+\tfrac18=\tfrac{15}8,\quad a_5=\tfrac{15}8+\tfrac1{16}=\tfrac{31}{16},$$

$$a_6=\tfrac{31}{16}+\tfrac1{32}=\tfrac{63}{32},\quad a_7=\tfrac{127}{64},\quad a_8=\tfrac{255}{128},\quad a_9=\tfrac{511}{256},\quad a_{10}=\tfrac{1023}{512}.$$

Padrão: $a_n=2-\dfrac1{2^{n-1}}$ (soma de uma geométrica), que tende a $2$.

:::result
$1,\ \tfrac32,\ \tfrac74,\ \tfrac{15}8,\ \tfrac{31}{16},\ \tfrac{63}{32},\ \tfrac{127}{64},\ \tfrac{255}{128},\ \tfrac{511}{256},\ \tfrac{1023}{512}$
:::

### b) $a_1=1,\ a_{n+1}=\dfrac{a_n}{n+1}$

$$a_2=\tfrac{1}{2},\quad a_3=\tfrac{1/2}{3}=\tfrac16,\quad a_4=\tfrac{1/6}{4}=\tfrac1{24},\quad a_5=\tfrac1{120},\quad a_6=\tfrac1{720},$$

$$a_7=\tfrac1{5040},\quad a_8=\tfrac1{40320},\quad a_9=\tfrac1{362880},\quad a_{10}=\tfrac1{3628800}.$$

Reconhecemos $a_n=\dfrac1{n!}$.

:::result
$1,\ \tfrac12,\ \tfrac16,\ \tfrac1{24},\ \tfrac1{120},\ \tfrac1{720},\ \tfrac1{5040},\ \tfrac1{40320},\ \tfrac1{362880},\ \tfrac1{3628800}$
:::

### c) $a_1=2,\ a_{n+1}=\dfrac{(-1)^{n+1}a_n}{2}$

O fator $(-1)^{n+1}$ usa o índice $n$ do termo **anterior**:

- $n=1$: $a_2=\dfrac{(-1)^2\cdot2}{2}=1$.
- $n=2$: $a_3=\dfrac{(-1)^3\cdot1}{2}=-\dfrac12$.
- $n=3$: $a_4=\dfrac{(-1)^4\cdot(-1/2)}{2}=-\dfrac14$.
- $n=4$: $a_5=\dfrac{(-1)^5\cdot(-1/4)}{2}=\dfrac18$.
- $n=5$: $a_6=\dfrac{(-1)^6\cdot(1/8)}{2}=\dfrac1{16}$.
- $n=6$: $a_7=\dfrac{(-1)^7\cdot(1/16)}{2}=-\dfrac1{32}$.
- $n=7$: $a_8=\dfrac{(-1)^8\cdot(-1/32)}{2}=-\dfrac1{64}$.
- $n=8$: $a_9=\dfrac{(-1)^9\cdot(-1/64)}{2}=\dfrac1{128}$.
- $n=9$: $a_{10}=\dfrac{(-1)^{10}\cdot(1/128)}{2}=\dfrac1{256}$.

:::result
$2,\ 1,\ -\tfrac12,\ -\tfrac14,\ \tfrac18,\ \tfrac1{16},\ -\tfrac1{32},\ -\tfrac1{64},\ \tfrac1{128},\ \tfrac1{256}$
:::

### d) $a_1=-2,\ a_{n+1}=\dfrac{n\,a_n}{n+1}$

$$a_2=\tfrac{1\cdot(-2)}{2}=-1,\quad a_3=\tfrac{2\cdot(-1)}{3}=-\tfrac23,\quad a_4=\tfrac{3\cdot(-2/3)}{4}=-\tfrac12,\quad a_5=\tfrac{4\cdot(-1/2)}{5}=-\tfrac25,$$

$$a_6=\tfrac{5\cdot(-2/5)}{6}=-\tfrac13,\quad a_7=-\tfrac27,\quad a_8=-\tfrac14,\quad a_9=-\tfrac29,\quad a_{10}=-\tfrac15.$$

Padrão: $n\,a_n$ é constante ($=-2$), logo $a_n=-\dfrac2n$.

:::result
$-2,\ -1,\ -\tfrac23,\ -\tfrac12,\ -\tfrac25,\ -\tfrac13,\ -\tfrac27,\ -\tfrac14,\ -\tfrac29,\ -\tfrac15$
:::

### e) $a_1=a_2=1,\ a_{n+2}=a_{n+1}+a_n$ (Fibonacci)

Cada termo é a soma dos dois anteriores:

$$1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34,\ 55.$$

:::result
$a_1,\dots,a_{10}=1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34,\ 55$
:::

### f) $a_1=2,\ a_2=-1,\ a_{n+2}=\dfrac{a_{n+1}}{a_n}$

Cada termo é o **quociente** do anterior pelo antepenúltimo:

- $a_3=\dfrac{a_2}{a_1}=\dfrac{-1}{2}=-\dfrac12$.
- $a_4=\dfrac{a_3}{a_2}=\dfrac{-1/2}{-1}=\dfrac12$.
- $a_5=\dfrac{a_4}{a_3}=\dfrac{1/2}{-1/2}=-1$.
- $a_6=\dfrac{a_5}{a_4}=\dfrac{-1}{1/2}=-2$.
- $a_7=\dfrac{a_6}{a_5}=\dfrac{-2}{-1}=2$.
- $a_8=\dfrac{a_7}{a_6}=\dfrac{2}{-2}=-1$.
- $a_9=\dfrac{a_8}{a_7}=-\dfrac12$, $\ a_{10}=\dfrac{a_9}{a_8}=\dfrac12$.

Como $a_7=a_1$ e $a_8=a_2$, a sequência é **periódica de período 6**.

:::result
$2,\ -1,\ -\tfrac12,\ \tfrac12,\ -1,\ -2,\ 2,\ -1,\ -\tfrac12,\ \tfrac12$
:::

## Questão 3 — Convergência de sequências {#q3}

Uma sequência **converge** se $\lim_{n\to\infty}a_n=L$ for um número real; caso contrário, **diverge** (limite infinito ou inexistente).

### a) $a_n=2+(0{,}1)^n$

Como $|0{,}1|<1$, temos $(0{,}1)^n\to0$. Logo $a_n\to2+0=2$.

:::result{kind="converge"}
**Converge** para $2$.
:::

### b) $a_n=\dfrac{n+(-1)^n}{n}$

Separe a fração: $a_n=1+\dfrac{(-1)^n}{n}$. Como $\left|\dfrac{(-1)^n}{n}\right|=\dfrac1n\to0$, pelo **confronto** ($-\frac1n\le\frac{(-1)^n}n\le\frac1n$) o termo oscilante tende a $0$.

:::result{kind="converge"}
**Converge** para $1$.
:::

### c) $a_n=\dfrac{2n+1}{1-3\sqrt n}$

Divida numerador e denominador por $\sqrt n$ (a maior potência que "manda" no denominador):

$$a_n=\frac{\dfrac{2n+1}{\sqrt n}}{\dfrac{1}{\sqrt n}-3}=\frac{2\sqrt n+\dfrac1{\sqrt n}}{\dfrac1{\sqrt n}-3}.$$

O numerador $\to+\infty$ e o denominador $\to-3$. Portanto $a_n\to-\infty$ (comporta-se como $-\tfrac23\sqrt n$).

:::result{kind="diverge"}
**Diverge** ($a_n\to-\infty$).
:::

### d) $a_n=\dfrac{n+3}{n^2+5n+6}$

Fatore o denominador: $n^2+5n+6=(n+2)(n+3)$. Então $a_n=\dfrac1{n+2}\to0$.

(Alternativa: dividir por $n^2$: $\dfrac{1/n+3/n^2}{1+5/n+6/n^2}\to\dfrac01=0$.)

:::result{kind="converge"}
**Converge** para $0$.
:::

### e) $a_n=\left(\dfrac{n+1}{2n}\right)\left(1-\dfrac1n\right)$

Cada fator tem limite:

$$\frac{n+1}{2n}=\frac12\left(1+\frac1n\right)\to\frac12,\qquad 1-\frac1n\to1.$$

Limite do produto = produto dos limites: $\frac12\cdot1=\frac12$.

:::result{kind="converge"}
**Converge** para $\dfrac12$.
:::

### f) $a_n=\dfrac{\ln n}{\sqrt n}$

Forma $\infty/\infty$. Passe para variável real e use **L'Hôpital**:

$$\lim_{x\to\infty}\frac{\ln x}{\sqrt x}=\lim_{x\to\infty}\frac{1/x}{\dfrac1{2\sqrt x}}=\lim_{x\to\infty}\frac{2\sqrt x}{x}=\lim_{x\to\infty}\frac2{\sqrt x}=0.$$

(A raiz cresce mais rápido que o logaritmo.)

:::result{kind="converge"}
**Converge** para $0$.
:::

### g) $a_n=\dfrac{n!}{n^n}$

Seguindo a dica, escreva

$$a_n=\frac{n}{n}\cdot\frac{n-1}{n}\cdot\frac{n-2}{n}\cdots\frac{2}{n}\cdot\frac1n.$$

Todos os fatores estão em $(0,1]$, e o último é $\frac1n$; os outros $n-1$ fatores são $\le1$. Logo

$$0<a_n\le\frac1n\to0.$$

Pelo **confronto**, $a_n\to0$.

:::result{kind="converge"}
**Converge** para $0$.
:::

### h) $a_n=\left(\dfrac1n\right)^{\frac1{\ln n}}$

Use $a_n=e^{\ln a_n}$:

$$\ln a_n=\frac1{\ln n}\ln\frac1n=\frac{-\ln n}{\ln n}=-1.$$

Logo $a_n=e^{-1}$ para todo $n\ge2$: sequência constante.

:::result{kind="converge"}
**Converge** para $e^{-1}=\dfrac1e$.
:::

### i) $a_n=\ln\left[\left(1+\dfrac1n\right)^n\right]$

Pela propriedade do logaritmo, $a_n=\ln\left[\left(1+\frac1n\right)^n\right]=n\ln\left(1+\frac1n\right)=\dfrac{\ln(1+1/n)}{1/n}$, uma forma $0/0$. Com $x=1/n\to0^+$ e L'Hôpital:

$$\lim_{x\to0^+}\frac{\ln(1+x)}{x}=\lim_{x\to0^+}\frac{1/(1+x)}{1}=1.$$

(Outra via: $\left(1+\frac1n\right)^n\to e$ e $\ln$ é contínuo, então $a_n\to\ln e=1$.)

:::result{kind="converge"}
**Converge** para $1$.
:::

### j) $a_n=\left(\dfrac13\right)^n+\dfrac1{\sqrt{2^n}}$

Reescreva o segundo termo: $\dfrac1{\sqrt{2^n}}=\left(\dfrac1{\sqrt2}\right)^n$. Ambas as razões estão em $(0,1)$: $\frac13<1$ e $\frac1{\sqrt2}\approx0{,}71<1$. Cada parcela $\to0$.

:::result{kind="converge"}
**Converge** para $0$.
:::

### k) $a_n=\left(\dfrac3n\right)^{1/n}$

Forma $0^0$ (base $\to0$, expoente $\to0$). Tome o log:

$$\ln a_n=\frac{\ln3-\ln n}{n}=\frac{\ln3}{n}-\frac{\ln n}{n}\to0-0=0,$$

pois $\frac{\ln n}{n}\to0$ (L'Hôpital: $\frac{1/x}{1}\to0$). Como $e^t$ é contínua, $a_n=e^{\ln a_n}\to e^0=1$.

:::result{kind="converge"}
**Converge** para $1$.
:::

## Questão 4 — Séries geométricas: escreva e some {#q4}

Para $\sum_{n=n_0}^\infty ar^{\,n-n_0}$: **soma $=\dfrac{\text{1º termo}}{1-r}$**, desde que $|r|<1$. Quando a série é soma de duas geométricas, some cada uma separadamente (propriedade de linearidade, válida se **ambas** convergem).

### a) $\displaystyle\sum_{n=0}^\infty\frac{(-1)^n}{4^n}$

Primeiros termos: $1-\dfrac14+\dfrac1{16}-\dfrac1{64}+\cdots$

Reescreva $\dfrac{(-1)^n}{4^n}=\left(-\dfrac14\right)^n$: geométrica com $a=1$ e $r=-\dfrac14$, $|r|<1$.

$$S=\frac{1}{1-(-1/4)}=\frac{1}{5/4}=\frac45.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac45$.
:::

### b) $\displaystyle\sum_{n=0}^\infty\left(\frac5{2^n}+\frac1{3^n}\right)$

Primeiros termos: $(5+1)+\left(\tfrac52+\tfrac13\right)+\left(\tfrac54+\tfrac19\right)+\cdots$

Separe em duas geométricas convergentes:

$$\sum_{n=0}^\infty\frac5{2^n}=5\cdot\frac1{1-\frac12}=10,\qquad \sum_{n=0}^\infty\frac1{3^n}=\frac1{1-\frac13}=\frac32.$$

$$S=10+\frac32=\frac{23}2.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac{23}2$.
:::

### c) $\displaystyle\sum_{n=2}^\infty\frac1{4^n}$

Primeiros termos: $\dfrac1{16}+\dfrac1{64}+\dfrac1{256}+\cdots$ O **primeiro termo** (índice $n=2$) é $a=\frac1{16}$ e $r=\frac14$:

$$S=\frac{1/16}{1-1/4}=\frac{1/16}{3/4}=\frac1{12}.$$

(Conferência: soma de $n=0$ é $\frac1{1-1/4}=\frac43$; retirando $1+\frac14$ resta $\frac43-\frac54=\frac1{12}$ ✓.)

:::result{kind="converge"}
**Converge**, $S=\dfrac1{12}$.
:::

### d) $\displaystyle\sum_{n=1}^\infty\left[\frac1{2^n}+\frac{(-1)^n}{5^n}\right]$

Primeiros termos: $\left(\tfrac12-\tfrac15\right)+\left(\tfrac14+\tfrac1{25}\right)+\left(\tfrac18-\tfrac1{125}\right)+\cdots$

- $\displaystyle\sum_{n=1}^\infty\frac1{2^n}$: $a=\frac12$, $r=\frac12$ $\Rightarrow\ \dfrac{1/2}{1/2}=1$.
- $\displaystyle\sum_{n=1}^\infty\left(-\frac15\right)^n$: $a=-\frac15$, $r=-\frac15$ $\Rightarrow\ \dfrac{-1/5}{1+1/5}=\dfrac{-1/5}{6/5}=-\dfrac16$.

$$S=1-\frac16=\frac56.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac56$.
:::

### e) $\displaystyle\sum_{n=0}^\infty\frac{(-1)^n\,5}{4^n}$

Primeiros termos: $5-\dfrac54+\dfrac5{16}-\dfrac5{64}+\cdots$ Aqui $a=5$ e $r=-\dfrac14$:

$$S=\frac{5}{1+\frac14}=\frac{5}{5/4}=4.$$

:::result{kind="converge"}
**Converge**, $S=4$.
:::

### f) $\displaystyle\sum_{n=0}^\infty\frac{2^{n+1}}{5^n}$

Primeiros termos: $2+\dfrac45+\dfrac8{25}+\cdots$ Escreva $\dfrac{2^{n+1}}{5^n}=2\left(\dfrac25\right)^n$: $a=2$, $r=\dfrac25$.

$$S=\frac{2}{1-\frac25}=\frac{2}{3/5}=\frac{10}3.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac{10}3$.
:::

## Questão 5 — Identificando a série geométrica {#q5}

Procedimento: (1) ache o **primeiro termo** $a$ e a **razão** $r$ (divida um termo pelo anterior); (2) escreva em notação $\Sigma$; (3) compare $|r|$ com $1$.

### a) $1+\left(\dfrac25\right)+\left(\dfrac25\right)^2+\left(\dfrac25\right)^3+\cdots$

Termo geral $\left(\frac25\right)^n$, começando em $n=0$: $\displaystyle\sum_{n=0}^\infty\left(\frac25\right)^n$. Razão $r=\frac25$, $|r|<1$:

$$S=\frac1{1-2/5}=\frac1{3/5}=\frac53.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac53$.
:::

### b) $1+(-3)+(-3)^2+(-3)^3+\cdots$

$\displaystyle\sum_{n=0}^\infty(-3)^n$, razão $r=-3$, com $|r|=3>1$. Os termos $1,-3,9,-27,\dots$ não tendem a $0$ (teste do termo geral), logo a série **diverge**. (A fórmula $\frac1{1-r}$ **não** pode ser usada.)

:::result{kind="diverge"}
**Diverge** ($|r|=3\ge1$).
:::

### c) $\left(\dfrac18\right)+\left(\dfrac18\right)^2+\left(\dfrac18\right)^3+\cdots$

Primeiro expoente é $1$: $\displaystyle\sum_{n=1}^\infty\left(\frac18\right)^n$, $a=\frac18$, $r=\frac18$:

$$S=\frac{1/8}{1-1/8}=\frac{1/8}{7/8}=\frac17.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac17$.
:::

### d) $\left(-\dfrac23\right)^2+\left(-\dfrac23\right)^3+\left(-\dfrac23\right)^4+\cdots$

Começa no expoente $2$: $\displaystyle\sum_{n=2}^\infty\left(-\frac23\right)^n$. Primeiro termo $a=\left(-\frac23\right)^2=\frac49$, razão $r=-\frac23$, $|r|<1$:

$$S=\frac{4/9}{1+\frac23}=\frac{4/9}{5/3}=\frac4{9}\cdot\frac35=\frac4{15}.$$

:::result{kind="converge"}
**Converge**, $S=\dfrac4{15}$.
:::

## Questão 6 — Dízimas periódicas como fração {#q6}

Uma dízima periódica é uma **série geométrica**: o bloco que se repete tem razão $r=10^{-k}$ ($k$ = tamanho do período). Soma $=\dfrac{\text{1º bloco}}{1-r}$. A parte não periódica é somada à parte.

### a) $0{,}\overline{23}=0{,}232323\ldots$

$$0{,}232323\ldots=\frac{23}{100}+\frac{23}{100^2}+\cdots=\frac{23/100}{1-1/100}=\frac{23/100}{99/100}=\frac{23}{99}.$$

:::result
$0{,}\overline{23}=\dfrac{23}{99}$
:::

### b) $0{,}\overline{234}$

$r=10^{-3}$: $\dfrac{234/1000}{1-1/1000}=\dfrac{234}{999}=\dfrac{26}{111}$ (dividindo por $9$).

:::result
$0{,}\overline{234}=\dfrac{234}{999}=\dfrac{26}{111}$
:::

### c) $0{,}\overline7$

$r=\frac1{10}$: $\dfrac{7/10}{1-1/10}=\dfrac{7/10}{9/10}=\dfrac79$.

:::result
$0{,}\overline7=\dfrac79$
:::

### d) $0{,}\overline d$, $d$ um dígito

Mesma ideia do item anterior: $\dfrac{d/10}{1-1/10}=\dfrac d9$. (Consequência curiosa: com $d=9$, $0{,}\overline9=\frac99=1$.)

:::result
$0{,}\overline d=\dfrac d9$
:::

### e) $0{,}0\overline6=0{,}06666\ldots$

A parte periódica começa na 2ª casa: $0{,}0666\ldots=\dfrac{6}{100}+\dfrac{6}{1000}+\cdots$, geométrica com $a=\frac6{100}$ e $r=\frac1{10}$:

$$\frac{6/100}{1-1/10}=\frac{6/100}{9/10}=\frac{6}{90}=\frac1{15}.$$

(Outra forma: $0{,}0\overline6=\frac1{10}\cdot0{,}\overline6=\frac1{10}\cdot\frac23=\frac1{15}$.)

:::result
$0{,}0\overline6=\dfrac1{15}$
:::

### f) $1{,}\overline{414}=1{,}414414\ldots$

Parte inteira $1$ mais $0{,}\overline{414}=\dfrac{414}{999}=\dfrac{46}{111}$:

$$1+\frac{46}{111}=\frac{157}{111}.$$

:::result
$1{,}\overline{414}=\dfrac{157}{111}$
:::

### g) $1{,}24\overline{123}=1{,}24123123\ldots$

Separe a parte não periódica $1{,}24$ da periódica $0{,}00123123\ldots$:

$$0{,}00\overline{123}=\frac1{100}\cdot0{,}\overline{123}=\frac1{100}\cdot\frac{123}{999}=\frac1{100}\cdot\frac{41}{333}=\frac{41}{33300}.$$

$$1{,}24=\frac{31}{25}=\frac{41292}{33300},\qquad S=\frac{41292+41}{33300}=\frac{41333}{33300}.$$

(Conferência: $41333/33300\approx1{,}241231\ldots$ ✓.)

:::result
$1{,}24\overline{123}=\dfrac{41333}{33300}$
:::

### h) $3{,}\overline{142857}$

$0{,}\overline{142857}=\dfrac{142857}{999999}=\dfrac17$ (pois $142857\cdot7=999999$). Logo

$$3+\frac17=\frac{22}7.$$

:::result
$3{,}\overline{142857}=\dfrac{22}7$
:::

## Questão 7 — Séries telescópicas {#q7}

Estratégia: escreva $s_n=\sum_{k=1}^{n}a_k$ **expandindo** os primeiros e últimos termos; os intermediários se cancelam, sobrando uma expressão curta. Depois calcule $\lim_{n\to\infty}s_n$: se existir (finito), é a soma da série.

### a) $\displaystyle\sum_{n=1}^\infty\left(\frac1n-\frac1{n+1}\right)$

$$s_n=\left(1-\tfrac12\right)+\left(\tfrac12-\tfrac13\right)+\cdots+\left(\tfrac1n-\tfrac1{n+1}\right)=1-\frac1{n+1}.$$

$\lim s_n=1-0=1$.

:::result{kind="converge"}
$s_n=1-\dfrac1{n+1}$; **converge**, soma $=1$.
:::

### b) $\displaystyle\sum_{n=1}^\infty\left(\frac3{n^2}-\frac3{(n+1)^2}\right)$

Com $b_n=\frac3{n^2}$, o termo é $b_n-b_{n+1}$, logo

$$s_n=b_1-b_{n+1}=3-\frac3{(n+1)^2}\ \xrightarrow{\,n\to\infty\,}\ 3.$$

:::result{kind="converge"}
$s_n=3-\dfrac3{(n+1)^2}$; **converge**, soma $=3$.
:::

### c) $\displaystyle\sum_{n=1}^\infty\left(\ln\sqrt{n+1}-\ln\sqrt n\right)$

Com $b_n=\ln\sqrt n$, o termo é $b_{n+1}-b_n$:

$$s_n=b_{n+1}-b_1=\ln\sqrt{n+1}-\ln\sqrt1=\tfrac12\ln(n+1).$$

Como $\tfrac12\ln(n+1)\to+\infty$, a série não tem soma finita.

:::result{kind="diverge"}
$s_n=\tfrac12\ln(n+1)\to\infty$; **diverge**.
:::

### d) $\displaystyle\sum_{n=1}^\infty\bigl(\tan n-\tan(n-1)\bigr)$

Com $b_n=\tan n$, o termo é $b_n-b_{n-1}$ e

$$s_n=\tan n-\tan 0=\tan n.$$

A sequência $\tan n$ **não tem limite**: como $n$ mod $\pi$ é denso em $[0,\pi)$, os valores $\tan n$ chegam arbitrariamente perto de $0$ e também assumem valores arbitrariamente grandes em módulo (por exemplo $\tan 11\approx-226$). Logo $(s_n)$ diverge.

:::result{kind="diverge"}
$s_n=\tan n$ não converge; **a série diverge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty\left[\cos^{-1}\!\left(\frac1{n+1}\right)-\cos^{-1}\!\left(\frac1{n+2}\right)\right]$

Com $b_n=\cos^{-1}\!\left(\frac1{n+1}\right)$, o termo é $b_n-b_{n+1}$:

$$s_n=b_1-b_{n+1}=\cos^{-1}\!\left(\tfrac12\right)-\cos^{-1}\!\left(\frac1{n+2}\right)=\frac\pi3-\cos^{-1}\!\left(\frac1{n+2}\right).$$

Como $\cos^{-1}$ é contínua e $\frac1{n+2}\to0$, $\cos^{-1}\!\left(\frac1{n+2}\right)\to\cos^{-1}0=\frac\pi2$. Então

$$\lim s_n=\frac\pi3-\frac\pi2=-\frac\pi6.$$

:::result{kind="converge"}
$s_n=\dfrac\pi3-\cos^{-1}\!\left(\dfrac1{n+2}\right)$; **converge**, soma $=-\dfrac\pi6$.
:::

### f) $\displaystyle\sum_{n=1}^\infty\left(\sqrt{2n+4}-\sqrt{2n+3}\right)$

:::warn[Atenção ao enunciado]
Lido literalmente, os radicandos $2n+4$ e $2n+3$ **não** se encadeiam de um termo para o outro (o "$-\sqrt{2n+3}$" de um termo não é o "$+\sqrt{2n+4}$" do anterior), então não há cancelamento exato. Se o texto fosse $\sqrt{2n+4}-\sqrt{2n+2}$, o cancelamento existiria — e a conclusão seria a mesma (divergência), como mostrado abaixo.
:::

**Leitura literal.** Racionalize o termo:

$$a_n=\sqrt{2n+4}-\sqrt{2n+3}=\frac{(2n+4)-(2n+3)}{\sqrt{2n+4}+\sqrt{2n+3}}=\frac{1}{\sqrt{2n+4}+\sqrt{2n+3}}>0.$$

Compare com $b_n=\dfrac1{\sqrt n}$ pelo **limite**:

$$\frac{a_n}{b_n}=\frac{\sqrt n}{\sqrt{2n+4}+\sqrt{2n+3}}=\frac1{\sqrt{2+4/n}+\sqrt{2+3/n}}\to\frac1{2\sqrt2}>0.$$

Como $\sum\frac1{\sqrt n}$ é uma $p$-série com $p=\frac12\le1$ (diverge), a série dada diverge. (Numericamente, a soma dos $10^6$ primeiros termos já passa de $700$.)

**Variante telescópica** $\sqrt{2n+4}-\sqrt{2n+2}$: com $c_n=\sqrt{2n+2}$ o termo é $c_{n+1}-c_n$, então $s_n=\sqrt{2n+4}-\sqrt4=\sqrt{2n+4}-2\to\infty$. Também diverge.

:::result{kind="diverge"}
**Diverge** (comparação no limite com $\sum1/\sqrt n$).
:::
:::note[Caixa de critérios — qual teste usar?]
- **Termo geral (divergência):** se $\lim a_n\ne0$ (ou não existe), então $\sum a_n$ diverge. Se $\lim a_n=0$, **nada** se conclui.
- **Geométrica** $\sum ar^n$: converge se $\lvert r\rvert<1$ (soma $=\dfrac{\text{1º termo}}{1-r}$); diverge se $\lvert r\rvert\ge1$.
- **$p$-série** $\sum \dfrac1{n^p}$: converge se $p>1$; diverge se $p\le1$.
- **Integral:** $f$ contínua, positiva e decrescente (ao menos a partir de um $N$): $\sum a_n$ e $\int_N^\infty f$ têm o mesmo comportamento.
- **Comparação direta** (termos positivos): $0\le a_n\le b_n$ e $\sum b_n$ converge $\Rightarrow$ $\sum a_n$ converge; $a_n\ge b_n\ge0$ e $\sum b_n$ diverge $\Rightarrow$ $\sum a_n$ diverge.
- **Comparação no limite:** $L=\lim\dfrac{a_n}{b_n}$ com $0<L<\infty$ $\Rightarrow$ mesmo comportamento. Se $L=0$ e $\sum b_n$ converge, $\sum a_n$ converge; se $L=\infty$ e $\sum b_n$ diverge, $\sum a_n$ diverge.
- **Razão:** $L=\lim\dfrac{a_{n+1}}{a_n}$: $L<1$ converge, $L>1$ (ou $\infty$) diverge, $L=1$ **inconclusivo**. Ideal para $n!$, $a^n$.
- **Raiz:** $L=\lim\sqrt[n]{a_n}$: mesmas conclusões. Ideal para termos do tipo $(\cdots)^n$.
:::

## Questão 8 — Teste da integral {#q8}

Em cada item, verificamos que $f(x)=a_x$ é **contínua, positiva e decrescente** para $x\ge N$ (basta valer a partir de algum $N$, pois mudar finitos termos não altera a convergência) e então calculamos $\int_N^\infty f(x)\,dx$.

### a) $\displaystyle\sum_{n=1}^\infty \frac1{n^2}$

**Condições.** $f(x)=\dfrac1{x^2}$ é contínua e positiva em $[1,\infty)$; $f'(x)=-\dfrac2{x^3}<0$, logo é decrescente.

**Integral.**

$$\int_1^\infty \frac{dx}{x^2}=\lim_{b\to\infty}\left[-\frac1x\right]_1^b=\lim_{b\to\infty}\left(1-\frac1b\right)=1.$$

:::result{kind="converge"}
**Conclusão:** a integral converge (vale $1$), portanto a série **converge**. (Atenção: $1$ é o valor da *integral*, não da soma da série, que é $\pi^2/6$.)
:::

### b) $\displaystyle\sum_{n=1}^\infty \frac1{n^{0,7}}$

**Condições.** $f(x)=x^{-0,7}$ é contínua e positiva em $[1,\infty)$ e $f'(x)=-0,7x^{-1,7}<0$: decrescente.

**Integral.**

$$\int_1^\infty x^{-0,7}\,dx=\lim_{b\to\infty}\left[\frac{x^{0,3}}{0,3}\right]_1^b=\lim_{b\to\infty}\frac{b^{0,3}-1}{0,3}=\infty.$$

:::result{kind="diverge"}
**Conclusão:** a integral diverge, logo a série **diverge** (é uma $p$-série com $p=0,7\le1$).
:::

### c) $\displaystyle\sum_{n=1}^\infty \frac{n}{n^2+4}$

**Condições.** $f(x)=\dfrac{x}{x^2+4}$ é contínua e positiva para $x>0$. Derivada:

$$f'(x)=\frac{(x^2+4)-x\cdot2x}{(x^2+4)^2}=\frac{4-x^2}{(x^2+4)^2}<0\quad\text{para }x>2.$$

Logo $f$ é decrescente para $x\ge2$; aplicamos o teste a partir de $N=2$.

**Integral.** Substituição $u=x^2+4$, $du=2x\,dx$:

$$\int_2^\infty\frac{x}{x^2+4}\,dx=\lim_{b\to\infty}\left[\tfrac12\ln(x^2+4)\right]_2^b=\lim_{b\to\infty}\tfrac12\bigl[\ln(b^2+4)-\ln 8\bigr]=\infty.$$

:::result{kind="diverge"}
**Conclusão:** a integral diverge, portanto a série **diverge** (comportamento de $\sum 1/n$).
:::

### d) $\displaystyle\sum_{n=1}^\infty \frac1{n+4}$

**Condições.** $f(x)=\dfrac1{x+4}$ é contínua, positiva e decrescente em $[1,\infty)$ ($f'=-\dfrac1{(x+4)^2}<0$).

**Integral.**

$$\int_1^\infty\frac{dx}{x+4}=\lim_{b\to\infty}\bigl[\ln(x+4)\bigr]_1^b=\lim_{b\to\infty}\bigl[\ln(b+4)-\ln5\bigr]=\infty.$$

:::result{kind="diverge"}
**Conclusão:** a série **diverge** (é a harmônica deslocada).
:::

### e) $\displaystyle\sum_{n=1}^\infty e^{-2n}$

**Condições.** $f(x)=e^{-2x}$ é contínua e positiva; $f'(x)=-2e^{-2x}<0$: decrescente.

**Integral.**

$$\int_1^\infty e^{-2x}\,dx=\lim_{b\to\infty}\left[-\frac{e^{-2x}}2\right]_1^b=\lim_{b\to\infty}\left(\frac{e^{-2}}2-\frac{e^{-2b}}2\right)=\frac{e^{-2}}2.$$

:::result{kind="converge"}
**Conclusão:** a integral converge (vale $\tfrac{e^{-2}}{2}$), logo a série **converge**. (Confere: é geométrica de razão $e^{-2}<1$.)
:::

### f) $\displaystyle\sum_{n=2}^\infty \frac{n-4}{n^2-2n+1}$

**Leitura adotada.** Como $n^2-2n+1=(n-1)^2$ se anula em $n=1$, o termo $n=1$ não existe; a série é tomada a partir de $n=2$ (o primeiro termo não afeta a convergência).

**Condições.** $f(x)=\dfrac{x-4}{(x-1)^2}$ é contínua para $x>1$, mas **não é positiva** para $x<4$ (por exemplo, $f(2)=-2$). Derivada:

$$f'(x)=\frac{(x-1)^2-(x-4)\cdot2(x-1)}{(x-1)^4}=\frac{(x-1)-2(x-4)}{(x-1)^3}=\frac{7-x}{(x-1)^3}<0\quad\text{para }x>7.$$

Assim $f$ é positiva e decrescente para $x\ge7$; usamos $N=7$ (descartar os 6 primeiros termos não muda a conclusão).

**Integral.** Frações parciais: $\dfrac{x-4}{(x-1)^2}=\dfrac1{x-1}-\dfrac3{(x-1)^2}$.

$$\int_7^\infty\frac{x-4}{(x-1)^2}\,dx=\lim_{b\to\infty}\left[\ln(x-1)+\frac3{x-1}\right]_7^b=\lim_{b\to\infty}\left[\ln(b-1)+\frac3{b-1}\right]-\left(\ln6+\frac12\right)=\infty.$$

:::result{kind="diverge"}
**Conclusão:** a integral diverge, portanto a série **diverge** (comporta-se como $\sum1/n$).
:::

### g) $\displaystyle\sum_{n=1}^\infty \frac{\ln(n^2)}{n}$

**Simplificação.** $\ln(n^2)=2\ln n$, então $a_n=\dfrac{2\ln n}{n}$.

**Condições.** $f(x)=\dfrac{2\ln x}{x}$ é contínua e positiva para $x>1$. Derivada:

$$f'(x)=2\cdot\frac{\frac1x\cdot x-\ln x}{x^2}=\frac{2(1-\ln x)}{x^2}<0\quad\text{para }x>e.$$

Decrescente para $x\ge3$; $N=3$.

**Integral.** Com $u=\ln x$, $du=dx/x$:

$$\int_3^\infty\frac{2\ln x}{x}\,dx=\lim_{b\to\infty}\bigl[(\ln x)^2\bigr]_3^b=\lim_{b\to\infty}\bigl[(\ln b)^2-(\ln3)^2\bigr]=\infty.$$

:::result{kind="diverge"}
**Conclusão:** a série **diverge**.
:::

### h) $\displaystyle\sum_{n=1}^\infty \frac{n^2}{e^{n/3}}$

**Condições.** $f(x)=x^2e^{-x/3}$ é contínua e positiva. Derivada:

$$f'(x)=2xe^{-x/3}-\frac{x^2}3e^{-x/3}=xe^{-x/3}\left(2-\frac x3\right)<0\quad\text{para }x>6.$$

Decrescente para $x\ge6$; $N=6$.

**Integral.** Por partes duas vezes (ou pela tabela), uma primitiva é $-3e^{-x/3}(x^2+6x+18)$. Verifique derivando: $e^{-x/3}(x^2+6x+18)-3e^{-x/3}(2x+6)=x^2e^{-x/3}$. ✓

$$\int_6^\infty x^2e^{-x/3}dx=\lim_{b\to\infty}\Bigl[-3e^{-x/3}(x^2+6x+18)\Bigr]_6^b=0+3e^{-2}(36+36+18)=270\,e^{-2}.$$

(O limite em $\infty$ é zero porque a exponencial vence o polinômio.)

:::result{kind="converge"}
**Conclusão:** a integral converge (vale $270e^{-2}$), logo a série **converge**.
:::

## Questão 9 — Convergem ou divergem? (qualquer método) {#q9}

### a) $\displaystyle\sum_{n=1}^\infty \frac1{10^n}$

**Critério: série geométrica.** $a_n=\left(\tfrac1{10}\right)^n$, razão $r=\tfrac1{10}$ e $\lvert r\rvert<1$.

:::result{kind="converge"}
**Conclusão:** **converge**. Soma: $\dfrac{1/10}{1-1/10}=\dfrac19$.
:::

### b) $\displaystyle\sum_{n=1}^\infty -\frac1{8^n}$

**Critério: geométrica** (com sinal). É $-\sum\left(\tfrac18\right)^n$, razão $r=\tfrac18$, $\lvert r\rvert<1$.

:::result{kind="converge"}
**Conclusão:** **converge**. Soma: $-\dfrac{1/8}{1-1/8}=-\dfrac17$.
:::

### c) $\displaystyle\sum_{n=1}^\infty \frac{\ln n}{n}$

**Critério: comparação direta com a harmônica.** Para $n\ge3$ temos $\ln n>\ln e=1$, portanto

$$\frac{\ln n}{n}>\frac1n\quad(n\ge3).$$

Como $\sum1/n$ diverge, a série dada também diverge. (Alternativa: teste da integral, $\int\frac{\ln x}{x}dx=\frac{(\ln x)^2}{2}\to\infty$.)

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### d) $\displaystyle\sum_{n=1}^\infty \frac1{\sqrt n(\sqrt n+1)}$

**Simplificação.** $\sqrt n(\sqrt n+1)=n+\sqrt n$, então $a_n=\dfrac1{n+\sqrt n}$.

**Critério: comparação no limite com $b_n=\dfrac1n$.**

$$\lim_{n\to\infty}\frac{a_n}{b_n}=\lim\frac{n}{n+\sqrt n}=\lim\frac1{1+\frac1{\sqrt n}}=1\in(0,\infty).$$

Como $\sum1/n$ diverge, a série diverge.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty \frac3{\sqrt n}$

**Critério: $p$-série.** $3\sum n^{-1/2}$, com $p=\tfrac12\le1$.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### f) $\displaystyle\sum_{n=1}^\infty \frac{2^n}{3^n}$

**Critério: geométrica.** $a_n=\left(\tfrac23\right)^n$, $r=\tfrac23$.

:::result{kind="converge"}
**Conclusão:** **converge**. Soma: $\dfrac{2/3}{1-2/3}=2$.
:::

### g) $\displaystyle\sum_{n=1}^\infty \frac{e^n}{1+e^{2n}}$

**Critério: comparação direta.** O denominador cresce se retirarmos o $1$: $1+e^{2n}>e^{2n}$, então

$$0<\frac{e^n}{1+e^{2n}}<\frac{e^n}{e^{2n}}=e^{-n}=\left(\frac1e\right)^n.$$

$\sum(1/e)^n$ é geométrica com $r=1/e<1$ (converge).

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### h) $\displaystyle\sum_{n=2}^\infty \frac{\sqrt n}{\ln n}$

**Leitura adotada:** início em $n=2$ (em $n=1$, $\ln1=0$).

**Critério: termo geral.** Para $n\ge2$, $\ln n<\sqrt n$ (o logaritmo cresce mais devagar que qualquer potência), logo $a_n>1$. De fato $\lim\dfrac{\sqrt n}{\ln n}=\infty\neq0$.

:::result{kind="diverge"}
**Conclusão:** **diverge**, pois $a_n\not\to0$.
:::

### i) $\displaystyle\sum_{n=1}^\infty \frac n{n+1}$

**Critério: termo geral.** $\lim\dfrac n{n+1}=\lim\dfrac1{1+1/n}=1\ne0$.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### j) $\displaystyle\sum_{n=1}^\infty \frac5{n+1}$

**Critério: comparação no limite com $b_n=\tfrac1n$.**

$$\lim\frac{5/(n+1)}{1/n}=\lim\frac{5n}{n+1}=5\in(0,\infty).$$

:::result{kind="diverge"}
**Conclusão:** **diverge** (é $5\times$ a harmônica sem o primeiro termo).
:::

### k) $\displaystyle\sum_{n=1}^\infty \frac{2^n}{n+1}$

**Critério: termo geral.** A exponencial domina o polinômio: $\lim\dfrac{2^n}{n+1}=\infty\ne0$. (Ex.: $n=10$ dá $1024/11\approx93$.)

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### l) $\displaystyle\sum_{n=1}^\infty \frac{-2}{n\sqrt n}$

**Simplificação.** $n\sqrt n=n^{3/2}$, então a série é $-2\sum n^{-3/2}$.

**Critério: $p$-série** com $p=\tfrac32>1$.

:::result{kind="converge"}
**Conclusão:** **converge** (múltiplo constante de uma série convergente).
:::

## Questão 10 — Teste da comparação {#q10}

### a) $\displaystyle\sum_{n=1}^\infty \frac1{n^2+27}$

**Desigualdade.** $n^2+27>n^2\Rightarrow$

$$0<\frac1{n^2+27}<\frac1{n^2}.$$

**Comparação.** $\sum1/n^2$ converge ($p=2$).

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### b) $\displaystyle\sum_{n=1}^\infty \frac{n-1}{n^4+2}$

**Desigualdade.** Aumentamos o numerador ($n-1<n$) e diminuímos o denominador ($n^4+2>n^4$):

$$0\le\frac{n-1}{n^4+2}<\frac n{n^4}=\frac1{n^3}.$$

**Comparação.** $\sum1/n^3$ converge ($p=3$).

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### c) $\displaystyle\sum_{n=2}^\infty \frac1{\sqrt n-1}$

**Leitura adotada:** início em $n=2$ (em $n=1$ o denominador é $0$).

**Desigualdade.** $0<\sqrt n-1<\sqrt n\Rightarrow$

$$\frac1{\sqrt n-1}>\frac1{\sqrt n}.$$

**Comparação.** $\sum1/\sqrt n$ diverge ($p=\tfrac12$).

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### d) $\displaystyle\sum_{n=2}^\infty \frac{n+2}{n^2-n}$

**Leitura adotada:** início em $n=2$ (em $n=1$, $n^2-n=0$).

**Desigualdade.** Numerador maior ($n+2>n$) e denominador menor ($n^2-n<n^2$):

$$\frac{n+2}{n^2-n}>\frac{n}{n^2}=\frac1n.$$

**Comparação.** $\sum1/n$ diverge.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty \frac{\cos^2 n}{n^{3/2}}$

**Desigualdade.** $0\le\cos^2n\le1$, portanto

$$0\le\frac{\cos^2n}{n^{3/2}}\le\frac1{n^{3/2}}.$$

**Comparação.** $\sum n^{-3/2}$ converge ($p=\tfrac32>1$).

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### f) $\displaystyle\sum_{n=1}^\infty \frac1{n3^n}$

**Desigualdade.** Como $n\ge1$,

$$0<\frac1{n3^n}\le\frac1{3^n}=\left(\frac13\right)^n.$$

**Comparação.** Geométrica de razão $\tfrac13$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### g) $\displaystyle\sum_{n=1}^\infty \sqrt{\frac{n+4}{n^4+4}}$

**Desigualdade.** Para $n\ge1$: $n+4\le5n$ e $n^4+4>n^4$. Logo

$$\frac{n+4}{n^4+4}<\frac{5n}{n^4}=\frac5{n^3}\ \Rightarrow\ \sqrt{\frac{n+4}{n^4+4}}<\frac{\sqrt5}{n^{3/2}}.$$

**Comparação.** $\sqrt5\sum n^{-3/2}$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### h) $\displaystyle\sum_{n=1}^\infty \frac{\sqrt n+1}{\sqrt{n^2+3}}$

**Desigualdade.** Numerador: $\sqrt n+1>\sqrt n$. Denominador: para $n\ge1$, $n^2+3\le4n^2$, então $\sqrt{n^2+3}\le2n$. Assim

$$\frac{\sqrt n+1}{\sqrt{n^2+3}}>\frac{\sqrt n}{2n}=\frac1{2\sqrt n}.$$

**Comparação.** $\tfrac12\sum n^{-1/2}$ diverge ($p=\tfrac12$).

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

## Questão 11 — Comparação no limite {#q11}

### a) $\displaystyle\sum_{n=1}^\infty \frac{n-2}{n^3-n^2+3}$

Dica: $b_n=\dfrac1{n^2}$ (convergente, $p=2$). Os termos são positivos a partir de $n=3$ (comportamento só depende da cauda).

$$L=\lim\frac{(n-2)/(n^3-n^2+3)}{1/n^2}=\lim\frac{n^2(n-2)}{n^3-n^2+3}=\lim\frac{n^3-2n^2}{n^3-n^2+3}=\lim\frac{1-2/n}{1-1/n+3/n^3}=1.$$

$0<L<\infty$ e $\sum1/n^2$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### b) $\displaystyle\sum_{n=2}^\infty \frac{n(n+1)}{(n^2+1)(n-1)}$

**Leitura adotada:** $n\ge2$ (em $n=1$, $n-1=0$).

**Escolha de $b_n$.** Numerador $\sim n^2$, denominador $\sim n^3$: razão $\sim\dfrac1n$. Tomamos $b_n=\dfrac1n$.

$$L=\lim\frac{n\cdot n(n+1)}{(n^2+1)(n-1)}=\lim\frac{n^3+n^2}{n^3-n^2+n-1}=\lim\frac{1+1/n}{1-1/n+1/n^2-1/n^3}=1.$$

$\sum1/n$ diverge.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### c) $\displaystyle\sum_{n=1}^\infty \frac{2^n}{3+4^n}$

**Escolha de $b_n$.** Para $n$ grande, $3+4^n\approx4^n$, então $a_n\approx\dfrac{2^n}{4^n}=\left(\tfrac12\right)^n=b_n$.

$$L=\lim\frac{2^n/(3+4^n)}{1/2^n}=\lim\frac{2^n\cdot2^n}{3+4^n}=\lim\frac{4^n}{3+4^n}=\lim\frac1{1+3/4^n}=1.$$

$\sum(1/2)^n$ converge (geométrica).

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### d) $\displaystyle\sum_{n=2}^\infty \frac1{\ln n}$

**Leitura adotada:** $n\ge2$ (em $n=1$, $\ln1=0$). Dica: $b_n=\tfrac1n$.

$$L=\lim\frac{1/\ln n}{1/n}=\lim\frac n{\ln n}=\infty\quad(\text{a potência vence o log}).$$

Caso $L=\infty$ com $\sum b_n$ **divergente**: $a_n$ é "maior" que um termo divergente.

:::result{kind="diverge"}
**Conclusão:** **diverge**. (Também sai por comparação direta: $\ln n<n\Rightarrow\frac1{\ln n}>\frac1n$.)
:::

### e) $\displaystyle\sum_{n=1}^\infty \ln\!\left(1+\frac1{n^2}\right)$

Dica: $b_n=\dfrac1{n^2}$. Com $u=\dfrac1{n^2}\to0$:

$$L=\lim\frac{\ln(1+1/n^2)}{1/n^2}=\lim_{u\to0}\frac{\ln(1+u)}u=1\quad(\text{limite fundamental, ou L'Hôpital: }\tfrac{1/(1+u)}{1}\to1).$$

$\sum1/n^2$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

## Questão 12 — Qualquer método {#q12}

### a) $\displaystyle\sum_{n=1}^\infty \frac1{2\sqrt n+\sqrt[3]n}$

**Critério: comparação direta.** Para $n\ge1$, $\sqrt[3]n\le\sqrt n$, então o denominador satisfaz $2\sqrt n+\sqrt[3]n\le3\sqrt n$. Logo

$$\frac1{2\sqrt n+\sqrt[3]n}\ge\frac1{3\sqrt n}.$$

$\tfrac13\sum n^{-1/2}$ diverge.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

### b) $\displaystyle\sum_{n=1}^\infty \frac{\sin^2 n}{2^n}$

**Critério: comparação direta.** $0\le\sin^2n\le1\Rightarrow0\le\dfrac{\sin^2n}{2^n}\le\left(\tfrac12\right)^n$, geométrica convergente.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### c) $\displaystyle\sum_{n=3}^\infty \frac{5n^3-3n}{n^2(n-2)(n^2+5)}$

**Critério: comparação no limite.** Grau do numerador $=3$; do denominador $=2+1+2=5$. Logo $a_n\sim\dfrac{5n^3}{n^5}=\dfrac5{n^2}$; tomamos $b_n=\dfrac1{n^2}$. Todos os termos são positivos para $n\ge3$.

$$L=\lim\frac{n^2(5n^3-3n)}{n^2(n-2)(n^2+5)}=\lim\frac{5n^3-3n}{n^3-2n^2+5n-10}=\lim\frac{5-3/n^2}{1-2/n+5/n^2-10/n^3}=5.$$

$\sum1/n^2$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### d) $\displaystyle\sum_{n=1}^\infty \frac1{1+\ln n}$

**Critério: comparação direta.** Para $n\ge1$, $\ln n\le n-1$, logo $1+\ln n\le n$ e

$$\frac1{1+\ln n}\ge\frac1n.$$

$\sum1/n$ diverge.

:::result{kind="diverge"}
**Conclusão:** **diverge**.
:::

## Questão 13 — Teste da razão {#q13}

Procedimento: calcule $\dfrac{a_{n+1}}{a_n}$, **simplifique** (fatoriais e potências se cancelam) e tome o limite $L$.

### a) $\displaystyle\sum_{n=1}^\infty \frac{2n}{n!}$

$$\frac{a_{n+1}}{a_n}=\frac{2(n+1)}{(n+1)!}\cdot\frac{n!}{2n}=\frac{2(n+1)}{2n}\cdot\frac{n!}{(n+1)n!}=\frac{n+1}n\cdot\frac1{n+1}=\frac1n\to0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, a série **converge**.
:::

### b) $\displaystyle\sum_{n=1}^\infty \frac{n+2}{3n}$

$$\frac{a_{n+1}}{a_n}=\frac{n+3}{3(n+1)}\cdot\frac{3n}{n+2}=\frac{n(n+3)}{(n+1)(n+2)}\to1.$$

$L=1$: **o teste é inconclusivo**. Usamos o termo geral:

$$\lim\frac{n+2}{3n}=\frac13\ne0.$$

:::result{kind="diverge"}
**Conclusão:** **diverge** (pelo teste do termo geral).
:::

### c) $\displaystyle\sum_{n=1}^\infty \frac{(n-1)!}{\bigl((n+1)!\bigr)^2}$

**Leitura adotada:** o denominador é $\bigl((n+1)!\bigr)^2$.

$$\frac{a_{n+1}}{a_n}=\frac{n!}{((n+2)!)^2}\cdot\frac{((n+1)!)^2}{(n-1)!}=\frac{n!}{(n-1)!}\cdot\left(\frac{(n+1)!}{(n+2)!}\right)^2=n\cdot\frac1{(n+2)^2}=\frac n{(n+2)^2}\to0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, a série **converge**.
:::

### d) $\displaystyle\sum_{n=1}^\infty \frac{2^{n+1}}{n3^{n-1}}$

$$\frac{a_{n+1}}{a_n}=\frac{2^{n+2}}{(n+1)3^{n}}\cdot\frac{n3^{n-1}}{2^{n+1}}=\frac{2\cdot n}{(n+1)\cdot3}=\frac{2n}{3(n+1)}\to\frac23.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac23<1$, a série **converge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty \frac{n^4}{4^n}$

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^4}{4^{n+1}}\cdot\frac{4^n}{n^4}=\frac14\left(\frac{n+1}n\right)^4\to\frac14.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac14<1$, a série **converge**.
:::

### f) $\displaystyle\sum_{n=2}^\infty \frac{3^{n+2}}{\ln n}$

$$\frac{a_{n+1}}{a_n}=\frac{3^{n+3}}{\ln(n+1)}\cdot\frac{\ln n}{3^{n+2}}=3\cdot\frac{\ln n}{\ln(n+1)}.$$

Como $\ln(n+1)=\ln n+\ln\!\left(1+\tfrac1n\right)$ e $\ln(1+\tfrac1n)\to0$, temos $\dfrac{\ln n}{\ln(n+1)}\to1$, logo $L=3$.

:::result{kind="diverge"}
**Conclusão:** $L=3>1$, a série **diverge**.
:::

### g) $\displaystyle\sum_{n=1}^\infty \frac{n^2\,(n+2)!}{n!\cdot3^{2n}}$

**Simplificação prévia.** $\dfrac{(n+2)!}{n!}=(n+2)(n+1)$ e $3^{2n}=9^n$, então $a_n=\dfrac{n^2(n+1)(n+2)}{9^n}$.

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^2(n+2)(n+3)}{9^{n+1}}\cdot\frac{9^n}{n^2(n+1)(n+2)}=\frac19\cdot\frac{(n+1)^2}{n^2}\cdot\frac{n+3}{n+1}=\frac{(n+1)(n+3)}{9n^2}\to\frac19.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac19<1$, a série **converge**.
:::

### h) $\displaystyle\sum_{n=1}^\infty \frac{n\,5^n}{(2n+3)\ln(n+1)}$

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)5^{n+1}}{(2n+5)\ln(n+2)}\cdot\frac{(2n+3)\ln(n+1)}{n5^n}=5\cdot\frac{n+1}n\cdot\frac{2n+3}{2n+5}\cdot\frac{\ln(n+1)}{\ln(n+2)}.$$

Cada fator tende a $1$ ($\ln(n+2)=\ln(n+1)+\ln\frac{n+2}{n+1}$ e o último termo $\to0$). Logo $L=5$.

:::result{kind="diverge"}
**Conclusão:** $L=5>1$, a série **diverge**.
:::

## Questão 14 — Teste da raiz {#q14}

Procedimento: calcule $\sqrt[n]{a_n}$ (o expoente $n$ "corta" a raiz) e tome o limite $L$.

### a) $\displaystyle\sum_{n=1}^\infty \frac7{(2n+5)^n}$

$$\sqrt[n]{a_n}=\frac{7^{1/n}}{2n+5}\to\frac{1}{\infty}=0\quad(7^{1/n}\to1).$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, **converge**.
:::

### b) $\displaystyle\sum_{n=1}^\infty \frac{4^n}{(3n)^n}$

$$\sqrt[n]{a_n}=\frac4{3n}\to0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, **converge**.
:::

### c) $\displaystyle\sum_{n=1}^\infty \left(\frac{4n+3}{3n-5}\right)^n$

$$\sqrt[n]{a_n}=\frac{4n+3}{3n-5}=\frac{4+3/n}{3-5/n}\to\frac43.$$

:::result{kind="diverge"}
**Conclusão:** $L=\tfrac43>1$, **diverge**.
:::

### d) $\displaystyle\sum_{n=1}^\infty \left(\ln\!\left(e^2+\frac1n\right)\right)^{n+1}$

$$\sqrt[n]{a_n}=\left[\ln\!\left(e^2+\tfrac1n\right)\right]^{(n+1)/n}=\left[\ln\!\left(e^2+\tfrac1n\right)\right]^{1+1/n}.$$

Como $\ln(e^2+\tfrac1n)\to\ln e^2=2$ e o expoente $1+\tfrac1n\to1$, o limite é $2^1=2$.

:::result{kind="diverge"}
**Conclusão:** $L=2>1$, **diverge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty \frac8{\bigl(3+\frac1n\bigr)^{2n}}$

$$\sqrt[n]{a_n}=\frac{8^{1/n}}{\bigl(3+\frac1n\bigr)^{2}}\to\frac1{3^2}=\frac19.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac19<1$, **converge**.
:::

### f) $\displaystyle\sum_{n=1}^\infty \sin^n\!\left(\frac1{\sqrt n}\right)$

$$\sqrt[n]{a_n}=\sin\!\left(\frac1{\sqrt n}\right)\to\sin0=0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, **converge**.
:::

### g) $\displaystyle\sum_{n=1}^\infty \left(1-\frac1n\right)^{n^2}$

$$\sqrt[n]{a_n}=\left(1-\frac1n\right)^{n}\to e^{-1}\quad(\text{limite fundamental }(1+\tfrac xn)^n\to e^x\text{ com }x=-1).$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac1e\approx0,37<1$, **converge**.
:::

### h) $\displaystyle\sum_{n=2}^\infty \frac1{n^{1+n}}$

$$\sqrt[n]{a_n}=\frac1{n^{(1+n)/n}}=\frac1{n^{1+1/n}}=\frac1{n\cdot n^{1/n}}\to\frac1{\infty\cdot1}=0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, **converge**.
:::

## Questão 15 — Convergem ou divergem? (qualquer método) {#q15}

### a) $\displaystyle\sum_{n=1}^\infty \frac{n^{\sqrt2}}{2^n}$

**Critério: razão** (potência sobre exponencial).

$$\frac{a_{n+1}}{a_n}=\left(\frac{n+1}n\right)^{\sqrt2}\cdot\frac12\to1\cdot\frac12=\frac12.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac12<1$, **converge**.
:::

### b) $\displaystyle\sum_{n=1}^\infty n^2e^{-n}$

**Critério: razão.**

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^2e^{-(n+1)}}{n^2e^{-n}}=\left(\frac{n+1}n\right)^2\frac1e\to\frac1e.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac1e<1$, **converge**.
:::

### c) $\displaystyle\sum_{n=1}^\infty n!\,e^{-n}$

**Critério: razão.**

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{n!}\cdot\frac{e^{-(n+1)}}{e^{-n}}=\frac{n+1}e\to\infty.$$

:::result{kind="diverge"}
**Conclusão:** $L=\infty>1$, **diverge** (o fatorial vence a exponencial; também $a_n\to\infty$).
:::

### d) $\displaystyle\sum_{n=1}^\infty \frac{n^{10}}{10^n}$

**Critério: razão.**

$$\frac{a_{n+1}}{a_n}=\left(\frac{n+1}n\right)^{10}\cdot\frac1{10}\to\frac1{10}.$$

:::result{kind="converge"}
**Conclusão:** $L=\tfrac1{10}<1$, **converge**.
:::

### e) $\displaystyle\sum_{n=1}^\infty \left(1-\frac1{3n}\right)^n$

**Atenção: raiz e razão são inconclusivas** (a raiz $n$-ésima dá $1-\tfrac1{3n}\to1$). Use o **termo geral**:

$$\lim\left(1-\frac1{3n}\right)^n=\lim\left[\left(1-\frac1{3n}\right)^{3n}\right]^{1/3}=\left(e^{-1}\right)^{1/3}=e^{-1/3}\neq0.$$

:::result{kind="diverge"}
**Conclusão:** **diverge**, pois $a_n\to e^{-1/3}\approx0,72\neq0$.
:::

### f) $\displaystyle\sum_{n=1}^\infty \frac{\ln n}{n^3}$

**Critério: comparação direta.** Como $\ln n<n$ para $n\ge1$,

$$0\le\frac{\ln n}{n^3}<\frac n{n^3}=\frac1{n^2}.$$

$\sum1/n^2$ converge.

:::result{kind="converge"}
**Conclusão:** **converge**.
:::

### g) $\displaystyle\sum_{n=2}^\infty \frac{(\ln n)^n}{n^n}$

**Critério: raiz.**

$$\sqrt[n]{a_n}=\frac{\ln n}n\to0.$$

:::result{kind="converge"}
**Conclusão:** $L=0<1$, **converge**.
:::

### h) $\displaystyle\sum_{n=1}^\infty \frac{2+(-1)^n}{1,25^n}$

**Critério: comparação direta.** $2+(-1)^n\in\{1,3\}$, portanto

$$0<\frac{2+(-1)^n}{1,25^n}\le3\left(\frac1{1,25}\right)^n=3\,(0,8)^n.$$

Geométrica de razão $0,8<1$. (O teste da razão falharia aqui, pois $a_{n+1}/a_n$ oscila entre $\tfrac{3}{1}\cdot0,8$ e $\tfrac13\cdot0,8$: não tem limite.)

:::result{kind="converge"}
**Conclusão:** **converge**. (Soma exata: $2\cdot\frac{0,8}{0,2}+\frac{-0,8}{1,8}=8-\frac49=\frac{68}{9}\approx7,556$.)
:::
:::note[Roteiro de decisão]
**Séries alternadas** $\sum(-1)^n b_n$ ($b_n>0$): primeiro olhe $\lim a_n$. Se não for $0$, a série **diverge** (teste do termo geral). Se for $0$, aplique **Leibniz**: (i) $b_n>0$, (ii) $b_n$ decrescente (pelo menos a partir de algum $N$), (iii) $b_n\to0$. Para saber se a convergência é **absoluta** ou **condicional**, teste $\sum|a_n|$ com os critérios de séries positivas (geométrica, $p$-série, comparação, razão).

**Séries de potências** $\sum c_n(x-a)^n$: use o **teste da razão** (ou da raiz) em $|c_n(x-a)^n|$ para achar $R$; o intervalo aberto é $|x-a|<R$; depois **teste os extremos** $x=a\pm R$ separadamente (aí o critério da razão é inconclusivo).

**Taylor:** $P_n(x)=\sum_{k=0}^{n}\dfrac{f^{(k)}(a)}{k!}(x-a)^k$. Monte uma tabela de derivadas em $x=a$, divida por $k!$ e some. Para **Maclaurin** ($a=0$) normalmente é mais rápido **substituir** nas séries conhecidas de $e^x$, $\sin x$, $\cos x$ e $\frac1{1-x}$.
:::

## Questão 16 — Séries alternadas (Leibniz) {#q16}

Todos os itens têm a forma $\sum(-1)^{n}b_n$ ou $\sum(-1)^{n+1}b_n$ — o sinal que aparece na frente só muda o sinal da soma, não a convergência.

### a) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac1{\sqrt n}$

1. $b_n=\dfrac1{\sqrt n}>0$.
2. $b_{n+1}=\dfrac1{\sqrt{n+1}}<\dfrac1{\sqrt n}=b_n$: decrescente.
3. $\lim b_n=0$.

As três condições de Leibniz valem.

:::result{kind="converge"}
**Conclusão:** a série **converge** (pelo teste da série alternada).
:::

### b) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac1{n^{3/2}}$

1. $b_n=n^{-3/2}>0$.
2. $n\mapsto n^{3/2}$ é crescente, logo $b_n$ é decrescente.
3. $\lim n^{-3/2}=0$.

:::result{kind="converge"}
**Conclusão:** **converge** por Leibniz. (Na verdade converge até absolutamente: $\sum n^{-3/2}$ é uma $p$-série com $p=\tfrac32>1$.)
:::

### c) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac1{n3^n}$

1. $b_n=\dfrac1{n3^n}>0$.
2. O denominador $n3^n$ é crescente, logo $b_n$ decresce.
3. $\lim\dfrac1{n3^n}=0$.

:::result{kind="converge"}
**Conclusão:** **converge** por Leibniz (e absolutamente, pois $\frac1{n3^n}\le\left(\frac13\right)^n$).
:::

### d) $\displaystyle\sum_{n=2}^\infty(-1)^n\frac4{(\ln n)^2}$

1. $b_n=\dfrac4{(\ln n)^2}>0$ para $n\ge2$.
2. $\ln n$ é crescente e positivo para $n\ge2$, então $(\ln n)^2$ cresce e $b_n$ **decresce**.
3. $\lim_{n\to\infty}(\ln n)^2=\infty$, logo $b_n\to0$.

:::result{kind="converge"}
**Conclusão:** **converge** por Leibniz. (Não é absoluta: $(\ln n)^2<n$ para $n$ grande, então $\frac4{(\ln n)^2}>\frac4n$ e $\sum\frac4{(\ln n)^2}$ diverge por comparação com a harmônica — a convergência é **condicional**.)
:::

### e) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac n{n^2+1}$

1. $b_n=\dfrac n{n^2+1}>0$.
2. Seja $f(x)=\dfrac x{x^2+1}$. Então $f'(x)=\dfrac{(x^2+1)-2x^2}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}<0$ para $x>1$: $b_n$ é decrescente a partir de $n=2$ (basta valer "a partir de algum $N$").
3. $\lim\dfrac n{n^2+1}=\lim\dfrac{1/n}{1+1/n^2}=0$.

:::result{kind="converge"}
**Conclusão:** **converge** por Leibniz. (Condicionalmente: $\sum\frac n{n^2+1}$ se compara no limite com $\sum\frac1n$ e diverge.)
:::

### f) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{n^2+5}{n^2+4}$

Esta é uma das séries que **não** satisfaz Leibniz. Veja o termo $b_n$:

$$\lim_{n\to\infty}\frac{n^2+5}{n^2+4}=1\neq0.$$

Como $b_n\to1$, o termo geral $a_n=(-1)^{n+1}b_n$ oscila entre valores próximos de $+1$ e $-1$ e **não tende a $0$**.

:::result{kind="diverge"}
**Conclusão:** **diverge** pelo teste do termo geral ($\lim a_n\ne0$). A condição (iii) de Leibniz falha.
:::

### g) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{2^n}{n^2}$

$$\lim_{n\to\infty}\frac{2^n}{n^2}=\infty\quad(\text{a exponencial vence o polinômio}).$$

Logo $a_n$ não tende a $0$ (seu módulo vai a infinito).

:::result{kind="diverge"}
**Conclusão:** **diverge** pelo teste do termo geral. A condição $b_n\to0$ falha.
:::

### h) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac{10^n}{(n+1)!}$

1. $b_n=\dfrac{10^n}{(n+1)!}>0$.
2. Razão: $\dfrac{b_{n+1}}{b_n}=\dfrac{10^{n+1}}{(n+2)!}\cdot\dfrac{(n+1)!}{10^n}=\dfrac{10}{n+2}<1$ quando $n+2>10$, isto é, $n\ge9$. Então $b_n$ é decrescente **a partir de $n=9$** (os primeiros termos crescem, mas isso não afeta a convergência).
3. $\dfrac{10^n}{(n+1)!}\to0$ (fatorial vence exponencial; e a razão acima tende a $0$).

:::result{kind="converge"}
**Conclusão:** **converge** por Leibniz — e absolutamente, pelo teste da razão, pois $\frac{10}{n+2}\to0<1$.
:::

### i) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\left(\frac n{10}\right)^n$

$$\lim_{n\to\infty}\left(\frac n{10}\right)^n=\infty,$$

pois para $n>20$ temos $\frac n{10}>2$ e $\left(\frac n{10}\right)^n>2^n$.

:::result{kind="diverge"}
**Conclusão:** **diverge** (termo geral não tende a $0$).
:::

## Questão 17 — Convergência absoluta, condicional ou divergência {#q17}

Método: (1) teste $\sum|a_n|$. Se converge → **absolutamente convergente**. (2) Se $\sum|a_n|$ diverge, teste a série original por Leibniz: se passar → **condicionalmente convergente**; se $a_n\not\to0$ → diverge.

### a) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}(0{,}1)^n$

$\sum|a_n|=\sum(0{,}1)^n$ é geométrica com $r=0{,}1$, $|r|<1$.

:::result{kind="converge"}
**Conclusão:** **absolutamente convergente**.
:::

### b) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{(0{,}1)^n}n$

$\dfrac{(0{,}1)^n}n\le(0{,}1)^n$ e $\sum(0{,}1)^n$ converge; por comparação $\sum|a_n|$ converge.

:::result{kind="converge"}
**Conclusão:** **absolutamente convergente**.
:::

### c) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac1{\sqrt n}$

- $\sum|a_n|=\sum n^{-1/2}$: $p$-série com $p=\frac12\le1$ → **diverge**.
- A série alternada: $b_n=n^{-1/2}$ positivo, decrescente, $\to0$ → Leibniz → **converge**.

:::result{kind="converge"}
**Conclusão:** **condicionalmente convergente**.
:::

### d) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac1{1+\sqrt n}$

- $\sum|a_n|=\sum\frac1{1+\sqrt n}$. Comparação no limite com $\sum\frac1{\sqrt n}$: $\lim\dfrac{1/(1+\sqrt n)}{1/\sqrt n}=\lim\dfrac{\sqrt n}{1+\sqrt n}=1>0$, e $\sum n^{-1/2}$ diverge → $\sum|a_n|$ **diverge**.
- Leibniz: $b_n=\frac1{1+\sqrt n}$ positivo, decrescente, $\to0$ → converge.

:::result{kind="converge"}
**Conclusão:** **condicionalmente convergente**.
:::

### e) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac n{n^3+1}$

$\sum|a_n|=\sum\frac n{n^3+1}$. Comparação no limite com $\sum\frac1{n^2}$:

$$\lim\frac{n/(n^3+1)}{1/n^2}=\lim\frac{n^3}{n^3+1}=1.$$

Como $\sum\frac1{n^2}$ converge ($p=2$), $\sum|a_n|$ converge.

:::result{kind="converge"}
**Conclusão:** **absolutamente convergente**.
:::

### f) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{n!}{2^n}$

$$\frac{n!}{2^n}\to\infty$$

(razão $\frac{(n+1)!/2^{n+1}}{n!/2^n}=\frac{n+1}2\to\infty$). O termo geral não tende a $0$.

:::result{kind="diverge"}
**Conclusão:** **diverge** pelo teste do termo geral.
:::

### g) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac1{n+3}$

- $\sum|a_n|=\sum\frac1{n+3}$: comparação no limite com a harmônica ($\lim\frac{n}{n+3}=1$) → **diverge**. (Equivale à harmônica sem os 3 primeiros termos.)
- Leibniz: $\frac1{n+3}$ positivo, decrescente, $\to0$ → converge.

:::result{kind="converge"}
**Conclusão:** **condicionalmente convergente**.
:::

### h) $\displaystyle\sum_{n=1}^\infty(-1)^n\frac{\sin n}{n^2}$

(O $(-1)^n$ aqui é irrelevante para o módulo.) Como $|\sin n|\le1$,

$$|a_n|=\frac{|\sin n|}{n^2}\le\frac1{n^2},$$

e $\sum\frac1{n^2}$ converge. Por comparação, $\sum|a_n|$ converge.

:::result{kind="converge"}
**Conclusão:** **absolutamente convergente**. (Note que $\frac{\sin n}{n^2}$ não é monótona, então Leibniz nem seria a ferramenta certa — mas não precisamos dela.)
:::

### i) $\displaystyle\sum_{n=1}^\infty(-1)^{n+1}\frac{n+3}{n+5}$

$$\lim\frac{n+3}{n+5}=1\ne0.$$

:::result{kind="diverge"}
**Conclusão:** **diverge** (termo geral não tende a $0$).
:::

## Questão 18 — Séries de potências: raio e intervalo de convergência {#q18}

Para cada item respondemos: **(a)** raio e intervalo; **(b)** onde converge absolutamente; **(c)** onde converge condicionalmente. Regra geral: dentro do intervalo aberto a convergência é absoluta; só os **extremos** podem ser condicionais.

### a) $\displaystyle\sum_{n=0}^\infty x^n$

Série geométrica de razão $x$: converge sse $|x|<1$. Então $R=1$.

- Extremo $x=1$: $\sum1$ diverge. Extremo $x=-1$: $\sum(-1)^n$ diverge ($a_n\not\to0$).

:::result{kind="converge"}
**(a)** $R=1$, intervalo $(-1,1)$. **(b)** absolutamente em $(-1,1)$. **(c)** em nenhum $x$.
:::

### b) $\displaystyle\sum_{n=0}^\infty(x+5)^n$

Geométrica de razão $x+5$: converge sse $|x+5|<1\iff-6<x<-4$. $R=1$, centro $-5$.

- $x=-4$: $\sum1^n$ diverge. $x=-6$: $\sum(-1)^n$ diverge.

:::result{kind="converge"}
**(a)** $R=1$, intervalo $(-6,-4)$. **(b)** absolutamente em $(-6,-4)$. **(c)** em nenhum $x$.
:::

### c) $\displaystyle\sum_{n=0}^\infty(-1)^n(4x+1)^n$

Geométrica de razão $-(4x+1)$: converge sse $|4x+1|<1\iff-\frac12<x<0$. Como $|4x+1|=4|x+\tfrac14|$, o raio é $R=\frac14$ com centro $-\frac14$.

- $x=0$: $\sum(-1)^n\cdot1^n$ diverge. $x=-\frac12$: $4x+1=-1$, termo $(-1)^n(-1)^n=1$, $\sum1$ diverge.

:::result{kind="converge"}
**(a)** $R=\frac14$, intervalo $\left(-\frac12,0\right)$. **(b)** absolutamente em $\left(-\frac12,0\right)$. **(c)** em nenhum $x$.
:::

### d) $\displaystyle\sum_{n=1}^\infty\frac{(3x-2)^n}n$

Razão: $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{|3x-2|^{n+1}/(n+1)}{|3x-2|^n/n}=|3x-2|\dfrac n{n+1}\to|3x-2|$.

Converge se $|3x-2|<1\iff\frac13<x<1$. Como $|3x-2|=3\left|x-\frac23\right|$, $R=\frac13$, centro $\frac23$.

- $x=1$: $\sum\frac{1^n}n=\sum\frac1n$ (harmônica) → **diverge**.
- $x=\frac13$: $3x-2=-1$, $\sum\frac{(-1)^n}n$ (harmônica alternada) → **converge** (Leibniz); não absolutamente.

:::result{kind="converge"}
**(a)** $R=\frac13$, intervalo $\left[\frac13,1\right)$. **(b)** absolutamente em $\left(\frac13,1\right)$. **(c)** condicionalmente em $x=\frac13$.
:::

### e) $\displaystyle\sum_{n=0}^\infty\frac{(x-2)^n}{10^n}$

Geométrica de razão $\frac{x-2}{10}$: converge sse $|x-2|<10\iff-8<x<12$. $R=10$.

- $x=12$: $\sum1$ diverge. $x=-8$: $\sum(-1)^n$ diverge.

:::result{kind="converge"}
**(a)** $R=10$, intervalo $(-8,12)$. **(b)** absolutamente em $(-8,12)$. **(c)** em nenhum $x$.
:::

### f) $\displaystyle\sum_{n=0}^\infty(2x)^n$

Geométrica de razão $2x$: $|2x|<1\iff|x|<\frac12$. $R=\frac12$.

- $x=\pm\frac12$: $\sum1$ e $\sum(-1)^n$ divergem.

:::result{kind="converge"}
**(a)** $R=\frac12$, intervalo $\left(-\frac12,\frac12\right)$. **(b)** absolutamente nesse intervalo. **(c)** em nenhum $x$.
:::

### g) $\displaystyle\sum_{n=0}^\infty\frac{nx^n}{n+2}$

Razão: $\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{(n+1)|x|}{n+3}\cdot\dfrac{n+2}n\to|x|$. Converge se $|x|<1$; $R=1$.

- $x=1$: $\sum\frac n{n+2}$, e $\frac n{n+2}\to1\ne0$ → diverge.
- $x=-1$: $\sum(-1)^n\frac n{n+2}$, o termo não tende a $0$ → diverge.

:::result{kind="converge"}
**(a)** $R=1$, intervalo $(-1,1)$. **(b)** absolutamente em $(-1,1)$. **(c)** em nenhum $x$.
:::

### h) $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n(x+2)^n}n$

Razão: $|x+2|\cdot\dfrac n{n+1}\to|x+2|$. Converge se $|x+2|<1\iff-3<x<-1$. $R=1$, centro $-2$.

- $x=-1$: $x+2=1$, $\sum\frac{(-1)^n}n$ → converge (Leibniz), condicionalmente.
- $x=-3$: $x+2=-1$, $\sum\frac{(-1)^n(-1)^n}n=\sum\frac1n$ → diverge.

:::result{kind="converge"}
**(a)** $R=1$, intervalo $(-3,-1]$. **(b)** absolutamente em $(-3,-1)$. **(c)** condicionalmente em $x=-1$.
:::

### i) $\displaystyle\sum_{n=1}^\infty\frac{x^n}{n\sqrt n\,3^n}=\sum\frac{x^n}{n^{3/2}3^n}$

Razão: $\dfrac{|x|^{n+1}}{(n+1)^{3/2}3^{n+1}}\cdot\dfrac{n^{3/2}3^n}{|x|^n}=\dfrac{|x|}3\left(\dfrac n{n+1}\right)^{3/2}\to\dfrac{|x|}3$. Converge se $|x|<3$; $R=3$.

- $x=3$: $\sum\frac1{n^{3/2}}$, $p$-série com $p=\frac32>1$ → converge.
- $x=-3$: $\sum\frac{(-1)^n}{n^{3/2}}$; o módulo é o mesmo $p$-série → converge **absolutamente**.

:::result{kind="converge"}
**(a)** $R=3$, intervalo $[-3,3]$. **(b)** absolutamente em todo $[-3,3]$. **(c)** em nenhum $x$.
:::

### j) $\displaystyle\sum_{n=1}^\infty\frac{(x-1)^n}{\sqrt n}$

Razão: $|x-1|\sqrt{\tfrac n{n+1}}\to|x-1|$. Converge se $|x-1|<1\iff0<x<2$. $R=1$, centro $1$.

- $x=2$: $\sum\frac1{\sqrt n}$ ($p=\frac12$) → diverge.
- $x=0$: $\sum\frac{(-1)^n}{\sqrt n}$ → converge por Leibniz (condicional).

:::result{kind="converge"}
**(a)** $R=1$, intervalo $[0,2)$. **(b)** absolutamente em $(0,2)$. **(c)** condicionalmente em $x=0$.
:::

### k) $\displaystyle\sum_{n=0}^\infty\frac{(-1)^nx^n}{n!}$

Razão: $\dfrac{|x|^{n+1}}{(n+1)!}\cdot\dfrac{n!}{|x|^n}=\dfrac{|x|}{n+1}\to0<1$ para **todo** $x$.

:::result{kind="converge"}
**(a)** $R=\infty$, intervalo $(-\infty,\infty)$ (a série é $e^{-x}$). **(b)** absolutamente para todo $x$. **(c)** em nenhum $x$.
:::

### l) $\displaystyle\sum_{n=0}^\infty\frac{3^nx^n}{n!}$

Razão: $\dfrac{3|x|}{n+1}\to0<1$ para todo $x$.

:::result{kind="converge"}
**(a)** $R=\infty$, intervalo $(-\infty,\infty)$ (a série é $e^{3x}$). **(b)** absolutamente para todo $x$. **(c)** em nenhum $x$.
:::

## Questão 19 — Polinômios de Taylor de ordens 0, 1, 2 e 3 {#q19}

Fórmula: $P_n(x)=\sum_{k=0}^n\dfrac{f^{(k)}(a)}{k!}(x-a)^k$. Em cada item: tabela das derivadas em $a$, depois os polinômios (cada $P_n$ é o anterior mais um termo).

### a) $f(x)=e^{2x}$, $a=0$

Derivadas: $f=e^{2x}$, $f'=2e^{2x}$, $f''=4e^{2x}$, $f'''=8e^{2x}$. Em $0$: $1,\ 2,\ 4,\ 8$. Dividindo por $k!$: $1,\ 2,\ 2,\ \frac43$.

:::result
$P_0=1$
$P_1=1+2x$
$P_2=1+2x+2x^2$
$P_3=1+2x+2x^2+\dfrac43x^3$
:::

### b) $f(x)=\sin x$, $a=0$

Derivadas: $\sin x,\ \cos x,\ -\sin x,\ -\cos x$. Em $0$: $0,\ 1,\ 0,\ -1$. Divididas por $k!$: $0,\ 1,\ 0,\ -\frac16$.

:::result
$P_0=0$
$P_1=x$
$P_2=x$ (o termo de grau 2 é nulo)
$P_3=x-\dfrac{x^3}6$
:::

### c) $f(x)=\ln x$, $a=1$

Derivadas: $f'=\frac1x$, $f''=-\frac1{x^2}$, $f'''=\frac2{x^3}$. Em $1$: $f=0,\ f'=1,\ f''=-1,\ f'''=2$. Divididas por $k!$: $0,\ 1,\ -\frac12,\ \frac13$.

:::result
$P_0=0$
$P_1=(x-1)$
$P_2=(x-1)-\dfrac{(x-1)^2}2$
$P_3=(x-1)-\dfrac{(x-1)^2}2+\dfrac{(x-1)^3}3$
:::

### d) $f(x)=\ln(1+x)$, $a=0$

Derivadas: $f'=\frac1{1+x}$, $f''=-\frac1{(1+x)^2}$, $f'''=\frac2{(1+x)^3}$. Em $0$: $0,\ 1,\ -1,\ 2$. Divididas por $k!$: $0,\ 1,\ -\frac12,\ \frac13$.

:::result
$P_0=0$
$P_1=x$
$P_2=x-\dfrac{x^2}2$
$P_3=x-\dfrac{x^2}2+\dfrac{x^3}3$
:::

### e) $f(x)=\dfrac1x$, $a=2$

Derivadas: $f'=-x^{-2}$, $f''=2x^{-3}$, $f'''=-6x^{-4}$. Em $2$: $f=\frac12$, $f'=-\frac14$, $f''=\frac28=\frac14$, $f'''=-\frac6{16}=-\frac38$. Divididas por $k!$: $\frac12,\ -\frac14,\ \frac18,\ -\frac1{16}$.

:::result
$P_0=\dfrac12$
$P_1=\dfrac12-\dfrac{x-2}4$
$P_2=\dfrac12-\dfrac{x-2}4+\dfrac{(x-2)^2}8$
$P_3=\dfrac12-\dfrac{x-2}4+\dfrac{(x-2)^2}8-\dfrac{(x-2)^3}{16}$
:::

### f) $f(x)=\dfrac1{x+2}$, $a=0$

Derivadas: $f'=-(x+2)^{-2}$, $f''=2(x+2)^{-3}$, $f'''=-6(x+2)^{-4}$. Em $0$: $\frac12,\ -\frac14,\ \frac14,\ -\frac38$. Divididas por $k!$: $\frac12,\ -\frac14,\ \frac18,\ -\frac1{16}$.

:::result
$P_0=\dfrac12$
$P_1=\dfrac12-\dfrac x4$
$P_2=\dfrac12-\dfrac x4+\dfrac{x^2}8$
$P_3=\dfrac12-\dfrac x4+\dfrac{x^2}8-\dfrac{x^3}{16}$
:::

### g) $f(x)=\sin x$, $a=\frac\pi4$

Derivadas: $\sin x,\ \cos x,\ -\sin x,\ -\cos x$. Em $\frac\pi4$ ($\sin=\cos=\frac{\sqrt2}2$): $\frac{\sqrt2}2,\ \frac{\sqrt2}2,\ -\frac{\sqrt2}2,\ -\frac{\sqrt2}2$. Divididas por $k!$: $\frac{\sqrt2}2\cdot\left(1,\ 1,\ -\frac12,\ -\frac16\right)$.

:::result
$P_0=\dfrac{\sqrt2}2$
$P_1=\dfrac{\sqrt2}2\left[1+\left(x-\tfrac\pi4\right)\right]$
$P_2=\dfrac{\sqrt2}2\left[1+\left(x-\tfrac\pi4\right)-\dfrac{\left(x-\frac\pi4\right)^2}2\right]$
$P_3=\dfrac{\sqrt2}2\left[1+\left(x-\tfrac\pi4\right)-\dfrac{\left(x-\frac\pi4\right)^2}2-\dfrac{\left(x-\frac\pi4\right)^3}6\right]$
:::

### h) $f(x)=\tan x$, $a=\frac\pi4$

Em $\frac\pi4$: $\tan=1$ e $\sec^2=2$.

- $f=\tan x\ \Rightarrow\ f(\tfrac\pi4)=1$.
- $f'=\sec^2x\ \Rightarrow\ 2$.
- $f''=2\sec^2x\tan x\ \Rightarrow\ 2\cdot2\cdot1=4$.
- $f'''=4\sec^2x\tan^2x+2\sec^4x\ \Rightarrow\ 4\cdot2\cdot1+2\cdot4=16$.

(Para $f'''$: derivando $2\sec^2x\tan x$ pela regra do produto, $(2\sec^2x)'\tan x+2\sec^2x\sec^2x$ com $(\sec^2x)'=2\sec^2x\tan x$.)

Divididas por $k!$: $1,\ 2,\ 2,\ \frac{16}6=\frac83$.

:::result
$P_0=1$
$P_1=1+2\left(x-\tfrac\pi4\right)$
$P_2=1+2\left(x-\tfrac\pi4\right)+2\left(x-\tfrac\pi4\right)^2$
$P_3=1+2\left(x-\tfrac\pi4\right)+2\left(x-\tfrac\pi4\right)^2+\dfrac83\left(x-\tfrac\pi4\right)^3$
:::

### i) $f(x)=\sqrt x$, $a=0$

:::warn[Cuidado]
$f'(x)=\dfrac1{2\sqrt x}$ **não existe em $x=0$** (tende a $+\infty$): a função tem tangente vertical na origem. Logo só o polinômio de ordem $0$ está definido.
:::

:::result
$P_0(x)=f(0)=0$. Os polinômios de ordens $1,2,3$ **não existem** em $a=0$ (falta a derivada). Para aproximar $\sqrt x$ é preciso escolher $a>0$, por exemplo $a=1$ ou $a=4$.
:::

## Questão 20 — Séries de Maclaurin {#q20}

Séries-base (todas em $a=0$):

$$e^u=\sum_{n=0}^\infty\frac{u^n}{n!},\quad\sin u=\sum_{n=0}^\infty\frac{(-1)^nu^{2n+1}}{(2n+1)!},\quad\cos u=\sum_{n=0}^\infty\frac{(-1)^nu^{2n}}{(2n)!},\quad\frac1{1-u}=\sum_{n=0}^\infty u^n\ (|u|<1).$$

### a) $e^{-x}$

Troque $u=-x$:

$$e^{-x}=\sum_{n=0}^\infty\frac{(-x)^n}{n!}=\sum_{n=0}^\infty\frac{(-1)^nx^n}{n!}=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\cdots$$

:::result
Termo geral $\dfrac{(-1)^nx^n}{n!}$; vale para todo $x$ ($R=\infty$).
:::

### b) $xe^x$

Multiplique a série de $e^x$ por $x$:

$$xe^x=\sum_{n=0}^\infty\frac{x^{n+1}}{n!}=\sum_{n=1}^\infty\frac{x^n}{(n-1)!}=x+x^2+\frac{x^3}{2!}+\frac{x^4}{3!}+\cdots$$

:::result
Termo geral $\dfrac{x^{n+1}}{n!}$ ($n\ge0$); $R=\infty$.
:::

### c) $\dfrac1{1+x}$

Troque $u=-x$ em $\frac1{1-u}$:

$$\frac1{1+x}=\sum_{n=0}^\infty(-x)^n=\sum_{n=0}^\infty(-1)^nx^n=1-x+x^2-x^3+\cdots$$

:::result
Termo geral $(-1)^nx^n$; vale para $|x|<1$.
:::

### d) $\dfrac{2+x}{1-x}$

Escreva $\frac{2+x}{1-x}=(2+x)\cdot\frac1{1-x}$ e multiplique:

$$(2+x)\sum_{n\ge0}x^n=\sum_{n\ge0}2x^n+\sum_{n\ge0}x^{n+1}=2+\sum_{n\ge1}(2+1)x^n.$$

(Para $n\ge1$ o coeficiente de $x^n$ recebe $2$ do primeiro somatório e $1$ do segundo.)

Conferência pelo $x$ que aparece: $2+2x+2x^2+\cdots+x+x^2+\cdots=2+3x+3x^2+\cdots$

:::result
$\dfrac{2+x}{1-x}=2+\displaystyle\sum_{n=1}^\infty3x^n=2+3x+3x^2+3x^3+\cdots$, para $|x|<1$.
:::

### e) $\sin(3x)$

Troque $u=3x$:

$$\sin3x=\sum_{n=0}^\infty\frac{(-1)^n(3x)^{2n+1}}{(2n+1)!}=3x-\frac{27x^3}{6}+\frac{243x^5}{120}-\cdots=3x-\frac{9x^3}2+\frac{81x^5}{40}-\cdots$$

:::result
Termo geral $\dfrac{(-1)^n3^{2n+1}x^{2n+1}}{(2n+1)!}$; $R=\infty$.
:::

### f) $\sin(x/2)$

Troque $u=\frac x2$:

$$\sin\frac x2=\sum_{n=0}^\infty\frac{(-1)^n(x/2)^{2n+1}}{(2n+1)!}=\frac x2-\frac{x^3}{48}+\frac{x^5}{3840}-\cdots$$

(Pois $\frac{(x/2)^3}{3!}=\frac{x^3}{8\cdot6}$ e $\frac{(x/2)^5}{5!}=\frac{x^5}{32\cdot120}$.)

:::result
Termo geral $\dfrac{(-1)^nx^{2n+1}}{2^{2n+1}(2n+1)!}$; $R=\infty$.
:::

### g) $7\cos(-x)$

O cosseno é par: $\cos(-x)=\cos x$. Então

$$7\cos(-x)=7\cos x=\sum_{n=0}^\infty\frac{7(-1)^nx^{2n}}{(2n)!}=7-\frac{7x^2}2+\frac{7x^4}{24}-\cdots$$

:::result
Termo geral $\dfrac{7(-1)^nx^{2n}}{(2n)!}$; $R=\infty$.
:::

### h) $5\cos(\pi x)$

Troque $u=\pi x$:

$$5\cos\pi x=\sum_{n=0}^\infty\frac{5(-1)^n(\pi x)^{2n}}{(2n)!}=5-\frac{5\pi^2x^2}2+\frac{5\pi^4x^4}{24}-\cdots$$

:::result
Termo geral $\dfrac{5(-1)^n\pi^{2n}x^{2n}}{(2n)!}$; $R=\infty$.
:::

## Questão 21 — Séries de Taylor em $x=a$ {#q21}

Para **polinômios**, a série de Taylor é finita e coincide com o próprio polinômio reescrito em potências de $(x-a)$: os coeficientes são $\frac{f^{(k)}(a)}{k!}$, e todas as derivadas de ordem maior que o grau se anulam.

### a) $f(x)=x^3-2x+4$, $a=2$

$f(2)=8-4+4=8$; $f'=3x^2-2\Rightarrow10$; $f''=6x\Rightarrow12$; $f'''=6$.

Coeficientes: $8,\ 10,\ \frac{12}2=6,\ \frac66=1$.

:::result
$f(x)=8+10(x-2)+6(x-2)^2+(x-2)^3$
:::

### b) $f(x)=2x^3+x^2+3x-8$, $a=1$

$f(1)=2+1+3-8=-2$; $f'=6x^2+2x+3\Rightarrow11$; $f''=12x+2\Rightarrow14$; $f'''=12$.

Coeficientes: $-2,\ 11,\ 7,\ 2$.

:::result
$f(x)=-2+11(x-1)+7(x-1)^2+2(x-1)^3$
:::

### c) $f(x)=x^4+x^2+1$, $a=-2$

$f(-2)=16+4+1=21$; $f'=4x^3+2x\Rightarrow-32-4=-36$; $f''=12x^2+2\Rightarrow50$; $f'''=24x\Rightarrow-48$; $f^{(4)}=24$.

Coeficientes: $21,\ -36,\ \frac{50}2=25,\ \frac{-48}6=-8,\ \frac{24}{24}=1$.

:::result
$f(x)=21-36(x+2)+25(x+2)^2-8(x+2)^3+(x+2)^4$
:::

### d) $f(x)=3x^5-x^4+2x^3+x^2-2$, $a=-1$

- $f(-1)=-3-1-2+1-2=-7$
- $f'=15x^4-4x^3+6x^2+2x\Rightarrow15+4+6-2=23$
- $f''=60x^3-12x^2+12x+2\Rightarrow-60-12-12+2=-82$
- $f'''=180x^2-24x+12\Rightarrow180+24+12=216$
- $f^{(4)}=360x-24\Rightarrow-384$
- $f^{(5)}=360$

Dividindo por $k!$: $-7,\ 23,\ \frac{-82}2=-41,\ \frac{216}6=36,\ \frac{-384}{24}=-16,\ \frac{360}{120}=3$.

:::result
$f(x)=-7+23(x+1)-41(x+1)^2+36(x+1)^3-16(x+1)^4+3(x+1)^5$
:::

### e) $f(x)=\dfrac1{x^2}$, $a=1$

Derivadas: $f=x^{-2}$, $f'=-2x^{-3}$, $f''=6x^{-4}$, $f'''=-24x^{-5}$. Padrão:

$$f^{(n)}(x)=(-1)^n(n+1)!\,x^{-(n+2)}\ \Rightarrow\ f^{(n)}(1)=(-1)^n(n+1)!.$$

Coeficiente: $\dfrac{f^{(n)}(1)}{n!}=(-1)^n(n+1)$.

:::result
$\dfrac1{x^2}=\displaystyle\sum_{n=0}^\infty(-1)^n(n+1)(x-1)^n=1-2(x-1)+3(x-1)^2-4(x-1)^3+\cdots$, válida para $|x-1|<1$ (raio $1$, pois a função não é definida em $x=0$).
:::

### f) $f(x)=\dfrac1{(1-x)^3}$, $a=0$

Derivadas: $f=(1-x)^{-3}$, $f'=3(1-x)^{-4}$, $f''=12(1-x)^{-5}$, $f'''=60(1-x)^{-6}$. Padrão:

$$f^{(n)}(x)=\frac{(n+2)!}{2}(1-x)^{-(n+3)}\ \Rightarrow\ f^{(n)}(0)=\frac{(n+2)!}2.$$

Coeficiente: $\dfrac{f^{(n)}(0)}{n!}=\dfrac{(n+1)(n+2)}2$. (Conferindo: $n=0$: $1$; $n=1$: $3$; $n=2$: $6$; $n=3$: $10$.)

:::result
$\dfrac1{(1-x)^3}=\displaystyle\sum_{n=0}^\infty\frac{(n+1)(n+2)}2x^n=1+3x+6x^2+10x^3+\cdots$, para $|x|<1$.
:::
