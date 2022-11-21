import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface ArticleProps {
  title: string;
  link: string;
  published: string;
}

class Article {
  title: string;

  link: string;

  published: string;

  constructor({
    title,
    link,
    published,
  }: ArticleProps) {
    this.title = title;
    this.link = link;
    this.published = published;
  }
}

const LIMIT = 25;

export default function ArticleList() {
  const mounted = useRef(false);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [page, setPage] = useState(1);
  const fetchArticles = async () => {
    const res = await fetch('https://blog.epoch.tw/atom.xml') as Response;
    const doc = new DOMParser().parseFromString(await res.text(), 'text/xml');
    const data = Array.from(doc.querySelectorAll('entry').values())
      .map((entry) => new Article({
        title: entry.querySelector('title')?.textContent as string,
        link: entry.querySelector('link')?.getAttribute('href') as string,
        published: entry.querySelector('published')?.textContent as string,
      }));
    setArticles(data);
  };
  useEffect(() => {
    if (!mounted.current) {
      fetchArticles();
    }
    mounted.current = true;
  }, []);
  return (
    <div className="w-full px-8 py-2 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      {
        articles.slice(0, LIMIT * page).map(({ title, link, published }) => {
          const [year, month, day] = (new Date(published)).toLocaleDateString().split('/');
          return (
            <div key={title} className="py-4 text-slate-800 dark:text-slate-200">
              <span className="mr-4">
                {`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`}
              </span>
              <a href={link} target="_blank" rel="noreferrer">
                <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
                  {title}
                </span>
              </a>
            </div>
          );
        })
      }
      {
        page < articles.length / LIMIT && (
          <div className="flex justify-center pt-4 pb-2">
            <button type="button" onClick={() => setPage(page + 1)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-xl ring-slate-400 hover:ring-1 bg-gradient-to-br from-indigo-700 to-indigo-500 hover:from-indigo-800 hover:to-indigo-500 active:from-indigo-900 active:to-indigo-500">
              <span className="mr-2">
                Load more
              </span>
              <FontAwesomeIcon icon={faArrowDown} className="w-3 text-white" />
            </button>
          </div>
        )
      }
    </div>
  );
}
