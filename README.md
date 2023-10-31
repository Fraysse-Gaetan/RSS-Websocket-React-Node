# Real-time News Dashboard

## Description
This project is a real-time news dashboard that displays news feeds using WebSockets for real-time updates. It's built with a modern tech stack to provide a seamless user experience.

## Tech Stack
- React
- ViteJS
- Node.js
- Express.js
- Tailwind CSS
- WebSockets

## Installation

### Prerequisites
- Node.js
- pnpm

### Steps
1. Clone the repository
   ```bash
   git clone https://github.com/Fraysse-Gaetan/RSS-Realtime-React-Node     
2. Navigate into the project directory
   ```bash
   cd your-repo-name 

3. Install dependencies for the frontend
   ```bash
   pnpm install
   
4. **Important**: Modify the default RSS URL in `server.js`

5. Navigate into the `back_end` directory
   
6. Start the backend server
   ```bash
   pnpm run node_dev
   
7. In a new terminal window, navigate back to the main project directory and start the frontend development server
   ```bash
   pnpm run dev

## Usage
1. Open `http://localhost:5173/` in your browser to view the dashboard. 
2. Use the button to switch between different news sources.
3. **Note**: If you need more buttons with different RSS links, make sure to update the default URLs in the `Header` component.
