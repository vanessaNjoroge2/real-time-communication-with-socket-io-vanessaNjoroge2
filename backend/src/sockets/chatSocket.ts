import { Server, Socket } from 'socket.io';
import ChatMessage from '../models/message';
import { NotificationService } from '../services/notificationService';

interface UserSocket extends Socket {
  userId?: string;
  username?: string;
}

export const setupChatSocket = (io: Server) => {
  io.on('connection', (socket: UserSocket) => {
    console.log('User connected:', socket.id);

    // User joins with authentication
    socket.on('join', ({ userId, username, room }) => {
      socket.userId = userId;
      socket.username = username;
      socket.join(room);
      
      io.to(room).emit('userStatusUpdate', { 
        userId, 
        username, 
        online: true 
      });
      
      console.log(`${username} joined room: ${room}`);
    });

    // Typing indicator
    socket.on('typing', ({ room, username }) => {
      socket.to(room).emit('userTyping', { username });
    });

    socket.on('stopTyping', ({ room }) => {
      socket.to(room).emit('userStoppedTyping');
    });

    // Send message to specific room
    socket.on('sendMessage', async ({ room, message, userId, username }) => {
      try {
        const chatMessage = new ChatMessage({
          senderId: userId,
          content: message,
          room,
          timestamp: new Date()
        });
        await chatMessage.save();

        io.to(room).emit('messageReceived', {
          id: chatMessage._id,
          senderId: userId,
          username,
          content: message,
          timestamp: chatMessage.timestamp
        });

        // Mark as read when received
        socket.to(room).emit('messageRead', { messageId: chatMessage._id });
      } catch (error) {
        console.error('Error sending message:', error);
        socket.emit('error', 'Failed to send message');
      }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      if (socket.userId && socket.username) {
        io.emit('userStatusUpdate', { 
          userId: socket.userId, 
          username: socket.username,
          online: false 
        });
      }
      console.log('User disconnected:', socket.id);
    });
  });
};