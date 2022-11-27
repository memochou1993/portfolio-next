import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import ArticleItem from './ArticleItem';
import Divider from './Divider';
import Heading from './Heading';
import LoadMoreButton from './LoadMoreButton';

type EntryType = {
  title: string,
  link: string,
  published: string,
}

type EntrySpecType = {
  key: string;
  fields: EntryType;
}

const fetchArticles = async (url: string, { key, fields }: EntrySpecType) => {
  const res = await fetch(url) as Response;
  const doc = (new DOMParser()).parseFromString(await res.text(), 'text/xml');
  const { title, link, published } = fields;
  return Array.from(doc.querySelectorAll(key).values()).map((e) => ({
    title: (title && e.querySelector(title)?.textContent) || '',
    link: (link && e.querySelector(link)?.getAttribute('href')) || '',
    published: (published && e.querySelector(published)?.textContent) || '',
  }));
};

interface ArticleListProps {
  enabled: boolean;
  title: string;
  limit: number;
  source: string;
  entrySpec: EntrySpecType;
}

export default function ArticleList({
  enabled,
  title,
  limit,
  source,
  entrySpec,
}: ArticleListProps) {
  const mounted = useRef(false);
  const [articles, setArticles] = useState<Array<EntryType>>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (mounted.current) return;
    (async () => {
      setArticles(await fetchArticles(source, entrySpec));
    })();
    mounted.current = true;
  }, []);
  return enabled ? (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="w-full px-6 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
        {articles.map(({
          title,
          link,
          published,
        }, i) => (
          i < limit * page && (
            <ArticleItem
              key={title}
              title={title}
              link={link}
              published={published}
            />
          )
        ))}
        {page < articles.length / limit && (
          <div className="flex justify-center py-4">
            <LoadMoreButton onClick={() => setPage(page + 1)} />
          </div>
        )}
      </div>
    </>
  ) : <template />;
}
