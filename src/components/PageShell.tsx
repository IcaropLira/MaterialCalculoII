import { useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { site, topics } from '../lib/content';
import { useTheme } from '../lib/theme';

export interface Related { title?: string; links: { label: string; to: string }[] }

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'} title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}>
      <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
      <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
    </button>
  );
}

function Brand() {
  const [first, ...rest] = site.brand.word.split(' ');
  return (
    <Link className="brand" to="/">
      <Logo tile size={40} />
      <span className="brand-word">{first}{rest.length ? <> <i>{rest.join(' ')}</i></> : null}</span>
    </Link>
  );
}

function Header({ active }: { active: string }) {
  return (
    <header className="site-header">
      <Brand />
      <nav className="site-nav">
        {site.nav.map((n) => (
          <Link key={n.to} to={n.to} className={n.to === active ? 'current' : ''}>{n.label}</Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}

function Footer({ related }: { related?: Related }) {
  const avail = topics.filter((t) => t.status === 'available');
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>{site.brand.tagline}</p>
          </div>
          <div className="footer-links">
            <div>
              <span className="footer-h">Navegação</span>
              {site.nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
            </div>
            <div>
              <span className="footer-h">{related?.title ?? 'Nesta página'}</span>
              {related?.links.length ? related.links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>) : <span className="footer-empty">nada por aqui ainda</span>}
            </div>
            <div>
              <span className="footer-h">Tópicos disponíveis</span>
              {avail.length ? avail.map((t) => <Link key={t.slug} to={`/topicos/${t.slug}`}>{t.title}</Link>) : <span className="footer-empty">em construção</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Criado por {site.author}</span>
        <span>
          {site.repoUrl && <><a href={site.repoUrl} target="_blank" rel="noopener noreferrer">código-fonte ↗</a> · </>}
          {site.footerNote}
        </span>
      </div>
    </footer>
  );
}

/** Moldura de toda página: header, conteúdo e footer. `active` = rota do item do menu a destacar. */
export default function PageShell({ children, active = '/', related, title }: { children: ReactNode; active?: string; related?: Related; title?: string }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title ? `${title} — ${site.brand.word}` : `${site.brand.word} — teoria, exercícios e provas resolvidas`;
  }, [title, pathname]);
  return (
    <>
      <Header active={active} />
      {children}
      <Footer related={related} />
    </>
  );
}
