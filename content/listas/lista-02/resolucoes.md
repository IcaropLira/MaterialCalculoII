---
title: "Lista 02 resolvida"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Todas as questões resolvidas e comentadas passo a passo: integrais, áreas, volumes (seções, discos, anéis, cascas), comprimento de arco e área de superfície."
kind: "doc"
---

:::note[Como usar]
Cada alínea traz o raciocínio completo: o que reconhecer, qual ferramenta usar e a conta linha a linha. Em todas as integrais definidas vale o **Teorema Fundamental do Cálculo**: se $F'=f$, então $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$. Nas áreas (Questão 2) a regra é: **área = ∫ (curva de cima − curva de baixo)**, e onde a função muda de sinal é preciso **dividir** a integral. Na Questão 3 o roteiro é sempre: escolher $u$, calcular $du$, reescrever, integrar e **voltar a $x$** (ou, em integral definida, trocar os limites).
:::

## Questão 1 — Integrais definidas {#q1}

Antiderivadas usadas nesta questão: $\int x^n\,dx=\frac{x^{n+1}}{n+1}$ ($n\ne-1$), $\int\frac{dx}{x}=\ln|x|$, $\int e^{kx}dx=\frac{e^{kx}}{k}$, $\int\sin(kx)dx=-\frac{\cos kx}{k}$, $\int\cos(kx)dx=\frac{\sin kx}{k}$, $\int\sec^2x\,dx=\tan x$.

### a) $\displaystyle\int_0^1 (x+3)\,dx$

Integrando termo a termo: uma primitiva de $x+3$ é $\frac{x^2}{2}+3x$.

$$\left[\frac{x^2}{2}+3x\right]_0^1=\left(\frac12+3\right)-0=\frac72.$$

:::result
**Resposta:** $\dfrac72$
:::

### b) $\displaystyle\int_0^4 \frac12\,dx$

A integral de uma constante $k$ é $kx$ (é a área de um retângulo de base $4$ e altura $\tfrac12$).

$$\left[\frac{x}{2}\right]_0^4=2-0=2.$$

:::result
**Resposta:** $2$
:::

### c) $\displaystyle\int_{-2}^1 (x^2-1)\,dx$

Primitiva: $\frac{x^3}{3}-x$. Avaliando nos extremos:

$$\left(\frac13-1\right)-\left(\frac{(-2)^3}{3}-(-2)\right)=-\frac23-\left(-\frac83+2\right)=-\frac23-\left(-\frac23\right)=0.$$

Comentário: o resultado é $0$ porque a parte da parábola abaixo do eixo $x$ (em $-1<x<1$) compensa exatamente a parte acima (em $-2<x<-1$). Isto é **integral**, não área.

:::result
**Resposta:** $0$
:::

### d) $\displaystyle\int_1^3 \frac1{x^3}\,dx$

Reescreva $\frac1{x^3}=x^{-3}$, cuja primitiva é $\frac{x^{-2}}{-2}=-\frac{1}{2x^2}$.

$$\left[-\frac1{2x^2}\right]_1^3=-\frac1{18}+\frac12=\frac{-1+9}{18}=\frac49.$$

:::result
**Resposta:** $\dfrac49$
:::

### e) $\displaystyle\int_{-1}^1 5\,dx$

$$\big[5x\big]_{-1}^{1}=5-(-5)=10.$$

(Retângulo de base $2$ e altura $5$.)

:::result
**Resposta:** $10$
:::

### f) $\displaystyle\int_0^1\left(5x^3-\frac12\right)dx$

Primitiva: $\frac{5x^4}{4}-\frac x2$.

$$\left[\frac{5x^4}{4}-\frac x2\right]_0^1=\frac54-\frac12=\frac34.$$

:::result
**Resposta:** $\dfrac34$
:::

### g) $\displaystyle\int_0^1\frac{x^2}{x^2+x}\,dx$

Fatore o denominador e simplifique ($x\neq0$; em $x=0$ a função tem limite $0$, então a integral é própria):

$$\frac{x^2}{x(x+1)}=\frac{x}{x+1}=1-\frac1{x+1}.$$

Então

$$\int_0^1\left(1-\frac1{x+1}\right)dx=\Big[x-\ln|x+1|\Big]_0^1=(1-\ln2)-(0-0)=1-\ln2.$$

:::result
**Resposta:** $1-\ln 2\approx0{,}307$
:::

### h) $\displaystyle\int_0^4\sqrt x\,dx$

$\sqrt x=x^{1/2}$, primitiva $\frac{x^{3/2}}{3/2}=\frac23x^{3/2}$.

$$\frac23\cdot4^{3/2}-0=\frac23\cdot8=\frac{16}{3}.$$

:::result
**Resposta:** $\dfrac{16}3$
:::

### i) $\displaystyle\int_1^4\frac1{\sqrt x}\,dx$

$\frac1{\sqrt x}=x^{-1/2}$, primitiva $\frac{x^{1/2}}{1/2}=2\sqrt x$.

$$\big[2\sqrt x\big]_1^4=4-2=2.$$

:::result
**Resposta:** $2$
:::

### j) $\displaystyle\int_0^8\sqrt[3]{x}\,dx$

$\sqrt[3]x=x^{1/3}$, primitiva $\frac{x^{4/3}}{4/3}=\frac34x^{4/3}$.

$$\frac34\cdot8^{4/3}=\frac34\cdot16=12.$$

($8^{4/3}=(8^{1/3})^4=2^4=16$.)

:::result
**Resposta:** $12$
:::

### k) $\displaystyle\int_0^1(x-3)^2\,dx$

Duas formas. **Expandindo:** $(x-3)^2=x^2-6x+9$, primitiva $\frac{x^3}{3}-3x^2+9x$, que em $[0,1]$ dá $\frac13-3+9=\frac{19}{3}$.

**Por substituição simples** ($u=x-3$, $du=dx$): $\left[\frac{(x-3)^3}{3}\right]_0^1=\frac{-8}{3}-\frac{-27}{3}=\frac{19}3$. As duas coincidem.

:::result
**Resposta:** $\dfrac{19}3$
:::

### l) $\displaystyle\int_1^4\frac{1+x}{x^3}\,dx$

Separe a fração: $\frac{1+x}{x^3}=x^{-3}+x^{-2}$. Primitiva: $-\frac1{2x^2}-\frac1x$.

$$\left(-\frac1{32}-\frac14\right)-\left(-\frac12-1\right)=-\frac{9}{32}+\frac32=\frac{-9+48}{32}=\frac{39}{32}.$$

:::result
**Resposta:** $\dfrac{39}{32}$
:::

### m) $\displaystyle\int_1^2\frac{1+3x^2}{x}\,dx$

Separe: $\frac{1+3x^2}{x}=\frac1x+3x$. Primitiva: $\ln|x|+\frac{3x^2}{2}$.

$$\left(\ln2+6\right)-\left(0+\frac32\right)=\ln2+\frac92.$$

:::result
**Resposta:** $\ln2+\dfrac92\approx5{,}193$
:::

### n) $\displaystyle\int_{-\pi}^0\sin(3x)\,dx$

Primitiva: $-\frac{\cos3x}{3}$ (a regra da cadeia gera o fator $\frac13$).

$$\left[-\frac{\cos3x}{3}\right]_{-\pi}^0=-\frac13+\frac{\cos(-3\pi)}{3}=-\frac13+\frac{-1}{3}=-\frac23.$$

($\cos(-3\pi)=\cos3\pi=-1$.)

:::result
**Resposta:** $-\dfrac23$
:::

### o) $\displaystyle\int_0^{\pi/4}\sin x\,dx$

$$\big[-\cos x\big]_0^{\pi/4}=-\frac{\sqrt2}{2}+1=1-\frac{\sqrt2}2.$$

:::result
**Resposta:** $1-\dfrac{\sqrt2}{2}\approx0{,}293$
:::

### p) $\displaystyle\int_{-1}^0e^{-2x}\,dx$

Primitiva: $-\frac12e^{-2x}$.

$$\left[-\frac12e^{-2x}\right]_{-1}^{0}=-\frac12+\frac12e^{2}=\frac{e^2-1}{2}.$$

:::result
**Resposta:** $\dfrac{e^2-1}{2}\approx3{,}195$
:::

### q) $\displaystyle\int_0^{\pi/3}\big(3+\cos(3x)\big)\,dx$

Primitiva: $3x+\frac{\sin3x}{3}$.

$$\left(\pi+\frac{\sin\pi}{3}\right)-0=\pi+0=\pi.$$

:::result
**Resposta:** $\pi$
:::

### r) $\displaystyle\int_0^{\pi/2}\cos^2x\,dx$

Use a identidade de redução de grau $\cos^2x=\frac{1+\cos2x}{2}$.

$$\int_0^{\pi/2}\frac{1+\cos2x}{2}\,dx=\left[\frac x2+\frac{\sin2x}{4}\right]_0^{\pi/2}=\frac\pi4+\frac{\sin\pi}{4}=\frac\pi4.$$

:::result
**Resposta:** $\dfrac\pi4$
:::

### s) $\displaystyle\int_0^{\pi/2}\sin^2x\,dx$

Use $\sin^2x=\frac{1-\cos2x}{2}$.

$$\left[\frac x2-\frac{\sin2x}{4}\right]_0^{\pi/2}=\frac\pi4.$$

Conferência: $\sin^2x+\cos^2x=1$, logo as duas integrais somam $\frac\pi2$ (o comprimento do intervalo) e, por simetria, valem $\frac\pi4$ cada.

:::result
**Resposta:** $\dfrac\pi4$
:::

### t) $\displaystyle\int_0^{\pi/4}\sec^2x\,dx$

Como $(\tan x)'=\sec^2x$:

$$\big[\tan x\big]_0^{\pi/4}=1-0=1.$$

:::result
**Resposta:** $1$
:::

## Questão 2 — Áreas de regiões planas {#q2}

Roteiro usado em todas as alíneas: (1) esboçar a região; (2) achar interseções/limites; (3) decidir quem está por cima; (4) montar $A=\int_a^b(\text{cima}-\text{baixo})\,dx$; (5) calcular. Quando uma curva cruza o eixo (ou outra curva) *dentro* do intervalo, a integral é dividida nos pontos de cruzamento — senão positivos e negativos se cancelam.

### a) $x=1$, $x=3$, eixo $Ox$ e $y=x^3$

*Esboço:* a cúbica sobe de $(1,1)$ a $(3,27)$ e fica acima do eixo $x$ em todo o intervalo. Cima: $x^3$; baixo: $0$.

$$A=\int_1^3x^3\,dx=\left[\frac{x^4}4\right]_1^3=\frac{81}{4}-\frac14=20.$$

:::result
**Resposta:** $A=20$ u.a.
:::

### b) $x=1$, $x=4$, $y=0$ e $y=\sqrt x$

*Esboço:* a raiz fica acima do eixo em $[1,4]$.

$$A=\int_1^4\sqrt x\,dx=\left[\frac23x^{3/2}\right]_1^4=\frac23(8-1)=\frac{14}{3}.$$

:::result
**Resposta:** $A=\dfrac{14}3$ u.a.
:::

### c) $x^2-1\le y\le0$

*Esboço:* a região está entre a parábola $y=x^2-1$ (embaixo) e o eixo $x$ (em cima). As interseções com $y=0$ são $x=\pm1$; entre elas a parábola é negativa, então a condição $x^2-1\le y\le0$ faz sentido. Cima: $0$; baixo: $x^2-1$.

$$A=\int_{-1}^1\big(0-(x^2-1)\big)dx=\int_{-1}^1(1-x^2)\,dx=\left[x-\frac{x^3}3\right]_{-1}^1=\frac23-\left(-\frac23\right)=\frac43.$$

:::result
**Resposta:** $A=\dfrac43$ u.a.
:::

### d) $0\le y\le4-x^2$

*Esboço:* parábola voltada para baixo, vértice $(0,4)$, cortando o eixo em $x=\pm2$. Cima: $4-x^2$; baixo: $0$.

$$A=\int_{-2}^2(4-x^2)\,dx=2\int_0^2(4-x^2)\,dx=2\left[4x-\frac{x^3}3\right]_0^2=2\left(8-\frac83\right)=\frac{32}3.$$

(Usamos a simetria: a função é par.)

:::result
**Resposta:** $A=\dfrac{32}3$ u.a.
:::

### e) $0\le y\le|\sin x|$, $0\le x\le2\pi$

*Esboço:* o módulo "vira para cima" a arcada negativa do seno: duas arcadas iguais, uma em $[0,\pi]$ e outra em $[\pi,2\pi]$.

$$A=\int_0^{2\pi}|\sin x|\,dx=\int_0^\pi\sin x\,dx+\int_\pi^{2\pi}(-\sin x)\,dx=\big[-\cos x\big]_0^\pi+\big[\cos x\big]_\pi^{2\pi}=2+2=4.$$

Atenção: $\int_0^{2\pi}\sin x\,dx=0$ **não** é a área.

:::result
**Resposta:** $A=4$ u.a.
:::

### f) entre $Ox$ e $y=x^2-x$, $0\le x\le2$

*Esboço e sinal:* $x^2-x=x(x-1)$ tem raízes $0$ e $1$. É **negativa** em $(0,1)$ e **positiva** em $(1,2)$. Logo é preciso dividir em $x=1$.

$$A=\int_0^1\big(0-(x^2-x)\big)dx+\int_1^2(x^2-x)\,dx.$$

Primeira parte: $\left[\frac{x^2}2-\frac{x^3}3\right]_0^1=\frac12-\frac13=\frac16$.

Segunda parte: $\left[\frac{x^3}3-\frac{x^2}2\right]_1^2=\left(\frac83-2\right)-\left(\frac13-\frac12\right)=\frac23+\frac16=\frac56$.

$$A=\frac16+\frac56=1.$$

(Sem dividir, daria $\int_0^2(x^2-x)dx=\frac23$, errado como área.)

:::result
**Resposta:** $A=1$ u.a.
:::

### g) $y=0$ e $y=3-2x-x^2$, $-1\le x\le2$

*Raízes:* $3-2x-x^2=-(x+3)(x-1)$, raízes $x=-3$ e $x=1$. Em $[-1,2]$ só interessa $x=1$: a função é positiva em $[-1,1)$ e negativa em $(1,2]$.

$$A=\int_{-1}^1(3-2x-x^2)\,dx-\int_1^2(3-2x-x^2)\,dx.$$

Primitiva $F(x)=3x-x^2-\frac{x^3}3$.

$F(1)=3-1-\frac13=\frac53$; $F(-1)=-3-1+\frac13=-\frac{11}3$; $F(2)=6-4-\frac83=-\frac23$.

Primeira: $F(1)-F(-1)=\frac53+\frac{11}3=\frac{16}3$. Segunda: $F(2)-F(1)=-\frac23-\frac53=-\frac73$.

$$A=\frac{16}3-\left(-\frac73\right)=\frac{23}3.$$

:::result
**Resposta:** $A=\dfrac{23}3$ u.a.
:::

### h) $x=-1$, $x=2$, $y=0$ e $y=x^2+2x+5$

*Sinal:* $x^2+2x+5=(x+1)^2+4>0$, sempre acima do eixo; não há divisão.

$$A=\int_{-1}^2(x^2+2x+5)\,dx=\left[\frac{x^3}3+x^2+5x\right]_{-1}^2=\left(\frac83+4+10\right)-\left(-\frac13+1-5\right)=\frac{50}{3}+\frac{13}{3}=21.$$

:::result
**Resposta:** $A=21$ u.a.
:::

### i) $x=0$, $x=\pi$, $y=0$ e $y=\cos x$

*Sinal:* $\cos x\ge0$ em $[0,\frac\pi2]$ e $\le0$ em $[\frac\pi2,\pi]$.

$$A=\int_0^{\pi/2}\cos x\,dx-\int_{\pi/2}^{\pi}\cos x\,dx=\big[\sin x\big]_0^{\pi/2}-\big[\sin x\big]_{\pi/2}^{\pi}=1-(0-1)=2.$$

:::result
**Resposta:** $A=2$ u.a.
:::

### j) $x\ge0$ e $x^3\le y\le x$

*Interseção:* $x^3=x\Rightarrow x(x^2-1)=0\Rightarrow x=0,\pm1$; com $x\ge0$ ficam $0$ e $1$. Em $(0,1)$, $x>x^3$ (teste: $x=\frac12$: $0{,}5>0{,}125$). Cima: $x$; baixo: $x^3$.

$$A=\int_0^1(x-x^3)\,dx=\left[\frac{x^2}2-\frac{x^4}4\right]_0^1=\frac12-\frac14=\frac14.$$

:::result
**Resposta:** $A=\dfrac14$ u.a.
:::

### k) $y=x$, $y=x^3$, com $-1\le x\le1$

*Interseções:* em $x=-1,0,1$. Em $(0,1)$: $x>x^3$. Em $(-1,0)$: $x<x^3$ (teste $x=-\frac12$: $-0{,}5<-0{,}125$), ou seja, **os papéis trocam**.

$$A=\int_{-1}^0(x^3-x)\,dx+\int_0^1(x-x^3)\,dx.$$

A segunda vale $\frac14$ (alínea anterior). A primeira: $\left[\frac{x^4}4-\frac{x^2}2\right]_{-1}^0=0-\left(\frac14-\frac12\right)=\frac14$. (Por simetria, as duas metades são iguais: a região é simétrica em relação à origem.)

$$A=\frac14+\frac14=\frac12.$$

Observação: $\int_{-1}^1(x-x^3)\,dx=0$, pois a função é ímpar — de novo, integral $\ne$ área.

:::result
**Resposta:** $A=\dfrac12$ u.a.
:::

### l) $A=\{0\le x\le1,\ \sqrt x\le y\le3\}$

*Esboço:* faixa vertical entre a raiz (embaixo) e a reta $y=3$ (em cima). Em $[0,1]$, $\sqrt x\le1<3$, logo $3$ está de fato acima.

$$A=\int_0^1(3-\sqrt x)\,dx=\left[3x-\frac23x^{3/2}\right]_0^1=3-\frac23=\frac73.$$

:::result
**Resposta:** $A=\dfrac73$ u.a.
:::

### m) $x=0$, $x=\frac\pi2$, $y=\sin x$ e $y=\cos x$

*Interseção:* $\sin x=\cos x\Rightarrow x=\frac\pi4$ em $[0,\frac\pi2]$. Em $[0,\frac\pi4]$, $\cos x\ge\sin x$; em $[\frac\pi4,\frac\pi2]$, $\sin x\ge\cos x$. Então

$$A=\int_0^{\pi/4}(\cos x-\sin x)\,dx+\int_{\pi/4}^{\pi/2}(\sin x-\cos x)\,dx.$$

Primeira: $\big[\sin x+\cos x\big]_0^{\pi/4}=\sqrt2-1$. Segunda: $\big[-\cos x-\sin x\big]_{\pi/4}^{\pi/2}=(-1)-(-\sqrt2)=\sqrt2-1$.

$$A=2(\sqrt2-1)=2\sqrt2-2\approx0{,}828.$$

:::result
**Resposta:** $A=2\sqrt2-2$ u.a.
:::

### n) $x^2+1\le y\le x+1$

*Interseção:* $x^2+1=x+1\Rightarrow x^2-x=0\Rightarrow x=0$ ou $x=1$. Entre elas, a reta está por cima (teste $x=\frac12$: $1{,}5>1{,}25$).

$$A=\int_0^1\big[(x+1)-(x^2+1)\big]dx=\int_0^1(x-x^2)\,dx=\frac12-\frac13=\frac16.$$

:::result
**Resposta:** $A=\dfrac16$ u.a.
:::

### o) $x^2-1\le y\le x+1$

*Interseção:* $x^2-1=x+1\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0\Rightarrow x=-1,\,2$. Reta por cima (teste $x=0$: $1>-1$).

$$A=\int_{-1}^2(x+2-x^2)\,dx=\left[\frac{x^2}2+2x-\frac{x^3}3\right]_{-1}^2=\left(2+4-\frac83\right)-\left(\frac12-2+\frac13\right)=\frac{10}3+\frac76=\frac92.$$

:::result
**Resposta:** $A=\dfrac92$ u.a.
:::

### p) $x\ge0$ e $-x\le y\le x-x^2$

*Interseção:* $-x=x-x^2\Rightarrow x^2-2x=0\Rightarrow x=0$ ou $x=2$. Entre elas a parábola está acima da reta $y=-x$ (teste $x=1$: $0>-1$).

$$A=\int_0^2\big[(x-x^2)-(-x)\big]dx=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=4-\frac83=\frac43.$$

:::result
**Resposta:** $A=\dfrac43$ u.a.
:::

## Questão 3 — Integração por substituição {#q3}

Em integrais **indefinidas** voltamos a $x$ no final; nas **definidas** podemos trocar os limites ($x=a\mapsto u(a)$, $x=b\mapsto u(b)$) e nunca voltar a $x$.

### a) $\displaystyle\int(3x-2)^3\,dx$

$u=3x-2$, $du=3\,dx\Rightarrow dx=\frac{du}3$.

$$\int u^3\frac{du}3=\frac{u^4}{12}+C=\frac{(3x-2)^4}{12}+C.$$

:::result
**Resposta:** $\dfrac{(3x-2)^4}{12}+C$
:::

### b) $\displaystyle\int\sqrt{3x-2}\,dx$

$u=3x-2$, $dx=\frac{du}3$.

$$\frac13\int u^{1/2}du=\frac13\cdot\frac{u^{3/2}}{3/2}+C=\frac29(3x-2)^{3/2}+C.$$

:::result
**Resposta:** $\dfrac29(3x-2)^{3/2}+C$
:::

### c) $\displaystyle\int\frac{dx}{(3x-2)^2}$

$u=3x-2$, $dx=\frac{du}3$.

$$\frac13\int u^{-2}du=\frac13\cdot(-u^{-1})+C=-\frac1{3(3x-2)}+C.$$

:::result
**Resposta:** $-\dfrac{1}{3(3x-2)}+C$
:::

### d) $\displaystyle\int\frac{dx}{3x-2}$

$u=3x-2$, $dx=\frac{du}3$.

$$\frac13\int\frac{du}u=\frac13\ln|u|+C=\frac13\ln|3x-2|+C.$$

Note que é a única das quatro alíneas iniciais em que aparece logaritmo: o expoente $-1$ é o caso excepcional da regra da potência.

:::result
**Resposta:** $\dfrac13\ln|3x-2|+C$
:::

### e) $\displaystyle\int x\sin(x^2)\,dx$

$u=x^2$, $du=2x\,dx\Rightarrow x\,dx=\frac{du}2$.

$$\frac12\int\sin u\,du=-\frac12\cos u+C=-\frac12\cos(x^2)+C.$$

:::result
**Resposta:** $-\dfrac12\cos(x^2)+C$
:::

### f) $\displaystyle\int_0^1xe^{x^2}\,dx$

$u=x^2$, $x\,dx=\frac{du}2$. Limites: $x=0\Rightarrow u=0$; $x=1\Rightarrow u=1$.

$$\frac12\int_0^1e^u\,du=\frac12\big[e^u\big]_0^1=\frac{e-1}2.$$

:::result
**Resposta:** $\dfrac{e-1}2\approx0{,}859$
:::

### g) $\displaystyle\int_0^1x^2e^{x^3}\,dx$

$u=x^3$, $du=3x^2dx\Rightarrow x^2dx=\frac{du}3$. Limites: $0\to0$, $1\to1$.

$$\frac13\int_0^1e^u\,du=\frac{e-1}3.$$

:::result
**Resposta:** $\dfrac{e-1}3\approx0{,}573$
:::

### h) $\displaystyle\int_0^1x^3\cos(x^4)\,dx$

$u=x^4$, $du=4x^3dx\Rightarrow x^3dx=\frac{du}4$. Limites: $0\to0$, $1\to1$.

$$\frac14\int_0^1\cos u\,du=\frac14\sin1\approx0{,}210.$$

:::result
**Resposta:** $\dfrac{\sin1}4$
:::

### i) $\displaystyle\int_0^{\pi/2}\cos^3x\sin x\,dx$

Aqui a derivada de $\cos x$ aparece (a menos do sinal): $u=\cos x$, $du=-\sin x\,dx\Rightarrow\sin x\,dx=-du$. Limites: $x=0\Rightarrow u=1$; $x=\frac\pi2\Rightarrow u=0$.

$$\int_1^0u^3(-du)=\int_0^1u^3\,du=\left[\frac{u^4}4\right]_0^1=\frac14.$$

:::result
**Resposta:** $\dfrac14$
:::

### j) $\displaystyle\int\sin5x\cos x\,dx$

Esta integral **não é de substituição simples** ($\cos x$ não é a derivada de nada em $\sin5x$). Use a identidade produto-soma $\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)]$:

$$\sin5x\cos x=\frac12\big[\sin6x+\sin4x\big].$$

Agora cada parcela pede uma substituição linear ($u=6x$ e $u=4x$):

$$\int\sin5x\cos x\,dx=\frac12\left(-\frac{\cos6x}6-\frac{\cos4x}4\right)+C=-\frac{\cos6x}{12}-\frac{\cos4x}{8}+C.$$

Conferência por derivação: $\left(-\frac{\cos6x}{12}\right)'=\frac{\sin6x}{2}$ e $\left(-\frac{\cos4x}{8}\right)'=\frac{\sin4x}2$, somando $\frac12(\sin6x+\sin4x)$ ✓.

:::result
**Resposta:** $-\dfrac{\cos6x}{12}-\dfrac{\cos4x}{8}+C$
:::

### k) $\displaystyle\int\frac2{x+3}\,dx$

$u=x+3$, $du=dx$.

$$2\int\frac{du}u=2\ln|x+3|+C.$$

:::result
**Resposta:** $2\ln|x+3|+C$
:::

### l) $\displaystyle\int\frac5{4x+3}\,dx$

$u=4x+3$, $dx=\frac{du}4$.

$$\frac54\int\frac{du}{u}=\frac54\ln|4x+3|+C.$$

:::result
**Resposta:** $\dfrac54\ln|4x+3|+C$
:::

### m) $\displaystyle\int\frac{x}{1+4x^2}\,dx$

$u=1+4x^2$, $du=8x\,dx\Rightarrow x\,dx=\frac{du}8$.

$$\frac18\int\frac{du}u=\frac18\ln(1+4x^2)+C$$

(sem módulo, pois $1+4x^2>0$).

:::result
**Resposta:** $\dfrac18\ln(1+4x^2)+C$
:::

### n) $\displaystyle\int\frac{3x}{5+6x^2}\,dx$

$u=5+6x^2$, $du=12x\,dx\Rightarrow x\,dx=\frac{du}{12}$.

$$3\cdot\frac1{12}\int\frac{du}u=\frac14\ln(5+6x^2)+C.$$

:::result
**Resposta:** $\dfrac14\ln(5+6x^2)+C$
:::

### o) $\displaystyle\int\frac{x}{(1+4x^2)^2}\,dx$

$u=1+4x^2$, $x\,dx=\frac{du}8$.

$$\frac18\int u^{-2}du=\frac18\cdot(-u^{-1})+C=-\frac1{8(1+4x^2)}+C.$$

:::result
**Resposta:** $-\dfrac{1}{8(1+4x^2)}+C$
:::

### p) $\displaystyle\int\frac{x}{\sqrt{1+3x^2}}\,dx$

$u=1+3x^2$, $du=6x\,dx\Rightarrow x\,dx=\frac{du}6$.

$$\frac16\int u^{-1/2}du=\frac16\cdot2u^{1/2}+C=\frac13\sqrt{1+3x^2}+C.$$

:::result
**Resposta:** $\dfrac13\sqrt{1+3x^2}+C$
:::

### q) $\displaystyle\int\frac{e^x}{\sqrt{1+e^x}}\,dx$

$u=1+e^x$, $du=e^x\,dx$ — o numerador é exatamente $du$.

$$\int u^{-1/2}du=2\sqrt u+C=2\sqrt{1+e^x}+C.$$

:::result
**Resposta:** $2\sqrt{1+e^x}+C$
:::

### r) $\displaystyle\int_0^\pi\frac{\sin x}{\cos^2x}\,dx$

:::warn[Armadilha]
O denominador $\cos^2x$ se anula em $x=\frac\pi2\in[0,\pi]$. A integral **não é própria**: é uma integral **imprópria** e precisa ser tratada como tal.
:::

Antiderivada (com $u=\cos x$, $du=-\sin x\,dx$): $\displaystyle\int\frac{\sin x}{\cos^2x}dx=-\int\frac{du}{u^2}=\frac1u=\frac1{\cos x}=\sec x$.

Se aplicássemos Newton–Leibniz cegamente: $\sec\pi-\sec0=-1-1=-2$ — **resultado errado**: o integrando é $\ge0$ em $[0,\pi]$ (pois $\sin x\ge0$), e uma integral de função não negativa nunca seria negativa. O problema é que $\sec x$ não é contínua em $\frac\pi2$.

Correto: separar no ponto de descontinuidade.

$$\int_0^{\pi/2}\frac{\sin x}{\cos^2x}dx=\lim_{t\to\frac\pi2^-}\big[\sec x\big]_0^t=\lim_{t\to\frac\pi2^-}(\sec t-1)=+\infty.$$

Basta uma das partes divergir para a integral toda divergir.

:::result{kind="diverge"}
**Resposta:** a integral **diverge** (vale $+\infty$); o valor $-2$ obtido ao ignorar a descontinuidade em $\frac\pi2$ está errado.
:::

### s) $\displaystyle\int_1^23xe^{x^2}\,dx$

$u=x^2$, $x\,dx=\frac{du}2$. Limites: $1\to1$, $2\to4$.

$$3\cdot\frac12\int_1^4e^u\,du=\frac32\big[e^u\big]_1^4=\frac32(e^4-e)\approx76{,}85.$$

:::result
**Resposta:** $\dfrac32\left(e^4-e\right)$
:::

### t) $\displaystyle\int_{-\pi/2}^{\pi}5x^3\cos(x^4)\,dx$

$u=x^4$, $du=4x^3dx\Rightarrow x^3dx=\frac{du}4$. Limites: $x=-\frac\pi2\Rightarrow u=\frac{\pi^4}{16}$; $x=\pi\Rightarrow u=\pi^4$.

$$\frac54\int_{\pi^4/16}^{\pi^4}\cos u\,du=\frac54\left[\sin u\right]_{\pi^4/16}^{\pi^4}=\frac54\left(\sin\pi^4-\sin\frac{\pi^4}{16}\right).$$

Numericamente ($\pi^4\approx97{,}409$ rad; $\pi^4/16\approx6{,}088$ rad): $\approx0{,}218$.

Nota: como $x\mapsto x^4$ não é injetora em $[-\frac\pi2,\pi]$ (é decrescente em $x<0$ e crescente em $x>0$), a troca de limites funciona mesmo assim, porque a substituição é feita sobre o integrando completo $x^3\,dx$, cuja primitiva $\frac14\sin x^4$ é contínua em todo o intervalo.

:::result
**Resposta:** $\dfrac54\left(\sin\pi^4-\sin\dfrac{\pi^4}{16}\right)\approx0{,}218$
:::
:::note[Roteiro de decisão para volumes]
1. **Esboce** a região (ou a base do sólido) e marque o eixo de giro.
2. **Seções transversais (Q4):** se conhecemos a *forma* da seção (quadrado, disco, triângulo equilátero) em função de $x$, calcule a área $A(x)$ e faça $V=\int_a^b A(x)\,dx$.
3. **Giro em torno de um eixo:** a fatia perpendicular ao eixo é um **disco** ($A=\pi R^2$) se a região encosta no eixo, ou uma **arruela/anel** ($A=\pi(R^2-r^2)$) se há um vazio entre a região e o eixo.
4. **Raios:** $R$ e $r$ são as distâncias do eixo até a fronteira *mais distante* e *mais próxima* da região. Se o eixo é $y=k$: $R=|f-k|$; se é $x=k$: $R=|g-k|$.
5. **Variável de integração:** fatias perpendiculares ao eixo de giro. Eixo horizontal $\Rightarrow dx$; eixo vertical $\Rightarrow dy$ (escreva as curvas como $x=g(y)$).
:::

## Questão 4 — Volumes por seções transversais {#q4}

Em todos os itens, $V=\int_a^b A(x)\,dx$, onde $A(x)$ é a área da seção perpendicular ao eixo $x$.

### a) Quadrados com diagonais de $y=-\sqrt{x}$ a $y=\sqrt{x}$, $0\le x\le 4$

**Diagonal.** Em cada $x$, a diagonal vai de $-\sqrt{x}$ até $\sqrt{x}$, logo $d=\sqrt{x}-(-\sqrt{x})=2\sqrt{x}$.

**Área do quadrado pela diagonal.** Um quadrado de lado $s$ tem $d=s\sqrt2$, então $A=s^2=\dfrac{d^2}{2}$. Assim
$$A(x)=\frac{(2\sqrt{x})^2}{2}=\frac{4x}{2}=2x.$$

**Integral.**
$$V=\int_0^4 2x\,dx=\Big[x^2\Big]_0^4=16-0=16.$$

:::result
**Resposta:** $V=16\ \text{u.v.}$
:::

### b) Discos com diâmetro de $y=x^2$ a $y=2-x^2$, $-1\le x\le 1$

**Leitura da figura:** o sólido fica entre as duas parábolas; cada seção perpendicular a $x$ é um disco cujo diâmetro é o segmento vertical entre elas.

**Diâmetro.** $D=(2-x^2)-x^2=2-2x^2$, portanto o raio é $r=1-x^2$ (positivo em $[-1,1]$, as parábolas se cruzam em $x=\pm1$).

**Área.** $A(x)=\pi r^2=\pi(1-x^2)^2=\pi(1-2x^2+x^4)$.

**Integral** (integrando par: dobramos o intervalo $[0,1]$):
$$V=\pi\int_{-1}^{1}(1-2x^2+x^4)\,dx=2\pi\Big[x-\frac{2x^3}{3}+\frac{x^5}{5}\Big]_0^1=2\pi\Big(1-\frac23+\frac15\Big)=2\pi\cdot\frac{8}{15}.$$

:::result
**Resposta:** $V=\dfrac{16\pi}{15}\ \text{u.v.}$
:::

### c) Quadrados com bases de $y=-\sqrt{1-x^2}$ a $y=\sqrt{1-x^2}$, $-1\le x\le 1$

**Lado.** Aqui o segmento é o **lado** (base) do quadrado: $s=2\sqrt{1-x^2}$.

**Área.** $A(x)=s^2=4(1-x^2)$.

**Integral.**
$$V=\int_{-1}^{1}4(1-x^2)\,dx=8\Big[x-\frac{x^3}{3}\Big]_0^1=8\cdot\frac23.$$

:::result
**Resposta:** $V=\dfrac{16}{3}\ \text{u.v.}$
:::

### d) Quadrados com diagonais de $y=-\sqrt{1-x^2}$ a $y=\sqrt{1-x^2}$, $-1\le x\le 1$

**Diferença para o item c:** o segmento agora é a **diagonal**, $d=2\sqrt{1-x^2}$, e $A=d^2/2$.

$$A(x)=\frac{4(1-x^2)}{2}=2(1-x^2).$$

$$V=\int_{-1}^{1}2(1-x^2)\,dx=4\Big[x-\frac{x^3}{3}\Big]_0^1=4\cdot\frac23.$$

:::result
**Resposta:** $V=\dfrac{8}{3}\ \text{u.v.}$ (metade do item c, como esperado: diagonal $d$ dá área $d^2/2$, base $s$ dá $s^2$.)
:::

### e) Triângulos equiláteros sobre a base $y=2\sqrt{\operatorname{sen}x}$, $0\le x\le\pi$

**Leitura da figura:** a base de cada triângulo equilátero é o segmento vertical do eixo $x$ até a curva, e o triângulo é perpendicular ao plano $xy$.

**Lado.** $s=2\sqrt{\operatorname{sen}x}$, então $s^2=4\operatorname{sen}x$.

**Área do triângulo equilátero.** $A=\dfrac{\sqrt3}{4}s^2$, logo $A(x)=\dfrac{\sqrt3}{4}\cdot4\operatorname{sen}x=\sqrt3\operatorname{sen}x$.

**Integral.**
$$V=\sqrt3\int_0^\pi \operatorname{sen}x\,dx=\sqrt3\big[-\cos x\big]_0^\pi=\sqrt3\,(1+1).$$

:::result
**Resposta:** $V=2\sqrt3\ \text{u.v.}$
:::

## Questão 5 — Volumes a partir das figuras {#q5}

Leitura das quatro figuras (da esquerda para a direita) e método de cada uma.

### 1ª figura — reta $x+2y=2$, giro em torno do eixo $x$

**Leitura:** região triangular sob a reta, entre $x=0$ e $x=2$ (a reta corta os eixos em $(2,0)$ e $(0,1)$).

**Raio.** $y=1-\dfrac x2$. A região encosta no eixo $x$: **disco** de raio $y$.

$$V=\pi\int_0^2\Big(1-\frac x2\Big)^2dx.$$
Substituição $u=1-\frac x2$, $du=-\frac12dx$: $\displaystyle V=\pi\Big[-\frac23\Big(1-\frac x2\Big)^3\Big]_0^2=\pi\Big(0+\frac23\Big)$.

:::result
**Resposta:** $V=\dfrac{2\pi}{3}\ \text{u.v.}$ (cone de raio 1 e altura 2: $\frac13\pi\cdot1^2\cdot2$ ✓.)
:::

### 2ª figura — $x=\operatorname{tg}\!\big(\tfrac{\pi}{4}y\big)$, giro em torno do eixo $y$

**Leitura:** região entre o eixo $y$ e a curva, para $0\le y\le1$ (a curva vai de $(0,0)$ a $(1,1)$).

**Método.** Eixo vertical, região encostada nele: discos de raio $x=\operatorname{tg}(\pi y/4)$, integrando em $dy$.

$$V=\pi\int_0^1\operatorname{tg}^2\!\Big(\frac{\pi y}{4}\Big)dy=\pi\int_0^1\Big[\sec^2\!\Big(\frac{\pi y}{4}\Big)-1\Big]dy.$$
Como $\int\sec^2(ay)\,dy=\frac1a\operatorname{tg}(ay)$ com $a=\pi/4$:
$$V=\pi\Big[\frac4\pi\operatorname{tg}\frac{\pi y}{4}-y\Big]_0^1=\pi\Big(\frac4\pi\cdot1-1\Big)=4-\pi.$$

:::result
**Resposta:** $V=(4-\pi)\ \text{u.v.}\approx0{,}858$
:::

### 3ª figura — $x=\dfrac{3y}{2}$, giro em torno do eixo $y$

**Leitura:** região triangular entre o eixo $y$ e a reta, $0\le y\le2$ (a reta chega em $x=3$ quando $y=2$).

**Discos** de raio $x=\frac{3y}{2}$:
$$V=\pi\int_0^2\frac{9y^2}{4}\,dy=\frac{9\pi}{4}\cdot\frac{y^3}{3}\Big|_0^2=\frac{9\pi}{4}\cdot\frac83.$$

:::result
**Resposta:** $V=6\pi\ \text{u.v.}$ (cone de raio 3 e altura 2: $\frac13\pi\cdot9\cdot2$ ✓.)
:::

### 4ª figura — $y=\operatorname{sen}x\cos x$, $0\le x\le\frac\pi2$, giro em torno do eixo $x$

**Leitura:** arco sob a curva (máximo $\tfrac12$ em $x=\pi/4$), girando em torno do eixo $x$: discos.

**Simplificação.** $\operatorname{sen}x\cos x=\tfrac12\operatorname{sen}2x$, então $y^2=\tfrac14\operatorname{sen}^22x=\tfrac18(1-\cos4x)$.

$$V=\pi\int_0^{\pi/2}\frac{1-\cos4x}{8}\,dx=\frac\pi8\Big[x-\frac{\operatorname{sen}4x}{4}\Big]_0^{\pi/2}=\frac\pi8\cdot\frac\pi2.$$

:::result
**Resposta:** $V=\dfrac{\pi^2}{16}\ \text{u.v.}$
:::

## Questão 6 — Giro em torno do eixo $x$ {#q6}

Em todos os itens a região encosta no eixo $x$, então usamos discos: $V=\pi\int_a^b[f(x)]^2dx$.

### a) $y=x^2,\ y=0,\ x=2$

Limites: $0\le x\le2$ (de $y=0$ até a parábola; $x=0$ é onde a região começa).
$$V=\pi\int_0^2x^4dx=\pi\frac{x^5}{5}\Big|_0^2=\frac{32\pi}{5}.$$

:::result
**Resposta:** $V=\dfrac{32\pi}{5}\ \text{u.v.}$
:::

### b) $y=x^3,\ y=0,\ x=2$

$$V=\pi\int_0^2x^6dx=\pi\frac{x^7}{7}\Big|_0^2=\frac{128\pi}{7}.$$

:::result
**Resposta:** $V=\dfrac{128\pi}{7}\ \text{u.v.}$
:::

### c) $y=\sqrt{9-x^2},\ y=0$

**Região:** semicírculo de raio 3, $-3\le x\le3$. O giro gera uma esfera.

$$V=\pi\int_{-3}^{3}(9-x^2)\,dx=2\pi\Big[9x-\frac{x^3}{3}\Big]_0^3=2\pi(27-9)=36\pi.$$

:::result
**Resposta:** $V=36\pi\ \text{u.v.}$ (confere com $\frac43\pi\cdot3^3$.)
:::

### d) $y=x-x^2,\ y=0$

**Limites.** $x-x^2=0\Rightarrow x=0$ ou $x=1$; no intervalo, $y\ge0$.

$$V=\pi\int_0^1(x-x^2)^2dx=\pi\int_0^1(x^2-2x^3+x^4)\,dx=\pi\Big[\frac{x^3}{3}-\frac{x^4}{2}+\frac{x^5}{5}\Big]_0^1=\pi\Big(\frac13-\frac12+\frac15\Big)=\frac{\pi}{30}.$$

:::result
**Resposta:** $V=\dfrac{\pi}{30}\ \text{u.v.}$
:::

### e) $y=e^x,\ y=0,\ x=0,\ x=1$

$$V=\pi\int_0^1e^{2x}dx=\pi\frac{e^{2x}}{2}\Big|_0^1=\frac{\pi}{2}(e^2-1).$$

:::result
**Resposta:** $V=\dfrac{\pi(e^2-1)}{2}\ \text{u.v.}\approx10{,}04$
:::

### f) $y=\dfrac1{2\sqrt x}$, eixo $x$, $\tfrac14\le x\le4$

$$[f(x)]^2=\frac{1}{4x}\quad\Rightarrow\quad V=\frac\pi4\int_{1/4}^{4}\frac{dx}{x}=\frac\pi4\big[\ln x\big]_{1/4}^{4}=\frac\pi4\big(\ln4-\ln\tfrac14\big)=\frac\pi4\ln16=\frac\pi4\cdot4\ln2.$$

:::result
**Resposta:** $V=\pi\ln2\ \text{u.v.}\approx2{,}178$
:::

## Questão 7 — Giro em torno de uma reta horizontal {#q7}

Quando o eixo é $y=k$, o raio é a distância vertical até a reta: $R=|k-f(x)|$.

### a) Eixo $y=\sqrt2$; região abaixo de $y=\sqrt2$, acima de $y=\sec x\operatorname{tg}x$, à direita do eixo $y$

**Limites.** A curva $\sec x\operatorname{tg}x$ vale $0$ em $x=0$ e cresce. Ela encontra $y=\sqrt2$ quando $\sec x=\sqrt2$ e $\operatorname{tg}x=1$, isto é, $x=\pi/4$. Região: $0\le x\le\pi/4$.

**Raio.** A região encosta no eixo de giro ($y=\sqrt2$ é a borda superior): disco de raio $R=\sqrt2-\sec x\operatorname{tg}x\ge0$.

$$V=\pi\int_0^{\pi/4}\big(\sqrt2-\sec x\operatorname{tg}x\big)^2dx=\pi\int_0^{\pi/4}\Big(2-2\sqrt2\sec x\operatorname{tg}x+\sec^2x\operatorname{tg}^2x\Big)dx.$$

**Cada parcela:**
- $\int_0^{\pi/4}2\,dx=\dfrac\pi2$;
- $\int\sec x\operatorname{tg}x\,dx=\sec x$, então $-2\sqrt2\,[\sec x]_0^{\pi/4}=-2\sqrt2(\sqrt2-1)=-4+2\sqrt2$;
- $\int\sec^2x\operatorname{tg}^2x\,dx$: com $u=\operatorname{tg}x$ fica $\frac{u^3}{3}$, valendo $\frac13$ de $0$ a $\pi/4$.

$$V=\pi\Big(\frac\pi2-4+2\sqrt2+\frac13\Big)=\pi\Big(\frac\pi2+2\sqrt2-\frac{11}{3}\Big).$$

:::result
**Resposta:** $V=\pi\Big(\dfrac\pi2+2\sqrt2-\dfrac{11}{3}\Big)\ \text{u.v.}\approx2{,}301$
:::

### b) Eixo $y=2$; região abaixo de $y=2$, acima de $y=2\operatorname{sen}x$, $0\le x\le\pi/2$

**Raio.** $R=2-2\operatorname{sen}x=2(1-\operatorname{sen}x)\ge0$. Disco (a região encosta no eixo de giro).

$$V=\pi\int_0^{\pi/2}4(1-\operatorname{sen}x)^2dx=4\pi\int_0^{\pi/2}\big(1-2\operatorname{sen}x+\operatorname{sen}^2x\big)dx.$$
Com $\operatorname{sen}^2x=\frac{1-\cos2x}{2}$:
$$\int_0^{\pi/2}\Big(\frac32-2\operatorname{sen}x-\frac{\cos2x}{2}\Big)dx=\Big[\frac{3x}{2}+2\cos x-\frac{\operatorname{sen}2x}{4}\Big]_0^{\pi/2}=\frac{3\pi}{4}+0-0-(0+2-0)=\frac{3\pi}{4}-2.$$
$$V=4\pi\Big(\frac{3\pi}{4}-2\Big)=3\pi^2-8\pi.$$

:::result
**Resposta:** $V=(3\pi^2-8\pi)\ \text{u.v.}\approx4{,}476$
:::

## Questão 8 — Giro em torno do eixo $y$ (curvas $x=g(y)$) {#q8}

As curvas já estão em função de $y$; a região encosta no eixo $y$ ($x=0$), logo discos horizontais: $V=\pi\int[g(y)]^2dy$.

### a) $x=\sqrt5\,y^2,\ x=0,\ y=-1,\ y=1$

$$V=\pi\int_{-1}^{1}5y^4dy=10\pi\int_0^1y^4dy=10\pi\cdot\frac15=2\pi.$$

:::result
**Resposta:** $V=2\pi\ \text{u.v.}$
:::

### b) $x=y^{3/2},\ x=0,\ y=2$

Limites: $0\le y\le2$ (em $y=0$, $x=0$).
$$V=\pi\int_0^2y^3dy=\pi\frac{y^4}{4}\Big|_0^2=4\pi.$$

:::result
**Resposta:** $V=4\pi\ \text{u.v.}$
:::

### c) $x=\sqrt{2\operatorname{sen}2y},\ 0\le y\le\pi/2,\ x=0$

$$V=\pi\int_0^{\pi/2}2\operatorname{sen}2y\,dy=2\pi\Big[-\frac{\cos2y}{2}\Big]_0^{\pi/2}=\pi\big[-\cos\pi+\cos0\big]=\pi(1+1).$$

:::result
**Resposta:** $V=2\pi\ \text{u.v.}$
:::

### d) $x=\dfrac{2}{\sqrt{y+1}},\ x=0,\ y=0,\ y=3$

$$[g(y)]^2=\frac{4}{y+1}\quad\Rightarrow\quad V=4\pi\int_0^3\frac{dy}{y+1}=4\pi\big[\ln(y+1)\big]_0^3=4\pi\ln4=8\pi\ln2.$$

:::result
**Resposta:** $V=8\pi\ln2\ \text{u.v.}\approx17{,}42$
:::

### e) $x=\dfrac{\sqrt2}{y^2+1},\ x=0,\ y=0,\ y=1$

$$V=\pi\int_0^1\frac{2}{(y^2+1)^2}dy.$$
**Integral de $(1+y^2)^{-2}$.** Com $y=\operatorname{tg}\theta$, $dy=\sec^2\theta\,d\theta$, $1+y^2=\sec^2\theta$:
$$\int\frac{dy}{(1+y^2)^2}=\int\cos^2\theta\,d\theta=\frac\theta2+\frac{\operatorname{sen}2\theta}{4}+C=\frac12\operatorname{arctg}y+\frac{y}{2(1+y^2)}+C.$$
(usando $\operatorname{sen}2\theta=2\operatorname{sen}\theta\cos\theta=\frac{2y}{1+y^2}$.)

$$V=2\pi\Big[\frac12\operatorname{arctg}y+\frac{y}{2(1+y^2)}\Big]_0^1=2\pi\Big(\frac\pi8+\frac14\Big)=\frac{\pi^2}{4}+\frac\pi2.$$

:::result
**Resposta:** $V=\dfrac{\pi(\pi+2)}{4}\ \text{u.v.}\approx4{,}038$
:::

## Questão 9 — Método do anel a partir das figuras {#q9}

### 1ª figura — região entre $y=\sqrt{\cos x}$ e $y=1$, $-\frac\pi2\le x\le\frac\pi2$, giro em torno do eixo $x$

**Leitura:** a região sombreada fica **acima** da curva $\sqrt{\cos x}$ e **abaixo** da reta $y=1$, e vai de $x=-\pi/2$ a $x=\pi/2$ (onde $\sqrt{\cos x}=0$ nas pontas).

**Anel.** Em cada $x$ há um vazio entre o eixo $x$ e a curva. Raio externo $R=1$; raio interno $r=\sqrt{\cos x}$.
$$A(x)=\pi\big(1-\cos x\big).$$
$$V=\pi\int_{-\pi/2}^{\pi/2}(1-\cos x)\,dx=2\pi\Big[x-\operatorname{sen}x\Big]_0^{\pi/2}=2\pi\Big(\frac\pi2-1\Big).$$

:::result
**Resposta:** $V=\pi(\pi-2)\ \text{u.v.}\approx3{,}586$
:::

### 2ª figura — região entre $x=\operatorname{tg}y$ e $x=1$, $0\le y\le\frac\pi4$, giro em torno do eixo $y$

**Leitura:** a região sombreada fica à **direita** da curva $x=\operatorname{tg}y$ e à esquerda da reta $x=1$, entre $y=0$ e $y=\pi/4$ (onde $\operatorname{tg}y=1$).

**Anel.** Eixo vertical: integramos em $dy$. Raio externo $R=1$, interno $r=\operatorname{tg}y$.
$$V=\pi\int_0^{\pi/4}\big(1-\operatorname{tg}^2y\big)dy=\pi\int_0^{\pi/4}\big(2-\sec^2y\big)dy=\pi\Big[2y-\operatorname{tg}y\Big]_0^{\pi/4}=\pi\Big(\frac\pi2-1\Big).$$

:::result
**Resposta:** $V=\dfrac{\pi(\pi-2)}{2}\ \text{u.v.}\approx1{,}793$
:::

## Questão 10 — Anel, giro em torno do eixo $x$ {#q10}

Fórmula: $V=\pi\int_a^b\big[R(x)^2-r(x)^2\big]dx$, com $R$ = curva mais afastada do eixo e $r$ = mais próxima.

### a) $y=x,\ y=1,\ x=0$

**Região:** triângulo entre $y=x$ (embaixo) e $y=1$ (em cima), $0\le x\le1$. $R=1,\ r=x$.
$$V=\pi\int_0^1(1-x^2)dx=\pi\Big[x-\frac{x^3}{3}\Big]_0^1=\frac{2\pi}{3}.$$

:::result
**Resposta:** $V=\dfrac{2\pi}{3}\ \text{u.v.}$
:::

### b) $y=2\sqrt x,\ y=2,\ x=0$

**Interseção:** $2\sqrt x=2\Rightarrow x=1$. Para $0\le x\le1$, $2\sqrt x\le2$: $R=2$, $r=2\sqrt x$.
$$V=\pi\int_0^1\big(4-4x\big)dx=\pi\big[4x-2x^2\big]_0^1=2\pi.$$

:::result
**Resposta:** $V=2\pi\ \text{u.v.}$
:::

### c) $y=x^2+1,\ y=x+3$

**Interseção:** $x^2+1=x+3\Rightarrow x^2-x-2=0\Rightarrow x=-1$ ou $x=2$.
Em $[-1,2]$ a reta está acima da parábola (teste $x=0$: $3>1$) e ambas são positivas: $R=x+3$, $r=x^2+1$.
$$R^2-r^2=(x^2+6x+9)-(x^4+2x^2+1)=-x^4-x^2+6x+8.$$
$$V=\pi\Big[-\frac{x^5}{5}-\frac{x^3}{3}+3x^2+8x\Big]_{-1}^{2}.$$
Em $x=2$: $-\frac{32}{5}-\frac83+12+16=\frac{284}{15}$. Em $x=-1$: $\frac15+\frac13+3-8=-\frac{67}{15}$. Diferença: $\frac{351}{15}=\frac{117}{5}$.

:::result
**Resposta:** $V=\dfrac{117\pi}{5}\ \text{u.v.}\approx73{,}51$
:::

### d) $y=4-x^2,\ y=2-x$

**Interseção:** $4-x^2=2-x\Rightarrow x^2-x-2=0\Rightarrow x=-1$ ou $x=2$. Em $[-1,2]$, a parábola está acima da reta e ambas são $\ge0$: $R=4-x^2$, $r=2-x$.
$$R^2-r^2=(16-8x^2+x^4)-(4-4x+x^2)=x^4-9x^2+4x+12.$$
$$V=\pi\Big[\frac{x^5}{5}-3x^3+2x^2+12x\Big]_{-1}^{2}.$$
Em $x=2$: $\frac{32}{5}-24+8+24=\frac{72}{5}$. Em $x=-1$: $-\frac15+3+2-12=-\frac{36}{5}$. Diferença: $\frac{108}{5}$.

:::result
**Resposta:** $V=\dfrac{108\pi}{5}\ \text{u.v.}\approx67{,}86$
:::

## Questão 11 — Anel, giro em torno do eixo $y$ {#q11}

Aqui as fatias são horizontais, então escrevemos as fronteiras como $x=g(y)$ e integramos em $dy$.

### a) Triângulo de vértices $(1,0),\ (2,1),\ (1,1)$

**Lados:** de $(1,0)$ a $(2,1)$: $y=x-1\Leftrightarrow x=y+1$; de $(1,0)$ a $(1,1)$: $x=1$; de $(1,1)$ a $(2,1)$: $y=1$.
Para $0\le y\le1$ a região vai de $x=1$ (interno) a $x=y+1$ (externo): $R=y+1$, $r=1$.
$$V=\pi\int_0^1\big[(y+1)^2-1\big]dy=\pi\Big[\frac{(y+1)^3}{3}-y\Big]_0^1=\pi\Big(\frac83-1-\frac13\Big)=\frac{4\pi}{3}.$$

:::result
**Resposta:** $V=\dfrac{4\pi}{3}\ \text{u.v.}$
:::

### b) Triângulo de vértices $(0,1),\ (1,0),\ (1,1)$

**Lados:** $(0,1)$–$(1,0)$: $x+y=1\Leftrightarrow x=1-y$; $x=1$; $y=1$.
Para $0\le y\le1$: de $x=1-y$ (interno) até $x=1$ (externo): $R=1$, $r=1-y$.
$$V=\pi\int_0^1\big[1-(1-y)^2\big]dy=\pi\int_0^1(2y-y^2)dy=\pi\Big[y^2-\frac{y^3}{3}\Big]_0^1=\frac{2\pi}{3}.$$

:::result
**Resposta:** $V=\dfrac{2\pi}{3}\ \text{u.v.}$
:::

### c) Primeiro quadrante, limitada acima por $y=x^2$, abaixo pelo eixo $x$ e à direita por $x=2$

**Região:** $0\le x\le2$, $0\le y\le x^2$. Em $x=2$, $y=4$.
Fatia horizontal em $y\in[0,4]$: $x$ vai de $\sqrt y$ (na parábola, interno) até $2$ (externo): $R=2$, $r=\sqrt y$.
$$V=\pi\int_0^4\big(4-y\big)dy=\pi\Big[4y-\frac{y^2}{2}\Big]_0^4=\pi(16-8).$$

:::result
**Resposta:** $V=8\pi\ \text{u.v.}$
:::

### d) Primeiro quadrante; esquerda: círculo $x^2+y^2=3$; direita: $x=\sqrt3$; acima: $y=\sqrt3$

**Região:** para $0\le y\le\sqrt3$, $x$ vai do círculo, $x=\sqrt{3-y^2}$, até $x=\sqrt3$ (o círculo toca $x=\sqrt3$ em $y=0$ e $y=\sqrt3$ em $x=0$). $R=\sqrt3$, $r=\sqrt{3-y^2}$.
$$R^2-r^2=3-(3-y^2)=y^2\quad\Rightarrow\quad V=\pi\int_0^{\sqrt3}y^2dy=\pi\frac{(\sqrt3)^3}{3}=\pi\frac{3\sqrt3}{3}.$$

:::result
**Resposta:** $V=\sqrt3\,\pi\ \text{u.v.}\approx5{,}441$
:::

## Questão 12 — Giro em torno de retas verticais {#q12}

Quando o eixo é $x=k$, o raio é a distância horizontal: $|x-k|$. Resolvemos por anéis em $dy$ e conferimos pelo método das cascas.

### a) Região sob $y=x^2$, $0\le x\le1$ (eixo $x$ abaixo, $x=1$ à direita); eixo $x=-1$

**Em $y$:** para $0\le y\le1$, $x$ vai de $\sqrt y$ até $1$. Distâncias ao eixo $x=-1$: externa $R=1-(-1)=2$; interna $r=\sqrt y+1$.
$$V=\pi\int_0^1\Big[4-(\sqrt y+1)^2\Big]dy=\pi\int_0^1\big(3-y-2\sqrt y\big)dy=\pi\Big[3y-\frac{y^2}{2}-\frac{4y^{3/2}}{3}\Big]_0^1=\pi\Big(3-\frac12-\frac43\Big)=\frac{7\pi}{6}.$$

**Conferência por cascas:** raio $x+1$, altura $x^2$: $2\pi\int_0^1(x+1)x^2dx=2\pi\big(\frac14+\frac13\big)=\frac{7\pi}{6}$ ✓.

:::result
**Resposta:** $V=\dfrac{7\pi}{6}\ \text{u.v.}$
:::

### b) Região no 2º quadrante, abaixo de $y=-x^3$, acima do eixo $x$, $-1\le x\le0$; eixo $x=-2$

**Região:** para $x<0$, $-x^3>0$; em $x=-1$ vale $1$. Logo $-1\le x\le0$, $0\le y\le-x^3$.
**Em $y$:** $y=-x^3\Rightarrow x=-\sqrt[3]{y}$. Para $0\le y\le1$, $x$ vai de $-1$ até $-\sqrt[3]y$. O eixo está em $x=-2$ (à esquerda da região): distâncias externa $R=-\sqrt[3]y+2$ e interna $r=-1+2=1$.
$$V=\pi\int_0^1\Big[(2-y^{1/3})^2-1\Big]dy=\pi\int_0^1\big(3-4y^{1/3}+y^{2/3}\big)dy=\pi\Big[3y-3y^{4/3}+\frac35y^{5/3}\Big]_0^1=\pi\Big(3-3+\frac35\Big).$$

**Conferência por cascas:** raio $x+2$, altura $-x^3$: $2\pi\int_{-1}^0(x+2)(-x^3)dx=2\pi\Big[-\frac{x^5}{5}-\frac{x^4}{2}\Big]_{-1}^0=2\pi\cdot\frac3{10}=\frac{3\pi}{5}$ ✓.

:::result
**Resposta:** $V=\dfrac{3\pi}{5}\ \text{u.v.}$
:::
:::note[Fórmulas-chave desta parte]
**Cascas (eixo vertical):** $V=2\pi\displaystyle\int_a^b (\text{raio})(\text{altura})\,dx$, com raio $=|x-L|$ para o eixo $x=L$.
**Cascas (eixo horizontal):** $V=2\pi\displaystyle\int_c^d (\text{raio})(\text{altura})\,dy$, com raio $=|y-L|$.
**Comprimento de arco:** $L=\displaystyle\int_a^b\sqrt{1+[f'(x)]^2}\,dx$ (ou em $y$: $\sqrt{1+[g'(y)]^2}\,dy$).
**Área de superfície:** $S=2\pi\displaystyle\int (\text{raio})\,ds$, com $ds=\sqrt{1+[f'(x)]^2}\,dx$.
Dica: nas casca, a "altura" é o comprimento do segmento paralelo ao eixo de rotação que atravessa a região; o "raio" é a distância desse segmento ao eixo.
:::

## Questão 13 — Cascas a partir das figuras {#q13}

Leitura das figuras: cada região está descrita abaixo; a faixa desenhada em azul é paralela ao eixo de rotação, o que é exatamente o que as cascas pedem.

### 1ª figura — $y=1+\frac{x^2}{4}$, $0\le x\le2$, em torno do eixo $y$

1. A faixa vertical em $x$ tem altura $h=1+\dfrac{x^2}{4}$ (do eixo $x$ até a curva) e a distância ao eixo $y$ é o raio $r=x$.
2. Monta-se $V=2\pi\displaystyle\int_0^2 x\left(1+\frac{x^2}{4}\right)dx$.
3. Distribuindo: $2\pi\displaystyle\int_0^2\left(x+\frac{x^3}{4}\right)dx=2\pi\left[\frac{x^2}{2}+\frac{x^4}{16}\right]_0^2$.
4. Em $x=2$: $2+1=3$; em $x=0$: $0$.

:::result
**Resposta:** $V=6\pi\ \text{u.v.}$
:::

### 2ª figura — $x=y^2$, $y=\sqrt2$, em torno do eixo $x$

1. Leitura: a região está entre o eixo $y$ e a curva $x=y^2$, para $0\le y\le\sqrt2$ (a faixa horizontal vai de $x=0$ até $x=y^2$).
2. Como o eixo é horizontal, integramos em $y$: raio $r=y$, altura $h=y^2$.
3. $V=2\pi\displaystyle\int_0^{\sqrt2} y\cdot y^2\,dy=2\pi\left[\frac{y^4}{4}\right]_0^{\sqrt2}$.
4. $(\sqrt2)^4=4$, logo $2\pi\cdot 1$.

:::result
**Resposta:** $V=2\pi\ \text{u.v.}$
:::

### 3ª figura — $x=3-y^2$, $y=\sqrt3$, em torno do eixo $x$

1. A curva vai de $(3,0)$ a $(0,\sqrt3)$. A faixa horizontal na altura $y$ vai do eixo $y$ até a curva: altura $h=3-y^2$, raio $r=y$.
2. $V=2\pi\displaystyle\int_0^{\sqrt3} y(3-y^2)\,dy=2\pi\displaystyle\int_0^{\sqrt3}(3y-y^3)\,dy$.
3. Primitiva: $\dfrac{3y^2}{2}-\dfrac{y^4}{4}$. Em $y=\sqrt3$: $\dfrac92-\dfrac94=\dfrac94$.

:::result
**Resposta:** $V=2\pi\cdot\frac94=\dfrac{9\pi}{2}\ \text{u.v.}$
:::

### 4ª figura — $y=2-\frac{x^2}{4}$, $0\le x\le2$, em torno do eixo $y$

1. Faixa vertical: altura $h=2-\dfrac{x^2}{4}$, raio $r=x$.
2. $V=2\pi\displaystyle\int_0^2\left(2x-\frac{x^3}{4}\right)dx=2\pi\left[x^2-\frac{x^4}{16}\right]_0^2$.
3. Em $x=2$: $4-1=3$.

:::result
**Resposta:** $V=6\pi\ \text{u.v.}$
:::

## Questão 14 — Cascas em torno do eixo $y$ {#q14}

:::note
Em torno do eixo $y$ com curvas $y=f(x)$: raio $=x$, altura $=$ (curva de cima) $-$ (curva de baixo).
:::

### a) $y=x$, $y=-x/2$, $x=2$

1. A região é um triângulo entre as duas retas (que se cruzam em $x=0$) até $x=2$.
2. Altura: $x-\left(-\dfrac x2\right)=\dfrac{3x}{2}$. Raio: $x$.
3. $V=2\pi\displaystyle\int_0^2 x\cdot\frac{3x}{2}\,dx=3\pi\int_0^2x^2\,dx=3\pi\cdot\frac83$.

:::result
**Resposta:** $V=8\pi\ \text{u.v.}$
:::

### b) $y=2x$, $y=x/2$, $x=1$

1. Retas se cruzam em $x=0$; para $0\le x\le1$, $2x\ge x/2$.
2. Altura: $2x-\dfrac x2=\dfrac{3x}2$; raio: $x$.
3. $V=2\pi\displaystyle\int_0^1\frac{3x^2}{2}\,dx=3\pi\cdot\frac13$.

:::result
**Resposta:** $V=\pi\ \text{u.v.}$
:::

### c) $y=x^2$, $y=2-x$, $x=0$, $x\ge0$

1. Interseção: $x^2=2-x\Rightarrow x^2+x-2=0\Rightarrow x=1$ (ou $-2$, descartado). Região: $0\le x\le1$.
2. Em $x=0{,}5$: $2-x=1{,}5>x^2=0{,}25$, então a reta está por cima. Altura: $2-x-x^2$.
3. $V=2\pi\displaystyle\int_0^1 x(2-x-x^2)\,dx=2\pi\int_0^1(2x-x^2-x^3)\,dx=2\pi\left[x^2-\frac{x^3}{3}-\frac{x^4}{4}\right]_0^1$.
4. $1-\dfrac13-\dfrac14=\dfrac{5}{12}$.

:::result
**Resposta:** $V=\dfrac{5\pi}{6}\ \text{u.v.}$
:::

### d) $y=2-x^2$, $y=x^2$, $x=0$

1. Interseção: $2-x^2=x^2\Rightarrow x=1$ (com $x\ge0$). Para $0\le x\le 1$ a parábola de cima é $2-x^2$.
2. Altura: $2-2x^2$; raio: $x$.
3. $V=2\pi\displaystyle\int_0^1(2x-2x^3)\,dx=2\pi\left[x^2-\frac{x^4}{2}\right]_0^1=2\pi\cdot\frac12$.

:::result
**Resposta:** $V=\pi\ \text{u.v.}$
:::

### e) $y=2x-1$, $y=\sqrt x$, $x=0$

1. Interseção: $2x-1=\sqrt x\Rightarrow 4x^2-4x+1=x\Rightarrow 4x^2-5x+1=0\Rightarrow x=1$ ou $x=\tfrac14$. Em $x=\tfrac14$: $2x-1=-\tfrac12\ne\tfrac12$ — raiz **estranha** (surgiu ao elevar ao quadrado). Logo só $x=1$.
2. Em $0\le x\le1$: $\sqrt x\ge 2x-1$ (em $x=0$: $0\ge-1$). Altura: $\sqrt x-2x+1$.
3. $V=2\pi\displaystyle\int_0^1\left(x^{3/2}-2x^2+x\right)dx=2\pi\left[\frac25x^{5/2}-\frac23x^3+\frac{x^2}{2}\right]_0^1$.
4. $\dfrac25-\dfrac23+\dfrac12=\dfrac{12-20+15}{30}=\dfrac7{30}$.

:::result
**Resposta:** $V=\dfrac{7\pi}{15}\ \text{u.v.}$
:::

## Questão 15 — Cascas em torno do eixo $x$ {#q15}

:::note
Em torno do eixo $x$ com curvas $x=g(y)$: integra-se em $y$; raio $=y$, altura $=$ (curva da direita) $-$ (curva da esquerda).
:::

### a) $x=\sqrt y$, $x=-y$, $y=2$

1. Para $0\le y\le2$: $\sqrt y\ge0\ge-y$, então a curva da direita é $\sqrt y$ e a da esquerda $-y$. Altura: $\sqrt y+y$.
2. $V=2\pi\displaystyle\int_0^2 y(\sqrt y+y)\,dy=2\pi\int_0^2\left(y^{3/2}+y^2\right)dy=2\pi\left[\frac25y^{5/2}+\frac{y^3}{3}\right]_0^2$.
3. $2^{5/2}=4\sqrt2$, logo $\dfrac25\cdot4\sqrt2=\dfrac{8\sqrt2}{5}$; e $\dfrac83$.

:::result
**Resposta:** $V=2\pi\left(\dfrac{8\sqrt2}{5}+\dfrac83\right)=\dfrac{16\pi(3\sqrt2+5)}{15}\ \text{u.v.}$
:::

### b) $x=y^2$, $x=-y$, $y=2$, $y\ge0$

1. Para $y\ge0$: $y^2\ge -y$. Altura $=y^2+y$.
2. $V=2\pi\displaystyle\int_0^2 y(y^2+y)\,dy=2\pi\int_0^2(y^3+y^2)\,dy=2\pi\left[\frac{y^4}{4}+\frac{y^3}{3}\right]_0^2$.
3. $4+\dfrac83=\dfrac{20}{3}$.

:::result
**Resposta:** $V=\dfrac{40\pi}{3}\ \text{u.v.}$
:::

### c) $x=2y-y^2$, $x=0$

1. $2y-y^2=0\Rightarrow y=0$ ou $y=2$; entre eles $2y-y^2\ge0$. Altura: $2y-y^2$.
2. $V=2\pi\displaystyle\int_0^2 y(2y-y^2)\,dy=2\pi\left[\frac{2y^3}{3}-\frac{y^4}{4}\right]_0^2=2\pi\left(\frac{16}{3}-4\right)$.

:::result
**Resposta:** $V=\dfrac{8\pi}{3}\ \text{u.v.}$
:::

### d) $x=2y-y^2$, $x=y$

1. Interseção: $2y-y^2=y\Rightarrow y-y^2=0\Rightarrow y=0$ ou $y=1$.
2. Em $y=\tfrac12$: $2y-y^2=0{,}75>0{,}5$, então a parábola está à direita. Altura: $y-y^2$.
3. $V=2\pi\displaystyle\int_0^1 y(y-y^2)\,dy=2\pi\left[\frac{y^3}{3}-\frac{y^4}{4}\right]_0^1=2\pi\cdot\frac1{12}$.

:::result
**Resposta:** $V=\dfrac{\pi}{6}\ \text{u.v.}$
:::

### e) $y=x$, $y=2x$, $y=2$

1. Isole $x$: $y=x\Rightarrow x=y$; $y=2x\Rightarrow x=\dfrac y2$. Para $0\le y\le2$: direita $x=y$, esquerda $x=\dfrac y2$.
2. Altura: $y-\dfrac y2=\dfrac y2$.
3. $V=2\pi\displaystyle\int_0^2 y\cdot\frac y2\,dy=\pi\left[\frac{y^3}{3}\right]_0^2=\pi\cdot\frac83$.

:::result
**Resposta:** $V=\dfrac{8\pi}{3}\ \text{u.v.}$
:::

## Questão 16 — Cascas ou anel, vários eixos {#q16}

### a) Triângulo de vértices $(1,1)$, $(1,2)$, $(2,2)$

Descrição: os lados são $x=1$, $y=2$ e a reta $y=x$. Região: $1\le x\le2$, $x\le y\le2$.

**Em torno do eixo $x$ (anel):** raio externo $R=2$, interno $r=x$.

$$V=\pi\int_1^2(4-x^2)\,dx=\pi\left[4x-\frac{x^3}{3}\right]_1^2=\pi\left(\frac{16}{3}-\frac{11}{3}\right)$$

:::result
**Resposta:** $V=\dfrac{5\pi}{3}\ \text{u.v.}$
:::

**Em torno do eixo $y$ (casca):** raio $x$, altura $2-x$.

$$V=2\pi\int_1^2x(2-x)\,dx=2\pi\left[x^2-\frac{x^3}{3}\right]_1^2=2\pi\left(\frac43-\frac23\right)$$

:::result
**Resposta:** $V=\dfrac{4\pi}{3}\ \text{u.v.}$
:::

**Em torno da reta $y=1$ (anel):** distância ao eixo $=y-1$. Externo: $2-1=1$; interno: $x-1$.

$$V=\pi\int_1^2\left[1-(x-1)^2\right]dx=\pi\left[x-\frac{(x-1)^3}{3}\right]_1^2=\pi\left(1-\frac13\right)$$

:::result
**Resposta:** $V=\dfrac{2\pi}{3}\ \text{u.v.}$
:::

### b) $y=\sqrt x$, $y=2$, $x=0$

Região: $0\le x\le4$, $\sqrt x\le y\le2$.

**Eixo $x$ (anel):** $R=2$, $r=\sqrt x$.

$$V=\pi\int_0^4(4-x)\,dx=\pi\left[4x-\frac{x^2}{2}\right]_0^4=\pi(16-8)$$

:::result
**Resposta:** $V=8\pi\ \text{u.v.}$
:::

**Eixo $y$ (casca):** raio $x$, altura $2-\sqrt x$.

$$V=2\pi\int_0^4\left(2x-x^{3/2}\right)dx=2\pi\left[x^2-\frac25x^{5/2}\right]_0^4=2\pi\left(16-\frac{64}{5}\right)$$

:::result
**Resposta:** $V=\dfrac{32\pi}{5}\ \text{u.v.}$
:::

**Reta $y=4$ (anel):** distância $=4-y$. Externa: $4-\sqrt x$; interna: $4-2=2$.

$$V=\pi\int_0^4\left[(4-\sqrt x)^2-4\right]dx=\pi\int_0^4\left(12-8\sqrt x+x\right)dx=\pi\left[12x-\frac{16}{3}x^{3/2}+\frac{x^2}{2}\right]_0^4$$

$$=\pi\left(48-\frac{128}{3}+8\right)$$

:::result
**Resposta:** $V=\dfrac{40\pi}{3}\ \text{u.v.}$
:::

**Reta $y=2$ (anel):** a região fica abaixo do eixo, distância $=2-y$. O maior raio é $2-\sqrt x$ e o menor é $0$.

$$V=\pi\int_0^4(2-\sqrt x)^2dx=\pi\int_0^4\left(4-4\sqrt x+x\right)dx=\pi\left(16-\frac{64}{3}+8\right)$$

:::result
**Resposta:** $V=\dfrac{8\pi}{3}\ \text{u.v.}$
:::

### c) $x=y-y^3$ e eixo $y$, no 1º quadrante

Raízes de $y-y^3=y(1-y)(1+y)$: $y=0$ e $y=1$. Região: $0\le y\le1$, $0\le x\le y-y^3$.

**Eixo $x$ (casca em $y$):** raio $y$, altura $y-y^3$.

$$V=2\pi\int_0^1\left(y^2-y^4\right)dy=2\pi\left(\frac13-\frac15\right)$$

:::result
**Resposta:** $V=\dfrac{4\pi}{15}\ \text{u.v.}$
:::

**Reta $y=1$ (casca em $y$):** raio $1-y$, altura $y-y^3$.

$$V=2\pi\int_0^1(1-y)(y-y^3)\,dy=2\pi\int_0^1\left(y-y^2-y^3+y^4\right)dy=2\pi\left(\frac12-\frac13-\frac14+\frac15\right)$$

:::result
**Resposta:** $V=\dfrac{7\pi}{30}\ \text{u.v.}$
:::

## Questão 17 — Comprimento de arco {#q17}

:::note
O truque: calcule $1+(y')^2$ e procure um **quadrado perfeito**; assim a raiz some e a integral fica simples.
:::

### a) $y=\frac13(x^2+2)^{3/2}$, $0\le x\le3$

1. $y'=\dfrac13\cdot\dfrac32(x^2+2)^{1/2}\cdot2x=x\sqrt{x^2+2}$.
2. $1+(y')^2=1+x^2(x^2+2)=x^4+2x^2+1=(x^2+1)^2$.
3. $L=\displaystyle\int_0^3(x^2+1)\,dx=\left[\frac{x^3}{3}+x\right]_0^3=9+3$.

:::result
**Resposta:** $L=12\ \text{u.c.}$
:::

### b) $y=x^{3/2}$, $0\le x\le4$

1. $y'=\dfrac32x^{1/2}$, $1+(y')^2=1+\dfrac{9x}{4}$.
2. $L=\displaystyle\int_0^4\left(1+\frac{9x}{4}\right)^{1/2}dx$. Com $u=1+\dfrac{9x}{4}$, $du=\dfrac94dx$: $L=\dfrac49\cdot\dfrac23u^{3/2}\Big|$.
3. Em $x=4$: $u=10$; em $x=0$: $u=1$.

:::result
**Resposta:** $L=\dfrac{8}{27}\left(10\sqrt{10}-1\right)\approx9{,}073\ \text{u.c.}$
:::

### c) $x=\frac{y^3}{3}+\frac{1}{4y}$, $1\le y\le3$

1. $x'=y^2-\dfrac{1}{4y^2}$.
2. $1+(x')^2=1+y^4-\dfrac12+\dfrac1{16y^4}=y^4+\dfrac12+\dfrac1{16y^4}=\left(y^2+\dfrac1{4y^2}\right)^2$.
3. $L=\displaystyle\int_1^3\left(y^2+\frac1{4y^2}\right)dy=\left[\frac{y^3}{3}-\frac1{4y}\right]_1^3=\left(9-\frac1{12}\right)-\left(\frac13-\frac14\right)$.

:::result
**Resposta:** $L=\dfrac{53}{6}\ \text{u.c.}$
:::

### d) $x=\frac{y^4}{4}+\frac1{8y^2}$, $1\le y\le2$

1. $x'=y^3-\dfrac1{4y^3}$.
2. $1+(x')^2=y^6+\dfrac12+\dfrac1{16y^6}=\left(y^3+\dfrac1{4y^3}\right)^2$.
3. $L=\displaystyle\int_1^2\left(y^3+\frac1{4y^3}\right)dy=\left[\frac{y^4}{4}-\frac1{8y^2}\right]_1^2=\left(4-\frac1{32}\right)-\left(\frac14-\frac18\right)$.

:::result
**Resposta:** $L=\dfrac{123}{32}\ \text{u.c.}$
:::

### e) $y=\frac34x^{4/3}-\frac38x^{2/3}+5$, $1\le x\le8$

1. $y'=x^{1/3}-\dfrac14x^{-1/3}$.
2. $1+(y')^2=x^{2/3}+\dfrac12+\dfrac1{16}x^{-2/3}=\left(x^{1/3}+\dfrac14x^{-1/3}\right)^2$.
3. $L=\displaystyle\int_1^8\left(x^{1/3}+\frac14x^{-1/3}\right)dx=\left[\frac34x^{4/3}+\frac38x^{2/3}\right]_1^8=\left(12+\frac32\right)-\left(\frac34+\frac38\right)$.

:::result
**Resposta:** $L=\dfrac{99}{8}\ \text{u.c.}$
:::

### f) $x=\displaystyle\int_0^y\sqrt{\sec^4t-1}\,dt$, $-\pi/4\le y\le\pi/4$

1. Pelo TFC, $x'(y)=\sqrt{\sec^4y-1}$.
2. $1+(x')^2=\sec^4y$, e $\sqrt{\sec^4y}=\sec^2y$.
3. $L=\displaystyle\int_{-\pi/4}^{\pi/4}\sec^2y\,dy=\tan y\Big|_{-\pi/4}^{\pi/4}=1-(-1)$.

:::result
**Resposta:** $L=2\ \text{u.c.}$
:::

### g) $y=\displaystyle\int_{-2}^x\sqrt{3t^4-1}\,dt$, $-2\le x\le-1$

1. $y'=\sqrt{3x^4-1}$ (bem definida: $3x^4\ge3>1$ no intervalo).
2. $1+(y')^2=3x^4$, $\sqrt{3x^4}=\sqrt3\,x^2$.
3. $L=\sqrt3\displaystyle\int_{-2}^{-1}x^2\,dx=\sqrt3\left[\frac{x^3}{3}\right]_{-2}^{-1}=\sqrt3\left(-\frac13+\frac83\right)$.

:::result
**Resposta:** $L=\dfrac{7\sqrt3}{3}\approx4{,}041\ \text{u.c.}$
:::

### h) $y=\displaystyle\int_0^x\sqrt{\tan t}\,dt$, $0\le x\le\pi/6$

1. $y'=\sqrt{\tan x}$, então $1+(y')^2=1+\tan x$.
2. $L=\displaystyle\int_0^{\pi/6}\sqrt{1+\tan x}\,dx$. Aqui **não** aparece quadrado perfeito (diferente de $\sec^2x=1+\tan^2x$), e a primitiva não é elementar.
3. Calcula-se numericamente (regra de Simpson, por exemplo).

:::result
**Resposta:** $L=\displaystyle\int_0^{\pi/6}\sqrt{1+\tan x}\,dx\approx0{,}590\ \text{u.c.}$
:::

### i) $x=\displaystyle\int_0^y\sqrt{\sec^2t-1}\,dt$, $0\le y\le\pi/4$

1. $\sec^2t-1=\tan^2t$ e, para $t\in[0,\pi/4]$, $\sqrt{\tan^2t}=\tan t$. Logo $x'=\tan y$.
2. $1+(x')^2=\sec^2y$, $\sqrt{\sec^2y}=\sec y$.
3. $L=\displaystyle\int_0^{\pi/4}\sec y\,dy=\ln|\sec y+\tan y|\Big|_0^{\pi/4}=\ln(\sqrt2+1)-\ln1$.

:::result
**Resposta:** $L=\ln\left(1+\sqrt2\right)\approx0{,}881\ \text{u.c.}$
:::

## Questão 18 — Área de superfície de revolução {#q18}

### a) $y=\sqrt{1-x^2}$, $-1\le x\le1$, eixo $x$

1. $y'=\dfrac{-x}{\sqrt{1-x^2}}$, $1+(y')^2=\dfrac{1}{1-x^2}$, então $ds=\dfrac{dx}{\sqrt{1-x^2}}$.
2. $S=2\pi\displaystyle\int_{-1}^1 y\,ds=2\pi\int_{-1}^1\sqrt{1-x^2}\cdot\frac1{\sqrt{1-x^2}}\,dx=2\pi\int_{-1}^1dx$.

:::result
**Resposta:** $S=4\pi\ \text{u.a.}$ (a esfera de raio 1).
:::

### b) $y=x^2$, $0\le x\le2$, eixo $x$

1. $y'=2x$, $ds=\sqrt{1+4x^2}\,dx$, raio $=y=x^2$.
2. Integral: $S=2\pi\displaystyle\int_0^2x^2\sqrt{1+4x^2}\,dx$.
3. É calculável por substituição trigonométrica ($2x=\operatorname{tg}\theta$) ou pela fórmula de tabela de $\int x^2\sqrt{1+4x^2}\,dx$. O resultado é

:::result
**Resposta:** $S=\dfrac{\pi}{32}\left[132\sqrt{17}-\ln\left(4+\sqrt{17}\right)\right]\approx53{,}23\ \text{u.a.}$
:::

### c) $xy=1$, $1\le y\le2$, eixo $y$

1. $x=\dfrac1y$, $x'=-\dfrac1{y^2}$, $ds=\sqrt{1+\dfrac1{y^4}}\,dy=\dfrac{\sqrt{y^4+1}}{y^2}\,dy$. Raio $=x=\dfrac1y$.
2. $S=2\pi\displaystyle\int_1^2\frac{1}{y}\cdot\frac{\sqrt{y^4+1}}{y^2}\,dy=2\pi\int_1^2\frac{\sqrt{y^4+1}}{y^3}\,dy$.
3. Substituição $w=y^2$ ($dw=2y\,dy$) leva a $\pi\displaystyle\int_1^4\frac{\sqrt{w^2+1}}{w^2}\,dw$, que se resolve com $\int\dfrac{\sqrt{w^2+1}}{w^2}dw=-\dfrac{\sqrt{w^2+1}}{w}+\operatorname{arcsenh}w$.

:::result
**Resposta:** $S=\pi\left[\sqrt2-\dfrac{\sqrt{17}}{4}+\operatorname{arcsenh}4-\operatorname{arcsenh}1\right]\approx5{,}016\ \text{u.a.}$
:::

### d) $x=\sin y$, $0\le y\le\pi$, eixo $y$

1. $x'=\cos y$, $ds=\sqrt{1+\cos^2y}\,dy$, raio $=\sin y$.
2. $S=2\pi\displaystyle\int_0^\pi\sin y\sqrt{1+\cos^2y}\,dy$. Seja $u=\cos y$, $du=-\sin y\,dy$; limites $y=0\to u=1$, $y=\pi\to u=-1$.
3. $S=2\pi\displaystyle\int_{-1}^{1}\sqrt{1+u^2}\,du=2\pi\left[\frac u2\sqrt{1+u^2}+\frac12\operatorname{arcsenh}u\right]_{-1}^{1}=2\pi\left(\sqrt2+\operatorname{arcsenh}1\right)$.

:::result
**Resposta:** $S=2\pi\left[\sqrt2+\ln\left(1+\sqrt2\right)\right]\approx14{,}42\ \text{u.a.}$
:::

### e) $x=\displaystyle\int_0^y\tan t\,dt$, $0\le y\le\pi/3$, eixo $y$

1. $x'=\tan y$, $ds=\sec y\,dy$.
2. Raio $=x(y)=\displaystyle\int_0^y\tan t\,dt=\ln\sec y$ (pois $\int\tan=\ln|\sec|$ e $\ln\sec0=0$).
3. $S=2\pi\displaystyle\int_0^{\pi/3}\ln(\sec y)\,\sec y\,dy$. Esta integral não tem primitiva elementar.

:::result
**Resposta:** $S=2\pi\displaystyle\int_0^{\pi/3}\sec y\,\ln(\sec y)\,dy\approx2{,}075\ \text{u.a.}$
:::

### f) $y=\displaystyle\int_1^x\sqrt{t^2-1}\,dt$, $1\le x\le\sqrt5$, eixo $x$

1. $y'=\sqrt{x^2-1}$, $1+(y')^2=x^2$, $ds=x\,dx$.
2. Raio $=y(x)=\dfrac12\left[x\sqrt{x^2-1}-\ln\left(x+\sqrt{x^2-1}\right)\right]$ (integral de $\sqrt{t^2-1}$ de $1$ a $x$).
3. $S=2\pi\displaystyle\int_1^{\sqrt5}x\,y(x)\,dx$; não há necessidade de forma fechada simples, calcula-se numericamente.

:::result
**Resposta:** $S=2\pi\displaystyle\int_1^{\sqrt5}x\,y(x)\,dx\approx8{,}547\ \text{u.a.}$
:::

### g) $y+2\sqrt y=x$, $1\le y\le2$, eixo $y$

1. $x=y+2\sqrt y$, $x'=1+y^{-1/2}$, $ds=\sqrt{1+\left(1+y^{-1/2}\right)^2}\,dy$.
2. Raio $=x=y+2\sqrt y$. Logo $S=2\pi\displaystyle\int_1^2\left(y+2\sqrt y\right)\sqrt{1+\left(1+\tfrac1{\sqrt y}\right)^2}\,dy$.
3. Com $y=s^2$ não se racionaliza de modo simples; avalia-se numericamente.

:::result
**Resposta:** $S\approx51{,}33\ \text{u.a.}$
:::

### h) $y=\sqrt{2x-x^2}$, $0{,}5\le x\le1{,}5$, eixo $x$

1. $y^2=2x-x^2\Rightarrow2yy'=2-2x\Rightarrow y'=\dfrac{1-x}{y}$.
2. $1+(y')^2=\dfrac{y^2+(1-x)^2}{y^2}=\dfrac{2x-x^2+1-2x+x^2}{y^2}=\dfrac1{y^2}$, então $ds=\dfrac{dx}{y}$.
3. $S=2\pi\displaystyle\int_{0{,}5}^{1{,}5}y\cdot\frac1y\,dx=2\pi\cdot1$.

:::result
**Resposta:** $S=2\pi\ \text{u.a.}$ (faixa de altura 1 de uma esfera de raio 1: $2\pi Rh$).
:::

## Questão 19 — Área da esfera {#q19}

### Mostre que a área da esfera de raio $a$ é $4\pi a^2$

1. A curva $y=\sqrt{a^2-x^2}$, $-a\le x\le a$, é a semicircunferência superior; girando em torno do eixo $x$ gera a esfera.
2. $y'=\dfrac{-x}{\sqrt{a^2-x^2}}$, então $1+(y')^2=\dfrac{a^2-x^2+x^2}{a^2-x^2}=\dfrac{a^2}{a^2-x^2}$ e $ds=\dfrac{a}{\sqrt{a^2-x^2}}\,dx$.
3. $S=2\pi\displaystyle\int_{-a}^a y\,ds=2\pi\int_{-a}^a\sqrt{a^2-x^2}\cdot\frac{a}{\sqrt{a^2-x^2}}\,dx=2\pi a\int_{-a}^a dx$.
4. $\displaystyle\int_{-a}^a dx=2a$, logo $S=2\pi a\cdot2a$.

:::result
**Resposta:** $S=4\pi a^2\ \text{u.a.}$ $\blacksquare$
:::
