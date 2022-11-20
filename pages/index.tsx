import React from 'react';
import Head from 'next/head';
import {
  Divider,
  Heading,
  Profile,
  About,
  ProjectList,
  ThemeSwitch,
  Footer,
} from '@/components';

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
