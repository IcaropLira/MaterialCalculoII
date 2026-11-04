---
title: "Prova 1"
summary: "Integrais indefinidas, uma integral definida com frações parciais e duas integrais impróprias com análise de convergência."
tags: ["substituição simples", "substituição trigonométrica", "por partes", "frações parciais", "integrais impróprias"]
level: "avançado"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Integrais indefinidas por substituição e por partes, uma integral definida com frações parciais, e duas integrais impróprias com análise de convergência."
instruction: "Resolva no papel antes de abrir o gabarito. Ele está logo na seção seguinte, comentado item por item."
gabaritoIntro: "Cada item abre com a resolução completa, passo a passo — o mesmo formato usado nos exercícios dos tópicos."
cta: {"text": "Quer entender melhor os métodos usados aqui? A teoria completa de integração por partes está no tópico correspondente.", "label": "Ver o tópico", "href": "/topicos/integracao-por-partes"}
---

## Resolva as integrais indefinidas abaixo.

### a) $\displaystyle y = \int \frac{(x^3+3)^2}{\sqrt{x^3+3}}\,x^2\,dx$

1. Simplificamos o integrando escrevendo a raiz como expoente fracionário:

   $$
   \frac{(x^3+3)^2}{\sqrt{x^3+3}} = \frac{(x^3+3)^2}{(x^3+3)^{1/2}} = (x^3+3)^{2-1/2} = (x^3+3)^{3/2}
   $$

   A integral se torna $\displaystyle y=\int (x^3+3)^{3/2}x^2\,dx$.

2. Substituição: $u=x^3+3 \Rightarrow du = 3x^2\,dx \Rightarrow x^2dx = \dfrac{1}{3}du$.

3. Reescrevendo e integrando em $u$:

   $$
   y = \frac{1}{3}\int u^{3/2}\,du = \frac{1}{3}\cdot\frac{u^{5/2}}{5/2} = \frac{2}{15}u^{5/2}
   $$

4. Voltando para $x$:

:::result
$y = \dfrac{2}{15}(x^3+3)^{5/2} + C$
:::

### b) $\displaystyle y = \int \left(\frac{x}{2}+1\right)\sec x\tan x\,dx$

1. Integração por partes. Como $\sec x\tan x$ é a derivada de $\sec x$, escolhemos:

   $$
   u=\frac{x}{2}+1 \qquad dv=\sec x\tan x\,dx \qquad du=\frac{1}{2}dx \qquad v=\sec x
   $$

2. Aplicando $\int u\,dv = uv-\int v\,du$:

   $$
   y = \left(\frac{x}{2}+1\right)\sec x - \frac{1}{2}\int \sec x\,dx
   $$

3. Usando o resultado padrão $\int \sec x\,dx = \ln|\sec x+\tan x|$:

:::result
$y = \left(\dfrac{x}{2}+1\right)\sec x - \dfrac{1}{2}\ln|\sec x+\tan x| + C$
:::

### c) $\displaystyle y = \int \operatorname{sen}^2 x \cos^5 x\,dx$

1. A potência do cosseno é ímpar — separamos um fator $\cos x$ e convertemos o resto com $\cos^2x=1-\operatorname{sen}^2x$:

   $$
   \cos^5x = \cos^4x\cdot\cos x = (1-\operatorname{sen}^2x)^2\cos x
   $$

   A integral fica $\displaystyle y=\int \operatorname{sen}^2x\,(1-\operatorname{sen}^2x)^2\cos x\,dx$.

2. Substituição: $u=\operatorname{sen}x \Rightarrow du=\cos x\,dx$.

   $$
   y = \int u^2(1-u^2)^2\,du = \int (u^2-2u^4+u^6)\,du
   $$

3. $$
   y = \frac{u^3}{3} - \frac{2u^5}{5} + \frac{u^7}{7}
   $$

4. Voltando para $x$:

:::result
$y = \dfrac{\operatorname{sen}^3 x}{3} - \dfrac{2\operatorname{sen}^5 x}{5} + \dfrac{\operatorname{sen}^7 x}{7} + C$
:::

### d) $\displaystyle y = \int \frac{3}{x^2\sqrt{x^2-25}}\,dx$

1. Forma $\sqrt{x^2-a^2}$ com $a=5$ — substituição trigonométrica com secante:

   $$
   x=5\sec\theta \qquad dx=5\sec\theta\tan\theta\,d\theta \qquad \sqrt{x^2-25}=5\tan\theta
   $$

2. Substituindo na integral:

   $$
   y = \int \frac{3}{(25\sec^2\theta)(5\tan\theta)}\cdot 5\sec\theta\tan\theta\,d\theta = \frac{3}{25}\int \frac{1}{\sec\theta}\,d\theta
   $$

3. $$
   y = \frac{3}{25}\int \cos\theta\,d\theta = \frac{3}{25}\operatorname{sen}\theta
   $$

4. Voltando para $x$ com um triângulo retângulo: $\sec\theta=\tfrac{x}{5}$ é hipotenusa sobre cateto adjacente, então o cateto oposto é $\sqrt{x^2-25}$ e

   $$
   \operatorname{sen}\theta = \frac{\sqrt{x^2-25}}{x}
   $$

:::result
$y = \dfrac{3\sqrt{x^2-25}}{25x} + C$
:::

## Resolva a integral definida.

### $\displaystyle y = \int_0^1 \frac{x^2}{(x+1)(x^2+1)}\,dx$

1. Decomposição em frações parciais:

   $$
   \frac{x^2}{(x+1)(x^2+1)} = \frac{A}{x+1} + \frac{Bx+C}{x^2+1}
   $$

   Multiplicando pelo denominador comum:

   $$
   x^2 = A(x^2+1) + (Bx+C)(x+1) = (A+B)x^2 + (B+C)x + (A+C)
   $$

2. Igualando coeficientes: $A+B=1$, $B+C=0$, $A+C=0$. Da segunda e terceira, $C=-B=-A \Rightarrow A=B$. Substituindo na primeira:

   $$
   2A=1 \ \Rightarrow\ A=\frac{1}{2},\quad B=\frac{1}{2},\quad C=-\frac{1}{2}
   $$

3. Reescrevendo a integral e separando em partes conhecidas:

   $$
   y = \frac{1}{2}\int_0^1 \frac{dx}{x+1} + \frac{1}{4}\int_0^1 \frac{2x\,dx}{x^2+1} - \frac{1}{2}\int_0^1 \frac{dx}{x^2+1}
   $$

4. Cada uma é uma integral direta, avaliada de 0 a 1:

   $$
   \int_0^1\frac{dx}{x+1}=\ln 2,\qquad \int_0^1\frac{2x\,dx}{x^2+1}=\ln 2,\qquad \int_0^1\frac{dx}{x^2+1}=\frac{\pi}{4}
   $$

5. Substituindo:

   $$
   y = \frac{1}{2}\ln 2 + \frac{1}{4}\ln 2 - \frac{1}{2}\cdot\frac{\pi}{4}
   $$

:::result
$y = \dfrac{3}{4}\ln 2 - \dfrac{\pi}{8}$
:::

## Calcule as integrais impróprias abaixo e conclua se são convergentes ou divergentes.

### a) $\displaystyle y = \int_2^{\infty} \frac{1}{\sqrt[4]{x-1}}\,dx$

1. Limite superior infinito — escrevemos como limite:

   $$
   y = \lim_{t\to\infty}\int_2^t (x-1)^{-1/4}\,dx
   $$

2. Integramos normalmente:

   $$
   \int (x-1)^{-1/4}dx = \frac{(x-1)^{3/4}}{3/4} = \frac{4}{3}(x-1)^{3/4}
   $$

3. Aplicando os limites e o limite em $t$:

   $$
   y = \lim_{t\to\infty}\left(\frac{4}{3}(t-1)^{3/4} - \frac{4}{3}\right)
   $$

4. Como $(t-1)^{3/4}\to\infty$ quando $t\to\infty$, o limite não existe (é infinito).

:::result{kind="diverge"}
A integral diverge — não converge para um valor finito.
:::

### b) $\displaystyle y = \int_1^2 \frac{3x}{(1-x^2)^2}\,dx$

1. O integrando é descontínuo em $x=1$ (o limite inferior), onde o denominador se anula. Escrevemos como limite lateral:

   $$
   y = \lim_{t\to 1^+}\int_t^2 \frac{3x}{(1-x^2)^2}\,dx
   $$

2. Substituição $u=1-x^2,\ du=-2x\,dx \Rightarrow x\,dx=-\tfrac{1}{2}du$:

   $$
   \int \frac{3x}{(1-x^2)^2}dx = -\frac{3}{2}\int u^{-2}du = \frac{3}{2u} = \frac{3}{2(1-x^2)}
   $$

3. Aplicando os limites de integração e o limite em $t$:

   $$
   y = \lim_{t\to1^+}\left(-\frac{1}{2} - \frac{3}{2(1-t^2)}\right)
   $$

4. Quando $t\to 1^+$ (isto é, $t>1$), temos $1-t^2\to 0^-$, então $\dfrac{3}{2(1-t^2)}\to-\infty$ e o termo $-\dfrac{3}{2(1-t^2)}\to+\infty$.

:::result{kind="diverge"}
A integral diverge — não converge para um valor finito.
:::
