Socket.io Real-Time Chat Application 💬
A modern, real-time chat application built with Socket.io, Express.js, React, TypeScript, and MongoDB. Features include instant messaging, user authentication, online status indicators, and beautiful UI animations.

<img alt="Tech Stack" src="https://img.shields.io/badge/Stack-MERN-green">

<img alt="Socket.io" src="https://img.shields.io/badge/Socket.io-v4.6.0-blue">

<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.3.3-blue">

✨ Features
🔐 User Authentication - Secure login and registration with JWT tokens
💬 Real-time Messaging - Instant message delivery using Socket.io
🟢 Online Status - See who's online in real-time
🔔 Push Notifications - Get notified when users join/leave
📱 Responsive Design - Works seamlessly on desktop and mobile
🎨 Modern UI - Beautiful gradient design with smooth animations
🔒 Secure - Password hashing with bcrypt, JWT authentication
💾 Persistent Storage - Messages and users stored in MongoDB
🏗️ Project Structure

socket-io-chat-app/│├── backend/                          # Backend Node.js application│   ├── src/│   │   ├── index.ts                 # 🚀 Main entry point - starts Express & Socket.io server│   │   ├── config/│   │   │   └── database.ts          # 🗄️ MongoDB connection configuration│   │   ├── controllers/│   │   │   └── authController.ts    # 🔐 Handles login, register, logout logic│   │   ├── middleware/│   │   │   └── authMiddleware.ts    # 🛡️ JWT token verification middleware│   │   ├── models/│   │   │   ├── user.ts              # 👤 User schema (username, email, password)│   │   │   └── message.ts           # 💬 Message schema (content, sender, timestamp)│   │   ├── routes/│   │   │   └── authRoutes.ts        # 🛣️ API routes for authentication│   │   ├── services/│   │   │   └── notificationService.ts # 🔔 Handles notification logic│   │   └── sockets/│   │       └── chatSocket.ts        # ⚡ Socket.io event handlers (messages, status)│   ├── package.json                 # Backend dependencies│   ├── tsconfig.json                # TypeScript config for backend│   └── .env                         # Environment variables (MongoDB URI, JWT secret)│├── frontend/                         # React TypeScript application│   ├── public/│   │   └── index.html               # 📄 HTML template│   ├── src/│   │   ├── index.tsx                # 🚀 React entry point - renders App component│   │   ├── App.tsx                  # 🏠 Main app component with routing│   │   ├── App.css                  # 🎨 Global styles and animations│   │   ├── index.css                # 📝 Base CSS reset and typography│   │   ├── components/│   │   │   ├── ChatWindow.tsx       # 💬 Chat interface (messages list + input)│   │   │   └── NotificationToast.tsx # 🔔 Toast notification component│   │   ├── contexts/│   │   │   └── AuthContext.tsx      # 🔐 Authentication state management│   │   ├── hooks/│   │   │   └── useSocket.ts         # ⚡ Custom hook for Socket.io connection│   │   └── pages/│   │       ├── Login.tsx            # 🔑 Login/Register page│   │       └── Chat.tsx             # 💬 Main chat page│   ├── package.json                 # Frontend dependencies│   └── tsconfig.json                # TypeScript config for frontend│└── README.md                         # 📖 Project documentation
📁 File Explanations
Backend Files
File Purpose
src/index.ts Main server entry point. Initializes Express, Socket.io, connects to MongoDB, and sets up routes.
config/database.ts MongoDB connection handler with error handling and connection events.
controllers/authController.ts Handles user registration, login, and logout. Validates credentials and generates JWT tokens.
middleware/authMiddleware.ts Verifies JWT tokens for protected routes.
models/user.ts Mongoose schema for users (username, email, hashed password, online status).
models/message.ts Mongoose schema for messages (content, sender ID, receiver ID, timestamp).
routes/authRoutes.ts Defines API endpoints: /register, /login, /logout.
services/notificationService.ts Sends notifications to users when messages are received or users go online/offline.
sockets/chatSocket.ts Manages Socket.io events: connection, disconnect, sendMessage, typing, userStatus.
Frontend Files
File Purpose
index.tsx React entry point. Renders the root component into the DOM.
App.tsx Main app component with React Router. Sets up routes and authentication provider.
App.css Contains all styling: gradients, animations, responsive design, chat bubbles, buttons.
contexts/AuthContext.tsx Manages authentication state (user, token, login/logout functions). Uses React Context API.
hooks/useSocket.ts Custom hook that manages Socket.io connection, message sending/receiving, and status updates.
components/ChatWindow.tsx Main chat interface. Displays messages and input field. Auto-scrolls to latest message.
components/NotificationToast.tsx Shows slide-in notifications with auto-dismiss and close button.
pages/Login.tsx Login and registration form with validation and error handling.
pages/Chat.tsx Main chat page. Handles message state, notifications, and user status updates.
🚀 Getting Started
Prerequisites
Node.js v18+
MongoDB (local or Atlas)
npm or yarn
Installation
Clone the repository

git clone <repository-url>cd socket-io-chat-app
Setup Backend

cd backendnpm install
Create .env file:

PORT=3001MONGODB_URI=mongodb://localhost:27017/chatappJWT_SECRET=your_super_secret_key_here
Setup Frontend

cd frontendnpm install
Running the Application
Terminal 1 - Start Backend:

cd backendnpm run dev
Server runs on http://localhost:3001

Terminal 2 - Start Frontend:

cd frontendnpm start
App opens on http://localhost:3000

🔧 Available Scripts
Backend

npm run dev      # Start development server with auto-reloadnpm run build    # Compile TypeScript to JavaScriptnpm start        # Run compiled JavaScript
Frontend

npm start        # Start development servernpm run build    # Create production buildnpm test         # Run tests
🌐 API Endpoints
Authentication
Method Endpoint Description Body
POST /api/auth/register Create new user { username, email, password }
POST /api/auth/login Login user { email, password }
POST /api/auth/logout Logout user { userId }
⚡ Socket.io Events
Client → Server
Event Payload Description
sendMessage { content, senderId, receiverId } Send a chat message
typing { userId, isTyping } User is typing indicator
userStatus { userId, online } Update user online status
Server → Client
Event Payload Description
messageReceived { content, senderId, timestamp } New message received
userStatusUpdate { userId, username, online } User went online/offline
notification { message } System notification
🎨 Design Features
Gradient Backgrounds - Purple-blue gradient (#667eea → #764ba2)
Smooth Animations - Slide-in, fade effects on messages and notifications
Chat Bubbles - Different styles for sent (right, gradient) and received (left, gray) messages
Responsive Layout - Mobile-first design with breakpoints at 768px and 480px
Custom Scrollbar - Styled scrollbar for messages container
Typing Indicator - Animated dots when someone is typing
Auto-scroll - Messages container auto-scrolls to newest message
🔐 Security Features
✅ Password hashing with bcrypt (salt rounds: 10)
✅ JWT token authentication
✅ HTTP-only cookies (optional)
✅ CORS protection
✅ Input validation
✅ MongoDB injection prevention
🐛 Troubleshooting
Port Already in Use

# Windowsnetstat -ano | findstr :3001taskkill /PID <PID> /F# Mac/Linuxlsof -ti:3001 | xargs kill -9
MongoDB Connection Failed
Ensure MongoDB is running: mongod or check Atlas connection string
Verify .env has correct MONGODB_URI
Frontend Won't Start

cd frontendrm -rf node_modules package-lock.jsonnpm installnpm start
📦 Dependencies
Backend
express - Web server framework
socket.io - Real-time bidirectional communication
mongoose - MongoDB ODM
bcrypt - Password hashing
jsonwebtoken - JWT token generation/verification
cors - Cross-origin resource sharing
dotenv - Environment variables
typescript - Type safety
Frontend
react - UI library
react-dom - React DOM renderer
react-router-dom - Client-side routing
socket.io-client - Socket.io client
typescript - Type safety
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
This project is licensed under the MIT License.

👤 Author
Your Name

GitHub: @yourusername
🙏 Acknowledgments
Socket.io documentation
React documentation
MongoDB documentation
TypeScript handbook
📸 Screenshots
Login Page
<img alt="Login" src="https://via.placeholder.com/800x400?text=Login+Page">

Chat Interface
<img alt="Chat" src="https://via.placeholder.com/800x400?text=Chat+Interface">

Mobile View
<img alt="Mobile" src="https://via.placeholder.com/400x800?text=Mobile+View">
