import { useParams } from 'react-router-dom';
import DocPage from './DocPage';
import NotFound from './NotFound';
import PageShell from '../components/PageShell';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Md, MdInline } from '../lib/markdown';
import { getAula, getLista, splitSections, plain, type Lista } from '../lib/content';

/** Listas e aulas de exercícios compartilham as mesmas páginas; só muda a pasta, a rota e os textos. */
export type Kind = 'listas' | 'aulas';
const KINDS: Record<Kind, { get: (slug?: string) => Lista | undefined; home: string; back: string; noun: string; foot: string }> = {
  listas: { get: getLista, home: '/#listas', back: 'voltar para listas', noun: 'listas', foot: 'Parte da série de listas de exercícios de Cálculo II.' },
  aulas: { get: getAula, home: '/#aulas', back: 'voltar para aulas', noun: 'aulas', foot: 'Parte da série de aulas de exercícios de Cálculo II.' },
};

function splitQuestions(body: string) {
  const parts = body.split(/^### /m);
  return parts.slice(1).map((p) => {
    const i = p.indexOf('\n');
    return { title: (i < 0 ? p : p.slice(0, i)).trim(), body: i < 0 ? '' : p.slice(i + 1).trim() };
  });
}

/** Enunciados: "## seção" > "### questão" (+ itens a), b)… em lista numerada). */
export function ListaStatement({ kind = 'listas' }: { kind?: Kind }) {
  const K = KINDS[kind];
  const l = K.get(useParams().slug);
  if (!l?.statement || l.status !== 'available') return <NotFound />;
  const doc = l.statement;
  const { intro, sections } = splitSections(doc.body);
  const actions = l.solutions ? [{ label: 'Abrir resoluções', to: `/${kind}/${l.slug}/resolucoes`, primary: true }, { label: `Voltar para ${K.noun}`, to: K.home }] : [{ label: `Voltar para ${K.noun}`, to: K.home }];
  return (
    <PageShell active={K.home} title={String(doc.fm.heading ?? doc.fm.title)} related={{ title: l.title, links: l.solutions ? [{ label: 'Ver resoluções', to: `/${kind}/${l.slug}/resolucoes` }] : [] }}>
      <div className="shell">
        <Sidebar sub="Enunciados para resolver" foot="Tente os exercícios antes de abrir as resoluções." back={{ to: K.home, label: K.back }}
          items={sections.map((s) => ({ id: s.id, label: s.toc }))} />
        <main>
          <Hero eyebrow={doc.fm.eyebrow} title={doc.fm.heading ?? doc.fm.title} lede={doc.fm.lede} actions={actions} />
          {intro && <section><Md>{intro}</Md></section>}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id}>
              <div className="kicker">{String(i + 1).padStart(2, '0')} — {plain(s.kicker ?? s.title).toLowerCase()}</div>
              <h2 className="section-title"><MdInline>{s.title}</MdInline></h2>
              <ol className="question-list">
                {splitQuestions(s.body).map((q, k) => (
                  <li className="question-card" key={k}>
                    <h3><MdInline>{q.title}</MdInline></h3>
                    <Md>{q.body}</Md>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </main>
      </div>
    </PageShell>
  );
}

export function ListaSolutions({ kind = 'listas' }: { kind?: Kind }) {
  const K = KINDS[kind];
  const l = K.get(useParams().slug);
  if (!l?.solutions || l.status !== 'available') return <NotFound />;
  return (
    <DocPage
      doc={l.solutions}
      active={K.home}
      sub={`${l.title} — resolução comentada e tabela de fórmulas`}
      foot={K.foot}
      back={{ to: K.home, label: K.back }}
      actions={l.statement ? [{ label: 'Abrir enunciados', to: `/${kind}/${l.slug}`, primary: true }, { label: `Voltar para ${K.noun}`, to: K.home }] : undefined}
      related={{ title: l.title, links: l.statement ? [{ label: 'Ver enunciados', to: `/${kind}/${l.slug}` }] : [] }}
    />
  );
}
