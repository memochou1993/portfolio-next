import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  image: string;
  link: string;
  tags: Array<string>;
}

export default function Card({
  title,
  image,
  link,
  tags,
}: Props) {
  return (
    <div className="max-w-sm border rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      <Image alt={title} src={image} width="300" height="200" className="rounded-t-xl aspect-[3/2]" />
      <hr className="h-px border-0 bg-slate-500" />
      <div className="px-4 py-6">
        <div className="mb-4">
          <a href={link} target="_blank" rel="noreferrer">
            <span className="text-2xl font-bold tracking-tighter text-slate-800 sm:tracking-tight md:tracking-normal dark:text-slate-200 hover:underline hover:decoration-1 hover:underline-offset-4">
              {title}
            </span>
          </a>
        </div>
        <p className="mb-4 font-thin text-slate-700 dark:text-slate-300">
          {
            tags.map((tag, i) => (
              <span key={tag}>
                {`#${tag}`}
                {`${i < tags.length - 1 ? ' ' : ''}`}
              </span>
            ))
          }
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-xl ring-slate-400 hover:ring-1 bg-gradient-to-br from-indigo-700 to-indigo-500 hover:from-indigo-800 hover:to-indigo-500 active:from-indigo-900 active:to-indigo-500">
          <span className="mr-2">
            Read more
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="w-3 text-white" />
        </a>
      </div>
    </div>
  );
}