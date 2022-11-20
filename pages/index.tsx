import React from 'react';
import Head from 'next/head';
import {
  About,
  Divider,
  Footer,
  Heading,
  NavigationBar,
  Profile,
  ProjectList,
} from '@/components';

export default function Home() {
  return (
    <div id="app" className="dark">
      <Head>
        <title>Memo Chou</title>
        <meta name="description" content="Memo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
        <div className="container px-16 py-12 mx-auto sm:px-24 md:px-32">
          <NavigationBar />
          <main className="my-12">
            <Profile />
            <Divider id="about" />
            <Heading text="About" />
            <About />
            <Divider id="projects" />
            <Heading text="Projects" />
            <ProjectList />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
