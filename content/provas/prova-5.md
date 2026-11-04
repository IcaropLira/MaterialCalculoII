---
title: "Prova 5"
summary: "Prova de revisão final com por partes, substituição trigonométrica, simplificação em frações parciais e análise de convergência."
tags: ["por partes", "trigonométrica", "frações parciais", "impróprias"]
level: "avançado"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Revisão de integração por partes, substituição trigonométrica, frações parciais e integrais impróprias em nível de prova final."
instruction: "Essa é uma prova de revisão final: use as técnicas certas e depois compare com a resolução comentada."
gabaritoIntro: "Cada item trata da técnica correta e do raciocínio que leva ao resultado."
cta: {"text": "Essa prova conecta as ideias centrais do curso: reconhecer o padrão, escolher a técnica certa e interpretar o comportamento da integral quando ela se torna imprópria.", "label": "Ver tópico de substituição trigonométrica", "href": "/topicos/substituicao-trigonometrica"}
---

## Resolva as integrais abaixo.

### a) $\displaystyle \int \frac{x}{\sqrt{x^2+9}}\,dx$

1. Veja que a derivada de $x^2+9$ é $2x$, então a substituição direta funciona bem.

   $$
   u=x^2+9, \quad du=2x\,dx
   $$

2. $$
   \int \frac{x}{\sqrt{x^2+9}}dx = \frac12\int u^{-1/2}du
   $$

   $$
   = \frac12\cdot 2u^{1/2}+C = \sqrt{u}+C
   $$

3. Voltando para x:

:::result
$\displaystyle \int \frac{x}{\sqrt{x^2+9}}\,dx = \sqrt{x^2+9}+C$
:::

### b) $\displaystyle \int x^2\cos x\,dx$

1. Integração por partes: como o polinômio é de grau 2, precisamos aplicar duas vezes.

   $$
   u=x^2, \quad dv=\cos x\,dx
   $$

   $$
   du=2x\,dx, \quad v=\sin x
   $$

2. $$
   \int x^2\cos x\,dx = x^2\sin x - \int 2x\sin x\,dx
   $$

3. Aplicamos novamente em $\int 2x\sin x\,dx$:

   $$
   u=2x, \quad dv=\sin x\,dx
   $$

   $$
   du=2dx, \quad v=-\cos x
   $$

   $$
   \int 2x\sin x\,dx = -2x\cos x + 2\int \cos x\,dx = -2x\cos x + 2\sin x
   $$

4. $$
   \int x^2\cos x\,dx = x^2\sin x - (-2x\cos x + 2\sin x)
   $$

   $$
   = x^2\sin x + 2x\cos x - 2\sin x + C
   $$

:::result
$\displaystyle \int x^2\cos x\,dx = (x^2-2)\sin x + 2x\cos x + C$
:::

### c) $\displaystyle \int \frac{x+1}{x^2-1}\,dx$

1. Fatoramos o denominador:

   $$
   x^2-1=(x-1)(x+1)
   $$

   Agora simplificamos o integrando:

   $$
   \frac{x+1}{x^2-1} = \frac{x+1}{(x-1)(x+1)} = \frac{1}{x-1} \quad (x\neq -1)
   $$

2. Assim, a integral vira

   $$
   \int \frac{1}{x-1}dx = \ln|x-1|+C
   $$

:::result
$\displaystyle \int \frac{x+1}{x^2-1}\,dx = \ln|x-1|+C$
:::

## Calcule a integral indefinida.

### $\displaystyle \int \frac{dx}{\sqrt{4-x^2}}$

1. Essa é uma forma clássica de substituição trigonométrica com $a=2$:

   $$
   x=2\sin\theta, \quad dx=2\cos\theta d\theta, \quad \sqrt{4-x^2}=2\cos\theta
   $$

2. $$
   \int \frac{dx}{\sqrt{4-x^2}} = \int \frac{2\cos\theta}{2\cos\theta}d\theta = \int d\theta = \theta + C
   $$

3. Como $x=2\sin\theta$, temos $\theta=\arcsin(x/2)$.

:::result
$\displaystyle \int \frac{dx}{\sqrt{4-x^2}} = \arcsin\left(\frac{x}{2}\right)+C$
:::

## Determine se as integrais convergem ou divergem.

### a) $\displaystyle \int_1^\infty \frac{1}{x}\,dx$

1. Escrevemos como limite:

   $$
   \lim_{t\to\infty}\int_1^t \frac{1}{x}dx
   $$

2. $$
   \int \frac{1}{x}dx = \ln x
   $$

   $$
   \lim_{t\to\infty}(\ln t - \ln 1)=\lim_{t\to\infty}\ln t = \infty
   $$

:::result{kind="diverge"}
A integral diverge.
:::

### b) $\displaystyle \int_0^1 \frac{1}{1-x}\,dx$

1. O integrando tem singularidade em x=1, que é o extremo superior do intervalo. Então:

   $$
   \int_0^1 \frac{1}{1-x}dx = \lim_{t\to1^-}\int_0^t \frac{1}{1-x}dx
   $$

2. $$
   \int \frac{1}{1-x}dx = -\ln|1-x|
   $$

   Logo

   $$
   \lim_{t\to1^-}[-\ln(1-x)]_0^t = \lim_{t\to1^-}(-\ln(1-t) + \ln 1)
   $$

   Como $1-t\to 0^+$, temos $-\ln(1-t)\to +\infty$.

:::result{kind="diverge"}
A integral diverge.
:::
