// Imports.
import WebSocket from 'ws';
import Player from './player.mjs';

// Members.
const playerName = Player.name;
const socket = new WebSocket(`wss://hidden-falls-43709.herokuapp.com?name=${playerName}`);
console.log(`I am ${playerName}.`);

socket.onopen = () => {
  console.log('Connected to server.');
};

socket.onmessage = event => {
  const data = JSON.parse(event.data);

  if (data.type === 'makeMove') {
    console.log(`Received a makeMove request with board: ${data.gameState}.`);

    const move = Player.makeMove(data.gameState);
    console.log(`Responding with move: ${move}.`);

    socket.send(JSON.stringify({
      type: 'move',
      move: move,
    }));
  }
};

socket.on('error', err => {
  console.log(`ERROR: ${err}.`);
});