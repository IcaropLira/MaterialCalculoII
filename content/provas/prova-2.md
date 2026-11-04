---
title: "Prova 2"
summary: "Integrais indefinidas, uma integral definida e duas integrais impróprias, cobrindo os principais métodos do Cálculo II."
tags: ["substituição", "por partes", "frações parciais", "impróprias"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Integrais por substituição, integração por partes, frações parciais e integrais impróprias com análise de convergência."
instruction: "Tente resolver sozinho antes de abrir a resolução comentada."
gabaritoIntro: "Cada item abre com a resolução completa, passo a passo."
cta: {"text": "Se quiser reforçar os métodos usados aqui, vale revisar as técnicas de substituição, por partes e frações parciais antes da próxima prova.", "label": "Ver o tópico de integração por partes", "href": "/topicos/integracao-por-partes"}
---

## Resolva as integrais indefinidas abaixo.

### a) $\displaystyle \int x\sqrt{x^2+1}\,dx$

1. Observamos que a derivada de $x^2+1$ é $2x$, e o integrando tem exatamente $x\,dx$. Isso sugere substituição direta.

2. Faça $u=x^2+1$. Então $du=2x\,dx$, ou seja, $x\,dx=\frac{1}{2}du$.

3. $$
   \int x\sqrt{x^2+1}\,dx = \int \sqrt{u}\cdot \frac{1}{2}\,du = \frac{1}{2}\int u^{1/2}\,du
   $$

   $$
   = \frac{1}{2}\cdot \frac{u^{3/2}}{3/2} = \frac{1}{3}u^{3/2}
   $$

4. Voltando para a variável original:

:::result
$\displaystyle \int x\sqrt{x^2+1}\,dx = \frac{1}{3}(x^2+1)^{3/2}+C$
:::

### b) $\displaystyle \int x\ln x\,dx$

1. Temos um produto de funções, então a estratégia mais natural é integração por partes.

   $$
   u=\ln x, \quad dv=x\,dx
   $$

   $$
   du=\frac{1}{x}dx, \quad v=\frac{x^2}{2}
   $$

2. Aplicando a fórmula $\int u\,dv = uv-\int v\,du$:

   $$
   \int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot \frac{1}{x}\,dx
   $$

   $$
   = \frac{x^2}{2}\ln x - \frac{1}{2}\int x\,dx
   $$

3. $$
   = \frac{x^2}{2}\ln x - \frac{1}{2}\cdot \frac{x^2}{2} = \frac{x^2}{2}\ln x - \frac{x^2}{4}
   $$

:::result
$\displaystyle \int x\ln x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4}+C$
:::

### c) $\displaystyle \int \frac{x^2}{(x-1)^2}\,dx$

1. Antes de integrar, fazemos a divisão polinomial para simplificar.

   $$
   \frac{x^2}{(x-1)^2} = \frac{x^2}{x^2-2x+1}
   $$

   Como o grau do numerador e do denominador é o mesmo, fazemos a divisão:

   $$
   x^2 = (x^2-2x+1) + 2x - 1
   $$

   Portanto

   $$
   \frac{x^2}{(x-1)^2} = 1 + \frac{2x-1}{(x-1)^2}
   $$

2. Agora escrevemos o restante em termos de $x-1$:

   $$
   2x-1 = 2(x-1)+1
   $$

   Assim,

   $$
   \frac{2x-1}{(x-1)^2} = \frac{2}{x-1} + \frac{1}{(x-1)^2}
   $$

3. Então a integral fica

   $$
   \int \left(1 + \frac{2}{x-1} + \frac{1}{(x-1)^2}\right)dx
   $$

4. $$
   = x + 2\ln|x-1| - \frac{1}{x-1}+C
   $$

:::result
$\displaystyle \int \frac{x^2}{(x-1)^2}\,dx = x + 2\ln|x-1| - \frac{1}{x-1}+C$
:::

### d) $\displaystyle \int \frac{1}{\sqrt{9-x^2}}\,dx$

1. Esse é o formato clássico da substituição trigonométrica com $a=3$. Fazemos

   $$
   x=3\sin\theta, \quad dx=3\cos\theta\,d\theta, \quad \sqrt{9-x^2}=\sqrt{9-9\sin^2\theta}=3\cos\theta
   $$

2. Substituindo:

   $$
   \int \frac{1}{\sqrt{9-x^2}}dx = \int \frac{3\cos\theta}{3\cos\theta}d\theta = \int d\theta
   $$

3. Logo,

   $$
   \int d\theta = \theta + C
   $$

4. Como $x=3\sin\theta$, então $\theta = \arcsin(x/3)$.

:::result
$\displaystyle \int \frac{1}{\sqrt{9-x^2}}\,dx = \arcsin\left(\frac{x}{3}\right)+C$
:::

## Calcule a integral definida.

### $\displaystyle \int_0^{\pi/2} x\sin x\,dx$

1. Como aparecem um produto $x\sin x$, usamos integração por partes.

   $$
   u=x, \quad dv=\sin x\,dx
   $$

   $$
   du=dx, \quad v=-\cos x
   $$

2. $$
   \int x\sin x\,dx = -x\cos x - \int (-\cos x)dx = -x\cos x + \int \cos x\,dx
   $$

   $$
   = -x\cos x + \sin x
   $$

3. Avaliaremos de $0$ a $\pi/2$:

   $$
   \left[-x\cos x + \sin x\right]_0^{\pi/2}
   $$

4. $$
   = \left(-\frac{\pi}{2}\cos\frac{\pi}{2} + \sin\frac{\pi}{2}\right) - \left(-0\cdot\cos 0 + \sin 0\right)
   $$

   $$
   = (0+1) - (0+0) = 1
   $$

:::result
$\displaystyle \int_0^{\pi/2} x\sin x\,dx = 1$
:::

## Determine se as integrais impróprias convergem ou divergem.

### a) $\displaystyle \int_0^1 \frac{1}{\sqrt{1-x^2}}\,dx$

1. O integrando tem singularidade em $x=1$, porque o denominador se anula. Portanto, tratamos como limite:

   $$
   \lim_{t\to 1^-}\int_0^t \frac{1}{\sqrt{1-x^2}}\,dx
   $$

2. Reconhecemos a antiderivada:

   $$
   \int \frac{1}{\sqrt{1-x^2}}dx = \arcsin x + C
   $$

3. $$
   \lim_{t\to 1^-}\left[\arcsin x\right]_0^t = \lim_{t\to 1^-}(\arcsin t - \arcsin 0)
   $$

   $$
   = \arcsin 1 = \frac{\pi}{2}
   $$

:::result{kind="converge"}
A integral converge e o valor é $\frac{\pi}{2}$.
:::

### b) $\displaystyle \int_1^{\infty} \frac{1}{x^2+3x+2}\,dx$

1. Fatoramos o denominador:

   $$
   x^2+3x+2 = (x+1)(x+2)
   $$

   Então a integral fica

   $$
   \int_1^{\infty}\frac{1}{(x+1)(x+2)}dx
   $$

2. Usamos frações parciais:

   $$
   \frac{1}{(x+1)(x+2)} = \frac{A}{x+1}+\frac{B}{x+2}
   $$

   $$
   1 = A(x+2)+B(x+1)
   $$

   Igualando os coeficientes:

   $$
   A+B=0, \quad 2A+B=1
   $$

   Resolvendo, encontramos $A=1$ e $B=-1$. Logo,

   $$
   \frac{1}{(x+1)(x+2)} = \frac{1}{x+1}-\frac{1}{x+2}
   $$

3. $$
   \int_1^{\infty}\left(\frac{1}{x+1}-\frac{1}{x+2}\right)dx = \lim_{t\to\infty}\left[\ln|x+1| - \ln|x+2|\right]_1^t
   $$

   $$
   = \lim_{t\to\infty}\ln\left|\frac{t+1}{t+2}\right| - \ln\left(\frac{2}{3}\right)
   $$

4. Como $\frac{t+1}{t+2}\to 1$, temos $\ln\left(\frac{t+1}{t+2}\right)\to 0$. Portanto,

   $$
   = 0 - \ln\left(\frac{2}{3}\right) = \ln\left(\frac{3}{2}\right)
   $$

:::result{kind="converge"}
A integral converge e o valor é $\ln(3/2)$.
:::
