import axios from 'axios';

// Type definition for component props
type ButtonProps = {
  label: string;
  rssUrl: string;
};

const Button = ({ label, rssUrl }: ButtonProps) => {
  // Button click handler
  const handleClick = async () => {
    try {
      // Sending POST request to update the RSS feed URL
      const response = await axios.post(
        'http://localhost:8080/api/set-rss-url',
        { rssUrl },
      );

      // Checking if the request was successful
      if (response.status === 200) {
        console.log('RSS feed URL successfully updated');
      }
    } catch (error) {
      // Error handling
      console.log('Error updating the RSS feed URL', error);
    }
  };

  // JSX for button rendering
  return (
    <button
      className={`rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-900`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
