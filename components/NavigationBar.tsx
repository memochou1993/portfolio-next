import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const sections = [
  {
    link: '#about',
    text: 'About',
  },
  {
    link: '#projects',
    text: 'Projects',
  },
  {
    link: '#articles',
    text: 'Articles',
  },
];

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between text-slate-800 dark:text-slate-200">
      <div>
        {
          sections.map(({ link, text }) => (
            <a key={link} href={link}>
              <span className="mr-4 text-lg sm:text-xl hover:underline hover:decoration-1 hover:underline-offset-4">
                {text}
              </span>
            </a>
          ))
        }
      </div>
      <ThemeSwitch />
    </nav>
  );
}
