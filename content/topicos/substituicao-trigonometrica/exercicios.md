---
title: "Exercícios — Substituição trigonométrica"
eyebrow: "cálculo ii · lista de exercícios"
lede: "5 exercícios selecionados com resolução comentada. Tente resolver antes de abrir cada resposta."
kind: "exercicios"
---

### Calcule $\int\frac{dx}{\sqrt{9-x^2}}$.

Use $x=3\sin\theta$, então $dx=3\cos\theta d\theta$ e a raiz é $3\cos\theta$. Resultado $\theta+C=\arcsin(x/3)+C$.

### Calcule $\int\sqrt{4+x^2}\,dx$.

Use $x=2\tan\theta$ ou a fórmula padrão: $\frac{x}{2}\sqrt{x^2+4}+2\ln|x+\sqrt{x^2+4}|+C$.

### Calcule $\int\frac{dx}{x^2\sqrt{x^2-4}}$, para $x>2$.

Use $x=2\sec\theta$. Simplificando, a integral vira $\frac14\int\cos\theta d\theta=\frac14\sin\theta+C$. Como $\sin\theta=\sqrt{x^2-4}/x$, resposta $\frac{\sqrt{x^2-4}}{4x}+C$.

### Calcule $\int\frac{x^2}{\sqrt{16-x^2}}dx$.

Use $x=4\sin\theta$. A integral vira $16\int\sin^2\theta d\theta=8\theta-4\sin2\theta+C$. Voltando: $8\arcsin(x/4)-\frac{x}{2}\sqrt{16-x^2}+C$.

### Qual substituição usar em $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$, $\sqrt{x^2-a^2}$?

Respectivamente: $x=a\sin\theta$, $x=a\tan\theta$, $x=a\sec\theta$. A escolha faz a identidade trigonométrica cancelar a raiz.
