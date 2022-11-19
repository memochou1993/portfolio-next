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
      <main className="dark:bg-slate-900">
        <div className="container px-16 py-8 mx-auto sm:py-12 sm:px-24 md:py-16 md:px-32">
          <Profile />
          <hr className="h-px my-8 border-0 dark:bg-gray-600" />
          <Heading text="Portfolio" />
          <Portfolio />
        </div>
      </main>
      <footer className="py-16 dark:bg-slate-900" />
    </div>
  );
}
