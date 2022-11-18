import React from 'react';
import Head from 'next/head';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{'Memo\'s Portfolio'}</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark">
        <Portfolio />
      </main>
      <footer />
    </div>
  );
}
