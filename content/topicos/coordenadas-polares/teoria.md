---
title: "Coordenadas polares"
number: "11"
summary: "Sistema polar, conversão cartesiana, simetria, gráficos e cálculo de áreas limitadas por curvas polares."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Represente pontos por distância e direção, interprete curvas polares e deduza a fórmula de área a partir de setores circulares."
---

## 1. O sistema de coordenadas polares {#ideia}

No sistema cartesiano, um ponto é descrito por $(x,y)$. No sistema polar, descrevemos o mesmo ponto por $(r,\theta)$:
- $r$ é a distância orientada a partir da origem (pode ser negativo);
- $\theta$ é o ângulo medido a partir do semieixo positivo de $x$, normalmente em radianos.

Para $r\geq0$, o ponto fica a uma distância $r$ da origem na direção do ângulo $\theta$. Se $r<0$, ele fica na direção oposta.

## 2. Conversão entre coordenadas {#conversao}

As relações fundamentais vêm de trigonometria no triângulo retângulo:
$$x=r\cos\theta,\qquad y=r\sin\theta.$$
Somando os quadrados:
$$x^2+y^2=r^2(\cos^2\theta+\sin^2\theta)=r^2.$$
Logo,
$$r^2=x^2+y^2,\qquad r=\sqrt{x^2+y^2}\text{ quando }r\geq0.$$
Quando $x\ne0$, $\tan\theta=y/x$, mas essa relação não determina sozinha o quadrante. É necessário observar os sinais de $x$ e $y$ ou usar uma função de arco-tangente com dois argumentos.

## 3. Representações do mesmo ponto {#equivalencia}

Ângulos que diferem por uma volta completa representam a mesma direção:
$$(r,\theta)\sim(r,\theta+2k\pi),\quad k\in\mathbb Z.$$
Também vale
$$(r,\theta)\sim(-r,\theta+\pi).$$
Assim, um ponto pode ter várias representações polares. Quando o enunciado exige $r>0$ e $0\leq\theta<2\pi$, escolha a representação que respeita exatamente essas condições.

## 4. Simetrias úteis para esboçar curvas {#simetria}

Antes de desenhar uma curva $r=f(\theta)$, procure simetrias:
- Simetria em relação ao eixo polar: testar a substituição $\theta\mapsto-\theta$.
- Simetria em relação à reta $\theta=\pi/2$: testar $\theta\mapsto\pi-\theta$.
- Simetria em relação à origem: testar $\theta\mapsto\theta+\pi$ ou a transformação equivalente com raio negativo.

Uma substituição que mantém a equação (ou produz uma representação equivalente) indica uma simetria. Faça uma tabela de valores e observe quando $r=0$, quando $r$ é máximo e quando muda de sinal.

## 5. Curvas polares frequentes {#curvas}

- $r=a$ descreve uma circunferência centrada na origem, de raio $|a|$.
- $r=2a\cos\theta$ equivale a $(x-a)^2+y^2=a^2$.
- $r=2a\sin\theta$ equivale a $x^2+(y-a)^2=a^2$.
- $r=a(1+\cos\theta)$ é uma cardioide quando $a>0$.
- $r=a\cos(k\theta)$ e $r=a\sin(k\theta)$ podem formar rosas; o número de pétalas depende de $k$.

Não conclua o desenho apenas pelo nome da curva: verifique o intervalo angular que a percorre e se há repetição de pontos.

## 6. De onde vem a fórmula de área? {#deducao}

Um setor circular de raio $r$ e ângulo pequeno $\Delta\theta$ (em radianos) tem área
$$\Delta A=\frac12r^2\Delta\theta.$$
Dividindo o intervalo angular em pequenos pedaços, cada setor usa aproximadamente o raio da curva naquele pedaço. No limite, a soma de Riemann se transforma em
$$\boxed{A=\frac12\int_{\alpha}^{\beta}[r(\theta)]^2d\theta.}$$
A fórmula pressupõe que o intervalo percorra a região desejada sem contar partes repetidas. Por isso, identificar corretamente os limites é tão importante quanto integrar.

## 7. Área entre duas curvas polares {#area-entre}

Se, em cada ângulo do intervalo, a curva externa tem raio $r_{ext}$ e a interna tem raio $r_{int}$, subtraímos a área do setor interno da externa:
$$
A=\frac12\int_{\alpha}^{\beta}
\left(r_{ext}^2-r_{int}^2\right)d\theta.
$$
Antes de usar a fórmula:
1. encontre as interseções resolvendo $r_1(\theta)=r_2(\theta)$;
2. determine qual curva fica mais distante da origem em cada subintervalo;
3. divida a integral se a curva externa mudar;
4. confira se o intervalo não percorre a região mais de uma vez.

## 8. Exemplo: área de uma cardioide {#exemplo}

Considere $r=1+\cos\theta$. A curva retorna à origem quando $1+\cos\theta=0$, isto é, em $\theta=\pi$. O intervalo $[0,2\pi]$ percorre a cardioide completa uma vez.

Pela fórmula:
$$
A=\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta.
$$
Expanda o quadrado:
$$
A=\frac12\int_0^{2\pi}
(1+2\cos\theta+\cos^2\theta)d\theta.
$$
Use $\cos^2\theta=(1+\cos2\theta)/2$:
$$
A=\frac12\int_0^{2\pi}
\left(\frac32+2\cos\theta+\frac12\cos2\theta\right)d\theta.
$$
As integrais dos cossenos em um número inteiro de períodos são zero. Resta
$$
A=\frac12\cdot\frac32\cdot2\pi=\frac{3\pi}{2}.
$$

## 9. Erros comuns e checklist {#erros}

- Esquecer o fator $1/2$ ou não elevar $r$ ao quadrado.
- Usar $\tan^{-1}(y/x)$ sem verificar o quadrante.
- Supor que $r$ precisa ser sempre positivo.
- Usar automaticamente $0$ a $2\pi$ sem verificar quantas vezes a curva é percorrida.
- Subtrair os raios em vez de subtrair seus quadrados na área entre curvas.
- Não dividir o intervalo quando a curva externa muda.

## 10. Roteiro para uma questão de área polar {#roteiro}

1. Esboce a região e identifique as curvas que a limitam.
2. Resolva as interseções para encontrar os limites angulares.
3. Escolha um intervalo que percorra a região uma única vez.
4. Identifique raio externo e interno em cada trecho.
5. Monte a integral com $\frac12(r_{ext}^2-r_{int}^2)$.
6. Simplifique usando identidades trigonométricas antes de integrar, se isso reduzir o trabalho.
7. Avalie os limites e verifique se o resultado é positivo.

