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
        <title>Memo Chou</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-slate-300 to-slate-200 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-16 py-12 mx-auto sm:px-24 md:px-32">
          <nav className="flex justify-between text-slate-800 dark:text-slate-200">
            <div className="flex flex-row items-center">
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                About
              </div>
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                Projects
              </div>
              <div className="mr-4 text-xl underline decoration-1 underline-offset-2">
                Articles
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8">
              <button type="button" onClick={() => setIsDark(!isDark)}>
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
              </button>
            </div>
          </nav>
          <main className="my-12">
            <Profile />
            <Divider />
            <Heading text="About" />
            <About />
            <Divider />
            <Heading text="Projects" />
            <Portfolio />
          </main>
          <footer className="text-sm font-thin text-center dark:text-slate-300">
            {`© ${new Date().getFullYear()} Memo Chou`}
          </footer>
        </div>
      </div>
    </div>
  );
}
