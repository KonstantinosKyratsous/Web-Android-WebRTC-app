import { Server } from 'ws';
import { createServer } from 'http';
import Roulette from './roulette';

const wss = new Server({ port: 8000 });
const mm = new Roulette();

console.log( wss.address());


wss.on('connection', ws => {
  console.log('mphka');
  mm.register(ws);
});