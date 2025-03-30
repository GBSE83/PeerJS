const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000;

// Configura PeerServer en un puerto diferente (usando process.env.PEER_PORT)
const PEER_PORT = process.env.PEER_PORT || 9001; // Puerto diferente para PeerJS

const peerServer = PeerServer({
  port: PEER_PORT, // Puerto dedicado para WebSockets
  path: '/myapp',
  allow_discovery: true,
});

app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP en puerto ${PORT}`);
  console.log(`Servidor PeerJS en puerto ${PEER_PORT}`);
});
