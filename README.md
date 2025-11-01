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

## 🏗️ Project Structure

socket-io-chat-app/
│
├── backend/ # Backend Node.js application
│ ├── src/
│ │ ├── index.ts # 🚀 Starts Express & Socket.io server
│ │ ├── config/
│ │ │ └── database.ts # 🗄️ MongoDB connection configuration
│ │ ├── controllers/
│ │ │ └── authController.ts # 🔐 Handles login, register, logout logic
│ │ ├── middleware/
│ │ │ └── authMiddleware.ts # 🛡️ JWT token verification
│ │ ├── models/
│ │ │ ├── user.ts # 👤 User schema
│ │ │ └── message.ts # 💬 Message schema
│ │ ├── routes/
│ │ │ └── authRoutes.ts # 🛣️ Auth routes
│ │ ├── services/
│ │ │ └── notificationService.ts# 🔔 Handles notifications
│ │ └── sockets/
│ │ └── chatSocket.ts # ⚡ Socket.io event handlers
│ ├── package.json
│ ├── tsconfig.json
│ └── .env # Environment variables
│
├── frontend/ # React TypeScript app
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── index.tsx # 🚀 Renders App component
│ │ ├── App.tsx # 🏠 Main app component
│ │ ├── components/
│ │ │ ├── ChatWindow.tsx # 💬 Chat interface
│ │ │ └── NotificationToast.tsx # 🔔 Toast notifications
│ │ ├── contexts/
│ │ │ └── AuthContext.tsx # 🔐 Auth state management
│ │ ├── hooks/
│ │ │ └── useSocket.ts # ⚡ Socket.io hook
│ │ ├── pages/
│ │ │ ├── Login.tsx # 🔑 Login/Register page
│ │ │ └── Chat.tsx # 💬 Chat page
│ ├── package.json
│ └── tsconfig.json
│
└── README.md


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

