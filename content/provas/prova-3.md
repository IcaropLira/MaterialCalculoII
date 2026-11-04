---
title: "Prova 3"
summary: "Integrais trigonométricas, integração por partes, substituição trigonométrica e convergência de integrais impróprias."
tags: ["substituição", "trigonométrica", "por partes", "impróprias"]
level: "avançado"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Técnicas de integração em conjunto: substituição, por partes, substituição trigonométrica e análise de convergência de integrais impróprias."
instruction: "Resolva com cuidado e compare depois com os comentários detalhados."
gabaritoIntro: "Cada item é resolvido com a mesma lógica usada nos exercícios do site: identificar a técnica, simplificar e concluir."
cta: {"text": "Esse conjunto de provas cobriu os principais métodos do semestre: substituição, integração por partes, trigonométrica e integrais impróprias.", "label": "Ver o tópico de substituição trigonométrica", "href": "/topicos/substituicao-trigonometrica"}
---

## Resolva as integrais abaixo.

### a) $\displaystyle \int \sin^3 x\cos^2 x\,dx$

1. Como a potência de seno é ímpar, separamos um fator $\sin x$ e usamos a identidade $\sin^2 x = 1-\cos^2 x$:

   $$
   \sin^3 x\cos^2 x = \sin x(\sin^2 x)\cos^2 x = \sin x(1-\cos^2 x)\cos^2 x
   $$

2. Agora a substituição fica natural:

   $$
   u=\cos x, \quad du=-\sin x\,dx
   $$

   $$
   \int \sin^3 x\cos^2 x\,dx = -\int (1-u^2)u^2\,du
   $$

3. $$
   -\int (u^2-u^4)du = -\left(\frac{u^3}{3}-\frac{u^5}{5}\right)
   $$

   $$
   = -\frac{u^3}{3}+\frac{u^5}{5}
   $$

4. Voltando para $x$:

:::result
$\displaystyle \int \sin^3 x\cos^2 x\,dx = -\frac{\cos^3 x}{3}+\frac{\cos^5 x}{5}+C$
:::

### b) $\displaystyle \int x^2 e^x\,dx$

1. Essa é uma integral típica de integração por partes, e como o polinômio é de grau 2, precisamos aplicar duas vezes.

   $$
   u=x^2, \quad dv=e^x dx
   $$

   $$
   du=2x\,dx, \quad v=e^x
   $$

2. $$
   \int x^2 e^x dx = x^2 e^x - \int 2x e^x dx
   $$

3. Aplicamos integração por partes novamente em $\int 2x e^x dx$:

   $$
   u=2x, \quad dv=e^x dx
   $$

   $$
   du=2dx, \quad v=e^x
   $$

   $$
   \int 2x e^x dx = 2x e^x - \int 2e^x dx = 2x e^x - 2e^x
   $$

4. $$
   \int x^2 e^x dx = x^2 e^x - (2x e^x - 2e^x) = (x^2-2x+2)e^x
   $$

:::result
$\displaystyle \int x^2 e^x\,dx = (x^2-2x+2)e^x + C$
:::

### c) $\displaystyle \int \frac{dx}{x^2\sqrt{x^2+4}}$

1. Forma $\sqrt{x^2+a^2}$, então a substituição trigonométrica correta é

   $$
   x=2\tan\theta, \quad dx=2\sec^2\theta\,d\theta, \quad \sqrt{x^2+4}=2\sec\theta
   $$

2. $$
   \int \frac{dx}{x^2\sqrt{x^2+4}} = \int \frac{2\sec^2\theta}{(4\tan^2\theta)(2\sec\theta)}d\theta = \frac{1}{4}\int \frac{\sec\theta}{\tan^2\theta}d\theta
   $$

   Como $\sec\theta/\tan^2\theta = \frac{1}{\cos\theta}\cdot \frac{\cos^2\theta}{\sin^2\theta} = \frac{\cos\theta}{\sin^2\theta}$, obtemos

   $$
   = \frac{1}{4}\int \frac{\cos\theta}{\sin^2\theta}d\theta
   $$

3. Agora faça $u=\sin\theta$, então $du=\cos\theta d\theta$:

   $$
   \frac{1}{4}\int u^{-2}du = -\frac{1}{4u} + C = -\frac{1}{4\sin\theta}+C
   $$

4. Como $x=2\tan\theta$, temos

   $$
   \tan\theta = \frac{x}{2}
   $$

   Com um triângulo retângulo, obtemos

   $$
   \sin\theta = \frac{x}{\sqrt{x^2+4}}
   $$

:::result
$\displaystyle \int \frac{dx}{x^2\sqrt{x^2+4}} = -\frac{\sqrt{x^2+4}}{4x}+C$
:::

## Calcule as integrais impróprias.

### a) $\displaystyle \int_0^{\infty} e^{-x}\,dx$

1. Como o limite superior é infinito, escrevemos em forma de limite:

   $$
   \int_0^{\infty} e^{-x}dx = \lim_{t\to\infty}\int_0^t e^{-x}dx
   $$

2. A antiderivada de $e^{-x}$ é $-e^{-x}$:

   $$
   \int e^{-x}dx = -e^{-x}
   $$

3. $$
   \lim_{t\to\infty}[-e^{-x}]_0^t = \lim_{t\to\infty}(-e^{-t}+1)
   $$

4. Como $e^{-t}\to 0$, temos

   $$
   = 1
   $$

:::result{kind="converge"}
A integral converge e o valor é 1.
:::

### b) $\displaystyle \int_{-1}^{1} \frac{1}{x^2}\,dx$

1. O integrando é descontínuo em $x=0$, que está dentro do intervalo $[-1,1]$. Precisamos separar em duas integrais:

   $$
   \int_{-1}^{1}\frac{1}{x^2}dx = \int_{-1}^{0}\frac{1}{x^2}dx + \int_0^{1}\frac{1}{x^2}dx
   $$

2. Vamos calcular uma delas como limite no ponto singular:

   $$
   \int_0^1 \frac{1}{x^2}dx = \lim_{t\to 0^+}\int_t^1 x^{-2}dx
   $$

   Mas

   $$
   \int x^{-2}dx = -x^{-1}
   $$

3. $$
   \lim_{t\to 0^+}\left[-\frac{1}{x}\right]_t^1 = \lim_{t\to 0^+}\left(-1 + \frac{1}{t}\right)
   $$

   Como $1/t\to +\infty$, a integral diverge.

:::result{kind="diverge"}
A integral diverge, pois o integrando tem uma singularidade em 0 dentro do intervalo.
:::

## Determine a antiderivada da função abaixo.

### $\displaystyle \int \frac{1}{\sqrt{16-x^2}}\,dx$

1. Temos a forma clássica $\sqrt{a^2-x^2}$, com $a=4$. Fazemos

   $$
   x=4\sin\theta, \quad dx=4\cos\theta\,d\theta, \quad \sqrt{16-x^2}=\sqrt{16-16\sin^2\theta}=4\cos\theta
   $$

2. $$
   \int \frac{1}{\sqrt{16-x^2}}dx = \int \frac{4\cos\theta}{4\cos\theta}d\theta = \int d\theta = \theta + C
   $$

3. Como $x=4\sin\theta$, temos $\theta = \arcsin(x/4)$.

:::result
$\displaystyle \int \frac{1}{\sqrt{16-x^2}}\,dx = \arcsin\left(\frac{x}{4}\right)+C$
:::
