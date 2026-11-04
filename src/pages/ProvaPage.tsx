import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import PageShell from '../components/PageShell';
import Hero from '../components/Hero';
import { Md, MdInline } from '../lib/markdown';
import { getProva, splitEntries } from '../lib/content';

/** Prova: o enunciado é escrito UMA vez ("### item") e a resolução fica logo abaixo — a página monta folha + gabarito. */
export default function ProvaPage() {
  const p = getProva(useParams().slug);
  if (!p || p.status !== 'available') return <NotFound />;
  const fm = p.doc.fm;
  const { groups } = splitEntries(p.doc.body);
  const total = p.itemsCount;
  const cta = fm.cta as { text: string; label: string; href: string } | undefined;

  return (
    <PageShell active="/#provas" title={p.title} related={{ title: 'Relacionado', links: cta ? [{ label: cta.label, to: cta.href }] : [] }}>
      <main style={{ maxWidth: 900, margin: '0 auto' }}>
        <Link className="back-link" to="/#provas" style={{ margin: '28px 0 0', padding: '0 24px' }}>← voltar para provas</Link>
        <Hero eyebrow={fm.eyebrow} title={p.title} lede={fm.lede}>
          <div className="hero-tags">{p.tags.map((t) => <span key={t} className="htag">{t}</span>)}</div>
          <div className="hero-meta">
            <div><strong>{groups.length}</strong>questões</div>
            <div><strong>{total}</strong>itens no total</div>
            {p.level && <div><strong>{p.level}</strong>nível</div>}
          </div>
        </Hero>

        <section className="block" id="enunciado" style={{ padding: '44px 24px 52px' }}>
          <div className="block-kicker">folha de questões</div>
          <h2 className="block-title">Enunciado</h2>
          {fm.instruction && <p className="block-desc"><MdInline>{fm.instruction}</MdInline></p>}
          <div className="sheet">
            <div className="sheet-head"><span className="sh-title">Cálculo II — {p.title}</span><span className="sh-sub">{total} itens · sem consulta</span></div>
            <div className="sheet-body">
              {groups.map((g, qi) => (
                <div className="questao" key={qi}>
                  <div className="questao-head"><span className="questao-num">{qi + 1}</span><span className="questao-instr"><MdInline>{g.title}</MdInline></span></div>
                  {g.entries.length === 1 && !g.entries[0]!.letter ? (
                    <div className="item-single"><MdInline>{g.entries[0]!.heading}</MdInline></div>
                  ) : (
                    <ul className="item-list">
                      {g.entries.map((e, k) => (
                        <li key={k}><span className="item-letter">{e.letter ?? `${String.fromCharCode(97 + k)})`}</span><span className="item-body"><MdInline>{e.heading}</MdInline></span></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="gabarito" style={{ padding: '44px 24px 52px', borderBottom: 'none' }}>
          <div className="block-kicker">resolução comentada</div>
          <h2 className="block-title">Gabarito</h2>
          <p className="block-desc"><MdInline>{fm.gabaritoIntro ?? 'Cada item abre com a resolução completa, passo a passo.'}</MdInline></p>
          {groups.flatMap((g, qi) =>
            g.entries.map((e, k) => {
              const alone = g.entries.length === 1 && !e.letter;
              const verdict = /:{3,}result\{kind="(diverge|converge)"\}/.exec(e.body)?.[1];
              const num = alone ? String(qi + 1) : `${qi + 1}${(e.letter ?? `${String.fromCharCode(97 + k)})`).replace(')', '')}`;
              return (
                <div className="gab-item" key={num}>
                  <div className="gab-head"><span className="gab-num">{num}</span><span className="gab-statement"><MdInline>{e.heading}</MdInline>{verdict && <span className={`conclusion-tag ${verdict === 'diverge' ? 'div' : 'conv'}`}>{verdict === 'diverge' ? 'divergente' : 'convergente'}</span>}</span></div>
                  <details className="toggle">
                    <summary>ver resolução</summary>
                    <div className="gab-body"><Md>{e.body}</Md></div>
                  </details>
                </div>
              );
            }),
          )}
          {cta && (
            <div className="cta-more">
              <div className="cta-text"><p><MdInline>{cta.text}</MdInline></p></div>
              <Link className="cta-btn" to={cta.href}>{cta.label}</Link>
            </div>
          )}
        </section>
      </main>
    </PageShell>
  );
}
