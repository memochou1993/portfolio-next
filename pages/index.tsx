import React from 'react';
import Head from 'next/head';
import {
  Profile,
  Portfolio,
  Heading,
  About,
} from '@/components';

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Memo&apos;s Portfolio</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <main className="container px-16 py-20 mx-auto sm:px-24 md:px-32">
          <Profile />
          <hr className="h-px my-8 border-0 dark:bg-slate-500 sm:my-10 md:my-12" />
          <Heading text="About" />
          <About />
          <hr className="h-px my-8 border-0 dark:bg-slate-500 sm:my-10 md:my-12" />
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
