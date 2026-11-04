import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export interface TocItem { id: string; label: string }

/** Barra lateral com sumário; destaca a seção visível. */
export default function Sidebar({ sub, items, foot, back }: { sub: string; items: TocItem[]; foot?: string; back?: { to: string; label: string } }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: '-80px 0px -65% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="toc">
      {back && <Link className="back-link" to={back.to}>← {back.label}</Link>}
      <Logo className="toc-mark" size={44} tile />
      <div className="toc-title"><strong>Cálculo II</strong>{sub}</div>
      <ul className="toc-list">
        {items.map((it, i) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className={active === it.id ? 'active' : ''} onClick={(e) => { e.preventDefault(); document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth' }); history.replaceState(null, '', `#${it.id}`); }}>
              <span className="toc-num">{String(i + 1).padStart(2, '0')}</span>{it.label}
            </a>
          </li>
        ))}
      </ul>
      {foot && <div className="toc-foot">{foot}</div>}
    </nav>
  );
}
