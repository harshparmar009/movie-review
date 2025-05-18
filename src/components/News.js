'use client';
import { useEffect, useState } from 'react';
import { fetchBollywoodNews } from '@/utils/fetchBollywoodNews';

export default function BollywoodNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const data = await fetchBollywoodNews();
      setNews(data);
    }

    loadNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bollywood News</h1>
      {news.length === 0 ? (
        <p>Loading or no news found...</p>
      ) : (
        <ul className="space-y-4">
          {news.map((article, idx) => (
            <li key={idx} className="border p-4 rounded shadow">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full max-h-48 object-cover mt-2 rounded"
                  />
                )}
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
