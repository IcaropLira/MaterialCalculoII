---
title: "Integrais impróprias"
number: "05"
summary: "Limites de integração infinitos e descontinuidades no integrando — como calcular e como decidir convergência ou divergência."
status: "available"
eyebrow: "cálculo ii · técnicas e aplicações"
lede: "Use limites para tratar intervalos infinitos ou integrandos que explodem dentro do intervalo, e decida se a integral converge."
---

## O que torna uma integral imprópria? {#definicao}

Há dois casos: um limite de integração é infinito, ou a função fica ilimitada em um extremo ou ponto interno do intervalo. A integral é definida por um limite, nunca por substituição direta de infinito.

## Intervalos infinitos {#infinito}

Defina $\int_a^{\infty} f(x)\,dx=\lim_{b\to\infty}\int_a^b f(x)\,dx$. Analogamente, para $-\infty$, use um limite quando o extremo tende a menos infinito. Se o limite é finito, converge; se não existe ou é infinito, diverge.

## Singularidade no intervalo {#singularidade}

Se $f$ explode em $c\in(a,b)$, separe: $\int_a^b f=\lim_{t\to c^-}\int_a^t f+\lim_{t\to c^+}\int_t^b f$. Os dois limites precisam convergir. Não basta que uma soma informal pareça finita.

## Teste p e comparação {#p}

$\int_1^{\infty}\frac{1}{x^p}\,dx$ converge exatamente quando $p>1$. Já $\int_0^1 x^{-p}\,dx$ converge exatamente quando $p<1$. Para funções positivas, comparação com uma integral conhecida pode provar convergência ou divergência.

## Exemplo resolvido {#exemplo}

$\int_1^{\infty}\frac1{x^2}\,dx=\lim_{b\to\infty}[-1/x]_1^b=\lim_{b\to\infty}(1-1/b)=1$, portanto converge. Em contraste, $\int_1^{\infty}\frac1x\,dx=\lim_{b\to\infty}\ln b=\infty$, portanto diverge.

## Checklist e erros comuns {#erros}

Escreva o limite antes de calcular; separe em cada singularidade interna; verifique os dois lados; lembre que um único limite divergente torna a integral toda divergente.
