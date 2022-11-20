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
    <nav className="flex justify-between text-slate-800 dark:text-slate-200">
      <div className="flex flex-row items-center">
        {
          sections.map(({ link, text }) => (
            <div key={link} className="mr-4 text-xl hover:underline hover:decoration-1 hover:underline-offset-4">
              <a href={link}>
                {text}
              </a>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-center w-8 h-8">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
