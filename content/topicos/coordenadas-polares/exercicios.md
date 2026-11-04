---
title: "Exercícios — Coordenadas polares"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Conversões, interpretação geométrica e áreas polares com limites de integração justificados."
kind: "exercicios"
---

### 1. Converta o ponto polar $(r,\theta)=(2,\pi/3)$ para coordenadas cartesianas.

**1. Use as relações de conversão.** Para um ponto polar $(r,\theta)$:
$$x=r\cos\theta,\qquad y=r\sin\theta.$$

**2. Substitua os valores.** Como $r=2$ e $\theta=\pi/3$:
$$
x=2\cos\frac\pi3=2\cdot\frac12=1,
$$
$$
y=2\sin\frac\pi3=2\cdot\frac{\sqrt3}{2}=\sqrt3.
$$

**3. Escreva o ponto cartesiano.** A coordenada $x$ é positiva e $y$ também, coerente com o ângulo de $60^\circ$, que está no primeiro quadrante.

:::result
$\boxed{(x,y)=(1,\sqrt3)}$
:::

### 2. Converta $(x,y)=(-1,\sqrt3)$ para coordenadas polares com $r>0$ e $0\leq\theta<2\pi$.

**1. Calcule a distância até a origem.** Pela relação $r^2=x^2+y^2$:
$$
r=\sqrt{(-1)^2+(\sqrt3)^2}
=\sqrt{1+3}=2.
$$

**2. Determine o quadrante.** Como $x<0$ e $y>0$, o ponto está no segundo quadrante. O ângulo de referência satisfaz
$$
\tan\alpha=\left|\frac yx\right|=\sqrt3,
$$
logo $\alpha=\pi/3$.

**3. Ajuste o ângulo ao quadrante.** No segundo quadrante, $\theta=\pi-\alpha$, então
$$\theta=\pi-\frac\pi3=\frac{2\pi}{3}.$$
Não basta usar $\arctan(y/x)$ sem verificar o quadrante, pois a tangente não determina sozinha a direção do ponto.

:::result
$\boxed{(r,\theta)=\left(2,\frac{2\pi}{3}\right)}$
:::

### 3. Calcule a área do disco limitado por $r=2$.

**1. Identifique a região.** A equação $r=2$ representa uma circunferência de raio $2$, centrada na origem. Para percorrer o disco uma vez, usamos $0\leq\theta\leq2\pi$.

**2. Aplique a fórmula da área polar.**
$$
A=\frac12\int_0^{2\pi}r^2\,d\theta.
$$
Como $r=2$, temos $r^2=4$:
$$
A=\frac12\int_0^{2\pi}4\,d\theta
=2\int_0^{2\pi}1\,d\theta.
$$

**3. Integre e avalie os limites.**
$$
A=2[\theta]_0^{2\pi}
=2(2\pi-0)=4\pi.
$$
O resultado coincide com a fórmula geométrica $\pi R^2$, para $R=2$.

:::result
$\boxed{A=4\pi}$
:::

### 4. Calcule a área limitada pela curva polar $r=\cos\theta$, para $-\pi/2\leq\theta\leq\pi/2$.

**1. Verifique o intervalo e o raio.** Nesse intervalo, $\cos\theta\geq0$. A curva é percorrida uma vez e descreve o círculo $x^2+y^2=x$, isto é, um círculo de centro $(1/2,0)$ e raio $1/2$.

**2. Use a fórmula da área polar.**
$$
A=\frac12\int_{-\pi/2}^{\pi/2}\cos^2\theta\,d\theta.
$$

**3. Transforme a potência.** Pela identidade de ângulo duplo,
$$\cos^2\theta=\frac{1+\cos(2\theta)}2.$$
Portanto,
$$
A=\frac14\int_{-\pi/2}^{\pi/2}(1+\cos2\theta)d\theta.
$$

**4. Integre.**
$$
\begin{aligned}
A&=\frac14\left[\theta+\frac{\sin2\theta}{2}\right]_{-\pi/2}^{\pi/2}\\
&=\frac14\left[\frac\pi2-\left(-\frac\pi2\right)\right]\\
&=\frac14\cdot\pi=\frac\pi4.
\end{aligned}
$$
Os termos de seno são zero nos dois extremos.

:::result
$\boxed{A=\frac\pi4}$
:::

### 5. Converta a curva polar $r=4\cos\theta$ para a forma cartesiana e identifique-a.

**1. Multiplique a equação por $r$.** Isso permite usar as relações $r^2=x^2+y^2$ e $r\cos\theta=x$:
$$r=4\cos\theta\implies r^2=4r\cos\theta.$$

**2. Faça a substituição.**
$$x^2+y^2=4x.$$

**3. Complete o quadrado em $x$.** Passe tudo para a forma de circunferência:
$$x^2-4x+y^2=0.$$
Somamos $4$ aos dois lados, completando o quadrado:
$$
x^2-4x+4+y^2=4
\implies (x-2)^2+y^2=4.
$$

**4. Identifique centro e raio.** Comparando com $(x-a)^2+(y-b)^2=R^2$, o centro é $(2,0)$ e o raio é $2$.

:::result
$\boxed{(x-2)^2+y^2=4,\quad C=(2,0),\ R=2}$
:::
