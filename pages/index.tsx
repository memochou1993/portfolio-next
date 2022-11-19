import React from 'react';
import Head from 'next/head';
import {
  Profile,
  Portfolio,
  Heading,
} from '@/components';

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>{'Memo\'s Portfolio'}</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <main className="container px-16 py-16 mx-auto sm:px-24 md:px-32">
          <Profile />
          <hr className="h-px my-16 border-0 dark:bg-slate-500" />
          <Heading text="Portfolio" />
          <Portfolio />
        </main>
        <footer className="pb-16 text-sm font-thin text-center dark:text-slate-300">
          {`© ${new Date().getFullYear()} Memo Chou`}
        </footer>
      </div>
    </div>
  );
}
