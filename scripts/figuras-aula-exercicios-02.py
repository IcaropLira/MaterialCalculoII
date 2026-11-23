"""Gera as figuras SVG (inline) da Aula de Exercícios 02.
Cada figura usa apenas classes CSS (.ax, .c1, .fill1 …) definidas em components.css,
para acompanhar o tema claro/escuro do site."""
import math


class Fig:
    def __init__(self, xr, yr, w=560, h=360, pad=(40, 24, 34, 24)):
        # pad = (esq, dir, baixo, cima)
        self.x0, self.x1 = xr
        self.y0, self.y1 = yr
        self.w, self.h = w, h
        self.pl, self.pr, self.pb, self.pt = pad
        self.el = []

    def X(self, x):
        return self.pl + (x - self.x0) / (self.x1 - self.x0) * (self.w - self.pl - self.pr)

    def Y(self, y):
        return self.h - self.pb - (y - self.y0) / (self.y1 - self.y0) * (self.h - self.pb - self.pt)

    def P(self, x, y):
        return f"{self.X(x):.1f},{self.Y(y):.1f}"

    def add(self, s):
        self.el.append(s)

    # ── primitivas ──
    def axes(self, xt=(), yt=(), xlab="x", ylab="y", grid=True, fmt=None):
        fmt = fmt or (lambda v: (f"{v:g}").replace("-", "−"))
        if grid:
            for v in xt:
                if v != 0:
                    self.add(f'<line class="grid" x1="{self.X(v):.1f}" y1="{self.Y(self.y0):.1f}" x2="{self.X(v):.1f}" y2="{self.Y(self.y1):.1f}"/>')
            for v in yt:
                if v != 0:
                    self.add(f'<line class="grid" x1="{self.X(self.x0):.1f}" y1="{self.Y(v):.1f}" x2="{self.X(self.x1):.1f}" y2="{self.Y(v):.1f}"/>')
        oy = 0 if self.y0 <= 0 <= self.y1 else self.y0
        ox = 0 if self.x0 <= 0 <= self.x1 else self.x0
        self.arrow(self.x0, oy, self.x1, oy, cls="ax", head=7)
        self.arrow(ox, self.y0, ox, self.y1, cls="ax", head=7)
        self.text(self.x1, oy, xlab, dx=-4, dy=-8, cls="lbl", anchor="end")
        self.text(ox, self.y1, ylab, dx=10, dy=10, cls="lbl")
        for v in xt:
            if v == 0:
                continue
            self.add(f'<line class="tick" x1="{self.X(v):.1f}" y1="{self.Y(oy)-3:.1f}" x2="{self.X(v):.1f}" y2="{self.Y(oy)+3:.1f}"/>')
            self.text(v, oy, fmt(v), dy=17, cls="tl", anchor="middle")
        for v in yt:
            if v == 0:
                continue
            self.add(f'<line class="tick" x1="{self.X(ox)-3:.1f}" y1="{self.Y(v):.1f}" x2="{self.X(ox)+3:.1f}" y2="{self.Y(v):.1f}"/>')
            self.text(ox, v, fmt(v), dx=-7, dy=4, cls="tl", anchor="end")

    def text(self, x, y, s, dx=0, dy=0, cls="lbl", anchor="start"):
        self.add(f'<text class="{cls}" x="{self.X(x)+dx:.1f}" y="{self.Y(y)+dy:.1f}" text-anchor="{anchor}">{s}</text>')

    def curve(self, f, a, b, cls="c1", n=160, param=False):
        pts = []
        for i in range(n + 1):
            t = a + (b - a) * i / n
            x, y = f(t) if param else (t, f(t))
            pts.append(self.P(x, y))
        self.add(f'<polyline class="{cls}" points="{" ".join(pts)}"/>')

    def between(self, top, bot, a, b, cls="fill1", n=120, horizontal=False):
        """Preenche a região entre top e bot. horizontal=True: funções de y (x = top(y))."""
        up, dn = [], []
        for i in range(n + 1):
            t = a + (b - a) * i / n
            if horizontal:
                up.append(self.P(top(t), t)); dn.append(self.P(bot(t), t))
            else:
                up.append(self.P(t, top(t))); dn.append(self.P(t, bot(t)))
        self.add(f'<polygon class="{cls}" points="{" ".join(up + dn[::-1])}"/>')

    def line(self, x1, y1, x2, y2, cls="ghost"):
        self.add(f'<line class="{cls}" x1="{self.X(x1):.1f}" y1="{self.Y(y1):.1f}" x2="{self.X(x2):.1f}" y2="{self.Y(y2):.1f}"/>')

    def rect(self, x1, y1, x2, y2, cls="strip"):
        X1, X2 = sorted((self.X(x1), self.X(x2)))
        Y1, Y2 = sorted((self.Y(y1), self.Y(y2)))
        self.add(f'<rect class="{cls}" x="{X1:.1f}" y="{Y1:.1f}" width="{X2-X1:.1f}" height="{Y2-Y1:.1f}"/>')

    def ellipse(self, cx, cy, rx_px, ry_units=None, ry_px=None, cls="ring", half=None, rx_units=None):
        """Elipse com centro em unidades; raios em pixels ou unidades."""
        rx = rx_px if rx_units is None else abs(self.X(rx_units) - self.X(0))
        ry = ry_px if ry_units is None else abs(self.Y(ry_units) - self.Y(0))
        Cx, Cy = self.X(cx), self.Y(cy)
        if half is None:
            self.add(f'<ellipse class="{cls}" cx="{Cx:.1f}" cy="{Cy:.1f}" rx="{rx:.1f}" ry="{ry:.1f}"/>')
        else:  # 'front' / 'back' — meia elipse (para dar ideia de 3D)
            if half in ("right", "left"):  # eixo vertical da elipse: meia esquerda/direita
                sweep = 1 if half == "right" else 0
                self.add(f'<path class="{cls}" d="M{Cx:.1f},{Cy-ry:.1f} A{rx:.1f},{ry:.1f} 0 0 {sweep} {Cx:.1f},{Cy+ry:.1f}"/>')
            else:
                sweep = 0 if half == "front" else 1
                self.add(f'<path class="{cls}" d="M{Cx-rx:.1f},{Cy:.1f} A{rx:.1f},{ry:.1f} 0 0 {sweep} {Cx+rx:.1f},{Cy:.1f}"/>')

    def dot(self, x, y, r=3.6):
        self.add(f'<circle class="dot" cx="{self.X(x):.1f}" cy="{self.Y(y):.1f}" r="{r}"/>')

    def arrow(self, x1, y1, x2, y2, cls="arrow-l", head=6):
        X1, Y1, X2, Y2 = self.X(x1), self.Y(y1), self.X(x2), self.Y(y2)
        k = "ax" if cls == "ax" else "ghost-solid"
        style = 'class="ax"' if cls == "ax" else 'class="ax" style="stroke-width:1.1"'
        self.add(f'<line {style} x1="{X1:.1f}" y1="{Y1:.1f}" x2="{X2:.1f}" y2="{Y2:.1f}"/>')
        ang = math.atan2(Y2 - Y1, X2 - X1)
        p1 = (X2 - head * math.cos(ang - 0.4), Y2 - head * math.sin(ang - 0.4))
        p2 = (X2 - head * math.cos(ang + 0.4), Y2 - head * math.sin(ang + 0.4))
        self.add(f'<polygon class="arrowhead" points="{X2:.1f},{Y2:.1f} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}"/>')

    def svg(self, label):
        body = "".join(self.el)
        return (f'<svg viewBox="0 0 {self.w} {self.h}" role="img" aria-label="{label}" '
                f'xmlns="http://www.w3.org/2000/svg">{body}</svg>')


def figure(svg, caption):
    return f'<figure class="fig">{svg}<figcaption>{caption}</figcaption></figure>'


FIGS = {}

# ───────── Q1: x² e x+6 ─────────
F = Fig((-3.2, 4), (-1, 10.5))
F.axes(xt=[-3, -2, -1, 1, 2, 3], yt=[2, 4, 6, 8, 10])
F.between(lambda x: x + 6, lambda x: x * x, -2, 3)
F.rect(0.92, 1.0, 1.08, 7.0)  # faixa x≈1
F.curve(lambda x: x * x, -3.2, 3.2, "c2")
F.curve(lambda x: x + 6, -3.2, 4, "c1")
F.dot(-2, 4); F.dot(3, 9)
F.text(-2, 4, "(−2, 4)", dx=10, dy=18)
F.text(3, 9, "(3, 9)", dx=-10, dy=-8, anchor="end")
F.text(-1.4, 6.0, "g(x) = x + 6", cls="lbl c1t", anchor="middle", dy=-8)
F.text(-3.0, 10, "f(x) = x²", cls="lbl c2t", dx=40, dy=6)
F.text(0.86, 3.4, "altura = g − f", cls="lbl c3t", anchor="end")
FIGS["q1"] = figure(F.svg("Região entre y = x² e y = x + 6"),
                    "Região entre a parábola f(x) = x² (base) e a reta g(x) = x + 6 (topo), de x = −2 a x = 3. A faixa vertical mostra a altura g(x) − f(x).")

# ───────── Q2: x²−2x e 2x+3 ─────────
a, b = 2 - math.sqrt(7), 2 + math.sqrt(7)
F = Fig((-1.6, 5.6), (-2, 13.6))
F.axes(xt=[-1, 1, 2, 3, 4, 5], yt=[-1, 2, 4, 6, 8, 10, 12])
F.between(lambda x: 2 * x + 3, lambda x: x * x - 2 * x, a, b)
F.rect(1.9, 0.0, 2.1, 7.0)
F.curve(lambda x: x * x - 2 * x, -1.4, 5.3, "c2")
F.curve(lambda x: 2 * x + 3, -1.6, 5.3, "c1")
F.dot(a, 2 * a + 3); F.dot(b, 2 * b + 3)
F.line(a, 2 * a + 3, a, -2, "ghost"); F.text(a, -1.75, "x = 2 − √7", dx=-6, anchor="end", cls="tl")
F.text(b, 2 * b + 3, "x = 2 + √7", dx=-12, dy=-10, anchor="end")
F.text(3.0, 11.0, "g(x) = 2x + 3", cls="lbl c1t", anchor="end")
F.text(4.4, 6.2, "f(x) = x² − 2x", cls="lbl c2t", dx=10, dy=40)
F.text(1.82, 2.6, "altura = g − f", cls="lbl c3t", anchor="end")
F.line(2, -2, 2, 13.6, "ghost")
F.text(2, 13.0, "x = 2 (simetria)", dx=6, cls="tl")
FIGS["q2"] = figure(F.svg("Região entre y = x² − 2x e y = 2x + 3"),
                    "A reta g fica por cima entre as raízes x = 2 ± √7 ≈ −0,65 e 4,65. A região é simétrica em relação a x = 2 (vértice da diferença).")

# ───────── Q3: arruelas, f = 1/2 + x², g = x, eixo x ─────────
f = lambda x: 0.5 + x * x
g = lambda x: x
F = Fig((-0.4, 2.6), (-4.9, 4.9), h=380)
F.axes(xt=[1, 2], yt=[-4, -2, 2, 4])
F.between(f, g, 0, 2, "fill1")
F.between(lambda x: -g(x), lambda x: -f(x), 0, 2, "fill1")
F.curve(f, 0, 2.15, "c1"); F.curve(g, 0, 2.3, "c2")
F.curve(lambda x: -f(x), 0, 2.15, "ghost"); F.curve(lambda x: -g(x), 0, 2.3, "ghost")
# arruela em x = 1.3
xs = 1.3
F.ellipse(xs, 0, 13, ry_units=f(xs), cls="ringfill")
F.ellipse(xs, 0, 7, ry_units=g(xs), cls="fill2")
F.ellipse(xs, 0, 7, ry_units=g(xs), cls="ring")
F.ellipse(2, 0, 16, ry_units=f(2), cls="ghost")
F.ellipse(2, 0, 10, ry_units=g(2), cls="ghost")
F.text(2.05, f(2), "R(x) = ½ + x²", cls="lbl c1t", dx=-6, dy=-6, anchor="end")
F.text(2.25, g(2.25), "r(x) = x", cls="lbl c2t", dx=4, dy=16)
F.text(xs, f(xs), "arruela", dx=-18, dy=-10, cls="lbl c3t", anchor="end")
F.text(2.55, -4.5, "eixo de rotação: eixo x", cls="tl", anchor="end")
FIGS["q3"] = figure(F.svg("Sólido por arruelas"),
                    "Girando em torno do eixo x, cada fatia vertical vira uma arruela: raio externo R = f(x) = ½ + x² e raio interno r = g(x) = x. Tracejado: o espelho da região (a outra metade do sólido).")

# ───────── Q4: y = x² e y = 2x, eixo y ─────────
F = Fig((-2.6, 2.6), (-0.6, 4.8), h=360)
F.axes(xt=[-2, -1, 1, 2], yt=[1, 2, 3, 4])
F.between(lambda x: 2 * x, lambda x: x * x, 0, 2, "fill1")
F.between(lambda x: -2 * x, lambda x: x * x, -2, 0, "fill2")
F.curve(lambda x: x * x, -2.15, 2.15, "c2")
F.curve(lambda x: 2 * x, 0, 2.35, "c1")
F.curve(lambda x: -2 * x, -2.35, 0, "ghost")
xs = 1.2
F.rect(xs - 0.07, xs * xs, xs + 0.07, 2 * xs, "strip")
F.rect(-xs - 0.07, xs * xs, -xs + 0.07, 2 * xs, "strip")
rx = abs(F.X(xs) - F.X(0))
F.ellipse(0, 2 * xs, rx, ry_px=9, cls="ring", half="front")
F.ellipse(0, 2 * xs, rx, ry_px=9, cls="ghost", half="back")
F.ellipse(0, xs * xs, rx, ry_px=9, cls="ring", half="front")
F.ellipse(0, xs * xs, rx, ry_px=9, cls="ghost", half="back")
F.dot(2, 4); F.text(2, 4, "(2, 4)", dx=8, dy=4)
F.text(2.3, 4.6, "y = 2x", cls="lbl c1t", dx=6, dy=4)
F.text(1.95, 2.6, "y = x²", cls="lbl c2t")
F.arrow(0, 0.75, xs, 0.75)
F.text(xs / 2, 0.75, "raio = x", dy=-6, cls="tl", anchor="middle")
F.text(1.45, 1.05, "altura = 2x − x²", cls="lbl c3t")
FIGS["q4"] = figure(F.svg("Região entre y = x² e y = 2x girando em torno do eixo y"),
                    "A faixa vertical em x (raio x, altura 2x − x²) gira em torno do eixo y e gera uma casca cilíndrica. À esquerda, o espelho da região.")

# ───────── Q5: 3x − x² em torno de x = −1 ─────────
f = lambda x: 3 * x - x * x
F = Fig((-5.4, 3.6), (-0.8, 3.2), h=330)
F.axes(xt=[-5, -4, -3, -2, -1, 1, 2, 3], yt=[1, 2, 3])
F.between(f, lambda x: 0, 0, 3, "fill1")
F.between(lambda x: f(-2 - x), lambda x: 0, -5, -2, "fill2")
F.curve(f, -0.1, 3.1, "c1")
F.curve(lambda x: f(-2 - x), -5, -2, "ghost")
F.line(-1, -0.8, -1, 3.2, "eixo")
F.text(-1, 3.0, "eixo x = −1", dx=-8, cls="lbl c3t", anchor="end")
xs = 1.6
F.rect(xs - 0.07, 0, xs + 0.07, f(xs), "strip")
F.rect(-2 - xs - 0.07, 0, -2 - xs + 0.07, f(xs), "strip")
rx = abs(F.X(xs) - F.X(-1))
F.ellipse(-1, f(xs), rx, ry_px=10, cls="ring", half="front")
F.ellipse(-1, f(xs), rx, ry_px=10, cls="ghost", half="back")
F.ellipse(-1, 0, rx, ry_px=10, cls="ring", half="front")
F.arrow(-1, 0.45, xs, 0.45)
F.text((xs - 1) / 2, 0.45, "raio = x + 1", dy=-7, cls="tl", anchor="middle")
F.text(xs, 1.3, "altura", dx=-8, cls="lbl c3t", anchor="end")
F.text(3.5, 2.85, "f(x) = 3x − x²", cls="lbl c1t", anchor="end")
FIGS["q5"] = figure(F.svg("Região sob y = 3x − x² girando em torno da reta x = −1"),
                    "A reta x = −1 fica fora da região. A faixa vertical em x está a x + 1 unidades do eixo; girando, vira uma casca de raio x + 1 e altura 3x − x². Em verde, o espelho da região em relação a x = −1.")

# ───────── Q6: x = 2y³ − y⁴, em torno do eixo x ─────────
h = lambda y: 2 * y ** 3 - y ** 4
F = Fig((-0.3, 2.0), (-2.4, 2.4), h=360)
F.axes(xt=[0.5, 1, 1.5], yt=[-2, -1, 1, 2])
F.between(h, lambda y: 0, 0, 2, "fill1", horizontal=True)
F.between(h, lambda y: 0, -2, 0, "fill2", horizontal=True) if False else None
F.curve(lambda t: (h(t), t), 0, 2, "c1", param=True)
F.curve(lambda t: (h(t), -t), 0, 2, "ghost", param=True)
ys = 1.25
F.rect(0, ys - 0.04, h(ys), ys + 0.04, "strip")
F.rect(0, -ys - 0.04, h(ys), -ys + 0.04, "strip")
ry = abs(F.Y(ys) - F.Y(0))
F.ellipse(0.0, 0, 9, ry_px=ry, cls="ring", half="right")
F.ellipse(0.0, 0, 9, ry_px=ry, cls="ghost", half="left")
F.ellipse(h(ys), 0, 9, ry_px=ry, cls="ring", half="right")
F.ellipse(h(ys), 0, 9, ry_px=ry, cls="ghost", half="left")
F.text(h(1.5), 1.5, "x = 2y³ − y⁴", dx=10, cls="lbl c1t")
F.arrow(1.75, 0, 1.75, ys)
F.text(1.75, ys / 2, "raio = y", dx=6, cls="tl")
F.text(h(ys) / 2, ys, "comprimento = 2y³ − y⁴", dy=-10, cls="lbl c3t", anchor="middle")
F.dot(0, 2); F.text(0, 2, "(0, 2)", dx=8, dy=4)
FIGS["q6"] = figure(F.svg("Região entre x = 2y³ − y⁴ e x = 0 girando em torno do eixo x"),
                    "Aqui a curva é dada como x = h(y). Uma faixa horizontal na altura y tem comprimento 2y³ − y⁴ e fica a y unidades do eixo x: girando, vira uma casca deitada de raio y.")

# ───────── Q7: comprimento de 2x^{3/2} + 1 ─────────
f = lambda x: 2 * x ** 1.5 + 1
F = Fig((-0.15, 1.2), (-0.2, 3.4), h=330)
F.axes(xt=[0.25, 0.5, 0.75, 1], yt=[1, 2, 3],
       fmt=lambda v: {0.25: "¼", 0.5: "½", 0.75: "¾"}.get(v, f"{v:g}"))
F.curve(f, 0, 1.15, "ghost")
F.curve(f, 0, 8 / 9, "c1")
F.dot(0, 1); F.dot(8 / 9, f(8 / 9))
F.text(0, 1, "(0, 1)", dx=8, dy=16)
F.text(8 / 9, f(8 / 9), "(8/9, 1 + 32√2/27)", dx=-8, dy=-8, anchor="end")
F.line(8 / 9, 0, 8 / 9, f(8 / 9), "ghost")
F.text(8 / 9, 0, "8/9", dy=17, cls="tl", anchor="middle")
# triângulo ds
x1, x2 = 0.45, 0.6
F.line(x1, f(x1), x2, f(x1), "c3"); F.line(x2, f(x1), x2, f(x2), "c3")
F.text((x1 + x2) / 2, f(x1), "dx", dy=16, cls="lbl c3t", anchor="middle")
F.text(x2, (f(x1) + f(x2)) / 2, "dy", dx=6, cls="lbl c3t")
F.text(x1, (f(x1) + f(x2)) / 2, "ds", dx=-4, dy=-4, cls="lbl c3t", anchor="end")
F.text(0.25, f(0.25), "y = 2x^(3/2) + 1", dx=-6, dy=-14, cls="lbl c1t", anchor="end")
FIGS["q7"] = figure(F.svg("Arco de y = 2x^(3/2) + 1 entre x = 0 e x = 8/9"),
                    "Pedacinho de arco: ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx. Somar todos os ds de x = 0 a x = 8/9 dá o comprimento.")

# ───────── Q8: y = x^{2/3} de (1,1) a (8,4) ─────────
f = lambda x: x ** (2 / 3)
F = Fig((-0.8, 9.2), (-0.6, 4.9), h=320)
F.axes(xt=[1, 2, 3, 4, 5, 6, 7, 8], yt=[1, 2, 3, 4])
F.curve(f, 0, 9, "ghost")
F.curve(f, 1, 8, "c1")
F.dot(1, 1); F.dot(8, 4)
F.text(1, 1, "A = (1, 1)", dx=6, dy=18)
F.text(8, 4, "B = (8, 4)", dx=-8, dy=-10, anchor="end")
F.text(3.6, f(3.6), "y = x^(2/3)  ⇔  x = y^(3/2)", dx=-6, dy=-14, cls="lbl c1t", anchor="end")
F.dot(0, 0, r=3)
F.text(1.8, 0.3, "bico em (0, 0): y′ não existe", cls="tl")
FIGS["q8"] = figure(F.svg("Arco de y = x^(2/3) entre A = (1, 1) e B = (8, 4)"),
                    "O arco pedido (em destaque) fica longe do bico da curva em x = 0, então dá para integrar em x ∈ [1, 8] ou, equivalentemente, em y ∈ [1, 4] usando x = y^(3/2).")

# ───────── Brainstorm: discos × arruelas × cascas (esquema) ─────────
F = Fig((0, 12), (-2.2, 2.6), w=600, h=230, pad=(10, 10, 10, 10))
# disco
F.ellipse(1.6, 0, 16, ry_units=1.6, cls="ringfill")
F.text(1.6, -2.0, "disco: π R²·dx", anchor="middle", cls="lbl")
# arruela
F.ellipse(5.8, 0, 16, ry_units=1.6, cls="ringfill")
F.ellipse(5.8, 0, 8, ry_units=0.8, cls="fill2")
F.ellipse(5.8, 0, 8, ry_units=0.8, cls="ring")
F.text(5.8, -2.0, "arruela: π (R² − r²)·dx", anchor="middle", cls="lbl")
# casca
cx = 10.2
rxp = abs(F.X(1.4) - F.X(0))
F.line(cx - 1.4, -0.9, cx - 1.4, 1.3, "c3"); F.line(cx + 1.4, -0.9, cx + 1.4, 1.3, "c3")
F.ellipse(cx, 1.3, rxp, ry_px=9, cls="ringfill")
F.ellipse(cx, -0.9, rxp, ry_px=9, cls="ring", half="front")
F.ellipse(cx, -0.9, rxp, ry_px=9, cls="ghost", half="back")
F.line(cx, -1.4, cx, 2.0, "eixo")
F.text(cx, -2.0, "casca: 2π·raio·altura·espessura", anchor="middle", cls="lbl")
FIGS["mapa"] = figure(F.svg("Disco, arruela e casca cilíndrica"),
                      "Os três “tijolinhos” de volume. Disco e arruela: fatia perpendicular ao eixo. Casca: faixa paralela ao eixo.")

if __name__ == "__main__":
    for k, v in FIGS.items():
        print(k, len(v))
