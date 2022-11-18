import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';

export default function Portfolio() {
  return (
    <div className="dark:bg-slate-900">
      <div className="container py-32 mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center mb-8">
            <Image alt="Memo Chou" src="/demo.jpeg" height="460" width="460" className="w-48 h-48 rounded-full" />
          </div>
          <div className="flex justify-center mb-8">
            <span className="text-lg font-light dark:text-slate-300">
              <a href="mailto:memochou1993@gmail.com">
                memochou1993@gmail.com
              </a>
              {' · '}
              Taipei, Taiwan
            </span>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex flex-col basis-10/12 md:basis-8/12">
              <div className="mb-8">
                <Card />
              </div>
              <div className="mb-8">
                <Card />
              </div>
              <div className="mb-8">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
