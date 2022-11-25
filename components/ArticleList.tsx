import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import LoadMoreButton from './LoadMoreButton';

const LIMIT = 10;

export default function ArticleList() {
  const mounted = useRef(false);
  const [articles, setArticles] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const fetchArticles = async () => {
    const res = await fetch('https://blog.epoch.tw/atom.xml') as Response;
    const doc = new DOMParser().parseFromString(await res.text(), 'text/xml');
    const data = Array.from(doc.querySelectorAll('entry').values()).map((entry) => ({
      title: entry.querySelector('title')?.textContent,
      link: entry.querySelector('link')?.getAttribute('href'),
      published: entry.querySelector('published')?.textContent,
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
    <div className="w-full px-6 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      {
        articles.map(({ title, link, published }, i) => (
          i < LIMIT * page && (
            <div key={title} className="px-1 py-4 text-slate-800 dark:text-slate-200">
              <span className="mr-4">
                {published.slice(0, 10)}
              </span>
              <a href={link} target="_blank" rel="noreferrer">
                <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
                  {title}
                </span>
              </a>
            </div>
          )
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
