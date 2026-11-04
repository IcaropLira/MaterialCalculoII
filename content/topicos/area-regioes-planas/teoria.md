---
title: "Área de regiões planas"
number: "06"
summary: "Integral definida como área (Riemann), TFC e substituição com troca de limites, área com sinal × área geométrica, área entre curvas (em x e em y), elipse, trabalho de uma força variável — com 19 exercícios resolvidos."
status: "available"
eyebrow: "cálculo ii · aplicações da integral · aula 07"
lede: "A integral definida deixa de ser só uma conta e vira uma medida: a área de uma região do plano. Aqui você aprende a montar essa integral, a respeitar os sinais e a escolher entre integrar em x ou em y."
formula: "A=\\int_a^b \\big[f(x)-g(x)\\big]\\,dx"
---

## Integral definida como área {#riemann kicker="a ideia central" toc="Integral definida = área"}

Esta aula é uma **aplicação** do conceito de integral definida. Vimos que a integral definida de $f$ em $[a,b]$ é um limite de **somas de Riemann**:

$$
\int_a^b f(x)\,dx=\lim_{\|P\|\to 0}\sum_{k=1}^{n} f(c_k)\,\Delta x_k
$$

Cada parcela $f(c_k)\,\Delta x_k$ é a área de um retângulo fino de altura $f(c_k)$ e base $\Delta x_k$. Somando todos os retângulos e fazendo-os ficarem cada vez mais finos, obtemos a **área da região** limitada:

- superiormente pelo gráfico de $f$;
- inferiormente pelo eixo das abscissas;
- à esquerda pela reta $x=a$;
- à direita pela reta $x=b$.

:::formula[Área sob uma curva (f ≥ 0)]
$$
A=\int_a^b f(x)\,dx \qquad (f(x)\ge 0 \text{ em } [a,b])
$$
:::

:::note[Unidades]
A área é medida em **unidades de área** (u.a.), e o volume em **unidades de volume** (u.v.). Se $x$ e $y$ estiverem em metros, a área estará em $\text{m}^2$.
:::

## Revisão rápida: TFC, propriedades e substituição {#revisao kicker="ferramentas que a lista usa" toc="TFC e propriedades"}

Para calcular áreas você precisa de três coisas já conhecidas — vale refrescar.

:::formula[Teorema Fundamental do Cálculo (parte 2)]
Se $F'(x)=f(x)$ em $[a,b]$ e $f$ é contínua, então
$$
\int_a^b f(x)\,dx=F(b)-F(a)=\Big[F(x)\Big]_a^b
$$
:::

### Propriedades da integral definida

| Propriedade | Fórmula |
| --- | --- |
| Linearidade | $\int_a^b (\alpha f+\beta g)\,dx=\alpha\int_a^b f\,dx+\beta\int_a^b g\,dx$ |
| Aditividade nos limites | $\int_a^b f\,dx=\int_a^c f\,dx+\int_c^b f\,dx$ |
| Inversão dos limites | $\int_b^a f\,dx=-\int_a^b f\,dx$ |
| Limites iguais | $\int_a^a f\,dx=0$ |
| Simetria (par) | $f$ par: $\int_{-a}^a f\,dx=2\int_0^a f\,dx$ |
| Simetria (ímpar) | $f$ ímpar: $\int_{-a}^a f\,dx=0$ |
| Comparação | $f\ge g\Rightarrow \int_a^b f\,dx\ge\int_a^b g\,dx$ |

### Antiderivadas imediatas mais usadas nas listas

| Função | Antiderivada |
| --- | --- |
| $x^n\ (n\neq -1)$ | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac1x$ | $\ln\lvert x\rvert$ |
| $e^{kx}$ | $\dfrac{e^{kx}}{k}$ |
| $\sin(kx)$ | $-\dfrac{\cos(kx)}{k}$ |
| $\cos(kx)$ | $\dfrac{\sin(kx)}{k}$ |
| $\sec^2 x$ | $\tan x$ |
| $\cos^2 x,\ \sin^2 x$ | $\dfrac x2\pm\dfrac{\sin 2x}{4}$ (use $\cos^2 x=\frac{1+\cos 2x}{2}$) |

## Substituição em integral definida {#substituicao kicker="a Lista 02 começa por aqui" toc="Substituição com limites"}

Na integral **indefinida**, depois de integrar em $u$ é preciso voltar para $x$. Na **definida** há um atalho elegante: troque também os **limites** e não volte para $x$.

:::formula[Regra da substituição (integral definida)]
Se $u=g(x)$ tem derivada contínua e $f$ é contínua,
$$
\int_a^b f\big(g(x)\big)\,g'(x)\,dx=\int_{g(a)}^{g(b)} f(u)\,du
$$
:::

::::example
#### Substituição com troca de limites — $\int_0^1 x\,e^{x^2}\,dx$

1. Procure a função "de dentro" cuja derivada aparece multiplicando: $u=x^2$, logo $du=2x\,dx$, ou seja, $x\,dx=\tfrac12\,du$.
2. Troque os limites usando $u=x^2$:
   - quando $x=0$, $u=0$;
   - quando $x=1$, $u=1$.
3. Reescreva e integre:

   $$
   \int_0^1 x\,e^{x^2}\,dx=\frac12\int_0^1 e^{u}\,du=\frac12\Big[e^u\Big]_0^1=\frac{e-1}{2}
   $$

:::result
$\displaystyle\int_0^1 x\,e^{x^2}\,dx=\dfrac{e-1}{2}\approx 0{,}859$
:::
::::

:::warn[Erro clássico]
Se você **não** trocar os limites, precisa voltar para $x$ antes de substituir os valores originais. Misturar as duas coisas — integrar em $u$ e usar os limites de $x$ — dá resposta errada.
:::

## Área sob uma curva: dois exemplos da aula {#sob-curva kicker="montando a integral" toc="Área sob uma curva"}

::::example
#### Área de um triângulo — $f(x)=ax$, $a>0$, de $x=0$ a $x=b$

1. A região é um triângulo de base $b$ (distância de $0$ a $b$) e altura $f(b)=ab$.
2. Montamos a integral:

   $$
   A=\int_0^b ax\,dx=\left[\frac{ax^2}{2}\right]_0^b=\frac{a b^2}{2}-0=\frac{ab^2}{2}
   $$

3. **Conferência com a Geometria Plana:** base $=b$, altura $h=ab$:

   $$
   \frac{b\cdot h}{2}=\frac{b\cdot ab}{2}=\frac{ab^2}{2}
   $$

:::result
$A=\dfrac{ab^2}{2}$ u.a. — exatamente a fórmula $\dfrac{\text{base}\times\text{altura}}{2}$. A integral reproduz a geometria que já conhecíamos.
:::
::::

::::example
#### Substituição simples — área sob $y=x\sqrt{x^2+5}$, de $x=0$ a $x=2$

1. A função é positiva no primeiro quadrante, então $A=\int_0^2 x\sqrt{x^2+5}\,dx$.
2. Faça $u=x^2+5$, $du=2x\,dx$. Os limites viram $u(0)=5$ e $u(2)=9$.
3. Reescreva ($x\,dx=\frac12du$) e integre:

   $$
   A=\frac12\int_5^9 u^{1/2}\,du=\frac12\cdot\frac{u^{3/2}}{3/2}\Big|_5^9=\frac13\left(9^{3/2}-5^{3/2}\right)
   $$

4. Calcule: $9^{3/2}=27$ e $5^{3/2}=5\sqrt5$.

:::result
$A=\dfrac{27-5\sqrt5}{3}\approx 5{,}27$ u.a.
:::
::::

## Área com sinal × área geométrica {#sinal kicker="o cuidado mais importante" toc="Sinal da integral"}

A integral $\int_a^b f(x)\,dx$ calcula uma **área com sinal**: as partes acima do eixo $x$ contam positivo, e as partes **abaixo** contam negativo. Já a **área geométrica** é sempre positiva.

:::formula[Área geométrica entre o gráfico e o eixo x]
$$
A=\int_a^b \lvert f(x)\rvert\,dx
$$
Na prática: encontre onde $f$ troca de sinal, divida o intervalo nesses pontos e integre cada pedaço com o sinal correto.
:::

::::example
#### O exemplo do "zero" — região entre $y=x^3$, $x=-1$ e $x=1$

1. Calculando direto, sem pensar:

   $$
   \int_{-1}^1 x^3\,dx=\left[\frac{x^4}{4}\right]_{-1}^{1}=\frac14-\frac14=0
   $$

   Uma região com área $0$? Claramente há algo errado: a região existe!
2. **Esboce.** $y=x^3$ é negativa para $x<0$ (região $A_1$, abaixo do eixo) e positiva para $x>0$ (região $A_2$, acima do eixo). Como $x^3$ é ímpar, $A_1$ e $A_2$ são simétricas em relação à origem e têm **a mesma área** — uma conta negativo e a outra positivo, e elas se anulam.
3. Para a área geométrica, separe no zero de $f$ ($x=0$) e inverta o sinal onde $f<0$:

   $$
   A=\int_{-1}^0 \left(-x^3\right)dx+\int_0^1 x^3\,dx=\left[-\frac{x^4}{4}\right]_{-1}^{0}+\left[\frac{x^4}{4}\right]_0^1=\frac14+\frac14
   $$

:::result
$A=\dfrac12$ u.a. — e **não** $0$. A integral com sinal vale $0$; a área geométrica vale $\frac12$.
:::
::::

:::warn[Regra de ouro]
Antes de integrar, pergunte: "**a função muda de sinal em $[a,b]$?**" Se sim, resolva $f(x)=0$ e divida a integral.
:::

## Área entre duas curvas {#entre-curvas kicker="a fórmula que mais cai" toc="Entre duas curvas"}

Se $f(x)\ge g(x)$ em $[a,b]$, a área entre os gráficos é "a de cima menos a de baixo":

:::formula[Área entre curvas — integrando em x]
$$
A=\int_a^b \big[f(x)-g(x)\big]\,dx \qquad (f\ge g)
$$
:::

Essa fórmula funciona **mesmo** se as curvas estiverem abaixo do eixo $x$ — o que importa é quem está por cima, pois a subtração desfaz os sinais. A área "sob uma curva" é só o caso $g(x)=0$.

### Integrando em y

Quando a região é limitada à esquerda e à direita por curvas $x=h(y)$ e $x=k(y)$, com $k\ge h$ em $[c,d]$, é mais natural usar fatias **horizontais**:

:::formula[Área entre curvas — integrando em y]
$$
A=\int_c^d \big[k(y)-h(y)\big]\,dy \qquad (\text{direita} - \text{esquerda})
$$
:::

### Quando dividir a região?

- As curvas **se cruzam** dentro do intervalo → quem está por cima troca; divida nos pontos de cruzamento.
- A fronteira de cima (ou de baixo) é formada por **duas expressões diferentes** (por exemplo, $y=\sqrt x$ e depois uma reta) → divida onde a expressão muda.
- Dividir em $x$ gera duas integrais, mas em $y$ gera uma? Então **troque a variável** de integração.

::::example
#### Parábola e reta — região entre $y=x^2$ e $y=x+6$

1. **Interseções:** $x^2=x+6\iff x^2-x-6=0\iff (x-3)(x+2)=0$, logo $x=-2$ e $x=3$.
2. **Quem está por cima?** Em $x=0$: $x+6=6>0=x^2$. A reta está por cima em todo $[-2,3]$.
3. Monte e integre:

   $$
   A=\int_{-2}^{3}\big(x+6-x^2\big)\,dx=\left[\frac{x^2}{2}+6x-\frac{x^3}{3}\right]_{-2}^{3}
   $$

4. Avalie em cada extremo:
   - em $x=3$: $\frac92+18-9=\frac{27}{2}$;
   - em $x=-2$: $2-12+\frac83=-\frac{22}{3}$.
5. Subtraia: $\frac{27}{2}+\frac{22}{3}=\frac{81+44}{6}=\frac{125}{6}$.

:::result
$A=\dfrac{125}{6}\approx 20{,}83$ u.a.
:::
::::

::::example
#### Mesma região, escolhendo a variável — $x=y^2$ e $y=x-2$

1. Reescreva a reta como $x=y+2$ e a parábola como $x=y^2$. Interseções: $y^2=y+2\iff y=-1$ ou $y=2$.
2. Em $y=0$: reta em $x=2$, parábola em $x=0$ → a reta está à **direita**.
3. Integrando em $y$ (uma só integral):

   $$
   A=\int_{-1}^{2}\big(y+2-y^2\big)\,dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}=\frac{9}{2}
   $$

4. Se integrássemos em $x$, a região de baixo ($y=-\sqrt x$) e a de cima ($y=\sqrt x$) mudariam de expressão em $x=1$ e $x=4$: bem mais trabalho.

:::result
$A=\dfrac92$ u.a. — integrar em $y$ economizou uma divisão em duas integrais.
:::
::::

## Roteiro para qualquer problema de área {#roteiro kicker="método passo a passo" toc="Roteiro de resolução"}

1. **Esboce** as curvas (mesmo um rascunho). Marque os pontos importantes: interseções com os eixos e entre as curvas.
2. **Ache as interseções** igualando as curvas. Elas serão (em geral) os limites de integração.
3. **Decida a variável:** fatias verticais ($dx$) se a região é "de cima para baixo" entre duas funções $y(x)$; fatias horizontais ($dy$) se é "da esquerda para a direita" entre $x(y)$.
4. **Identifique quem é a de cima** (ou da direita) em cada trecho; divida se houver troca.
5. **Monte** $A=\int(\text{cima}-\text{baixo})$, **integre** e **substitua os limites**.
6. **Confira:** área tem de ser positiva e fazer sentido com o esboço (compare com a área de um retângulo que contenha a região).

:::note[Simetria economiza conta]
Regiões simétricas em relação ao eixo $y$ (ou $x$): calcule só metade (ou um quarto) e multiplique. É exatamente o que faremos na elipse.
:::

## Área da elipse {#elipse kicker="o exemplo clássico" toc="Área da elipse"}

::::example
#### Mostre que a área de $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ é $\pi ab$

1. Isole $y$:

   $$
   \frac{y^2}{b^2}=1-\frac{x^2}{a^2}\ \Rightarrow\ y^2=b^2\,\frac{a^2-x^2}{a^2}\ \Rightarrow\ y=\pm\frac{b}{a}\sqrt{a^2-x^2}
   $$

2. A elipse é simétrica em relação aos dois eixos. Calculamos só o primeiro quadrante (raiz positiva) e multiplicamos por $4$:

   $$
   A=4\int_0^a \frac{b}{a}\sqrt{a^2-x^2}\,dx=\frac{4b}{a}\int_0^a\sqrt{a^2-x^2}\,dx
   $$

3. Use a antiderivada (substituição trigonométrica $x=a\sin\theta$):

   $$
   \int\sqrt{a^2-x^2}\,dx=\frac{x\sqrt{a^2-x^2}}{2}+\frac{a^2}{2}\arcsin\frac xa+C
   $$

4. Aplique os limites $0$ e $a$. No limite superior o primeiro termo é $0$ e $\arcsin 1=\frac\pi2$; no inferior tudo é $0$:

   $$
   \int_0^a\sqrt{a^2-x^2}\,dx=\frac{a^2}{2}\cdot\frac{\pi}{2}=\frac{\pi a^2}{4}
   $$

   (é a área de um quarto de círculo de raio $a$ — confere!)
5. Multiplique: $A=\dfrac{4b}{a}\cdot\dfrac{\pi a^2}{4}=\pi ab$.

:::result
$A=\pi ab$ u.a. Com $a=b=r$ obtemos $\pi r^2$: a elipse generaliza a área do círculo.
:::
::::

## Aplicação à Física: trabalho {#trabalho kicker="a integral como área, de novo" toc="Trabalho de uma força"}

Quando um corpo percorre uma distância $d$ em linha reta sob uma força **constante** $F$, o trabalho é $W=F\cdot d$. No SI, força em newtons (N), distância em metros (m) e trabalho em **joules** ($1\,\text{J}=1\,\text{N}\cdot\text{m}$). Graficamente, $W$ é a **área do retângulo** sob o gráfico de $F$.

### Força variável

Se $F(x)$ é contínua e varia ao longo do eixo $x$, particione $[a,b]$ em subintervalos de comprimento $\Delta x_k$. Em cada um, $F$ é quase constante, igual a $F(c_k)$; o trabalho ali é aproximadamente $F(c_k)\,\Delta x_k$. Somando e passando ao limite (a mesma soma de Riemann!):

:::formula[Trabalho de uma força variável]
$$
W=\int_a^b F(x)\,dx
$$
:::

::::example
#### Força $F(x)=x^2+2x$ N, de $x=1$ m até $x=3$ m

1. $W=\displaystyle\int_1^3\left(x^2+2x\right)dx=\left[\frac{x^3}{3}+x^2\right]_1^3$.
2. Em $x=3$: $9+9=18$. Em $x=1$: $\frac13+1=\frac43$.
3. Subtraia: $18-\frac43=\frac{50}{3}$.

:::result
$W=\dfrac{50}{3}\approx 16{,}7$ J
:::
::::

::::example
#### Esvaziando um tanque cônico por bombeamento

**Enunciado.** Um tanque tem a forma de um cone circular invertido (vértice para baixo) com altura $10$ m e raio da base $4$ m. Está cheio de água até $8$ m de altura. Quanto trabalho é necessário para bombear toda a água pela borda superior? Densidade da água: $1000\ \text{kg/m}^3$; $g=9{,}8\ \text{m/s}^2$.

1. **Eixo.** Seja $x$ a profundidade, medida a partir do topo do tanque (borda superior, $x=0$) para baixo. A água ocupa de $x=2$ (superfície da água, já que $10-8=2$) até $x=10$ (vértice).
2. **Fatia.** Corte a água em lâminas horizontais de espessura $dx$ na profundidade $x$. Cada lâmina é um disco de raio $r(x)$. Por semelhança de triângulos (raio $4$ no topo para $10$ de altura):

   $$
   \frac{r}{4}=\frac{10-x}{10}\ \Rightarrow\ r=\frac25\,(10-x)
   $$

3. **Volume da lâmina:**

   $$
   dV=\pi r^2\,dx=\frac{4\pi}{25}(10-x)^2\,dx
   $$

4. **Massa e peso:** $m=\text{densidade}\times V$ e $F=mg$:

   $$
   dF=1000\cdot 9{,}8\cdot\frac{4\pi}{25}(10-x)^2\,dx=1568\pi\,(10-x)^2\,dx
   $$

5. **Trabalho da lâmina:** elevá-la a distância $x$ custa $dW=x\,dF$:

   $$
   W=1568\pi\int_2^{10} x\,(10-x)^2\,dx=1568\pi\int_2^{10}\left(100x-20x^2+x^3\right)dx
   $$

6. Integre:

   $$
   W=1568\pi\left[50x^2-\frac{20x^3}{3}+\frac{x^4}{4}\right]_2^{10}
   $$

7. Em $x=10$: $5000-\frac{20000}{3}+2500=\frac{2500}{3}$. Em $x=2$: $200-\frac{160}{3}+4=\frac{452}{3}$. A diferença é $\frac{2048}{3}$.
8. Então $W=1568\pi\cdot\dfrac{2048}{3}=\dfrac{3\,211\,264\,\pi}{3}$.

:::result
$W\approx 3{,}36\times10^{6}$ J (a aula arredonda para $3{,}4\times10^6$ J).
:::
::::

## Resumo para consulta rápida {#resumo kicker="cola" toc="Resumo"}

:::cheat
#### Área sob a curva

$A=\int_a^b f(x)\,dx$ se $f\ge0$; se muda de sinal, $A=\int_a^b\lvert f\rvert\,dx$ (divida nos zeros).

#### Entre duas curvas (em x)

$A=\int_a^b[\text{cima}-\text{baixo}]\,dx$. Limites = interseções; divida se as curvas se cruzam.

#### Entre duas curvas (em y)

$A=\int_c^d[\text{direita}-\text{esquerda}]\,dy$. Útil quando $x=x(y)$ é mais simples.

#### Substituição definida

$u=g(x)$: troque os limites por $g(a)$ e $g(b)$ e **não** volte para $x$.

#### Elipse

$A=\pi ab$ (círculo: $\pi r^2$).

#### Trabalho

$W=\int_a^bF(x)\,dx$; bombeamento: $W=\int(\text{distância})\cdot(\text{peso da lâmina})$.
:::

:::cta{label="Ir para os exercícios" href="/topicos/area-regioes-planas/exercicios"}
#### Treine com 19 exercícios resolvidos passo a passo

Do básico (área sob parábola) ao bombeamento de água.
:::

:::next{kicker="continuando a série"}
#### Próximo passo

- [Volumes: seções, discos e arruelas](/topicos/volumes-secoes-discos-aneis)
- [Integrais impróprias](/topicos/integrais-improprias)
- [Sequências e séries](/topicos/sequencias-series)
:::
