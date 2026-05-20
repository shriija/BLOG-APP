# 🖥️ BlogApp Backend

Backend API service for the BlogApp MERN platform.

Built with Node.js, Express.js, MongoDB, and JWT authentication.

---

## ✨ Backend Features

- RESTful APIs
- JWT Authentication
- HttpOnly Cookie Sessions
- Role-Based Access Control
- Modular API Architecture
- Centralized Error Handling
- Cloudinary Media Uploads
- MongoDB Atlas Integration

---

## 🛠️ Backend Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Multer | File Upload Handling |
| Cloudinary | Media Storage |
| Cookie Parser | Cookie Handling |
| Dotenv | Environment Variables |

---

## 📁 Backend Structure

```bash
BLOG-BACKEND/
│
├── APIs/
│   ├── AuthorApi.js
│   ├── UserApi.js
│   ├── AdminApi.js
│   └── commonApi.js
│
├── middlewares/
├── models/
├── config/
├── server.js
└── package.json
```

---

## ⚙️ Backend Environment Variables

```env
PORT=10000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🏃 Run Backend Locally

```bash
cd BLOG-BACKEND

npm install

npm run dev
```

Internally runs:

```bash
nodemon server.js
```

---

## 🔒 Security Features

- JWT Authentication
- HttpOnly Cookies
- Password Hashing
- Protected Routes
- Role-Based Authorization
- Secure Environment Variables
- Centralized Error Handling
- CORS Security

---

## 🌐 API Routes

# Common API

| Method | Endpoint | Description |
|---|---|---|
| POST | /common-api/register | Register User |
| POST | /common-api/login | Login User |
| GET | /common-api/logout | Logout User |
| GET | /common-api/check-auth | Verify Session |

---

# User API

| Method | Endpoint | Description |
|---|---|---|
| GET | /user-api/articles | Fetch All Articles |
| PATCH | /user-api/article/:articleId/comment | Add Comment |

---

# Author API

| Method | Endpoint | Description |
|---|---|---|
| POST | /author-api/article | Create Article |
| GET | /author-api/articles/:authorId | Fetch Author Articles |
| PUT | /author-api/article/:articleId | Update Article |
| PATCH | /author-api/articles/:articleId/status | Toggle Article Status |

---

## ☁️ Cloudinary Integration

Used for:

- Blog Image Uploads
- Optimized Image Delivery
- Secure Cloud Storage

---

## 🚀 Backend Deployment

- Platform: Render
- Database: MongoDB Atlas
- Secure Environment Variables

### Backend Development
1. Create git repo
    git init

2. Add .gitignore file

3. Create .env file for environment variables and read data from .env with "dotenv" module
    npm i dotenv

4. gernarate package.json
    npm init -y

5. Craete express application
    npm i express

6. Connect to database
    npm i mongoose

7. ADD middlewares(body parser, error handling middlewares)(common middlewares)

8. Design schemas and Create Models

9. Design REST APIs for all resources

### Registration and login

10. Registration & login in common for user and author. Create a seperate 

