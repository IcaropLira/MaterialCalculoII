---
title: "Exercícios — Volumes: seções, discos e arruelas"
eyebrow: "cálculo ii · aula 08 · lista de exercícios"
lede: "15 exercícios graduados (prisma, cilindro, cunha, esfera, seções, discos e arruelas), todos com resolução passo a passo. Esboce o sólido antes de abrir cada resposta."
kind: "exercicios"
---

### Prisma reto de base retangular $a\times b$ e altura $c$: calcule o volume pela definição $V=\int A(x)\,dx$.

**Ideia.** Fatie perpendicularmente à altura. Cada fatia é um retângulo $a\times b$, de área constante.

1. Coloque a altura sobre o eixo: $x\in[0,c]$, com $A(x)=ab$.
2. $V=\displaystyle\int_0^c ab\,dx=ab\,x\Big|_0^c$.
3. Substituindo: $abc-0$.

:::result
$V=abc$ u.v. — a fórmula conhecida de "área da base × altura".
:::

### Cilindro circular reto de raio $r$ e altura $h$.

1. Cada seção perpendicular ao eixo é um círculo de raio $r$: $A(x)=\pi r^2$ (constante).
2. $V=\displaystyle\int_0^h \pi r^2\,dx=\pi r^2\,x\Big|_0^h$.

:::result
$V=\pi r^2 h$ u.v.
:::

### Pirâmide de base quadrada de lado $a$ e altura $h$.

**Esboço.** Com o vértice na origem e o eixo $x$ ao longo da altura, a seção a distância $x$ do vértice é um quadrado semelhante ao da base, com razão de semelhança $x/h$.

1. Lado da seção: $\ell(x)=a\,\dfrac{x}{h}$, logo $A(x)=\dfrac{a^2x^2}{h^2}$.
2. $V=\displaystyle\int_0^h\frac{a^2x^2}{h^2}\,dx=\frac{a^2}{h^2}\cdot\frac{x^3}{3}\Big|_0^h=\frac{a^2}{h^2}\cdot\frac{h^3}{3}$.

:::result
$V=\dfrac{a^2h}{3}$ u.v. — um terço do prisma de mesma base e altura.
:::

### Cone de raio da base $r$ e altura $h$ (disco: gire $y=\dfrac{r}{h}x$, $0\le x\le h$, em torno do eixo $x$).

1. Raio do disco em $x$: $f(x)=\dfrac{r}{h}x$.
2. $V=\pi\displaystyle\int_0^h\left(\frac{r}{h}x\right)^2dx=\frac{\pi r^2}{h^2}\cdot\frac{x^3}{3}\Big|_0^h$.
3. $=\dfrac{\pi r^2}{h^2}\cdot\dfrac{h^3}{3}$.

:::result
$V=\dfrac{\pi r^2h}{3}$ u.v.
:::

### Esfera de raio $r$ (gire $y=\sqrt{r^2-x^2}$, $-r\le x\le r$, em torno do eixo $x$).

1. Raio do disco: $f(x)=\sqrt{r^2-x^2}$, então $[f(x)]^2=r^2-x^2$ (a raiz some ao elevar ao quadrado).
2. $V=\pi\displaystyle\int_{-r}^{r}(r^2-x^2)\,dx=\pi\left[r^2x-\frac{x^3}{3}\right]_{-r}^{r}$.
3. Em $r$: $r^3-\frac{r^3}{3}=\frac{2r^3}{3}$; em $-r$: $-\frac{2r^3}{3}$. A diferença é $\frac{4r^3}{3}$.

:::result
$V=\dfrac{4}{3}\pi r^3$ u.v.
:::

### Gire $f(x)=\sqrt{x}$, $0\le x\le5$, em torno do eixo $x$ e, depois, $f(x)=x^2$ no mesmo intervalo. Compare.

1. Para $\sqrt x$: $V=\pi\displaystyle\int_0^5(\sqrt x)^2dx=\pi\int_0^5x\,dx=\pi\dfrac{x^2}{2}\Big|_0^5=\dfrac{25\pi}{2}$.
2. Para $x^2$: $V=\pi\displaystyle\int_0^5x^4dx=\pi\dfrac{x^5}{5}\Big|_0^5=\dfrac{3125\pi}{5}=625\pi$.

:::result
$\dfrac{25\pi}{2}$ u.v. e $625\pi$ u.v. Mesmo sendo $\sqrt x$ e $x^2$ inversas uma da outra, trocar a função (ou o eixo) muda totalmente o sólido e o volume.
:::

### Gire $f(y)=e^{y}$, $-5\le y\le2$, em torno do eixo $y$.

**Atenção.** A variável é $y$: o disco tem raio $f(y)$ e a integral é em $dy$.

1. $V=\pi\displaystyle\int_{-5}^{2}(e^y)^2dy=\pi\int_{-5}^2e^{2y}dy$.
2. Antiderivada: $\dfrac{e^{2y}}{2}$.
3. $V=\dfrac{\pi}{2}\left(e^{4}-e^{-10}\right)$.

:::result
$V=\dfrac{\pi e^4}{2}-\dfrac{\pi}{2e^{10}}$ u.v.
:::

### Cunha cortada de um cilindro de raio $3$ por dois planos: um perpendicular ao eixo e outro cruzando o primeiro a $45^\circ$ no centro. Calcule o volume.

**Esboço.** A base é a semicircunferência $x^2+y^2=9$, $x\ge0$. A seção perpendicular ao eixo $x$ é um retângulo.

1. Altura da seção: o plano a $45^\circ$ forma um triângulo retângulo isósceles de catetos $x$, logo a altura é $x$.
2. Largura: vai de $y=-\sqrt{9-x^2}$ a $y=\sqrt{9-x^2}$, isto é, $2\sqrt{9-x^2}$.
3. $A(x)=2x\sqrt{9-x^2}$ e $V=\displaystyle\int_0^3 2x\sqrt{9-x^2}\,dx$.
4. Substituição $u=9-x^2$, $du=-2x\,dx$; limites $x=0\to u=9$ e $x=3\to u=0$:
$$V=\int_9^0-\sqrt u\,du=\int_0^9u^{1/2}du=\frac23u^{3/2}\Big|_0^9=\frac23\cdot27.$$

:::result
$V=18$ u.v.
:::

### Seções quadradas: o sólido fica entre $x=0$ e $x=4$ e a seção perpendicular ao eixo $x$ é um quadrado cuja diagonal vai de $y=-\sqrt x$ a $y=\sqrt x$.

1. Diagonal: $d=\sqrt x-(-\sqrt x)=2\sqrt x$.
2. Área de um quadrado de diagonal $d$: $A=\dfrac{d^2}{2}$. Então $A(x)=\dfrac{4x}{2}=2x$.
3. $V=\displaystyle\int_0^4 2x\,dx=x^2\Big|_0^4=16$.

:::result
$V=16$ u.v.
:::

### Seções triangulares equiláteras: a base do sólido é a região entre $y=2\sqrt{\sin x}$ e o eixo $x$, $0\le x\le\pi$; cada seção perpendicular ao eixo $x$ é um triângulo equilátero com lado na região.

1. Lado: $s=2\sqrt{\sin x}$, logo $s^2=4\sin x$.
2. Área do equilátero de lado $s$: $\dfrac{\sqrt3}{4}s^2$, então $A(x)=\sqrt3\sin x$.
3. $V=\sqrt3\displaystyle\int_0^\pi\sin x\,dx=\sqrt3\,[-\cos x]_0^\pi=\sqrt3\cdot2$.

:::result
$V=2\sqrt3$ u.v.
:::

### Seções em semicírculos: a base é o disco $x^2+y^2\le1$ e as seções perpendiculares ao eixo $x$ são semicírculos com diâmetro na base.

1. Diâmetro em $x$: $2\sqrt{1-x^2}$, portanto raio $\sqrt{1-x^2}$.
2. Área do semicírculo: $A(x)=\dfrac{\pi}{2}(1-x^2)$.
3. $V=\dfrac\pi2\displaystyle\int_{-1}^1(1-x^2)\,dx=\dfrac\pi2\left[x-\dfrac{x^3}{3}\right]_{-1}^1=\dfrac\pi2\cdot\dfrac43$.

:::result
$V=\dfrac{2\pi}{3}$ u.v.
:::

### Arruelas (Aula 08): $f(x)=\dfrac12+x^2$ e $g(x)=x$, $0\le x\le2$, girando em torno do eixo $x$. Calcule o volume do sólido exterior ao gerado por $g$ e interior ao gerado por $f$.

**Esboço.** Em $[0,2]$ temos $f\ge g$ (pois $x^2-x+\frac12>0$ sempre). A arruela tem raio externo $f$ e interno $g$.

1. $V=\pi\displaystyle\int_0^2\left[\left(\tfrac12+x^2\right)^2-x^2\right]dx$.
2. Expanda: $\tfrac14+x^2+x^4-x^2=\tfrac14+x^4$.
3. $V=\pi\left[\dfrac x4+\dfrac{x^5}{5}\right]_0^2=\pi\left(\dfrac12+\dfrac{32}{5}\right)$.

:::result
$V=\dfrac{69\pi}{10}\approx21{,}66$ u.v.
:::

### Arruelas em torno do eixo $y$: a região no primeiro quadrante entre $y=x^2$ e $y=2x$ gira em torno do eixo $y$.

1. Escreva em função de $y$: $y=x^2\Rightarrow x=\sqrt y$ (curva da direita); $y=2x\Rightarrow x=\dfrac y2$ (curva da esquerda).
2. Interseção: $\sqrt y=\dfrac y2\Rightarrow y=0$ ou $y=4$.
3. Raio externo $\sqrt y$, interno $\dfrac y2$:
$$V=\pi\int_0^4\left(y-\frac{y^2}{4}\right)dy=\pi\left[\frac{y^2}{2}-\frac{y^3}{12}\right]_0^4=\pi\left(8-\frac{16}{3}\right).$$

:::result
$V=\dfrac{8\pi}{3}$ u.v.
:::

### Arruelas entre duas parábolas/retas: região limitada por $y=4-x^2$ e $y=2-x$, girando em torno do eixo $x$.

1. Interseção: $4-x^2=2-x\Rightarrow x^2-x-2=0\Rightarrow x=-1$ ou $x=2$.
2. Em $[-1,2]$: $4-x^2\ge2-x\ge0$, então o raio externo é $4-x^2$ e o interno é $2-x$ (a região não cruza o eixo).
3. $V=\pi\displaystyle\int_{-1}^{2}\left[(4-x^2)^2-(2-x)^2\right]dx$.
4. Expanda: $(16-8x^2+x^4)-(4-4x+x^2)=x^4-9x^2+4x+12$.
5. Antiderivada: $\dfrac{x^5}{5}-3x^3+2x^2+12x$. Em $2$: $\frac{32}{5}-24+8+24=\frac{32}{5}+8=\frac{72}{5}$. Em $-1$: $-\frac15+3+2-12=-\frac15-7=-\frac{36}{5}$.
6. Diferença: $\dfrac{72}{5}+\dfrac{36}{5}=\dfrac{108}{5}$.

:::result
$V=\dfrac{108\pi}{5}$ u.v.
:::

### Eixo deslocado: a região acima de $y=2\sin x$ e abaixo de $y=2$, para $0\le x\le\pi/2$, gira em torno da reta $y=2$.

**Esboço.** A região encosta no eixo de rotação ($y=2$), então não há buraco: é um disco, de raio igual à distância até a reta, $2-2\sin x$.

1. $V=\pi\displaystyle\int_0^{\pi/2}(2-2\sin x)^2dx=4\pi\int_0^{\pi/2}\left(1-2\sin x+\sin^2x\right)dx$.
2. Use $\sin^2x=\dfrac{1-\cos2x}{2}$: o integrando vira $\dfrac32-2\sin x-\dfrac{\cos2x}{2}$.
3. Antiderivada: $\dfrac{3x}{2}+2\cos x-\dfrac{\sin2x}{4}$. Em $\pi/2$: $\dfrac{3\pi}{4}+0-0$. Em $0$: $2$. Diferença: $\dfrac{3\pi}{4}-2$.
4. $V=4\pi\left(\dfrac{3\pi}{4}-2\right)$.

:::result
$V=\pi(3\pi-8)=3\pi^2-8\pi\approx3{,}29$ u.v.
:::
