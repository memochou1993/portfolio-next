import React, {
  useState,
} from 'react';
import LoadMoreButton from './LoadMoreButton';

const LIMIT = 10;

export default function ArticleList({ articles }: any) {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full px-8 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      {
        articles.map(({ title, link, published }: any, i: number) => (
          <div key={title} className={`px-1 py-4 text-slate-800 dark:text-slate-200 ${i < LIMIT * page ? '' : 'hidden'}`}>
            <span className="mr-4">
              {published.slice(0, 10)}
            </span>
            <a href={link} target="_blank" rel="noreferrer">
              <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
                {title}
              </span>
            </a>
          </div>
        ))
      }
      {
        page < articles.length / LIMIT && (
          <div className="flex justify-center px-1 py-4">
            <LoadMoreButton onClick={() => setPage(page + 1)} />
          </div>
        )
      }
    </div>
  );
}
