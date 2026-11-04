---
title: "Prova 9"
summary: "Conversão entre sistemas de coordenadas e cálculo de áreas em coordenadas polares."
tags: ["coordenadas polares", "área", "conversão"]
level: "avançado"
status: "available"
eyebrow: "cálculo ii · prova resolvida"
lede: "Coordenadas polares: conversão, curvas e área em coordenadas do tipo $r,\\theta$."
instruction: "Converta, interprete e calcule áreas em coordenadas polares."
gabaritoIntro: "As fórmulas de conversão e a área polar são a base da resolução."
cta: {"text": "Em coordenadas polares, o segredo é transformar a figura em uma equação em termos de $r$ e $\\theta$, e então usar a área polar $A=\\frac12\\int r^2 d\\theta$.", "label": "Revisar geometria e trigonometria", "href": "/topicos/substituicao-trigonometrica"}
---

## Converta os pontos para coordenadas cartesianas.

### a) $(2,\pi/2)$

1. Usamos

   $$
   x=r\cos\theta,\quad y=r\sin\theta
   $$

   Com $r=2$ e $\theta=\pi/2$:

   $$
   x=2\cos(\pi/2)=0,\quad y=2\sin(\pi/2)=2
   $$

:::result
$(x,y)=(0,2)$
:::

### b) $(3,\pi/3)$

1. Aplicando as fórmulas:

   $$
   x=3\cos(\pi/3)=3\cdot\frac12=\frac32,\quad y=3\sin(\pi/3)=3\cdot\frac{\sqrt3}{2}=\frac{3\sqrt3}{2}
   $$

:::result
$(x,y)=\left(\frac32,\frac{3\sqrt3}{2}\right)$
:::

## Escreva em coordenadas polares.

### $(x,y)=(\sqrt{3},1)$

1. Primeiro calculamos o módulo:

   $$
   r=\sqrt{x^2+y^2}=\sqrt{3+1}=2
   $$

   E o argumento:

   $$
   \theta = \arctan\left(\frac{y}{x}\right)=\arctan\left(\frac{1}{\sqrt3}\right)=\frac{\pi}{6}
   $$

:::result
$(r,\theta)=\left(2,\frac{\pi}{6}\right)$
:::

## Calcule a área da região limitada por $r=2+2\cos\theta$.

### $A = \dfrac12\int_0^{2\pi} r^2 d\theta$

1. Expandimos o quadrado:

   $$
   (2+2\cos\theta)^2 = 4+8\cos\theta+4\cos^2\theta
   $$

   Então:

   $$
   A=\frac12\int_0^{2\pi}(4+8\cos\theta+4\cos^2\theta)d\theta
   $$

2. Usamos $\cos^2\theta = \frac{1+\cos2\theta}{2}$:

   $$
   4\cos^2\theta = 2+2\cos2\theta
   $$

   Logo:

   $$
   A=\frac12\int_0^{2\pi}(6+8\cos\theta+2\cos2\theta)d\theta
   $$

3. Integrando termo a termo:

   $$
   \int_0^{2\pi}6d\theta = 12\pi,\quad \int_0^{2\pi}8\cos\theta d\theta = 0,\quad \int_0^{2\pi}2\cos2\theta d\theta = 0
   $$

   Assim:

   $$
   A=\frac12(12\pi)=6\pi
   $$

:::result
$A=6\pi$
:::
