---
title: "Exercícios — Área de regiões planas"
eyebrow: "cálculo ii · aula 07 · lista de exercícios"
lede: "21 exercícios graduados (do básico ao bombeamento de água), todos com resolução passo a passo. Esboce a região antes de abrir cada resposta."
kind: "exercicios"
---

### Calcule a área da região limitada por $y=x^2$, pelo eixo $x$ e pelas retas $x=0$ e $x=3$.

**Esboço.** Parábola com vértice na origem, sempre $\ge 0$: não há mudança de sinal, então a área é a própria integral.

1. Monte: $A=\displaystyle\int_0^3 x^2\,dx$.
2. Antiderivada: $\dfrac{x^3}{3}$.
3. Limites: $\dfrac{3^3}{3}-\dfrac{0^3}{3}=9-0$.

:::result
$A=9$ u.a.
:::

### Calcule a área sob $y=\sqrt{x}$ de $x=1$ a $x=4$.

1. Reescreva $\sqrt x=x^{1/2}$.
2. $A=\displaystyle\int_1^4 x^{1/2}\,dx=\left[\frac{x^{3/2}}{3/2}\right]_1^4=\frac23\left[x^{3/2}\right]_1^4$.
3. $4^{3/2}=8$ e $1^{3/2}=1$, então $A=\frac23(8-1)=\frac{14}{3}$.

:::result
$A=\dfrac{14}{3}\approx 4{,}67$ u.a.
:::

### Calcule a área sob um arco de seno: região entre $y=\sin x$ e o eixo $x$, para $0\le x\le\pi$.

1. Em $[0,\pi]$, $\sin x\ge 0$, logo $A=\int_0^\pi\sin x\,dx$.
2. Antiderivada: $-\cos x$.
3. $A=-\cos\pi-(-\cos 0)=-(-1)+1=2$.

:::result
$A=2$ u.a. — "a área de um arco do seno vale 2" é um resultado para guardar.
:::

### Calcule a área da região limitada pela parábola $y=x^2-1$ e pelo eixo $x$.

1. **Interseções com o eixo:** $x^2-1=0\Rightarrow x=\pm1$. Entre $-1$ e $1$ a parábola está **abaixo** do eixo ($y(0)=-1$).
2. Como $f\le 0$, a área é o oposto da integral (ou, equivalentemente, "eixo menos curva"):

   $$
   A=\int_{-1}^{1}\big[0-(x^2-1)\big]\,dx=\int_{-1}^{1}(1-x^2)\,dx
   $$

3. A função é par; use simetria: $A=2\int_0^1(1-x^2)\,dx=2\left[x-\frac{x^3}{3}\right]_0^1=2\left(1-\frac13\right)$.

:::result
$A=\dfrac43$ u.a. Sem o cuidado do sinal, a conta daria $-\frac43$ — impossível para uma área.
:::

### Calcule a área total (geométrica) entre $y=x^3-x$ e o eixo $x$, no intervalo $[-1,1]$.

1. **Zeros:** $x^3-x=x(x-1)(x+1)=0\Rightarrow x=-1,0,1$.
2. **Sinal:** em $(-1,0)$, tome $x=-\frac12$: $-\frac18+\frac12>0$ → positiva. Em $(0,1)$, tome $x=\frac12$: $\frac18-\frac12<0$ → negativa.
3. Divida e corrija o sinal:

   $$
   A=\int_{-1}^{0}(x^3-x)\,dx+\int_0^1\left[-(x^3-x)\right]dx
   $$

4. Primeira: $\left[\frac{x^4}{4}-\frac{x^2}{2}\right]_{-1}^0=0-\left(\frac14-\frac12\right)=\frac14$. Segunda: $\left[-\frac{x^4}{4}+\frac{x^2}{2}\right]_0^1=-\frac14+\frac12=\frac14$.
5. Soma: $\frac14+\frac14$.

:::result
$A=\dfrac12$ u.a. A integral sem módulo daria $0$ (função ímpar) — é o mesmo "paradoxo" do exemplo de $y=x^3$.
:::

### Calcule $\displaystyle\int_0^1 x\,(x^2+1)^3\,dx$ e interprete como área sob a curva $y=x(x^2+1)^3$.

1. Substituição: $u=x^2+1$, $du=2x\,dx\Rightarrow x\,dx=\frac12du$.
2. Limites: $x=0\to u=1$; $x=1\to u=2$.
3. $\displaystyle\frac12\int_1^2u^3\,du=\frac12\left[\frac{u^4}{4}\right]_1^2=\frac18(16-1)=\frac{15}{8}$.

:::result
$\dfrac{15}{8}$ — e como $y\ge0$ em $[0,1]$, esta é a área da região. Note que não precisamos voltar para $x$.
:::

### (Slide) Área no primeiro quadrante limitada por $y=x\sqrt{x^2+5}$, pelo eixo $x$ e pela reta $x=2$.

1. A região vai de $x=0$ (primeiro quadrante) até $x=2$: $A=\int_0^2x\sqrt{x^2+5}\,dx$.
2. $u=x^2+5$, $du=2x\,dx$; limites $u(0)=5$, $u(2)=9$.
3. $A=\dfrac12\displaystyle\int_5^9u^{1/2}du=\dfrac12\cdot\dfrac23\left[u^{3/2}\right]_5^9=\dfrac13\left(27-5\sqrt5\right)$.

:::result
$A=\dfrac{27-5\sqrt5}{3}\approx5{,}27$ u.a.
:::

### Calcule a área da região limitada por $y=x$ e $y=x^2$.

1. **Interseções:** $x^2=x\Rightarrow x(x-1)=0\Rightarrow x=0,1$.
2. **Quem está por cima?** Em $x=\frac12$: $x=0{,}5>x^2=0{,}25$. A reta está acima.
3. $A=\displaystyle\int_0^1(x-x^2)\,dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac12-\frac13$.

:::result
$A=\dfrac16$ u.a.
:::

### (Slide) Calcule a área da região englobada pelas curvas $y=x^2$ e $y=x+6$.

1. $x^2=x+6\Rightarrow x^2-x-6=0\Rightarrow x=-2$ ou $x=3$.
2. A reta ($y=x+6$) está acima da parábola em $(-2,3)$ (teste $x=0$: $6>0$).
3. $A=\displaystyle\int_{-2}^3(x+6-x^2)\,dx=\left[\frac{x^2}{2}+6x-\frac{x^3}{3}\right]_{-2}^3$.
4. No topo: $\frac92+18-9=\frac{27}{2}$. Embaixo: $2-12+\frac83=-\frac{22}{3}$. Diferença: $\frac{27}{2}+\frac{22}{3}=\frac{125}{6}$.

:::result
$A=\dfrac{125}{6}\approx20{,}83$ u.a.
:::

### Calcule a área entre a parábola $y=4-x^2$ e a reta $y=x+2$.

1. **Interseções:** $4-x^2=x+2\Rightarrow x^2+x-2=0\Rightarrow(x+2)(x-1)=0\Rightarrow x=-2,\ 1$.
2. Teste em $x=0$: parábola $4$, reta $2$ → a parábola está acima.
3. $A=\displaystyle\int_{-2}^1\big[(4-x^2)-(x+2)\big]dx=\int_{-2}^1(2-x-x^2)\,dx$.
4. Antiderivada: $2x-\dfrac{x^2}{2}-\dfrac{x^3}{3}$. Em $x=1$: $2-\frac12-\frac13=\frac76$. Em $x=-2$: $-4-2+\frac83=-\frac{10}{3}$.
5. $\frac76+\frac{10}{3}=\frac{7+20}{6}=\frac{27}{6}$.

:::result
$A=\dfrac92$ u.a.
:::

### Calcule a área da região limitada por $y=x^3$ e $y=x$ (as duas curvas se cruzam três vezes).

1. $x^3=x\Rightarrow x(x-1)(x+1)=0\Rightarrow x=-1,0,1$. Há **duas** regiões fechadas: uma em $[-1,0]$ e outra em $[0,1]$.
2. Em $[0,1]$: $x\ge x^3$ (a reta está acima). Em $[-1,0]$: teste $x=-\frac12$: $x^3=-0{,}125>x=-0{,}5$ → a cúbica está acima. **Quem está por cima trocou.**
3. Monte as duas integrais:

   $$
   A=\int_{-1}^0(x^3-x)\,dx+\int_0^1(x-x^3)\,dx
   $$

4. A primeira vale $\frac14$ e a segunda $\left[\frac{x^2}{2}-\frac{x^4}{4}\right]_0^1=\frac14$. (Também dá para ver pela simetria ímpar: as duas regiões são iguais.)

:::result
$A=\dfrac12$ u.a. Se integrássemos $\int_{-1}^1(x-x^3)\,dx$ direto, obteríamos $0$ — erro por não dividir.
:::

### Calcule a área entre $y=\sin x$ e $y=\cos x$, para $0\le x\le\frac\pi2$.

1. **Cruzamento:** $\sin x=\cos x\Rightarrow\tan x=1\Rightarrow x=\frac\pi4$.
2. Em $[0,\frac\pi4]$: $\cos x\ge\sin x$. Em $[\frac\pi4,\frac\pi2]$: $\sin x\ge\cos x$.
3. $A=\displaystyle\int_0^{\pi/4}(\cos x-\sin x)\,dx+\int_{\pi/4}^{\pi/2}(\sin x-\cos x)\,dx$.
4. Antiderivadas: $\sin x+\cos x$ na primeira; $-\cos x-\sin x$ na segunda.
5. Primeira: $\left(\frac{\sqrt2}{2}+\frac{\sqrt2}{2}\right)-(0+1)=\sqrt2-1$. Segunda: $(0-1)-\left(-\frac{\sqrt2}{2}-\frac{\sqrt2}{2}\right)=-1+\sqrt2$.

:::result
$A=2(\sqrt2-1)\approx0{,}83$ u.a.
:::

### Calcule a área da região limitada por $y=e^x$, $y=e^{-x}$ e a reta $x=1$.

1. **Cruzamento:** $e^x=e^{-x}\Rightarrow x=0$. A região fica entre $x=0$ e $x=1$.
2. Em $x=1$: $e>e^{-1}$, portanto $e^x$ está por cima.
3. $A=\displaystyle\int_0^1(e^x-e^{-x})\,dx=\left[e^x+e^{-x}\right]_0^1=(e+e^{-1})-(1+1)$.

:::result
$A=e+\dfrac1e-2\approx1{,}086$ u.a.
:::

### Calcule a área da região entre $x=y^2$ e $y=x-2$ (integre em $y$ e justifique).

1. Escreva as duas como $x(y)$: parábola $x=y^2$; reta $x=y+2$. Interseções: $y^2=y+2\Rightarrow(y-2)(y+1)=0\Rightarrow y=-1,2$.
2. Em $y=0$: reta $x=2$ e parábola $x=0$ → reta à direita.
3. $A=\displaystyle\int_{-1}^{2}\big[(y+2)-y^2\big]dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}$.
4. Em $y=2$: $2+4-\frac83=\frac{10}{3}$. Em $y=-1$: $\frac12-2+\frac13=-\frac76$. Diferença: $\frac{10}{3}+\frac76=\frac{27}{6}$.

:::result
$A=\dfrac92$ u.a. Em $x$ seriam duas integrais (a fronteira de baixo muda em $x=1$ e $x=4$ ...); em $y$ é uma só.
:::

### Calcule a área da região limitada por $y=\sqrt x$, $y=x-2$ e o eixo $x$.

1. **Esboço.** A região fica no primeiro quadrante: embaixo, o eixo $x$ de $0$ a $2$ e depois a reta $y=x-2$ (que corta o eixo em $x=2$); em cima, $y=\sqrt x$.
2. **Interseção de $\sqrt x$ com a reta:** $\sqrt x=x-2\Rightarrow x=(x-2)^2\Rightarrow x^2-5x+4=0\Rightarrow x=1$ ou $x=4$. Só $x=4$ serve (em $x=1$, $x-2=-1\neq\sqrt1$).
3. **Opção em $x$ (duas integrais):**

   $$
   A=\int_0^2\sqrt x\,dx+\int_2^4\big[\sqrt x-(x-2)\big]dx
   $$

4. Primeira: $\frac23\cdot2^{3/2}=\frac{4\sqrt2}{3}$. Segunda: $\frac23\left(8-2\sqrt2\right)-\left[\frac{x^2}{2}-2x\right]_2^4=\frac{16-4\sqrt2}{3}-(0-(-2))=\frac{16-4\sqrt2}{3}-2$. Soma: $\frac{4\sqrt2}{3}+\frac{16-4\sqrt2}{3}-2=\frac{16}{3}-2$.
5. **Conferência em $y$ (uma integral).** $x=y^2$ (esquerda) e $x=y+2$ (direita), $0\le y\le2$: $\int_0^2(y+2-y^2)\,dy=2+4-\frac83=\frac{10}{3}$ ✓.

:::result
$A=\dfrac{10}{3}$ u.a. — duas formas, mesmo resultado. A integração em $y$ foi mais curta.
:::

### Calcule a área da elipse $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$.

1. Aqui $a=3$, $b=2$. Pela fórmula demonstrada na teoria, $A=\pi ab$.
2. **Conferindo por integral.** $y=\pm\frac23\sqrt{9-x^2}$ e, pela simetria, $A=4\int_0^3\frac23\sqrt{9-x^2}\,dx$.
3. $\int_0^3\sqrt{9-x^2}\,dx$ é a área de um quarto de círculo de raio $3$: $\frac{9\pi}{4}$.
4. $A=4\cdot\frac23\cdot\frac{9\pi}{4}=6\pi$.

:::result
$A=6\pi\approx18{,}85$ u.a.
:::

### Calcule a área sob $y=\dfrac{x}{1+x^2}$ de $x=0$ a $x=1$.

1. $y\ge0$ em $[0,1]$, logo $A=\int_0^1\frac{x}{1+x^2}dx$.
2. Substituição: $u=1+x^2$, $du=2x\,dx$; limites $u(0)=1$, $u(1)=2$.
3. $A=\frac12\int_1^2\frac{du}{u}=\frac12\big[\ln u\big]_1^2=\frac12(\ln2-0)$.

:::result
$A=\dfrac{\ln2}{2}\approx0{,}347$ u.a.
:::

### Trabalho de uma força variável: uma partícula é movida de $x=1$ m a $x=3$ m sob a força $F(x)=x^2+2x$ N. Calcule o trabalho.

1. $W=\int_1^3F(x)\,dx=\int_1^3(x^2+2x)\,dx$.
2. Antiderivada: $\frac{x^3}{3}+x^2$.
3. Em $3$: $9+9=18$. Em $1$: $\frac13+1=\frac43$. Diferença: $\frac{50}{3}$.

:::result
$W=\dfrac{50}{3}\approx16{,}7$ J
:::

### Trabalho em uma mola: pela Lei de Hooke, $F(x)=kx$. Calcule o trabalho para esticar uma mola de $k=200$ N/m de $x=0$ até $x=0{,}1$ m.

1. A força cresce linearmente: variável, portanto integral.
2. $W=\int_0^{0{,}1}200x\,dx=\left[100x^2\right]_0^{0{,}1}=100\cdot0{,}01$.
3. **Conferência geométrica:** o gráfico de $F$ é uma reta, e o trabalho é a área do triângulo com base $0{,}1$ e altura $F(0{,}1)=20$: $\frac{0{,}1\cdot20}{2}=1$ ✓.

:::result
$W=1$ J
:::

### (Slide) Bombeamento: um tanque cônico invertido (altura $10$ m, raio da base $4$ m) está com água até $8$ m. Calcule o trabalho para bombear toda a água pela borda superior ($\rho=1000$ kg/m³, $g=9{,}8$ m/s²).

1. **Eixo:** $x$ = profundidade a partir da borda superior. A água vai de $x=2$ até $x=10$.
2. **Raio da lâmina** (semelhança): $\dfrac{r}{4}=\dfrac{10-x}{10}\Rightarrow r=\dfrac25(10-x)$.
3. **Volume:** $dV=\pi r^2dx=\dfrac{4\pi}{25}(10-x)^2dx$.
4. **Peso:** $dF=\rho g\,dV=1000\cdot9{,}8\cdot\dfrac{4\pi}{25}(10-x)^2dx=1568\pi(10-x)^2dx$.
5. **Trabalho elementar:** $dW=x\,dF$. Então

   $$
   W=1568\pi\int_2^{10}x(10-x)^2dx=1568\pi\int_2^{10}(100x-20x^2+x^3)\,dx
   $$

6. Antiderivada: $50x^2-\frac{20x^3}{3}+\frac{x^4}{4}$. Em $10$: $\frac{2500}{3}$. Em $2$: $\frac{452}{3}$. Diferença: $\frac{2048}{3}$.
7. $W=1568\pi\cdot\frac{2048}{3}=\frac{3\,211\,264\pi}{3}$.

:::result
$W\approx3{,}36\times10^6$ J.
:::

### Variante: o mesmo tanque, agora com o limite de integração mal escolhido — por que $\int_0^{10}$ **não** serve? Calcule também a área de um triângulo de base $b$ e altura $h$ por integral.

1. **Parte 1.** Integrar de $0$ a $10$ bombearia o tanque **inteiro** (cheio até a borda), mas a água só ocupa de $x=2$ a $x=10$. O trecho $0\le x\le2$ é ar: não tem massa para levantar. Os limites de integração são sempre "onde há matéria".
2. **Parte 2.** Triângulo com um vértice na origem, base $b$ no eixo $x$ e altura $h$ em $x=b$: a hipotenusa é $y=\dfrac hb\,x$.
3. $A=\displaystyle\int_0^b\frac hb\,x\,dx=\frac hb\cdot\frac{b^2}{2}=\frac{bh}{2}$.

:::result
Limites: onde há água, de $x=2$ a $x=10$. Área do triângulo: $\dfrac{bh}{2}$ — a fórmula clássica nasce da integral.
:::
