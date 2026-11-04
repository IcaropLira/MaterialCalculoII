---
title: "Frações parciais"
number: "04"
summary: "Decomposição de funções racionais: divisão polinomial, fatores lineares, fatores repetidos e quadráticos irredutíveis."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Entenda por que a decomposição funciona, como montar cada formato e como integrar sem perder coeficientes."
---

## 1. Quando usar frações parciais {#quando}

Frações parciais são uma técnica para integrar funções racionais, isto é, quocientes de polinômios:
$$f(x)=\frac{P(x)}{Q(x)}.$$
A ideia é reescrever uma fração complicada como uma soma de frações mais simples cujas primitivas conhecemos (logaritmos, potências e arco-tangente).

Antes de começar, verifique os graus:
- Se $\deg P<\deg Q$, a fração é **própria** e pode ser decomposta diretamente.
- Se $\deg P\geq\deg Q$, a fração é **imprópria**. Faça primeiro a divisão polinomial:
$$\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)},\qquad \deg R<\deg Q.$$
Só a parte própria restante será decomposta.

## 2. Por que a decomposição é possível? {#propria}

A fatoração do denominador indica quais parcelas devem aparecer. Por exemplo, se $Q(x)=(x-a)(x-b)$, procuramos constantes $A,B$ tais que
$$\frac{P(x)}{(x-a)(x-b)}=\frac A{x-a}+\frac B{x-b}.$$
Multiplicar pelo denominador comum elimina as frações e produz uma identidade polinomial. Como a identidade deve valer para todo $x$ do domínio, podemos comparar coeficientes ou escolher valores convenientes de $x$.

O procedimento depende da fatoração real do denominador. Cada fator linear e cada fator quadrático irredutível exige um formato específico no numerador.

## 3. Fatores lineares distintos {#lineares}

Para fatores distintos $(x-a)(x-b)$, use
$$\frac{P(x)}{(x-a)(x-b)}=\frac A{x-a}+\frac B{x-b}.$$
Depois de eliminar os denominadores:
$$P(x)=A(x-b)+B(x-a).$$
Quando possível, escolha $x=a$ para eliminar a parcela com $B$ e $x=b$ para eliminar a parcela com $A$. Se não houver valores convenientes, expanda e compare coeficientes.

**Exemplo.** Para $\frac{3x+5}{(x+1)(x+2)}$, escrevemos
$$3x+5=A(x+2)+B(x+1).$$
Com $x=-1$, $A=2$; com $x=-2$, $B=1$. Assim, a fração é $2/(x+1)+1/(x+2)$ e a integral é $2\ln|x+1|+\ln|x+2|+C$.

## 4. Fatores lineares repetidos {#repetidos}

Se o denominador contém $(x-a)^m$, não basta incluir somente $A/(x-a)^m$. É obrigatório incluir todas as potências:
$$
\frac{P(x)}{(x-a)^m}
=\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_m}{(x-a)^m},
$$
com as demais parcelas correspondentes aos outros fatores do denominador.

A razão é algébrica: uma única constante não consegue representar, em geral, todos os graus de liberdade necessários para reconstruir o numerador. Após multiplicar pelo denominador comum, compare coeficientes ou substitua raízes quando isso simplificar.

Na integração, lembre-se de distinguir:
$$\int\frac{dx}{x-a}=\ln|x-a|+C,$$
e, para $k\ne1$,
$$\int\frac{dx}{(x-a)^k}=\frac{(x-a)^{1-k}}{1-k}+C.$$

## 5. Fatores quadráticos irredutíveis {#quadratico}

Um fator quadrático sem raízes reais, como $x^2+1$ ou $x^2+4x+5$, exige numerador linear:
$$\frac{Ax+B}{x^2+px+q}.$$
Não use apenas uma constante: em geral, ela não fornece parâmetros suficientes.

Para integrar, separe o numerador em uma parcela proporcional à derivada do denominador e outra constante:
$$Ax+B=\lambda(2x+p)+\mu.$$
A parcela com $2x+p$ gera logaritmo por substituição. Na parcela restante, complete o quadrado:
$$x^2+px+q=\left(x+\frac p2\right)^2+\left(q-\frac{p^2}{4}\right).$$
Quando $q-p^2/4>0$, a integral restante tem a forma de arco-tangente:
$$\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua+C.$$

## 6. Quadráticos repetidos {#quadratico-repetido}

Se $(x^2+px+q)^m$ aparece no denominador e o quadrático é irredutível, inclua um numerador linear para cada potência:
$$
\frac{A_1x+B_1}{x^2+px+q}
+\frac{A_2x+B_2}{(x^2+px+q)^2}
+\cdots+
\frac{A_mx+B_m}{(x^2+px+q)^m}.
$$
A decomposição pode ser combinada com fatores lineares que também apareçam no denominador.

## 7. Roteiro completo e conferência {#roteiro}

1. Fatore completamente o denominador sobre os reais.
2. Compare os graus e faça divisão polinomial se a fração for imprópria.
3. Escreva todas as parcelas exigidas por fatores simples, repetidos e quadráticos.
4. Multiplique pelo denominador comum.
5. Determine os coeficientes por substituição ou comparação de coeficientes.
6. Integre cada parcela separadamente.
7. Confira recombinando as frações; derivar a resposta também é uma boa verificação.

:::warn[Atenção aos erros frequentes]
- Esquecer a divisão polinomial em frações impróprias.
- Omitir potências intermediárias de um fator repetido.
- Usar numerador constante sobre um quadrático irredutível.
- Perder o sinal ao integrar $(x-a)^{-k}$.
- Omitir o módulo no logaritmo quando o argumento pode ser negativo.
- Encontrar coeficientes sem verificar se a decomposição recompõe o numerador original.
:::

## 8. Resumo das primitivas que aparecem {#resumo}

$$\int\frac{dx}{x-a}=\ln|x-a|+C$$
$$\int\frac{dx}{(x-a)^k}=\frac{(x-a)^{1-k}}{1-k}+C,\quad k\ne1$$
$$\int\frac{2x+p}{x^2+px+q}dx=\ln|x^2+px+q|+C$$
$$\int\frac{dx}{(x-h)^2+a^2}=\frac1a\arctan\left(\frac{x-h}{a}\right)+C$$

## Próximo passo {#proximo}

Resolva os exercícios deste tópico escrevendo a decomposição inteira antes de integrar. O objetivo é automatizar a escolha do formato correto, não decorar uma resposta isolada.
