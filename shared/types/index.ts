export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface User {
  id: string;
  username: string;
  online: boolean;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: Date;
}