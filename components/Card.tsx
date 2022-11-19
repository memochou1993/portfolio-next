import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    <div className="max-w-sm bg-white border rounded-lg shadow-md shadow-slate-600/50 dark:bg-slate-800 dark:border-slate-400">
      <picture>
        <source srcSet={image} type="image/webp" />
        <img alt={title} src={image} className="rounded-t-lg aspect-auto aspect-[3/2]" />
      </picture>
      <div className="px-4 py-6">
        <div className="mb-4 text-2xl font-bold tracking-tight dark:text-slate-200">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <p className="mb-4 font-thin dark:text-slate-300">
          {
            tags.map((tag, i) => (
              <span>
                {`#${tag}`}
                {`${i < tags.length - 1 ? ' ' : ''}`}
              </span>
            ))
          }
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg ring-slate-400 hover:ring-1 active:ring-2 bg-gradient-to-br from-indigo-700 to-indigo-600 hover:from-indigo-800 hover:to-indigo-700 active:from-indigo-900 active:to-indigo-800">
          <span className="mr-2">
            Read more
          </span>
          <FontAwesomeIcon icon={faArrowRight} width="12" className="dark:text-slate-300" />
        </a>
      </div>
    </div>
  );
}
