import PageShell, { type Related } from '../components/PageShell';
import Sidebar from '../components/Sidebar';
import Hero, { type Action } from '../components/Hero';
import { Md, MdInline } from '../lib/markdown';
import { splitSections, type Doc } from '../lib/content';

/** Página "documento": hero + barra lateral + seções "## …". Usada por teorias e resoluções de lista. */
export default function DocPage({ doc, active, sub, foot, back, actions, related }: {
  doc: Doc; active: string; sub: string; foot?: string; back?: { to: string; label: string }; actions?: Action[]; related?: Related;
}) {
  const { intro, sections } = splitSections(doc.body);
  const fm = doc.fm;
  return (
    <PageShell active={active} related={related} title={String(fm.heading ?? fm.title)}>
      <div className="shell">
        <Sidebar sub={sub} foot={foot} back={back} items={sections.map((s) => ({ id: s.id, label: s.toc }))} />
        <main>
          <Hero eyebrow={fm.eyebrow} title={fm.heading ?? fm.title} lede={fm.lede} formula={fm.formula} formulaLabel={fm.formulaLabel} actions={actions} />
          {intro && <section><Md>{intro}</Md></section>}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className={s.cheat ? 'cheat' : undefined}>
              <div className="kicker">{String(i + 1).padStart(2, '0')}{s.kicker ? ` — ${s.kicker}` : ''}</div>
              <h2 className="section-title"><MdInline>{s.title}</MdInline></h2>
              <Md>{s.body}</Md>
            </section>
          ))}
        </main>
      </div>
    </PageShell>
  );
}
