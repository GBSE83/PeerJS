const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000; // ✅ Usa el puerto de Render o 9000 en local

// Configura PeerServer en el mismo puerto que Express
const peerServer = PeerServer({
  port: PORT, // ⚠️ Importante: mismo puerto que el servidor web
  path: '/myapp',
  allow_discovery: true,
});

app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.listen(PORT, () => {
  console.log(`Servidor PeerJS ejecutándose en puerto ${PORT}`);
});
