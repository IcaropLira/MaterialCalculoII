---
title: "Exercícios — Integrais trigonométricas"
eyebrow: "cálculo ii · lista de exercícios"
lede: "5 exercícios selecionados com resolução comentada. Tente resolver antes de abrir cada resposta."
kind: "exercicios"
---

### Calcule $\int \sin^3x\cos^2x\,dx$.

Separe $\sin x$: $\sin^2x=1-\cos^2x$. Com $u=\cos x$, $du=-\sin xdx$, resulta $-\int(1-u^2)u^2du=-u^3/3+u^5/5+C$.

### Calcule $\int \sin^2x\,dx$.

Use $\sin^2x=(1-\cos2x)/2$. Resultado: $x/2-\sin(2x)/4+C$.

### Calcule $\int \tan^3x\sec^2x\,dx$.

Guarde $\sec^2x dx$, tome $u=\tan x$. Resultado: $u^4/4+C=\tan^4x/4+C$.

### Calcule $\int \sec^3x\,dx$.

Por partes com $u=\sec x$, $dv=\sec^2x dx$: $I=\sec x\tan x-\int\sec x\tan^2x dx$. Como $\tan^2x=\sec^2x-1$, resulta $I=\frac12\sec x\tan x+\frac12\ln|\sec x+\tan x|+C$.

### Calcule $\int \sin(3x)\cos(2x)\,dx$.

Produto-soma: $\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)]$. Integre $\frac12(\sin5x+\sin x)$: resposta $-\cos5x/10-\cos x/2+C$.
