const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000;

// Configuración del servidor PeerJS
const peerServer = PeerServer({
  port: PORT,
  path: '/myapp',
  allow_discovery: true,
});

app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.listen(PORT, () => {
  console.log(`PeerJS Server running on port ${PORT}`);
});