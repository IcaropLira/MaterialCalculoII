---
title: "Integrais impróprias"
number: "05"
summary: "Integrais em intervalos infinitos ou com singularidades: definição por limites, convergência, teste p e comparação."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Aprenda a transformar uma integral imprópria em limites e a decidir, com rigor, se sua área acumulada é finita."
---

## 1. O que torna uma integral imprópria? {#definicao}

Uma integral definida usual pressupõe que o intervalo seja limitado e que a função seja suficientemente bem comportada nele. A integral é **imprópria** quando pelo menos uma dessas condições falha. Há dois tipos principais:

1. **Intervalo ilimitado:** um ou os dois extremos são $+\infty$ ou $-\infty$.
2. **Integrando ilimitado:** a função não é limitada em algum extremo ou em um ponto interior do intervalo.

A definição é feita por limites. O símbolo $\infty$ não é um número e nunca deve ser substituído diretamente em uma primitiva.

## 2. Intervalo infinito à direita ou à esquerda {#infinito}

Se $f$ é contínua em cada intervalo limitado $[a,b]$, definimos
$$
\int_a^{\infty}f(x)\,dx
=\lim_{b\to\infty}\int_a^b f(x)\,dx.
$$
A integral converge se esse limite existe e é finito. Caso contrário, diverge.

Para o extremo esquerdo:
$$
\int_{-\infty}^{b}f(x)\,dx
=\lim_{a\to-\infty}\int_a^b f(x)\,dx.
$$
Se os dois extremos são infinitos, escolha um ponto real $c$ e separe:
$$
\int_{-\infty}^{\infty}f(x)\,dx
=\int_{-\infty}^{c}f(x)\,dx+\int_c^{\infty}f(x)\,dx.
$$
As duas integrais precisam convergir separadamente.

**Exemplo.**
$$
\int_1^{\infty}\frac1{x^2}dx
=\lim_{b\to\infty}\left[-\frac1x\right]_1^b
=\lim_{b\to\infty}\left(1-\frac1b\right)=1.
$$
O limite é finito, portanto a integral converge.

## 3. Singularidade em um extremo {#extremo}

Se $f$ fica ilimitada quando $x\to a^+$, definimos
$$
\int_a^b f(x)dx
=\lim_{t\to a^+}\int_t^b f(x)dx.
$$
Se a singularidade está no extremo direito:
$$
\int_a^b f(x)dx
=\lim_{t\to b^-}\int_a^t f(x)dx.
$$
O sentido lateral importa: aproximamos o extremo sempre por pontos que pertencem ao intervalo.

**Exemplo.**
$$
\int_0^1\frac1{\sqrt{x}}dx
=\lim_{t\to0^+}[2\sqrt{x}]_t^1
=\lim_{t\to0^+}(2-2\sqrt t)=2.
$$
A função cresce sem limite perto de zero, mas a área acumulada é finita.

## 4. Singularidade no interior do intervalo {#singularidade}

Se $f$ é ilimitada em $c\in(a,b)$, a integral deve ser separada:
$$
\int_a^b f(x)dx
=\int_a^c f(x)dx+\int_c^b f(x)dx,
$$
e cada parcela é definida por seu próprio limite lateral:
$$
\lim_{t\to c^-}\int_a^t f(x)dx
\quad\text{e}\quad
\lim_{s\to c^+}\int_s^b f(x)dx.
$$
**Ambos** precisam ser finitos. Não se pode cancelar infinitos ou calcular uma primitiva atravessando a descontinuidade.

Por exemplo, $\int_{-1}^1 1/x\,dx$ não converge como integral imprópria usual: os dois lados divergem, embora uma simetria possa sugerir um valor principal de Cauchy igual a zero. Valor principal é outro conceito e não altera a definição usada aqui.

## 5. Teste p: duas situações diferentes {#p}

É essencial distinguir singularidade no infinito e singularidade na origem.

**No intervalo $[1,\infty)$:**
$$
\int_1^{\infty}\frac1{x^p}dx
\begin{cases}
\text{converge},&p>1,\\
\text{diverge},&p\leq1.
\end{cases}
$$
Para $p\ne1$, uma primitiva é $x^{1-p}/(1-p)$. O limite no infinito é finito exatamente quando $1-p<0$, isto é, $p>1$. Para $p=1$, aparece $\ln x$, que cresce sem limite.

**No intervalo $(0,1]$:**
$$
\int_0^1\frac1{x^p}dx
\begin{cases}
\text{converge},&p<1,\\
\text{diverge},&p\geq1.
\end{cases}
$$
Agora o limite problemático é $x\to0^+$. Para $p\ne1$, o termo $x^{1-p}$ tende a zero somente quando $1-p>0$.

## 6. Testes de comparação {#comparacao}

Para funções não negativas, a comparação permite decidir convergência sem calcular a integral exata.

- Se $0\leq f(x)\leq g(x)$ e $\int g$ converge, então $\int f$ também converge.
- Se $0\leq g(x)\leq f(x)$ e $\int g$ diverge, então $\int f$ também diverge.

Na comparação no limite, se $f,g>0$ e
$$L=\lim_{x\to\infty}\frac{f(x)}{g(x)}$$
é um número finito e positivo, as duas integrais têm o mesmo comportamento. A mesma ideia vale perto de uma singularidade, usando o limite lateral apropriado.

## 7. Estratégia de resolução {#estrategia}

1. Localize todos os extremos infinitos e todas as singularidades.
2. Escreva um limite para cada ponto problemático.
3. Calcule a primitiva apenas no intervalo regular.
4. Aplique o limite com o lado correto.
5. Declare convergente somente se todos os limites necessários forem finitos.
6. Se a primitiva for difícil, procure o teste $p$ ou compare com uma função conhecida.

:::warn[Erros que invalidam a conclusão]
- Substituir infinito diretamente na primitiva.
- Ignorar uma singularidade interna.
- Somar dois limites divergentes e alegar cancelamento.
- Confundir $\int_1^\infty x^{-p}dx$ com $\int_0^1 x^{-p}dx$: os critérios são opostos.
- Dizer que uma integral converge apenas porque a função tende a zero.
:::

## 8. Convergência não é o mesmo que área geométrica {#interpretacao}

Se $f\geq0$, a integral imprópria pode representar uma área ilimitada no eixo horizontal. A convergência significa que essa área total é finita, mesmo que a região se estenda indefinidamente ou que a altura da curva cresça perto de um ponto. Se $f$ muda de sinal, a integral mede acumulação com sinal; para área geométrica, é necessário considerar $|f|$ e seus pontos de mudança de sinal.
