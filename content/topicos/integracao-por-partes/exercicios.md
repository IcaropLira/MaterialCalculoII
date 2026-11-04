---
title: "Exercícios — Integração por partes"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Cinco resoluções completas: escolha de u e dv, cálculo de du e v, substituição na fórmula e simplificação final."
kind: "exercicios"
---

### 1. Calcule $\displaystyle\int xe^x\,dx$.

**1. Escolha as partes.** O fator algébrico $x$ fica mais simples ao derivar, enquanto $e^x$ continua igual ao integrar. Portanto:
$$u=x,\quad dv=e^x\,dx.$$

**2. Calcule as diferenciais e a primitiva.**
$$du=dx,\qquad v=\int e^x\,dx=e^x.$$

**3. Aplique $\int u\,dv=uv-\int v\,du$.**
$$
\begin{aligned}
\int xe^x\,dx
&=xe^x-\int e^x\,dx\\
&=xe^x-e^x+C.
\end{aligned}
$$
Colocando $e^x$ em evidência, obtemos a forma fatorada.

:::result
$\boxed{e^x(x-1)+C}$
:::

### 2. Calcule $\displaystyle\int x\cos x\,dx$.

**1. Escolha $u=x$ e $dv=\cos x\,dx$.** Assim, o fator $x$ é derivado e o cosseno é integrado:
$$u=x,\quad du=dx,\quad dv=\cos x\,dx,\quad v=\sin x.$$

**2. Substitua na fórmula.**
$$
\begin{aligned}
\int x\cos x\,dx
&=x\sin x-\int\sin x\,dx\\
&=x\sin x-(-\cos x)+C.
\end{aligned}
$$
O sinal positivo aparece porque uma primitiva de $\sin x$ é $-\cos x$, e ainda existe o sinal de menos da fórmula de partes.

:::result
$\boxed{x\sin x+\cos x+C}$
:::

### 3. Calcule $\displaystyle\int\ln x\,dx$, para $x>0$.

**1. Perceba que há um produto implícito.** Escreva $\ln x=\ln x\cdot1$. Escolhemos:
$$u=\ln x,\quad dv=dx.$$

**2. Calcule $du$ e $v$.**
$$du=\frac1x\,dx,\qquad v=x.$$

**3. Aplique integração por partes.**
$$
\begin{aligned}
\int\ln x\,dx
&=x\ln x-\int x\cdot\frac1x\,dx\\
&=x\ln x-\int1\,dx\\
&=x\ln x-x+C.
\end{aligned}
$$
A condição $x>0$ garante que $\ln x$ está definido no domínio real considerado.

:::result
$\boxed{x\ln x-x+C,\quad x>0}$
:::

### 4. Calcule $\displaystyle\int x^2e^x\,dx$.

**1. Primeira aplicação.** Escolha $u=x^2$ e $dv=e^x\,dx$. Então $du=2x\,dx$ e $v=e^x$:
$$
\int x^2e^x\,dx=x^2e^x-2\int xe^x\,dx.
$$

**2. Use o resultado do exercício 1.** Já sabemos que
$$\int xe^x\,dx=e^x(x-1)+C.$$
Substituindo:
$$
\begin{aligned}
\int x^2e^x\,dx
&=x^2e^x-2e^x(x-1)+C\\
&=e^x[x^2-2x+2]+C.
\end{aligned}
$$
O polinômio diminui de grau a cada aplicação de partes; por isso, uma segunda aplicação resolve a integral restante.

:::result
$\boxed{e^x(x^2-2x+2)+C}$
:::

### 5. Calcule $\displaystyle\int e^x\sin x\,dx$.

**1. A integral reaparece após duas aplicações.** Defina
$$I=\int e^x\sin x\,dx.$$
Na primeira aplicação, escolha $u=\sin x$ e $dv=e^x\,dx$. Temos $du=\cos x\,dx$ e $v=e^x$:
$$I=e^x\sin x-\int e^x\cos x\,dx.$$

**2. Resolva a integral restante por partes.** Defina $J=\int e^x\cos x\,dx$. Escolha $u=\cos x$ e $dv=e^x\,dx$, então $du=-\sin x\,dx$ e $v=e^x$:
$$
J=e^x\cos x-\int e^x(-\sin x)dx
=e^x\cos x+I.
$$

**3. Substitua $J$ na primeira equação.**
$$
I=e^x\sin x-(e^x\cos x+I).
$$
Distribuindo o sinal:
$$I=e^x\sin x-e^x\cos x-I.$$

**4. Isole $I$.** Somamos $I$ aos dois lados:
$$2I=e^x(\sin x-\cos x).$$
Dividimos por $2$:
:::result
$\boxed{\displaystyle\int e^x\sin x\,dx=\frac{e^x}{2}(\sin x-\cos x)+C}$
:::
