const express = require('express');
const WebSocket = require('ws');
const axios = require('axios');
require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', async function incoming(message) {
    const data = JSON.parse(message);
    if (data.type === 'query') {
      try {
        const response = await axios.post('http://localhost:5000/query', { question: data.question });
        ws.send(JSON.stringify({ type: 'answer', answer: response.data.answer }));
      } catch (error) {
        ws.send(JSON.stringify({ type: 'error', message: 'Error processing query.' }));
      }
    }
  });
});

server.listen(8080, () => {
  console.log('WebSocket server is running on port 8080');
});
