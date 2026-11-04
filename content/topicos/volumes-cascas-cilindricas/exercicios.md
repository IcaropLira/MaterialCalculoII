---
title: "Exercícios — Volumes por cascas cilíndricas"
eyebrow: "cálculo ii · aula 09 · lista de exercícios"
lede: "17 exercícios graduados, todos resolvidos passo a passo: raio, altura, limites, conta e conferência. Esboce a região e marque o raio da casca antes de abrir cada resposta."
kind: "exercicios"
---

Lembrete: $V=2\pi\displaystyle\int(\text{raio})\cdot(\text{altura})\,d(\text{variável perpendicular ao eixo})$. Eixo vertical $\Rightarrow$ integra em $x$; eixo horizontal $\Rightarrow$ integra em $y$.

### Gire em torno do eixo $y$ a região sob $y=x^2$, para $0\le x\le 2$.

**Leitura.** A faixa vertical em $x$ tem altura $x^2$ e fica à distância $x$ do eixo $y$.

1. Raio: $r=x$. Altura: $h=x^2-0=x^2$.
2. Montagem: $V=2\pi\displaystyle\int_0^2 x\cdot x^2\,dx=2\pi\int_0^2 x^3\,dx$.
3. Antiderivada: $\dfrac{x^4}{4}$; em $[0,2]$ dá $\dfrac{16}{4}=4$.
4. $V=2\pi\cdot 4$.

:::result
$V=8\pi$ u.v.
:::

### Gire em torno do eixo $y$ a região sob $y=\sqrt{x}$, para $0\le x\le 4$ (slide).

1. Raio $r=x$; altura $h=\sqrt x=x^{1/2}$.
2. $V=2\pi\displaystyle\int_0^4 x\cdot x^{1/2}\,dx=2\pi\int_0^4 x^{3/2}\,dx$.
3. Antiderivada: $\dfrac{x^{5/2}}{5/2}=\dfrac25x^{5/2}$.
4. Em $x=4$: $4^{5/2}=32$, então $\dfrac25\cdot32=\dfrac{64}{5}$; em $x=0$ vale $0$.
5. $V=2\pi\cdot\dfrac{64}{5}$.

:::result
$V=\dfrac{128\pi}{5}$ u.v.
:::

### Gire em torno do eixo $y$ a região limitada por $y=2x^2-x^3$ e $y=0$ (slide).

1. Interseção com $y=0$: $x^2(2-x)=0\Rightarrow x=0$ ou $x=2$. Entre elas a curva é $\ge0$.
2. Raio $r=x$; altura $h=2x^2-x^3$.
3. $V=2\pi\displaystyle\int_0^2 x(2x^2-x^3)\,dx=2\pi\int_0^2(2x^3-x^4)\,dx$.
4. Antiderivada: $\dfrac{x^4}{2}-\dfrac{x^5}{5}$.
5. Em $x=2$: $8-\dfrac{32}{5}=\dfrac85$.
6. $V=2\pi\cdot\dfrac85$.

:::result
$V=\dfrac{16\pi}{5}$ u.v.
:::

### Gire em torno do eixo $y$ a região sob $y=1+\dfrac{x^2}{4}$, entre $x=0$ e $x=2$ (slide).

1. Raio $r=x$; altura $h=1+\dfrac{x^2}{4}$.
2. $V=2\pi\displaystyle\int_0^2 x\left(1+\frac{x^2}{4}\right)dx=2\pi\int_0^2\left(x+\frac{x^3}{4}\right)dx$.
3. Antiderivada: $\dfrac{x^2}{2}+\dfrac{x^4}{16}$.
4. Em $x=2$: $2+1=3$.
5. $V=2\pi\cdot3$.

:::result
$V=6\pi$ u.v.
:::

### Gire em torno do eixo $y$ a região entre $y=x$ e $y=x^2$.

1. Interseção: $x=x^2\Rightarrow x=0$ ou $x=1$. Em $(0,1)$, $x\ge x^2$: a reta está **por cima**.
2. Raio $r=x$; altura $h=x-x^2$ (cima menos baixo).
3. $V=2\pi\displaystyle\int_0^1 x(x-x^2)\,dx=2\pi\int_0^1(x^2-x^3)\,dx$.
4. Antiderivada: $\dfrac{x^3}{3}-\dfrac{x^4}{4}$; em $x=1$: $\dfrac13-\dfrac14=\dfrac1{12}$.
5. $V=2\pi\cdot\dfrac1{12}$.

:::result
$V=\dfrac{\pi}{6}$ u.v.
:::

### Gire em torno do eixo $y$ a região entre $y=\sqrt x$ e $y=x$.

1. Interseção: $\sqrt x=x\Rightarrow x=0$ ou $x=1$; em $(0,1)$, $\sqrt x\ge x$.
2. Raio $r=x$; altura $h=\sqrt x-x$.
3. $V=2\pi\displaystyle\int_0^1\left(x^{3/2}-x^2\right)dx$.
4. Antiderivada: $\dfrac25x^{5/2}-\dfrac{x^3}{3}$; em $x=1$: $\dfrac25-\dfrac13=\dfrac1{15}$.
5. $V=2\pi\cdot\dfrac1{15}$.

:::result
$V=\dfrac{2\pi}{15}$ u.v.
:::

### Gire em torno do eixo $y$ a região sob um arco de seno: $y=\sin x$, $0\le x\le\pi$.

1. Raio $r=x$; altura $h=\sin x\ge0$ em $[0,\pi]$.
2. $V=2\pi\displaystyle\int_0^\pi x\sin x\,dx$ — precisa de **integração por partes**.
3. $u=x$, $dv=\sin x\,dx\Rightarrow du=dx$, $v=-\cos x$:
   $\displaystyle\int x\sin x\,dx=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x$.
4. Limites: $(-\pi\cos\pi+\sin\pi)-(0)=\pi$.
5. $V=2\pi\cdot\pi$.

:::result
$V=2\pi^2$ u.v.
:::

### Gire em torno do eixo $y$ a região sob $y=e^{-x^2}$, $0\le x\le1$.

1. Raio $r=x$; altura $h=e^{-x^2}$. Em discos precisaríamos inverter $y=e^{-x^2}$; com cascas não.
2. $V=2\pi\displaystyle\int_0^1xe^{-x^2}\,dx$. Substituição $u=-x^2$, $du=-2x\,dx$.
3. $\displaystyle\int xe^{-x^2}dx=-\tfrac12e^{-x^2}$.
4. Limites: $-\tfrac12e^{-1}+\tfrac12=\tfrac12(1-e^{-1})$.
5. $V=2\pi\cdot\tfrac12(1-e^{-1})$.

:::result
$V=\pi\left(1-\dfrac1e\right)\approx1{,}986$ u.v.
:::

### Gire em torno do eixo $y$ a região sob $y=x-x^2$, para $0\le x\le1$.

1. $x-x^2=x(1-x)\ge0$ em $[0,1]$.
2. $r=x$, $h=x-x^2$: $V=2\pi\displaystyle\int_0^1(x^2-x^3)\,dx$.
3. Antiderivada em $[0,1]$: $\dfrac13-\dfrac14=\dfrac1{12}$.

:::result
$V=\dfrac{\pi}{6}$ u.v.
:::

### Gire $f(x)=3x-x^2$ em torno da reta $x=-1$ (slide, o exemplo que "dói" com anéis).

1. Raízes: $x=0$ e $x=3$; a região está à direita de $x=-1$.
2. Raio: $r=x-(-1)=x+1$. Altura: $h=3x-x^2$.
3. $V=2\pi\displaystyle\int_0^3(x+1)(3x-x^2)\,dx$.
4. Expanda: $(x+1)(3x-x^2)=3x^2-x^3+3x-x^2=-x^3+2x^2+3x$.
5. Antiderivada: $-\dfrac{x^4}{4}+\dfrac{2x^3}{3}+\dfrac{3x^2}{2}$.
6. Em $x=3$: $-\dfrac{81}{4}+18+\dfrac{27}{2}=\dfrac{-81+72+54}{4}=\dfrac{45}{4}$.
7. $V=2\pi\cdot\dfrac{45}{4}$.

:::result
$V=\dfrac{45\pi}{2}$ u.v.
:::

### Gire em torno da reta $x=3$ a região entre $f(x)=x^2$ e $g(x)=x+2$ (slide).

1. Interseção: $x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow x=-1$ ou $x=2$. Em $(-1,2)$, $x+2\ge x^2$.
2. A região está à **esquerda** de $x=3$: raio $r=3-x$. Altura $h=(x+2)-x^2$.
3. $V=2\pi\displaystyle\int_{-1}^{2}(3-x)(x+2-x^2)\,dx$.
4. Expanda: $(3-x)(x+2-x^2)=3x+6-3x^2-x^2-2x+x^3=x^3-4x^2+x+6$.
5. Antiderivada: $\dfrac{x^4}{4}-\dfrac{4x^3}{3}+\dfrac{x^2}{2}+6x$.
6. Em $x=2$: $4-\dfrac{32}{3}+2+12=\dfrac{22}{3}$. Em $x=-1$: $\dfrac14+\dfrac43+\dfrac12-6=-\dfrac{47}{12}$.
7. Diferença: $\dfrac{88}{12}+\dfrac{47}{12}=\dfrac{135}{12}=\dfrac{45}{4}$.
8. $V=2\pi\cdot\dfrac{45}{4}$.

:::result
$V=\dfrac{45\pi}{2}$ u.v. (o slide escreve $\dfrac{135\pi}{6}$, que é o mesmo número).
:::

### Gire em torno da reta $x=4$ a região sob $y=x^2$, $0\le x\le2$.

1. A região está à esquerda de $x=4$: $r=4-x$; $h=x^2$.
2. $V=2\pi\displaystyle\int_0^2(4-x)x^2\,dx=2\pi\int_0^2(4x^2-x^3)\,dx$.
3. Antiderivada: $\dfrac{4x^3}{3}-\dfrac{x^4}{4}$; em $x=2$: $\dfrac{32}{3}-4=\dfrac{20}{3}$.

:::result
$V=2\pi\cdot\dfrac{20}{3}=\dfrac{40\pi}{3}$ u.v.
:::

### Gire em torno da reta $x=2$ a região entre $y=x$ e $y=x^2$.

1. Região em $0\le x\le1$, à esquerda de $x=2$: $r=2-x$; $h=x-x^2$.
2. $V=2\pi\displaystyle\int_0^1(2-x)(x-x^2)\,dx$. Expanda: $2x-2x^2-x^2+x^3=2x-3x^2+x^3$.
3. Antiderivada: $x^2-x^3+\dfrac{x^4}{4}$; em $x=1$: $1-1+\dfrac14=\dfrac14$.

:::result
$V=2\pi\cdot\dfrac14=\dfrac{\pi}{2}$ u.v.
:::

### Gire em torno da reta $y=-1$ a região sob $y=x^2$, $0\le x\le2$ (slide).

Eixo **horizontal**: cascas em $y$.

1. A região é $0\le y\le4$; para cada $y$, $x$ vai de $\sqrt y$ até $2$ (entre a parábola e a reta $x=2$). Altura: $h=2-\sqrt y$.
2. Raio: distância de $y$ até $y=-1$: $r=y+1$.
3. $V=2\pi\displaystyle\int_0^4(y+1)(2-\sqrt y)\,dy$. Expanda: $2y-y^{3/2}+2-y^{1/2}$.
4. Antiderivada: $y^2-\dfrac25y^{5/2}+2y-\dfrac23y^{3/2}$.
5. Em $y=4$: $16-\dfrac{64}{5}+8-\dfrac{16}{3}=\dfrac{240-192+120-80}{15}=\dfrac{88}{15}$.
6. $V=2\pi\cdot\dfrac{88}{15}$.

:::result
$V=\dfrac{176\pi}{15}$ u.v.
:::

### Gire em torno do eixo $x$ a região limitada por $x=0$ e $x=2y^3-2y^4$, com $0\le y\le2$.

Como o eixo de rotação é horizontal, usamos cascas cilíndricas horizontais. O raio é a distância ao eixo $x$, portanto $r=y$. A altura é a distância horizontal entre as fronteiras $x=0$ e $x=2y^3-2y^4$; distância é sempre não negativa.

1. A função $2y^3(1-y)$ é não negativa em $[0,1]$ e não positiva em $[1,2]$. Logo, a largura da casca é
   $h(y)=|2y^3-2y^4|=\begin{cases}2y^3-2y^4,&0\le y\le1,\\2y^4-2y^3,&1\le y\le2.\end{cases}$
2. Assim, precisamos separar a integral no ponto em que a função troca de sinal:
   $V=2\pi\left(\int_0^1y(2y^3-2y^4)\,dy+\int_1^2y(2y^4-2y^3)\,dy\right).$
3. Na primeira parte:
   $\int_0^1(2y^4-2y^5)\,dy=\left[\frac{2y^5}{5}-\frac{y^6}{3}\right]_0^1=\frac25-\frac13=\frac1{15}.$
4. Na segunda parte:
   $\int_1^2(2y^5-2y^4)\,dy=\left[\frac{y^6}{3}-\frac{2y^5}{5}\right]_1^2.$
   Em $y=2$, o valor é $\frac{64}{3}-\frac{64}{5}=\frac{128}{15}$. Em $y=1$, é $\frac13-\frac25=-\frac1{15}$. Portanto, a diferença é $\frac{128}{15}-(-\frac1{15})=\frac{129}{15}=\frac{43}{5}$.
5. Somando as duas partes, obtemos $\frac1{15}+\frac{129}{15}=\frac{130}{15}=\frac{26}{3}$. Finalmente,
   $V=2\pi\cdot\frac{26}{3}=\frac{52\pi}{3}.$

:::result
$V=\dfrac{52\pi}{3}$ u.v. A integral sem módulo daria $-\dfrac{256\pi}{15}$, que não pode ser um volume; o sinal negativo aparece porque a fronteira $x=2y^3-2y^4$ passa para a esquerda de $x=0$ quando $y>1$.
:::
