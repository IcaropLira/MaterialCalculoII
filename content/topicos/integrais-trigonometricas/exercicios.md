---
title: "Exercícios — Integrais trigonométricas"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Cinco resoluções completas com escolha explícita da identidade, substituição e tratamento dos sinais."
kind: "exercicios"
---

### 1. Calcule $\displaystyle\int\sin^3x\cos^2x\,dx$.

**1. Observe os expoentes.** A potência do seno é ímpar. Separe um fator $\sin x$ e transforme os outros dois fatores usando $\sin^2x=1-\cos^2x$:
$$
\int\sin^2x\cos^2x\sin x\,dx
=\int(1-\cos^2x)\cos^2x\sin x\,dx.
$$

**2. Faça a substituição que acompanha o fator separado.** Tome $u=\cos x$. Então $du=-\sin x\,dx$:
$$
-\int(1-u^2)u^2\,du
=-\int(u^2-u^4)\,du.
$$

**3. Integre termo a termo.**
$$
-\left(\frac{u^3}{3}-\frac{u^5}{5}\right)+C
=-\frac{u^3}{3}+\frac{u^5}{5}+C.
$$

**4. Retorne à variável original.**
:::result
$\boxed{-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C}$
:::

### 2. Calcule $\displaystyle\int\sin^2x\,dx$.

**1. O expoente é par.** Não existe um fator seno isolado que deixe imediatamente a derivada da função restante. Use a identidade de ângulo duplo:
$$\sin^2x=\frac{1-\cos2x}{2}.$$

**2. Substitua na integral e separe.**
$$
\begin{aligned}
\int\sin^2x\,dx
&=\frac12\int(1-\cos2x)dx\\
&=\frac12\left(\int1\,dx-\int\cos2x\,dx\right).
\end{aligned}
$$

**3. Integre com atenção à regra da cadeia inversa.** Como $\frac{d}{dx}\sin2x=2\cos2x$, temos $\int\cos2x\,dx=\frac12\sin2x$:
:::result
$\boxed{\frac{x}{2}-\frac{\sin2x}{4}+C}$
:::

### 3. Calcule $\displaystyle\int\tan^3x\sec^2x\,dx$.

**1. Identifique a derivada presente.** Como $\frac{d}{dx}\tan x=\sec^2x$, mantenha o fator $\sec^2x\,dx$ e escolha $u=\tan x$.

**2. Substitua.**
$$u=\tan x,\qquad du=\sec^2x\,dx.$$
Assim,
$$\int\tan^3x\sec^2x\,dx=\int u^3du.$$

**3. Integre e volte para $x$.**
$$\int u^3du=\frac{u^4}{4}+C.$$

:::result
$\boxed{\frac{\tan^4x}{4}+C}$
:::

### 4. Calcule $\displaystyle\int\sec^3x\,dx$.

**1. Este caso exige integração por partes.** Defina $I=\int\sec^3x\,dx=\int\sec x\sec^2x\,dx$. Escolha $u=\sec x$ e $dv=\sec^2x\,dx$:
$$du=\sec x\tan x\,dx,\qquad v=\tan x.$$

**2. Aplique partes.**
$$
I=\sec x\tan x-\int\tan x\sec x\tan x\,dx
=\sec x\tan x-\int\sec x\tan^2x\,dx.
$$

**3. Use $\tan^2x=\sec^2x-1$.**
$$
I=\sec x\tan x-\int\sec x(\sec^2x-1)dx.
$$
Distribuindo:
$$I=\sec x\tan x-I+\int\sec x\,dx.$$

**4. Isole $I$.** Como $\int\sec x\,dx=\ln|\sec x+\tan x|+C$:
$$
2I=\sec x\tan x+\ln|\sec x+\tan x|+C.
$$

:::result
$\boxed{\frac12\sec x\tan x+\frac12\ln|\sec x+\tan x|+C}$
:::

### 5. Calcule $\displaystyle\int\sin(3x)\cos(2x)\,dx$.

**1. Os argumentos são diferentes.** Em vez de tentar separar potências, use produto-para-soma:
$$\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)].$$
Com $A=3x$ e $B=2x$:
$$\sin(3x)\cos(2x)=\frac12[\sin(5x)+\sin x].$$

**2. Integre os dois termos.**
$$
\begin{aligned}
\int\sin(3x)\cos(2x)dx
&=\frac12\int\sin5x\,dx+\frac12\int\sin x\,dx\\
&=-\frac{\cos5x}{10}-\frac{\cos x}{2}+C.
\end{aligned}
$$
O fator $1/5$ aparece porque a derivada de $\sin5x$ contém o fator $5$.

:::result
$\boxed{-\frac{\cos5x}{10}-\frac{\cos x}{2}+C}$
:::
