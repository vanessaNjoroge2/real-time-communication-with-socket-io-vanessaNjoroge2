import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { setupChatSocket } from './sockets/chatSocket';
import { json, urlencoded } from 'body-parser';
import { connectDatabase } from './config/database';
import authRoutes from './routes/authRoutes';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(json());
app.use(urlencoded({ extended: true }));

// Connect to database
connectDatabase();

// Routes
app.use('/api/auth', authRoutes);

// Set up Socket.io
setupChatSocket(io);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Socket.io Chat Application!');
});

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});