import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const read = (): Theme => {
  const t = document.documentElement.getAttribute('data-theme');
  return t === 'dark' ? 'dark' : 'light';
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'dark' ? '#0d0817' : '#FBFAF6');
  }, [theme]);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', next); } catch { /* modo privado */ }
      return next;
    });
  }, []);
  return { theme, toggle };
}
