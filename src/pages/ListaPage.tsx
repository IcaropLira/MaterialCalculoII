import { useParams } from 'react-router-dom';
import DocPage from './DocPage';
import NotFound from './NotFound';
import PageShell from '../components/PageShell';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Md, MdInline } from '../lib/markdown';
import { getLista, splitSections, plain } from '../lib/content';

function splitQuestions(body: string) {
  const parts = body.split(/^### /m);
  return parts.slice(1).map((p) => {
    const i = p.indexOf('\n');
    return { title: (i < 0 ? p : p.slice(0, i)).trim(), body: i < 0 ? '' : p.slice(i + 1).trim() };
  });
}

/** Enunciados: "## seção" > "### questão" (+ itens a), b)… em lista numerada). */
export function ListaStatement() {
  const l = getLista(useParams().slug);
  if (!l?.statement || l.status !== 'available') return <NotFound />;
  const doc = l.statement;
  const { intro, sections } = splitSections(doc.body);
  const actions = l.solutions ? [{ label: 'Abrir resoluções', to: `/listas/${l.slug}/resolucoes`, primary: true }, { label: 'Voltar para listas', to: '/#listas' }] : [{ label: 'Voltar para listas', to: '/#listas' }];
  return (
    <PageShell active="/#listas" title={String(doc.fm.heading ?? doc.fm.title)} related={{ title: l.title, links: l.solutions ? [{ label: 'Ver resoluções', to: `/listas/${l.slug}/resolucoes` }] : [] }}>
      <div className="shell">
        <Sidebar sub="Enunciados para resolver" foot="Tente os exercícios antes de abrir as resoluções." back={{ to: '/#listas', label: 'voltar para listas' }}
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

export function ListaSolutions() {
  const l = getLista(useParams().slug);
  if (!l?.solutions || l.status !== 'available') return <NotFound />;
  return (
    <DocPage
      doc={l.solutions}
      active="/#listas"
      sub={`${l.title} — resolução comentada e tabela de fórmulas`}
      foot="Parte da série de listas de exercícios de Cálculo II."
      back={{ to: '/#listas', label: 'voltar para listas' }}
      actions={l.statement ? [{ label: 'Abrir enunciados', to: `/listas/${l.slug}`, primary: true }, { label: 'Voltar para listas', to: '/#listas' }] : undefined}
      related={{ title: l.title, links: l.statement ? [{ label: 'Ver enunciados', to: `/listas/${l.slug}` }] : [] }}
    />
  );
}
