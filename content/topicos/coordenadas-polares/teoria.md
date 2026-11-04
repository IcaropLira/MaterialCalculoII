---
title: "Coordenadas polares"
number: "07"
summary: "Curvas em coordenadas polares, área entre curvas polares e conversão entre sistemas de coordenadas."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Represente pontos e curvas por raio e ângulo e calcule áreas usando a fórmula polar."
---

## O sistema polar {#ideia}

Um ponto é representado por $(r,\theta)$: $r$ é a distância à origem e $\theta$ é o ângulo. Conversões: $x=r\cos\theta$, $y=r\sin\theta$, $r^2=x^2+y^2$, $\tan\theta=y/x$ (considerando o quadrante).

## Representações equivalentes {#equivalencia}

O mesmo ponto pode ser representado por $(r,\theta+2k\pi)$. Também $(r,\theta)$ equivale a $(-r,\theta+\pi)$. Se $r$ é negativo, o ponto fica na direção oposta ao ângulo indicado.

## Gráficos polares comuns {#curvas}

$r=a$ é um círculo centrado na origem; $r=2a\cos\theta$ ou $r=2a\sin\theta$ são círculos deslocados. $r=a\cos(k\theta)$ pode formar rosas; $r=a(1+\cos\theta)$ é uma cardioide. Analise simetrias e intervalos para esboçar.

## Área em coordenadas polares {#area}

A área limitada por $r=f(\theta)$, entre $\alpha$ e $\beta$, é $A=\frac12\int_\alpha^\beta [f(\theta)]^2\,d\theta$. Entre duas curvas, quando a externa é conhecida: $A=\frac12\int_\alpha^\beta(r_{ext}^2-r_{int}^2)\,d\theta$.

## Exemplo resolvido {#exemplo}

Para a cardioide $r=1+\cos\theta$, uma volta completa usa $0\leq\theta\leq2\pi$. Então $A=\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta=\frac12(2\pi+\pi)=\frac{3\pi}{2}$, pois a integral de $2\cos\theta$ no período é zero e a de $\cos^2\theta$ é $\pi$.

## Erros comuns {#erros}

Na área, eleve o raio ao quadrado e mantenha o fator $1/2$; encontre interseções para definir limites; não use automaticamente $0$ a $2\pi$ se a curva ou região aparece antes; ao converter para cartesiano, confira o quadrante.
