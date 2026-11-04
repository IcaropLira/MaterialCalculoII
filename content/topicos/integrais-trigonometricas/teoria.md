---
title: "Integrais trigonométricas"
number: "02"
summary: "Potências e produtos de seno, cosseno, tangente e secante: qual fator guardar, quando usar ângulo metade e como transformar produto em soma."
status: "available"
eyebrow: "cálculo ii · técnicas de integração"
lede: "Como integrar produtos e potências de seno, cosseno, tangente e secante usando identidades para chegar a uma substituição simples."
formula: "\\boxed{\\sin^2\\theta+\\cos^2\\theta=1 \\qquad 1+\\tan^2\\theta=\\sec^2\\theta}"
---

## Usar uma identidade para sobrar uma substituição {#ideia kicker="a ideia" toc="A ideia e as identidades"}

Quase toda integral deste tipo se resolve do mesmo jeito: reescrever o integrando com uma identidade trigonométrica até que apareça uma função junto com a sua derivada, e então fazer $u$-substituição.

:::formula[Identidades que você vai usar o tempo todo]
$$
\begin{array}{ll}
\sin^2x+\cos^2x=1 &
1+\tan^2x=\sec^2x \\[6pt]
\sin^2x=\dfrac{1-\cos 2x}{2} &
\cos^2x=\dfrac{1+\cos 2x}{2} \\[10pt]
\sin x\cos x=\dfrac{\sin 2x}{2} &
1+\cot^2x=\csc^2x
\end{array}
$$
:::

:::formula[Derivadas que viram "du"]
$$
\dfrac{d}{dx}\sin x=\cos x \quad
\dfrac{d}{dx}\cos x=-\sin x \quad
\dfrac{d}{dx}\tan x=\sec^2x \quad
\dfrac{d}{dx}\sec x=\sec x\tan x
$$
:::

:::note[Ideia central]
Você sempre "guarda" um fator que será o $du$ e converte todo o resto para a mesma função usando $\sin^2+\cos^2=1$ ou $1+\tan^2=\sec^2$. A pergunta de cada caso é: **qual fator eu guardo?**
:::

## Potências de seno e cosseno {#seno-cosseno kicker="o caso mais comum" toc="Potências de sen e cos"}

Para integrais do tipo

olhe os expoentes. Existem três situações.

:::example{n="A"}
#### Expoente do cosseno ímpar ($n=2k+1$)

1. Separe um fator $\cos x$ e converta o resto com $\cos^2x=1-\sin^2x$:

   $$
   \sin^m x\,\cos^{2k}x\,\cos x = \sin^m x\,(1-\sin^2x)^k\cos x
   $$

2. Substitua $u=\sin x$, $du=\cos x\,dx$. Sobra um polinômio em $u$.
:::

:::example{n="B"}
#### Expoente do seno ímpar ($m=2k+1$)

1. Separe um fator $\sin x$ e converta o resto com $\sin^2x=1-\cos^2x$:

   $$
   \sin^{2k}x\,\cos^n x\,\sin x = (1-\cos^2x)^k\cos^n x\,\sin x
   $$

2. Substitua $u=\cos x$, $du=-\sin x\,dx$. Cuidado com o sinal de menos.
:::

:::example{n="C"}
#### Os dois expoentes pares

1. Não há fator para guardar. Use as fórmulas do ângulo metade para baixar os expoentes:

   $$
   \sin^2x=\frac{1-\cos2x}{2} \qquad \cos^2x=\frac{1+\cos2x}{2}
   $$

2. Se aparecer $\cos^2 2x$ de novo, aplique a fórmula outra vez (com $4x$). Repita até só restarem cossenos de expoente 1.
:::

:::note[Se os dois forem ímpares]
Escolha qualquer um dos dois; funciona. Na prática, guarde o fator da função de **menor expoente** para o polinômio final ficar menor.
:::

## Potências de tangente e secante {#tan-sec kicker="o outro par" toc="Potências de tan e sec"}

Para integrais do tipo

a lógica é a mesma, mas agora as duas derivadas relevantes são $(\tan x)'=\sec^2x$ e $(\sec x)'=\sec x\tan x$.

| Situação | O que guardar | Substituição | Identidade |
| --- | --- | --- | --- |
| $n$ par ($n\ge 2$) | $\sec^2x$ | $u=\tan x$ | $\sec^2x=1+\tan^2x$ |
| $m$ ímpar e $n\ge1$ | $\sec x\tan x$ | $u=\sec x$ | $\tan^2x=\sec^2x-1$ |
| $m$ par e $n$ ímpar | — (nada para guardar) | troque $\tan^2$ por $\sec^2-1$ e use partes | reduz a $\int\sec^k x\,dx$ |

:::formula[Integrais-base para decorar]
$$
\begin{array}{ll}
\displaystyle\int\tan x\,dx=\ln|\sec x|+C &
\displaystyle\int\sec x\,dx=\ln|\sec x+\tan x|+C \\[10pt]
\displaystyle\int\tan^2x\,dx=\tan x-x+C &
\displaystyle\int\sec^3x\,dx=\tfrac12\sec x\tan x+\tfrac12\ln|\sec x+\tan x|+C
\end{array}
$$
:::

:::note[Cotangente e cossecante]
Funcionam exatamente igual, trocando $\tan\to\cot$, $\sec\to\csc$ e lembrando dos sinais: $(\cot x)'=-\csc^2x$ e $(\csc x)'=-\csc x\cot x$, com $1+\cot^2x=\csc^2x$.
:::

## Produtos como $\sin mx\cos nx$ {#produto-soma kicker="ângulos diferentes" toc="Ângulos diferentes"}

Quando os ângulos são diferentes, as potências não ajudam. Use as identidades que transformam produto em soma:

:::formula[Produto → soma]
$$
\begin{aligned}
\sin A\cos B &= \tfrac12\big[\sin(A+B)+\sin(A-B)\big] \\[4pt]
\sin A\sin B &= \tfrac12\big[\cos(A-B)-\cos(A+B)\big] \\[4pt]
\cos A\cos B &= \tfrac12\big[\cos(A-B)+\cos(A+B)\big]
\end{aligned}
$$
:::

:::warn[Atenção]
Em $\sin A\sin B$ a ordem é $\cos(A-B)-\cos(A+B)$. Se trocar a ordem, o sinal da resposta inteira inverte. Teste com $A=B$: $\sin^2A=\tfrac12(1-\cos2A)$.
:::

## Exemplos resolvidos {#exemplos kicker="prática guiada"}

::::example{n="1"}
#### $\displaystyle\int \sin^3x\cos^2x\,dx$ — seno ímpar

1. Guarde um $\sin x$ e converta $\sin^2x=1-\cos^2x$:

   $$
   \int (1-\cos^2x)\cos^2x\,\sin x\,dx
   $$

2. $u=\cos x \Rightarrow du=-\sin x\,dx$:

   $$
   -\int (1-u^2)u^2\,du=-\int (u^2-u^4)\,du=-\frac{u^3}{3}+\frac{u^5}{5}+C
   $$

:::result
$\displaystyle -\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C$
:::
::::

::::example{n="2"}
#### $\displaystyle\int \sin^2x\,dx$ — expoente par

1. $$
   \int \frac{1-\cos2x}{2}\,dx=\frac12\int(1-\cos2x)\,dx=\frac12\left(x-\frac{\sin2x}{2}\right)+C
   $$

:::result
$\displaystyle \frac{x}{2}-\frac{\sin2x}{4}+C$
:::
::::

::::example{n="3"}
#### $\displaystyle\int \cos^4x\,dx$ — ângulo metade duas vezes

1. Escreva $\cos^4x=(\cos^2x)^2$:

   $$
   \cos^4x=\left(\frac{1+\cos2x}{2}\right)^2=\frac14\big(1+2\cos2x+\cos^22x\big)
   $$

2. Aplique de novo em $\cos^22x=\frac{1+\cos4x}{2}$:

   $$
   \cos^4x=\frac38+\frac12\cos2x+\frac18\cos4x
   $$

3. Integre termo a termo:

:::result
$\displaystyle \frac{3x}{8}+\frac{\sin2x}{4}+\frac{\sin4x}{32}+C$
:::
::::

::::example{n="4"}
#### $\displaystyle\int \tan^2x\,\sec^4x\,dx$ — secante par

1. Guarde $\sec^2x$ e converta o outro $\sec^2x=1+\tan^2x$:

   $$
   \int \tan^2x\,(1+\tan^2x)\,\sec^2x\,dx
   $$

2. $u=\tan x \Rightarrow du=\sec^2x\,dx$:

   $$
   \int (u^2+u^4)\,du=\frac{u^3}{3}+\frac{u^5}{5}+C
   $$

:::result
$\displaystyle \frac{\tan^3x}{3}+\frac{\tan^5x}{5}+C$
:::
::::

::::example{n="5"}
#### $\displaystyle\int \tan^3x\,\sec x\,dx$ — tangente ímpar

1. Guarde $\sec x\tan x$ e converta $\tan^2x=\sec^2x-1$:

   $$
   \int \tan^2x\,(\sec x\tan x)\,dx=\int(\sec^2x-1)\,\sec x\tan x\,dx
   $$

2. $u=\sec x \Rightarrow du=\sec x\tan x\,dx$:

   $$
   \int (u^2-1)\,du=\frac{u^3}{3}-u+C
   $$

:::result
$\displaystyle \frac{\sec^3x}{3}-\sec x+C$
:::
::::

::::example{n="6"}
#### $\displaystyle\int \sin3x\cos5x\,dx$ — produto em soma

1. Com $A=3x$ e $B=5x$:

   $$
   \sin3x\cos5x=\tfrac12\big[\sin8x+\sin(-2x)\big]=\tfrac12\sin8x-\tfrac12\sin2x
   $$

2. Integre cada termo (lembre de dividir pela constante do ângulo):

:::result
$\displaystyle -\frac{\cos8x}{16}+\frac{\cos2x}{4}+C$
:::
::::

## Integral definida {#definida kicker="com limites"}

::::example{n="7"}
#### $\displaystyle\int_0^{\pi/2}\sin^2x\cos^2x\,dx$

1. Use $\sin x\cos x=\frac{\sin2x}{2}$:

   $$
   \sin^2x\cos^2x=\frac{\sin^22x}{4}=\frac{1-\cos4x}{8}
   $$

2. $$
   \int_0^{\pi/2}\frac{1-\cos4x}{8}\,dx=\left[\frac{x}{8}-\frac{\sin4x}{32}\right]_0^{\pi/2}=\frac{\pi}{16}-0
   $$

:::result
$\displaystyle \frac{\pi}{16}$
:::
::::

:::note[Dica]
Se você fizer $u$-substituição numa definida, troque também os limites para $u$ — ou volte para $x$ antes de avaliar. Misturar os dois é o erro mais comum.
:::

## Erros comuns {#erros kicker="armadilhas"}

:::warn[Sinal de menos]
Com $u=\cos x$, $du=-\sin x\,dx$. Esquecer o sinal inverte a resposta inteira.
:::

:::warn[Dividir pela constante do ângulo]
$\int\cos2x\,dx=\frac{\sin2x}{2}+C$, e não $\sin2x$. O mesmo vale para $4x$, $8x$ etc.
:::

:::warn[Guardar o fator errado]
Em $\tan^m x\sec^n x$ com $n$ par, guarde $\sec^2x$ (e use $u=\tan x$). Se guardar $\sec x\tan x$ quando $m$ é par, você não consegue converter o resto.
:::

:::warn[Expoentes pares sem ângulo metade]
$\sin^2x$ e $\cos^2x$ sozinhos não têm substituição direta. Não tente $u=\sin x$: falta o $\cos x\,dx$. Use $\frac{1\mp\cos2x}{2}$.
:::

:::warn[Confundir com substituição trigonométrica]
Aqui o integrando *já é* trigonométrico. Na [substituição trigonométrica](/topicos/substituicao-trigonometrica) é você quem introduz seno, tangente ou secante para eliminar uma raiz — e as integrais deste tópico aparecem no meio desse processo.
:::

## Qual caso é? {#resumo kicker="resumo rápido" toc="Resumo rápido"}

:::cheat
#### $\sin^m x\cos^n x$

$n$ ímpar: guarde $\cos x$, $u=\sin x$.<br /> $m$ ímpar: guarde $\sin x$, $u=\cos x$.<br /> Ambos pares: ângulo metade.

#### $\tan^m x\sec^n x$

$n$ par: guarde $\sec^2x$, $u=\tan x$.<br /> $m$ ímpar: guarde $\sec x\tan x$, $u=\sec x$.<br /> Caso contrário: $\tan^2=\sec^2-1$ e partes.

#### $\sin mx\cos nx$

Ângulos diferentes: produto → soma e integre cada termo.

#### Base

$\int\tan x=\ln|\sec x|$<br /> $\int\sec x=\ln|\sec x+\tan x|$<br /> $\int\tan^2x=\tan x-x$
:::

:::next{kicker="continuando a série"}
#### Próximo tópico

Agora que as integrais trigonométricas estão dominadas, o próximo passo é usá-las para eliminar raízes.

- [Substituição trigonométrica →](/topicos/substituicao-trigonometrica)
- [Frações parciais](/topicos/fracoes-parciais)
- [Integrais impróprias](/topicos/integrais-improprias)
:::
