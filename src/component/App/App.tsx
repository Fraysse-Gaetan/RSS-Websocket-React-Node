import React, { useEffect, useState } from 'react';
import { NewsItem } from '../../@types/NewsItem';
import Header from '../Header/Header';
import Article from '../Article/Article';

const App: React.FC = () => {
  // State definition to store news articles
  const [news, setNews] = useState<NewsItem[]>([]);

  // useEffect to handle WebSocket connection
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    // Handling messages received via WebSocket
    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data) as NewsItem[];
      console.log(parsedData);

      // Updating state with new data
      setNews(parsedData);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-900">
      <Header />
      <Article news={news} />
    </div>
  );
};

export default App;
