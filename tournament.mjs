// Imports.
import WebSocket from 'ws';
import minimist from 'minimist';

// Unfortunately we can't dynamically import these easily.
import Player1 from './players/1';
import Player2 from './players/2';
import Player3 from './players/3';
import Player4 from './players/4';
import Player5 from './players/5';
import Player6 from './players/6';
import Player7 from './players/7';
import Player8 from './players/8';

const teams = [
  Player1,
  Player2,
  Player3,
  Player4,
  Player5,
  Player6,
  Player7,
  Player8,
];

const args = minimist(process.argv.slice(2));
const { team } = args;
const player = teams[team - 1];

// Members.
const playerName = player.name;
const socket = new WebSocket(`wss://hidden-falls-43709.herokuapp.com?name=${playerName}`);
console.log(`I am "${playerName}".`);

socket.onopen = () => {
  console.log('Connected to server.');
};

socket.onmessage = event => {
  const data = JSON.parse(event.data);

  if (data.type === 'makeMove') {
    console.log(`Received a makeMove request with board: ${data.gameState}.`);

    const move = player.makeMove(data.token, data.gameState);
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