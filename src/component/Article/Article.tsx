import { NewsItem } from '@/@types/NewsItem';

type ArticleProps = {
  news: NewsItem[];
};

function Article({ news }: ArticleProps) {
  return (
    <div className="mx-10 my-4 rounded-lg bg-white p-5 shadow-lg dark:bg-gray-800">
      {news.map((item, index) => (
        <div
          className="m-5 rounded-lg bg-gray-100 p-5 text-gray-700 shadow-md dark:bg-gray-700 dark:text-gray-300"
          key={index}
        >
          <h2 className="mb-2 text-2xl font-semibold">{item.title}</h2>
          <p className="mb-2 text-sm">{item.contentSnippet}</p>
          <p className="text-xs text-gray-500">{item.pubDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Article;
