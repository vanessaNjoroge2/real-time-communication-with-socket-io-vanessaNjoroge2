import React, { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";
import ChatWindow from "../components/ChatWindow";
import NotificationToast from "../components/NotificationToast";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  type: "sent" | "received";
}

const ChatPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { sendMessage, onMessageReceived, onUserStatusUpdate } = useSocket(
    "http://localhost:3001"
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    onMessageReceived((message: any) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: message.content || message,
        senderId: message.senderId || "other",
        timestamp: new Date(),
        type: message.senderId === user.id ? "sent" : "received",
      };
      setMessages((prev) => [...prev, newMessage]);
    });

    onUserStatusUpdate(
      (status: { userId: string; username?: string; online: boolean }) => {
        const username = status.username || status.userId;
        setNotifications((prev) => [
          ...prev,
          `${username} is ${status.online ? "online 🟢" : "offline ⚫"}`,
        ]);

        // Auto-remove notification after 3 seconds
        setTimeout(() => {
          setNotifications((prev) => prev.slice(1));
        }, 3000);
      }
    );
  }, [user, navigate, onMessageReceived, onUserStatusUpdate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleSendMessage = (content: string) => {
    sendMessage(content);
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      senderId: user!.id,
      timestamp: new Date(),
      type: "sent",
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>💬 Chat Room</h1>
        <div className="user-info">
          <span>👤 {user?.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <ChatWindow messages={messages} sendMessage={handleSendMessage} />
      {notifications.map((notification: string, index: number) => (
        <NotificationToast
          key={index}
          message={notification}
          show={true}
          onClose={() =>
            setNotifications((prev) => prev.filter((_, i) => i !== index))
          }
        />
      ))}
    </div>
  );
};

export default ChatPage;
