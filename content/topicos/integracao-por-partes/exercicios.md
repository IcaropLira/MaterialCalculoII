---
title: "Exercícios — Integração por partes"
eyebrow: "cálculo ii · lista de exercícios"
lede: "5 exercícios selecionados com resolução comentada. Tente resolver antes de abrir cada resposta."
kind: "exercicios"
---

### Calcule $\int xe^x\,dx$.

Escolha $u=x$, $dv=e^x dx$. Então $du=dx$, $v=e^x$. Resultado: $xe^x-e^x+C=e^x(x-1)+C$.

### Calcule $\int x\cos x\,dx$.

Com $u=x$, $dv=\cos x\,dx$, obtemos $x\sin x-\int\sin x\,dx=x\sin x+\cos x+C$.

### Calcule $\int \ln x\,dx$, para $x>0$.

Escreva $u=\ln x$, $dv=dx$. Assim, $du=dx/x$, $v=x$, e a resposta é $x\ln x-x+C$.

### Calcule $\int x^2e^x\,dx$.

Duas aplicações: $\int x^2e^x dx=x^2e^x-2\int xe^x dx=e^x(x^2-2x+2)+C$.

### Calcule $\int e^x\sin x\,dx$.

Seja $I=\int e^x\sin x dx$. Duas integrações por partes dão $I=e^x\sin x-e^x\cos x-I$; logo $I=\frac{e^x}{2}(\sin x-\cos x)+C$.
