---
title: "Exercícios — Substituição trigonométrica"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Cinco resoluções completas: escolha da substituição, transformação da raiz, integração e retorno ao x."
kind: "exercicios"
---

### 1. Calcule $\displaystyle\int\frac{dx}{\sqrt{9-x^2}}$.

**1. Reconheça o padrão.** A raiz é $\sqrt{a^2-x^2}$, com $a=3$. Use $x=3\sin\theta$:
$$dx=3\cos\theta\,d\theta.$$

**2. Transforme a raiz.**
$$
\sqrt{9-x^2}
=\sqrt{9-9\sin^2\theta}
=3\sqrt{1-\sin^2\theta}
=3\cos\theta,
$$
considerando o intervalo usual da substituição em que $\cos\theta\geq0$.

**3. Substitua na integral.**
$$
\int\frac{3\cos\theta}{3\cos\theta}d\theta
=\int1\,d\theta=\theta+C.
$$

**4. Volte para $x$.** Da relação $x=3\sin\theta$, obtemos $\theta=\arcsin(x/3)$.

:::result
$\boxed{\arcsin\left(\frac{x}{3}\right)+C}$
:::

### 2. Calcule $\displaystyle\int\sqrt{4+x^2}\,dx$.

**1. Reconheça o padrão.** A raiz é $\sqrt{a^2+x^2}$, com $a=2$. Use $x=2\tan\theta$:
$$dx=2\sec^2\theta\,d\theta,$$
e
$$\sqrt{4+x^2}=2\sqrt{1+\tan^2\theta}=2\sec\theta.$$

**2. Transforme a integral.**
$$
\int(2\sec\theta)(2\sec^2\theta)d\theta
=4\int\sec^3\theta\,d\theta.
$$

**3. Use a primitiva de $\sec^3\theta$.**
$$
4\int\sec^3\theta d\theta
=2\sec\theta\tan\theta
+2\ln|\sec\theta+\tan\theta|+C.
$$

**4. Retorne à variável $x$.** Como $\tan\theta=x/2$ e $\sec\theta=\sqrt{x^2+4}/2$:
$$
2\sec\theta\tan\theta
=2\cdot\frac{\sqrt{x^2+4}}2\cdot\frac x2
=\frac x2\sqrt{x^2+4}.
$$
Além disso,
$$
2\ln\left|\frac{\sqrt{x^2+4}+x}{2}\right|
=2\ln|x+\sqrt{x^2+4}|-2\ln2.
$$
O último termo é constante e pode ser absorvido em $C$.

:::result
$\boxed{\frac x2\sqrt{x^2+4}+2\ln|x+\sqrt{x^2+4}|+C}$
:::

### 3. Calcule $\displaystyle\int\frac{dx}{x^2\sqrt{x^2-4}}$, para $x>2$.

**1. Reconheça o padrão.** A raiz é $\sqrt{x^2-a^2}$, com $a=2$. Use $x=2\sec\theta$:
$$dx=2\sec\theta\tan\theta\,d\theta,$$
$$\sqrt{x^2-4}=2\tan\theta.$$

**2. Substitua todos os fatores.**
$$
\begin{aligned}
\int\frac{dx}{x^2\sqrt{x^2-4}}
&=\int\frac{2\sec\theta\tan\theta}
{(4\sec^2\theta)(2\tan\theta)}d\theta\\
&=\frac14\int\frac1{\sec\theta}d\theta
=\frac14\int\cos\theta\,d\theta.
\end{aligned}
$$

**3. Integre.**
$$\frac14\sin\theta+C.$$

**4. Construa o triângulo de retorno.** De $x=2\sec\theta$, temos $\sec\theta=x/2$. Logo, no triângulo, cateto adjacente $2$, hipotenusa $x$ e cateto oposto $\sqrt{x^2-4}$. Portanto:
$$\sin\theta=\frac{\sqrt{x^2-4}}x.$$

:::result
$\boxed{\frac{\sqrt{x^2-4}}{4x}+C}$
:::

### 4. Calcule $\displaystyle\int\frac{x^2}{\sqrt{16-x^2}}\,dx$.

**1. Escolha a substituição.** O padrão é $\sqrt{a^2-x^2}$, com $a=4$. Tome $x=4\sin\theta$:
$$dx=4\cos\theta\,d\theta,\qquad\sqrt{16-x^2}=4\cos\theta.$$

**2. Substitua e simplifique.**
$$
\begin{aligned}
\int\frac{x^2}{\sqrt{16-x^2}}dx
&=\int\frac{16\sin^2\theta}{4\cos\theta}
(4\cos\theta)d\theta\\
&=16\int\sin^2\theta\,d\theta.
\end{aligned}
$$

**3. Use a identidade de ângulo duplo.**
$$
16\int\frac{1-\cos2\theta}{2}d\theta
=8\theta-4\sin2\theta+C.
$$

**4. Volte para $x$.** Temos $\theta=\arcsin(x/4)$. Também:
$$
\sin2\theta=2\sin\theta\cos\theta
=2\cdot\frac x4\cdot\frac{\sqrt{16-x^2}}4
=\frac{x\sqrt{16-x^2}}8.
$$
Então $-4\sin2\theta=-x\sqrt{16-x^2}/2$.

:::result
$\boxed{8\arcsin\left(\frac x4\right)-\frac x2\sqrt{16-x^2}+C}$
:::

### 5. Qual substituição trigonométrica usar em cada expressão: $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$ e $\sqrt{x^2-a^2}$?

**1. Para $\sqrt{a^2-x^2}$.** Use $x=a\sin\theta$, pois
$$a^2-x^2=a^2(1-\sin^2\theta)=a^2\cos^2\theta.$$

**2. Para $\sqrt{a^2+x^2}$.** Use $x=a\tan\theta$, pois
$$a^2+x^2=a^2(1+\tan^2\theta)=a^2\sec^2\theta.$$

**3. Para $\sqrt{x^2-a^2}$.** Use $x=a\sec\theta$, pois
$$x^2-a^2=a^2(\sec^2\theta-1)=a^2\tan^2\theta.$$

**4. Regra para memorizar.** Diferença $a^2-x^2$ combina com seno; soma $a^2+x^2$ combina com tangente; diferença invertida $x^2-a^2$ combina com secante. Em cada caso, derive a substituição para obter o $dx$ correspondente.

:::result
$$\boxed{a^2-x^2:\ x=a\sin\theta\qquad
a^2+x^2:\ x=a\tan\theta\qquad
x^2-a^2:\ x=a\sec\theta}$$
:::
