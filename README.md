# 💬 Socket.io Real-Time Chat Application

A modern, real-time chat application built with **Socket.io**, **Express.js**, **React**, **TypeScript**, and **MongoDB**.  
Features include instant messaging, user authentication, online status indicators, and beautiful UI animations.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-green)
![Socket.io](https://img.shields.io/badge/Socket.io-v4.6.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)

---

## ✨ Features

- 🔐 **User Authentication** — Secure login and registration with JWT tokens  
- 💬 **Real-time Messaging** — Instant message delivery using Socket.io  
- 🟢 **Online Status** — See who's online in real-time  
- 🔔 **Push Notifications** — Get notified when users join/leave  
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile  
- 🎨 **Modern UI** — Beautiful gradient design with smooth animations  
- 🔒 **Secure** — Password hashing with bcrypt, JWT authentication  
- 💾 **Persistent Storage** — Messages and users stored in MongoDB  

---

``🏗️ Project Structure

socket-io-chat-app/
│
├── backend/                         # Node.js + Express backend
│   ├── src/
│   │   ├── index.ts                 # 🚀 Main entry point (Express + Socket.io)
│   │   ├── config/
│   │   │   └── database.ts          # 🗄️ MongoDB connection setup
│   │   ├── controllers/
│   │   │   └── authController.ts    # 🔐 Handles login, register, logout
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts    # 🛡️ JWT verification middleware
│   │   ├── models/
│   │   │   ├── user.ts              # 👤 User schema (username, email, password)
│   │   │   └── message.ts           # 💬 Message schema (content, sender, timestamp)
│   │   ├── routes/
│   │   │   └── authRoutes.ts        # 🛣️ Auth API routes
│   │   ├── services/
│   │   │   └── notificationService.ts # 🔔 Notification logic
│   │   └── sockets/
│   │       └── chatSocket.ts        # ⚡ Socket.io events (messages, status)
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                         # Environment variables
│
├── frontend/                        # React + TypeScript frontend
│   ├── public/
│   │   └── index.html               # 📄 HTML template
│   ├── src/
│   │   ├── index.tsx                # 🚀 React entry point
│   │   ├── App.tsx                  # 🏠 Main app with routing
│   │   ├── App.css                  # 🎨 Global styles
│   │   ├── index.css                # 📝 CSS reset
│   │   ├── components/
│   │   │   ├── ChatWindow.tsx       # 💬 Chat UI
│   │   │   └── NotificationToast.tsx# 🔔 Notifications
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx      # 🔐 Auth state


---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

---

### 🧩 Installation

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/vanessaNjoroge2/real-time-communication-with-socket-io-vanessaNjoroge2.git
cd socket-io-chat-app
**
Running the Application**

**Terminal 1 — Start Backend**

cd backend
npm run dev

**Terminal 2 — Start Frontend**

cd frontend
npm start

