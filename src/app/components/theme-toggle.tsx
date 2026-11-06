'use client';

import { useEffect, useState } from 'react';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

type Theme = 'light' | 'system' | 'dark';

const options = [
  { theme: 'light', label: 'Light', icon: SunIcon },
  { theme: 'system', label: 'System', icon: ComputerDesktopIcon },
  { theme: 'dark', label: 'Dark', icon: MoonIcon },
] as const;

// Runs in <head> before first paint so the page never flashes the wrong theme.
export const themeScript = [
  '(function(){try{',
  `var t=localStorage.getItem('theme');`,
  `var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);`,
  `document.documentElement.classList.toggle('dark',d);`,
  '}catch(e){}})();',
].join('');

function applyTheme(theme: Theme) {
  const dark = theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}

export default function ThemeToggle() {
  // null until mounted, since the saved theme only exists in the browser.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'light' || saved === 'dark' ? saved : 'system');
  }, []);

  useEffect(() => {
    if (theme !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [theme]);

  const choose = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
    try {
      if (next === 'system') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', next);
      }
    } catch {}
  };

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex gap-0.5 rounded-full border border-rule p-0.5"
    >
      {options.map(({ theme: option, label, icon: Icon }) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={theme === option}
          aria-label={label}
          title={label}
          onClick={() => choose(option)}
          className={`rounded-full p-1 hover:cursor-pointer ${theme === option ?
            'bg-rule text-strong' :
            'text-muted hover:text-body'}`}
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </button>
      ))}
    </div>
  );
}
