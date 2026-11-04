---
title: "Volumes: seções, discos e arruelas"
number: "07"
summary: "Volume como integral da área da seção transversal, sólidos de revolução pelo método do disco e da arruela (eixos x, y e eixos deslocados), cunha, esfera, prisma e cilindro — com 18 exercícios resolvidos."
status: "available"
eyebrow: "cálculo ii · aplicações da integral · aula 08"
lede: "Se você sabe a área de cada fatia de um sólido, a integral soma as fatias e entrega o volume. Daqui saem quase todos os volumes do curso: seções transversais, discos e arruelas."
formula: "V=\\int_a^b A(x)\\,dx"
---

## A ideia de volume {#ideia kicker="fatiar e somar" toc="A ideia de volume"}

Para a área, fatiamos a região em retângulos finos. Para o volume, **fatiamos o sólido** em lâminas finas perpendiculares a um eixo. Cada lâmina tem espessura $\Delta x$ e face de área $A(x)$; seu volume é aproximadamente $A(x)\,\Delta x$. Somando e fazendo $\Delta x\to0$ (soma de Riemann):

:::formula[Definição de volume]
Seja $S$ um sólido entre os planos perpendiculares ao eixo $OX$ em $x=a$ e $x=b$. Se a área da seção plana de $S$ no plano perpendicular a $OX$ em $x$ é $A(x)$, com $A$ contínua em $[a,b]$, então
$$
V(S)=\int_a^b A(x)\,dx
$$
:::

:::note[Roteiro universal]
1. Escolha o eixo de fatiamento e esboce o sólido e uma fatia típica.
2. Descreva a fatia (quadrado, disco, triângulo…) e escreva sua **área em função da posição** $x$ (ou $y$).
3. Determine os limites $a$ e $b$ (onde o sólido começa e termina).
4. Integre: $V=\int_a^b A(x)\,dx$.
:::

### Exemplo: prisma reto de base retangular

Base com lados $a$ e $b$ e altura $c$. Posicionando a base no plano $XY$ e fatiando na direção da altura, toda seção é um retângulo $a\times b$, com $A(x)=ab$ constante:

$$
V=\int_0^c ab\,dx=ab\,x\Big|_0^c=abc
$$

### Exemplo: cilindro circular reto

Raio $r$ e altura $h$. Toda seção é um disco de área $\pi r^2$:

$$
V=\int_0^h \pi r^2\,dx=\pi r^2 x\Big|_0^h=\pi r^2h
$$

## Seções transversais conhecidas {#secoes kicker="quadrados, triângulos, semicírculos…" toc="Seções transversais"}

Em muitos problemas o sólido tem **base** numa região do plano e as seções perpendiculares ao eixo $x$ têm uma forma fixa, com um lado (ou diâmetro) esticado entre duas curvas $y=g(x)\le y=f(x)$. Defina o comprimento da base da fatia:

$$
s(x)=f(x)-g(x)
$$

| Forma da seção | Área em função de $s$ |
| --- | --- |
| Quadrado de lado $s$ | $A=s^2$ |
| Quadrado de **diagonal** $s$ | $A=\dfrac{s^2}{2}$ |
| Semicírculo de **diâmetro** $s$ | $A=\dfrac{\pi}{8}s^2$ |
| Disco (círculo) de **diâmetro** $s$ | $A=\dfrac{\pi}{4}s^2$ |
| Triângulo equilátero de lado $s$ | $A=\dfrac{\sqrt3}{4}s^2$ |
| Triângulo retângulo isósceles, cateto $s$ | $A=\dfrac{s^2}{2}$ |
| Triângulo retângulo isósceles, hipotenusa $s$ | $A=\dfrac{s^2}{4}$ |

Em todos os casos $A(x)=k\,[f(x)-g(x)]^2$, com $k$ uma constante geométrica, e então
$$
V=k\int_a^b\big[f(x)-g(x)\big]^2\,dx
$$

:::warn[Erro comum]
Diâmetro $\ne$ raio. Se a base da seção vai de $g$ a $f$ e a seção é um **disco** com esse segmento como diâmetro, o raio é $\dfrac{f-g}{2}$ e a área é $\dfrac{\pi}{4}(f-g)^2$ — não $\pi(f-g)^2$.
:::

### Exemplo: cunha de um cilindro (slide)

Cilindro de raio $3$ cortado por dois planos: um perpendicular ao eixo e outro que o atravessa a $45^\circ$ no centro. A base é o semicírculo $x^2+y^2\le9$, $x\in[0,3]$, com $y=\pm\sqrt{9-x^2}$. O plano a $45^\circ$ faz a altura da cunha em $x$ ser igual a $x$ (triângulo retângulo isósceles de catetos $x$). A seção perpendicular a $x$ é um retângulo $x\times 2\sqrt{9-x^2}$:

$$
A(x)=2x\sqrt{9-x^2}
$$

$$
V=\int_0^3 2x\sqrt{9-x^2}\,dx\qquad u=9-x^2,\ du=-2x\,dx
$$

$$
V=\int_{9}^{0}-\sqrt u\,du=\int_0^9\sqrt u\,du=\frac23u^{3/2}\Big|_0^9=\frac23\cdot27=18
$$

:::result
$V=18$ u.v.
:::

## Sólidos de revolução: método do disco {#disco kicker="girar uma curva" toc="Método do disco"}

Gire em torno do eixo $OX$ a região sob o gráfico de $f\ge0$ em $[a,b]$. A fatia em $x_0$ é um **disco** de centro em $x_0$ e raio $f(x_0)$, de área $\pi[f(x_0)]^2$. Logo:

:::formula[Disco — giro em torno do eixo x]
$$
V=\pi\int_a^b\big[f(x)\big]^2\,dx
$$
:::

:::formula[Disco — giro em torno do eixo y (curva $x=f(y)$)]
$$
V=\pi\int_c^d\big[f(y)\big]^2\,dy
$$
:::

A regra é a mesma: **a variável de integração é a do eixo de rotação**; o raio é a distância do eixo à curva.

### Exemplos do slide

**$f(x)=\sqrt x$, eixo $x$, de $0$ a $5$.**
$$
V=\pi\int_0^5(\sqrt x)^2dx=\pi\int_0^5x\,dx=\pi\frac{x^2}{2}\Big|_0^5=\frac{25\pi}{2}
$$

**$f(x)=x^2$, eixo $x$, de $0$ a $5$.**
$$
V=\pi\int_0^5x^4dx=\pi\frac{x^5}{5}\Big|_0^5=625\pi
$$

**$f(y)=e^y$, eixo $y$, de $-5$ a $2$.**
$$
V=\pi\int_{-5}^2e^{2y}dy=\frac{\pi e^{2y}}{2}\Big|_{-5}^2=\frac{\pi e^4}{2}-\frac{\pi}{2e^{10}}
$$

:::warn[Inverter função ou eixo muda o sólido]
No intervalo $[0,5]$... as funções $\sqrt x$ e $x^2$ não são inversas em todo o intervalo, mas em $[0,1]$ são inversas uma da outra. Girar $y=\sqrt x$ em torno de $x$ e girar $y=x^2$ em torno de $y$ gera o **mesmo** sólido (cada curva é a reflexão da outra pela reta $y=x$); já girar $\sqrt x$ e $x^2$ em torno do **mesmo** eixo gera sólidos diferentes, com volumes diferentes ($\tfrac{25\pi}{2}$ contra $625\pi$ acima). Sempre identifique: **qual eixo, qual função, qual sólido**.
:::

### Exemplo: volume da esfera

A semicircunferência $y=\sqrt{r^2-x^2}$, $x\in[-r,r]$, girada em torno de $OX$, gera a esfera de raio $r$:

$$
V=\pi\int_{-r}^{r}\big(r^2-x^2\big)\,dx=\pi\Big[r^2x-\frac{x^3}{3}\Big]_{-r}^{r}
=\pi\Big(2r^3-\frac{2r^3}{3}\Big)=\frac43\pi r^3
$$

### Exemplo: cone

A reta $y=\dfrac{r}{h}x$, $0\le x\le h$, girada em torno de $OX$:
$$
V=\pi\int_0^h\frac{r^2}{h^2}x^2dx=\pi\frac{r^2}{h^2}\cdot\frac{h^3}{3}=\frac{\pi r^2h}{3}
$$

## Método da arruela (anel) {#arruela kicker="com um buraco no meio" toc="Método da arruela"}

Se a região **não encosta no eixo** de rotação, a fatia é uma **arruela**: um disco de raio externo $R$ com um furo de raio interno $r$. Área $=\pi R^2-\pi r^2$.

Para $f(x)\ge g(x)\ge0$ em $[a,b]$, o sólido gerado por $f$ menos o gerado por $g$ (ambos em torno de $OX$) dá:

:::formula[Arruela — eixo x]
$$
V=\pi\int_a^b\Big\{\big[f(x)\big]^2-\big[g(x)\big]^2\Big\}\,dx
$$
:::

:::warn[O erro clássico]
$$
\int(f^2-g^2)\neq\int(f-g)^2
$$
Eleve ao quadrado **cada raio** antes de subtrair. $(f-g)^2$ é o quadrado da *espessura* da região, não a área da arruela.
:::

### Exemplo (slide)

$f(x)=\tfrac12+x^2$, $g(x)=x$ em $[0,2]$: o volume interior ao sólido de $f$ e exterior ao de $g$ é

$$
V=\pi\int_0^2\Big[\Big(\tfrac12+x^2\Big)^2-x^2\Big]dx=\pi\int_0^2\Big(\tfrac14+x^4\Big)dx
=\pi\Big[\tfrac x4+\tfrac{x^5}{5}\Big]_0^2=\frac{69\pi}{10}\approx21{,}66
$$

(expandimos $(\tfrac12+x^2)^2=\tfrac14+x^2+x^4$, e o $x^2$ cancela com $-x^2$).

### Giro em torno do eixo $y$

Escreva as curvas como $x=\ldots$ (função de $y$). Se a região fica entre $x=g(y)$ (interna) e $x=f(y)$ (externa), $0\le g\le f$:

:::formula[Arruela — eixo y]
$$
V=\pi\int_c^d\Big\{\big[f(y)\big]^2-\big[g(y)\big]^2\Big\}\,dy
$$
:::

**Exemplo (slide).** A região entre $y=x^2$ e $y=2x$ no 1º quadrante gira em torno de $OY$. Invertendo: $x=\sqrt y$ e $x=\dfrac y2$. Interseção: $\sqrt y=\dfrac y2\Rightarrow y=0$ ou $y=4$. Para $0\le y\le4$, $\sqrt y\ge y/2$, então o raio externo é $\sqrt y$ e o interno $y/2$:

$$
V=\pi\int_0^4\Big[y-\frac{y^2}{4}\Big]dy=\pi\Big[\frac{y^2}{2}-\frac{y^3}{12}\Big]_0^4=\pi\Big(8-\frac{16}{3}\Big)=\frac{8\pi}{3}
$$

### Eixo de rotação deslocado

Se o eixo é a reta horizontal $y=c$ (ou vertical $x=c$), os raios passam a ser **distâncias até o eixo**:

| Giro em torno de | Raio externo $R$ | Raio interno $r$ |
| --- | --- | --- |
| $y=c$, curvas $y=f(x)\ge g(x)$, ambas acima do eixo | $f(x)-c$ | $g(x)-c$ |
| $y=c$, curvas abaixo do eixo | $c-g(x)$ | $c-f(x)$ |
| $x=c$, curvas $x=f(y)\ge g(y)$, à direita do eixo | $f(y)-c$ | $g(y)-c$ |

Sempre: **raio = distância ao eixo = (mais longe) − (eixo)**, e $V=\pi\int(R^2-r^2)$.

:::note[Quando usar disco, arruela ou (próximo tópico) casca]
- Região **encosta** no eixo e a fatia perpendicular ao eixo vai até ele → **disco**.
- Região **não encosta** → **arruela**.
- Fatia perpendicular ao eixo é difícil (ou a função não tem inversa simples) → **cascas cilíndricas**.
:::

## Resumo {#resumo kicker="cola de prova" toc="Resumo"}

::::cheat
#### Seção transversal
$V=\int_a^bA(x)\,dx$; escreva $A$ em função de $s=f-g$.

#### Disco
$V=\pi\int[\text{raio}]^2$; raio = distância da curva ao eixo.

#### Arruela
$V=\pi\int(R^2-r^2)$; eleve cada raio ao quadrado separadamente.

#### Eixo $y$ ou deslocado
Reescreva as curvas na variável certa e meça os raios até o eixo.

#### Notáveis
Esfera $\tfrac43\pi r^3$; cone $\tfrac13\pi r^2h$; cilindro $\pi r^2h$; toro $2\pi^2Rr^2$.
::::

:::cta{label="Ir para os exercícios" href="/topicos/volumes-secoes-discos-aneis/exercicios"}
#### Treine com 18 exercícios resolvidos passo a passo

De seções transversais e discos até arruelas com eixo deslocado e o toro.
:::

:::next{kicker="continuando a série"}
#### Próximo passo

- [Volumes por cascas cilíndricas](/topicos/volumes-cascas-cilindricas)
- [Comprimento de arco e área de superfície](/topicos/comprimento-arco-superficie)
- [Área de regiões planas](/topicos/area-regioes-planas)
:::
