---
title: "2025.1 · 1º Estágio (tarde)"
summary: "Volume por discos, arruelas em $y$ com $x=\\operatorname{tg}y$, cascas entre retas, comprimento de arco com quadrado perfeito e área de superfície."
tags: ["discos", "arruelas", "cascas", "comprimento de arco", "área de superfície"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Prova do 1º estágio, turno da tarde: volumes de revolução, comprimento de arco e área de superfície, resolvidos passo a passo e conferidos por outro caminho."
instruction: "Resolva no papel antes de abrir o gabarito. Comece sempre pelo esboço da região."
gabaritoIntro: "Cada item mostra a ideia (qual pedacinho usar), a montagem, as contas e uma conferência."
cta: {"text": "Discos, arruelas, cascas e comprimento de arco estão explicados do zero na Aula de Exercícios 02.", "label": "Abrir a Aula de Exercícios 02", "href": "/aulas/aula-exercicios-02/resolucoes"}
---

## Determine o volume do sólido obtido com a rotação da região limitada pelas retas $y=0$, $x=0$, $x=1$ e a curva $y=e^x$ em torno do eixo $x$.

### $y=e^x$, $0\le x\le1$, girando em torno do eixo $x$

**Ideia.** A região encosta no eixo $x$: **discos** de raio $R(x)=e^x$.

1. $V=\pi\displaystyle\int_0^1(e^x)^2\,dx=\pi\int_0^1e^{2x}\,dx$.
2. Antiderivada de $e^{2x}$: $\dfrac{e^{2x}}{2}$ (substituição $u=2x$).
3. $V=\pi\left[\dfrac{e^{2x}}{2}\right]_0^1=\dfrac{\pi}{2}\left(e^2-1\right)$.

:::result
$V=\dfrac{\pi(e^2-1)}{2}\approx10{,}04$ u.v.
:::

:::warn[Armadilha]
$(e^x)^2=e^{2x}$, e não $e^{x^2}$.
:::

## Determine o volume do sólido obtido com a rotação em torno do eixo $y$ da região sombreada (abaixo de $x=\operatorname{tg}y$, acima de $y=0$ e à esquerda de $x=1$).

### Região sob $x=\operatorname{tg}y$ até $x=1$, girando em torno do eixo $y$

<figure class="fig"><svg viewBox="0 0 560 280" role="img" aria-label="Região sob x = tg y até x = 1" xmlns="http://www.w3.org/2000/svg"><line class="grid" x1="257.0" y1="246.0" x2="257.0" y2="24.0"/><line class="grid" x1="412.0" y1="246.0" x2="412.0" y2="24.0"/><line class="grid" x1="40.0" y1="65.4" x2="536.0" y2="65.4"/><line class="ax" x1="40.0" y1="217.0" x2="536.0" y2="217.0"/><polygon class="arrowhead" points="536.0,217.0 529.6,219.8 529.6,214.3"/><line class="ax" x1="102.0" y1="246.0" x2="102.0" y2="24.0"/><polygon class="arrowhead" points="102.0,24.0 104.7,30.4 99.3,30.4"/><text class="lbl" x="532.0" y="209.0" text-anchor="end">x</text><text class="lbl" x="112.0" y="34.0" text-anchor="start">y</text><line class="tick" x1="257.0" y1="214.0" x2="257.0" y2="220.0"/><text class="tl" x="257.0" y="234.0" text-anchor="middle">0.5</text><line class="tick" x1="412.0" y1="214.0" x2="412.0" y2="220.0"/><text class="tl" x="412.0" y="234.0" text-anchor="middle">1</text><line class="tick" x1="99.0" y1="65.4" x2="105.0" y2="65.4"/><text class="tl" x="95.0" y="69.4" text-anchor="end">π/4</text><polygon class="fill1" points="102.0,217.0 104.6,215.4 107.2,213.8 109.8,212.2 112.3,210.6 114.9,209.0 117.5,207.4 120.1,205.8 122.7,204.2 125.3,202.6 127.8,201.0 130.4,199.4 133.0,197.8 135.6,196.2 138.2,194.6 140.8,193.0 143.3,191.5 145.9,189.9 148.5,188.3 151.1,186.7 153.7,185.2 156.2,183.6 158.8,182.0 161.4,180.5 164.0,178.9 166.6,177.4 169.2,175.9 171.8,174.3 174.3,172.8 176.9,171.3 179.5,169.8 182.1,168.2 184.7,166.7 187.3,165.2 189.8,163.7 192.4,162.3 195.0,160.8 197.6,159.3 200.2,157.8 202.8,156.4 205.3,154.9 207.9,153.5 210.5,152.1 213.1,150.6 215.7,149.2 218.2,147.8 220.8,146.4 223.4,145.0 226.0,143.6 228.6,142.2 231.2,140.8 233.8,139.5 236.3,138.1 238.9,136.8 241.5,135.4 244.1,134.1 246.7,132.8 249.3,131.4 251.8,130.1 254.4,128.8 257.0,127.5 259.6,126.3 262.2,125.0 264.8,123.7 267.3,122.5 269.9,121.2 272.5,120.0 275.1,118.7 277.7,117.5 280.2,116.3 282.8,115.1 285.4,113.9 288.0,112.7 290.6,111.5 293.2,110.4 295.8,109.2 298.3,108.1 300.9,106.9 303.5,105.8 306.1,104.7 308.7,103.5 311.2,102.4 313.8,101.3 316.4,100.2 319.0,99.1 321.6,98.1 324.2,97.0 326.8,95.9 329.3,94.9 331.9,93.9 334.5,92.8 337.1,91.8 339.7,90.8 342.3,89.8 344.8,88.8 347.4,87.8 350.0,86.8 352.6,85.8 355.2,84.8 357.8,83.9 360.3,82.9 362.9,82.0 365.5,81.0 368.1,80.1 370.7,79.2 373.2,78.3 375.8,77.4 378.4,76.5 381.0,75.6 383.6,74.7 386.2,73.8 388.8,72.9 391.3,72.1 393.9,71.2 396.5,70.4 399.1,69.5 401.7,68.7 404.3,67.9 406.8,67.0 409.4,66.2 412.0,65.4 412.0,217.0 409.4,217.0 406.8,217.0 404.3,217.0 401.7,217.0 399.1,217.0 396.5,217.0 393.9,217.0 391.3,217.0 388.8,217.0 386.2,217.0 383.6,217.0 381.0,217.0 378.4,217.0 375.8,217.0 373.2,217.0 370.7,217.0 368.1,217.0 365.5,217.0 362.9,217.0 360.3,217.0 357.8,217.0 355.2,217.0 352.6,217.0 350.0,217.0 347.4,217.0 344.8,217.0 342.3,217.0 339.7,217.0 337.1,217.0 334.5,217.0 331.9,217.0 329.3,217.0 326.8,217.0 324.2,217.0 321.6,217.0 319.0,217.0 316.4,217.0 313.8,217.0 311.2,217.0 308.7,217.0 306.1,217.0 303.5,217.0 300.9,217.0 298.3,217.0 295.8,217.0 293.2,217.0 290.6,217.0 288.0,217.0 285.4,217.0 282.8,217.0 280.2,217.0 277.7,217.0 275.1,217.0 272.5,217.0 269.9,217.0 267.3,217.0 264.8,217.0 262.2,217.0 259.6,217.0 257.0,217.0 254.4,217.0 251.8,217.0 249.3,217.0 246.7,217.0 244.1,217.0 241.5,217.0 238.9,217.0 236.3,217.0 233.8,217.0 231.2,217.0 228.6,217.0 226.0,217.0 223.4,217.0 220.8,217.0 218.2,217.0 215.7,217.0 213.1,217.0 210.5,217.0 207.9,217.0 205.3,217.0 202.8,217.0 200.2,217.0 197.6,217.0 195.0,217.0 192.4,217.0 189.8,217.0 187.3,217.0 184.7,217.0 182.1,217.0 179.5,217.0 176.9,217.0 174.3,217.0 171.8,217.0 169.2,217.0 166.6,217.0 164.0,217.0 161.4,217.0 158.8,217.0 156.2,217.0 153.7,217.0 151.1,217.0 148.5,217.0 145.9,217.0 143.3,217.0 140.8,217.0 138.2,217.0 135.6,217.0 133.0,217.0 130.4,217.0 127.8,217.0 125.3,217.0 122.7,217.0 120.1,217.0 117.5,217.0 114.9,217.0 112.3,217.0 109.8,217.0 107.2,217.0 104.6,217.0 102.0,217.0"/><polyline class="c1" points="102.0,217.0 103.9,215.8 105.9,214.6 107.8,213.4 109.8,212.2 111.7,211.0 113.6,209.8 115.6,208.6 117.5,207.4 119.4,206.2 121.4,205.0 123.3,203.8 125.3,202.6 127.2,201.4 129.1,200.2 131.1,199.0 133.0,197.8 134.9,196.6 136.9,195.4 138.8,194.2 140.8,193.0 142.7,191.9 144.6,190.7 146.6,189.5 148.5,188.3 150.4,187.1 152.4,185.9 154.3,184.8 156.2,183.6 158.2,182.4 160.1,181.3 162.1,180.1 164.0,178.9 165.9,177.8 167.9,176.6 169.8,175.5 171.8,174.3 173.7,173.2 175.6,172.0 177.6,170.9 179.5,169.8 181.4,168.6 183.4,167.5 185.3,166.4 187.3,165.2 189.2,164.1 191.1,163.0 193.1,161.9 195.0,160.8 196.9,159.7 198.9,158.6 200.8,157.5 202.8,156.4 204.7,155.3 206.6,154.2 208.6,153.1 210.5,152.1 212.4,151.0 214.4,149.9 216.3,148.8 218.2,147.8 220.2,146.7 222.1,145.7 224.1,144.6 226.0,143.6 227.9,142.6 229.9,141.5 231.8,140.5 233.8,139.5 235.7,138.4 237.6,137.4 239.6,136.4 241.5,135.4 243.4,134.4 245.4,133.4 247.3,132.4 249.3,131.4 251.2,130.5 253.1,129.5 255.1,128.5 257.0,127.5 258.9,126.6 260.9,125.6 262.8,124.7 264.8,123.7 266.7,122.8 268.6,121.8 270.6,120.9 272.5,120.0 274.4,119.0 276.4,118.1 278.3,117.2 280.2,116.3 282.2,115.4 284.1,114.5 286.1,113.6 288.0,112.7 289.9,111.8 291.9,111.0 293.8,110.1 295.8,109.2 297.7,108.3 299.6,107.5 301.6,106.6 303.5,105.8 305.4,104.9 307.4,104.1 309.3,103.3 311.2,102.4 313.2,101.6 315.1,100.8 317.1,100.0 319.0,99.1 320.9,98.3 322.9,97.5 324.8,96.7 326.8,95.9 328.7,95.2 330.6,94.4 332.6,93.6 334.5,92.8 336.4,92.0 338.4,91.3 340.3,90.5 342.3,89.8 344.2,89.0 346.1,88.3 348.1,87.5 350.0,86.8 351.9,86.1 353.9,85.3 355.8,84.6 357.8,83.9 359.7,83.2 361.6,82.5 363.6,81.7 365.5,81.0 367.4,80.3 369.4,79.7 371.3,79.0 373.2,78.3 375.2,77.6 377.1,76.9 379.1,76.2 381.0,75.6 382.9,74.9 384.9,74.3 386.8,73.6 388.8,72.9 390.7,72.3 392.6,71.7 394.6,71.0 396.5,70.4 398.4,69.7 400.4,69.1 402.3,68.5 404.3,67.9 406.2,67.3 408.1,66.6 410.1,66.0 412.0,65.4"/><line class="c2" x1="412.0" y1="217.0" x2="412.0" y2="65.4"/><line class="ghost" x1="102.0" y1="65.4" x2="412.0" y2="65.4"/><rect class="strip" x="251.7" y="127.9" width="160.3" height="4.6"/><text class="lbl c1t" x="235.5" y="125.4" text-anchor="end">x = tg y  (y = arctg x)</text><text class="lbl c2t" x="418.0" y="139.8" text-anchor="start">x = 1</text><text class="lbl c3t" x="325.2" y="178.4" text-anchor="middle">arruela: R = 1, r = tg y</text></svg><figcaption>Região do enunciado: abaixo de x = tg y (ou seja, y ≤ arctg x), acima de y = 0 e à esquerda de x = 1. Girando em torno do eixo y, a faixa horizontal vira uma arruela de raio externo 1 e interno tg y.</figcaption></figure>

**Leitura da figura.** A curva $x=\operatorname{tg}y$ sai de $(0,0)$ e chega em $(1,\frac\pi4)$, pois $\operatorname{tg}\frac\pi4=1$. A região sombreada fica **entre a curva e a reta $x=1$**, para $0\le y\le\frac\pi4$.

**Ideia.** A curva já está escrita como $x$ em função de $y$, e o eixo é o eixo $y$: fatias horizontais são perpendiculares ao eixo, então usamos **arruelas em $dy$**: raio externo $R=1$ (reta) e interno $r=\operatorname{tg}y$ (curva).

1. Monte:

   $$
   V=\pi\int_0^{\pi/4}\left(1^2-\operatorname{tg}^2y\right)dy .
   $$

2. Use a identidade $\operatorname{tg}^2y=\sec^2y-1$: o integrando vira $1-(\sec^2y-1)=2-\sec^2y$.
3. Integre ($\int\sec^2y\,dy=\operatorname{tg}y$):

   $$
   V=\pi\Big[2y-\operatorname{tg}y\Big]_0^{\pi/4}=\pi\left(\frac\pi2-1\right).
   $$

4. **Conferência por cascas.** Em $x$: a região é $0\le y\le\operatorname{arctg}x$, $0\le x\le1$, então $V=2\pi\int_0^1x\operatorname{arctg}x\,dx$. Por partes ($u=\operatorname{arctg}x$, $dv=x\,dx$):

   $$
   \int_0^1x\operatorname{arctg}x\,dx=\Big[\tfrac{x^2}{2}\operatorname{arctg}x\Big]_0^1-\frac12\int_0^1\frac{x^2}{1+x^2}dx=\frac\pi8-\frac12\Big(1-\frac\pi4\Big)=\frac\pi4-\frac12,
   $$

   e $2\pi\left(\frac\pi4-\frac12\right)=\pi\left(\frac\pi2-1\right)$ ✓.

:::result
$V=\pi\left(\dfrac{\pi}{2}-1\right)=\dfrac{\pi^2}{2}-\pi\approx1{,}79$ u.v.
:::

## Use o método da casca para determinar o volume do sólido obtido com a rotação em torno do eixo $y$ da região limitada pelas retas $y=2x$, $y=\dfrac x2$ e $x=1$.

### $y=2x$, $y=\frac x2$, $x=1$, girando em torno do eixo $y$

1. As retas se encontram na origem; a região vai de $x=0$ até $x=1$.
2. Para $x>0$, $2x>\frac x2$: a reta $y=2x$ é o topo.
3. Casca: raio $=x$, altura $=2x-\frac x2=\frac{3x}{2}$:

   $$
   V=2\pi\int_0^1x\cdot\frac{3x}{2}\,dx=3\pi\int_0^1x^2\,dx=3\pi\cdot\frac13=\pi .
   $$

4. **Conferência (geometria).** Girar a região é o mesmo que girar o triângulo de vértices $(0,0)$, $(1,\frac12)$, $(1,2)$. Pappus: área $A=\frac12\cdot1\cdot\frac32=\frac34$; centroide em $\bar x=\frac{0+1+1}{3}=\frac23$. $V=2\pi\cdot\frac23\cdot\frac34=\pi$ ✓.

:::result
$V=\pi$ u.v.
:::

## Determine o comprimento da curva dada pelo gráfico da função $h(y)=\dfrac{y^4}{4}+\dfrac{1}{8y^2}$, $1\le y\le2$.

### $x=h(y)=\dfrac{y^4}{4}+\dfrac1{8y^2}$, $1\le y\le2$

**Ideia.** Curva $x=h(y)$: $L=\int\sqrt{1+[h'(y)]^2}\,dy$. Espere um quadrado perfeito.

1. Derivada: $h'(y)=y^3-\dfrac{1}{4y^3}$ (pois $\frac18\cdot(-2)y^{-3}=-\frac14y^{-3}$).
2. Quadrado: $[h'(y)]^2=y^6-2\cdot y^3\cdot\dfrac1{4y^3}+\dfrac1{16y^6}=y^6-\dfrac12+\dfrac1{16y^6}$.
3. Some 1:

   $$
   1+[h'(y)]^2=y^6+\frac12+\frac1{16y^6}=\left(y^3+\frac1{4y^3}\right)^2 .
   $$

4. Integre a raiz:

   $$
   L=\int_1^2\left(y^3+\frac14y^{-3}\right)dy=\left[\frac{y^4}{4}-\frac1{8y^2}\right]_1^2 .
   $$

5. Avalie: em $y=2$: $4-\dfrac1{32}$; em $y=1$: $\dfrac14-\dfrac18=\dfrac18$. Então $L=4-\dfrac1{32}-\dfrac18=4-\dfrac5{32}=\dfrac{123}{32}$.

:::result
$L=\dfrac{123}{32}\approx3{,}84$ u.c.
:::

:::note[Conferência de sanidade]
As pontas são $(h(1),1)=(\frac38,1)$ e $(h(2),2)=(\frac{129}{32},2)$. Distância reta $\approx\sqrt{3{,}66^2+1}\approx3{,}79<3{,}84$ ✓.
:::

## Determine a área da superfície do sólido de revolução obtido com a rotação em torno do eixo $x$ da região delimitada pelas funções $y=\sqrt{4-x^2}$ e $y=0$.

### $y=\sqrt{4-x^2}$ girando em torno do eixo $x$

**Ideia.** Semicírculo de raio 2 girando: esfera de raio 2.

1. $y'=\dfrac{-x}{\sqrt{4-x^2}}$, então $1+(y')^2=\dfrac{4-x^2+x^2}{4-x^2}=\dfrac{4}{4-x^2}$ e $\sqrt{1+(y')^2}=\dfrac{2}{\sqrt{4-x^2}}$.
2. Produto: $y\sqrt{1+(y')^2}=\sqrt{4-x^2}\cdot\dfrac2{\sqrt{4-x^2}}=2$.
3. $S=2\pi\displaystyle\int_{-2}^{2}2\,dx=2\pi\cdot2\cdot4=16\pi$.
4. Conferência: $4\pi r^2=4\pi\cdot4=16\pi$ ✓.

:::result
$S=16\pi$ u.a.
:::
