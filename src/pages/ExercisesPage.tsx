import PageShell from '../components/PageShell';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Md, MdInline } from '../lib/markdown';
import { splitEntries, type Topic } from '../lib/content';

/** Lista de exercícios de um tópico: "### enunciado" + resolução logo abaixo (escondida num <details>). */
export default function ExercisesPage({ topic }: { topic: Topic }) {
  const doc = topic.exercises!;
  const { intro, groups } = splitEntries(doc.body);
  let n = 0;
  const items = groups.flatMap((g) => g.entries.map(() => ({ id: `ex${++n}`, label: `Exercício ${n}` })));
  n = 0;
  return (
    <PageShell active="/#topicos" title={String(doc.fm.title)} related={{ title: topic.title, links: [{ label: 'Teoria', to: `/topicos/${topic.slug}` }] }}>
      <div className="shell">
        <Sidebar sub={`Guia de estudo — exercícios — ${topic.title.toLowerCase()}`} items={items} foot="Material de estudo de Cálculo II."
          back={{ to: `/topicos/${topic.slug}`, label: 'voltar para a teoria' }} />
        <main>
          <Hero eyebrow={doc.fm.eyebrow} title={doc.fm.title} lede={doc.fm.lede} actions={[{ label: 'Ver a teoria', to: `/topicos/${topic.slug}` }]} />
          {intro && <section><Md>{intro}</Md></section>}
          {groups.map((g, gi) => (
            <div key={gi}>
              {g.title && <section style={{ paddingBottom: 0, borderBottom: 'none' }}><h2 className="section-title" style={{ marginBottom: 0 }}><MdInline>{g.title}</MdInline></h2></section>}
              {g.entries.map((e) => {
                const k = ++n;
                return (
                  <section key={k} id={`ex${k}`}>
                    <div className="kicker">{String(k).padStart(2, '0')} — exercício</div>
                    <div className="example">
                      <div className="example-head"><span className="example-num">{k}</span><span className="example-title">Exercício {k}</span></div>
                      <div className="ex-stmt"><MdInline>{e.heading}</MdInline></div>
                      {e.body && (
                        <details className="toggle">
                          <summary>Ver resolução comentada</summary>
                          <div className="ex-answer"><Md>{e.body}</Md></div>
                        </details>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          ))}
        </main>
      </div>
    </PageShell>
  );
}
