---
title: "2025.1 · Reposição do 1º Estágio (tarde)"
summary: "Discos, arruelas em $y$ entre parábola e reta, cascas em $dy$ com $x=3-y^2$, comprimento de arco com expoentes $\\frac43$ e $\\frac23$ e área de zona esférica."
tags: ["discos", "arruelas", "cascas", "comprimento de arco", "área de superfície"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Reposição do 1º estágio (tarde, 22/09/2025). Volumes, comprimento de arco e área de superfície, com figura, passo a passo e conferência."
instruction: "Resolva no papel antes de abrir o gabarito. Quando as curvas vierem como $x=\\ldots(y)$, pense em integrar em $y$."
gabaritoIntro: "Cada item traz a ideia, a montagem, as contas e uma conferência."
cta: {"text": "Discos, arruelas, cascas e comprimento de arco estão explicados do zero na Aula de Exercícios 02.", "label": "Abrir a Aula de Exercícios 02", "href": "/aulas/aula-exercicios-02/resolucoes"}
---

## Determine o volume do sólido obtido com a rotação da região limitada pelas retas $y=0$ e $x=2$ e a curva $y=x^3$ em torno do eixo $x$.

### $y=x^3$, $y=0$, $x=2$, girando em torno do eixo $x$

1. A curva toca $y=0$ em $x=0$; a região vai de $x=0$ a $x=2$ e encosta no eixo: **discos** de raio $x^3$.
2. $V=\pi\displaystyle\int_0^2(x^3)^2\,dx=\pi\int_0^2x^6\,dx=\pi\left[\frac{x^7}{7}\right]_0^2=\frac{128\pi}{7}$.

:::result
$V=\dfrac{128\pi}{7}\approx57{,}45$ u.v.
:::

## Determine o volume do sólido obtido com a rotação da região limitada pelas curvas $x=y^2+1$ e $x=y+3$ em torno do eixo $y$.

### $x=y^2+1$ e $x=y+3$, girando em torno do eixo $y$

**Ideia.** As curvas já estão em função de $y$ e o eixo é o eixo $y$: **arruelas em $dy$**.

1. Interseções: $y^2+1=y+3\iff y^2-y-2=0\iff(y-2)(y+1)=0\Rightarrow y=-1$ ou $y=2$.
2. Quem está mais longe do eixo: em $y=0$, a reta dá $x=3$ e a parábola $x=1$. Logo $R=y+3$ (externo) e $r=y^2+1$ (interno); ambos positivos, então a região não toca o eixo.
3. Monte:

   $$
   V=\pi\int_{-1}^{2}\left[(y+3)^2-(y^2+1)^2\right]dy .
   $$

4. Expanda: $(y+3)^2=y^2+6y+9$ e $(y^2+1)^2=y^4+2y^2+1$. Diferença: $-y^4-y^2+6y+8$.
5. Integre termo a termo de $-1$ a $2$:

   $$
   \int_{-1}^2(-y^4)\,dy=-\frac{32+1}{5}=-\frac{33}{5},\quad \int_{-1}^2(-y^2)\,dy=-\frac{8+1}{3}=-3,
   $$

   $$
   \int_{-1}^26y\,dy=3(4-1)=9,\quad \int_{-1}^28\,dy=24 .
   $$

6. Soma: $-\dfrac{33}{5}-3+9+24=30-\dfrac{33}5=\dfrac{117}{5}$.

:::result
$V=\dfrac{117\pi}{5}\approx73{,}51$ u.v.
:::

:::warn[Armadilha]
É $R^2-r^2$, não $(R-r)^2$. E repare que o limite inferior é negativo: $(-1)^5=-1$, então $\int_{-1}^2y^4\,dy=\frac{32-(-1)}{5}=\frac{33}{5}$.
:::

## Use o método da casca para determinar o volume do sólido obtido com a rotação da região sombreada em torno do eixo $x$ (região entre a curva $x=3-y^2$, a reta $y=\sqrt3$ e a reta $x=3$).

### Região entre $x=3-y^2$, $y=\sqrt3$ e $x=3$, girando em torno do eixo $x$

<figure class="fig"><svg viewBox="0 0 560 270" role="img" aria-label="Região entre x = 3 − y², y = √3 e x = 3" xmlns="http://www.w3.org/2000/svg"><line class="grid" x1="205.3" y1="236.0" x2="205.3" y2="24.0"/><line class="grid" x1="323.4" y1="236.0" x2="323.4" y2="24.0"/><line class="grid" x1="441.5" y1="236.0" x2="441.5" y2="24.0"/><line class="grid" x1="40.0" y1="125.8" x2="536.0" y2="125.8"/><line class="grid" x1="40.0" y1="63.7" x2="536.0" y2="63.7"/><line class="ax" x1="40.0" y1="210.6" x2="536.0" y2="210.6"/><polygon class="arrowhead" points="536.0,210.6 529.6,213.3 529.6,207.8"/><line class="ax" x1="87.2" y1="236.0" x2="87.2" y2="24.0"/><polygon class="arrowhead" points="87.2,24.0 90.0,30.4 84.5,30.4"/><text class="lbl" x="532.0" y="202.6" text-anchor="end">x</text><text class="lbl" x="97.2" y="34.0" text-anchor="start">y</text><line class="tick" x1="205.3" y1="207.6" x2="205.3" y2="213.6"/><text class="tl" x="205.3" y="227.6" text-anchor="middle">1</text><line class="tick" x1="323.4" y1="207.6" x2="323.4" y2="213.6"/><text class="tl" x="323.4" y="227.6" text-anchor="middle">2</text><line class="tick" x1="441.5" y1="207.6" x2="441.5" y2="213.6"/><text class="tl" x="441.5" y="227.6" text-anchor="middle">3</text><line class="tick" x1="84.2" y1="125.8" x2="90.2" y2="125.8"/><text class="tl" x="80.2" y="129.8" text-anchor="end">1</text><line class="tick" x1="84.2" y1="63.7" x2="90.2" y2="63.7"/><text class="tl" x="80.2" y="67.7" text-anchor="end">√3</text><polygon class="fill1" points="441.5,210.6 441.5,209.3 441.5,208.1 441.5,206.9 441.5,205.7 441.5,204.4 441.5,203.2 441.5,202.0 441.5,200.8 441.5,199.5 441.5,198.3 441.5,197.1 441.5,195.9 441.5,194.6 441.5,193.4 441.5,192.2 441.5,191.0 441.5,189.8 441.5,188.5 441.5,187.3 441.5,186.1 441.5,184.9 441.5,183.6 441.5,182.4 441.5,181.2 441.5,180.0 441.5,178.7 441.5,177.5 441.5,176.3 441.5,175.1 441.5,173.8 441.5,172.6 441.5,171.4 441.5,170.2 441.5,168.9 441.5,167.7 441.5,166.5 441.5,165.3 441.5,164.0 441.5,162.8 441.5,161.6 441.5,160.4 441.5,159.2 441.5,157.9 441.5,156.7 441.5,155.5 441.5,154.3 441.5,153.0 441.5,151.8 441.5,150.6 441.5,149.4 441.5,148.1 441.5,146.9 441.5,145.7 441.5,144.5 441.5,143.2 441.5,142.0 441.5,140.8 441.5,139.6 441.5,138.3 441.5,137.1 441.5,135.9 441.5,134.7 441.5,133.4 441.5,132.2 441.5,131.0 441.5,129.8 441.5,128.6 441.5,127.3 441.5,126.1 441.5,124.9 441.5,123.7 441.5,122.4 441.5,121.2 441.5,120.0 441.5,118.8 441.5,117.5 441.5,116.3 441.5,115.1 441.5,113.9 441.5,112.6 441.5,111.4 441.5,110.2 441.5,109.0 441.5,107.7 441.5,106.5 441.5,105.3 441.5,104.1 441.5,102.8 441.5,101.6 441.5,100.4 441.5,99.2 441.5,98.0 441.5,96.7 441.5,95.5 441.5,94.3 441.5,93.1 441.5,91.8 441.5,90.6 441.5,89.4 441.5,88.2 441.5,86.9 441.5,85.7 441.5,84.5 441.5,83.3 441.5,82.0 441.5,80.8 441.5,79.6 441.5,78.4 441.5,77.1 441.5,75.9 441.5,74.7 441.5,73.5 441.5,72.2 441.5,71.0 441.5,69.8 441.5,68.6 441.5,67.4 441.5,66.1 441.5,64.9 441.5,63.7 87.2,63.7 93.1,64.9 98.9,66.1 104.7,67.4 110.5,68.6 116.1,69.8 121.8,71.0 127.4,72.2 132.9,73.5 138.4,74.7 143.8,75.9 149.2,77.1 154.6,78.4 159.8,79.6 165.1,80.8 170.3,82.0 175.4,83.3 180.5,84.5 185.6,85.7 190.5,86.9 195.5,88.2 200.4,89.4 205.2,90.6 210.0,91.8 214.8,93.1 219.5,94.3 224.1,95.5 228.7,96.7 233.3,98.0 237.8,99.2 242.2,100.4 246.6,101.6 251.0,102.8 255.3,104.1 259.6,105.3 263.8,106.5 267.9,107.7 272.0,109.0 276.1,110.2 280.1,111.4 284.1,112.6 288.0,113.9 291.8,115.1 295.7,116.3 299.4,117.5 303.1,118.8 306.8,120.0 310.4,121.2 314.0,122.4 317.5,123.7 321.0,124.9 324.4,126.1 327.8,127.3 331.1,128.6 334.4,129.8 337.6,131.0 340.7,132.2 343.9,133.4 346.9,134.7 350.0,135.9 353.0,137.1 355.9,138.3 358.8,139.6 361.6,140.8 364.4,142.0 367.1,143.2 369.8,144.5 372.4,145.7 375.0,146.9 377.5,148.1 380.0,149.4 382.5,150.6 384.8,151.8 387.2,153.0 389.5,154.3 391.7,155.5 393.9,156.7 396.0,157.9 398.1,159.2 400.2,160.4 402.2,161.6 404.1,162.8 406.0,164.0 407.8,165.3 409.6,166.5 411.4,167.7 413.1,168.9 414.7,170.2 416.3,171.4 417.9,172.6 419.4,173.8 420.8,175.1 422.2,176.3 423.6,177.5 424.9,178.7 426.1,180.0 427.4,181.2 428.5,182.4 429.6,183.6 430.7,184.9 431.7,186.1 432.6,187.3 433.6,188.5 434.4,189.8 435.2,191.0 436.0,192.2 436.7,193.4 437.4,194.6 438.0,195.9 438.5,197.1 439.1,198.3 439.5,199.5 439.9,200.8 440.3,202.0 440.6,203.2 440.9,204.4 441.1,205.7 441.3,206.9 441.4,208.1 441.5,209.3 441.5,210.6"/><polyline class="c1" points="441.5,210.6 441.5,209.6 441.5,208.7 441.4,207.8 441.3,206.9 441.2,206.0 441.0,205.1 440.8,204.1 440.6,203.2 440.4,202.3 440.1,201.4 439.8,200.5 439.5,199.5 439.2,198.6 438.8,197.7 438.4,196.8 438.0,195.9 437.5,195.0 437.0,194.0 436.5,193.1 436.0,192.2 435.4,191.3 434.8,190.4 434.2,189.4 433.6,188.5 432.9,187.6 432.2,186.7 431.4,185.8 430.7,184.9 429.9,183.9 429.1,183.0 428.2,182.1 427.4,181.2 426.5,180.3 425.5,179.3 424.6,178.4 423.6,177.5 422.6,176.6 421.5,175.7 420.5,174.8 419.4,173.8 418.3,172.9 417.1,172.0 415.9,171.1 414.7,170.2 413.5,169.3 412.2,168.3 411.0,167.4 409.6,166.5 408.3,165.6 406.9,164.7 405.5,163.7 404.1,162.8 402.6,161.9 401.2,161.0 399.7,160.1 398.1,159.2 396.6,158.2 395.0,157.3 393.3,156.4 391.7,155.5 390.0,154.6 388.3,153.6 386.6,152.7 384.8,151.8 383.1,150.9 381.2,150.0 379.4,149.1 377.5,148.1 375.6,147.2 373.7,146.3 371.8,145.4 369.8,144.5 367.8,143.5 365.7,142.6 363.7,141.7 361.6,140.8 359.5,139.9 357.3,139.0 355.2,138.0 353.0,137.1 350.7,136.2 348.5,135.3 346.2,134.4 343.9,133.4 341.5,132.5 339.2,131.6 336.8,130.7 334.4,129.8 331.9,128.9 329.4,127.9 326.9,127.0 324.4,126.1 321.8,125.2 319.2,124.3 316.6,123.4 314.0,122.4 311.3,121.5 308.6,120.6 305.9,119.7 303.1,118.8 300.3,117.8 297.5,116.9 294.7,116.0 291.8,115.1 288.9,114.2 286.0,113.3 283.1,112.3 280.1,111.4 277.1,110.5 274.1,109.6 271.0,108.7 267.9,107.7 264.8,106.8 261.7,105.9 258.5,105.0 255.3,104.1 252.1,103.2 248.8,102.2 245.5,101.3 242.2,100.4 238.9,99.5 235.5,98.6 232.1,97.6 228.7,96.7 225.3,95.8 221.8,94.9 218.3,94.0 214.8,93.1 211.2,92.1 207.6,91.2 204.0,90.3 200.4,89.4 196.7,88.5 193.0,87.5 189.3,86.6 185.6,85.7 181.8,84.8 178.0,83.9 174.1,83.0 170.3,82.0 166.4,81.1 162.5,80.2 158.5,79.3 154.6,78.4 150.6,77.5 146.5,76.5 142.5,75.6 138.4,74.7 134.3,73.8 130.1,72.9 126.0,71.9 121.8,71.0 117.6,70.1 113.3,69.2 109.0,68.3 104.7,67.4 100.4,66.4 96.0,65.5 91.7,64.6 87.2,63.7"/><line class="c2" x1="87.2" y1="63.7" x2="441.5" y2="63.7"/><line class="c2" x1="441.5" y1="210.6" x2="441.5" y2="63.7"/><rect class="strip" x="298.6" y="115.2" width="142.9" height="4.2"/><text class="lbl c1t" x="201.3" y="114.6" text-anchor="end">x = 3 − y²</text><text class="lbl c2t" x="276.2" y="55.7" text-anchor="start">y = √3</text><text class="lbl c2t" x="447.5" y="168.2" text-anchor="start">x = 3</text><text class="lbl c3t" x="364.7" y="107.3" text-anchor="end">comprimento = y²</text></svg><figcaption>Leitura da figura da prova: para cada y entre 0 e √3, a faixa horizontal vai da curva x = 3 − y² até a reta x = 3, ou seja, tem comprimento y².</figcaption></figure>

**Ideia.** Eixo horizontal e curva em função de $y$: **cascas em $dy$**, com faixas horizontais.

1. A curva $x=3-y^2$ liga $(3,0)$ a $(0,\sqrt3)$. Para cada $y\in[0,\sqrt3]$, a faixa sombreada vai da curva ($x=3-y^2$) até a reta $x=3$: comprimento $3-(3-y^2)=y^2$.
2. Raio da casca: $y$ (distância ao eixo $x$).
3. Monte e integre:

   $$
   V=2\pi\int_0^{\sqrt3}y\cdot y^2\,dy=2\pi\left[\frac{y^4}{4}\right]_0^{\sqrt3}=2\pi\cdot\frac94=\frac{9\pi}{2}.
   $$

4. **Conferência (arruelas em $x$).** Para $x\in[0,3]$, a fatia vertical vai de $y=\sqrt{3-x}$ (curva) até $y=\sqrt3$: $\pi\int_0^3\left[3-(3-x)\right]dx=\pi\int_0^3x\,dx=\frac{9\pi}{2}$ ✓.

:::result
$V=\dfrac{9\pi}{2}$ u.v.
:::

## Determine o comprimento da curva dada pelo gráfico da função $y=\frac34x^{4/3}-\frac38x^{2/3}+5$, $0\le x\le1$.

### $y=\frac34x^{4/3}-\frac38x^{2/3}+5$, $0\le x\le1$

1. Derivada: $y'=\frac34\cdot\frac43x^{1/3}-\frac38\cdot\frac23x^{-1/3}=x^{1/3}-\frac14x^{-1/3}$.
2. Quadrado: $(y')^2=x^{2/3}-2\cdot x^{1/3}\cdot\frac14x^{-1/3}+\frac1{16}x^{-2/3}=x^{2/3}-\frac12+\frac1{16}x^{-2/3}$.
3. Some 1: $1+(y')^2=x^{2/3}+\frac12+\frac1{16}x^{-2/3}=\left(x^{1/3}+\frac14x^{-1/3}\right)^2$.
4. Integre (imprópria em $0$, mas $x^{-1/3}$ é integrável):

   $$
   L=\int_0^1\left(x^{1/3}+\frac14x^{-1/3}\right)dx=\left[\frac34x^{4/3}+\frac14\cdot\frac32x^{2/3}\right]_0^1=\frac34+\frac38=\frac98 .
   $$

:::result
$L=\dfrac98$ u.c.
:::

:::note[Padrão]
De novo o truque $1+\left(a-\frac{1}{4a}\right)^2=\left(a+\frac1{4a}\right)^2$. A constante $+5$ some na derivada e não influencia o comprimento.
:::

## Determine a área da superfície do sólido de revolução obtido com a rotação em torno do eixo $x$ da curva dada por $y=\sqrt{2x-x^2}$, com $\frac12\le x\le\frac32$.

### $y=\sqrt{2x-x^2}$, $\frac12\le x\le\frac32$, girando em torno do eixo $x$

1. $y^2=2x-x^2\iff(x-1)^2+y^2=1$: arco de circunferência de raio 1.
2. $y'=\dfrac{1-x}{y}$ e $1+(y')^2=\dfrac{y^2+(1-x)^2}{y^2}=\dfrac1{y^2}$, logo $y\sqrt{1+(y')^2}=1$.
3. $S=2\pi\displaystyle\int_{1/2}^{3/2}1\,dx=2\pi$.

:::result
$S=2\pi$ u.a.
:::
