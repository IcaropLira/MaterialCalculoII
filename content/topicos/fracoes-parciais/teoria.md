---
title: "Frações parciais"
number: "04"
summary: "Decompondo funções racionais em frações mais simples para integrar termo a termo — casos lineares, repetidos e quadráticos."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Transforme uma função racional em uma soma de frações simples para integrar cada parcela separadamente."
---

## Quando usar frações parciais {#quando}

Use quando o integrando é uma função racional $P(x)/Q(x)$, isto é, quociente de polinômios. Antes de decompor, compare os graus: se $\deg P\geq\deg Q$, faça primeiro a divisão polinomial.

## Preparação e fatoração {#propria}

Uma fração é própria quando $\deg P<\deg Q$. Fatore o denominador sobre os reais. Cada fator determina o formato dos termos da decomposição.

## Os quatro formatos principais {#casos}

Fator linear simples: $\frac{A}{x-a}$. Linear repetido: $\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots$. Quadrático irredutível: $\frac{Ax+B}{x^2+px+q}$. Quadrático repetido: inclua uma parcela com numerador linear para cada potência do fator.

## Exemplo resolvido {#exemplo}

Decomponha e integre $\frac{3x+5}{(x+1)(x+2)}$. Escreva $\frac{3x+5}{(x+1)(x+2)}=\frac A{x+1}+\frac B{x+2}$. Igualando numeradores: $3x+5=A(x+2)+B(x+1)$. Para $x=-1$, temos $A=2$; para $x=-2$, $B=1$. Logo a integral é $2\ln|x+1|+\ln|x+2|+C$.

## Quando aparece um quadrático {#quadratico}

Para $x^2+px+q$ irredutível, o numerador precisa ser linear, $Ax+B$. Separe o numerador como múltiplo da derivada $2x+p$ mais uma constante. A primeira parcela vira logaritmo; a segunda, após completar quadrados, vira arco-tangente.

## Checklist e erros comuns {#erros}

Não esqueça a divisão polinomial quando a fração é imprópria; não omita potências de fatores repetidos; use $Ax+B$, não apenas uma constante, sobre quadráticos irredutíveis; confira a decomposição recombinando as frações.
