---
title: "Exercícios — Integrais impróprias"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Cada exercício explicita o limite que define a integral, calcula esse limite e conclui a convergência."
kind: "exercicios"
---

### 1. Determine se $\displaystyle\int_1^\infty\frac1{x^3}\,dx$ converge.

**1. Identifique a impropriedade.** O intervalo é ilimitado à direita. Não substituímos $\infty$ como se fosse um número; introduzimos um limite:
$$
\int_1^\infty\frac1{x^3}dx
=\lim_{b\to\infty}\int_1^b x^{-3}dx.
$$

**2. Encontre uma primitiva.** Pela regra da potência, $\int x^{-3}dx=x^{-2}/(-2)=-1/(2x^2)$:
$$
\begin{aligned}
\int_1^b x^{-3}dx
&=\left[-\frac1{2x^2}\right]_1^b\\
&=-\frac1{2b^2}-\left(-\frac12\right)
=\frac12-\frac1{2b^2}.
\end{aligned}
$$

**3. Calcule o limite.** Como $1/b^2\to0$ quando $b\to\infty$,
$$
\lim_{b\to\infty}\left(\frac12-\frac1{2b^2}\right)=\frac12.
$$
O limite é finito; portanto, a integral converge.

:::result
$\boxed{\text{Convergente, com valor }\frac12}$
:::

### 2. Determine se $\displaystyle\int_1^\infty\frac1{\sqrt{x}}\,dx$ converge.

**1. Transforme a integral em limite.**
$$
\int_1^\infty x^{-1/2}dx
=\lim_{b\to\infty}\int_1^b x^{-1/2}dx.
$$

**2. Integre.** Como $-1/2+1=1/2$,
$$
\int x^{-1/2}dx=\frac{x^{1/2}}{1/2}=2\sqrt{x}.
$$
Logo,
$$
\int_1^b x^{-1/2}dx=[2\sqrt{x}]_1^b=2\sqrt b-2.
$$

**3. Analise o limite.** Quando $b$ cresce sem limite, $\sqrt b$ também cresce sem limite:
$$\lim_{b\to\infty}(2\sqrt b-2)=+\infty.$$
O limite não é finito. A integral diverge. Isso também é previsto pelo teste $p$: $\int_1^\infty x^{-p}dx$ converge somente para $p>1$, e aqui $p=1/2$.

:::result
$\boxed{\text{Divergente}}$
:::

### 3. Calcule $\displaystyle\int_0^1\frac1{\sqrt{x}}\,dx$.

**1. Localize a singularidade.** A função $1/\sqrt{x}=x^{-1/2}$ não está definida em $x=0$ e cresce sem limite quando $x\to0^+$. A integral é imprópria no extremo inferior:
$$
\int_0^1x^{-1/2}dx
=\lim_{a\to0^+}\int_a^1x^{-1/2}dx.
$$

**2. Calcule a integral com extremo temporário $a>0$.**
$$
\begin{aligned}
\int_a^1x^{-1/2}dx
&=[2\sqrt{x}]_a^1\\
&=2\sqrt1-2\sqrt a\\
&=2-2\sqrt a.
\end{aligned}
$$

**3. Faça $a$ tender a zero pela direita.** Como $\sqrt a\to0$,
$$\lim_{a\to0^+}(2-2\sqrt a)=2.$$
O limite existe e é finito. Portanto, a integral converge e seu valor é $2$. Note a diferença em relação ao exercício anterior: aqui a singularidade está em zero, não no infinito.

:::result
$\boxed{2\text{ (convergente)}}$
:::

### 4. Analise $\displaystyle\int_0^1\frac1x\,dx$.

**1. Escreva o limite correto.** A função tem uma singularidade no extremo $x=0$:
$$
\int_0^1\frac1x dx
=\lim_{a\to0^+}\int_a^1\frac1x dx.
$$

**2. Integre no intervalo regular $[a,1]$.**
$$
\int_a^1\frac1x dx=[\ln x]_a^1
=\ln1-\ln a=-\ln a.
$$

**3. Calcule o limite.** Quando $a\to0^+$, $\ln a\to-\infty$, portanto $-\ln a\to+\infty$. O limite não é finito e a integral diverge. Pelo teste $p$ em $(0,1]$, $\int_0^1x^{-p}dx$ converge apenas para $p<1$; neste caso $p=1$.

:::result{kind="diverge"}
$\boxed{\text{Divergente}}$
:::

### 5. Analise $\displaystyle\int_{-1}^1\frac1{x^2}\,dx$.

**1. Identifique o problema.** A função $1/x^2$ não está definida em $x=0$, que é um ponto interior do intervalo. Não podemos calcular uma única primitiva de $-1$ a $1$ e cancelar termos através da singularidade. É obrigatório separar a integral:
$$
\int_{-1}^1\frac1{x^2}dx
=\lim_{a\to0^-}\int_{-1}^{a}\frac1{x^2}dx
+\lim_{b\to0^+}\int_b^1\frac1{x^2}dx.
$$
A integral só convergiria se os dois limites fossem finitos.

**2. Analise o lado esquerdo.** Uma primitiva em cada intervalo que não contém zero é $-1/x$:
$$
\int_{-1}^{a}x^{-2}dx
=\left[-\frac1x\right]_{-1}^{a}
=-\frac1a-1.
$$
Quando $a\to0^-$, $-1/a\to+\infty$. O primeiro limite diverge.

**3. Analise o lado direito.**
$$
\int_b^1x^{-2}dx
=\left[-\frac1x\right]_b^1
=-1+\frac1b.
$$
Quando $b\to0^+$, $1/b\to+\infty$. O segundo limite também diverge.

**4. Conclua.** Como os dois lados divergem, a integral imprópria não existe como número finito. O valor principal de Cauchy, que é outro conceito, não substitui a definição usual de integral imprópria.

:::result{kind="diverge"}
$\boxed{\text{Divergente}}$
:::
