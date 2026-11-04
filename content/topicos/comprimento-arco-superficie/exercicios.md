---
title: "Exercícios — Comprimento de arco e área de superfície"
eyebrow: "cálculo ii · lista de exercícios"
lede: "17 exercícios graduados (11 de comprimento, 6 de superfície), todos resolvidos passo a passo. Procure o quadrado perfeito antes de abrir cada resposta."
kind: "exercicios"
---

Lembrete: $L=\int\sqrt{1+y'^2}\,dx$ e $S=2\pi\int r\sqrt{1+y'^2}\,dx$, com $r$ a distância ao eixo.

### Exemplo da Aula 10: comprimento de $f(x)=2x^{3/2}+1$, com $0\le x\le\dfrac89$.

1. Derivada: $f'(x)=3x^{1/2}$, logo $[f'(x)]^2=9x$.
2. Integrando: $1+[f']^2=1+9x$, então $L=\displaystyle\int_0^{8/9}\sqrt{1+9x}\,dx$.
3. Substituição $u=1+9x$, $du=9\,dx$. Os limites viram $u(0)=1$ e $u(8/9)=9$:

   $$
   L=\frac19\int_1^{9}u^{1/2}\,du=\frac19\cdot\frac23\Big[u^{3/2}\Big]_1^{9}=\frac{2}{27}(27-1)
   $$

:::result
$L=\dfrac{52}{27}\approx1{,}93$ u.c.
:::

### Exemplo da Aula 10: comprimento de $y=x^{2/3}$ de $A=(1,1)$ a $B=(8,4)$.

1. Derivada: $f'(x)=\dfrac{2}{3x^{1/3}}$, contínua em $[1,8]$ (o problema só aparece em $x=0$, fora do intervalo).
2. Integrando: $1+\dfrac{4}{9x^{2/3}}=\dfrac{9x^{2/3}+4}{9x^{2/3}}$, então

   $$
   L=\int_1^8\frac{\sqrt{9x^{2/3}+4}}{3x^{1/3}}\,dx .
   $$

3. Substituição $u=9x^{2/3}+4$. Então $du=6x^{-1/3}dx$, isto é, $\dfrac{dx}{x^{1/3}}=\dfrac{du}6$. Limites: $u(1)=13$ e $u(8)=40$:

   $$
   L=\frac13\cdot\frac16\int_{13}^{40}\sqrt u\,du=\frac1{18}\cdot\frac23\Big[u^{3/2}\Big]_{13}^{40}=\frac1{27}\left(40^{3/2}-13^{3/2}\right)
   $$

:::result
$L=\dfrac{40\sqrt{40}-13\sqrt{13}}{27}\approx7{,}63$ u.c.
:::

:::note[Conferindo o slide]
O slide escreve $\approx7{,}6$ u.c. e o valor exato é $7{,}6337\ldots$, de acordo.
:::

### Exemplo da Aula 10: comprimento de $f(y)=\dfrac{y^{3/2}}3-\sqrt y$, com $0\le y\le1$.

A curva é dada em função de $y$, então $L=\int\sqrt{1+[f'(y)]^2}\,dy$.

1. Derivada: $f'(y)=\dfrac{\sqrt y}2-\dfrac1{2\sqrt y}$.
2. Quadrado: $[f']^2=\dfrac y4-\dfrac12+\dfrac1{4y}$.
3. Soma com 1: $1+[f']^2=\dfrac y4+\dfrac12+\dfrac1{4y}=\left(\dfrac{\sqrt y}2+\dfrac1{2\sqrt y}\right)^2$. É o quadrado perfeito.
4. Como $\dfrac{\sqrt y}2+\dfrac1{2\sqrt y}>0$, a raiz sai sem módulo:

   $$
   L=\int_0^1\left(\frac{y^{1/2}}2+\frac{y^{-1/2}}2\right)dy=\left[\frac{y^{3/2}}3+y^{1/2}\right]_0^1=\frac13+1
   $$

:::result
$L=\dfrac43$ u.c.
:::

:::warn[Integral imprópria disfarçada]
Em $y=0$ a derivada $f'$ não existe. A integral acima é imprópria, mas converge, e o resultado vale.
:::

### Exemplo da Aula 10: comprimento da parábola $y=x^2$ de $A=(0,0)$ a $B=(2,4)$.

1. Derivada: $f'(x)=2x$, então $L=\displaystyle\int_0^2\sqrt{1+4x^2}\,dx$.
2. Não há quadrado perfeito. Faça $u=2x$ ($dx=du/2$), com $u$ de $0$ a $4$:

   $$
   L=\frac12\int_0^4\sqrt{1+u^2}\,du .
   $$

3. Use a fórmula (obtida por substituição trigonométrica $u=\operatorname{tg}\theta$ e partes):

   $$
   \int\sqrt{1+u^2}\,du=\frac u2\sqrt{1+u^2}+\frac12\ln\left(u+\sqrt{1+u^2}\right)+C .
   $$

4. Avalie de $0$ a $4$: $\dfrac12\left[2\sqrt{17}+\dfrac12\ln(4+\sqrt{17})\right]$.

:::result
$L=\sqrt{17}+\dfrac14\ln\left(4+\sqrt{17}\right)\approx4{,}647$ u.c.
:::

:::note[Conferindo o slide]
O valor numérico do slide, $\approx4{,}64$, bate com este. A expressão simbólica no slide perdeu a formatação na hora de simplificar; a forma acima é a correta e foi conferida numericamente.
:::

### Comprimento de $y=x^{3/2}$, de $x=0$ a $x=4$.

1. $y'=\dfrac32x^{1/2}$, então $1+y'^2=1+\dfrac94x$.
2. $L=\displaystyle\int_0^4\sqrt{1+\tfrac94x}\,dx$. Com $u=1+\frac94x$, $du=\frac94dx$:

   $$
   L=\frac49\int u^{1/2}du=\frac49\cdot\frac23u^{3/2}=\frac{8}{27}\left(1+\tfrac94x\right)^{3/2}
   $$

3. Em $x=4$: $u=10$; em $x=0$: $u=1$.

:::result
$L=\dfrac{8}{27}\left(10\sqrt{10}-1\right)=\dfrac{80\sqrt{10}-8}{27}\approx9{,}07$ u.c.
:::

### Comprimento de $y=\dfrac13(x^2+2)^{3/2}$, de $x=0$ a $x=3$.

1. $y'=\dfrac13\cdot\dfrac32(x^2+2)^{1/2}\cdot2x=x\sqrt{x^2+2}$.
2. $y'^2=x^2(x^2+2)=x^4+2x^2$, logo $1+y'^2=x^4+2x^2+1=(x^2+1)^2$.
3. $\sqrt{(x^2+1)^2}=x^2+1$.
4. $L=\displaystyle\int_0^3(x^2+1)\,dx=\left[\frac{x^3}{3}+x\right]_0^3=9+3$.

:::result
$L=12$ u.c.
:::

### Comprimento de $x=\dfrac{y^3}{3}+\dfrac1{4y}$, de $y=1$ a $y=3$.

1. A curva é função de $y$: $x'=y^2-\dfrac1{4y^2}$.
2. $x'^2=y^4-\dfrac12+\dfrac1{16y^4}$, então $1+x'^2=y^4+\dfrac12+\dfrac1{16y^4}=\left(y^2+\dfrac1{4y^2}\right)^2$.
3. $L=\displaystyle\int_1^3\left(y^2+\frac1{4y^2}\right)dy=\left[\frac{y^3}{3}-\frac1{4y}\right]_1^3$.
4. $\left(9-\frac1{12}\right)-\left(\frac13-\frac14\right)=\frac{107}{12}-\frac1{12}=\frac{106}{12}$.

:::result
$L=\dfrac{53}{6}$ u.c.
:::

### Comprimento da catenária $y=\cosh x=\dfrac{e^x+e^{-x}}2$, de $x=0$ a $x=1$.

1. $y'=\sinh x$.
2. $1+\sinh^2x=\cosh^2x$ (identidade fundamental), então $\sqrt{\cdot}=\cosh x>0$.
3. $L=\displaystyle\int_0^1\cosh x\,dx=\sinh1-\sinh0$.

:::result
$L=\sinh1=\dfrac{e-e^{-1}}2\approx1{,}175$ u.c.
:::

### Comprimento da parábola $y=\dfrac{x^2}2$, de $x=0$ a $x=1$.

1. $y'=x$, então $L=\displaystyle\int_0^1\sqrt{1+x^2}\,dx$.
2. Substituição trigonométrica $x=\tan\theta$: $\displaystyle\int\sec^3\theta\,d\theta=\frac12(\sec\theta\tan\theta+\ln|\sec\theta+\tan\theta|)$.
3. Voltando a $x$: $\dfrac12\left(x\sqrt{1+x^2}+\ln\left(x+\sqrt{1+x^2}\right)\right)$.
4. De $0$ a $1$: $\dfrac12\left(\sqrt2+\ln(1+\sqrt2)\right)$.

:::result
$L=\dfrac{\sqrt2}{2}+\dfrac12\ln(1+\sqrt2)\approx1{,}148$ u.c.
:::

### Comprimento de $y=\displaystyle\int_0^x\sqrt{\sec^4t-1}\,dt$, com $0\le x\le\dfrac\pi4$.

1. TFC: $y'=\sqrt{\sec^4x-1}$; não precisamos calcular a integral.
2. $1+y'^2=\sec^4x$, e $\sqrt{\sec^4x}=\sec^2x$.
3. $L=\displaystyle\int_0^{\pi/4}\sec^2x\,dx=\tan\frac\pi4-\tan0$.

:::result
$L=1$ u.c.
:::

### Comprimento de $y=\dfrac34x^{4/3}-\dfrac38x^{2/3}+5$, com $1\le x\le8$.

1. $y'=x^{1/3}-\dfrac14x^{-1/3}$.
2. $y'^2=x^{2/3}-\dfrac12+\dfrac1{16}x^{-2/3}$, então $1+y'^2=x^{2/3}+\dfrac12+\dfrac1{16}x^{-2/3}=\left(x^{1/3}+\dfrac14x^{-1/3}\right)^2$.
3. $L=\displaystyle\int_1^8\left(x^{1/3}+\frac14x^{-1/3}\right)dx=\left[\frac34x^{4/3}+\frac38x^{2/3}\right]_1^8$.
4. Em $x=8$: $\frac34\cdot16+\frac38\cdot4=12+\frac32$. Em $x=1$: $\frac34+\frac38=\frac98$.
5. $\dfrac{27}2-\dfrac98=\dfrac{108-9}{8}$.

:::result
$L=\dfrac{99}{8}$ u.c.
:::

### Área lateral do cone gerado por $y=x$, $0\le x\le1$, girando em torno do eixo $x$.

1. $y'=1$, $ds=\sqrt2\,dx$; raio $r=y=x$.
2. $S=2\pi\displaystyle\int_0^1x\sqrt2\,dx=2\sqrt2\,\pi\cdot\frac12$.

:::result
$S=\sqrt2\,\pi$ u.a. (confere com $\pi R g=\pi\cdot1\cdot\sqrt2$).
:::

### Superfície de $y=x^3$, $0\le x\le1$, em torno do eixo $x$.

1. $y'=3x^2$, $ds=\sqrt{1+9x^4}\,dx$, $r=x^3$.
2. $S=2\pi\displaystyle\int_0^1x^3\sqrt{1+9x^4}\,dx$. Faça $u=1+9x^4$, $du=36x^3dx$.
3. $S=\dfrac{2\pi}{36}\displaystyle\int_1^{10}u^{1/2}du=\dfrac{\pi}{18}\cdot\dfrac23\left[u^{3/2}\right]_1^{10}=\dfrac{\pi}{27}(10\sqrt{10}-1)$.

:::result
$S=\dfrac{\pi}{27}\left(10\sqrt{10}-1\right)\approx3{,}56$ u.a.
:::

### Superfície de $y=x^2$, $0\le x\le2$, em torno do eixo $x$.

1. $y'=2x$, $ds=\sqrt{1+4x^2}\,dx$, $r=x^2$.
2. $S=2\pi\displaystyle\int_0^2x^2\sqrt{1+4x^2}\,dx$. Faça $2x=\tan\theta$.
3. A primitiva é $\dfrac{x(8x^2+1)\sqrt{1+4x^2}}{32}-\dfrac{\operatorname{arcsinh}(2x)}{64}$ (confira derivando).
4. Em $x=2$: $\dfrac{2\cdot33\cdot\sqrt{17}}{32}-\dfrac{\operatorname{arcsinh}4}{64}$; em $0$ vale $0$. Multiplicando por $2\pi$:

:::result
$S=\dfrac{\pi}{32}\left(132\sqrt{17}-\operatorname{arcsinh}4\right)=\dfrac{\pi}{32}\left(132\sqrt{17}-\ln(4+\sqrt{17})\right)\approx53{,}23$ u.a.
:::

### Superfície de $y=x^2$, $0\le x\le1$, em torno do eixo $y$.

1. Eixo $y$: o raio é $r=x$. $ds=\sqrt{1+4x^2}\,dx$.
2. $S=2\pi\displaystyle\int_0^1x\sqrt{1+4x^2}\,dx$; $u=1+4x^2$, $du=8x\,dx$.
3. $S=\dfrac{2\pi}8\cdot\dfrac23\left[u^{3/2}\right]_1^5=\dfrac{\pi}6(5\sqrt5-1)$.

:::result
$S=\dfrac{\pi}{6}\left(5\sqrt5-1\right)\approx5{,}33$ u.a.
:::

### Superfície de $y=\sqrt x$, $0\le x\le4$, em torno do eixo $x$.

1. $y'=\dfrac1{2\sqrt x}$, $1+y'^2=1+\dfrac1{4x}=\dfrac{4x+1}{4x}$.
2. $r\,ds=\sqrt x\cdot\dfrac{\sqrt{4x+1}}{2\sqrt x}\,dx=\dfrac12\sqrt{4x+1}\,dx$: o $\sqrt x$ cancela.
3. $S=2\pi\displaystyle\int_0^4\frac12\sqrt{4x+1}\,dx=\pi\cdot\frac14\cdot\frac23\left[(4x+1)^{3/2}\right]_0^4=\frac\pi6(17\sqrt{17}-1)$.

:::result
$S=\dfrac{\pi}{6}\left(17\sqrt{17}-1\right)\approx36{,}18$ u.a.
:::

### Superfície de $y=\sqrt{2x-x^2}$, $\frac12\le x\le\frac32$, em torno do eixo $x$.

1. $y'=\dfrac{1-x}{\sqrt{2x-x^2}}$, então $1+y'^2=\dfrac{(2x-x^2)+(1-x)^2}{2x-x^2}=\dfrac1{2x-x^2}$.
2. $r\,ds=\sqrt{2x-x^2}\cdot\dfrac1{\sqrt{2x-x^2}}\,dx=dx$: de novo um cancelamento (é um círculo de raio $1$ centrado em $(1,0)$).
3. $S=2\pi\displaystyle\int_{1/2}^{3/2}dx=2\pi\cdot1$.

:::result
$S=2\pi$ u.a. (zona esférica de raio $1$ e altura $1$: $2\pi aH$).
:::
