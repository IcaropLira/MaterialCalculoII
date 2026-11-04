---
title: "Exercícios — Sequências e séries"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Resoluções passo a passo: limites, reconhecimento de séries geométricas, p-séries e teste do termo geral."
kind: "exercicios"
---

### 1. Calcule $\displaystyle\lim_{n\to\infty}\frac{3n^2+1}{n^2-4}$.

**1. Compare os graus.** Numerador e denominador têm grau $2$. Dividimos todos os termos por $n^2$, que é a maior potência:
$$
\frac{3n^2+1}{n^2-4}
=\frac{3+\frac1{n^2}}{1-\frac4{n^2}}.
$$

**2. Calcule os limites auxiliares.** Como $n\to\infty$, temos $1/n^2\to0$ e $4/n^2\to0$. Assim, o numerador tende a $3$ e o denominador tende a $1$.

**3. Use as propriedades de limites.** O limite do denominador é diferente de zero, então podemos dividir os limites:
$$
\lim_{n\to\infty}\frac{3+1/n^2}{1-4/n^2}=\frac31=3.
$$

:::result
$\boxed{3}$
:::

### 2. Determine a convergência e a soma de $\displaystyle\sum_{n=0}^{\infty}\left(\frac13\right)^n$.

**1. Reconheça a forma geométrica.** Uma série geométrica tem a forma $\sum_{n=0}^{\infty}ar^n$. Aqui, o primeiro termo é $a=1$ e a razão é $r=1/3$, pois cada termo é obtido multiplicando o anterior por $1/3$:
$$1+\frac13+\frac19+\frac1{27}+\cdots.$$

**2. Verifique a condição de convergência.** A série geométrica converge quando $|r|<1$. Como $|1/3|<1$, ela converge.

**3. Calcule a soma.** Para uma série geométrica iniciada em $n=0$, a soma é $S=a/(1-r)$:
$$
S=\frac{1}{1-\frac13}
=\frac{1}{\frac23}
=\frac32.
$$

:::result
$\boxed{\text{Convergente; soma }\frac32}$
:::

### 3. A série harmônica $\displaystyle\sum_{n=1}^{\infty}\frac1n$ converge?

**1. Identifique a família.** A série é uma p-série:
$$\sum_{n=1}^{\infty}\frac1{n^p},$$
com $p=1$.

**2. Aplique o critério da p-série.** Esse tipo de série converge se, e somente se, $p>1$. Quando $p\leq1$, diverge. Como $p=1$, não há convergência.

**3. Conclusão.** A série harmônica diverge, embora seus termos individuais tendam a zero. Isso ilustra que $a_n\to0$ é condição necessária para a convergência de uma série, mas não é condição suficiente.

:::result{kind="diverge"}
$\boxed{\text{Divergente}}$
:::

### 4. Teste a série $\displaystyle\sum_{n=1}^{\infty}\frac1{n^3}$.

**1. Reconheça a p-série.** O termo geral é $1/n^3$, portanto $p=3$.

**2. Aplique o critério.** Como $3>1$, a p-série converge. Não é necessário calcular sua soma para decidir a convergência; a soma exata é um problema diferente.

:::result
$\boxed{\text{Convergente (p-série com }p=3\text{)}}$
:::

### 5. A série $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n+1}$ converge?

**1. Comece pelo teste do termo geral.** Se uma série $\sum a_n$ converge, necessariamente $\lim_{n\to\infty}a_n=0$. Portanto, antes de tentar testes mais elaborados, calculamos:
$$
\lim_{n\to\infty}\frac{n}{n+1}
=\lim_{n\to\infty}\frac{1}{1+1/n}
=\frac11=1.
$$

**2. Compare com a condição necessária.** O termo geral tende a $1$, e não a zero. Logo, a condição necessária para convergência falha.

**3. Conclua.** Pelo teste da divergência (teste do termo geral), a série diverge. Não precisamos calcular as somas parciais.

:::result{kind="diverge"}
$\boxed{\text{Divergente}}$
:::
