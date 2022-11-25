import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {
  ArticleList,
  About,
  Divider,
  Footer,
  Header,
  Heading,
  Profile,
  ProjectList,
  Sidebar,
} from '@/components';
import meta from '../assets/meta.json';

export default function Home() {
  return (
    <div id="app" className="dark">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{meta.title}</title>
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.title} />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
        <div className="container px-16 py-8 mx-auto sm:px-24 sm:py-10 md:px-32 md:py-12">
          <Header />
          <Sidebar />
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
          <Divider id="" />
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
