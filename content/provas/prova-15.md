---
title: "2025.1 · 2º Estágio (tarde)"
summary: "Impróprias com $\\ln x$ e $\\frac1{\\sqrt x}$, comparação, por partes, substituição simples, completar quadrado e substituição trigonométrica numa imprópria."
tags: ["impróprias", "comparação", "por partes", "substituição", "subst. trigonométrica"]
level: "médio"
status: "available"
eyebrow: "cálculo ii · prova resolvida · UFCG 2025.1"
lede: "Prova do 2º estágio, turno da tarde: integrais impróprias e técnicas de integração, resolvidas passo a passo."
instruction: "Resolva no papel antes de abrir o gabarito. Antes de integrar uma imprópria, marque onde está o problema (no infinito ou num ponto onde a função explode)."
gabaritoIntro: "Cada item começa pela técnica e pelo porquê; depois vêm as contas e a conclusão."
cta: {"text": "Reveja convergência e os testes de comparação no tópico de integrais impróprias.", "label": "Integrais impróprias", "href": "/topicos/integrais-improprias"}
---

## Calcule as integrais impróprias.

### a) $\displaystyle\int_1^{\infty}\frac{1}{x\,(\ln x)^2}\,dx$

**Atenção:** esta integral é imprópria **duas vezes**: no $\infty$ e em $x=1$, onde $\ln 1=0$ zera o denominador.

1. Antiderivada: $u=\ln x$, $du=\frac{dx}{x}$:

   $$
   \int\frac{dx}{x(\ln x)^2}=\int\frac{du}{u^2}=-\frac1u=-\frac{1}{\ln x}+C .
   $$

2. Separe os dois problemas (por exemplo, em $x=e$) e olhe o pedaço perto de $1$:

   $$
   \int_1^{e}\frac{dx}{x(\ln x)^2}=\lim_{a\to1^+}\left[-\frac1{\ln x}\right]_a^{e}=\lim_{a\to1^+}\left(-1+\frac{1}{\ln a}\right)=+\infty,
   $$

   porque $\ln a\to0^+$.

3. Se um pedaço diverge, a integral inteira diverge (o pedaço $\int_e^\infty$ converge para $1$, mas isso não salva).

:::result{kind="diverge"}
**Diverge** (o problema está em $x=1$, onde $\ln x=0$).
:::

:::warn[Armadilha]
Quem olha só para o $\infty$ conclui "converge e vale $\frac{1}{\ln1}$…", que não existe. Sempre verifique se o integrando explode **dentro** do intervalo ou na ponta finita. Se o limite inferior fosse $2$, a resposta seria $\frac1{\ln2}$ (convergente).
:::

### b) $\displaystyle\int_0^1\frac{dx}{\sqrt x}$

1. Problema em $x=0$: $\displaystyle\lim_{a\to0^+}\int_a^1x^{-1/2}dx=\lim_{a\to0^+}\Big[2\sqrt x\Big]_a^1=\lim_{a\to0^+}\left(2-2\sqrt a\right)=2$.

:::result{kind="converge"}
**Converge** e vale $2$.
:::

## Use um teste de comparação para verificar a convergência da integral.

### $\displaystyle\int_2^{\infty}\frac{1}{x^2+\sqrt x}\,dx$

1. Para $x\ge2$: $x^2+\sqrt x>x^2$, logo $0<\dfrac1{x^2+\sqrt x}<\dfrac1{x^2}$.
2. $\displaystyle\int_2^\infty\frac{dx}{x^2}=\lim_{b\to\infty}\left[-\frac1x\right]_2^b=\frac12$ converge ($p=2>1$).
3. Pelo teste da comparação, a integral dada converge.

:::result{kind="converge"}
**Converge**, por comparação com $\displaystyle\int_2^\infty\frac{dx}{x^2}=\frac12$.
:::

## Resolva as seguintes integrais definidas e indefinidas.

### a) $\displaystyle\int x\cos x\,dx$

1. Por partes: $u=x$, $dv=\cos x\,dx$ $\Rightarrow$ $du=dx$, $v=\operatorname{sen}x$.
2. $\displaystyle\int x\cos x\,dx=x\operatorname{sen}x-\int\operatorname{sen}x\,dx=x\operatorname{sen}x+\cos x+C$.
3. Conferência: $(x\operatorname{sen}x+\cos x)'=\operatorname{sen}x+x\cos x-\operatorname{sen}x=x\cos x$ ✓.

:::result
$x\operatorname{sen}x+\cos x+C$
:::

### b) $\displaystyle\int_0^1xe^{-x^2}\,dx$

1. Substituição: $u=-x^2$, $du=-2x\,dx\Rightarrow x\,dx=-\frac12du$. Limites: $u(0)=0$, $u(1)=-1$.
2. $\displaystyle\int_0^1xe^{-x^2}dx=-\frac12\int_0^{-1}e^u\,du=-\frac12\left(e^{-1}-1\right)=\frac12\left(1-\frac1e\right)$.

:::result
$\dfrac12\left(1-\dfrac1e\right)\approx0{,}316$
:::

### c) $\displaystyle\int\frac{dx}{x^2+4x+5}$

**Técnica.** O denominador não tem raízes reais ($\Delta=16-20<0$): **complete o quadrado** e caia num arco-tangente.

1. $x^2+4x+5=(x+2)^2+1$.
2. $u=x+2$, $du=dx$: $\displaystyle\int\frac{du}{u^2+1}=\operatorname{arctg}u+C$.

:::result
$\operatorname{arctg}(x+2)+C$
:::

:::note[Observação sobre o gabarito do professor]
Na resolução manuscrita que circulou, o denominador aparece como $x^2+4x-5=(x+5)(x-1)$, que se resolve por frações parciais: $\dfrac16\ln\left|\dfrac{x-1}{x+5}\right|+C$. Com o enunciado como está na prova ($+5$), a resposta é o arco-tangente acima.
:::

### d) $\displaystyle\int_0^1\frac{x^2}{\sqrt{1-x^2}}\,dx$

**Técnica.** $\sqrt{1-x^2}$: $x=\operatorname{sen}\theta$. É imprópria em $x=1$ (denominador zera), mas a substituição resolve sem sustos.

1. $x=\operatorname{sen}\theta$, $dx=\cos\theta\,d\theta$, $\sqrt{1-x^2}=\cos\theta$. Limites: $x=0\Rightarrow\theta=0$; $x\to1^-\Rightarrow\theta\to\frac\pi2$.
2. $\displaystyle\int\frac{\operatorname{sen}^2\theta}{\cos\theta}\cos\theta\,d\theta=\int\operatorname{sen}^2\theta\,d\theta=\frac12\int(1-\cos2\theta)\,d\theta=\frac12\left(\theta-\frac{\operatorname{sen}2\theta}{2}\right)$.
3. Avalie de $0$ a $\frac\pi2$: $\dfrac12\left(\dfrac\pi2-0\right)-0=\dfrac\pi4$.

:::result{kind="converge"}
**Converge** e vale $\dfrac{\pi}{4}$.
:::
