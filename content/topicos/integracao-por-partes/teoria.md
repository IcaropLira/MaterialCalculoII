---
title: "Integração por partes"
number: "01"
summary: "A fórmula, de onde ela vem, como escolher u e dv (LIATE), integrais cíclicas, método tabular e 35 exercícios comentados."
status: "available"
eyebrow: "cálculo ii · técnicas de integração"
lede: "O método que resolve integrais de produtos que a substituição não alcança — transformando uma integral difícil em outra mais simples, repetidamente se preciso."
formula: "\\int u \\, dv = uv - \\int v \\, du"
---

## Quando a substituição não é suficiente {#motivacao kicker="motivação" toc="Por que precisamos disso"}

Tente calcular $\displaystyle\int x \, e^{x}\, dx$ por substituição. Você vai perceber rapidamente que não existe uma troca de variável $t = g(x)$ que simplifique o produto $x \cdot e^x$ — porque $x$ e $e^x$ não são uma função e sua derivada, que é o que a substituição exige.

Precisamos de uma ferramenta diferente para integrar **produtos de funções de tipos distintos**: um polinômio vezes uma exponencial, um logaritmo, uma função trigonométrica vezes uma exponencial, e assim por diante. Essa ferramenta é a **integração por partes**.

:::note[Ideia central]
Integração por partes é a versão, para integrais, da regra do produto para derivadas. Ela não elimina o produto — ela troca um produto difícil de integrar por outro mais fácil.
:::

## Derivando a fórmula a partir da regra do produto {#formula kicker="de onde vem a fórmula" toc="De onde vem a fórmula"}

A fórmula não precisa ser decorada às cegas — ela sai diretamente da regra da derivada do produto.

::::example{n="i"}
#### Dedução passo a passo

1. Partimos da regra do produto para duas funções $u(x)$ e $v(x)$:

   $$
   \frac{d}{dx}\big[u(x)v(x)\big] = u'(x)v(x) + u(x)v'(x)
   $$

2. Integramos os dois lados em relação a $x$:

   $$
   u(x)v(x) = \int u'(x)v(x)\,dx + \int u(x)v'(x)\,dx
   $$

3. Isolamos o termo que nos interessa e escrevemos $du = u'(x)\,dx$ e $dv = v'(x)\,dx$:

   $$
   \int u\,dv = uv - \int v\,du
   $$

:::result
Essa é a fórmula. Ela é exata — não uma aproximação — e vale sempre que $u$ e $v$ forem deriváveis.
:::
::::

## Como escolher u e dv {#escolha kicker="a parte mais importante" toc="Escolhendo u e dv"}

O sucesso do método depende quase inteiramente de uma boa escolha de $u$. Uma escolha ruim transforma a integral em algo *mais* complicado, não menos.

### Duas perguntas para fazer antes de escolher

Ao olhar para o integrando, pergunte:

1. Se eu derivar esta parte, ela fica mais simples (viro `u`)?
2. Se eu integrar esta outra parte, eu ainda sei fazer isso com facilidade (viro `dv`)?

### O mnemônico LIATE

Quando não é óbvio, use a ordem de prioridade LIATE para escolher `u` — dê preferência, na ordem abaixo, à categoria que aparecer primeiro na lista dentro do seu integrando:

|  | Categoria | Exemplos |
| --- | --- | --- |
| L | Logarítmicas | $\ln x, \ \log_2 x$ |
| I | Inversas trigonométricas | $\arctan x, \ \arcsin x$ |
| A | Algébricas | $x^2, \ 3x+1, \ \sqrt{x}$ |
| T | Trigonométricas | $\sin x, \ \cos x$ |
| E | Exponenciais | $e^x, \ 2^x$ |

:::note[Como usar]
Em $\displaystyle\int x\,e^x\,dx$, temos uma Algébrica ($x$) e uma Exponencial ($e^x$). Como A vem antes de E na sigla LIATE, escolhemos $u = x$ e $dv = e^x dx$.
:::

:::warn[Atenção]
LIATE é um guia, não uma lei universal. Em alguns casos raros a ordem falha; se sua escolha gerar uma integral mais complicada que a original, volte atrás e troque $u$ por $dv$.
:::

## Exemplos resolvidos, do mais simples ao mais elaborado {#exemplos kicker="prática guiada" toc="Exemplos resolvidos"}

::::example{n="1"}
#### Polinômio × exponencial — $\int x\,e^x\,dx$

1. Pelo LIATE, algébrica antes de exponencial:

   $$
   u = x \qquad dv = e^x\,dx
   $$

2. Derivamos $u$ e integramos $dv$:

   $$
   du = dx \qquad v = e^x
   $$

3. Aplicamos a fórmula $\int u\,dv = uv - \int v\,du$:

   $$
   \int x\,e^x\,dx = x e^x - \int e^x\,dx
   $$

4. A integral restante é imediata:

   $$
   \int x\,e^x\,dx = xe^x - e^x + C
   $$

:::result
$\displaystyle \int x\,e^x\,dx = e^x(x-1) + C$
:::
::::

::::example{n="2"}
#### Logaritmo puro — $\int \ln x \, dx$

1. Aqui só há um "fator visível" — o truque é tratar a integral como $\int \ln x \cdot 1 \, dx$:

   $$
   u = \ln x \qquad dv = dx
   $$

2. $$
   du = \frac{1}{x}\,dx \qquad v = x
   $$

3. Substituindo na fórmula:

   $$
   \int \ln x\,dx = x\ln x - \int x \cdot \frac{1}{x}\,dx = x \ln x - \int 1\,dx
   $$

:::result
$\displaystyle \int \ln x\,dx = x\ln x - x + C$
:::
::::

::::example{n="3"}
#### Inversa trigonométrica — $\int \arctan x\,dx$

1. Mesma ideia do exemplo anterior: $dv = dx$.

   $$
   u = \arctan x \qquad dv = dx \qquad du = \frac{1}{1+x^2}\,dx \qquad v = x
   $$

2. $$
   \int \arctan x \, dx = x\arctan x - \int \frac{x}{1+x^2}\,dx
   $$

3. A integral restante sai por substituição simples com $t = 1+x^2$, $dt = 2x\,dx$:

   $$
   \int \frac{x}{1+x^2}\,dx = \frac{1}{2}\ln(1+x^2)
   $$

:::result
$\displaystyle \int \arctan x\,dx = x\arctan x - \frac{1}{2}\ln(1+x^2) + C$
:::
::::

::::example{n="4"}
#### Polinômio de grau 2 — aplicando o método duas vezes — $\int x^2 \cos x\,dx$

1. Primeira rodada — $x^2$ é algébrica, vem antes de trigonométrica:

   $$
   u = x^2 \qquad dv = \cos x\,dx \qquad du = 2x\,dx \qquad v = \sin x
   $$

   $$
   \int x^2\cos x\,dx = x^2\sin x - \int 2x\sin x\,dx
   $$

2. A nova integral $\int 2x \sin x\,dx$ ainda é um produto — repetimos o método:

   $$
   u = 2x \qquad dv = \sin x\,dx \qquad du = 2\,dx \qquad v = -\cos x
   $$

   $$
   \int 2x\sin x\,dx = -2x\cos x + \int 2\cos x\,dx = -2x\cos x + 2\sin x
   $$

3. Juntando as duas rodadas:

   $$
   \int x^2\cos x\,dx = x^2 \sin x -\big(-2x\cos x + 2\sin x\big)
   $$

:::result
$\displaystyle \int x^2\cos x\,dx = x^2\sin x + 2x\cos x - 2\sin x + C$
:::
::::

:::note[Padrão a reconhecer]
Sempre que $u$ é um polinômio de grau $n$, cada aplicação do método reduz o grau em 1. Um polinômio de grau $n$ multiplicado por $e^x$, $\sin x$ ou $\cos x$ exige exatamente $n$ aplicações — isso é justamente o que o método tabular da seção 06 automatiza.
:::

## Integrais cíclicas: quando a integral "volta" {#ciclica kicker="caso especial" toc="Integrais cíclicas"}

Em alguns produtos — tipicamente exponencial × trigonométrica — aplicar o método duas vezes não simplifica: a integral original reaparece do lado direito. Isso não é um erro; é o sinal de resolver por álgebra.

::::example{n="5"}
#### $\int e^x \sin x\,dx$

1. Primeira aplicação, com $u = \sin x$, $dv = e^x dx$:

   $$
   \int e^x \sin x\,dx = e^x \sin x - \int e^x \cos x\,dx
   $$

2. Aplicamos de novo na integral restante, mantendo a mesma escolha de papel (trigonométrica vira $u$):

   $$
   \int e^x \cos x\,dx = e^x\cos x + \int e^x \sin x\,dx
   $$

3. Substituindo de volta, chamando $I = \int e^x \sin x\,dx$:

   $$
   I = e^x\sin x - \Big(e^x\cos x + I\Big) = e^x\sin x - e^x\cos x - I
   $$

4. Agora $I$ aparece dos dois lados — resolvemos como uma equação algébrica:

   $$
   2I = e^x(\sin x - \cos x)
   $$

:::result
$\displaystyle \int e^x \sin x\,dx = \frac{e^x(\sin x - \cos x)}{2} + C$
:::
::::

:::warn[Cuidado]
Na segunda aplicação, mantenha a mesma escolha de qual família vira $u$ (aqui, sempre a trigonométrica). Trocar a escolha no meio do caminho desfaz o primeiro passo e a integral simplesmente volta ao ponto de partida.
:::

## Método tabular (DI) para polinômios de grau alto {#tabular kicker="atalho" toc="Método tabular (DI)"}

Quando $u$ é um polinômio que precisará ser derivado várias vezes, repetir a fórmula manualmente é cansativo e fácil de errar sinal. O método tabular organiza o mesmo processo em uma tabela de duas colunas: **D**erivadas e **I**ntegrais.

::::example{n="6"}
#### $\int x^3 e^{2x}\,dx$ pelo método DI

Coloque $u = x^3$ na coluna D e derive até chegar a zero; coloque $dv = e^{2x}$ na coluna I e integre o mesmo número de vezes:

:::tabular
| sinal | **D (derivar)** | **I (integrar)** |
| --- | --- | --- |
| + | $x^3$ | $e^{2x}$ |
| − | $3x^2$ | $\tfrac{1}{2}e^{2x}$ |
| + | $6x$ | $\tfrac{1}{4}e^{2x}$ |
| − | $6$ | $\tfrac{1}{8}e^{2x}$ |
| + | $0$ | $\tfrac{1}{16}e^{2x}$ |
:::

O resultado é a soma dos produtos **na diagonal**, alternando o sinal indicado na primeira coluna, parando quando a coluna D chega a zero:

$$
\int x^3e^{2x}dx = x^3\cdot\tfrac{1}{2}e^{2x} - 3x^2\cdot\tfrac{1}{4}e^{2x} + 6x\cdot\tfrac{1}{8}e^{2x} - 6\cdot\tfrac{1}{16}e^{2x}
$$

:::result
$\displaystyle \int x^3e^{2x}dx = e^{2x}\Big(\frac{x^3}{2} - \frac{3x^2}{4} + \frac{3x}{4} - \frac{3}{8}\Big) + C$
:::
::::

:::note[Quando usar]
O método tabular só encurta o trabalho quando uma das colunas termina em zero em poucos passos — ou seja, quando $u$ é polinomial. Para integrais cíclicas (seção 05), ele também funciona, mas você para quando a linha da integral se repete, não quando chega a zero.
:::

## Integração por partes com limites {#definida kicker="integral definida" toc="Integral definida"}

Para integrais definidas, a fórmula ganha os limites de integração aplicados diretamente ao termo $uv$:

:::formula[fórmula — caso definido]
$$
\int_a^b u\,dv = \Big[uv\Big]_a^b - \int_a^b v\,du
$$
:::

::::example{n="7"}
#### $\displaystyle\int_0^1 x e^x\,dx$

1. Reaproveitamos a antiderivada do Exemplo 1: $\int x e^x dx = e^x(x-1)$.

2. Avaliamos nos limites:

   $$
   \Big[e^x(x-1)\Big]_0^1 = e^1(1-1) - e^0(0-1) = 0 - (-1)
   $$

:::result
$\displaystyle\int_0^1 xe^x\,dx = 1$
:::
::::

:::note[Dica prática]
É quase sempre mais rápido achar a antiderivada geral primeiro (sem os limites) e só substituir os valores no final, em vez de carregar os limites em cada passo intermediário.
:::

## Erros comuns {#erros kicker="pegadinhas"}

:::warn[Esquecer a constante de integração]
O $+C$ só aparece uma vez, no resultado final — não em cada etapa intermediária do processo.
:::

:::warn[Errar o sinal ao distribuir o menos]
Em $uv - \int v\,du$, se a integral restante já tiver um sinal negativo dentro dela, o sinal final é positivo. Escrever $x^2\sin x -(-2x\cos x + 2\sin x)$ e esquecer de distribuir o sinal negativo é o erro mais comum do método.
:::

:::warn[Escolher u e dv de forma que a integral piora]
Em $\int x e^x dx$, escolher $u = e^x$ e $dv = x\,dx$ funciona algebricamente, mas gera $\int \tfrac{x^2}{2}e^x dx$ — um problema mais difícil que o original. Se isso acontecer, volte e inverta a escolha.
:::

:::warn[Trocar de papel no meio de uma integral cíclica]
Como visto na seção 05, mudar qual função é $u$ na segunda aplicação desfaz o progresso e a integral original reaparece sem nenhuma simplificação.
:::

## Exercícios propostos {#exercicios kicker="pratique" toc="Exercícios"}

Resolva cada integral e só depois clique para conferir a resposta.

- 1$\displaystyle\int x\cos x\,dx$

  ver resposta

  $x\sin x + \cos x + C$

- 2$\displaystyle\int x^2 \ln x\,dx$

  ver resposta

  $\dfrac{x^3}{3}\ln x - \dfrac{x^3}{9} + C$

- 3$\displaystyle\int \arcsin x\,dx$

  ver resposta

  $x\arcsin x + \sqrt{1-x^2} + C$

- 4$\displaystyle\int e^{3x}\cos 2x\,dx$  (integral cíclica)

  ver resposta

  $\dfrac{e^{3x}(3\cos 2x + 2\sin 2x)}{13} + C$

- 5$\displaystyle\int_1^e \ln x\,dx$

  ver resposta

  $1$

- 6$\displaystyle\int x^4 e^{x}\,dx$  (use o método tabular)

  ver resposta

  $e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + C$

:::cta{label="Ver os 35 exercícios" href="/topicos/integracao-por-partes/exercicios"}
#### quer virar craque de verdade?

Esses 6 são o essencial para fixar o método. Para treinar até ficar automático, resolva a lista completa: **35 exercícios** organizados em 7 blocos, do fundamental às integrais cíclicas, combinadas e de desafio.
:::

## Resumo em um relance {#resumo kicker="para revisar rápido" toc="Resumo rápido"}

:::cheat
#### a fórmula

$$
\int u\,dv = uv-\int v\,du
$$

#### ordem para escolher u — LIATE

Logarítmica → Inversa trig. → Algébrica → Trigonométrica → Exponencial

#### truque para "só uma função"

$\int \ln x\,dx$ e $\int \arctan x\,dx$ usam $dv = dx$.

#### polinômio de grau n

Precisa de exatamente $n$ aplicações — use o método tabular.

#### exponencial × trig.

É cíclica: aplique duas vezes mantendo o mesmo papel para cada família e isole $I$.

#### caso definido

$$
\int_a^b u\,dv = [uv]_a^b - \int_a^b v\,du
$$
:::

:::next{kicker="continuando a série"}
#### Outros temas de Cálculo II para este material

Diga quando quiser seguir para o próximo módulo — posso montar cada um com o mesmo formato.

- [Substituição trigonométrica](/topicos/substituicao-trigonometrica)
- [Frações parciais](/topicos/fracoes-parciais)
- [Integrais impróprias](/topicos/integrais-improprias)
- [Sequências e séries](/topicos/sequencias-series)
- Séries de potências e Taylor
- [Coordenadas polares](/topicos/coordenadas-polares)
:::
