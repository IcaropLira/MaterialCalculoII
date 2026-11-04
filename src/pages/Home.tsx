import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { MdInline, Md } from '../lib/markdown';
import { listas, provas, site, topics } from '../lib/content';

function Head({ s }: { s: { kicker: string; title: string; text: string } }) {
  return (
    <div className="block-head">
      <div>
        <div className="kicker">{s.kicker}</div>
        <h2 className="block-title">{s.title}</h2>
        <p className="block-sub">{s.text}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const h = site.home;
  const availTopics = topics.filter((t) => t.status === 'available');
  const exTotal = topics.reduce((n, t) => n + t.exerciseCount, 0);
  const provasOk = provas.filter((p) => p.status === 'available');

  return (
    <PageShell active="/">
      <main style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 0 }}>
        <div className="hero home">
          <div>
            <div className="hero-eyebrow">{h.eyebrow}</div>
            <h1><MdInline>{h.title}</MdInline></h1>
            <p className="lede"><MdInline>{h.lede}</MdInline></p>
            <div className="hero-cta">
              <a className="btn-primary" href="#topicos">Ver tópicos</a>
              <a className="btn-secondary" href="#listas">Ver listas de exercícios</a>
            </div>
          </div>
          {h.formula && (
            <div className="hero-formula">
              {h.formulaLabel && <span className="fl">{h.formulaLabel}</span>}
              <Md>{`$$\n${h.formula}\n$$`}</Md>
            </div>
          )}
        </div>

        <div className="stat-strip">
          <div className="stat-cell"><div className="num">{availTopics.length}</div><div className="lbl">tópicos disponíveis</div></div>
          <div className="stat-cell"><div className="num">{exTotal}</div><div className="lbl">exercícios comentados</div></div>
          <div className="stat-cell"><div className="num">{provasOk.length}</div><div className="lbl">provas resolvidas</div></div>
          <div className="stat-cell"><div className="num">+</div><div className="lbl">chegando toda semana</div></div>
        </div>

        <section className="block" id="topicos">
          <Head s={h.topicos} />
          <div className="topic-grid">
            {topics.map((t) => {
              const locked = t.status !== 'available';
              return (
                <div key={t.slug} className={'topic-card' + (locked ? ' locked' : '')}>
                  <div className="tnum">{t.number}</div>
                  <h3>{t.title}</h3>
                  <p><MdInline>{t.summary}</MdInline></p>
                  {locked ? (
                    <span className="badge-soon">em breve</span>
                  ) : (
                    <div className="topic-links">
                      <Link to={`/topicos/${t.slug}`}>Ver teoria</Link>
                      {t.exercises && <Link to={`/topicos/${t.slug}/exercicios`}>{t.exerciseCount} exercícios</Link>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="block" id="listas">
          <Head s={h.listas} />
          <div className="prova-grid">
            {listas.map((l) => {
              const locked = l.status !== 'available';
              return (
                <div key={l.slug} className={'prova-card' + (locked ? ' locked' : '')}>
                  <div className="prova-top"><h3>{l.title}</h3><span className="prova-meta">{locked ? 'em breve' : `${l.itemsCount} itens`}</span></div>
                  <div className="prova-tags">{l.tags.map((t) => <span key={t} className="prova-tag">{t}</span>)}</div>
                  <p><MdInline>{l.summary}</MdInline></p>
                  {locked ? <span className="badge-soon">em breve</span> : (
                    <div className="topic-links">
                      {l.statement && <Link to={`/listas/${l.slug}`}>Ver questões</Link>}
                      {l.solutions && <Link to={`/listas/${l.slug}/resolucoes`}>Ver resoluções</Link>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="block" id="provas">
          <Head s={h.provas} />
          <div className="prova-grid">
            {provas.map((p) => {
              const locked = p.status !== 'available';
              return (
                <div key={p.slug} className={'prova-card' + (locked ? ' locked' : '')}>
                  <div className="prova-top"><h3>{p.title}</h3><span className="prova-meta">{locked ? 'em breve' : `${p.itemsCount} itens`}</span></div>
                  <div className="prova-tags">{p.tags.map((t) => <span key={t} className="prova-tag">{t}</span>)}</div>
                  <p><MdInline>{p.summary}</MdInline></p>
                  {!locked && <Link className="btn-secondary" to={`/provas/${p.slug}`}>Resolver prova</Link>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="block" style={{ borderBottom: 'none' }}>
          <div className="how-it-works">
            {h.como.map((c, i) => (
              <div className="how-card" key={c.title}>
                <div className="step-tag">{String(i + 1).padStart(2, '0')}</div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
