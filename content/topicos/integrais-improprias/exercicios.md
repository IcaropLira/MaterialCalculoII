---
title: "Exercícios — Integrais impróprias"
eyebrow: "cálculo ii · lista de exercícios"
lede: "5 exercícios selecionados com resolução comentada. Tente resolver antes de abrir cada resposta."
kind: "exercicios"
---

### Determine se $\int_1^\infty 1/x^3\,dx$ converge.

$\lim_{b\to\infty}\int_1^b x^{-3}dx=\lim(1/2-1/(2b^2))=1/2$. Converge.

### Determine se $\int_1^\infty 1/\sqrt{x}\,dx$ converge.

$\int_1^b x^{-1/2}dx=2\sqrt b-2\to\infty$. Diverge.

### Calcule $\int_0^1 1/\sqrt{x}\,dx$.

É imprópria em zero: $\lim_{a\to0^+}\int_a^1x^{-1/2}dx=\lim(2-2\sqrt a)=2$. Converge.

### Analise $\int_0^1 1/x\,dx$.

$\lim_{a\to0^+}\int_a^1 dx/x=\lim(-\ln a)=\infty$. Diverge.

### Analise $\int_{-1}^1 1/x^2\,dx$.

Há singularidade em 0. Separe nos dois lados; cada integral tende a infinito. Portanto diverge.
