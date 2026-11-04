---
title: "Exercícios — Frações parciais"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Cinco problemas resolvidos sem omitir a montagem da decomposição, a determinação dos coeficientes nem a integração."
kind: "exercicios"
---

### 1. Integre $\displaystyle\int\frac{2x+3}{(x+1)(x+2)}\,dx$.

**1. Identifique o método.** O integrando é uma função racional. O denominador já está fatorado em dois fatores lineares distintos e o grau do numerador é menor que o do denominador. Portanto, a fração é própria e podemos decompor diretamente.

**2. Monte a decomposição.** Para cada fator linear simples, usamos uma constante no numerador:
$$
\frac{2x+3}{(x+1)(x+2)}=\frac{A}{x+1}+\frac{B}{x+2}.
$$
Multiplicando os dois lados por $(x+1)(x+2)$:
$$
2x+3=A(x+2)+B(x+1).
$$

**3. Determine $A$ e $B$.** Escolha valores que anulem um dos termos. Para $x=-1$:
$$2(-1)+3=A(1)+B(0)\implies A=1.$$
Para $x=-2$:
$$2(-2)+3=A(0)+B(-1)\implies -1=-B\implies B=1.$$
Logo,
$$
\frac{2x+3}{(x+1)(x+2)}=\frac1{x+1}+\frac1{x+2}.
$$

**4. Integre termo a termo.** Usamos $\int\frac{1}{x-a}\,dx=\ln|x-a|+C$:
$$
\begin{aligned}
\int\frac{2x+3}{(x+1)(x+2)}\,dx
&=\int\frac{1}{x+1}\,dx+\int\frac{1}{x+2}\,dx\\
&=\ln|x+1|+\ln|x+2|+C.
\end{aligned}
$$

:::result
$\boxed{\ln|x+1|+\ln|x+2|+C}$
:::

### 2. Integre $\displaystyle\int\frac{1}{x^2-1}\,dx$.

**1. Fatore o denominador.** A diferença de quadrados fornece
$$x^2-1=(x-1)(x+1).$$
Os fatores são lineares e distintos. Escrevemos
$$
\frac1{x^2-1}=\frac A{x-1}+\frac B{x+1}.
$$

**2. Elimine os denominadores.**
$$1=A(x+1)+B(x-1).$$
Com $x=1$, obtemos $1=2A$, portanto $A=\frac12$. Com $x=-1$, obtemos $1=-2B$, portanto $B=-\frac12$.

**3. Reescreva e integre.**
$$
\begin{aligned}
\int\frac{dx}{x^2-1}
&=\frac12\int\frac{dx}{x-1}-\frac12\int\frac{dx}{x+1}\\
&=\frac12\ln|x-1|-\frac12\ln|x+1|+C.
\end{aligned}
$$
Os valores $x=1$ e $x=-1$ não pertencem ao domínio original; por isso, os módulos são necessários.

:::result
$\boxed{\frac12\ln\left|\frac{x-1}{x+1}\right|+C}$
:::

### 3. Integre $\displaystyle\int\frac{1}{x(x+1)^2}\,dx$.

**1. Reconheça o fator repetido.** O denominador contém o fator linear $x$ e o fator linear $(x+1)$ repetido duas vezes. A decomposição precisa incluir uma parcela para cada potência:
$$
\frac1{x(x+1)^2}=\frac A x+\frac B{x+1}+\frac C{(x+1)^2}.
$$

**2. Multiplique pelo denominador comum.**
$$1=A(x+1)^2+Bx(x+1)+Cx.$$
Expandindo:
$$1=A(x^2+2x+1)+B(x^2+x)+Cx.$$
Agrupando os coeficientes:
$$1=(A+B)x^2+(2A+B+C)x+A.$$

**3. Compare os coeficientes.** O lado esquerdo é $0x^2+0x+1$. Assim,
$$A+B=0,\qquad 2A+B+C=0,\qquad A=1.$$
De $A=1$, vem $B=-1$. Substituindo na segunda equação: $2-1+C=0$, então $C=-1$.

**4. Integre cada parcela.**
$$
\begin{aligned}
\int\frac{dx}{x(x+1)^2}
&=\int\left(\frac1x-\frac1{x+1}-\frac1{(x+1)^2}\right)dx\\
&=\ln|x|-\ln|x+1|+\frac1{x+1}+C.
\end{aligned}
$$
Na última parcela, usamos $\int -(x+1)^{-2}dx=(x+1)^{-1}$.

:::result
$\boxed{\ln|x|-\ln|x+1|+\frac1{x+1}+C}$
:::

### 4. Integre $\displaystyle\int\frac{x+1}{x^2+1}\,dx$.

**1. Separe o numerador em parcelas úteis.** A derivada de $x^2+1$ é $2x$. Escrevemos $x+1=x+1$ para separar uma parcela proporcional a essa derivada:
$$
\int\frac{x+1}{x^2+1}dx
=\int\frac{x}{x^2+1}dx+\int\frac1{x^2+1}dx.
$$

**2. Calcule a primeira integral por substituição.** Tome $u=x^2+1$, então $du=2x\,dx$ e $x\,dx=du/2$:
$$
\int\frac{x}{x^2+1}dx
=\frac12\int\frac{du}{u}
=\frac12\ln|u|+C
=\frac12\ln(x^2+1)+C.
$$
O módulo pode ser retirado porque $x^2+1>0$ para todo real $x$.

**3. Calcule a segunda integral.** Pela derivada de $\arctan x$,
$$\int\frac1{1+x^2}dx=\arctan x+C.$$

**4. Some as parcelas.**
:::result
$\boxed{\frac12\ln(x^2+1)+\arctan x+C}$
:::

### 5. Antes de decompor, calcule $\displaystyle\int\frac{x^2+1}{x-1}\,dx$.

**1. Verifique os graus.** O numerador tem grau $2$ e o denominador tem grau $1$. Como o grau do numerador é maior, a fração é imprópria. Frações parciais devem ser aplicadas somente depois da divisão polinomial.

**2. Faça a divisão.** Dividimos $x^2+0x+1$ por $x-1$:
- Primeiro termo do quociente: $x^2/x=x$. Multiplicando, $x(x-1)=x^2-x$. Subtraindo de $x^2+0x+1$, sobra $x+1$.
- Próximo termo: $x/x=1$. Multiplicando, $1(x-1)=x-1$. Subtraindo de $x+1$, sobra resto $2$.

Portanto,
$$
\frac{x^2+1}{x-1}=x+1+\frac2{x-1}.
$$

**3. Integre a expressão simplificada.**
$$
\begin{aligned}
\int\frac{x^2+1}{x-1}dx
&=\int x\,dx+\int1\,dx+2\int\frac1{x-1}dx\\
&=\frac{x^2}{2}+x+2\ln|x-1|+C.
\end{aligned}
$$

:::result
$\boxed{\frac{x^2}{2}+x+2\ln|x-1|+C}$
:::
