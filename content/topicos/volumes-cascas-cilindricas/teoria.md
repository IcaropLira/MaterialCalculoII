---
title: "Volumes por cascas cilíndricas"
number: "08"
summary: "Por que as cascas existem, dedução de V = 2π∫ r·h, eixos deslocados, regiões entre curvas, quando usar casca ou anel e 17 exercícios resolvidos passo a passo."
status: "available"
eyebrow: "cálculo ii · aplicações da integral"
lede: "Quando girar uma região em torno de um eixo exige inverter uma função difícil, fatie na direção contrária: em vez de discos e arruelas, use cascas cilíndricas e integre na mesma variável da função."
formula: "V = 2\\pi\\int_a^b (\\text{raio})\\,(\\text{altura})\\,dx"
---

## O problema: inverter a função nem sempre é simples {#motivacao kicker="motivação" toc="Por que cascas?"}

Nas aulas anteriores aprendemos a calcular volumes de sólidos de revolução com **discos** e **arruelas**: fatiamos o sólido *perpendicularmente ao eixo de rotação* e somamos as áreas das fatias. Isso funciona muito bem quando o eixo é o eixo $x$ e a curva é dada como $y=f(x)$.

O problema aparece quando o eixo de rotação é **vertical** e a curva é dada em função de $x$. Aí as fatias perpendiculares ao eixo são *horizontais*, e precisamos escrever $x$ em função de $y$, isto é, **inverter a função**.

::::example
#### Um caso em que inverter já dá trabalho

Gire a região sob $f(x)=3x-x^2$ (para $0\le x\le 3$) em torno da reta $x=-1$. Pelo método do anel, precisamos de $x=g(y)$. Completando quadrado:

1. Reescreva a função:

   $$
   y=3x-x^2=-x^2+3x-\frac94+\frac94=-\left(x-\frac32\right)^2+\frac94
   $$

2. Isole $x$:

   $$
   \left(x-\frac32\right)^2=\frac94-y \;\Longrightarrow\; x=\frac32\pm\sqrt{\frac94-y}
   $$

3. A parábola "deitada" tem **dois ramos**, $x_1=\frac32+\sqrt{\frac94-y}$ e $x_2=\frac32-\sqrt{\frac94-y}$, e o raio do anel precisa somar $1$ (distância ao eixo $x=-1$): $\frac32+1=\frac52$.

:::result
Funciona, mas é trabalhoso, dá raízes quadradas e dois ramos. Para $f(x)=x^5+x$ ou $f(x)=xe^x$ a inversão é **impossível** em forma elementar. Precisamos de um método que **não exija inverter**.
:::
::::

Esse método é o das **cascas cilíndricas**: em vez de fatiar na direção de $y$, fatiamos em **faixas verticais de espessura $dx$** e giramos cada faixa. Cada faixa vira uma casca (um "tubo" de parede fina), e a variável de integração continua sendo $x$.

## De onde vem a fórmula: desmontando a casca {#deducao kicker="dedução" toc="Dedução da fórmula"}

Considere a região sob o gráfico de $y=f(x)\ge0$, entre $x=a$ e $x=b$ (com $0\le a<b$), girando em torno do eixo $y$.

Tome uma faixa vertical estreita, na posição $x$, com espessura $dx$ e altura $f(x)$. Ao girar em torno do eixo $y$ ela gera uma **casca cilíndrica**:

- **raio** da casca: a distância da faixa ao eixo, que aqui vale $r=x$;
- **altura** da casca: $h=f(x)$;
- **espessura** da casca: $dx$.

::::example
#### Planificando a casca

1. **Corte a casca** ao longo de uma geratriz e **abra-a** sobre uma mesa. O cilindro oco vira (quase) um **paralelepípedo fino**.

2. As dimensões desse paralelepípedo são:

   - comprimento: o perímetro da casca, $2\pi r$;
   - altura: $h$;
   - espessura: $dx$.

3. O volume da casca é, então:

   $$
   dV=\underbrace{2\pi r}_{\text{comprimento}}\cdot\underbrace{h}_{\text{altura}}\cdot\underbrace{dx}_{\text{espessura}}
   $$

4. Somando todas as cascas (soma de Riemann, que vira integral quando $dx\to0$):

   $$
   V=\int_a^b 2\pi\,r(x)\,h(x)\,dx
   $$

:::result
$$
V=2\pi\int_a^b (\text{raio})\cdot(\text{altura})\,dx
$$

Para o eixo $y$: $\;V=2\pi\displaystyle\int_a^b x\,f(x)\,dx$.
:::
::::

Se girarmos em torno de uma reta vertical $x=L$, só o raio muda: ele passa a ser a **distância da faixa até a reta**, $r=|x-L|$. É isso que aparece no slide, em que o "raio médio" é $x-L$ (ou $L-x$, conforme o lado):

$$
V=2\pi\int_a^b |x-L|\,f(x)\,dx
$$

:::note[Como lembrar]
$2\pi r\,h\,dx$ é "perímetro × altura × espessura". Sempre que esquecer a fórmula, **desenhe uma faixa**, marque a distância dela ao eixo (raio) e o comprimento dela (altura).
:::

## Receita em cinco passos {#receita kicker="método" toc="Receita"}

1. **Esboce a região** e o eixo de rotação.
2. **Desenhe uma faixa paralela ao eixo** de rotação (para eixo vertical, faixa vertical; para eixo horizontal, faixa horizontal).
3. Meça o **raio** (distância da faixa ao eixo) e a **altura** (comprimento da faixa: curva de cima menos curva de baixo).
4. Determine os **limites** (os extremos da variável *perpendicular ao eixo*) e integre $2\pi\cdot r\cdot h$.
5. Calcule a integral e escreva a unidade ($\text{u.v.}$ = unidades de volume).

:::warn[Regra de ouro]
A variável de integração é aquela **perpendicular ao eixo de rotação**: eixo vertical $\Rightarrow$ integra em $x$; eixo horizontal $\Rightarrow$ integra em $y$. É exatamente o contrário de discos e arruelas.
:::

## Eixo de rotação: os quatro casos {#eixos kicker="casos" toc="Os casos de eixo"}

| Eixo de rotação | Variável | Raio $r$ | Altura $h$ |
| --- | --- | --- | --- |
| eixo $y$ ($x=0$) | $x$ | $x$ | $f(x)-g(x)$ |
| reta $x=L$ | $x$ | $\lvert x-L\rvert$ | $f(x)-g(x)$ |
| eixo $x$ ($y=0$) | $y$ | $y$ | $p(y)-q(y)$ (curva da direita menos a da esquerda) |
| reta $y=L$ | $y$ | $\lvert y-L\rvert$ | $p(y)-q(y)$ |

Quando a região é limitada por **duas curvas**, a altura da casca é a diferença: a curva de cima menos a de baixo (para eixo vertical).

### Cuidado com o lado do eixo

Se a região está **à direita** de $x=L$, o raio é $x-L$. Se está **à esquerda**, o raio é $L-x$. Se o eixo **atravessa** a região, a fórmula simples não vale: divida a região em duas partes (e, no limite, as duas partes se sobrepõem ao girar; só conta a maior).

::::example{n="A"}
#### Eixo no meio de uma parábola: $f(x)=3x-x^2$ em torno de $x=-1$ (slide)

1. A região fica entre $x=0$ e $x=3$ (raízes de $3x-x^2$) e toda à **direita** do eixo $x=-1$.

2. Raio da casca: $r=x-(-1)=x+1$. Altura: $h=3x-x^2$.

3. Montagem:

   $$
   V=2\pi\int_0^3 (x+1)(3x-x^2)\,dx
   $$

4. Multiplique: $(x+1)(3x-x^2)=3x^2-x^3+3x-x^2=-x^3+2x^2+3x$.

5. Antiderivada:

   $$
   V=2\pi\left[-\frac{x^4}{4}+\frac{2x^3}{3}+\frac{3x^2}{2}\right]_0^3
   =2\pi\left(-\frac{81}{4}+18+\frac{27}{2}\right)
   $$

6. Conta final: $-\frac{81}{4}+\frac{72}{4}+\frac{54}{4}=\frac{45}{4}$.

:::result
$$
V=2\pi\cdot\frac{45}{4}=\frac{45\pi}{2}\ \text{u.v.}
$$
:::
::::

## Região entre duas curvas {#duas-curvas kicker="altura = diferença" toc="Entre duas curvas"}

Se a região é limitada acima por $y=f(x)$ e abaixo por $y=g(x)$, a faixa vertical vai de $g(x)$ até $f(x)$ e a altura é $h=f(x)-g(x)$:

$$
V=2\pi\int_a^b |x-L|\,[\,f(x)-g(x)\,]\,dx
$$

Os limites $a$ e $b$ são as **interseções** das curvas (resolva $f(x)=g(x)$) ou retas verticais dadas.

::::example{n="B"}
#### Duas curvas, eixo à direita: $y=x^2$ e $y=x+2$ em torno de $x=3$ (slide)

1. **Interseções:** $x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow x=-1$ ou $x=2$. Nesse intervalo a reta está acima da parábola.

2. A região fica à **esquerda** de $x=3$, logo $r=3-x$. Altura: $h=(x+2)-x^2$.

3. Montagem e expansão:

   $$
   V=2\pi\int_{-1}^{2}(3-x)(x+2-x^2)\,dx=2\pi\int_{-1}^{2}\left(x^3-4x^2+x+6\right)dx
   $$

4. Antiderivada e limites:

   $$
   V=2\pi\left[\frac{x^4}{4}-\frac{4x^3}{3}+\frac{x^2}{2}+6x\right]_{-1}^{2}
   =2\pi\left(\frac{22}{3}+\frac{47}{12}\right)=2\pi\cdot\frac{135}{12}
   $$

:::result
$$
V=\frac{45\pi}{2}\ \text{u.v.}
$$

O slide escreve $\frac{135\pi}{6}$, que é o mesmo número: $\frac{135}{6}=\frac{45}{2}$.
:::
::::

## Eixo horizontal: cascas integradas em $y$ {#eixo-x kicker="giro em torno de x" toc="Giro em torno do eixo x"}

Se o giro é em torno do eixo $x$ (ou de $y=L$), as faixas devem ser **horizontais**, à altura $y$, e a casca tem raio $y$ (ou $|y-L|$). A "altura" da casca é o comprimento horizontal da faixa, $x_{dir}-x_{esq}$:

$$
V=2\pi\int_c^d |y-L|\,[\,p(y)-q(y)\,]\,dy
$$

::::example{n="C"}
#### $x=2y^3-2y^4$ e $x=0$ em torno do eixo $x$ (slide)

O slide integra de $y=0$ a $y=2$ com raio $y$ e altura $2y^3-2y^4$:

1. Montagem do slide:

   $$
   V=2\pi\int_0^2 y\,(2y^3-2y^4)\,dy=2\pi\int_0^2(2y^4-2y^5)\,dy
   $$

2. Antiderivada: $\left[\dfrac{2y^5}{5}-\dfrac{y^6}{3}\right]_0^2=\dfrac{64}{5}-\dfrac{64}{3}=-\dfrac{128}{15}$.

3. O resultado é **negativo**: $V=-\frac{256\pi}{15}$. Volume não pode ser negativo, e o slide troca o sinal para escrever $\frac{256\pi}{15}$.

:::warn[Atenção ao sinal da altura]
A altura da casca é um **comprimento**, portanto $\ge0$. Aqui $2y^3-2y^4=2y^3(1-y)$ é positiva em $(0,1)$ e **negativa** em $(1,2)$. A integral do slide cancela uma parte com a outra e dá só o valor *com sinal*. O volume geométrico é calculado com $|h|$:

$$
V=2\pi\left[\int_0^1 y(2y^3-2y^4)\,dy-\int_1^2 y(2y^3-2y^4)\,dy\right]=\frac{52\pi}{3}\ \text{u.v.}
$$

Esse é o valor correto **se a região for a faixa entre $x=0$ e a curva para todo $0\le y\le2$**. Se o enunciado pedir apenas $0\le y\le1$, o volume é $2\pi\left(\frac25-\frac13\right)=\frac{2\pi}{15}\cdot2=\frac{4\pi}{15}$... confira com $\int_0^1 (2y^4-2y^5)\,dy=\frac25-\frac13=\frac1{15}$, logo $V=\frac{2\pi}{15}$ u.v.
:::
::::

:::note[Lição]
Antes de integrar, **verifique se a altura muda de sinal** no intervalo. Se mudar, divida a integral nos pontos onde $h=0$ e some os valores absolutos.
:::

## Mais exemplos do slide {#exemplos kicker="exemplos" toc="Exemplos do slide"}

::::example{n="D"}
#### $y=\sqrt{x}$ em torno do eixo $y$, $0\le x\le4$

1. Faixa vertical em $x$; raio $r=x$; altura $h=\sqrt{x}=x^{1/2}$.

2. Montagem:

   $$
   V=\int_0^4 2\pi x\cdot x^{1/2}\,dx=2\pi\int_0^4 x^{3/2}\,dx
   $$

3. Antiderivada: $\displaystyle \int x^{3/2}dx=\frac{2}{5}x^{5/2}$, então

   $$
   V=2\pi\cdot\frac25\left[x^{5/2}\right]_0^4=\frac{4\pi}{5}\cdot 4^{5/2}=\frac{4\pi}{5}\cdot32
   $$

:::result
$$
V=\frac{128\pi}{5}\ \text{u.v.}
$$
:::
::::

::::example{n="E"}
#### $y=1+\dfrac{x^2}{4}$, $x=0$ e $x=2$, em torno do eixo $y$

1. Raio $x$, altura $1+\frac{x^2}{4}$:

   $$
   V=2\pi\int_0^2 x\left(1+\frac{x^2}{4}\right)dx=2\pi\int_0^2\left(x+\frac{x^3}{4}\right)dx
   $$

2. Antiderivada: $\dfrac{x^2}{2}+\dfrac{x^4}{16}$. Em $x=2$: $2+1=3$. Em $x=0$: $0$.

:::result
$$
V=2\pi\cdot3=6\pi\ \text{u.v.}
$$
:::
::::

::::example{n="F"}
#### Eixo horizontal deslocado: $y=x^2$, $0\le x\le2$, em torno de $y=-1$

A região está *sob* a parábola e *sobre* o eixo $x$, entre $x=0$ e $x=2$, e girará em torno da reta $y=-1$ (abaixo da região). O eixo é horizontal, então as cascas são **horizontais**, integramos em $y$.

1. A parábola vai de $(0,0)$ a $(2,4)$. Para cada $y\in[0,4]$ a faixa horizontal vai da curva $x=\sqrt{y}$ até a reta $x=2$.

2. **Raio:** $r=y-(-1)=y+1$. **Altura (comprimento horizontal):** $h=2-\sqrt{y}$.

3. Montagem e expansão:

   $$
   V=2\pi\int_0^4 (y+1)(2-\sqrt{y})\,dy=2\pi\int_0^4\left(2y-y^{3/2}+2-y^{1/2}\right)dy
   $$

4. Antiderivada: $y^2-\dfrac{2y^{5/2}}{5}+2y-\dfrac{2y^{3/2}}{3}$. Em $y=4$: $16-\dfrac{64}{5}+8-\dfrac{16}{3}$.

5. Conta final: $24-\frac{64}{5}-\frac{16}{3}=\frac{360-192-80}{15}=\frac{88}{15}$.

:::result
$$
V=2\pi\cdot\frac{88}{15}=\frac{176\pi}{15}\ \text{u.v.}
$$
:::
::::

::::example{n="G"}
#### $y=2x^2-x^3$ e $y=0$ em torno do eixo $y$

1. Raízes: $2x^2-x^3=x^2(2-x)=0\Rightarrow x=0,\,2$. Entre elas, $y\ge0$.

2. Raio $x$, altura $2x^2-x^3$:

   $$
   V=2\pi\int_0^2 x(2x^2-x^3)\,dx=2\pi\int_0^2(2x^3-x^4)\,dx
   $$

3. Antiderivada: $\dfrac{x^4}{2}-\dfrac{x^5}{5}$. Em $x=2$: $8-\dfrac{32}{5}=\dfrac85$.

:::result
$$
V=2\pi\cdot\frac85=\frac{16\pi}{5}\ \text{u.v.}
$$
:::
::::

## Casca ou anel? Como decidir {#decisao kicker="escolha do método" toc="Casca × anel"}

Ambos os métodos dão o **mesmo volume** quando os dois são aplicáveis. A escolha é questão de conveniência.

| Situação | Melhor método |
| --- | --- |
| Eixo horizontal, curva dada como $y=f(x)$ | disco/anel (integra em $x$) |
| Eixo vertical, curva dada como $x=g(y)$ | disco/anel (integra em $y$) |
| Eixo vertical, curva dada como $y=f(x)$ | **casca** (integra em $x$) |
| Eixo horizontal, curva dada como $x=g(y)$ | **casca** (integra em $y$) |
| Curva difícil ou impossível de inverter | **casca** |
| Região que precisa ser dividida em dois pedaços por um dos métodos | experimente o outro |

:::note[Regra prática]
Pergunte: *a fatia que eu desenho fica paralela ou perpendicular ao eixo?* Perpendicular $\Rightarrow$ disco ou anel. Paralela $\Rightarrow$ casca.
:::

::::example{n="H"}
#### O mesmo volume pelos dois métodos: $y=x^2$ e $y=2x$ em torno do eixo $y$

**Pelo anel (slide da Aula 08, resultado $\frac{8\pi}{3}$):**

1. Invertendo: $x=\sqrt{y}$ (parábola) e $x=\frac y2$ (reta). Interseções: $y=0$ e $y=4$. Entre elas, $\sqrt y\ge \frac y2$.

2. Raio externo $\sqrt y$, raio interno $\frac y2$:

   $$
   V=\pi\int_0^4\left[(\sqrt y)^2-\left(\frac y2\right)^2\right]dy=\pi\int_0^4\left(y-\frac{y^2}{4}\right)dy=\pi\left[\frac{y^2}{2}-\frac{y^3}{12}\right]_0^4=\pi\left(8-\frac{16}{3}\right)=\frac{8\pi}{3}
   $$

**Pela casca (sem inverter nada):**

1. Faixa vertical em $x$, com $0\le x\le2$ (interseção de $x^2=2x$). A reta está acima da parábola: altura $h=2x-x^2$. Raio $r=x$.

2. Montagem:

   $$
   V=2\pi\int_0^2 x(2x-x^2)\,dx=2\pi\int_0^2(2x^2-x^3)\,dx=2\pi\left[\frac{2x^3}{3}-\frac{x^4}{4}\right]_0^2=2\pi\left(\frac{16}{3}-4\right)
   $$

:::result
$$
V=2\pi\cdot\frac43=\frac{8\pi}{3}\ \text{u.v.}
$$

Os dois caminhos coincidem, como deveriam. A casca evitou inverter as duas curvas.
:::
::::

## Erros comuns {#erros kicker="atenção" toc="Erros comuns"}

:::warn[1. Raio errado em eixo deslocado]
Para o eixo $x=L$ o raio **não é** $x$: é $|x-L|$. Em $x=-1$ o raio é $x+1$; em $x=3$ (região à esquerda) é $3-x$.
:::

:::warn[2. Variável errada]
Na casca, a variável é a **perpendicular ao eixo**. Usar $dy$ com eixo vertical é um sinal claro de que se misturou com o método do anel.
:::

:::warn[3. Esquecer o fator $2\pi$ ou usar $\pi$]
Discos usam $\pi r^2$; cascas usam $2\pi\,r\,h$. Verifique sempre o $2$.
:::

:::warn[4. Altura com sinal negativo]
A altura é um comprimento. Se $f(x)-g(x)$ muda de sinal, divida a integral nos pontos de cruzamento.
:::

## Resumo em um relance {#resumo kicker="para revisar rápido" toc="Resumo rápido"}

:::cheat
#### fórmula geral

$$
V=2\pi\int (\text{raio})(\text{altura})\,d(\text{variável perpendicular ao eixo})
$$

#### eixo y ou x = L

$$
V=2\pi\int_a^b |x-L|\,[f(x)-g(x)]\,dx
$$

#### eixo x ou y = L

$$
V=2\pi\int_c^d |y-L|\,[p(y)-q(y)]\,dy
$$

#### decisão

Fatia **paralela** ao eixo $\Rightarrow$ casca. Fatia **perpendicular** $\Rightarrow$ disco ou anel.

#### conferência

Se der negativo, a altura mudou de sinal ou o raio foi tomado com sinal. Volume é sempre $\ge0$.
:::

:::next{kicker="continuando"}
#### Para praticar e seguir adiante

- [Exercícios deste tópico](/topicos/volumes-cascas-cilindricas/exercicios)
- [Comprimento de arco e área de superfície](/topicos/comprimento-arco-superficie)
- [Sequências e séries](/topicos/sequencias-series)
:::
