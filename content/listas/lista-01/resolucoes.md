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

### Questão 1 — complementos com desenvolvimento completo

### 1b) $\displaystyle\int\theta\cos(\pi\theta)\,d\theta$

Integração por partes: $u=\theta$, $dv=\cos(\pi\theta)d\theta$. Então $du=d\theta$ e $v=\sin(\pi\theta)/\pi$:

$$I=\frac{\theta\sin(\pi\theta)}{\pi}
-\frac1\pi\int\sin(\pi\theta)d\theta.$$

Como $\int\sin(\pi\theta)d\theta=-\cos(\pi\theta)/\pi$,

:::result{kind="answer"}
$\boxed{\frac{\theta\sin(\pi\theta)}{\pi}+\frac{\cos(\pi\theta)}{\pi^2}+C}$
:::

### 1d) $\displaystyle\int x^3\ln x\,dx$

Escolha $u=\ln x$ e $dv=x^3dx$. Assim, $du=dx/x$ e $v=x^4/4$:

$$I=\frac{x^4}{4}\ln x-\frac14\int x^3dx
=\frac{x^4}{4}\ln x-\frac{x^4}{16}+C.$$

:::result{kind="answer"}
$\boxed{\frac{x^4}{4}\ln x-\frac{x^4}{16}+C},\quad x>0$
:::

### 1f) $\displaystyle\int xe^{3x}\,dx$

Tome $u=x$ e $dv=e^{3x}dx$. Então $du=dx$ e $v=e^{3x}/3$:

$$I=\frac{xe^{3x}}3-\frac13\int e^{3x}dx
=\frac{xe^{3x}}3-\frac{e^{3x}}9+C.$$

:::result{kind="answer"}
$\boxed{e^{3x}\left(\frac x3-\frac19\right)+C}$
:::

### 1g) $\displaystyle\int x^2e^{-x}\,dx$

Integre por partes duas vezes. Primeiro, $u=x^2$, $dv=e^{-x}dx$, de modo que $v=-e^{-x}$:

$$I=-x^2e^{-x}+2\int xe^{-x}dx.$$

Na integral restante, use $u=x$, $dv=e^{-x}dx$:

$$\int xe^{-x}dx=-xe^{-x}-e^{-x}.$$

Substituindo,

:::result{kind="answer"}
$\boxed{-e^{-x}(x^2+2x+2)+C}$
:::

### 1h) $\displaystyle\int(x^2-2x+1)e^{2x}\,dx$

Procure uma primitiva da forma $e^{2x}Q(x)$, com $Q(x)=ax^2+bx+c$. Pela regra do produto,

$$\frac{d}{dx}(e^{2x}Q)=e^{2x}(Q'+2Q).$$

Queremos $Q'+2Q=x^2-2x+1$. Como

$$Q'+2Q=2ax^2+(2a+2b)x+(b+2c),$$

igualamos coeficientes:

$$2a=1,\quad 2a+2b=-2,\quad b+2c=1.$$

Daí $a=1/2$, $b=-3/2$ e $c=5/4$.

:::result{kind="answer"}
$\boxed{e^{2x}\left(\frac{x^2}{2}-\frac{3x}{2}+\frac54\right)+C}$
:::

### 1j) $\displaystyle\int x\sec^2x\,dx$

Use $u=x$, $dv=\sec^2x\,dx$, logo $du=dx$ e $v=\tan x$:

$$I=x\tan x-\int\tan x\,dx.$$

Como $\int\tan x\,dx=-\ln|\cos x|$,

:::result{kind="answer"}
$\boxed{x\tan x+\ln|\cos x|+C}$
:::

### 1k) $\displaystyle\int x^3e^3\,dx$

Atenção: $e^3$ é uma constante, não uma função de $x$. Portanto,

$$I=e^3\int x^3dx.$$

:::result{kind="answer"}
$\boxed{\frac{e^3x^4}{4}+C}$
:::

### 1m) $\displaystyle\int p^4e^{-p}\,dp$

Aplicando integração por partes repetidamente (ou o método tabular), cada derivação reduz o grau do polinômio e cada integração de $e^{-p}$ acrescenta um sinal negativo:

$$I=-p^4e^{-p}+4\int p^3e^{-p}dp,$$

$$=-p^4e^{-p}-4p^3e^{-p}+12\int p^2e^{-p}dp,$$

$$=-p^4e^{-p}-4p^3e^{-p}-12p^2e^{-p}
+24\int pe^{-p}dp,$$

e $\int pe^{-p}dp=-pe^{-p}-e^{-p}$. Assim,

:::result{kind="answer"}
$\boxed{-e^{-p}(p^4+4p^3+12p^2+24p+24)+C}$
:::

### 1n) $\displaystyle\int(x^2-5x)e^x\,dx$

Procure uma primitiva $e^xQ(x)$, com $Q=ax^2+bx+c$. Como

$$\frac{d}{dx}(e^xQ)=e^x(Q+Q'),$$

precisamos de $Q+Q'=x^2-5x$. Comparando coeficientes,

$$a=1,\quad b+2a=-5,\quad c+b=0,$$

logo $a=1$, $b=-7$, $c=7$.

:::result{kind="answer"}
$\boxed{e^x(x^2-7x+7)+C}$
:::

### 1o) $\displaystyle\int x^5e^x\,dx$

Integração por partes repetida (derivando $x^5$ e integrando $e^x$):

$$I=e^x x^5-5\int x^4e^xdx$$
$$=e^x(x^5-5x^4)+20\int x^3e^xdx$$
$$=e^x(x^5-5x^4+20x^3)-60\int x^2e^xdx$$
$$=e^x(x^5-5x^4+20x^3-60x^2)+120\int xe^xdx.$$

Como $\int xe^xdx=e^x(x-1)$,

:::result{kind="answer"}
$\boxed{e^x(x^5-5x^4+20x^3-60x^2+120x-120)+C}$
:::

### 1p) $\displaystyle\int t^2e^{4t}\,dt$

Primeira integração por partes: $u=t^2$, $dv=e^{4t}dt$, então $v=e^{4t}/4$:

$$I=\frac{t^2e^{4t}}4-\frac12\int te^{4t}dt.$$

Na integral restante, use $u=t$, $dv=e^{4t}dt$:

$$\int te^{4t}dt=\frac{te^{4t}}4-\frac{e^{4t}}{16}.$$

Substituindo,

:::result{kind="answer"}
$\boxed{e^{4t}\left(\frac{t^2}{4}-\frac t8+\frac1{32}\right)+C}$
:::

### 1r) $\displaystyle\int e^{-y}\cos y\,dy$

Esta é uma integral cíclica. Seja $I=\int e^{-y}\cos y\,dy$. Integrando por partes com $u=e^{-y}$ e $dv=\cos y\,dy$,

$$I=e^{-y}\sin y+\int e^{-y}\sin y\,dy.$$

Chame $J=\int e^{-y}\sin y\,dy$. Outra integração por partes, agora com $u=e^{-y}$ e $dv=\sin y\,dy$, dá

$$J=-e^{-y}\cos y-I.$$

Substitua em $I$:

$$I=e^{-y}\sin y-e^{-y}\cos y-I.$$

Logo, $2I=e^{-y}(\sin y-\cos y)$.

:::result{kind="answer"}
$\boxed{\frac{e^{-y}}2(\sin y-\cos y)+C}$
:::

### 1t) $\displaystyle\int e^{-2x}\sin(2x)\,dx$

Use a fórmula obtida por duas integrações por partes, ou verifique por derivação:

$$\int e^{ax}\sin(bx)dx
=\frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)+C.$$

Com $a=-2$ e $b=2$,

:::result{kind="answer"}
$\boxed{-\frac{e^{-2x}}4(\sin2x+\cos2x)+C}$
:::


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

### Questão 7 — complementos com desenvolvimento completo

### 7a) $\displaystyle\int\cos(2x)\,dx$

Faça $u=2x$, de modo que $du=2dx$ e $dx=du/2$:

$$\int\cos(2x)dx=\frac12\int\cos u\,du
=\frac12\sin u+C.$$

:::result{kind="answer"}
$\boxed{\frac12\sin(2x)+C}$
:::

### 7b) $\displaystyle\int_0^\pi3\sin(x/3)\,dx$

Uma primitiva é $-9\cos(x/3)$, pois a derivada de $\cos(x/3)$ traz o fator $1/3$:

$$I=\left[-9\cos\frac x3\right]_0^\pi
=-9\cos\frac\pi3+9\cos0
=-\frac92+9=\frac92.$$

:::result{kind="answer"}
$\boxed{9/2}$
:::

### 7c) $\displaystyle\int\cos^3x\sin x\,dx$

Tome $u=\cos x$, $du=-\sin x\,dx$. Então

$$I=-\int u^3du=-\frac{u^4}{4}+C.$$

:::result{kind="answer"}
$\boxed{-\frac14\cos^4x+C}$
:::

### 7d) $\displaystyle\int\sin^4(2x)\cos(2x)\,dx$

Tome $u=\sin(2x)$, logo $du=2\cos(2x)dx$ e $\cos(2x)dx=du/2$:

$$I=\frac12\int u^4du=\frac{u^5}{10}+C.$$

:::result{kind="answer"}
$\boxed{\frac1{10}\sin^5(2x)+C}$
:::

### 7f) $\displaystyle\int\cos^3x\,dx$

Separe um fator $\cos x$ e use $\cos^2x=1-\sin^2x$:

$$I=\int(1-\sin^2x)\cos x\,dx.$$

Com $u=\sin x$, $du=\cos x\,dx$:

$$I=\int(1-u^2)du=u-\frac{u^3}{3}+C.$$

:::result{kind="answer"}
$\boxed{\sin x-\frac13\sin^3x+C}$
:::

### 7h) $\displaystyle\int_0^\pi\sin^5(x/2)\,dx$

Faça $u=x/2$, então $dx=2du$ e os limites passam de $x=0,\pi$ para $u=0,\pi/2$:

$$I=2\int_0^{\pi/2}\sin^5u\,du.$$

Escreva $\sin^5u=(1-\cos^2u)^2\sin u$. Com $v=\cos u$, $dv=-\sin u\,du$:

$$\int_0^{\pi/2}\sin^5u\,du
=\int_0^1(1-v^2)^2dv
=\left[v-\frac{2v^3}{3}+\frac{v^5}{5}\right]_0^1
=1-\frac23+\frac15=\frac8{15}.$$

Logo, $I=16/15$.

:::result{kind="answer"}
$\boxed{16/15}$
:::

### 7i) $\displaystyle\int_0^{\pi/6}3\cos^5(3x)\,dx$

Faça $u=3x$, $du=3dx$. Os limites tornam-se $0$ e $\pi/2$:

$$I=\int_0^{\pi/2}\cos^5u\,du.$$

Escreva $\cos^5u=(1-\sin^2u)^2\cos u$ e use $v=\sin u$:

$$I=\int_0^1(1-v^2)^2dv
=\left[v-\frac{2v^3}{3}+\frac{v^5}{5}\right]_0^1
=\frac8{15}.$$

:::result{kind="answer"}
$\boxed{8/15}$
:::

### 7l) $\displaystyle\int7\cos^7t\,dt$

Separe $\cos t$ e transforme a potência par restante:

$$I=7\int(1-\sin^2t)^3\cos t\,dt.$$

Com $u=\sin t$, $du=\cos t\,dt$:

$$I=7\int(1-3u^2+3u^4-u^6)du.$$

Integrando termo a termo,

$$I=7u-7u^3+\frac{21}{5}u^5-u^7+C.$$

:::result{kind="answer"}
$\boxed{7\sin t-7\sin^3t+\frac{21}{5}\sin^5t-\sin^7t+C}$
:::

### 7m) $\displaystyle\int_0^\pi8\sin^4(2\pi x)\,dx$

Use duas vezes a redução de potência, ou diretamente

$$\sin^4u=\frac{3-4\cos(2u)+\cos(4u)}8.$$

Com $u=2\pi x$, o fator $8$ cancela o denominador:

$$I=\int_0^\pi\left(3-4\cos(4\pi x)+\cos(8\pi x)\right)dx.$$

As integrais dos cossenos são termos de seno que valem zero nos dois extremos, pois $4\pi x$ e $8\pi x$ são múltiplos de $2\pi$ em $x=0,\pi$. Resta

$$I=[3x]_0^\pi=3\pi.$$

:::result{kind="answer"}
$\boxed{3\pi}$
:::

### 7n) $\displaystyle\int16\sin^2x\cos^2y\,dy$

A integração é em relação a $y$. Portanto, $\sin^2x$ é constante:

$$I=16\sin^2x\int\cos^2y\,dy.$$

Use $\cos^2y=(1+\cos2y)/2$:

$$I=8\sin^2x\int(1+\cos2y)dy
=8\sin^2x\left(y+\frac12\sin2y\right)+C.$$

:::result{kind="answer"}
$\boxed{8y\sin^2x+4\sin^2x\sin(2y)+C}$
:::

### 7o) $\displaystyle\int_0^\pi8\sin^4y\cos^2y\,dy$

Use $\sin^4y\cos^2y=\sin^4y(1-\sin^2y)=\sin^4y-\sin^6y$:

$$I=8\left(\int_0^\pi\sin^4y\,dy-\int_0^\pi\sin^6y\,dy\right).$$

Pelas fórmulas de redução (ou pela expansão em múltiplos de ângulo),

$$\int_0^\pi\sin^4y\,dy=\frac{3\pi}{8},
\qquad
\int_0^\pi\sin^6y\,dy=\frac{5\pi}{16}.$$

Logo,

$$I=8\left(\frac{3\pi}{8}-\frac{5\pi}{16}\right)
=8\cdot\frac\pi{16}=\frac\pi2.$$

:::result{kind="answer"}
$\boxed{\pi/2}$
:::

### 7p) $\displaystyle\int8\cos^3(2\theta)\sin(2\theta)\,d\theta$

Faça $u=\cos(2\theta)$, então $du=-2\sin(2\theta)d\theta$:

$$I=-4\int u^3du=-u^4+C.$$

:::result{kind="answer"}
$\boxed{-\cos^4(2\theta)+C}$
:::

### 7t) $\displaystyle\int_{\pi/3}^{\pi/2}\frac{\sin^2x}{\sqrt{1-\cos x}}\,dx$

No intervalo dado, $\sin(x/2)>0$. Pela identidade $1-\cos x=2\sin^2(x/2)$,

$$\sqrt{1-\cos x}=\sqrt2\sin(x/2).$$

Como $\sin x=2\sin(x/2)\cos(x/2)$, o integrando simplifica para

$$\frac{4\sin^2(x/2)\cos^2(x/2)}
{\sqrt2\sin(x/2)}
=2\sqrt2\sin(x/2)\cos^2(x/2).$$

Faça $u=\cos(x/2)$, $du=-\frac12\sin(x/2)dx$:

$$I=-4\sqrt2\int_{\cos(\pi/6)}^{\cos(\pi/4)}u^2du
=-\frac{4\sqrt2}{3}\left[
\left(\frac{\sqrt2}{2}\right)^3-
\left(\frac{\sqrt3}{2}\right)^3
\right].$$

Simplificando,

$$I=\frac{\sqrt6}{2}-\frac23.$$

:::result{kind="answer"}
$\boxed{\frac{\sqrt6}{2}-\frac23}$
:::

### 7v) $\displaystyle\int\sec x\tan^2x\,dx$

Use $\tan^2x=\sec^2x-1$:

$$I=\int\sec^3x\,dx-\int\sec x\,dx.$$

As primitivas conhecidas são

$$\int\sec^3x\,dx
=\frac12\left(\sec x\tan x+\ln|\sec x+\tan x|\right),$$

$$\int\sec x\,dx=\ln|\sec x+\tan x|.$$

Subtraindo,

:::result{kind="answer"}
$\boxed{\frac12\sec x\tan x-\frac12\ln|\sec x+\tan x|+C}$
:::

### 7y) $\displaystyle\int_{\pi/6}^{\pi/3}\cot^3x\,dx$

Use $\cot^2x=\csc^2x-1$:

$$I=\int_{\pi/6}^{\pi/3}\cot x(\csc^2x-1)dx.$$

Uma primitiva é

$$F(x)=-\frac12\csc^2x-\ln(\sin x),$$

pois $d(\csc^2x)/dx=-2\csc^2x\cot x$ e $d(\ln\sin x)/dx=\cot x$.

Avalie:

$$F(\pi/3)=-\frac23-\ln\frac{\sqrt3}{2},$$

$$F(\pi/6)=-2-\ln\frac12.$$

Portanto,

$$I=F(\pi/3)-F(\pi/6)
=\frac43+\ln\frac{\sqrt3/2}{1/2}
=\frac43+\frac12\ln3.$$

:::result{kind="answer"}
$\boxed{\frac43+\frac12\ln3}$
:::


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

### Questão 12 — complementos com desenvolvimento completo

### 12b) $\displaystyle\int\frac{3\,dx}{\sqrt{1+9x^2}}$

Faça $u=3x$, então $du=3dx$:

$$I=\int\frac{du}{\sqrt{1+u^2}}.$$

Uma primitiva é $\ln|u+\sqrt{1+u^2}|$. Voltando a $x$,

:::result{kind="answer"}
$\boxed{\ln|3x+\sqrt{1+9x^2}|+C}$
:::

### 12c) $\displaystyle\int_0^2\frac{dx}{8+2x^2}$

Fatore $2$ no denominador:

$$I=\frac12\int_0^2\frac{dx}{x^2+4}
=\frac18\left[\arctan\left(\frac x2\right)\right]_0^2.$$

A primitiva usa $\int dx/(x^2+a^2)=(1/a)\arctan(x/a)$, com $a=2$:

$$I=\frac14\left[\arctan\left(\frac x2\right)\right]_0^2
=\frac14\cdot\frac\pi4.$$

:::result{kind="answer"}
$\boxed{\pi/16}$
:::

### 12d) $\displaystyle\int_0^{1/2}\frac{2\,dx}{\sqrt{1-4x^2}}$

Faça $u=2x$, então $du=2dx$. Os limites passam de $x=0,1/2$ para $u=0,1$:

$$I=\int_0^1\frac{du}{\sqrt{1-u^2}}
=\left[\arcsin u\right]_0^1=\frac\pi2.$$

:::result{kind="answer"}
$\boxed{\pi/2}$
:::

### 12f) $\displaystyle\int\frac{5\,dx}{\sqrt{25x^2-9}},\quad x>3/5$

Escreva a raiz como $3\sqrt{(5x/3)^2-1}$. Faça $u=5x/3$, de modo que $5dx=3du$:

$$I=\int\frac{3du}{3\sqrt{u^2-1}}
=\int\frac{du}{\sqrt{u^2-1}}.$$

Para $u>1$, uma primitiva é $\ln(u+\sqrt{u^2-1})$. Assim,

$$I=\ln\left(\frac{5x}{3}+\sqrt{\frac{25x^2}{9}-1}\right)+C.$$

Multiplicar o argumento do logaritmo por uma constante positiva só altera a constante de integração; podemos escrever a forma mais simples:

:::result{kind="answer"}
$\boxed{\ln\left(5x+\sqrt{25x^2-9}\right)+C}$
:::

### 12h) $\displaystyle\int\frac{2\,dx}{x^3\sqrt{x^2-1}}$

Como aparece $\sqrt{x^2-1}$ e $x>1$, use $x=\sec\theta$. Então

$$dx=\sec\theta\tan\theta\,d\theta,\qquad
\sqrt{x^2-1}=\tan\theta.$$

Substituindo,

$$I=2\int\frac{\sec\theta\tan\theta}
{\sec^3\theta\tan\theta}\,d\theta
=2\int\cos^2\theta\,d\theta.$$

Use $\cos^2\theta=(1+\cos2\theta)/2$:

$$I=\theta+\frac12\sin2\theta+C
=\theta+\sin\theta\cos\theta+C.$$

Como $\sec\theta=x$, temos $\theta=\operatorname{arcsec}x$, $\cos\theta=1/x$ e $\sin\theta=\sqrt{x^2-1}/x$.

:::result{kind="answer"}
$\boxed{\operatorname{arcsec}x+\frac{\sqrt{x^2-1}}{x^2}+C}$
:::

### 12i) $\displaystyle\int\frac{8\,dw}{w^2\sqrt{4-w^2}}$

Use $w=2\sin\theta$, com $dw=2\cos\theta\,d\theta$ e $\sqrt{4-w^2}=2\cos\theta$ (no intervalo principal):

$$I=\int\frac{8(2\cos\theta)}
{(4\sin^2\theta)(2\cos\theta)}d\theta
=2\int\csc^2\theta\,d\theta.$$

Como $\int\csc^2\theta\,d\theta=-\cot\theta$,

$$I=-2\cot\theta+C.$$

Da substituição, $\sin\theta=w/2$ e $\cos\theta=\sqrt{4-w^2}/2$, então $\cot\theta=\sqrt{4-w^2}/w$.

:::result{kind="answer"}
$\boxed{-\frac{2\sqrt{4-w^2}}w+C}$
:::

### 12j) $\displaystyle\int\frac{\sqrt{9-w^2}}{w^2}\,dw$

Use $w=3\sin\theta$. Então $dw=3\cos\theta\,d\theta$ e $\sqrt{9-w^2}=3\cos\theta$:

$$I=\int\frac{9\cos^2\theta}{9\sin^2\theta}d\theta
=\int\cot^2\theta\,d\theta.$$

Pela identidade $\cot^2\theta=\csc^2\theta-1$,

$$I=-\cot\theta-\theta+C.$$

Voltando a $w$,

$$\cot\theta=\frac{\sqrt{9-w^2}}w,\qquad
\theta=\arcsin(w/3).$$

:::result{kind="answer"}
$\boxed{-\frac{\sqrt{9-w^2}}w-\arcsin(w/3)+C}$
:::

### 12l) $\displaystyle\int_0^{\sqrt3/2}\frac{4x^2}{(1-x^2)^{3/2}}\,dx$

Faça $x=\sin\theta$. Então $dx=\cos\theta\,d\theta$ e $(1-x^2)^{3/2}=\cos^3\theta$. Os limites tornam-se $0$ e $\pi/3$:

$$I=4\int_0^{\pi/3}\frac{\sin^2\theta\cos\theta}{\cos^3\theta}d\theta
=4\int_0^{\pi/3}\tan^2\theta\,d\theta.$$

Como $\tan^2\theta=\sec^2\theta-1$,

$$I=4[\tan\theta-\theta]_0^{\pi/3}
=4\left(\sqrt3-\frac\pi3\right).$$

:::result{kind="answer"}
$\boxed{4\sqrt3-\frac{4\pi}{3}}$
:::

### 12n) $\displaystyle\int\frac{(1-x^2)^{3/2}}{x^6}\,dx$

Use $x=\sin\theta$, de modo que $dx=\cos\theta\,d\theta$ e $(1-x^2)^{3/2}=\cos^3\theta$:

$$I=\int\frac{\cos^3\theta}{\sin^6\theta}\cos\theta\,d\theta
=\int\frac{\cos^4\theta}{\sin^6\theta}d\theta
=\int\cot^4\theta\,\csc^2\theta\,d\theta.$$

Faça $u=\cot\theta$, $du=-\csc^2\theta\,d\theta$:

$$I=-\int u^4du=-\frac{u^5}{5}+C.$$

Como $\cot\theta=\sqrt{1-x^2}/x$,

:::result{kind="answer"}
$\boxed{-\frac{(1-x^2)^{5/2}}{5x^5}+C}$
:::

### 12o) $\displaystyle\int\frac{8\,dx}{(4x^2+1)^2}$

Aqui a substituição trigonométrica é possível, mas podemos usar diretamente a fórmula para $(1+u^2)^{-2}$. Faça $u=2x$, $dx=du/2$:

$$I=4\int\frac{du}{(1+u^2)^2}.$$

Uma primitiva dessa forma é

$$\int\frac{du}{(1+u^2)^2}
=\frac{u}{2(1+u^2)}+\frac12\arctan u+C.$$

Logo,

$$I=2\frac{u}{1+u^2}+2\arctan u+C.$$

Voltando a $u=2x$,

:::result{kind="answer"}
$\boxed{\frac{4x}{1+4x^2}+2\arctan(2x)+C}$
:::

### 12p) $\displaystyle\int\frac{(1-r^2)^{5/2}}{r^8}\,dr$

Use $r=\sin\theta$, então $dr=\cos\theta\,d\theta$:

$$I=\int\frac{\cos^5\theta}{\sin^8\theta}\cos\theta\,d\theta
=\int\cot^6\theta\,\csc^2\theta\,d\theta.$$

Com $u=\cot\theta$, $du=-\csc^2\theta\,d\theta$:

$$I=-\int u^6du=-\frac{u^7}{7}+C.$$

Como $\cot\theta=\sqrt{1-r^2}/r$,

:::result{kind="answer"}
$\boxed{-\frac{(1-r^2)^{7/2}}{7r^7}+C}$
:::

### 12t) $\displaystyle\int\frac{(1-x^2)^{3/2}}{x^6}\,dx$

O item é idêntico ao 12n. Repetimos a substituição para que a resolução seja independente: $x=\sin\theta$, $dx=\cos\theta\,d\theta$:

$$I=\int\cot^4\theta\,\csc^2\theta\,d\theta.$$

Com $u=\cot\theta$, $du=-\csc^2\theta\,d\theta$:

$$I=-\frac15\cot^5\theta+C.$$

:::result{kind="answer"}
$\boxed{-\frac{(1-x^2)^{5/2}}{5x^5}+C}$
:::


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

### Questão 13 — complementos com desenvolvimento completo

### 13d) $\displaystyle\frac{t^2+8}{t^2-5t+6}$

**1. Fatore o denominador e compare os graus.**

$$t^2-5t+6=(t-2)(t-3).$$

Os graus são iguais, então começamos dividindo: o quociente é $1$ e o resto é $5t+2$, pois

$$t^2+8=(t^2-5t+6)+(5t+2).$$

**2. Decomponha a fração própria restante.**

$$\frac{5t+2}{(t-2)(t-3)}
=\frac A{t-2}+\frac B{t-3}.$$

Multiplicando pelos fatores e escolhendo as raízes:

- $t=2$: $12=-A$, então $A=-12$;
- $t=3$: $17=B$, então $B=17$.

:::result{kind="answer"}
$\boxed{\frac{t^2+8}{t^2-5t+6}
=1-\frac{12}{t-2}+\frac{17}{t-3}}$
:::

### Questão 14 — complementos com desenvolvimento completo

### 14b) $\displaystyle\int\frac{dx}{x^2+2x}$

Fatore $x^2+2x=x(x+2)$ e escreva

$$\frac1{x(x+2)}=\frac A x+\frac B{x+2}.$$

De $1=A(x+2)+Bx$, obtemos $2A=1$ e $A+B=0$, isto é, $A=1/2$ e $B=-1/2$.

$$I=\frac12\int\frac{dx}{x}-\frac12\int\frac{dx}{x+2}.$$

:::result{kind="answer"}
$\boxed{\frac12\ln|x|-\frac12\ln|x+2|+C}$
:::

### 14c) $\displaystyle\int\frac{x+4}{x^2+5x-6}\,dx$

Fatore $x^2+5x-6=(x-1)(x+6)$ e decomponha:

$$\frac{x+4}{(x-1)(x+6)}
=\frac A{x-1}+\frac B{x+6}.$$

Substituindo $x=1$, $5=7A$, logo $A=5/7$. Substituindo $x=-6$, $-2=-7B$, logo $B=2/7$.

Integre os dois termos:

:::result{kind="answer"}
$\boxed{\frac57\ln|x-1|+\frac27\ln|x+6|+C}$
:::

### 14d) $\displaystyle\int\frac{2x+1}{x^2-7x+12}\,dx$

Fatore o denominador: $(x-3)(x-4)$. Escreva

$$\frac{2x+1}{(x-3)(x-4)}
=\frac A{x-3}+\frac B{x-4}.$$

Em $x=3$, $7=-A$, então $A=-7$. Em $x=4$, $9=B$. Logo,

:::result{kind="answer"}
$\boxed{-7\ln|x-3|+9\ln|x-4|+C}$
:::

### 14e) $\displaystyle\int_4^8\frac{y}{y^2-2y-3}\,dy$

Fatore $y^2-2y-3=(y-3)(y+1)$. A decomposição é

$$\frac y{(y-3)(y+1)}
=\frac A{y-3}+\frac B{y+1}.$$

Em $y=3$, $3=4A$, então $A=3/4$. Em $y=-1$, $-1=-4B$, então $B=1/4$.

Como os polos $-1$ e $3$ não pertencem a $[4,8]$, podemos aplicar a primitiva nos extremos:

$$I=\left[\frac34\ln|y-3|+\frac14\ln|y+1|\right]_4^8.$$

:::result{kind="answer"}
$\boxed{\frac34\ln5+\frac14\ln\frac95}$
:::

### 14f) $\displaystyle\int_{1/2}^1\frac{y+4}{y^2+y}\,dy$

Fatore $y^2+y=y(y+1)$ e decomponha:

$$\frac{y+4}{y(y+1)}
=\frac A y+\frac B{y+1}.$$

De $y+4=A(y+1)+By$, em $y=0$ obtemos $A=4$; em $y=-1$, obtemos $B=-3$.

$$I=\left[4\ln y-3\ln(y+1)\right]_{1/2}^1.$$

Substituindo os extremos e juntando os logaritmos,

$$I=-3\ln2+4\ln2+3\ln\frac32
=\ln2+3\ln\frac32.$$

:::result{kind="answer"}
$\boxed{\ln\frac{27}{4}}$
:::

### 14g) $\displaystyle\int\frac{dt}{t^3+t^2-2t}$

Fatore $t^3+t^2-2t=t(t-1)(t+2)$ e escreva

$$\frac1{t(t-1)(t+2)}
=\frac A t+\frac B{t-1}+\frac C{t+2}.$$

Multiplicando pelo denominador e substituindo as raízes:

- $t=0$: $1=-2A$, então $A=-1/2$;
- $t=1$: $1=3B$, então $B=1/3$;
- $t=-2$: $1=6C$, então $C=1/6$.

Integre termo a termo:

:::result{kind="answer"}
$\boxed{-\frac12\ln|t|+\frac13\ln|t-1|+\frac16\ln|t+2|+C}$
:::

### 14h) $\displaystyle\int\frac{x+3}{2x^3-8x}\,dx$

Fatore $2x^3-8x=2x(x-2)(x+2)$. A decomposição é

$$\frac{x+3}{2x(x-2)(x+2)}
=\frac A x+\frac B{x-2}+\frac C{x+2}.$$

Substituindo as raízes após multiplicar pelo denominador:

- $x=0$: $3=-8A$, então $A=-3/8$;
- $x=2$: $5=16B$, então $B=5/16$;
- $x=-2$: $1=16C$, então $C=1/16$.

:::result{kind="answer"}
$\boxed{-\frac38\ln|x|+\frac5{16}\ln|x-2|+\frac1{16}\ln|x+2|+C}$
:::

### 14i) $\displaystyle\int_0^1\frac{x^3}{x^2+2x+1}\,dx$

O denominador é $(x+1)^2$. Como o grau do numerador é maior, dividimos:

$$x^3=(x-2)(x+1)^2+(3x+2).$$

Além disso,

$$\frac{3x+2}{(x+1)^2}
=\frac3{x+1}-\frac1{(x+1)^2}.$$

Portanto,

$$I=\int_0^1\left(x-2+\frac3{x+1}-\frac1{(x+1)^2}\right)dx.$$

Uma primitiva é

$$F(x)=\frac{x^2}{2}-2x+3\ln(x+1)+\frac1{x+1}.$$

Avalie: $F(1)-F(0)=3\ln2-2$.

:::result{kind="answer"}
$\boxed{3\ln2-2}$
:::

### 14j) $\displaystyle\int\frac{x^3}{x^2-2x+1}\,dx$

O denominador é $(x-1)^2$. Dividindo,

$$x^3=(x+2)(x-1)^2+(3x-2),$$

e

$$\frac{3x-2}{(x-1)^2}
=\frac3{x-1}+\frac1{(x-1)^2}.$$

Assim,

$$I=\int\left(x+2+\frac3{x-1}+\frac1{(x-1)^2}\right)dx.$$

:::result{kind="answer"}
$\boxed{\frac{x^2}{2}+2x+3\ln|x-1|-\frac1{x-1}+C}$
:::

### 14l) $\displaystyle\int\frac{x^2}{(x-1)(x^2+2x+1)}\,dx$

Como $x^2+2x+1=(x+1)^2$, escreva

$$\frac{x^2}{(x-1)(x+1)^2}
=\frac A{x-1}+\frac B{x+1}+\frac C{(x+1)^2}.$$

Multiplicando pelo denominador comum e substituindo $x=1$ e $x=-1$, obtemos $A=1/4$ e $C=1/2$. Comparando os coeficientes de $x^2$, $A+B=1$, logo $B=3/4$.

$$I=\int\left(\frac1{4(x-1)}+\frac3{4(x+1)}
+\frac1{2(x+1)^2}\right)dx.$$

:::result{kind="answer"}
$\boxed{\frac14\ln|x-1|+\frac34\ln|x+1|-\frac1{2(x+1)}+C}$
:::

### 14m) $\displaystyle\int\frac{dx}{(x+1)(x^2+1)}$

Escreva

$$\frac1{(x+1)(x^2+1)}
=\frac A{x+1}+\frac{Bx+C}{x^2+1}.$$

Após multiplicar pelo denominador comum, a comparação dos coeficientes fornece $A=1/2$, $B=-1/2$ e $C=1/2$.

$$I=\frac12\int\frac{dx}{x+1}
-\frac12\int\frac{x\,dx}{x^2+1}
+\frac12\int\frac{dx}{x^2+1}.$$

:::result{kind="answer"}
$\boxed{\frac12\ln|x+1|-\frac14\ln(x^2+1)+\frac12\arctan x+C}$
:::

### 14n) $\displaystyle\int_1^{\sqrt3}\frac{3t^2+t+4}{t^3+t}\,dt$

Fatore $t^3+t=t(t^2+1)$ e decomponha:

$$\frac{3t^2+t+4}{t(t^2+1)}
=\frac A t+\frac{Bt+C}{t^2+1}.$$

Comparando coeficientes em
$3t^2+t+4=A(t^2+1)+(Bt+C)t$, obtemos $A=4$, $B=-1$ e $C=1$.

$$I=\left[4\ln t-\frac12\ln(t^2+1)+\arctan t\right]_1^{\sqrt3}.$$

No extremo superior: $2\ln3-\ln2+\pi/3$. No inferior: $-\frac12\ln2+\pi/4$.

:::result{kind="answer"}
$\boxed{2\ln3-\frac12\ln2+\frac\pi{12}}$
:::

### 14p) $\displaystyle\int\frac{8x^2+8x+2}{4x^2+1}\,dx$

Divida o numerador por $4x^2+1$:

$$8x^2+8x+2=2(4x^2+1)+8x.$$

Logo,

$$I=\int\left(2+\frac{8x}{4x^2+1}\right)dx.$$

Na segunda parcela, use $u=4x^2+1$, $du=8x\,dx$:

:::result{kind="answer"}
$\boxed{2x+\ln(4x^2+1)+C}$
:::

### 14q) $\displaystyle\int\frac{x^2+4x+1}{(x-1)(x+1)(x+3)}\,dx$

Escreva

$$\frac{x^2+4x+1}{(x-1)(x+1)(x+3)}
=\frac A{x-1}+\frac B{x+1}+\frac C{x+3}.$$

Substituindo as raízes:

- $x=1$: $6=8A$, então $A=3/4$;
- $x=-1$: $-2=-4B$, então $B=1/2$;
- $x=-3$: $-2=8C$, então $C=-1/4$.

:::result{kind="answer"}
$\boxed{\frac34\ln|x-1|+\frac12\ln|x+1|-\frac14\ln|x+3|+C}$
:::

### 14r) $\displaystyle\int\frac{6x+7}{(x+2)^2}\,dx$

Reescreva o numerador em função de $x+2$:

$$6x+7=6(x+2)-5.$$

Então,

$$\frac{6x+7}{(x+2)^2}
=\frac6{x+2}-\frac5{(x+2)^2}.$$

:::result{kind="answer"}
$\boxed{6\ln|x+2|+\frac5{x+2}+C}$
:::

### 14s) $\displaystyle\int\frac{2x^3-4x^2-x-3}{x^2-2x-3}\,dx$

Primeiro divida os polinômios:

$$2x^3-4x^2-x-3
=2x(x^2-2x-3)+(5x-3).$$

Fatore $x^2-2x-3=(x-3)(x+1)$ e decomponha

$$\frac{5x-3}{(x-3)(x+1)}
=\frac A{x-3}+\frac B{x+1}.$$

Em $x=3$, $12=4A$, então $A=3$. Em $x=-1$, $-8=-4B$, então $B=2$.

Assim, o integrando é $2x+3/(x-3)+2/(x+1)$.

:::result{kind="answer"}
$\boxed{x^2+3\ln|x-3|+2\ln|x+1|+C}$
:::

### 14t) $\displaystyle\int\frac{dx}{x(x^2-1)^2}$

Fatore o denominador: $x(x-1)^2(x+1)^2$. A forma correta da decomposição inclui todos os termos dos fatores repetidos:

$$\frac1{x(x-1)^2(x+1)^2}
=\frac1x-\frac1{2(x-1)}+\frac1{4(x-1)^2}
-\frac1{2(x+1)}-\frac1{4(x+1)^2}.$$

A igualdade pode ser conferida multiplicando ambos os lados por $x(x-1)^2(x+1)^2$. Integre termo a termo:

$$I=\ln|x|-\frac12\ln|x-1|-\frac12\ln|x+1|
-\frac1{4(x-1)}+\frac1{4(x+1)}+C.$$

:::result{kind="answer"}
$\boxed{\ln|x|-\frac12\ln|x-1|-\frac12\ln|x+1|-\frac1{4(x-1)}+\frac1{4(x+1)}+C}$
:::


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

### 17p) $\displaystyle\int_{-1}^{\infty}\frac{d\theta}{\theta^2+5\theta+6}$

**1. Verifique primeiro onde o integrando não está definido.** Fatorando o denominador,

$\theta^2+5\theta+6=(\theta+2)(\theta+3).$

As singularidades são $\theta=-2$ e $\theta=-3$. Nenhuma pertence ao intervalo $[-1,\infty)$; portanto, não há descontinuidade dentro do intervalo nem no extremo finito. A única impropriedade vem do limite superior infinito.

**2. Decomponha em frações parciais.** Procuramos constantes $A$ e $B$ tais que

$\frac1{(\theta+2)(\theta+3)}=\frac A{\theta+2}+\frac B{\theta+3}.$

Multiplicando pelo denominador comum,

$1=A(\theta+3)+B(\theta+2).$

Com $\theta=-2$, obtemos $1=A$, logo $A=1$. Com $\theta=-3$, obtemos $1=-B$, logo $B=-1$. Assim,

$\frac1{(\theta+2)(\theta+3)}=\frac1{\theta+2}-\frac1{\theta+3}.$

**3. Transforme a integral em limite.** Para $b>-1$,

$\int_{-1}^{b}\left(\frac1{\theta+2}-\frac1{\theta+3}\right)d\theta
=\left[\ln|\theta+2|-\ln|\theta+3|\right]_{-1}^{b}.$

Juntando os logaritmos e substituindo os extremos,

$=\ln\left|\frac{b+2}{b+3}\right|-\ln\left|\frac12\right|.$

**4. Calcule o limite.** Dividindo numerador e denominador da fração por $b$,

$\lim_{b\to\infty}\frac{b+2}{b+3}=1.$

Pela continuidade do logaritmo em $1$,

$\lim_{b\to\infty}\ln\left(\frac{b+2}{b+3}\right)=\ln1=0.$

Portanto, o valor da integral é $0-\ln(1/2)=\ln2$.

:::result{kind="converge"}
**Resposta:** a integral converge e vale $\boxed{\ln2}$. As raízes $-2$ e $-3$ do denominador não causam impropriedade, pois estão fora do intervalo de integração.
:::

### 18b) $\displaystyle\int_0^{\pi/2}\cot\theta\,d\theta$

**1. Localize a singularidade.** Como $\cot\theta=\frac{\cos\theta}{\sin\theta}$ e $\sin0=0$, o integrando não está definido no extremo $\theta=0$. A integral é imprópria:

$I=\lim_{a\to0^+}\int_a^{\pi/2}\cot\theta\,d\theta.$

**2. Integre e calcule o limite.** Como $\frac{d}{d\theta}\ln(\sin\theta)=\cot\theta$ para $0<\theta\le\pi/2$,

$I=\lim_{a\to0^+}\left[\ln(\sin\theta)\right]_a^{\pi/2}
=\lim_{a\to0^+}\bigl(0-\ln(\sin a)\bigr)=+\infty.$

:::result{kind="diverge"}
**Resposta:** diverge. O comportamento é o de $1/\theta$ perto de zero.
:::

### 18c) $\displaystyle\int_0^\pi\frac{\sin\theta}{\sqrt{\pi-\theta}}\,d\theta$

**1. Localize o possível problema.** O denominador zera em $\theta=\pi$. A integral é imprópria nesse extremo:

$I=\lim_{b\to\pi^-}\int_0^b\frac{\sin\theta}{\sqrt{\pi-\theta}}\,d\theta.$

**2. Compare perto de $\pi$.** Para $0\le\theta\le\pi$, temos $\sin\theta=\sin(\pi-\theta)\le\pi-\theta$. Portanto,

$0\le\frac{\sin\theta}{\sqrt{\pi-\theta}}
\le\frac{\pi-\theta}{\sqrt{\pi-\theta}}
=\sqrt{\pi-\theta}.$

**3. Verifique a integral de comparação.**

$\int_0^\pi\sqrt{\pi-\theta}\,d\theta
=\int_0^\pi u^{1/2}\,du
=\frac23\pi^{3/2}<\infty,$

onde usamos $u=\pi-\theta$. Pelo teste da comparação, a integral original converge.

:::result{kind="converge"}
**Resposta:** converge. A singularidade é integrável porque o integrando é limitado por uma constante vezes $(\pi-\theta)^{1/2}$ perto de $\pi$.
:::

### 18d) $\displaystyle\int_{-\pi/2}^{\pi/2}\frac{\cos\theta}{(\pi-2\theta)^{1/3}}\,d\theta$

**1. Localize a singularidade.** O denominador zera quando $\pi-2\theta=0$, isto é, em $\theta=\pi/2$, extremo superior do intervalo.

**2. Faça uma substituição que mostre o comportamento no extremo.** Tome $u=\pi-2\theta$. Então $\theta=(\pi-u)/2$, $d\theta=-du/2$ e

$\cos\theta=\cos\left(\frac\pi2-\frac u2\right)=\sin\frac u2.$

Assim,

$I=\frac12\int_0^{2\pi}
\frac{\sin(u/2)}{u^{1/3}}\,du.$

**3. Compare perto de zero.** Como $0\le\sin(u/2)\le u/2$ para $u\ge0$,

$0\le\frac12\frac{\sin(u/2)}{u^{1/3}}
\le\frac14u^{2/3}.$

E $\int_0^1u^{2/3}du$ converge. No restante do intervalo, o integrando é contínuo. Logo, a integral toda converge.

:::result{kind="converge"}
**Resposta:** converge. A singularidade é mais fraca que $u^{-1/3}$; após usar o zero de $\sin(u/2)$, o integrando fica limitado por $u^{2/3}$.
:::

### 18e) $\displaystyle\int_0^{\ln2}x^{-2}e^{-1/x}\,dx$

**1. Identifique a singularidade.** O fator $x^{-2}$ não está definido em $x=0$, então

$I=\lim_{a\to0^+}\int_a^{\ln2}\frac{e^{-1/x}}{x^2}\,dx.$

**2. Use a substituição sugerida pelo expoente.** Tome $u=1/x$. Então $du=-x^{-2}dx$, isto é, $x^{-2}dx=-du$. Os limites mudam: $x=a$ dá $u=1/a$; $x=\ln2$ dá $u=1/\ln2$.

$I=\lim_{a\to0^+}\int_{1/\ln2}^{1/a}e^{-u}\,du.$

**3. Calcule a primitiva e o limite.**

$I=\lim_{a\to0^+}\left[-e^{-u}\right]_{1/\ln2}^{1/a}
=\lim_{a\to0^+}\left(e^{-1/\ln2}-e^{-1/a}\right)
=e^{-1/\ln2}.$

Como $e^{-1/a}\to0$, o limite é finito.

:::result{kind="converge"}
**Resposta:** converge e seu valor é $\boxed{e^{-1/\ln2}}$.
:::

### 18f) $\displaystyle\int_0^1\frac{e^{-\sqrt{x}}}{\sqrt{x}}\,dx$

**1. Identifique a singularidade.** Em $x=0$, o denominador zera. Escrevemos

$I=\lim_{a\to0^+}\int_a^1\frac{e^{-\sqrt{x}}}{\sqrt{x}}\,dx.$

**2. Faça $u=\sqrt{x}$.** Então $x=u^2$ e $dx=2u\,du$. O fator $u$ cancela o denominador:

$\frac{e^{-\sqrt{x}}}{\sqrt{x}}dx
=\frac{e^{-u}}u(2u\,du)=2e^{-u}\,du.$

Os limites passam de $x=a$ e $x=1$ para $u=\sqrt a$ e $u=1$.

**3. Calcule.**

$I=\lim_{a\to0^+}2\int_{\sqrt a}^1e^{-u}\,du
=\lim_{a\to0^+}2\left[-e^{-u}\right]_{\sqrt a}^1
=2(1-e^{-1}).$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{2(1-e^{-1})}$.
:::

### 18g) $\displaystyle\int_0^2\frac{dx}{1-x^2}$

**1. Localize a singularidade interior.** Como $1-x^2=(1-x)(1+x)$, o denominador zera em $x=1$, que está dentro de $[0,2]$. É obrigatório separar:

$I=\int_0^1\frac{dx}{1-x^2}+\int_1^2\frac{dx}{1-x^2},$

entendendo cada parcela como limite lateral.

**2. Basta examinar o lado esquerdo.** Uma primitiva, em intervalos que não atravessem $1$, é

$F(x)=\frac12\ln\left|\frac{1+x}{1-x}\right|.$

Logo,

$\int_0^1\frac{dx}{1-x^2}
=\lim_{b\to1^-}\left(F(b)-F(0)\right)
=\lim_{b\to1^-}\frac12\ln\left(\frac{1+b}{1-b}\right)
=+\infty.$

**3. Conclusão.** Uma das integrais laterais já diverge; portanto, a integral imprópria original não pode convergir. No lado direito, o integrando é negativo e a integral tende a $-\infty$.

:::result{kind="diverge"}
**Resposta:** diverge. O ponto $x=1$ é uma singularidade interior; não se pode aplicar Newton–Leibniz diretamente de $0$ a $2$.
:::

### 18h) $\displaystyle\int_1^\infty\frac{dx}{x^3+1}$

**1. A impropriedade está no infinito.** Escreva

$I=\lim_{b\to\infty}\int_1^b\frac{dx}{x^3+1}.$

**2. Compare com uma p-integral.** Para $x\ge1$, temos $x^3+1\ge x^3$, portanto

$0<\frac1{x^3+1}\le\frac1{x^3}.$

**3. A integral de comparação converge:**

$\int_1^\infty\frac{dx}{x^3}
=\lim_{b\to\infty}\left[-\frac1{2x^2}\right]_1^b
=\frac12.$

Pela comparação direta, a integral original converge.

:::result{kind="converge"}
**Resposta:** converge, pois é limitada por cima pela p-integral de expoente $p=3>1$.
:::

### 18i) $\displaystyle\int_1^\infty\frac{e^x}{x}\,dx$

**1. A impropriedade está no infinito.** Para $x\ge1$, vale $e^x\ge x$ (por exemplo, $e^x\ge1+x\ge x$). Assim,

$\frac{e^x}{x}\ge1.$

**2. Compare com uma integral divergente.**

$\int_1^\infty\frac{e^x}{x}\,dx
\ge\int_1^\infty1\,dx=+\infty.$

:::result{kind="diverge"}
**Resposta:** diverge. O integrando é pelo menos $1$ em todo $[1,\infty)$ e, portanto, não pode gerar área finita.
:::

### 18j) $\displaystyle\int_e^\infty\ln(\ln x)\,dx$

**1. Verifique o comportamento do integrando.** Para $x\ge e$, temos $\ln x\ge1$ e, portanto, $\ln(\ln x)\ge0$. Além disso, $\ln(\ln x)\to\infty$ quando $x\to\infty$.

**2. Use uma comparação simples.** Como $\ln(\ln x)\to\infty$, existe $X$ tal que $\ln(\ln x)\ge1$ para todo $x\ge X$. Logo,

$\int_e^\infty\ln(\ln x)\,dx
\ge\int_X^\infty1\,dx=+\infty.$

:::result{kind="diverge"}
**Resposta:** diverge. O integrando sequer tende a zero; ele cresce sem limite.
:::

### 18k) $\displaystyle\int_1^\infty\frac{dx}{\sqrt{e^x-x}}$

**1. A impropriedade está no infinito.** Para $x\ge1$, o denominador é positivo, pois $e^x>x$.

**2. Obtenha uma estimativa inferior para o denominador.** A desigualdade $e^x\ge2x$ vale para $x\ge1$: é verdadeira em $x=1$ e a função $e^x-2x$ permanece crescente a partir daí. Portanto,

$e^x-x\ge\frac{e^x}{2}.$

Tomando raízes,

$\sqrt{e^x-x}\ge\frac{e^{x/2}}{\sqrt2},$

e, invertendo quantidades positivas,

$0<\frac1{\sqrt{e^x-x}}\le\sqrt2e^{-x/2}.$

**3. A integral de comparação converge:**

$\int_1^\infty\sqrt2e^{-x/2}\,dx
=\sqrt2\left[-2e^{-x/2}\right]_1^\infty
=2\sqrt2e^{-1/2}<\infty.$

Pela comparação direta, a integral original converge.

:::result{kind="converge"}
**Resposta:** converge, por comparação com uma exponencial decrescente.
:::

### 18l) $\displaystyle\int_{-\infty}^\infty\frac{dx}{e^x+e^{-x}}$

**1. Separe os dois infinitos.** Por definição,

$I=\lim_{a\to-\infty}\int_a^0\frac{dx}{e^x+e^{-x}}
+\lim_{b\to\infty}\int_0^b\frac{dx}{e^x+e^{-x}},$

desde que ambos os limites existam.

**2. Encontre uma primitiva.** Multiplicando numerador e denominador por $e^x$,

$\frac1{e^x+e^{-x}}=\frac{e^x}{1+e^{2x}}.$

Com $u=e^x$, $du=e^x dx$:

$\int\frac{e^x}{1+e^{2x}}dx
=\int\frac{du}{1+u^2}
=\arctan u
=\arctan(e^x)+C.$

**3. Avalie os limites nos dois extremos.**

$I=\lim_{a\to-\infty,\ b\to\infty}
\left[\arctan(e^x)\right]_a^b
=\arctan(\infty)-\arctan(0)=\frac\pi2.$

Os dois limites laterais são finitos.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\pi/2}$.
:::

### 18m) $\displaystyle\int_2^\infty\frac{x\,dx}{\sqrt{x^4-1}}$

**1. A impropriedade está no infinito.** O integrando é positivo para $x\ge2$.

**2. Compare por baixo com $1/x$.** Para $x\ge2$,

$\sqrt{x^4-1}\le\sqrt{x^4}=x^2.$

Como os denominadores são positivos, inverter a desigualdade dá

$\frac{x}{\sqrt{x^4-1}}\ge\frac{x}{x^2}=\frac1x.$

**3. A integral de comparação diverge:**

$\int_2^\infty\frac{dx}{x}
=\lim_{b\to\infty}(\ln b-\ln2)=+\infty.$

Pela comparação direta inferior, a integral original diverge.

:::result{kind="diverge"}
**Resposta:** diverge, por comparação com a integral harmônica contínua $\int_2^\infty dx/x$.
:::

### 18n) $\displaystyle\int_\pi^\infty\frac{2+\cos x}{x}\,dx$

**1. Use o limite inferior do numerador.** Como $-1\le\cos x\le1$,

$1\le2+\cos x\le3.$

Para $x\ge\pi>0$,

$\frac{2+\cos x}{x}\ge\frac1x.$

**2. Compare com a integral logarítmica.**

$\int_\pi^\infty\frac{dx}{x}
=\lim_{b\to\infty}(\ln b-\ln\pi)=+\infty.$

Pela comparação inferior, a integral original diverge.

:::result{kind="diverge"}
**Resposta:** diverge. O numerador nunca fica abaixo de $1$, então a oscilação do cosseno não elimina a divergência de $1/x$.
:::

### 18o) $\displaystyle\int_\pi^\infty\frac{1+\sin x}{x^2}\,dx$

**1. Use os limites do seno.** Como $-1\le\sin x\le1$,

$0\le1+\sin x\le2.$

Assim, para $x\ge\pi$,

$0\le\frac{1+\sin x}{x^2}\le\frac2{x^2}.$

**2. A integral de comparação converge:**

$\int_\pi^\infty\frac2{x^2}\,dx
=2\lim_{b\to\infty}\left[-\frac1x\right]_\pi^b
=\frac2\pi<\infty.$

Pela comparação direta, a integral original converge.

:::result{kind="converge"}
**Resposta:** converge. O numerador é limitado e o denominador fornece uma p-integral com $p=2>1$.
:::

### 18p) $\displaystyle\int_0^\pi\frac{dt}{\sqrt{t+\sin t}}$

**1. Localize a singularidade.** Em $t=0$, o denominador zera. Para $t>0$, temos $\sin t\ge0$, logo

$t+\sin t\ge t.$

**2. Compare com uma potência integrável.** Como ambos os lados são positivos,

$0<\frac1{\sqrt{t+\sin t}}\le\frac1{\sqrt t}=t^{-1/2}.$

**3. Verifique a integral de comparação.**

$\int_0^\pi t^{-1/2}dt
=\lim_{a\to0^+}\left[2\sqrt t\right]_a^\pi
=2\sqrt\pi<\infty.$

Pela comparação direta, a integral original converge.

:::result{kind="converge"}
**Resposta:** converge. A singularidade é comparável a $t^{-1/2}$, e a potência $p=1/2$ é menor que $1$ no extremo zero.
:::

### Questão 17 — complementos com desenvolvimento completo

Os itens abaixo exigem atenção especial à definição de integral imprópria. Quando há uma singularidade dentro do intervalo, dividimos a integral nesse ponto e calculamos **dois limites laterais separados**. Quando há infinito, substituímos o extremo por um parâmetro.

### 17b) $\displaystyle\int_1^\infty\frac{dx}{x^{1.001}}$

**1. Escreva como limite.**

$$I=\lim_{b\to\infty}\int_1^b x^{-1.001}\,dx.$$

**2. Integre usando a regra da potência.** Como $-1.001\ne-1$,

$$\int x^{-1.001}dx=\frac{x^{-0.001}}{-0.001}=-1000x^{-0.001}.$$

**3. Avalie o limite.**

$$I=\lim_{b\to\infty}\left[-1000x^{-0.001}\right]_1^b
=\lim_{b\to\infty}\left(1000-1000b^{-0.001}\right)=1000,$$

pois $b^{-0.001}\to0$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{1000}$.
:::

### 17d) $\displaystyle\int_0^4\frac{dx}{\sqrt{4-x}}$

**1. O denominador zera em $x=4$.** Defina

$$I=\lim_{b\to4^-}\int_0^b(4-x)^{-1/2}\,dx.$$

**2. Faça $u=4-x$, $du=-dx$.** Uma primitiva é $-2\sqrt{4-x}$.

$$I=\lim_{b\to4^-}\left[-2\sqrt{4-x}\right]_0^b
=\lim_{b\to4^-}\left(4-2\sqrt{4-b}\right)=4.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed4$.
:::

### 17e) $\displaystyle\int_{-1}^1\frac{dy}{y^{2/3}}$

**1. A singularidade está no interior, em $y=0$.** Para expoentes fracionários com denominador ímpar, $y^{2/3}=(\sqrt[3]y)^2=|y|^{2/3}$. Separe:

$$I=\lim_{a\to0^-}\int_{-1}^a|y|^{-2/3}dy+
\lim_{b\to0^+}\int_b^1y^{-2/3}dy.$$

**2. Calcule o lado esquerdo.** Para $y<0$, uma primitiva de $|y|^{-2/3}$ é $3y^{1/3}$:

$$\lim_{a\to0^-}\left[3y^{1/3}\right]_{-1}^a
=0-(-3)=3.$$

**3. Calcule o lado direito.**

$$\lim_{b\to0^+}\left[3y^{1/3}\right]_b^1
=3-0=3.$$

Somando os dois limites finitos, $I=6$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed6$. Não se deve tratar $y=0$ como se fosse um extremo único: é necessário separar os dois lados.
:::

### 17f) $\displaystyle\int_{-8}^1\frac{dx}{x^{1/3}}$

**1. Separe no ponto singular $x=0$.**

$$I=\lim_{a\to0^-}\int_{-8}^a x^{-1/3}dx+
\lim_{b\to0^+}\int_b^1 x^{-1/3}dx.$$

**2. Use a primitiva válida nos dois lados.**

$$\int x^{-1/3}dx=\frac32x^{2/3},$$

onde $x^{2/3}=(\sqrt[3]x)^2$ também para $x<0$.

**3. Avalie cada lado.**

$$I_-=\lim_{a\to0^-}\frac32\left(a^{2/3}-(-8)^{2/3}\right)
=-\frac32\cdot4=-6,$$

$$I_+=\lim_{b\to0^+}\frac32(1-b^{2/3})=\frac32.$$

Logo, $I=-6+\frac32=-\frac92$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{-9/2}$. A singularidade é integrável porque a potência $1/3$ é menor que $1$; o sinal negativo no trecho à esquerda deve ser preservado.
:::

### 17g) $\displaystyle\int_0^1\frac{dx}{\sqrt{1-x^2}}$

**1. O denominador zera em $x=1$.** Escreva

$$I=\lim_{b\to1^-}\int_0^b\frac{dx}{\sqrt{1-x^2}}.$$

**2. Reconheça a derivada de $\arcsin x$.**

$$I=\lim_{b\to1^-}\left[\arcsin x\right]_0^b
=\lim_{b\to1^-}(\arcsin b-0)=\frac\pi2.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\pi/2}$.
:::

### 17h) $\displaystyle\int_1^\infty\frac{dx}{x\sqrt{x^2-1}}$

**1. Há duas impropriedades:** o denominador zera em $x=1$ e o intervalo é ilimitado. Primeiro calcule a partir de $a>1$ até $b$:

$$I=\lim_{a\to1^+}\lim_{b\to\infty}
\int_a^b\frac{dx}{x\sqrt{x^2-1}}.$$

**2. Reconheça a primitiva.** Para $x>1$,

$$\frac{d}{dx}\operatorname{arcsec}x
=\frac1{x\sqrt{x^2-1}}.$$

**3. Avalie os dois extremos.**

$$I=\lim_{a\to1^+}\lim_{b\to\infty}
(\operatorname{arcsec}b-\operatorname{arcsec}a)
=\frac\pi2-0=\frac\pi2.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\pi/2}$. Tanto o limite junto de $1$ quanto o limite no infinito são finitos.
:::

### 17i) $\displaystyle\int_0^\infty\frac{16\arctan x}{1+x^2}\,dx$

**1. Escreva o limite no infinito.**

$$I=\lim_{b\to\infty}\int_0^b\frac{16\arctan x}{1+x^2}\,dx.$$

**2. Faça $u=\arctan x$.** Então $du=dx/(1+x^2)$:

$$I=\lim_{b\to\infty}16\int_0^{\arctan b}u\,du
=\lim_{b\to\infty}8(\arctan b)^2.$$

**3. Use $\arctan b\to\pi/2$.**

$$I=8\left(\frac\pi2\right)^2=2\pi^2.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{2\pi^2}$.
:::

### 17j) $\displaystyle\int_{-\infty}^0\theta e^\theta\,d\theta$

**1. Escreva o limite.**

$$I=\lim_{a\to-\infty}\int_a^0\theta e^\theta\,d\theta.$$

**2. Integre por partes.** Tome $u=\theta$, $dv=e^\theta d\theta$. Então $du=d\theta$ e $v=e^\theta$:

$$\int\theta e^\theta d\theta
=\theta e^\theta-\int e^\theta d\theta
=e^\theta(\theta-1).$$

**3. Avalie.**

$$I=\lim_{a\to-\infty}\left[e^\theta(\theta-1)\right]_a^0
=-1-\lim_{a\to-\infty}e^a(a-1)=-1,$$

pois a exponencial tende a zero mais rapidamente que o fator linear cresce em módulo.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{-1}$.
:::

### 17l) $\displaystyle\int_{-\infty}^\infty2xe^{-x^2}\,dx$

**1. Separe os dois infinitos.** A integral só converge se ambos os limites laterais existirem:

$$I=\lim_{a\to-\infty}\int_a^0 2xe^{-x^2}dx+
\lim_{b\to\infty}\int_0^b2xe^{-x^2}dx.$$

**2. Uma primitiva é $-e^{-x^2}$.** Isso vem de $u=-x^2$, $du=-2x\,dx$.

**3. Calcule separadamente.**

$$I_-=\lim_{a\to-\infty}[-e^{-x^2}]_a^0=-1-(-0)=-1,$$

$$I_+=\lim_{b\to\infty}[-e^{-x^2}]_0^b=0-(-1)=1.$$

Somando, $I=0$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed0$. A função é ímpar, mas a justificativa correta também verifica separadamente as duas integrais impróprias.
:::

### 17m) $\displaystyle\int_0^1x\ln x\,dx$

**1. A expressão $\ln x$ diverge em $x=0$.** Defina

$$I=\lim_{a\to0^+}\int_a^1x\ln x\,dx.$$

**2. Integre por partes.** Tome $u=\ln x$, $dv=x\,dx$. Assim, $du=dx/x$ e $v=x^2/2$:

$$\int x\ln x\,dx
=\frac{x^2}{2}\ln x-\frac12\int x\,dx
=\frac{x^2}{2}\ln x-\frac{x^2}{4}.$$

**3. Avalie o limite.**

$$I=\left(0-\frac14\right)
-\lim_{a\to0^+}\left(\frac{a^2}{2}\ln a-\frac{a^2}{4}\right)
=-\frac14,$$

pois $a^2\ln a\to0$ quando $a\to0^+$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{-1/4}$.
:::

### 17n) $\displaystyle\int_0^1-\ln x\,dx$

**1. Escreva o limite impróprio.**

$$I=\lim_{a\to0^+}\int_a^1-\ln x\,dx.$$

**2. Integre por partes ou use uma primitiva.** Como $\int\ln x\,dx=x\ln x-x$,

$$\int-\ln x\,dx=-x\ln x+x.$$

**3. Avalie.**

$$I=\left[-x\ln x+x\right]_0^1
=1-\lim_{a\to0^+}(-a\ln a+a)=1,$$

usando novamente $a\ln a\to0$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed1$.
:::

### 17o) $\displaystyle\int_1^2\frac{ds}{s\sqrt{s^2-1}}$

**1. A singularidade está em $s=1$.** Escreva

$$I=\lim_{a\to1^+}\int_a^2\frac{ds}{s\sqrt{s^2-1}}.$$

**2. Use a primitiva de arcsecante.**

$$I=\lim_{a\to1^+}\left[\operatorname{arcsec}s\right]_a^2.$$

**3. Avalie os extremos.** Para $s\ge1$, $\operatorname{arcsec}1=0$ e $\operatorname{arcsec}2=\pi/3$:

$$I=\frac\pi3-0=\frac\pi3.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\pi/3}$.
:::

### 17q) $\displaystyle\int_0^\infty\frac{dx}{(1+x)\sqrt{x}}$

**1. Há singularidade em $0$ e extremo infinito.** Faça a substituição $t=\sqrt{x}$ em um intervalo truncado. Temos $x=t^2$, $dx=2t\,dt$:

$$\frac{dx}{(1+x)\sqrt{x}}
=\frac{2t\,dt}{(1+t^2)t}=\frac{2\,dt}{1+t^2}.$$

**2. Transforme também os limites.** Quando $x\to0^+$, $t\to0^+$; quando $x\to\infty$, $t\to\infty$.

$$I=2\int_0^\infty\frac{dt}{1+t^2}
=2\left[\arctan t\right]_0^\infty=\pi.$$

Os dois extremos são finitos após a transformação.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed\pi$.
:::

### 17r) $\displaystyle\int_0^2\frac{s+1}{\sqrt{4-s^2}}\,ds$

**1. A singularidade está no extremo $s=2$.** Separe em duas parcelas:

$$I=\int_0^2\frac{s}{\sqrt{4-s^2}}\,ds+
\int_0^2\frac{1}{\sqrt{4-s^2}}\,ds,$$

ambas entendidas como limites quando o extremo superior tende a $2$ pela esquerda.

**2. Calcule a primeira.** Com $u=4-s^2$, $du=-2s\,ds$:

$$I_1=-\frac12\int_4^0u^{-1/2}du
=\left[-\sqrt{4-s^2}\right]_0^2=2.$$

**3. Calcule a segunda.** A primitiva é $\arcsin(s/2)$:

$$I_2=\left[\arcsin\frac{s}{2}\right]_0^2=\frac\pi2.$$

Portanto, $I=I_1+I_2=2+\pi/2$.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{2+\pi/2}$.
:::

### 17s) $\displaystyle\int_0^1\frac{\theta+1}{\sqrt{\theta^2+2\theta}}\,d\theta$

**1. A singularidade está em $\theta=0$.** Observe que a derivada do radicando é $2\theta+2=2(\theta+1)$. Assim,

$$I=\lim_{a\to0^+}\int_a^1\frac{\theta+1}{\sqrt{\theta^2+2\theta}}\,d\theta.$$

**2. Faça $u=\theta^2+2\theta$.** Então $du=2(\theta+1)d\theta$:

$$I=\lim_{a\to0^+}\left[\sqrt{\theta^2+2\theta}\right]_a^1.$$

**3. Avalie.**

$$I=\sqrt3-\lim_{a\to0^+}\sqrt{a^2+2a}=\sqrt3.$$

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\sqrt3}$.
:::

### 17t) $\displaystyle\int_0^\infty\frac{dx}{(x+1)(x^2+1)}$

**1. Escreva a decomposição em frações parciais.** Procuramos

$$\frac1{(x+1)(x^2+1)}
=\frac A{x+1}+\frac{Bx+C}{x^2+1}.$$

Multiplicando pelo denominador comum,

$$1=A(x^2+1)+(Bx+C)(x+1).$$

Comparando coeficientes: $A+B=0$, $B+C=0$ e $A+C=1$. Logo $A=1/2$, $B=-1/2$ e $C=1/2$.

**2. Integre cada parcela.**

$$I=\lim_{b\to\infty}\left[
\frac12\ln(x+1)-\frac14\ln(x^2+1)
+\frac12\arctan x\right]_0^b.$$

**3. Calcule o limite dos logaritmos juntos.**

$$\frac12\ln(b+1)-\frac14\ln(b^2+1)
=\frac12\ln\left(\frac{b+1}{\sqrt{b^2+1}}\right)\longrightarrow0,$$

pois a fração dentro do logaritmo tende a $1$. Além disso, $\arctan b\to\pi/2$. No extremo inferior, as três parcelas valem zero.

:::result{kind="converge"}
**Resposta:** converge e vale $\boxed{\pi/4}$.
:::

### Questão 18 — complementos com desenvolvimento completo


:::note
Documento gerado a partir da Lista 02 (Cálculo II — UFCG, Prof. Weiller F. Chaves Barboza).
:::
