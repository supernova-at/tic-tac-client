// Imports.
import WebSocket from 'ws';

const socket = new WebSocket('wss://hidden-falls-43709.herokuapp.com/');

socket.on('open', () => {
  socket.send('sending something');
});

socket.on('message', data => {
  console.log(`received ${data}.`);
});

socket.on('error', err => {
  console.log(`ERROR: ${err}.`);
});