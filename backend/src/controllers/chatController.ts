import { Request, Response } from 'express';
import { Message } from '../models/message';

// Function to send a message
export const sendMessage = async (req: Request, res: Response) => {
  const { sender, content } = req.body;

  try {
    const newMessage = new Message({ sender, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

// Function to get all messages
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};