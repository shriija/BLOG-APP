# 🚀 BlogApp - Modern Full-Stack MERN Blogging Platform

BlogApp is a premium full-stack blogging platform built using the MERN stack.

The application enables users to explore articles, authors to publish content, and administrators to manage platform activity through secure APIs and protected routes.

---

## 🌐 Live Deployment

| Service | Status | Link |
|---|---|---|
| Frontend | 🟢 Live | https://blog-app-gules-eight.vercel.app |
| Backend | 🟢 Live | [https://blog-app-gkta.onrender.com](https://blog-app-gkta.onrender.com) |

---

## ✨ Core Features

- JWT Authentication
- Secure HttpOnly Cookie Sessions
- Role-Based Authorization
- Blog Creation & Management
- Comment System
- Cloudinary Image Uploads
- Responsive Glassmorphic UI
- Zustand State Management
- Protected Routes
- Modular Backend Architecture

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Zustand
- Axios
- React Router
- React Hook Form

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cloudinary
- Multer

---

## 📁 Project Structure

```bash
BLOG-APP/
│
├── BLOG-BACKEND/
│
├── BLOG-FRONTEND/
│
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend `.env`

```env
VITE_API_URL=http://localhost:10000
```

### Backend `.env`

```env
PORT=10000
MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🏃 Run Locally

### Backend

```bash
cd BLOG-BACKEND
npm install
npm run dev
```

### Frontend

```bash
cd BLOG-FRONTEND
npm install
npm run dev
```

---

## 🔒 Authentication Flow

```text
User Login
   ↓
JWT Token Generated
   ↓
Stored in HttpOnly Cookie
   ↓
verifyToken Middleware
   ↓
Protected Routes Access
```

### Why HttpOnly Cookies?

- Prevents XSS attacks
- Tokens inaccessible from frontend JavaScript
- More secure session handling

---

## 📡 Deployment

### Frontend
- Vercel
- Optimized Vite Production Build
- Auto Deployment from GitHub

### Backend
- Render
- MongoDB Atlas Integration
- Secure Environment Variables

---

## 🚧 Future Improvements

- Dark Mode
- Rich Text Editor
- Search & Filtering
- Bookmark System
- Like System
- Infinite Scrolling
- Admin Analytics Dashboard
- Forgot Password Flow
- Markdown Support

---

## 🤝 Contribution

```bash
# Fork repository

# Create feature branch
git checkout -b feature-name

# Commit changes
git commit -m "Added new feature"

# Push changes
git push origin feature-name
```

---

## 📜 License

Licensed under the ISC License.
