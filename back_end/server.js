/* eslint-disable @typescript-eslint/no-var-requires */

// Importing required modules
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const Parser = require('rss-parser');
const cors = require('cors');

const parser = new Parser();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

// Default RSS URL
let currentRssUrl = 'https://www.france24.com/fr/rss';

// Route to update RSS feed URL
app.post('/api/set-rss-url', (req, res) => {
  const { rssUrl } = req.body;
  if (rssUrl) {
    currentRssUrl = rssUrl;
    res.status(200).json({ message: 'RSS feed URL successfully updated' });
  } else {
    res.status(400).json({ message: 'Invalid RSS feed URL' });
  }
});

// Handling WebSocket connections
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Function to fetch RSS feed data
  const fetchData = async () => {
    try {
      const feed = await parser.parseURL(currentRssUrl);
      if (feed && feed.items) {
        ws.send(JSON.stringify(feed.items));
      }
    } catch (error) {
      console.error(`Error fetching the RSS feed: ${error}`);
    }
  };

  fetchData();

  // Setting interval to fetch data regularly, here every 10 seconds
  const intervalId = setInterval(fetchData, 10000);

  // Handling connection closure
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId);
  });
});

server.listen(8080, () => {
  console.log('Server started on http://localhost:8080/');
});
