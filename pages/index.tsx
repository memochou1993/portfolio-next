import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {
  ArticleList,
  About,
  Divider,
  Elevator,
  Footer,
  Heading,
  NavigationBar,
  Profile,
  ProjectList,
} from '@/components';

const meta = {
  author: 'Memo Chou',
  title: 'Memo Chou',
  description: 'I\'m Memo Chou, a creative developer passionate about Go, PHP, Rust and JavaScript.',
};

export default function Home() {
  return (
    <div id="app" className="dark">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{meta.title}</title>
        <meta name="author" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
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
            <Divider id="articles" />
            <Heading text="Articles" />
            <ArticleList />
          </main>
          <Elevator />
          <Footer />
        </div>
      </div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RK2ZEFCDK7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RK2ZEFCDK7');
        `}
      </Script>
    </div>
  );
}
