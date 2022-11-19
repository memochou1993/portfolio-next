import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  image: string;
  link: string;
}

export default function Card({
  title,
  image,
  link,
}: Props) {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-300">
      <picture>
        <source srcSet={image} type="image/webp" />
        <img alt={title} src={image} className="rounded-t-lg aspect-auto aspect-[3/2]" />
      </picture>
      <div className="px-4 py-8">
        <a href={link} target="_blank" rel="noreferrer">
          <h5 className="mb-4 text-2xl font-bold tracking-tight dark:text-slate-200">
            {title}
          </h5>
        </a>
        <p className="mb-4 font-normal tracking-tight dark:text-slate-300">
          #Solidity
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-1 bg-gradient-to-br from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 active:from-blue-900 active:to-blue-800">
          <span className="mr-2">
            Read more
          </span>
          <FontAwesomeIcon icon={faArrowRight} width="12" className="dark:text-slate-300" />
        </a>
      </div>
    </div>
  );
}