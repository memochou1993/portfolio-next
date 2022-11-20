import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

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

export default function ArticleList() {
  const mounted = useRef(false);
  const [articles, setArticles] = useState<Array<Article>>([]);
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
    <div className="w-full px-8 py-4 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      {
        articles.map(({ title, link, published }) => {
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
    </div>
  );
}
