---
title: "Comprimento de arco e área de superfície"
number: "09"
summary: "Dedução de L = ∫√(1+f′²), versão em y, curvas dadas por integral, quando a raiz vira quadrado perfeito, área de superfície de revolução S = 2π∫ r ds, esfera e cone, com 17 exercícios resolvidos."
status: "available"
eyebrow: "cálculo ii · aplicações da integral"
lede: "Medir o comprimento de uma curva e a área da superfície que ela gera ao girar: tudo nasce de um único elemento, o pedacinho de arco ds = √(1+f′(x)²) dx."
formula: "L=\\int_a^b\\sqrt{1+[f'(x)]^2}\\,dx"
---

## O elemento de arco $ds$ {#ds kicker="a ideia" toc="Elemento de arco"}

Como medir o comprimento de uma curva? Aproximamos por **segmentos de reta**, que sabemos medir, e passamos ao limite.

Seja $f$ com derivada **contínua** em $[a,b]$. Divida $[a,b]$ em pontos $x_0<x_1<\dots<x_n$ e una os pontos $P_k=(x_k,f(x_k))$ da curva por segmentos. O segmento de $P_{k-1}$ a $P_k$ tem comprimento (Pitágoras):

$$
\Delta s_k=\sqrt{(\Delta x_k)^2+(\Delta y_k)^2}=\sqrt{1+\left(\frac{\Delta y_k}{\Delta x_k}\right)^2}\;\Delta x_k
$$

Pelo Teorema do Valor Médio, $\dfrac{\Delta y_k}{\Delta x_k}=f'(c_k)$ para algum $c_k\in(x_{k-1},x_k)$. Somando:

$$
\sum_{k=1}^n\sqrt{1+[f'(c_k)]^2}\,\Delta x_k\;\longrightarrow\;\int_a^b\sqrt{1+[f'(x)]^2}\,dx
$$

:::formula[comprimento de arco]
$$
L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx=\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx
$$
:::

Em notação diferencial, $ds^2=dx^2+dy^2$, e $L=\int ds$. Guarde $ds$: ele reaparece na área de superfície.

:::note[Unidade]
Comprimento se mede em **u.c.** (unidades de comprimento); área de superfície em **u.a.**
:::

## Definição formal (Aula 10) {#definicao kicker="rigor" toc="Definição formal"}

A construção da Aula 10 segue estes passos.

1. **Partição.** Tome $P=\{x_0<x_1<\dots<x_n\}$ de $[a,b]$ e una os pontos $P_i=(x_i,f(x_i))$ por segmentos. A **norma** $\|P\|$ é o comprimento do maior subintervalo.
2. **Comprimento da poligonal.** É $\sum_i |P_{i-1}P_i|$, uma aproximação do arco $AB$ que melhora quando $\|P\|\to0$.
3. **Definição.** $L$ é o comprimento do arco se, para todo $\varepsilon>0$, existe $\delta>0$ tal que

$$
\|P\|<\delta\;\Longrightarrow\;\left|\sum_{i=1}^{n}|P_{i-1}P_i|-L\right|<\varepsilon .
$$

   Ou seja, $L=\lim_{\|P\|\to0}\sum_i|P_{i-1}P_i|$.
4. **Cálculo do limite.** Com $\Delta x_i=x_i-x_{i-1}$ e $\Delta y_i=y_i-y_{i-1}$, Pitágoras e o Teorema do Valor Médio dão

$$
|P_{i-1}P_i|=\sqrt{(\Delta x_i)^2+(\Delta y_i)^2}=\sqrt{1+\left(\frac{\Delta y_i}{\Delta x_i}\right)^2}\,\Delta x_i=\sqrt{1+[f'(c_i)]^2}\,\Delta x_i,\quad c_i\in(x_{i-1},x_i).
$$

   O somatório é uma soma de Riemann de $\sqrt{1+[f']^2}$, e o limite é a integral de $L$.

:::warn[Hipótese que o slide resume]
Para usar o Valor Médio, $f$ precisa ser **contínua em $[a,b]$ e derivável em $(a,b)$**. Para a integral existir, $f'$ precisa ser contínua. Continuidade sozinha **não** garante derivabilidade: $f(x)=|x|$ é contínua e não é derivável em $0$.
:::

## Curva dada como $x=g(y)$ {#em-y kicker="outra variável" toc="Versão em y"}

Se a curva é mais natural como função de $y$, o mesmo raciocínio (com os papéis trocados) dá:

:::formula[arco em y]
$$
L=\int_c^d\sqrt{1+[g'(y)]^2}\,dy
$$
:::

Use a variável em que a curva é **função** e cuja derivada é mais simples. Para $y=x^{3/2}$ escolha $x$; para $x=\frac{y^3}{3}+\frac1{4y}$ a escolha natural é $y$.

:::warn[Cuidado]
$f'$ precisa existir e ser contínua em **todo** o intervalo. Em $y=x^{2/3}$ a derivada explode em $x=0$: aí escreva $x=y^{3/2}$ e integre em $y$.
:::

## A grande dificuldade: a raiz quadrada {#raiz kicker="técnica" toc="Quadrado perfeito"}

A integral $\int\sqrt{1+f'^2}$ quase nunca é elementar. As que aparecem em exercícios são "planejadas" para que $1+f'^2$ seja um **quadrado perfeito**. Reconheça o padrão:

$$
1+f'^2=\left(a+b\right)^2\ \Longleftrightarrow\ f'=a-b\ \text{com}\ ab=\tfrac14
$$

Pois $(a+b)^2=(a-b)^2+4ab=f'^2+1$ quando $ab=\frac14$.

::::example
#### Reconhecendo o quadrado perfeito

Calcule o comprimento de $y=\dfrac{x^3}{6}+\dfrac1{2x}$ para $1\le x\le 3$.

1. Derive: $y'=\dfrac{x^2}{2}-\dfrac1{2x^2}$.
2. Eleve ao quadrado:

   $$
   y'^2=\frac{x^4}{4}-\frac12+\frac1{4x^4}
   $$

3. Some $1$: $1+y'^2=\dfrac{x^4}{4}+\dfrac12+\dfrac1{4x^4}=\left(\dfrac{x^2}{2}+\dfrac1{2x^2}\right)^2$.
4. A raiz sai sem módulo, pois a expressão é positiva:

   $$
   L=\int_1^3\left(\frac{x^2}{2}+\frac1{2x^2}\right)dx=\left[\frac{x^3}{6}-\frac1{2x}\right]_1^3
   $$

5. $\left(\dfrac{27}{6}-\dfrac16\right)-\left(\dfrac16-\dfrac12\right)=\dfrac{13}{3}+\dfrac13=\dfrac{14}{3}$.

:::result
$L=\dfrac{14}{3}$ u.c.
:::
::::

:::warn[O módulo da raiz]
$\sqrt{u^2}=|u|$. Antes de tirar a raiz, confira o **sinal** da expressão no intervalo; se mudar, divida a integral.
:::

## Curvas definidas por uma integral {#tfc kicker="TFC" toc="Curvas dadas por integral"}

Quando $y=\displaystyle\int_a^x h(t)\,dt$, **não é preciso calcular a integral**: pelo Teorema Fundamental do Cálculo, $y'=h(x)$. Basta substituir.

::::example
#### Derivando com o TFC

Comprimento de $y=\displaystyle\int_0^x\sqrt{\sec^4t-1}\,dt$ para $0\le x\le\frac\pi4$.

1. TFC: $y'=\sqrt{\sec^4x-1}$.
2. Então $1+y'^2=1+\sec^4x-1=\sec^4x$.
3. $\sqrt{\sec^4x}=\sec^2x$ (positivo).
4. $L=\displaystyle\int_0^{\pi/4}\sec^2x\,dx=[\tan x]_0^{\pi/4}=1$.

:::result
$L=1$ u.c.
:::
::::

## Área de superfície de revolução {#superficie kicker="de ds para S" toc="Área de superfície"}

Gire o pedacinho de arco $ds$ em torno de um eixo. Ele gera uma **faixa**, quase um tronco de cone, de raio $r$ (distância ao eixo) e "geratriz" $ds$. Planificada, é um retângulo fino de lados $2\pi r$ e $ds$:

$$
dS=2\pi\cdot r\cdot ds
$$

:::formula[área de superfície]
$$
S=\int 2\pi\,r\,ds=2\pi\int_a^b r(x)\sqrt{1+[f'(x)]^2}\,dx
$$
:::

O **raio** $r$ é sempre a distância do ponto da curva ao eixo:

:::tabular
| Eixo de rotação | Raio $r$ | Integral (curva $y=f(x)$) |
|---|---|---|
| eixo $x$ | $y=f(x)$ | $2\pi\int_a^b f(x)\sqrt{1+f'^2}\,dx$ |
| eixo $y$ | $x$ | $2\pi\int_a^b x\sqrt{1+f'^2}\,dx$ |
| reta $y=L$ | $\lvert f(x)-L\rvert$ | $2\pi\int_a^b\lvert f-L\rvert\sqrt{1+f'^2}\,dx$ |
:::

Para curva $x=g(y)$: eixo $y$ tem $r=g(y)$ e $ds=\sqrt{1+g'^2}\,dy$; eixo $x$ tem $r=y$.

:::note[Boa notícia]
Em muitos exercícios $r\cdot ds$ simplifica muito. Ex.: em $y=\sqrt{2x-x^2}$, $y\sqrt{1+y'^2}=1$.
:::

## Casos clássicos: cone e esfera {#classicos kicker="verificações" toc="Cone e esfera"}

::::example
#### Cone: $y=mx$ girando em torno do eixo $x$, $0\le x\le h$

1. $y'=m$, $ds=\sqrt{1+m^2}\,dx$, $r=mx$.
2. $S=2\pi\displaystyle\int_0^h mx\sqrt{1+m^2}\,dx=2\pi m\sqrt{1+m^2}\,\frac{h^2}{2}$.
3. Com raio da base $R=mh$ e geratriz $g=h\sqrt{1+m^2}$:

:::result
$S=\pi R\,g$, a fórmula da área lateral do cone.
:::
::::

::::example
#### Esfera de raio $a$: $y=\sqrt{a^2-x^2}$, $-a\le x\le a$, em torno do eixo $x$

1. $y'=\dfrac{-x}{\sqrt{a^2-x^2}}$, logo $1+y'^2=\dfrac{a^2}{a^2-x^2}$ e $\sqrt{1+y'^2}=\dfrac{a}{\sqrt{a^2-x^2}}$.
2. $r\,ds=\sqrt{a^2-x^2}\cdot\dfrac{a}{\sqrt{a^2-x^2}}\,dx=a\,dx$: **tudo cancela**.
3. $S=2\pi\displaystyle\int_{-a}^{a}a\,dx=2\pi a\cdot2a$.

:::result
$S=4\pi a^2$ u.a.
:::
::::

A mesma conta, com limites $x_1<x_2$ dentro de $[-a,a]$, dá a área de uma **calota/zona esférica**: $S=2\pi a\,(x_2-x_1)$, só depende da altura.

## Roteiro e erros comuns {#roteiro kicker="método" toc="Roteiro"}

1. Identifique a curva, o intervalo e (se houver) o eixo.
2. Escolha a variável em que a curva é função e com derivada simples.
3. Derive e calcule $1+(\text{derivada})^2$; **procure o quadrado perfeito**.
4. Para superfície, ache o raio $r$ (distância ao eixo) e monte $2\pi\int r\,ds$.
5. Integre, substitua limites, escreva unidade.

:::warn[Erros frequentes]
- Esquecer o $1+$ dentro da raiz.
- Usar $r=y$ quando o eixo é o eixo $y$ (deve ser $r=x$).
- Tirar a raiz de $u^2$ sem conferir o sinal.
- Misturar variáveis: $dx$ com $g'(y)$.
:::

::::cheat
#### arco

$$
L=\int_a^b\sqrt{1+f'^2}\,dx\quad\text{ou}\quad\int_c^d\sqrt{1+g'^2}\,dy
$$

#### superfície

$$
S=2\pi\int r\,ds,\qquad ds=\sqrt{1+f'^2}\,dx
$$

#### raio

Distância do ponto da curva ao eixo: $y$ (eixo $x$), $x$ (eixo $y$).

#### esfera

$S=4\pi a^2$; zona de altura $H$: $2\pi aH$.
::::

:::next{kicker="continuando"}
#### Para praticar e seguir adiante

- [Exercícios deste tópico](/topicos/comprimento-arco-superficie/exercicios)
- [Volumes por cascas cilíndricas](/topicos/volumes-cascas-cilindricas)
- [Sequências e séries](/topicos/sequencias-series)
:::
