import React, {
  useState,
} from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import {
  Divider,
  Heading,
  Profile,
  About,
  Portfolio,
} from '@/components';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? 'dark' : ''}>
      <Head>
        <title>Memo&apos;s Portfolio</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-slate-300 to-slate-200 dark:from-slate-900 dark:to-slate-800">
        <div className="fixed flex items-center justify-center w-8 h-8 top-6 right-6">
          <button type="button" onClick={() => setIsDark(!isDark)}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
          </button>
        </div>
        <main className="container px-16 py-20 mx-auto sm:px-24 md:px-32">
          <Profile />
          <Divider />
          <Heading text="About" />
          <About />
          <Divider />
          <Heading text="Portfolio" />
          <Portfolio />
        </main>
        <footer className="pb-20 text-sm font-thin text-center dark:text-slate-300">
          {`© ${new Date().getFullYear()} Memo Chou`}
        </footer>
      </div>
    </div>
  );
}
