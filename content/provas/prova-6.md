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

1. Como os fatores são lineares e distintos, escrevemos:

   $$
   \frac{5x-13}{(x-3)(x-2)}=\frac{A}{x-3}+\frac{B}{x-2}
   $$

2. Multiplicando pelos denominadores:

   $$
   5x-13=A(x-2)+B(x-3)=(A+B)x+(-2A-3B)
   $$

3. Igualando coeficientes:

   $$
   A+B=5,\quad -2A-3B=-13
   $$

   Resolvendo, obtemos $A=2$ e $B=3$. Portanto:

   $$
   \frac{5x-13}{(x-3)(x-2)}=\frac{2}{x-3}+\frac{3}{x-2}
   $$

### b) $\dfrac{z+1}{z^2(z-1)}$

1. O denominador tem fator quadrático repetido e um fator linear simples:

   $$
   \frac{z+1}{z^2(z-1)}=\frac{A}{z}+\frac{B}{z^2}+\frac{C}{z-1}
   $$

2. Multiplicando por $z^2(z-1)$:

   $$
   z+1 = Az(z-1)+B(z-1)+Cz^2
   $$

3. Escolhendo valores adequados:

   $$
   z=0 \Rightarrow 1 = -B \Rightarrow B=-1
   $$

   $$
   z=1 \Rightarrow 2 = C
   $$

   $$
   z=2 \Rightarrow 3 = 2A + (-1)(1) + 4 \Rightarrow A=-1
   $$

   Logo:

   $$
   \frac{z+1}{z^2(z-1)} = -\frac{1}{z} - \frac{1}{z^2} + \frac{2}{z-1}
   $$

### c) $\dfrac{t^2+8}{t^2-5t+6}$

1. Como o grau do numerador é igual ao do denominador, primeiro dividimos:

   $$
   t^2+8 = 1\cdot (t^2-5t+6) + (5t+2)
   $$

   Então:

   $$
   \frac{t^2+8}{t^2-5t+6} = 1 + \frac{5t+2}{(t-2)(t-3)}
   $$

2. Agora decompomos o resto:

   $$
   \frac{5t+2}{(t-2)(t-3)}=\frac{A}{t-2}+\frac{B}{t-3}
   $$

   $$
   5t+2 = A(t-3)+B(t-2)
   $$

3. Resolvendo:

   $$
   A=13,\quad B=-8
   $$

   Portanto:

   $$
   \frac{t^2+8}{t^2-5t+6}=1+\frac{13}{t-2}-\frac{8}{t-3}
   $$

## Calcule a integral.

### $\displaystyle \int \frac{dx}{1-x^2}$

1. Fatoramos o denominador:

   $$
   1-x^2=(1-x)(1+x)
   $$

   Então:

   $$
   \frac{1}{1-x^2} = \frac{A}{1-x} + \frac{B}{1+x}
   $$

2. Multiplicando:

   $$
   1=A(1+x)+B(1-x)
   $$

   Escolhendo $x=1$ e $x=-1$:

   $$
   A=\frac12,\quad B=\frac12
   $$

3. $$
   \int \frac{dx}{1-x^2} = \frac12\int \left(\frac{1}{1-x}+\frac{1}{1+x}\right)dx
   $$

   $$
   = -\frac12\ln|1-x| + \frac12\ln|1+x| + C
   $$

   $$
   = \frac12\ln\left|\frac{1+x}{1-x}\right| + C
   $$

:::result
$\displaystyle \int \frac{dx}{1-x^2} = \frac12\ln\left|\frac{1+x}{1-x}\right| + C$
:::

## Calcule a integral.

### $\displaystyle \int \frac{x^2+2x+2}{x^3-x^2+x-x} \, dx$

1. Primeiro simplificamos o denominador:

   $$
   x^3-x^2+x-x = x^3-x^2 = x^2(x-1)
   $$

   Assim, a integral é

   $$
   \int \frac{x^2+2x+2}{x^2(x-1)}dx
   $$

2. Decompomos em frações parciais:

   $$
   \frac{x^2+2x+2}{x^2(x-1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x-1}
   $$

   $$
   x^2+2x+2 = A x(x-1)+B(x-1)+Cx^2
   $$

3. Usando $x=0$:

   $$
   2=-B\Rightarrow B=-2
   $$

   Usando $x=1$:

   $$
   5=C
   $$

   Usando $x=-1$:

   $$
   1 = A(-1)(-2)-2(-2)+5\Rightarrow 1=2A+4+5 \Rightarrow A=-4
   $$

   Logo:

   $$
   \frac{x^2+2x+2}{x^2(x-1)} = -\frac{4}{x} - \frac{2}{x^2} + \frac{5}{x-1}
   $$

4. $$
   \int \left(-\frac{4}{x} - \frac{2}{x^2} + \frac{5}{x-1}\right)dx = -4\ln|x| + \frac{2}{x} + 5\ln|x-1| + C
   $$

:::result
$\displaystyle \int \frac{x^2+2x+2}{x^2(x-1)}dx = -4\ln|x| + \frac{2}{x} + 5\ln|x-1| + C$
:::
