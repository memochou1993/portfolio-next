import React from 'react';
import Head from 'next/head';
import {
  Divider,
  Heading,
  Profile,
  About,
  Portfolio,
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
