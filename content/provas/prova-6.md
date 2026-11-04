---
title: "Prova 6"
summary: "Decomposição em frações parciais, integração de funções racionais e identificação dos padrões mais importantes."
tags: ["frações parciais", "funções racionais", "integração"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Frações parciais e integrais de funções racionais: decomposição, integração e análise da estrutura do integrando."
instruction: "Decomponha e integre com atenção antes de conferir a resolução comentada."
gabaritoIntro: "A estratégia é sempre a mesma: fatorar, montar o sistema de frações parciais e integrar termo a termo."
cta: {"text": "Frações parciais é o passo-chave para transformar quocientes de polinômios em somas de termos mais simples e integráveis.", "label": "Revisar frações parciais", "href": "/listas/lista-01/resolucoes#pfrac"}
---

## Decomponha em frações parciais.

### a) $\dfrac{5x-13}{(x-3)(x-2)}$

**1. Identifique o formato.** O denominador já está fatorado em dois fatores lineares distintos, e a fração é própria. Portanto:
$$
\frac{5x-13}{(x-3)(x-2)}
=\frac A{x-3}+\frac B{x-2}.
$$

**2. Elimine os denominadores.** Multiplicando por $(x-3)(x-2)$:
$$5x-13=A(x-2)+B(x-3).$$

**3. Determine as constantes.** Para $x=3$, o termo com $B$ zera:
$$15-13=A(1)\implies A=2.$$
Para $x=2$, o termo com $A$ zera:
$$10-13=B(-1)\implies B=3.$$

**4. Confira.** $2(x-2)+3(x-3)=2x-4+3x-9=5x-13$.

:::result
$$\boxed{\frac{5x-13}{(x-3)(x-2)}=\frac2{x-3}+\frac3{x-2}}$$
:::

### b) $\dfrac{z+1}{z^2(z-1)}$

**1. Observe o fator repetido.** O denominador contém $z^2$ e $(z-1)$. É obrigatório incluir uma parcela para cada potência de $z$:
$$
\frac{z+1}{z^2(z-1)}
=\frac A z+\frac B{z^2}+\frac C{z-1}.
$$

**2. Multiplique pelo denominador comum.**
$$z+1=Az(z-1)+B(z-1)+Cz^2.$$

**3. Encontre $B$ e $C$ com raízes convenientes.** Para $z=0$:
$$1=-B\implies B=-1.$$
Para $z=1$:
$$2=C\implies C=2.$$

**4. Determine $A$.** Use, por exemplo, $z=2$:
$$3=2A(1)+(-1)(1)+2(2^2).$$
Portanto,
$$3=2A-1+8\implies 2A=-4\implies A=-2.$$

**5. Escreva e confira a decomposição.**
$$
\frac{z+1}{z^2(z-1)}
=-\frac2z-\frac1{z^2}+\frac2{z-1}.
$$
Ao multiplicar pelo denominador comum, o numerador fica $-2z(z-1)-(z-1)+2z^2=z+1$.

:::result
$$\boxed{-\frac2z-\frac1{z^2}+\frac2{z-1}}$$
:::

### c) $\dfrac{t^2+8}{t^2-5t+6}$

**1. Verifique os graus.** Numerador e denominador têm grau $2$. A fração é imprópria, então a divisão polinomial vem antes das frações parciais.

**2. Faça a divisão.** Subtraindo uma vez o denominador do numerador:
$$
t^2+8=(t^2-5t+6)+(5t+2).
$$
Logo,
$$
\frac{t^2+8}{t^2-5t+6}
=1+\frac{5t+2}{t^2-5t+6}.
$$

**3. Fatore o denominador.** Procuramos dois números cuja soma seja $-5$ e cujo produto seja $6$: $-2$ e $-3$. Assim,
$$t^2-5t+6=(t-2)(t-3).$$

**4. Monte a decomposição do resto.**
$$
\frac{5t+2}{(t-2)(t-3)}
=\frac A{t-2}+\frac B{t-3}.
$$
Multiplicando:
$$5t+2=A(t-3)+B(t-2).$$

**5. Calcule as constantes.** Para $t=2$:
$$12=A(-1)\implies A=-12.$$
Para $t=3$:
$$17=B(1)\implies B=17.$$

**6. Confira.** $-12(t-3)+17(t-2)=(-12t+36)+(17t-34)=5t+2$.

:::result
$$\boxed{\frac{t^2+8}{t^2-5t+6}=1-\frac{12}{t-2}+\frac{17}{t-3}}$$
:::

## Calcule a integral.

### $\displaystyle \int \frac{dx}{1-x^2}$

**1. Fatore a diferença de quadrados.**
$$1-x^2=(1-x)(1+x).$$
A decomposição é
$$\frac1{1-x^2}=\frac A{1-x}+\frac B{1+x}.$$

**2. Elimine os denominadores.**
$$1=A(1+x)+B(1-x).$$
Para $x=1$, temos $1=2A$, então $A=1/2$. Para $x=-1$, temos $1=2B$, então $B=1/2$.

**3. Integre cada parcela.** Atenção: a derivada de $1-x$ é $-1$:
$$
\begin{aligned}
\int\frac{dx}{1-x^2}
&=\frac12\int\frac{dx}{1-x}+\frac12\int\frac{dx}{1+x}\\
&=-\frac12\ln|1-x|+\frac12\ln|1+x|+C.
\end{aligned}
$$

:::result
$$\boxed{\frac12\ln\left|\frac{1+x}{1-x}\right|+C}$$
:::

## Calcule a integral.

### $\displaystyle \int \frac{x^2+2x+2}{x^3-x^2+x-x}\,dx$

**1. Simplifique o denominador com cuidado.**
$$x^3-x^2+x-x=x^3-x^2=x^2(x-1).$$
A integral fica
$$\int\frac{x^2+2x+2}{x^2(x-1)}dx.$$

**2. Monte a decomposição, incluindo o fator repetido.**
$$
\frac{x^2+2x+2}{x^2(x-1)}
=\frac A x+\frac B{x^2}+\frac C{x-1}.
$$
Multiplicando por $x^2(x-1)$:
$$x^2+2x+2=Ax(x-1)+B(x-1)+Cx^2.$$

**3. Determine os coeficientes.** Para $x=0$:
$$2=-B\implies B=-2.$$
Para $x=1$:
$$1+2+2=C\implies C=5.$$
Para obter $A$, use $x=-1$:
$$1-2+2=2A+(-2)(-2)+5.$$
Assim, $1=2A+4+5$, portanto $2A=-8$ e $A=-4$.

**4. Confira a identidade.**
$$
-4x(x-1)-2(x-1)+5x^2
=-4x^2+4x-2x+2+5x^2
=x^2+2x+2.
$$

**5. Integre termo a termo.**
$$
\begin{aligned}
\int\left(-\frac4x-\frac2{x^2}+\frac5{x-1}\right)dx
&=-4\ln|x|-2\int x^{-2}dx+5\ln|x-1|+C\\
&=-4\ln|x|+\frac2x+5\ln|x-1|+C.
\end{aligned}
$$
Na segunda parcela, $\int x^{-2}dx=-x^{-1}$; por isso, $-2\int x^{-2}dx=2/x$.

:::result
$$\boxed{-4\ln|x|+\frac2x+5\ln|x-1|+C}$$
:::
