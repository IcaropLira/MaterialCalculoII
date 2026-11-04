#!/usr/bin/env python3
"""
Migração única: converte o site antigo (HTML escrito à mão) para os .md de content/.

Uso:  python3 scripts/migrate-html-to-md.py <pasta-do-site-antigo> <json-do-site-data> <pasta-content>

Fica no repositório só como registro de como a migração foi feita — o dia a dia
é editar os .md, não rodar isto.
"""
import json, os, re, sys
from bs4 import BeautifulSoup, NavigableString, Tag

SRC, DATA, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
D = json.load(open(DATA, encoding="utf8"))
WARN = []
DM = []  # fórmulas em bloco coletadas durante a conversão inline


def warn(msg):
    WARN.append(msg)


# ───────────────────────── rotas ─────────────────────────
def route(href):
    if not href or re.match(r"^(https?:)?//|^mailto:", href):
        return href
    if href.startswith("#"):
        return href
    h = href.replace("../", "").replace("topicos/", "").replace("provas/", "provas/")
    frag = ""
    if "#" in h:
        h, frag = h.split("#", 1)
        frag = "#" + frag
    if h in ("index.html", ""):
        return "/" + frag
    h = h[:-5] if h.endswith(".html") else h
    if h == "calc2_lista01-enunciado":
        return "/listas/lista-01" + frag
    if h == "calc2_lista01":
        return "/listas/lista-01/resolucoes" + frag
    if h.startswith("provas/"):
        return "/" + h + frag
    if h.endswith("-exercicios"):
        return "/topicos/" + h[: -len("-exercicios")] + "/exercicios" + frag
    return "/topicos/" + h + frag


# ───────────────────────── texto / inline ─────────────────────────
MATH_RE = re.compile(r"\\\((.*?)\\\)|\\\[(.*?)\\\]", re.S)
INLINE_TAGS = {"b", "strong", "i", "em", "a", "sup", "sub", "span", "code", "u", "br", "small", "mark"}


def esc(t):
    t = t.replace("\\", "\\\\")
    t = re.sub(r"([*_`\[\]~$])", r"\\\1", t)
    t = t.replace("<", "&lt;").replace(">", "&gt;")
    t = re.sub(r"(?<![A-Za-z0-9]):(?=[A-Za-z])", r"\\:", t)
    return t


def tex_clean(x):
    lines = [l.strip() for l in x.strip().split("\n")]
    return [l for l in lines if l]


def text_node(s, in_table=False):
    out, pos = [], 0
    for m in MATH_RE.finditer(s):
        out.append(esc(s[pos : m.start()]))
        if m.group(1) is not None:
            tex = " ".join(tex_clean(m.group(1)))
            if in_table:
                tex = tex.replace("|", "\\|")
            out.append("$" + tex + "$")
        else:
            DM.append(tex_clean(m.group(2)))
            out.append("\x01%d\x01" % (len(DM) - 1))
        pos = m.end()
    out.append(esc(s[pos:]))
    r = "".join(out)
    if in_table:
        # '|' fora de matemática também precisa de escape
        r = re.sub(r"(?<!\\)\|", r"\\|", r) if "$" not in r else r
    return r


def wrap(marker, inner):
    m = re.match(r"^(\s*)(.*?)(\s*)$", inner, re.S)
    if not m.group(2):
        return inner
    return m.group(1) + marker + m.group(2) + marker + m.group(3)


def inline(node, in_table=False):
    if isinstance(node, NavigableString):
        return text_node(str(node), in_table)
    if not isinstance(node, Tag):
        return ""
    inner = lambda: "".join(inline(c, in_table) for c in node.children)
    n, cl = node.name, node.get("class", [])
    if n in ("b", "strong"):
        return wrap("**", inner())
    if n in ("i", "em"):
        return wrap("*", inner())
    if n == "code":
        return "`" + node.get_text() + "`"
    if n in ("sup", "sub", "u", "small", "mark"):
        return "<%s>%s</%s>" % (n, inner(), n)
    if n == "br":
        return "<br />"
    if n == "a":
        return "[%s](%s)" % (inner().strip(), route(node.get("href", "")))
    if n == "span":
        if "conclusion-tag" in cl:
            kind = "div" if "div" in cl else "conv"
            return ":%s[%s]" % (kind, node.get_text(strip=True))
        return inner()
    return inner()


def squash(s):
    return re.sub(r"[ \t\r\n\xa0]*\n[ \t\r\n]*|[ \t]{2,}", " ", s)


def para_escape(p):
    p = re.sub(r"^(\d+)([.)])(\s)", r"\1\\\2\3", p)
    p = re.sub(r"^([-+>#]|\*(?=\s))", r"\\\1", p)
    return p


def flush(buf):
    """buffer de nós inline -> lista de blocos (parágrafos e fórmulas em bloco)."""
    s = "".join(buf)
    blocks = []
    for piece in re.split(r"(\x01\d+\x01)", s):
        m = re.fullmatch(r"\x01(\d+)\x01", piece)
        if m:
            blocks.append(["$$", *DM[int(m.group(1))], "$$"])
        else:
            t = squash(piece).strip()
            if t:
                blocks.append([para_escape(t)])
    return blocks


def inline_str(node, in_table=False):
    """inline de um elemento inteiro, numa linha só (fórmulas em bloco viram inline)."""
    s = "".join(inline(c, in_table) for c in node.children) if isinstance(node, Tag) else inline(node, in_table)
    s = re.sub(r"\x01(\d+)\x01", lambda m: "$" + " ".join(DM[int(m.group(1))]) + "$", s)
    return squash(s).strip()


# ───────────────────────── blocos ─────────────────────────
def cls(el):
    return el.get("class", []) if isinstance(el, Tag) else []


def blank_join(blocks):
    out = []
    for b in blocks:
        if out:
            out.append("")
        out.extend(b)
    return out


def container(name, body, attrs="", label=None):
    inner = 2
    for l in body:
        m = re.match(r"^(:{3,})", l)
        if m:
            inner = max(inner, len(m.group(1)))
    f = ":" * max(3, inner + 1)
    head = f + name + ("[%s]" % label if label else "") + attrs
    return [head, *body, f]


def attrs_str(**kw):
    parts = []
    for k, v in kw.items():
        if v in (None, ""):
            continue
        parts.append('%s="%s"' % (k, str(v).replace('"', "”")))
    return "{" + " ".join(parts) + "}" if parts else ""


def indent_block(lines, n):
    pad = " " * n
    return [(pad + l if l else l) for l in lines]


def list_block(items, ordered, start=1):
    """items: lista de listas de blocos."""
    out = []
    loose = any(len(it) > 1 for it in items)
    for i, it in enumerate(items):
        marker = ("%d. " % (start + i)) if ordered else "- "
        body = blank_join(it) if it else [""]
        first = True
        for l in body:
            if first:
                out.append(marker + l)
                first = False
            else:
                out.append((" " * len(marker) + l) if l else "")
        if loose and i < len(items) - 1:
            out.append("")
    return out


def table_block(t):
    rows = t.find_all("tr")
    if not rows:
        return []
    cells = [[inline_str(c, True) for c in r.find_all(["th", "td"])] for r in rows]
    w = max(len(r) for r in cells)
    cells = [r + [""] * (w - len(r)) for r in cells]
    out = ["| " + " | ".join(cells[0]) + " |", "| " + " | ".join(["---"] * w) + " |"]
    for r in cells[1:]:
        out.append("| " + " | ".join(r) + " |")
    return out


class Ctx:
    def __init__(self):
        self.ex = 0


def step_items(steps, ctx):
    """.step -> itens; devolve (blocos). Passos numerados viram lista ordenada."""
    numbered, plain = [], []
    for st in steps:
        num = st.select_one(".step-num").get_text(strip=True) if st.select_one(".step-num") else ""
        body = mixed(st.select_one(".step-content").children, ctx)
        (numbered if num.isdigit() else plain).append(body)
    return numbered, plain


def mixed(children, ctx):
    """filhos misturados (texto/inline/blocos) -> lista de blocos (cada bloco = lista de linhas)."""
    blocks, buf, steps = [], [], []

    def flush_all():
        nonlocal buf
        blocks.extend(flush(buf))
        buf = []

    def flush_steps():
        nonlocal steps
        if steps:
            num, plain = step_items(steps, ctx)
            if num:
                blocks.append(list_block(num, True))
            for p in plain:
                blocks.extend(p)
            steps = []

    for c in children:
        if isinstance(c, NavigableString):
            buf.append(inline(c))
            continue
        if not isinstance(c, Tag):
            continue
        if c.name in INLINE_TAGS and c.name != "span" or (c.name == "span" and not ({"kicker"} & set(cls(c)))):
            buf.append(inline(c))
            continue
        flush_all()
        if "step" in cls(c) and c.name == "div":
            steps.append(c)
            continue
        flush_steps()
        blocks.extend(block(c, ctx))
    flush_all()
    flush_steps()
    return blocks


def result_block(el):
    k = "diverge" if ({"diverge", "div"} & set(cls(el))) else ("converge" if ({"converg", "conv"} & set(cls(el))) else "")
    body = blank_join(mixed(el.children, Ctx()))
    return container("result", body, attrs_str(kind=k))


def block(el, ctx):
    """elemento de bloco -> lista de blocos."""
    n, c = el.name, cls(el)
    if n in ("script", "style", "link", "meta"):
        return []
    if n == "p":
        if "backtop" in c:
            return []
        if "note" in c:
            return [container("note", blank_join(flush([inline(x) for x in el.children])))]
        return flush([inline(x) for x in el.children])
    if n in ("h2", "h3", "h4"):
        return [["#" * int(n[1]) + " " + inline_str(el)]]
    if n == "hr":
        return []
    if n in ("ul", "ol"):
        items = [mixed(li.children, ctx) for li in el.find_all("li", recursive=False)]
        if "steps" in c:
            return [list_block(items, True)]
        return [list_block(items, n == "ol")]
    if n == "table":
        if "di-table" in c:
            return [container("tabular", table_block(el))]
        return [table_block(el)]
    if n == "details":
        warn("details solto")
        return mixed(el.children, ctx)
    if n == "div" or n == "section":
        if "note" in c or "warn" in c:
            kind = "note" if "note" in c else "warn"
            lab = el.select_one(".%s-label" % kind)
            label = None
            if lab:
                label = lab.get_text(" ", strip=True)
                lab.extract()
            body = blank_join(mixed(el.children, ctx))
            if label and re.search(r"[\[\]$\\]", label):
                body = ["#### " + label, "", *body]
                label = None
            return [container(kind, body, "", label)]
        if "macete" in c or "question-note" in c:
            return [container("note", blank_join(mixed(el.children, ctx)))]
        if "formula-block" in c:
            lab = el.select_one(".formula-label")
            label = lab.get_text(" ", strip=True) if lab else None
            if lab:
                lab.extract()
            body = blank_join(mixed(el.children, ctx))
            if label and re.search(r"[\[\]$\\]", label):
                body = ["#### " + label, "", *body]
                label = None
            return [container("formula", body, "", label)]
        if "example" in c:
            return [example_block(el, ctx)]
        if "result-box" in c:
            return [result_block(el)]
        if "grid2" in c:
            items = [[flush([inline(x) for x in f.children])[0]] if f.get_text(strip=True) else [] for f in el.find_all("div", recursive=False)]
            return [container("grid", list_block(items, False))]
        if "toc" in c or "backtop" in c:
            return []  # sumário legado: a barra lateral gera sozinha
        if "cta-more" in c or "more-exercises" in c:
            return [cta_block(el)]
        if "next" in c:
            return [next_block(el)]
        if "cheat" in c:
            return [cheat_block(el, ctx)]
        if "ex" in c:
            return [ex_legacy(el, ctx)]
        if "legacy-list-content" in c or n == "section" or not c:
            return [b for ch in el.children if isinstance(ch, Tag) for b in block(ch, ctx)]
        warn("div desconhecido: %s" % c)
        return mixed(el.children, ctx)
    if n in INLINE_TAGS:
        return flush([inline(el)])
    warn("tag desconhecida: %s %s" % (n, c))
    return mixed(el.children, ctx)


def example_block(el, ctx):
    ctx.ex += 1
    num = el.select_one(".example-num").get_text(strip=True)
    title = inline_str(el.select_one(".example-title"))
    body_el = el.select_one(".example-body")
    body = blank_join(mixed(body_el.children, ctx))
    n_attr = "" if num == str(ctx.ex) else num
    return container("example", ["#### " + title, "", *body], attrs_str(n=n_attr))


def ex_legacy(el, ctx):
    """lista 01 (resolução, formato antigo em texto simples) -> :::example"""
    tag = el.select_one(".tag").get_text(strip=True)
    enun = el.select_one(".enun")
    head_nodes = []
    for ch in el.children:
        if isinstance(ch, Tag) and (("steps" in cls(ch)) or ch.name in ("table", "div", "ul")):
            break
        if isinstance(ch, Tag) and "tag" in cls(ch):
            continue
        head_nodes.append(ch)
    title = squash("".join(inline(h) for h in head_nodes)).strip()
    title = re.sub(r"\x01(\d+)\x01", lambda m: "$" + " ".join(DM[int(m.group(1))]) + "$", title)
    body = []
    steps = el.select_one("ul.steps")
    if steps:
        items = [mixed(li.children, ctx) for li in steps.find_all("li", recursive=False)]
        body.append(list_block(items, True))
    for ch in el.children:
        if isinstance(ch, Tag) and ch.name == "table":
            body.append(table_block(ch))
        elif isinstance(ch, Tag) and "ans" in cls(ch):
            body.append(container("result", blank_join(mixed(ch.children, ctx))))
        elif isinstance(ch, Tag) and ch.name in ("p", "div") and "ans" not in cls(ch):
            body.extend(block(ch, ctx))
    return container("example", ["#### " + title, "", *blank_join(body)], attrs_str(n=tag))


def cta_block(el):
    a = el.find("a")
    p = el.find("p")
    lab = el.select_one(".more-exercises-label")
    body = blank_join(flush([inline(x) for x in p.children])) if p else []
    if lab:
        body = ["#### " + lab.get_text(strip=True), "", *body]
    return container("cta", body, attrs_str(label=a.get_text(strip=True), href=route(a.get("href", ""))))


def next_block(el):
    body = []
    kick = el.select_one(".kicker")
    h = el.select_one("h3")
    if h:
        body += ["#### " + inline_str(h), ""]
    p = el.find("p")
    if p:
        body += blank_join(flush([inline(x) for x in p.children])) + [""]
    pills = []
    for pill in el.select(".next-pill"):
        a = pill if pill.name == "a" else None
        txt = pill.get_text(strip=True)
        pills.append([["[%s](%s)" % (txt, route(a.get("href"))) if a else txt]])
    body += list_block(pills, False)
    return container("next", body, attrs_str(kicker=kick.get_text(strip=True) if kick else ""))


def cheat_block(sec, ctx):
    body = []
    for card in sec.select(".cheat-card"):
        body.append(["#### " + inline_str(card.find("h4"))])
        card.find("h4").extract()
        body.extend(mixed(card.children, ctx))
    return container("cheat", blank_join(body))


# ───────────────────────── frontmatter ─────────────────────────
def fm(d):
    lines = ["---"]
    for k, v in d.items():
        if v in (None, "", [], {}):
            continue
        lines.append("%s: %s" % (k, json.dumps(v, ensure_ascii=False)))
    lines.append("---")
    return "\n".join(lines)


def load(path):
    return BeautifulSoup(open(os.path.join(SRC, path), encoding="utf8").read(), "html.parser")


def write(path, text):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf8").write(text.rstrip() + "\n")


def hero_info(soup):
    h = soup.select_one(".hero")
    info = {
        "eyebrow": h.select_one(".hero-eyebrow").get_text(strip=True) if h.select_one(".hero-eyebrow") else "",
        "title": inline_str(h.find("h1")),
        "lede": inline_str(h.select_one(".lede")) if h.select_one(".lede") else "",
    }
    hf = h.select_one(".hero-formula")
    if hf:
        fl = hf.select_one(".fl")
        if fl:
            info["formulaLabel"] = fl.get_text(strip=True)
            fl.extract()
        txt = hf.get_text()
        m = re.search(r"\\\[(.*?)\\\]", txt, re.S)
        info["formula"] = " ".join(tex_clean(m.group(1))) if m else ""
    return info


def toc_labels(soup):
    labels = {}
    for a in soup.select("nav.toc .toc-list a"):
        num = a.select_one(".toc-num")
        if num:
            num.extract()
        labels[a["href"].lstrip("#")] = a.get_text(strip=True)
    return labels


def sections_md(root, labels, ctx):
    """<section> -> '## título {#id kicker toc}' + corpo."""
    out = []
    for sec in root.find_all(["section"], recursive=False) if root.name != "section" else [root]:
        sid = sec.get("id", "")
        kick = sec.select_one(".kicker")
        title_el = sec.select_one("h2.section-title") or sec.select_one("h2.block-title")
        kicker = re.sub(r"^\s*\d+\s*[—-]\s*", "", kick.get_text(strip=True)) if kick else ""
        if kicker == "estudo":
            kicker = ""
        title = inline_str(title_el)
        attrs = ["#" + sid] if sid else []
        if kicker:
            attrs.append('kicker="%s"' % kicker.replace('"', "”"))
        tl = labels.get(sid)
        if tl and tl != title:
            attrs.append('toc="%s"' % tl.replace('"', "”"))
        head = "## " + title + ((" {" + " ".join(attrs) + "}") if attrs else "")
        if kick:
            kick.extract()
        title_el.extract()
        if "cheat" in cls(sec):
            body = [cheat_block(sec, ctx)]
        else:
            body = [b for ch in sec.children if isinstance(ch, Tag) for b in block(ch, ctx)]
        out.append([head] + [""] + blank_join(body))
    return out


# ───────────────────────── páginas ─────────────────────────
def topic_theory(slug, t):
    soup = load("topicos/%s.html" % slug)
    labels = toc_labels(soup)
    info = hero_info(soup)
    main = soup.find("main")
    ctx = Ctx()
    secs = sections_md(main, labels, ctx)
    # blocos fora de <section> (ex.: .next, .more-exercises) entram na última seção
    extra = []
    for ch in main.children:
        if isinstance(ch, Tag) and ch.name == "div" and "hero" not in cls(ch):
            extra.extend(block(ch, ctx))
    if extra and secs:
        secs[-1] += [""] + blank_join(extra)
    elif extra:
        secs.append(blank_join(extra))
    front = {
        "title": info["title"],
        "number": t["number"],
        "summary": t["summary"],
        "status": t["status"],
        "eyebrow": info["eyebrow"],
        "lede": info["lede"],
        "formula": info.get("formula", ""),
    }
    write("topicos/%s/teoria.md" % slug, fm(front) + "\n\n" + "\n\n".join("\n".join(s) for s in secs))


def topic_exercises(slug):
    soup = load("topicos/%s-exercicios.html" % slug)
    info = hero_info(soup)
    items = []
    for ex in soup.select("main section"):
        body = ex.select_one(".example-body")
        p = body.find("p")
        strong = p.find("strong")
        if strong:
            strong.extract()
        stmt = inline_str(p).lstrip(". ").strip()
        p.extract()
        det = body.find("details")
        sol = []
        if det:
            det.find("summary").extract()
            sol = blank_join(mixed(det.select_one(".step-content").parent.parent.children if False else det.children, Ctx()))
        items.append(["### " + stmt, ""] + sol)
    front = {"title": info["title"], "eyebrow": info["eyebrow"], "lede": info["lede"], "kind": "exercicios"}
    write("topicos/%s/exercicios.md" % slug, fm(front) + "\n\n" + "\n\n".join("\n".join(i) for i in items))


def lista_enunciado():
    soup = load("topicos/calc2_lista01-enunciado.html")
    labels = toc_labels(soup)
    info = hero_info(soup)
    main = soup.find("main")
    leg = main.select_one(".legacy-list-content")
    ctx = Ctx()
    parts = []
    note = leg.select_one(".question-note")
    if note:
        parts.append(block(note, ctx)[0])
    for sec in leg.find_all("section", recursive=False):
        sid = sec["id"]
        title = inline_str(sec.select_one("h2.section-title"))
        kick = sec.select_one(".kicker")
        kicker = re.sub(r"^\s*\d+\s*[—-]\s*", "", kick.get_text(strip=True))
        attrs = ["#" + sid]
        if kicker and kicker.lower() != title.lower():
            attrs.append('kicker="%s"' % kicker)
        parts.append(["## " + title + " {" + " ".join(attrs) + "}"])
        for q in sec.select("li.question-card"):
            parts.append(["### " + inline_str(q.find("h3"))])
            q.find("h3").extract()
            parts.extend(mixed(q.children, ctx))
    L = D["LISTAS"][0]
    front = {
        "title": "Lista 01",
        "number": L["number"],
        "summary": L["summary"],
        "tags": L["tags"],
        "status": L["status"],
        "eyebrow": info["eyebrow"],
        "heading": "Lista 01: enunciados",
        "lede": info["lede"],
        "kind": "lista",
        "source": "UFCG · Prof. Weiller F. Chaves Barboza",
    }
    write("listas/lista-01/enunciado.md", fm(front) + "\n\n" + "\n\n".join("\n".join(p) for p in parts))


def lista_resolucoes():
    soup = load("topicos/calc2_lista01.html")
    labels = toc_labels(soup)
    info = hero_info(soup)
    leg = soup.select_one(".legacy-list-content")
    ctx = Ctx()
    parts = []
    for ch in leg.children:
        if not isinstance(ch, Tag):
            continue
        if ch.name == "h2":
            sid = ch.get("id", "")
            title = inline_str(ch)
            title = re.sub(r"^\d+\.\s*", "", title)
            attrs = ["#" + sid] if sid else []
            parts.append(["## " + title + (" {" + " ".join(attrs) + "}" if attrs else "")])
        else:
            parts.extend(block(ch, ctx))
    front = {
        "title": "Lista 01 resolvida",
        "eyebrow": info["eyebrow"],
        "lede": info["lede"],
        "formula": info.get("formula", ""),
        "formulaLabel": info.get("formulaLabel", ""),
        "kind": "doc",
    }
    write("listas/lista-01/resolucoes.md", fm(front) + "\n\n" + "\n\n".join("\n".join(p) for p in parts))


def prova(p):
    pid = p["id"]
    soup = load("provas/%s.html" % pid)
    info = hero_info(soup)
    tags = [t.get_text(strip=True) for t in soup.select(".hero-tags .htag")] or p["tags"]
    meta = [m.get_text(strip=True) for m in soup.select(".hero-meta strong")]
    level = meta[2] if len(meta) > 2 else ""
    enun = soup.select_one("#enunciado")
    gab = soup.select_one("#gabarito")
    instr = inline_str(enun.select_one(".block-desc")) if enun.select_one(".block-desc") else ""
    gintro = inline_str(gab.select_one(".block-desc")) if gab.select_one(".block-desc") else ""
    gabs = {}
    for g in gab.select(".gab-item"):
        num = g.select_one(".gab-num").get_text(strip=True)
        gabs[num] = (inline_str(g.select_one(".gab-statement")), blank_join(mixed(g.select_one(".gab-body").children, Ctx())))
    parts = []
    for qi, q in enumerate(enun.select(".questao"), 1):
        parts.append(["## " + inline_str(q.select_one(".questao-instr"))])
        lis = q.select(".item-list li")
        singles = q.select(".item-single")
        entries = []
        if lis:
            for li in lis:
                letter = li.select_one(".item-letter").get_text(strip=True)
                entries.append((letter, inline_str(li.select_one(".item-body")), "%d%s" % (qi, letter.rstrip(")"))))
        for s in singles:
            entries.append(("", inline_str(s), str(qi)))
        for letter, stmt, key in entries:
            if key not in gabs:
                warn("%s: sem gabarito para %s" % (pid, key))
                sol = []
            else:
                gstmt, sol = gabs.pop(key)
                if re.sub(r"\s+", "", gstmt) != re.sub(r"\s+", "", stmt):
                    warn("%s: enunciado != gabarito em %s\n   E: %s\n   G: %s" % (pid, key, stmt, gstmt))
            parts.append(["### " + ((letter + " ") if letter else "") + stmt, ""] + sol)
    if gabs:
        warn("%s: gabaritos sem enunciado: %s" % (pid, list(gabs)))
    cta = gab.select_one(".cta-more")
    cta_d = {}
    if cta:
        a = cta.find("a")
        cta_d = {"text": inline_str(cta.find("p")), "label": a.get_text(strip=True), "href": route(a["href"])}
    front = {
        "title": info["title"],
        "summary": p["summary"],
        "tags": tags,
        "level": level,
        "status": p["status"],
        "eyebrow": info["eyebrow"],
        "lede": info["lede"],
        "instruction": instr,
        "gabaritoIntro": gintro,
        "cta": cta_d,
    }
    write("provas/%s.md" % pid, fm(front) + "\n\n" + "\n\n".join("\n".join(x) for x in parts))


# ───────────────────────── execução ─────────────────────────
for t in D["TOPICS"]:
    topic_theory(t["id"], t)
    topic_exercises(t["id"])
lista_enunciado()
lista_resolucoes()
for p in D["PROVAS"]:
    prova(p)

print("\n".join(sorted(set(WARN))) or "sem avisos")
