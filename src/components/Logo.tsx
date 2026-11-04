import { useId } from 'react';
import { GLYPH_PATH, SPARKLE_BIG, SPARKLE_SMALL } from './logo-path';

/** ∫ afunilado no estilo da marca (degradê rosa→roxo, bolinhas nos terminais, sparkles e órbita). */
export default function Logo({ size = 38, className = 'brand-logo', tile = false }: { size?: number; className?: string; tile?: boolean }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} width={size} height={size} viewBox={tile ? '-125 5 300 290' : '-100 20 220 260'} role="img" aria-label="Cálculo II">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="36" x2="0" y2="262">
          <stop offset="0" stopColor="#ee0f7f" />
          <stop offset=".4" stopColor="#ff8db8" />
          <stop offset=".68" stopColor="#d4a2c8" />
          <stop offset="1" stopColor="#6b3fa0" />
        </linearGradient>
      </defs>
      {tile && <rect x="-125" y="5" width="300" height="290" rx="60" fill="#1a1230" />}
      <ellipse cx="0" cy="150" rx="104" ry="26" transform="rotate(-24 0 150)" fill="none" stroke={`url(#${id})`} strokeWidth="3" opacity=".8" />
      <g fill={`url(#${id})`}>
        <path d={GLYPH_PATH} />
        <circle cx="74" cy="66" r="8" />
        <circle cx="-66" cy="232" r="8" />
        <path d={SPARKLE_BIG} />
        <path d={SPARKLE_SMALL} />
      </g>
    </svg>
  );
}
