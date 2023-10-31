import Button from '../Button/Button';

function Header() {
  return (
    <div className="mb-5 px-10">
      <nav className="rounded-b-lg border-gray-200 bg-white px-10 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between p-4">
          <h1 className="mb-4 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Real-time news
          </h1>
          <div className="flex space-x-4">
            {}
            <Button label="Label" rssUrl="https://rss_feed_url/rss.xml" />
            <Button label="Label" rssUrl="https://rss_feed_url/rss.xml" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
