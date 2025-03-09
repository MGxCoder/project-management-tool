# Project Management Tool

## Overview
This is a full-stack **Project Management Tool** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). The application allows users to register, log in, and manage their projects efficiently with authentication via JWT tokens.

## Features
✅ User authentication (Register/Login) using JWT  
✅ Secure API routes with token-based authentication  
✅ Add, edit, and delete projects  
✅ Interactive dashboard for project management  
✅ Responsive UI built with React

## Tech Stack
### Frontend:
- React.js
- Axios
- React Router
- TailwindCSS (for styling)

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt.js for password hashing

## Installation & Setup

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/your-repo/project-management-tool.git
cd project-management-tool
```

### 2️⃣ Install Dependencies
#### Backend Setup:
```bash
cd backend
npm install
```

#### Frontend Setup:
```bash
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the `backend` folder and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application
#### Start Backend:
```bash
cd backend
npm start
```
OR (if using nodemon)
```bash
npm run dev
```

#### Start Frontend:
```bash
cd frontend
npm start
```

### 5️⃣ Access the App
Go to:  
Frontend: **http://localhost:3000**  
Backend API: **http://localhost:5000/api**

## API Routes
### **User Authentication**
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Log in and receive JWT token

### **Project Management**
- `GET /api/projects` → Get all projects (Requires authentication)
- `POST /api/projects` → Create a new project (Requires authentication)
- `PUT /api/projects/:id` → Update a project (Requires authentication)
- `DELETE /api/projects/:id` → Delete a project (Requires authentication)

## JWT Authentication Flow
1️⃣ User registers or logs in → Receives a JWT token.  
2️⃣ Token is stored in **localStorage** or **cookies**.  
3️⃣ Each API request includes the token in the **Authorization** header.  
4️⃣ Backend verifies token and grants access.  

## License
This project is licensed under the MIT License.

---
🚀 Happy Coding!

