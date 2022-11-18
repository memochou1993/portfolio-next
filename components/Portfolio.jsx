import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="dark:bg-slate-900">
      <div className="container py-32 mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center my-4">
            <Image alt="Memo Chou" src="/demo.jpeg" height="460" width="460" className="w-48 h-48 rounded-full" />
          </div>
          <div className="flex justify-center my-4">
            <span className="text-lg font-light dark:text-slate-300">
              <a href="mailto:memochou1993@gmail.com">
                memochou1993@gmail.com
              </a>
              {' · '}
              Taipei, Taiwan
            </span>
          </div>
          {
            [...Array(3).keys()].map((_) => (
              <div key={_} className="flex justify-center my-4">
                <div className="basis-10/12 md:basis-8/12">
                  <div className="p-8 rounded-lg shadow-lg dark:bg-slate-300">
                    <h3 className="text-lg font-medium dark:text-slate-900">
                      Skills
                    </h3>
                    <p className="mt-4 text-base dark:text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
