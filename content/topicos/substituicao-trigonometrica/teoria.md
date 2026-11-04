---
title: "Substituição trigonométrica"
number: "03"
summary: "Como resolver integrais com √(a²−x²), √(a²+x²) e √(x²−a²) trocando x por seno, tangente ou secante."
status: "available"
eyebrow: "cálculo ii · técnicas de integração"
lede: "Uma técnica para transformar raízes envolvendo $a^2-x^2$, $a^2+x^2$ e $x^2-a^2$ em expressões trigonométricas mais fáceis de integrar."
formula: "\\boxed{ \\begin{array}{c} a^2-x^2 \\rightarrow x=a\\sin\\theta \\\\[4pt] a^2+x^2 \\rightarrow x=a\\tan\\theta \\\\[4pt] x^2-a^2 \\rightarrow x=a\\sec\\theta \\end{array}}"
---

## A ideia por trás da substituição trigonométrica {#motivacao kicker="motivação" toc="Por que isso funciona"}

Algumas integrais ficam difíceis por causa de uma raiz quadrada contendo uma soma ou diferença de quadrados. Por exemplo:

A substituição comum, como $u=a^2-x^2$, até consegue transformar a raiz em $\sqrt{u}$, mas aparece um problema: não temos necessariamente o $x\,dx$ que precisaríamos para completar a substituição.

:::note[Ideia central]
A substituição trigonométrica escolhe uma troca de variável que faz a identidade trigonométrica cancelar exatamente a expressão dentro da raiz.
:::

Por exemplo, sabemos que:

Então, se tivermos $a^2-x^2$, podemos colocar:

porque isso transforma:

:::result
A raiz complicada vira uma função trigonométrica simples.
:::

## Os 3 padrões fundamentais {#padroes kicker="a tabela que você precisa dominar" toc="Os 3 padrões"}

Não tente decorar três substituições isoladas. Primeiro reconheça o formato da expressão. O formato já indica qual função trigonométrica usar.

:::formula[tabela principal]
$$
\begin{array}{c|c|c}
\text{Expressão} & \text{Substituição} & \text{Identidade} \\[6pt]
\hline
a^2-x^2 & x=a\sin\theta &
1-\sin^2\theta=\cos^2\theta \\[6pt]
a^2+x^2 & x=a\tan\theta &
1+\tan^2\theta=\sec^2\theta \\[6pt]
x^2-a^2 & x=a\sec\theta &
\sec^2\theta-1=\tan^2\theta
\end{array}
$$
:::

### Como decorar sem decorar

Pense nas três identidades fundamentais:

::::example{n="★"}
#### O mapa mental

1. Quando aparecer uma **diferença**:

   $$
   a^2-x^2
   $$

   pense em seno:

   $$
   x=a\sin\theta.
   $$

2. Quando aparecer uma **soma**:

   $$
   a^2+x^2
   $$

   pense em tangente:

   $$
   x=a\tan\theta.
   $$

3. Quando aparecer $x^2-a^2$, pense em secante:

   $$
   x=a\sec\theta.
   $$

:::result
$$
\boxed{
\begin{array}{c}
a^2-x^2 \Rightarrow \sin \\[3pt]
a^2+x^2 \Rightarrow \tan \\[3pt]
x^2-a^2 \Rightarrow \sec
\end{array}}
$$
:::
::::

:::warn[Atenção]
O número $a$ fica multiplicando a função trigonométrica. Não é simplesmente $x=\sin\theta$: em geral é $x=a\sin\theta$, $x=a\tan\theta$ ou $x=a\sec\theta$.
:::

## Quando aparece $a^2-x^2$: use seno {#seno kicker="primeiro caso" toc="Caso \(a^2-x^2\)"}

O padrão $a^2-x^2$ combina perfeitamente com a identidade $1-\sin^2\theta=\cos^2\theta$.

:::formula[substituição]
$$
\boxed{x=a\sin\theta}
$$

$$
dx=a\cos\theta\,d\theta
$$
:::

### O que acontece com a raiz?

Substituímos $x=a\sin\theta$:

:::note[O grande truque]
A raiz que parecia difícil desapareceu: $\sqrt{a^2-x^2}$ virou $a\cos\theta$. É exatamente por isso que escolhemos o seno.
:::

::::example{n="1"}
#### $\displaystyle \int \sqrt{9-x^2}\,dx$

1. Primeiro reconhecemos o padrão:

   $$
   9-x^2=3^2-x^2.
   $$

   É $a^2-x^2$, então usamos seno:

   $$
   x=3\sin\theta.
   $$

2. Derivamos a substituição:

   $$
   dx=3\cos\theta\,d\theta.
   $$

3. Transformamos a raiz:

   $$
   \sqrt{9-x^2}
   =
   \sqrt{9-9\sin^2\theta}
   $$

   $$
   =
   \sqrt{9(1-\sin^2\theta)}
   =
   3\cos\theta.
   $$

4. Agora substituímos tudo na integral:

   $$
   \int \sqrt{9-x^2}\,dx
   =
   \int
   (3\cos\theta)(3\cos\theta)\,d\theta
   $$

   $$
   =
   9\int\cos^2\theta\,d\theta.
   $$

5. Usamos a identidade de meio ângulo:

   $$
   \cos^2\theta
   =
   \frac{1+\cos 2\theta}{2}.
   $$

   Portanto:

   $$
   9\int\cos^2\theta\,d\theta
   =
   \frac{9}{2}
   \int(1+\cos2\theta)\,d\theta.
   $$

   $$
   =
   \frac{9}{2}
   \left(
   \theta+\frac{\sin2\theta}{2}
   \right)+C.
   $$

6. Agora precisamos voltar de $\theta$ para $x$. Da substituição:

   $$
   x=3\sin\theta
   $$

   $$
   \sin\theta=\frac{x}{3}
   $$

   portanto:

   $$
   \theta=\arcsin\left(\frac{x}{3}\right).
   $$

7. Para $\sin2\theta$, usamos:

   $$
   \sin2\theta=2\sin\theta\cos\theta.
   $$

   Como:

   $$
   \sin\theta=\frac{x}{3}
   $$

   e

   $$
   \cos\theta
   =
   \frac{\sqrt{9-x^2}}{3},
   $$

   então:

   $$
   \sin2\theta
   =
   \frac{2x\sqrt{9-x^2}}{9}.
   $$

:::result
$$
\boxed{
\int\sqrt{9-x^2}\,dx
=
\frac{x\sqrt{9-x^2}}{2}
+
\frac{9}{2}
\arcsin\left(\frac{x}{3}\right)
+C
}
$$
:::
::::

## Quando aparece $a^2+x^2$: use tangente {#tangente kicker="segundo caso" toc="Caso \(a^2+x^2\)"}

Agora temos uma soma de quadrados. A identidade perfeita é:

:::formula[substituição]
$$
\boxed{x=a\tan\theta}
$$

$$
dx=a\sec^2\theta\,d\theta
$$
:::

Veja o que acontece:

:::note[Sacada]
$1+\tan^2\theta=\sec^2\theta$. Por isso, quando aparecer $a^2+x^2$, a tangente é a escolha natural.
:::

::::example{n="2"}
#### $\displaystyle \int \frac{dx}{\sqrt{4+x^2}}$

1. Identificamos:

   $$
   4+x^2=2^2+x^2.
   $$

   É o padrão $a^2+x^2$, então:

   $$
   x=2\tan\theta.
   $$

2. $$
   dx=2\sec^2\theta\,d\theta.
   $$

3. Transformamos a raiz:

   $$
   \sqrt{4+x^2}
   =
   \sqrt{4+4\tan^2\theta}
   $$

   $$
   =
   2\sqrt{1+\tan^2\theta}
   =
   2\sec\theta.
   $$

4. Substituímos:

   $$
   \int\frac{dx}{\sqrt{4+x^2}}
   =
   \int
   \frac{2\sec^2\theta}
   {2\sec\theta}
   d\theta
   $$

   $$
   =
   \int\sec\theta\,d\theta.
   $$

5. Usamos a integral conhecida:

   $$
   \int\sec\theta\,d\theta
   =
   \ln|\sec\theta+\tan\theta|+C.
   $$

6. Voltamos para $x$. Como:

   $$
   x=2\tan\theta
   $$

   temos:

   $$
   \tan\theta=\frac{x}{2}.
   $$

   Pela identidade:

   $$
   \sec^2\theta
   =
   1+\tan^2\theta
   =
   1+\frac{x^2}{4}
   =
   \frac{x^2+4}{4}.
   $$

   Logo:

   $$
   \sec\theta
   =
   \frac{\sqrt{x^2+4}}{2}.
   $$

:::result
$$
\boxed{
\int\frac{dx}{\sqrt{4+x^2}}
=
\ln
\left|
\frac{\sqrt{x^2+4}+x}{2}
\right|
+C
}
$$

Como $\ln 2$ é constante, também podemos escrever:

$$
\boxed{
\ln|x+\sqrt{x^2+4}|+C
}
$$
:::
::::

## Quando aparece $x^2-a^2$: use secante {#secante kicker="terceiro caso" toc="Caso \(x^2-a^2\)"}

O último padrão aparece quando o quadrado de $x$ vem primeiro:

A identidade correspondente é:

:::formula[substituição]
$$
\boxed{x=a\sec\theta}
$$

$$
dx=a\sec\theta\tan\theta\,d\theta
$$
:::

Agora veja:

:::note[Terceira regra]
Quando você enxergar $x^2-a^2$, pense imediatamente: **secante**.
:::

::::example{n="3"}
#### $\displaystyle \int \frac{\sqrt{x^2-9}}{x}\,dx$

1. Identificamos:

   $$
   x^2-9=x^2-3^2.
   $$

   Portanto usamos:

   $$
   x=3\sec\theta.
   $$

2. $$
   dx=3\sec\theta\tan\theta\,d\theta.
   $$

3. Transformamos a raiz:

   $$
   \sqrt{x^2-9}
   =
   \sqrt{9\sec^2\theta-9}
   $$

   $$
   =
   3\sqrt{\sec^2\theta-1}
   =
   3\tan\theta.
   $$

4. Substituímos tudo:

   $$
   \int
   \frac{\sqrt{x^2-9}}{x}\,dx
   =
   \int
   \frac{3\tan\theta}
   {3\sec\theta}
   \cdot
   3\sec\theta\tan\theta
   \,d\theta
   $$

   $$
   =
   3\int\tan^2\theta\,d\theta.
   $$

5. Como:

   $$
   \tan^2\theta=\sec^2\theta-1,
   $$

   temos:

   $$
   3\int\tan^2\theta\,d\theta
   =
   3\int(\sec^2\theta-1)\,d\theta
   $$

   $$
   =
   3(\tan\theta-\theta)+C.
   $$

6. Voltamos para $x$:

   $$
   x=3\sec\theta
   $$

   portanto:

   $$
   \sec\theta=\frac{x}{3}.
   $$

   Logo:

   $$
   \tan\theta
   =
   \sqrt{\sec^2\theta-1}
   =
   \sqrt{\frac{x^2}{9}-1}
   =
   \frac{\sqrt{x^2-9}}{3}.
   $$

   Assim:

   $$
   3\tan\theta=\sqrt{x^2-9}.
   $$

   Além disso:

   $$
   \theta
   =
   \operatorname{arcsec}\left(\frac{x}{3}\right).
   $$

:::result
$$
\boxed{
\int\frac{\sqrt{x^2-9}}{x}\,dx
=
\sqrt{x^2-9}
-
3\operatorname{arcsec}\left(\frac{x}{3}\right)
+C
}
$$
:::
::::

## Como voltar de $\theta$ para $x$ {#triangulo kicker="a parte que mais confunde" toc="Voltando para x"}

Depois da substituição, você normalmente chega a uma resposta envolvendo $\theta$. Mas a resposta final deve estar em $x$. É aqui que o triângulo retângulo entra.

:::example{n="A"}
#### Quando $x=a\sin\theta$

Temos:

$$
\sin\theta=\frac{x}{a}.
$$

Então imaginamos um triângulo com:

$$
\text{oposto}=x,
\qquad
\text{hipotenusa}=a.
$$

Pelo Teorema de Pitágoras, o cateto adjacente é:

$$
\sqrt{a^2-x^2}.
$$

Portanto:

$$
\boxed{
\sin\theta=\frac{x}{a}
}
$$

$$
\boxed{
\cos\theta=
\frac{\sqrt{a^2-x^2}}{a}
}
$$

$$
\boxed{
\theta=\arcsin\left(\frac{x}{a}\right)
}
$$
:::

:::example{n="B"}
#### Quando $x=a\tan\theta$

$$
\tan\theta=\frac{x}{a}.
$$

Agora podemos pensar em:

$$
\text{oposto}=x,
\qquad
\text{adjacente}=a.
$$

A hipotenusa será:

$$
\sqrt{x^2+a^2}.
$$

Portanto:

$$
\boxed{
\tan\theta=\frac{x}{a}
}
$$

$$
\boxed{
\sec\theta=
\frac{\sqrt{x^2+a^2}}{a}
}
$$

$$
\boxed{
\theta=\arctan\left(\frac{x}{a}\right)
}
$$
:::

:::example{n="C"}
#### Quando $x=a\sec\theta$

$$
\sec\theta=\frac{x}{a}.
$$

Como $\sec\theta=\dfrac{\text{hipotenusa}}{\text{adjacente}}$, podemos escolher:

$$
\text{hipotenusa}=x,
\qquad
\text{adjacente}=a.
$$

O cateto oposto será:

$$
\sqrt{x^2-a^2}.
$$

Portanto:

$$
\boxed{
\sec\theta=\frac{x}{a}
}
$$

$$
\boxed{
\tan\theta=
\frac{\sqrt{x^2-a^2}}{a}
}
$$

$$
\boxed{
\theta=
\operatorname{arcsec}\left(\frac{x}{a}\right)
}
$$
:::

:::note[Regra prática]
Você não precisa ficar tentando "adivinhar" seno, cosseno, tangente ou secante no final. Monte o triângulo a partir da substituição e leia as razões trigonométricas diretamente dele.
:::

## Como reconhecer o método rapidamente {#exemplos kicker="prática guiada" toc="Exemplos resolvidos"}

Antes de calcular qualquer coisa, olhe apenas para a expressão dentro da raiz.

::::example{n="4"}
#### $\displaystyle\int\frac{x^2}{\sqrt{25-x^2}}\,dx$

1. Identifique o padrão:

   $$
   25-x^2=5^2-x^2.
   $$

   Portanto:

   $$
   x=5\sin\theta.
   $$

2. $$
   dx=5\cos\theta\,d\theta
   $$

   e

   $$
   \sqrt{25-x^2}
   =
   5\cos\theta.
   $$

3. Também precisamos de $x^2$:

   $$
   x^2=25\sin^2\theta.
   $$

   Então:

   $$
   \int
   \frac{x^2}{\sqrt{25-x^2}}dx
   =
   \int
   \frac{25\sin^2\theta}
   {5\cos\theta}
   (5\cos\theta)d\theta
   $$

   $$
   =
   25\int\sin^2\theta\,d\theta.
   $$

4. Usamos:

   $$
   \sin^2\theta
   =
   \frac{1-\cos2\theta}{2}.
   $$

   Logo:

   $$
   25\int\sin^2\theta\,d\theta
   =
   \frac{25}{2}
   \left(
   \theta-\frac{\sin2\theta}{2}
   \right)+C.
   $$

5. Voltamos para $x$:

   $$
   \theta=
   \arcsin\left(\frac{x}{5}\right).
   $$

   E:

   $$
   \sin2\theta
   =
   2\sin\theta\cos\theta
   =
   \frac{2x\sqrt{25-x^2}}{25}.
   $$

:::result
$$
\boxed{
\int\frac{x^2}{\sqrt{25-x^2}}dx
=
\frac{25}{2}
\arcsin\left(\frac{x}{5}\right)
-
\frac{x\sqrt{25-x^2}}{2}
+C
}
$$
:::
::::

::::example{n="5"}
#### $\displaystyle\int\frac{dx}{(x^2+16)^{3/2}}$

1. O padrão é:

   $$
   x^2+16=x^2+4^2.
   $$

   Portanto usamos tangente:

   $$
   x=4\tan\theta.
   $$

2. $$
   dx=4\sec^2\theta\,d\theta.
   $$

   Além disso:

   $$
   x^2+16
   =
   16\tan^2\theta+16
   =
   16\sec^2\theta.
   $$

   Portanto:

   $$
   (x^2+16)^{3/2}
   =
   (16\sec^2\theta)^{3/2}
   =
   64\sec^3\theta.
   $$

3. Substituindo:

   $$
   \int
   \frac{4\sec^2\theta}
   {64\sec^3\theta}
   d\theta
   =
   \frac{1}{16}
   \int\cos\theta\,d\theta.
   $$

4. $$
   =
   \frac{\sin\theta}{16}+C.
   $$

   Como:

   $$
   \tan\theta=\frac{x}{4},
   $$

   temos:

   $$
   \sin\theta
   =
   \frac{x}{\sqrt{x^2+16}}.
   $$

:::result
$$
\boxed{
\int\frac{dx}{(x^2+16)^{3/2}}
=
\frac{x}
{16\sqrt{x^2+16}}
+C
}
$$
:::
::::

## E se a integral tiver limites? {#definida kicker="integral definida" toc="Integral definida"}

Para integrais definidas, podemos fazer a substituição trigonométrica e também transformar os limites de $x$ diretamente em limites de $\theta$.

:::note[Dica prática]
Isso costuma ser mais rápido porque você não precisa fazer toda a volta de $\theta$ para $x$ no final.
:::

::::example{n="6"}
#### $\displaystyle\int_0^2\sqrt{4-x^2}\,dx$

1. Como aparece $4-x^2=2^2-x^2$, usamos:

   $$
   x=2\sin\theta.
   $$

   $$
   dx=2\cos\theta\,d\theta.
   $$

2. Transformamos os limites.

   Quando $x=0$:

   $$
   0=2\sin\theta
   \Rightarrow
   \theta=0.
   $$

   Quando $x=2$:

   $$
   2=2\sin\theta
   \Rightarrow
   \theta=\frac{\pi}{2}.
   $$

3. $$
   \sqrt{4-x^2}=2\cos\theta.
   $$

   Então:

   $$
   \int_0^2\sqrt{4-x^2}\,dx
   =
   \int_0^{\pi/2}
   (2\cos\theta)(2\cos\theta)
   d\theta
   $$

   $$
   =
   4\int_0^{\pi/2}\cos^2\theta\,d\theta.
   $$

4. $$
   =
   4\int_0^{\pi/2}
   \frac{1+\cos2\theta}{2}
   d\theta
   $$

   $$
   =
   2
   \left[
   \theta+\frac{\sin2\theta}{2}
   \right]_0^{\pi/2}.
   $$

   Como:

   $$
   \sin\pi=0
   \qquad
   \sin0=0,
   $$

   temos:

   $$
   2\left(\frac{\pi}{2}\right)=\pi.
   $$

:::result
$$
\boxed{
\int_0^2\sqrt{4-x^2}\,dx=\pi
}
$$
:::
::::

## Erros comuns na substituição trigonométrica {#erros kicker="pegadinhas" toc="Erros comuns"}

:::warn[Escolher a função trigonométrica errada]
Se aparecer $a^2-x^2$, não use tangente só porque você lembra melhor dela. O padrão foi feito para seno: $x=a\sin\theta$.
:::

:::warn
#### Esquecer o \(a\)

Para $25-x^2$, a substituição não é $x=\sin\theta$. É:

$$
x=5\sin\theta.
$$
:::

:::warn
#### Esquecer de transformar \(dx\)

Se:

$$
x=a\sin\theta,
$$

então obrigatoriamente:

$$
dx=a\cos\theta\,d\theta.
$$

A substituição só está completa quando você troca **tudo**.
:::

:::warn
#### Parar antes de voltar para \(x\)

Uma resposta como $\frac{9}{2}\theta+\frac{9}{4}\sin2\theta+C$ ainda não terminou. Para uma integral indefinida, precisamos voltar de $\theta$ para $x$.
:::

:::warn[Esquecer o módulo no logaritmo]
Quando aparecer:

$$
\int\frac{1}{u}\,du,
$$

a resposta é:

$$
\ln|u|+C.
$$
:::

:::note[Checklist antes de terminar]
Pergunte: **escolhi o padrão correto? Troquei $x$? Troquei $dx$? Transformei a raiz? Integrei em $\theta$? Voltei para $x$?**
:::

## Resumo rápido da substituição trigonométrica {#resumo kicker="folha de cola" toc="Resumo rápido"}

Se você só lembrar de uma coisa desta página, lembre desta tabela:

:::formula[os três casos]
$$
\boxed{
\begin{array}{c|c|c}
\text{Padrão} & \text{Substituição} & dx \\[6pt]
\hline
a^2-x^2
&
x=a\sin\theta
&
dx=a\cos\theta\,d\theta
\\[8pt]
a^2+x^2
&
x=a\tan\theta
&
dx=a\sec^2\theta\,d\theta
\\[8pt]
x^2-a^2
&
x=a\sec\theta
&
dx=a\sec\theta\tan\theta\,d\theta
\end{array}}
$$
:::

::::example{n="→"}
#### Como reconhecer em 5 segundos

1. Veja o que está dentro da raiz:

   $$
   \boxed{a^2-x^2}
   $$

   → **seno**

2. $$
   \boxed{a^2+x^2}
   $$

   → **tangente**

3. $$
   \boxed{x^2-a^2}
   $$

   → **secante**

4. Faça a substituição, incluindo o $dx$.

5. Integre em $\theta$ e depois volte para $x$ usando o triângulo.

:::result
$$
\boxed{
a^2-x^2\rightarrow\sin
\qquad
a^2+x^2\rightarrow\tan
\qquad
x^2-a^2\rightarrow\sec
}
$$
:::
::::

:::next{kicker="continuando a série"}
#### Outros temas de Cálculo II para este material

Depois da substituição trigonométrica, podemos seguir para outras técnicas de integração.

- [Frações parciais](/topicos/fracoes-parciais)
- [Integrais impróprias](/topicos/integrais-improprias)
- [Sequências e séries](/topicos/sequencias-series)
- Séries de potências e Taylor
- [Coordenadas polares](/topicos/coordenadas-polares)
:::
