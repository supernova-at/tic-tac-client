// Imports.
import WebSocket from 'ws';
import Player from './player';

// Members.
const socket = new WebSocket('wss://hidden-falls-43709.herokuapp.com/');

socket.onopen = () => {
  socket.send(JSON.stringify({
    type: 'register',
    name: Player.name,
  }));
};

socket.onmessage = event => {
  console.log(`Received ${event}.`);

  const data = JSON.parse(event.data);

  if (data.type === 'makeMove') {
    const move = Player.makeMove(data.gameState);
    socket.send(JSON.stringify({
      type: 'move',
      move: move,
    }));
  }
};

socket.on('error', err => {
  console.log(`ERROR: ${err}.`);
});