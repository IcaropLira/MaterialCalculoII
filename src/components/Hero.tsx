import { Link } from 'react-router-dom';
import { Md, MdInline } from '../lib/markdown';

export interface Action { label: string; to: string; primary?: boolean }

export default function Hero({ eyebrow, title, lede, formula, formulaLabel, actions, children }: {
  eyebrow?: string; title: string; lede?: string; formula?: string; formulaLabel?: string; actions?: Action[]; children?: React.ReactNode;
}) {
  return (
    <div className="hero">
      {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
      <h1><MdInline>{title}</MdInline></h1>
      {lede && <p className="lede"><MdInline>{lede}</MdInline></p>}
      {formula && (
        <div className="hero-formula">
          {formulaLabel && <span className="fl">{formulaLabel}</span>}
          <Md>{`$$\n${formula}\n$$`}</Md>
        </div>
      )}
      {children}
      {actions && actions.length > 0 && (
        <div className="question-actions">
          {actions.map((a) => <Link key={a.to} className={a.primary ? 'btn-primary' : 'btn-secondary'} to={a.to}>{a.label}</Link>)}
        </div>
      )}
    </div>
  );
}
