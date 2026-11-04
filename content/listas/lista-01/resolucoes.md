---
title: "Lista 01 resolvida"
eyebrow: "cálculo ii · lista de exercícios"
lede: "Resolução comentada, técnica por técnica, com uma tabela de fórmulas para consulta rápida."
formula: "\\int u\\,dv = uv - \\int v\\,du"
formulaLabel: "referência principal"
kind: "doc"
---

Resolução comentada, técnica por técnica, com a Tabela de Fórmulas incorporada como referência rápida. UFCG · Prof. Weiller F. Chaves Barboza

:::note
**Como usar este material:** cada seção começa explicando **o macete** — o critério de decisão para escolher a técnica certa — antes de qualquer conta. Em seguida vêm **exemplos totalmente resolvidos** (um para cada "sabor" de problema da lista) e, por fim, uma **tabela de referência rápida** classificando os itens restantes da lista pela técnica e pela montagem inicial, para você aplicar o mesmo raciocínio. Dado o tamanho da lista (mais de 130 itens!), nem todos os itens têm dedução linha-a-linha aqui — mas todos têm o caminho indicado. Peça qualquer item específico e eu resolvo por completo.
:::

## Tabela de Integrais e Derivadas Imediatas {#tabela}

Base de tudo o que vem a seguir — memorize estas antes de tentar qualquer técnica mais avançada. Toda técnica (partes, trig, substituição trigonométrica, frações parciais) serve apenas para *reduzir* uma integral difícil a uma destas formas imediatas.

### Derivadas imediatas

:::grid
- d/dx(x<sup>n</sup>) = n·x<sup>n−1</sup>
- d/dx(e<sup>x</sup>) = e<sup>x</sup>   d/dx(a<sup>x</sup>) = a<sup>x</sup>ln a
- d/dx(ln x) = 1/x
- d/dx(sen x) = cos x   d/dx(cos x) = −sen x
- d/dx(tg x) = sec²x   d/dx(cotg x) = −cossec²x
- d/dx(sec x) = sec x·tg x   d/dx(cossec x) = −cossec x·cotg x
- d/dx(sen<sup>−1</sup>x) = 1/√(1−x²)   d/dx(cos<sup>−1</sup>x) = −1/√(1−x²)
- d/dx(tg<sup>−1</sup>x) = 1/(1+x²)   d/dx(sec<sup>−1</sup>x) = 1/(|x|√(x²−1))
- d/dx(senh x) = cosh x   d/dx(cosh x) = senh x
- d/dx(tgh x) = sech²x
:::

### Integrais imediatas — formas básicas

:::grid
- ∫k dx = kx + C
- ∫x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C, n≠−1
- ∫dx/x = ln|x| + C
- ∫e<sup>x</sup> dx = e<sup>x</sup> + C   ∫a<sup>x</sup>dx = a<sup>x</sup>/ln a + C
- ∫sen x dx = −cos x + C   ∫cos x dx = sen x + C
- ∫sec²x dx = tg x + C   ∫cossec²x dx = −cotg x + C
- ∫sec x·tg x dx = sec x + C   ∫cossec x·cotg x dx = −cossec x + C
- ∫tg x dx = ln|sec x| + C   ∫cotg x dx = ln|sen x| + C
- ∫sec x dx = ln|sec x + tg x| + C
- ∫cossec x dx = −ln|cossec x + cotg x| + C
:::

### Envolvendo a²±x² e x²−a² (essenciais para substituição trigonométrica)

:::grid
- ∫dx/(a²+x²) = (1/a)·tg<sup>−1</sup>(x/a) + C
- ∫dx/√(a²−x²) = sen<sup>−1</sup>(x/a) + C
- ∫dx/√(a²+x²) = ln(x+√(a²+x²)) + C = senh<sup>−1</sup>(x/a)+C
- ∫dx/√(x²−a²) = ln|x+√(x²−a²)| + C
- ∫dx/(x√(x²−a²)) = (1/a)·sec<sup>−1</sup>|x/a| + C
- ∫√(a²−x²) dx = (x/2)√(a²−x²) + (a²/2)sen<sup>−1</sup>(x/a) + C
:::

### Reduções por partes (base do "macete cíclico" e "tabular")

:::grid
- ∫f g' dx = fg − ∫f' g dx
- ∫xe<sup>ax</sup>dx = e<sup>ax</sup>(ax−1)/a² + C
- ∫e<sup>ax</sup>sen(bx)dx = e<sup>ax</sup>(a·sen bx − b·cos bx)/(a²+b²) + C
- ∫e<sup>ax</sup>cos(bx)dx = e<sup>ax</sup>(a·cos bx + b·sen bx)/(a²+b²) + C
- ∫ln(ax) dx = x ln(ax) − x + C
- ∫sen<sup>−1</sup>x dx = x sen<sup>−1</sup>x + √(1−x²) + C
:::

### Reduções trigonométricas (potências)

:::grid
- ∫sen<sup>n</sup>ax dx = −sen<sup>n−1</sup>ax·cos ax/(na) + (n−1)/n ∫sen<sup>n−2</sup>ax dx
- ∫cos<sup>n</sup>ax dx = cos<sup>n−1</sup>ax·sen ax/(na) + (n−1)/n ∫cos<sup>n−2</sup>ax dx
- ∫tg<sup>n</sup>x dx = tg<sup>n−1</sup>x/(n−1) − ∫tg<sup>n−2</sup>x dx, n≠1
- ∫sec<sup>n</sup>x dx = sec<sup>n−2</sup>x·tg x/(n−1) + (n−2)/(n−1)∫sec<sup>n−2</sup>x dx
:::

:::note
Tabela completa (integrais 1–157, formas algébricas, geométricas, limites e regras de diferenciação) está no PDF "Tabela de Fórmulas" que você enviou — aqui destacamos só o subconjunto usado na Lista 01.
:::

## Integração por Partes {#ibp}

:::note
**A fórmula:** ∫u dv = uv − ∫v du.<br /><br /> **O macete (regra LIATE):** escolha **u** seguindo a prioridade **L**ogarítmica &gt; **I**nversa trigonométrica &gt; **A**lgébrica (polinômio) &gt; **T**rigonométrica &gt; **E**xponencial. Quem aparece primeiro nessa lista vira *u*; o resto (junto com *dx*) vira *dv*. Motivo: ln e arc-funções não têm antiderivada simples, então é melhor *derivá-las* (elas viram algo mais simples); exponenciais e trigonométricas são fáceis de integrar repetidamente, então é melhor jogá-las para *dv*.<br /><br /> **Método tabular (quando u é polinômio):** monte duas colunas — D (derivadas sucessivas de u até chegar a 0) e I (integrais sucessivas de dv) — e some os produtos diagonais com sinais alternados +, −, +, −, .... Isso substitui repetir "por partes" várias vezes.<br /><br /> **Caso cíclico (e<sup>ax</sup>·sen/cos):** aplicar partes duas vezes traz a integral original de volta. Chame a integral de *I*, isole *I* algebricamente dos dois lados da equação.
:::

::::example{n="1a"}
#### ∫x sen(x/2) dx — u algébrico, dv trigonométrico

1. u = x, dv = sen(x/2)dx → du = dx, v = −2cos(x/2)
2. = −2x cos(x/2) + 2∫cos(x/2) dx

:::result
= −2x·cos(x/2) + 4·sen(x/2) + C
:::
::::

::::example{n="1c"}
#### ∫t²cos t dt — método tabular (polinômio grau 2)

| D (deriva) | I (integra) |
| --- | --- |
| t² (+) | cos t |
| 2t (−) | sen t |
| 2 (+) | −cos t |
| 0 | −sen t |

:::result
= t²sen t + 2t cos t − 2sen t + C
:::
::::

::::example{n="1e"}
#### ∫₀¹ x eˣ dx — integral definida, u=x

1. u = x, dv = eˣdx → v = eˣ
2. = \[x eˣ\]₀¹ − ∫₀¹ eˣ dx = (e−0) − (e−1)

:::result
= 1
:::
::::

::::example{n="1i"}
#### ∫arctg(y) dy — inversa trigonométrica: u = arctg y, dv = dy

1. du = dy/(1+y²), v = y
2. = y·arctg y − ∫ y/(1+y²) dy

:::result
= y·arctg(y) − ½ln(1+y²) + C
:::
::::

::::example{n="1q"}
#### ∫e<sup>θ</sup>sen(θ) dθ — caso cíclico

1. I = e<sup>θ</sup>senθ − ∫e<sup>θ</sup>cosθ dθ  (por partes, u=senθ)
2. ∫e<sup>θ</sup>cosθ dθ = e<sup>θ</sup>cosθ + I  (por partes de novo, u=cosθ)
3. I = e<sup>θ</sup>senθ − e<sup>θ</sup>cosθ − I  ⇒ 2I = e<sup>θ</sup>(senθ−cosθ)

:::result
I = ½e<sup>θ</sup>(senθ − cosθ) + C
:::
::::

::::example{n="1s"}
#### ∫e<sup>2x</sup>cos(3x) dx — cíclico; use direto a fórmula geral

:::result
= e<sup>2x</sup>(2cos3x + 3sen3x)/13 + C
:::
::::

::::example{n="1v"}
#### ∫x(ln x)² dx — u = (ln x)² (logarítmica manda), dv = x dx

1. u=(ln x)², v=x²/2, du = 2ln x/x dx
2. = (x²/2)(ln x)² − ∫x·ln x dx
3. ∫x ln x dx = (x²/2)ln x − x²/4  (partes de novo)

:::result
= (x²/2)(ln x)² − (x²/2)ln x + x²/4 + C
:::
::::

::::example{n="1w"}
#### ∫cos(√x) dx — primeiro **substituição** t=√x, depois partes

1. t=√x ⇒ x=t², dx=2t dt: integral vira 2∫t·cos t dt
2. ∫t cos t dt = t sen t + cos t  (por partes simples)

:::result
= 2√x·sen(√x) + 2cos(√x) + C
:::
::::

::::example{n="1u, 1x"}
#### ∫cos(√x)/√x dx e ∫e<sup>√x</sup>/√x dx — **pegadinha**: não precisam de partes! São substituição pura (t=√x, dt = dx/(2√x))

:::result
∫cos(√x)/√x dx = 2sen(√x)+C     ∫e<sup>√x</sup>/√x dx = 2e<sup>√x</sup>+C
:::
::::

::::example{n="1y"}
#### ∫sen(3x)cos(x/2) dx — outra pegadinha: produto sen·cos com argumentos diferentes usa **fórmula de produto-para-soma**, não partes: senA cosB = ½\[sen(A−B)+sen(A+B)\]

:::result
= ½∫\[sen(2,5x) + sen(3,5x)\]dx = −cos(2,5x)/5 − cos(3,5x)/7 + C
:::
::::

::::example{n="1z"}
#### ∫₀^(π/2) x³cos(2x) dx — tabular, 3 rodadas

| D | I |
| --- | --- |
| x³ (+) | cos2x |
| 3x² (−) | ½sen2x |
| 6x (+) | −¼cos2x |
| 6 (−) | −⅛sen2x |
| 0 | 1/16 cos2x |

F(x) = (x³/2)sen2x + (3x²/4)cos2x − (3x/4)sen2x − (3/8)cos2x. Em x=π/2 (sen π=0, cosπ=−1): F(π/2) = −3π²/16 + 3/8. Em x=0: F(0) = −3/8.

:::result
= F(π/2) − F(0) = 3/4 − 3π²/16 ≈ −1,099
:::
::::

::::example{n="1α"}
#### ∫₂^(2/√3)... (limites 2/√3 a 2) t·arcsec(t) dt — inversa trig: u = arcsec t, dv = t dt

1. v = t²/2, du = dt/(|t|√(t²−1))
2. ∫t·arcsec t dt = (t²/2)arcsec t − ½∫t/√(t²−1) dt = (t²/2)arcsec t − ½√(t²−1)
3. Em t=2: 2·(π/3) − ½√3    Em t=2/√3: (2/3)·(π/6) − ½·(√3/3)

:::result
= 5π/9 − √3/3 ≈ 1,168
:::
::::

::::example{n="1β"}
#### ∫₀^(1/√2) 2y·arcsen(y²) dy — substituição w=y² primeiro (dw=2y dy) reduz tudo a ∫arcsen(w)dw

1. ∫arcsen(w)dw = w·arcsen w + √(1−w²)  (fórmula imediata da tabela, item 103)
2. Limites em w: y=0→w=0; y=1/√2→w=1/2

:::result
= \[w·arcsen w + √(1−w²)\]₀^(1/2) = π/12 + √3/2 − 1 ≈ 0,128
:::
::::

### Complemento — resoluções completas dos demais itens da questão 1

Os exemplos anteriores mostram as técnicas principais. Aqui estão as contas que faltavam, mantendo a numeração da lista original.

::::example{n="1b"}
#### 1b) $\int\theta\cos(\pi\theta)\,d\theta$

1. Escolha $u=\theta$ e $dv=\cos(\pi\theta)d\theta$. Então $du=d\theta$.
2. Para integrar $dv$, use $v=\frac1\pi\sin(\pi\theta)$, pois $\frac{d}{d\theta}\sin(\pi\theta)=\pi\cos(\pi\theta)$.
3. Por partes:
   $\int\theta\cos(\pi\theta)d\theta=\frac{\theta\sin(\pi\theta)}\pi-\frac1\pi\int\sin(\pi\theta)d\theta.$
4. Como $\int\sin(\pi\theta)d\theta=-\frac1\pi\cos(\pi\theta)$, obtemos:

:::result
$\displaystyle\int\theta\cos(\pi\theta)d\theta=\frac{\theta\sin(\pi\theta)}\pi+\frac{\cos(\pi\theta)}{\pi^2}+C.$
:::
::::
::::example{n="1d"}
#### 1d) $\int x^3\ln x\,dx$

1. Pela regra LIATE, escolha $u=\ln x$ e $dv=x^3dx$.
2. Então $du=\frac{dx}{x}$ e $v=\frac{x^4}{4}$.
3. Aplicando partes:
   $\int x^3\ln x\,dx=\frac{x^4}{4}\ln x-\frac14\int x^3dx.$
4. A integral restante é $\frac{x^4}{4}$:

:::result
$\displaystyle\int x^3\ln x\,dx=\frac{x^4}{4}\ln x-\frac{x^4}{16}+C.$
:::
::::
::::example{n="1f"}
#### 1f) $\int xe^{3x}\,dx$

1. Escolha $u=x$, $dv=e^{3x}dx$. Logo $du=dx$ e $v=\frac13e^{3x}$.
2. Por partes:
   $\int xe^{3x}dx=\frac{x e^{3x}}3-\frac13\int e^{3x}dx.$
3. Como $\int e^{3x}dx=\frac13e^{3x}$:

:::result
$\displaystyle\int xe^{3x}dx=\frac{e^{3x}(3x-1)}9+C.$
:::
::::
::::example{n="1g"}
#### 1g) $\int x^2e^{-x}\,dx$

1. Primeira aplicação: $u=x^2$, $dv=e^{-x}dx$. Assim, $du=2x dx$ e $v=-e^{-x}$.
2. Portanto,
   $I=-x^2e^{-x}+2\int xe^{-x}dx.$
3. Na integral restante, use partes novamente: $u=x$, $dv=e^{-x}dx$, de modo que $v=-e^{-x}$:
   $\int xe^{-x}dx=-xe^{-x}-e^{-x}.$
4. Substituindo:
   $I=-x^2e^{-x}-2xe^{-x}-2e^{-x}.$

:::result
$\displaystyle\int x^2e^{-x}dx=-e^{-x}(x^2+2x+2)+C.$
:::
::::
::::example{n="1h"}
#### 1h) $\int(x^2-2x+1)e^{2x}\,dx$

1. Como o fator polinomial diminui de grau ao derivar, use integração por partes repetida (ou tabular). Procuramos uma primitiva na forma $e^{2x}P(x)$, em que $P$ é quadrático.
2. Pela regra do produto, $(e^{2x}P)'=e^{2x}(2P+P')$. Queremos $2P+P'=x^2-2x+1$.
3. Escreva $P=ax^2+bx+c$. Então $2P+P'=2ax^2+(2b+2a)x+(2c+b)$.
4. Igualando coeficientes: $2a=1$, $2b+2a=-2$ e $2c+b=1$. Daí $a=\frac12$, $b=-\frac32$ e $c=\frac54$.

:::result
$\displaystyle\int(x^2-2x+1)e^{2x}dx=e^{2x}\left(\frac{x^2}{2}-\frac{3x}{2}+\frac54\right)+C.$
:::
::::
::::example{n="1j"}
#### 1j) $\int x\sec^2x\,dx$

1. Escolha $u=x$ e $dv=\sec^2x dx$. Então $du=dx$ e $v=\tan x$.
2. Por partes:
   $\int x\sec^2x dx=x\tan x-\int\tan x dx.$
3. Como $\int\tan x dx=-\ln|\cos x|$:

:::result
$\displaystyle\int x\sec^2x dx=x\tan x+\ln|\cos x|+C.$
:::
::::
::::example{n="1k"}
#### 1k) $\int x^3e^3\,dx$

1. O fator $e^3$ não depende de $x$: é uma constante, não uma exponencial variável.
2. Coloque-o para fora da integral e aplique a regra da potência:
   $e^3\int x^3dx=e^3\frac{x^4}{4}.$

:::result
$\displaystyle\int x^3e^3dx=\frac{e^3x^4}{4}+C.$
:::
::::
::::example{n="1l"}
#### 1l) $\int4x\sec^2(2x)\,dx$

1. Escolha $u=x$ e $dv=4\sec^2(2x)dx$. Como $\frac{d}{dx}\tan(2x)=2\sec^2(2x)$, temos $v=2\tan(2x)$.
2. Por partes:
   $I=2x\tan(2x)-2\int\tan(2x)dx.$
3. Como $\int\tan(2x)dx=-\frac12\ln|\cos(2x)|$, segue que $-2$ vezes essa integral é $+\ln|\cos(2x)|$.

:::result
$\displaystyle\int4x\sec^2(2x)dx=2x\tan(2x)+\ln|\cos(2x)|+C.$
:::
::::
::::example{n="1m"}
#### 1m) $\int p^4e^{-p}\,dp$

1. Aplique partes repetidamente, escolhendo em cada rodada o polinômio como $u$ e $e^{-p}dp$ como $dv$. Cada derivação reduz o grau de $p$ e cada integração mantém o fator $-e^{-p}$.
2. As rodadas produzem:
   $I=-p^4e^{-p}+4\int p^3e^{-p}dp,$
   $=-p^4e^{-p}-4p^3e^{-p}+12\int p^2e^{-p}dp,$
   $=-p^4e^{-p}-4p^3e^{-p}-12p^2e^{-p}+24\int pe^{-p}dp.$
3. A última integral é $\int pe^{-p}dp=-pe^{-p}-e^{-p}$.

:::result
$\displaystyle\int p^4e^{-p}dp=-e^{-p}(p^4+4p^3+12p^2+24p+24)+C.$
:::
::::
::::example{n="1n"}
#### 1n) $\int(x^2-5x)e^x\,dx$

1. Procure uma primitiva da forma $e^xP(x)$, com $P(x)=ax^2+bx+c$.
2. Pela regra do produto, $(e^xP)'=e^x(P+P')$. Precisamos de $P+P'=x^2-5x$.
3. Como $P+P'=ax^2+(2a+b)x+(b+c)$, igualamos coeficientes: $a=1$, $2a+b=-5$ e $b+c=0$.
4. Logo $a=1$, $b=-7$ e $c=7$.

:::result
$\displaystyle\int(x^2-5x)e^x dx=e^x(x^2-7x+7)+C.$
:::
::::
::::example{n="1o"}
#### 1o) $\int x^5e^x\,dx$

1. Use partes tabulares: derivadas de $x^5$ são $x^5,5x^4,20x^3,60x^2,120x,120,0$; integrais sucessivas de $e^x$ continuam iguais a $e^x$.
2. Multiplique em diagonais alternando os sinais:
   $I=e^x(x^5-5x^4+20x^3-60x^2+120x-120).$

:::result
$\displaystyle\int x^5e^x dx=e^x(x^5-5x^4+20x^3-60x^2+120x-120)+C.$
:::
::::
::::example{n="1p"}
#### 1p) $\int t^2e^{4t}\,dt$

1. Primeira rodada: $u=t^2$, $dv=e^{4t}dt$, então $du=2t dt$ e $v=\frac14e^{4t}$.
   $I=\frac{t^2e^{4t}}4-\frac12\int te^{4t}dt.$
2. Na integral restante, use $u=t$, $dv=e^{4t}dt$: 
   $\int te^{4t}dt=\frac{te^{4t}}4-\frac1{16}e^{4t}.$
3. Substituindo na primeira expressão e simplificando:

:::result
$\displaystyle\int t^2e^{4t}dt=e^{4t}\left(\frac{t^2}{4}-\frac{t}{8}+\frac1{32}\right)+C.$
:::
::::
::::example{n="1r"}
#### 1r) $\int e^{-y}\cos y\,dy$

1. Seja $I=\int e^{-y}\cos y\,dy$. Faça partes com $u=\cos y$ e $dv=e^{-y}dy$: $v=-e^{-y}$.
   $I=-e^{-y}\cos y-\int e^{-y}\sin y\,dy.$
2. Chame $J=\int e^{-y}\sin y\,dy$. Por partes, $u=\sin y$, $dv=e^{-y}dy$:
   $J=-e^{-y}\sin y+I.$
3. Substitua $J$ na primeira igualdade: $I=-e^{-y}\cos y+e^{-y}\sin y-I$. Portanto $2I=e^{-y}(\sin y-\cos y)$.

:::result
$\displaystyle\int e^{-y}\cos y\,dy=\frac{e^{-y}}2(\sin y-\cos y)+C.$
:::
::::
::::example{n="1t"}
#### 1t) $\int e^{-2x}\sin(2x)\,dx$

Use a fórmula cíclica, que pode ser obtida aplicando partes duas vezes:
$\int e^{ax}\sin(bx)dx=\frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)+C.$
Com $a=-2$ e $b=2$, temos $a^2+b^2=8$.

:::result
$\displaystyle\int e^{-2x}\sin(2x)dx=-\frac{e^{-2x}}4(\sin2x+\cos2x)+C.$
:::
::::
::::example{n="1u"}
#### 1u) $\int\frac{\cos(\sqrt{x})}{\sqrt{x}}\,dx$

1. Substitua $t=\sqrt{x}$, de modo que $x=t^2$ e $dx=2t dt$.
2. Como $\sqrt{x}=t$, os fatores $t$ se cancelam:
   $\int\frac{\cos t}{t}\,2t dt=2\int\cos t dt.$

:::result
$\displaystyle\int\frac{\cos(\sqrt{x})}{\sqrt{x}}dx=2\sin(\sqrt{x})+C.$
:::
::::
::::example{n="1x"}
#### 1x) $\int\frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx$

1. Faça $t=\sqrt{x}$, então $x=t^2$ e $dx=2t dt$.
2. Substituindo:
   $\int\frac{e^t}{t}\,2t dt=2\int e^t dt.$

:::result
$\displaystyle\int\frac{e^{\sqrt{x}}}{\sqrt{x}}dx=2e^{\sqrt{x}}+C.$
:::
::::

### Aplicações (área e volume) com integração por partes

::::example{n="2a"}
#### Área sob y = x sen x, 0≤x≤π (x sen x ≥0 nesse intervalo)

:::result
A = ∫₀^π x sen x dx = \[−x cos x + sen x\]₀^π = π
:::
::::

::::example{n="4"}
#### Volume: região do 1º quadrante sob y=eˣ, 0≤x≤ln2, girada em torno de x=ln2 — método das cascas: V=2π∫(raio)(altura)dx

1. V = 2π∫₀^(ln2) (ln2 − x)eˣ dx = 2π\[ln2·∫eˣdx − ∫x eˣdx\]
2. ∫₀^(ln2)eˣdx = 1; ∫₀^(ln2) x eˣ dx = 2ln2 − 1 (por partes)

:::result
V = 2π(1 − ln2)
:::
::::

### Guia rápido — demais itens da questão 1

| Item | Técnica | Montagem (u, dv) |
| --- | --- | --- |
| b) θcos(πθ) | Partes simples | u=θ, dv=cos(πθ)dθ |
| d) x³ln x | Partes simples (log manda) | u=ln x, dv=x³dx |
| f) xe³ˣ | Partes simples | u=x, dv=e³ˣdx |
| g) x²e⁻ˣ | Tabular (2 rodadas) | u=x², dv=e⁻ˣdx |
| h) (x²−2x+1)e²ˣ | Tabular (2 rodadas) | u=x²−2x+1 |
| j) x·sec²x | Partes simples | u=x, dv=sec²x dx (v=tg x) |
| l) 4x·sec²(2x) | Partes simples | u=x, dv=sec²(2x)dx (v=½tg2x) |
| k) x³e³ | Pegadinha! e³ é **constante** | ∫x³e³dx = e³·x⁴/4 + C (regra da potência) |
| m) p⁴e⁻ᵖ | Tabular (4 rodadas) | u=p⁴ |
| n) (x²−5x)eˣ | Tabular (2 rodadas) | u=x²−5x |
| o) x⁵eˣ | Tabular (5 rodadas) | u=x⁵ — mecânico, só repetir |
| p) t²e⁴ᵗ | Tabular (2 rodadas) | u=t² |
| r) e⁻ʸcos y | Cíclico | igual ao 1q |
| t) e⁻²ˣsen(2x) | Cíclico / fórmula direta | a=−2, b=2 na fórmula da tabela |
| 2b, 2c) área de x sen x noutros intervalos | Mesma antiderivada de 1a/2a | cuidado com o sinal de x sen x em cada intervalo |
| 3a,b,c) área de x cos x | Partes: u=x, dv=cos x dx | ∫x cos x dx = cos x + x sen x |
| 5) y=e⁻ˣ girada em x=1 (a: eixo y / b: x=1) | Discos/cascas + partes | ∫x e⁻ˣdx aparece nas duas |
| 6) y=cos x girada (a: eixo y / b: x=π/2) | Cascas + partes | ∫x cos x dx aparece |

## Integrais Trigonométricas {#trig}

:::note
**O macete central: olhe a paridade dos expoentes.**<br /><br /> **∫sen<sup>m</sup>x cos<sup>n</sup>x dx —** se <u>m é ímpar</u>, separe um fator sen x, troque o resto sen<sup>par</sup>x = (1−cos²x)<sup>...</sup> e substitua u=cos x. Se <u>n é ímpar</u>, faça o espelho: separe cos x, use cos²x=1−sen²x, u=sen x. Se <u>ambos pares</u>, não há substituição direta — use as identidades de redução de potência: sen²x = (1−cos2x)/2, cos²x = (1+cos2x)/2.<br /><br /> **∫tg<sup>m</sup>x sec<sup>n</sup>x dx —** se <u>n é par</u> (≥2), separe sec²x, escreva o resto sec<sup>par</sup>x=(1+tg²x)<sup>...</sup>, substitua u=tg x. Se <u>m é ímpar</u>, separe sec x·tg x, escreva tg<sup>par</sup>x=(sec²x−1)<sup>...</sup>, substitua u=sec x. Se m par e n ímpar, use a fórmula de redução para sec<sup>n</sup>x (integração por partes escondida). Mesma lógica vale para cotg/cossec, trocando os papéis.<br /><br /> **Produtos sen(ax)cos(bx), sen(ax)sen(bx), cos(ax)cos(bx) com a≠b:** nunca por partes — use as fórmulas de produto-para-soma (tabela, item 69).
:::

::::example{n="7e"}
#### ∫sen³x dx — potência ímpar de seno

1. sen³x = sen x·(1−cos²x); u=cos x, du=−sen x dx

:::result
= −cos x + cos³x/3 + C
:::
::::

::::example{n="7g"}
#### ∫sen⁵x dx — mesma ideia, potência maior

1. sen⁵x = sen x(1−cos²x)²; u=cos x

:::result
= −cos x + (2/3)cos³x − (1/5)cos⁵x + C
:::
::::

::::example{n="7j"}
#### ∫sen³x cos³x dx — ambos ímpares: escolha qualquer um para sobrar

1. sen³x = sen x(1−cos²x); u=cos x
2. = −∫(1−u²)u³ du = −u⁴/4 + u⁶/6

:::result
= cos⁶x/6 − cos⁴x/4 + C
:::
::::

::::example{n="7k"}
#### ∫cos³(2x)sen⁵(2x) dx — cos ímpar, mesmo com argumento 2x

1. cos³(2x)=cos(2x)(1−sen²2x); u=sen(2x), du=2cos(2x)dx

:::result
= sen⁶(2x)/12 − sen⁸(2x)/16 + C
:::
::::

::::example{n="7u"}
#### ∫sec²x·tg x dx — u=tg x direto

:::result
= tg²x/2 + C
:::
::::

::::example{n="7w"}
#### ∫sec³x·tg x dx — m=1 ímpar: separe sec·tg, u=sec x

:::result
= sec³x/3 + C
:::
::::

::::example{n="7x"}
#### ∫sec⁴x·tg²x dx — n=4 par: separe sec², u=tg x

1. sec⁴x=(1+tg²x)sec²x; ∫(1+u²)u² du

:::result
= tg³x/3 + tg⁵x/5 + C
:::
::::

::::example{n="7z"}
#### ∫\_(π/4)^(π/2) cossec⁴x dx — espelho de sec par: separe cossec², u=cotg x

1. cossec⁴x=(1+cotg²x)cossec²x → −∫(1+u²)du = −cotg x − cotg³x/3
2. Em π/2: 0. Em π/4: −(1+1/3)=−4/3

:::result
= 0−(−4/3) = 4/3
:::
::::

::::example{n="7α"}
#### ∫sec⁶x dx — n=6 par

:::result
= tg x + (2/3)tg³x + (1/5)tg⁵x + C
:::
::::

::::example{n="7β"}
#### ∫tg⁵x dx — potência ímpar de tg: tg⁵x=tg³x(sec²x−1), reduz recursivamente

1. ∫tg³x sec²x dx = tg⁴x/4
2. ∫tg³x dx = tg²x/2 − ln|sec x|

:::result
= tg⁴x/4 − tg²x/2 + ln|sec x| + C
:::
::::

::::example{n="7q"}
#### ∫₀^(2π) √\[(1−cos x)/2\] dx — identidade de arco-metade: (1−cosx)/2 = sen²(x/2)

1. √\[...\] = |sen(x/2)|; em \[0,2π\], x/2∈\[0,π\] ⇒ sen(x/2)≥0

:::result
= ∫₀^(2π) sen(x/2)dx = \[−2cos(x/2)\]₀^(2π) = 4
:::
::::

::::example{n="7r"}
#### ∫₀^π √(1−cos2x) dx — 1−cos2x = 2sen²x

:::result
= √2∫₀^π|senx|dx = √2·2 = 2√2
:::
::::

::::example{n="7s"}
#### ∫₀^π √(1−sen²t) dt = ∫₀^π|cos t|dt — cuidado: cos t troca de sinal em π/2

:::result
= ∫₀^(π/2)cos t dt − ∫\_(π/2)^π cos t dt = 1+1 = 2
:::
::::

### Guia rápido — demais itens da questão 7

| Item | Técnica |
| --- | --- |
| a) cos2x, b) 3sen(x/3) | Imediatas (fórmulas 63/64 da tabela) |
| c) cos³x senx, d) sen⁴(2x)cos2x | Regra da potência direta: u = cos x (ou sen 2x), n único fator ímpar já isolado |
| f) cos³x | Espelho do 7e: u=sen x |
| h) ∫₀^π sen⁵(x/2)dx, i) ∫₀^(π/6) 3cos⁵(3x)dx | Mesmo macete de 7e/7g, depois avaliar limites |
| l) 7cos⁷t | Potência ímpar, u=sen t |
| m) ∫₀^π 8sen⁴(2πx)dx | Potência par: reduzir com sen² =(1−cos2θ)/2 duas vezes |
| n) 16sen²x cos²y dy | **Pegadinha:** sen²x é constante em relação a y! Só integrar 16sen²x·∫cos²y dy |
| o) ∫₀^π 8sen⁴y cos²y dy | Ambos pares: identidades de redução |
| p) 8cos³(2θ)sen(2θ)dθ | u = cos(2θ) direto (regra da potência) |
| t) sen²x/√(1−cosx), limites π/3 a π/2 | 1−cosx=2sen²(x/2); simplificar antes de integrar |
| v) sec x·tg²x | tg²x=sec²x−1 → vira ∫sec³x−∫secx (usar redução de sec³) |
| y) ∫\_(π/6)^(π/3) cotg³x dx | Espelho de tg³: cotg³x=cotgx(cossec²x−1) |

## Substituição Trigonométrica {#trigsub}

:::note
**O macete: olhe qual expressão quadrática aparece dentro da raiz (ou no denominador) e escolha a substituição que a transforma num quadrado perfeito via identidade pitagórica.**

| Você vê... | Substitua | Vira | Identidade |
| --- | --- | --- | --- |
| a² − x² | x = a·senθ | a·cosθ | 1−sen²θ=cos²θ |
| a² + x² | x = a·tgθ | a·secθ | 1+tg²θ=sec²θ |
| x² − a² | x = a·secθ | a·tgθ | sec²θ−1=tg²θ |

Depois de resolver em θ, monte um triângulo retângulo com os lados x, a e a hipotenusa/cateto correspondente para "traduzir" a resposta de volta para x (ou use as identidades secθ=x/a etc.). **Antes de tudo**, sempre cheque se um truque algébrico mais simples resolve (como dividir polinômios, ou uma substituição u comum) — trig substitution é o último recurso quando a raiz não sai de outro jeito.
:::

::::example{n="12a"}
#### ∫dx/√(9+x²) — forma a²+x², a=3: x=3tgθ

1. dx=3sec²θdθ, √(9+x²)=3secθ
2. = ∫secθ dθ = ln|secθ+tgθ|

:::result
= ln|x + √(9+x²)| + C
:::
::::

::::example{n="12e"}
#### ∫√(25−t²) dt — forma a²−x², a=5: t=5senθ

:::result
= (t/2)√(25−t²) + (25/2)sen⁻¹(t/5) + C  (fórmula 45 da tabela)
:::
::::

::::example{n="12g"}
#### ∫√(y²−25)/y³ dy, y&gt;5 — forma x²−a², a=5: y=5secθ

1. dy=5secθtgθdθ, √(y²−25)=5tgθ
2. integral = (1/5)∫sen²θ dθ = θ/10 − sen2θ/20
3. secθ=y/5 ⇒ cosθ=5/y, senθ=√(y²−25)/y

:::result
= (1/10)sec⁻¹(y/5) − √(y²−25)/(2y²) + C
:::
::::

::::example{n="12k"}
#### ∫100dx/(36+25x²) — não precisa trig sub: é forma imediata a²+u² após fatorar

1. 36+25x² = 25(x²+(6/5)²); fórmula ∫dx/(a²+u²) direto

:::result
= (10/3)·arctg(5x/6) + C
:::
::::

::::example{n="12m"}
#### ∫dx/(x²−1)^(3/2) — forma x²−a², a=1: x=secθ

1. (x²−1)^(3/2)=tg³θ, dx=secθtgθdθ ⇒ integral = ∫cosθ/sen²θ dθ = −1/senθ
2. secθ=x ⇒ senθ=√(x²−1)/x

:::result
= −x/√(x²−1) + C
:::
::::

::::example{n="12q"}
#### ∫x²/(4+x²) dx — **pegadinha**: divisão algébrica é mais rápida que trig sub!

1. x²/(4+x²) = 1 − 4/(4+x²)

:::result
= x − 2·arctg(x/2) + C
:::
::::

::::example{n="12r"}
#### ∫x³dx/√(x²+4) — **pegadinha**: substituição algébrica u=x²+4 é mais rápida

1. u=x²+4, x²=u−4, x dx = du/2
2. ∫(u−4)/√u · du/2 = ½∫(u^(1/2) − 4u^(−1/2))du

:::result
= (1/3)(x²+4)^(3/2) − 4√(x²+4) + C
:::
::::

::::example{n="12s"}
#### ∫dx/(x²√(x²+1)) — forma a²+x², a=1: x=tgθ

:::result
= −√(x²+1)/x + C  (fórmula 41 da tabela, a=1)
:::
::::

### Guia rápido — demais itens da questão 12

| Item | Forma | Substituição |
| --- | --- | --- |
| b) 3dx/√(1+9x²) | a²+u², u=3x | Direto: ln(3x+√(1+9x²)) — ou 3x=tgθ |
| c) ∫₀² dx/(8+2x²) | Imediata após fatorar 2 | = (1/4)arctg(x/2) → resposta π/16 |
| d) ∫2dx/√(1−4x²) | a²−u², u=2x | arcsen(2x) → resposta π/4 |
| f) 5dx/√(25x²−9), x&gt;3/5 | x²−a² | 5x = 3secθ |
| h) 2dx/(x³√(x²−1)) | x²−a², a=1 | x=secθ |
| i) 8dw/(w²√(4−w²)) | a²−x², a=2 | w=2senθ |
| j) √(9−w²)/w² | a²−x², a=3 | w=3senθ (fórmula 48 da tabela) |
| l) ∫4x²dx/(1−x²)^(3/2) | a²−x², a=1 | x=senθ |
| n) (1−x²)^(3/2)/x⁶ | a²−x², a=1 | x=senθ |
| o) 8dx/(4x²+1)² | (a²+u²)², a=1/2 | Fórmula de redução 33 da tabela (ou x=½tgθ) |
| p) (1−r²)^(5/2)/r⁸ | a²−x² | r=senθ |
| t) igual ao item n) | — | — |

## Frações Parciais {#pfrac}

:::note
**O macete: fatore o denominador e escreva um termo por fator, seguindo as 4 regras:**

| Tipo de fator no denominador | Termo(s) na decomposição |
| --- | --- |
| Fator linear simples (x−a) | A/(x−a) |
| Fator linear repetido (x−a)<sup>k</sup> | A₁/(x−a) + A₂/(x−a)² + ... + A<sub>k</sub>/(x−a)<sup>k</sup> |
| Quadrático irredutível simples (x²+bx+c) | (Ax+B)/(x²+bx+c) |
| Quadrático irredutível repetido (x²+bx+c)<sup>k</sup> | (A₁x+B₁)/(...) + ... + (A<sub>k</sub>x+B<sub>k</sub>)/(...)<sup>k</sup> |

**Passo a passo:** (1) se o grau do numerador ≥ grau do denominador, faça a divisão de polinômios antes; (2) fatore o denominador completamente; (3) escreva a soma de frações com constantes A, B, C… incógnitas; (4) multiplique tudo pelo denominador comum e iguale coeficientes, ou substitua valores espertos de x (as raízes do denominador são as mais rápidas); (5) integre cada termo — os lineares viram logaritmos, os quadráticos irredutíveis viram arctg (+ eventualmente log).
:::

::::example{n="13a"}
#### (5x−13)/\[(x−3)(x−2)\] — fatores lineares distintos

1. 5x−13 = A(x−2)+B(x−3)
2. x=3: 2=A    x=2: −3=−B ⇒ B=3

:::result
= 2/(x−3) + 3/(x−2)
:::
::::

::::example{n="13b"}
#### (z+1)/\[z²(z−1)\] — fator repetido z² + fator simples

1. z+1 = Az(z−1) + B(z−1) + Cz²
2. z=0: B=−1    z=1: C=2    coef. z²: A+C=0 ⇒ A=−2

:::result
= −2/z − 1/z² + 2/(z−1)
:::
::::

::::example{n="13c"}
#### (5x−7)/(x²−3x+2) — fatore o denominador primeiro: (x−1)(x−2)

:::result
= 2/(x−1) + 3/(x−2)
:::
::::

::::example{n="14a"}
#### ∫dx/(1−x²) — (1−x)(1+x)

:::result
= ½ln|(1+x)/(1−x)| + C
:::
::::

::::example{n="14k"}
#### ∫dx/(x²−1)² — (x−1)²(x+1)², fator linear repetido dos dois lados

1. 1/(x²−1)² = (−1/4)/(x−1) + (1/4)/(x−1)² + (1/4)/(x+1) + (1/4)/(x+1)²

:::result
= (1/4)ln|(x+1)/(x−1)| − x/(2(x²−1)) + C
:::
::::

::::example{n="14o"}
#### ∫(y²+2y+1)/(y²+1)² dy — quadrático irredutível repetido; truque: separe o numerador

1. y²+2y+1 = (y²+1) + 2y ⇒ fração = 1/(y²+1) + 2y/(y²+1)²
2. ∫2y/(y²+1)² dy: u=y²+1 ⇒ = −1/(y²+1)

:::result
= arctg(y) − 1/(y²+1) + C
:::
::::

### Guia rápido — demais itens das questões 13 e 14

| Item | Fatoração / técnica |
| --- | --- |
| 13d) (t²+8)/(t²−5t+6) | Grau numerador = grau denom.: divida primeiro (quociente 1 + resto), depois frações parciais em (t−2)(t−3) |
| 14b) 1/(x²+2x) | x(x+2), lineares distintos |
| 14c) (x+4)/(x²+5x−6) | (x−1)(x+6) |
| 14d) (2x+1)/(x²−7x+12) | (x−3)(x−4) |
| 14e,f) limites definidos y/(y²−2y−3), (y+4)/(y²+y) | Fatorar e avaliar; cuidado com domínio (assíntotas dentro do intervalo — checar convergência) |
| 14g) 1/(t³+t²−2t) | t(t−1)(t+2), 3 fatores lineares |
| 14h) (x+3)/(2x³−8x) | 2x(x−2)(x+2) |
| 14i,j) x³/(x²+2x+1) ou x²−2x+1 | Grau num&gt;denom: divida primeiro; denom = (x±1)² |
| 14l) x²/\[(x−1)(x²+2x+1)\] | Atenção: x²+2x+1=(x+1)², então é (x−1)(x+1)² |
| 14m) 1/\[(x+1)(x²+1)\] | Linear × quadrático irredutível |
| 14n) (3t²+t+4)/(t³+t) | t(t²+1) |
| 14p) (8x²+8x+2)/(4x²+1) | Grau igual: divida primeiro (quociente constante 2) |
| 14q) (x²+4x+1)/\[(x−1)(x+1)(x+3)\] | 3 fatores lineares distintos |
| 14r) (6x+7)/(x+2)² | Fator repetido único: escreva 6x+7=6(x+2)−5 |
| 14s) (2x³−4x²−x−3)/(x²−2x−3) | Divida primeiro (grau num&gt;denom), depois (x−3)(x+1) |
| 14t) 1/\[x(x²−1)²\] | x·(x−1)²(x+1)², combina linear simples + repetidos |
| 15a,b) volumes de sólidos com y racional | Frações parciais dentro da integral de V=π∫y²dx (ou 2π∫xy dy) |

## Integrais Impróprias {#improp}

:::note
**Duas situações tornam uma integral "imprópria":**<br /> **(1) Limite infinito** — troque ∞ por um parâmetro b e calcule o limite: ∫ₐ^∞ f dx = lim<sub>b→∞</sub> ∫ₐ^b f dx.<br /> **(2) Descontinuidade no integrando** (dentro do intervalo ou num extremo) — isole o ponto ruim c com um parâmetro que tende a c e calcule o limite lateral: ∫ₐ^c f dx = lim<sub>t→c⁻</sub>∫ₐ^t f dx.<br /><br /> **Se o limite existir (finito) ⇒ a integral converge. Se não existir (±∞ ou oscila) ⇒ diverge.**<br /><br /> **Quando não dá para calcular exatamente**, use os testes de comparação: **p-teste** (∫₁^∞ dx/x<sup>p</sup> converge se p&gt;1, diverge se p≤1; e ∫₀¹dx/x<sup>p</sup> converge se p&lt;1) e **comparação direta/limite**: se 0≤f≤g e ∫g converge, ∫f converge; se f≥g≥0 e ∫g diverge, ∫f diverge.
:::

::::example{n="16"}
#### ∫₁^∞ ln(x)/x² dx — a área é finita? — limite infinito + por partes

1. u=ln x, dv=dx/x² ⇒ v=−1/x
2. = \[−ln x/x\]₁^∞ + ∫₁^∞ dx/x²
3. lim<sub>b→∞</sub> (−ln b/b) = 0 (ln b cresce mais devagar que b, regra de L'Hôpital)
4. ∫₁^∞ dx/x² = 1

:::result
Sim, é finita: valor = 1
:::
::::

::::example{n="17a"}
#### ∫₀^∞ dx/(x²+1) — imediata + limite

:::result
= lim<sub>b→∞</sub>\[arctg x\]₀^b = π/2
:::
::::

::::example{n="17c"}
#### ∫₀¹ dx/√x — descontinuidade em x=0; p=1/2&lt;1 ⇒ converge (p-teste)

:::result
= lim<sub>a→0⁺</sub>\[2√x\]ₐ¹ = 2
:::
::::

::::example{n="17k"}
#### ∫₀^∞ 2e⁻<sup>θ</sup>sen θ dθ — limite infinito, usa fórmula cíclica de e·sen (seção 1)

1. ∫e⁻<sup>θ</sup>senθ dθ = −e⁻<sup>θ</sup>(senθ+cosθ)/2
2. 2×isso = −e⁻<sup>θ</sup>(senθ+cosθ); em θ→∞ tende a 0 (e⁻<sup>θ</sup>→0); em θ=0 vale −1

:::result
= 0−(−1) = 1
:::
::::

::::example{n="18a"}
#### ∫₀^(π/2) tg θ dθ — testar convergência — descontinuidade em π/2

1. ∫tgθ dθ = −ln|cosθ|; quando θ→π/2⁻, cosθ→0⁺ ⇒ −ln(cosθ)→+∞

:::result
Diverge
:::
::::

::::example{n="18i"}
#### ∫₁^∞ eˣ/x dx — testar convergência — comparação direta

1. Para x≥1, eˣ/x ≥ 1 (o integrando não decresce a zero, na verdade cresce)
2. ∫₁^∞ eˣ/x dx ≥ ∫₁^∞ 1 dx = ∞

:::result
Diverge (o integrando nem tende a 0)
:::
::::

::::example{n="19"}
#### Área sob y=e⁻ˣ no 1º quadrante — limite infinito

:::result
∫₀^∞ e⁻ˣ dx = \[−e⁻ˣ\]₀^∞ = 1
:::
::::

::::example{n="20"}
#### Lata de tinta infinita: y=1/x, x∈\[1,∞), girada em torno do eixo x — o paradoxo do pintor

1. **(a) Área da superfície:** S=2π∫₁^∞(1/x)√(1+1/x⁴)dx ≥ 2π∫₁^∞ dx/x = 2π·lim ln(b) → diverge
2. **(b) Volume:** V=π∫₁^∞(1/x)²dx = π\[−1/x\]₁^∞ = π

:::result
Superfície infinita, mas volume finito = π (o "paradoxo": a lata teria volume finito π mas não haveria tinta suficiente no universo para pintar sua superfície — na prática o paradoxo se resolve porque uma camada de tinta física tem espessura mínima).
:::
::::

### Guia rápido — demais itens das questões 17 e 18

| Item | Situação | Resultado / técnica |
| --- | --- | --- |
| 17b) ∫₁^∞ dx/x<sup>1,001</sup> | Limite infinito | p=1,001&gt;1 ⇒ converge (p-teste); valor = 1000 |
| 17d) ∫₀⁴ dx/√(4−x) | Descontínua em x=4 | converge, valor 4 |
| 17e) ∫₋₁¹ dy/y^(2/3) | Descontínua em y=0 (dentro do intervalo!) | quebrar em duas integrais; p=2/3&lt;1 ⇒ converge cada metade |
| 17f) ∫₋₈¹ dx/x^(1/3) | Descontínua em x=0 (dentro) | quebrar em duas; converge (potência ímpar amortece o polo) |
| 17g) ∫₀¹ dx/√(1−x²) | Descontínua em x=1 | = arcsen x → π/2, converge |
| 17h) ∫₁^∞ dx/(x√(x²−1)) | Limite infinito + descontínua em x=1 | = arcsec x → π/2 |
| 17i) ∫₀^∞ 16arctg(x)/(1+x²)dx | Limite infinito | u=arctg x → 8·(arctg x)² \|₀^∞ = 8(π/2)²=2π² |
| 17j) ∫₋∞⁰ θe<sup>θ</sup>dθ | Limite infinito | por partes; converge, valor −1 |
| 17l) ∫₋∞^∞ 2xe⁻ˣ²dx | Ambos limites infinitos | u=x²; função ímpar → valor 0 |
| 17m,n) ∫₀¹ x ln x dx, ∫₀¹−ln x dx | Descontínua em x=0 | por partes + limite; ambas convergem (−1/4 e 1) |
| 17p) ∫₋₁^∞ dθ/(θ²+5θ+6) | Descontínua em θ=−2 e θ=−3 (checar se estão no intervalo) + limite infinito | frações parciais: (θ+2)(θ+3) |
| 18b) ∫₀^(π/2) cotgθ dθ | Descontínua em θ=0 | diverge (análogo ao 18a) |
| 18c,d) sin/cos perto de singularidade em potência 1/3 | Comparação no limite | comparar com 1/√(π−θ) etc. — convergem (potência &lt;1) |
| 18e,f) x⁻²e⁻¹ᐟˣ, e⁻√x/√x perto de 0 | Comparação/substituição | convergem (a exponencial domina/decai) |
| 18g) ∫₀² dx/(1−x²) | Descontínua em x=1 (dentro!) | diverge (comparar com 1/(1−x)) |
| 18h) ∫₁^∞ dx/(x³+1) | Limite infinito | comparar com 1/x³ → converge |
| 18j) ∫ₑ^∞ ln(ln x)dx | Limite infinito | ln(ln x)→∞ (devagar) ⇒ diverge |
| 18k) ∫₁^∞ dx/√(eˣ−x) | Limite infinito | eˣ domina x ⇒ comparar com e⁻ˣ/² ⇒ converge |
| 18l) ∫₋∞^∞ dx/(eˣ+e⁻ˣ) | Ambos limites infinitos | = arctg(eˣ) → converge, valor π/2 |
| 18m) ∫₂^∞ x dx/√(x⁴−1) | Limite infinito | comparar com 1/x ⇒ diverge |
| 18n,o) \[2+cosx\]/x, \[1+senx\]/x² de π a ∞ | Comparação | n) diverge (comparar 1/x); o) converge (comparar 1/x²) |
| 18p) ∫₀^π dt/√(t+sen t) | Descontínua em t=0 | perto de 0, t+sen t ≈ 2t ⇒ comparar com 1/√t ⇒ converge |

:::note
Documento gerado a partir da Lista 02 (Cálculo II — UFCG, Prof. Weiller F. Chaves Barboza).
:::
