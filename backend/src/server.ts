import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { createServer } from 'http';
import chatSocket from './sockets/chatSocket';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Middleware and routes can be set up here

// Socket.io integration
chatSocket(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});