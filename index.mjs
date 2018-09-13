// Imports.
import WebSocket from 'ws';
//import { PlayerClass } from './player.mjs';

// Members.
const playerName = 'test';
const socket = new WebSocket(`wss://hidden-falls-43709.herokuapp.com?name=${playerName}`);

socket.onopen = () => {
  console.log('Connected to server.');
};

socket.onmessage = event => {
  console.log(`Received ${event}.`);

  const data = JSON.parse(event.data);

  if (data.type === 'makeMove') {
    const move = 0; //Player.makeMove(data.gameState);
    socket.send(JSON.stringify({
      type: 'move',
      move: move,
    }));
  }
};

socket.on('error', err => {
  console.log(`ERROR: ${err}.`);
});