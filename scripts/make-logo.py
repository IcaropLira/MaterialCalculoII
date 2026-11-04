#!/usr/bin/env python3
"""Gera o ∫ afunilado (estilo da marca Ícaro Pinto Lira) e escreve os SVGs.
Uso: python3 scripts/make-logo.py  → public/logo.svg, public/favicon.svg, src/components/logo-path.ts"""
import math, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# linha central do ∫ (x,y) — topo à direita, haste inclinada, base à esquerda
PTS = [(74,66),(62,45),(40,36),(22,52),(14,92),(6,150),(-2,208),(-10,246),(-32,262),(-56,252),(-66,232)]

def catmull(pts, n=22):
    P = [pts[0]] + pts + [pts[-1]]
    out = []
    for i in range(1, len(P)-2):
        p0,p1,p2,p3 = P[i-1],P[i],P[i+1],P[i+2]
        for k in range(n):
            t = k/n
            t2,t3 = t*t,t*t*t
            out.append(tuple(0.5*((2*p1[j])+(-p0[j]+p2[j])*t+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3) for j in (0,1)))
    out.append(pts[-1])
    return out

C = catmull(PTS)
# comprimento acumulado → largura variável (fina nas pontas, grossa no meio)
L = [0]
for a,b in zip(C,C[1:]): L.append(L[-1]+math.dist(a,b))
tot = L[-1]
def width(s):
    t = s/tot
    return 3.2 + 19*math.sin(math.pi*min(1,max(0,t)))**1.15
left, right = [], []
for i,p in enumerate(C):
    a = C[max(0,i-1)]; b = C[min(len(C)-1,i+1)]
    dx,dy = b[0]-a[0], b[1]-a[1]; d = math.hypot(dx,dy) or 1
    nx,ny = -dy/d, dx/d
    w = width(L[i])/2
    left.append((p[0]+nx*w, p[1]+ny*w)); right.append((p[0]-nx*w, p[1]-ny*w))
poly = left + right[::-1]
D = "M" + "L".join("%.1f,%.1f" % p for p in poly) + "Z"

def star(cx, cy, r, k=0.22):
    pts = []
    for i in range(8):
        ang = math.pi/2 + i*math.pi/4
        rr = r if i % 2 == 0 else r*k
        pts.append((cx+rr*math.cos(ang), cy-rr*math.sin(ang)))
    # lados côncavos (como nos sparkles da marca)
    d = "M%.1f,%.1f" % pts[0]
    for i in range(0, 8, 2):
        a, m, b = pts[i], pts[i+1], pts[(i+2) % 8]
        d += "Q%.1f,%.1f %.1f,%.1f" % (m[0]*1.0, m[1]*1.0, b[0], b[1])
    return d + "Z"

SP1 = star(52, 150, 20)     # sparkle grande (direita da haste)
SP2 = star(-52, 86, 9)      # sparkle pequeno
BALL_T = (74, 66, 7.2)      # bolinhas nos terminais
BALL_B = (-66, 232, 7.2)

GRAD = '<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="36" x2="0" y2="262"><stop offset="0" stop-color="#ee0f7f"/><stop offset=".4" stop-color="#ff8db8"/><stop offset=".68" stop-color="#d4a2c8"/><stop offset="1" stop-color="#3b2477"/></linearGradient>'
ORBIT = '<ellipse cx="0" cy="150" rx="104" ry="26" transform="rotate(-24 0 150)" fill="none" stroke="url(#g)" stroke-width="1.5" opacity=".85"/>'
GLYPH = ('<g fill="url(#g)"><path d="%s"/><circle cx="%g" cy="%g" r="%g"/><circle cx="%g" cy="%g" r="%g"/>'
         '<path d="%s"/><path d="%s"/></g>') % (D, *BALL_T, *BALL_B, SP1, SP2)

def svg(vb, inner, title="Cálculo II"):
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="512" height="512"><title>%s</title><defs>%s</defs>%s</svg>\n' % (vb, title, GRAD, inner)

# logo com tile escuro (igual ao Mr. C++)
tile = '<rect x="-125" y="5" width="300" height="290" rx="60" fill="#1a1230"/>' + ORBIT + GLYPH
open(os.path.join(ROOT, "public/logo.svg"), "w").write(svg("-125 5 300 290", tile))
open(os.path.join(ROOT, "public/favicon.svg"), "w").write(svg("-125 5 300 290", tile))
# marca solta (sem tile) para usar sobre qualquer fundo
open(os.path.join(ROOT, "public/logo-mark.svg"), "w").write(svg("-100 20 220 260", ORBIT + GLYPH))
# caminhos para o componente React
ts = "// GERADO por scripts/make-logo.py — não edite à mão\nexport const GLYPH_PATH = %r;\nexport const SPARKLE_BIG = %r;\nexport const SPARKLE_SMALL = %r;\n" % (D, SP1, SP2)
open(os.path.join(ROOT, "src/components/logo-path.ts"), "w").write(ts)
print("ok", len(D))
