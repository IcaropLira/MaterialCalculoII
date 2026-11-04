---
title: "Lista 03"
number: "03"
summary: "Sequências, séries geométricas e telescópicas, testes de convergência (integral, comparação, razão, raiz, série alternada), séries de potências, Taylor e Maclaurin."
tags: ["sequências", "séries", "convergência", "Taylor"]
status: "available"
eyebrow: "cálculo ii · lista de exercícios"
heading: "Lista 03: enunciados"
lede: "A lista original organizada por assunto. Resolva no seu ritmo e depois abra as resoluções comentadas."
kind: "lista"
source: "UFCG · Prof. Weiller F. Chaves Barboza"
itemsCount: "170"
---

## Sequências {#sequencias}

### 1. Em cada um dos exercícios abaixo, dê uma fórmula para o $n$-ésimo termo $a_n$ de uma sequência $\{a_n\}$. Encontre os valores de $a_1, a_2, a_3$ e $a_4$.

1. $a_n=\dfrac{1-(-1)^n}{n}$
2. $a_n=\dfrac{1}{n!}$
3. $a_n=\dfrac{(-1)^{n+1}}{2n-1}$
4. $a_n=2+(-1)^n$
5. $a_n=\dfrac{2^n}{2^{n+1}}$
6. $a_n=\dfrac{2^n-1}{2^n}$

### 2. Em cada um dos exercícios abaixo, dê um ou dois termos iniciais de uma sequência, bem como uma fórmula de recursão para os termos remanescentes. Escreva os dez termos iniciais da sequência.

1. $a_1=1,\ a_{n+1}=a_n+\dfrac{1}{2^n}$
2. $a_1=1,\ a_{n+1}=\dfrac{a_n}{n+1}$
3. $a_1=2,\ a_{n+1}=\dfrac{(-1)^{n+1}a_n}{2}$
4. $a_1=-2,\ a_{n+1}=\dfrac{n\cdot a_n}{n+1}$
5. $a_1=a_2=1,\ a_{n+2}=a_{n+1}+a_n$
6. $a_1=2,\ a_2=-1,\ a_{n+2}=\dfrac{a_{n+1}}{a_n}$

### 3. Verifique quais as sequências abaixo convergem ou divergem.

1. $a_n=2+(0{,}1)^n$
2. $a_n=\dfrac{n+(-1)^n}{n}$
3. $a_n=\dfrac{2n+1}{1-3\sqrt{n}}$
4. $a_n=\dfrac{n+3}{n^2+5n+6}$
5. $a_n=\left(\dfrac{n+1}{2n}\right)\left(1-\dfrac{1}{n}\right)$
6. $a_n=\dfrac{\ln(n)}{\sqrt{n}}$
7. $a_n=\dfrac{n!}{n^n}$ (dica: compare com $1/n$)
8. $a_n=\left(\dfrac{1}{n}\right)^{\frac{1}{\ln(n)}}$
9. $a_n=\ln\left[\left(1+\dfrac{1}{n}\right)^n\right]$
10. $a_n=\left(\dfrac{1}{3}\right)^n+\dfrac{1}{\sqrt{2^n}}$
11. $a_n=\left(\dfrac{3}{n}\right)^{1/n}$

## Séries geométricas e telescópicas {#geometricas}

### 4. Escreva os primeiros termos da série para mostrar como a série começa. Então, calcule a soma da série.

1. $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{4^n}$
2. $\displaystyle\sum_{n=0}^{\infty}\left(\frac{5}{2^n}+\frac{1}{3^n}\right)$
3. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{4^n}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{2^n}+\frac{(-1)^n}{5^n}$
5. $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n5}{4^n}$
6. $\displaystyle\sum_{n=0}^{\infty}\left(\frac{2^{n+1}}{5^n}\right)$

### 5. Coloque na notação de série e determine se a série geométrica converge ou diverge. Se a série converge, encontre sua soma.

1. $1+\left(\dfrac{2}{5}\right)+\left(\dfrac{2}{5}\right)^2+\left(\dfrac{2}{5}\right)^3+\left(\dfrac{2}{5}\right)^4+\cdots$
2. $1+(-3)+(-3)^2+(-3)^3+(-3)^4+\cdots$
3. $\left(\dfrac{1}{8}\right)+\left(\dfrac{1}{8}\right)^2+\left(\dfrac{1}{8}\right)^3+\left(\dfrac{1}{8}\right)^4+\left(\dfrac{1}{8}\right)^5+\cdots$
4. $\left(-\dfrac{2}{3}\right)^2+\left(-\dfrac{2}{3}\right)^3+\left(-\dfrac{2}{3}\right)^4+\left(-\dfrac{2}{3}\right)^5+\left(-\dfrac{2}{3}\right)^6+\cdots$

### 6. Expresse cada um dos números nos exercícios abaixo como a razão de dois inteiros.

1. $0{,}\overline{23}=0{,}23\,23\,23\ldots$
2. $0{,}\overline{234}=0{,}234\,234\,234\ldots$
3. $0{,}\overline{7}=0{,}7777\ldots$
4. $0{,}\overline{d}=0{,}dddd\ldots$, onde $d$ é um dígito
5. $0{,}0\overline{6}=0{,}06666\ldots$
6. $1{,}\overline{414}=1{,}414\,414\,414\ldots$
7. $1{,}24\overline{123}=1{,}24\,123\,123\,123\ldots$
8. $3{,}\overline{142857}=3{,}142857\,142857\ldots$

### 7. Encontre uma fórmula para a $n$-ésima soma parcial da série telescópica e use-a para determinar se a série converge ou diverge. Se a série converge, encontre a soma.

1. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n+1}\right)$
2. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{3}{n^2}-\frac{3}{(n+1)^2}\right)$
3. $\displaystyle\sum_{n=1}^{\infty}\left(\ln\sqrt{n+1}-\ln\sqrt{n}\right)$
4. $\displaystyle\sum_{n=1}^{\infty}\left(\tan(n)-\tan(n-1)\right)$
5. $\displaystyle\sum_{n=1}^{\infty}\left(\cos^{-1}\left(\frac{1}{n+1}\right)-\cos^{-1}\left(\frac{1}{n+2}\right)\right)$
6. $\displaystyle\sum_{n=1}^{\infty}\left(\sqrt{2n+4}-\sqrt{2n+3}\right)$

## Teste da integral, comparação e comparação no limite {#integral-comparacao}

### 8. Use o teste da integral para determinar se as séries convergem ou divergem. Certifique-se de que as condições do teste da integral sejam satisfeitas.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2}$
2. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{0{,}7}}$
3. $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n^2+4}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n+4}$
5. $\displaystyle\sum_{n=1}^{\infty}e^{-2n}$
6. $\displaystyle\sum_{n=2}^{\infty}\frac{n-4}{n^2-2n+1}$
7. $\displaystyle\sum_{n=1}^{\infty}\frac{\ln(n^2)}{n}$
8. $\displaystyle\sum_{n=1}^{\infty}\frac{n^2}{e^{n/3}}$

### 9. Quais das séries abaixo convergem ou divergem? Justifique sua resposta! Lembre-se de que pode existir mais de uma forma para determinar a convergência ou divergência.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{10^n}$
2. $\displaystyle\sum_{n=1}^{\infty}-\frac{1}{8^n}$
3. $\displaystyle\sum_{n=1}^{\infty}\frac{\ln(n)}{n}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n}(\sqrt{n}+1)}$
5. $\displaystyle\sum_{n=1}^{\infty}\frac{3}{\sqrt{n}}$
6. $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{3^n}$
7. $\displaystyle\sum_{n=1}^{\infty}\frac{e^n}{1+e^{2n}}$
8. $\displaystyle\sum_{n=2}^{\infty}\frac{\sqrt{n}}{\ln(n)}$
9. $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n+1}$
10. $\displaystyle\sum_{n=1}^{\infty}\frac{5}{n+1}$
11. $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{n+1}$
12. $\displaystyle\sum_{n=1}^{\infty}\frac{-2}{n\sqrt{n}}$

### 10. Utilize o teste da comparação para determinar se cada uma das séries abaixo converge ou diverge.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^2+27}$
2. $\displaystyle\sum_{n=1}^{\infty}\frac{n-1}{n^4+2}$
3. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{\sqrt{n}-1}$
4. $\displaystyle\sum_{n=2}^{\infty}\frac{n+2}{n^2-n}$
5. $\displaystyle\sum_{n=1}^{\infty}\frac{\cos^2(n)}{n^{3/2}}$
6. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n3^n}$
7. $\displaystyle\sum_{n=1}^{\infty}\sqrt{\frac{n+4}{n^4+4}}$
8. $\displaystyle\sum_{n=1}^{\infty}\frac{\sqrt{n}+1}{\sqrt{n^2+3}}$

### 11. Utilize o teste da comparação no limite para determinar se as séries abaixo convergem ou divergem.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{n-2}{n^3-n^2+3}$ (dica: comparação no limite com $\sum 1/n^2$)
2. $\displaystyle\sum_{n=2}^{\infty}\frac{n(n+1)}{(n^2+1)(n-1)}$
3. $\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{3+4^n}$
4. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{\ln(n)}$ (dica: comparação no limite com $\sum 1/n$)
5. $\displaystyle\sum_{n=1}^{\infty}\ln\left(1+\frac{1}{n^2}\right)$ (dica: comparação no limite com $\sum 1/n^2$)

### 12. Utilize qualquer método para determinar se a série converge ou diverge.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{2\sqrt{n}+\sqrt[3]{n}}$
2. $\displaystyle\sum_{n=1}^{\infty}\frac{\sin^2(n)}{2^n}$
3. $\displaystyle\sum_{n=3}^{\infty}\frac{5n^3-3n}{n^2(n-2)(n^2+5)}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{1}{1+\ln(n)}$

## Teste da razão e teste da raiz {#razao-raiz}

### 13. Utilize o teste da razão para determinar se cada série converge ou diverge.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{2n}{n!}$
2. $\displaystyle\sum_{n=1}^{\infty}\frac{n+2}{3n}$
3. $\displaystyle\sum_{n=1}^{\infty}\frac{(n-1)!}{(n+1)!^2}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n+1}}{n3^{n-1}}$
5. $\displaystyle\sum_{n=1}^{\infty}\frac{n^4}{4^n}$
6. $\displaystyle\sum_{n=2}^{\infty}\frac{3^{n+2}}{\ln(n)}$
7. $\displaystyle\sum_{n=1}^{\infty}\frac{n^2\cdot(n+2)!}{n!\cdot3^{2n}}$
8. $\displaystyle\sum_{n=1}^{\infty}\frac{n5^n}{(2n+3)\ln(n+1)}$

### 14. Utilize o teste da raiz para determinar se cada uma das séries converge ou diverge.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{7}{(2n+5)^n}$
2. $\displaystyle\sum_{n=1}^{\infty}\frac{4^n}{(3n)^n}$
3. $\displaystyle\sum_{n=1}^{\infty}\left(\frac{4n+3}{3n-5}\right)^n$
4. $\displaystyle\sum_{n=1}^{\infty}\left(\ln\left(e^2+\frac{1}{n}\right)\right)^{n+1}$
5. $\displaystyle\sum_{n=1}^{\infty}\frac{8}{\left(3+\frac{1}{n}\right)^{2n}}$
6. $\displaystyle\sum_{n=1}^{\infty}\sin^n\left(\frac{1}{\sqrt{n}}\right)$
7. $\displaystyle\sum_{n=1}^{\infty}\left(1-\frac{1}{n}\right)^{n^2}$
8. $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n^{1+n}}$

### 15. Quais das séries abaixo convergem ou divergem? Justifique sua resposta! Lembre-se de que pode existir mais de uma forma para determinar a convergência ou divergência.

1. $\displaystyle\sum_{n=1}^{\infty}\frac{n^{\sqrt{2}}}{2^n}$
2. $\displaystyle\sum_{n=1}^{\infty}n^2e^{-n}$
3. $\displaystyle\sum_{n=1}^{\infty}n!\,e^{-n}$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{n^{10}}{10^n}$
5. $\displaystyle\sum_{n=1}^{\infty}\left(1-\frac{1}{3n}\right)^n$
6. $\displaystyle\sum_{n=1}^{\infty}\frac{\ln n}{n^3}$
7. $\displaystyle\sum_{n=1}^{\infty}\frac{(\ln n)^n}{n^n}$
8. $\displaystyle\sum_{n=1}^{\infty}\frac{2+(-1)^n}{1{,}25^n}$

## Séries alternadas, convergência absoluta e condicional {#alternadas}

### 16. Determine se as séries alternadas a seguir convergem ou divergem. Algumas das séries não satisfazem as condições do teste da série alternada.

1. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{\sqrt{n}}$
2. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{n^{3/2}}$
3. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{n3^n}$
4. $\displaystyle\sum_{n=2}^{\infty}(-1)^n\frac{4}{(\ln n)^2}$
5. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{n}{n^2+1}$
6. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n^2+5}{n^2+4}$
7. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{2^n}{n^2}$
8. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{10^n}{(n+1)!}$
9. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\left(\frac{n}{10}\right)^n$

### 17. Determine se as séries a seguir convergem absolutamente, convergem (apenas condicionalmente) ou divergem. Justifique cada resposta.

1. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}(0{,}1)^n$
2. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{(0{,}1)^n}{n}$
3. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{1}{\sqrt{n}}$
4. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{1}{1+\sqrt{n}}$
5. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n}{n^3+1}$
6. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n!}{2^n}$
7. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{1}{n+3}$
8. $\displaystyle\sum_{n=1}^{\infty}(-1)^n\frac{\sin n}{n^2}$
9. $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n+3}{n+5}$

## Séries de potências, Taylor e Maclaurin {#potencias}

### 18. (a) Encontre o raio e o intervalo de convergência da série. (b) Para quais valores de $x$ a série converge absolutamente? (c) Para quais valores de $x$ a série converge condicionalmente?

1. $\displaystyle\sum_{n=0}^{\infty}x^n$
2. $\displaystyle\sum_{n=0}^{\infty}(x+5)^n$
3. $\displaystyle\sum_{n=0}^{\infty}(-1)^n(4x+1)^n$
4. $\displaystyle\sum_{n=1}^{\infty}\frac{(3x-2)^n}{n}$
5. $\displaystyle\sum_{n=0}^{\infty}\frac{(x-2)^n}{10^n}$
6. $\displaystyle\sum_{n=0}^{\infty}(2x)^n$
7. $\displaystyle\sum_{n=0}^{\infty}\frac{nx^n}{n+2}$
8. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n(x+2)^n}{n}$
9. $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n\sqrt{n}\,3^n}$
10. $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^n}{\sqrt{n}}$
11. $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^nx^n}{n!}$
12. $\displaystyle\sum_{n=0}^{\infty}\frac{3^nx^n}{n!}$

### 19. Encontre os polinômios de Taylor de ordens 0, 1, 2 e 3 gerados por $f$ em $a$.

1. $f(x)=e^{2x}$, $a=0$
2. $f(x)=\sin x$, $a=0$
3. $f(x)=\ln x$, $a=1$
4. $f(x)=\ln(1+x)$, $a=0$
5. $f(x)=\dfrac{1}{x}$, $a=2$
6. $f(x)=\dfrac{1}{x+2}$, $a=0$
7. $f(x)=\sin x$, $a=\dfrac{\pi}{4}$
8. $f(x)=\tan x$, $a=\dfrac{\pi}{4}$
9. $f(x)=\sqrt{x}$, $a=0$

### 20. Encontre a série de Maclaurin para as funções abaixo.

1. $e^{-x}$
2. $xe^{x}$
3. $1/(1+x)$
4. $(2+x)/(1-x)$
5. $\sin(3x)$
6. $\sin(x/2)$
7. $7\cos(-x)$
8. $5\cos(\pi x)$

### 21. Nos exercícios abaixo, encontre a série de Taylor gerada por $f$ em $x=a$.

1. $f(x)=x^3-2x+4$, $a=2$
2. $f(x)=2x^3+x^2+3x-8$, $a=1$
3. $f(x)=x^4+x^2+1$, $a=-2$
4. $f(x)=3x^5-x^4+2x^3+x^2-2$, $a=-1$
5. $f(x)=\dfrac{1}{x^2}$, $a=1$
6. $f(x)=\dfrac{1}{(1-x)^3}$, $a=0$
