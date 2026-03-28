# 🚀 ColabX | Smart Student-Faculty Collaboration Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

---

## 📝 Project Overview
**ColabX** ek full-stack web application hai jo college students aur faculty ke beech collaboration ko digitalize karta hai. Iska main maqsad students ko unke skills ke basis par sahi projects aur teammates dhundne mein madad karna hai, sath hi faculty ko subject-based projects assign karne ke liye ek platform dena hai.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Student Profile** | Create profiles with technical skills, branch, and year details. |
| **ML Recommendations** | Smart project suggestions using Machine Learning (Python/Scikit-learn). |
| **Teammate Finder** | Advanced search to find teammates based on specific skills & branch. |
| **Faculty Dashboard** | Faculty can post subject-specific projects and guidance steps. |
| **Project Tracker** | Monitor project progress and tasks in real-time. |
| **Events & Calendar** | Stay updated with upcoming Hackathons and Academic dates. |

---

## 🛠️ Tech Stack Details

### **Frontend**
*   **Library:** React.js (Vite)
*   **Styling:** Tailwind CSS (Modern UI/UX)
*   **Icons:** Lucide React
*   **Routing:** React Router DOM
*   **State Management:** React Hooks (useState, useEffect)

### **Backend**
*   **Environment:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB (Atlas)
*   **ODM:** Mongoose
*   **Authentication:** JWT (JSON Web Tokens) & Bcryptjs

### **Machine Learning**
*   **Language:** Python
*   **Library:** Scikit-learn
*   **Logic:** Content-based recommendation system

---

## 📂 Project Structure

```text
ColabX/
├── frontend/             # React Application (Client)
│   ├── src/
│   │   ├── components/   # Reusable UI Parts (Cards, Sidebar, Navbar)
│   │   ├── pages/        # Main App Screens (Dashboard, Teammates, Login)
│   │   ├── assets/       # Images & Static Files
│   │   └── App.jsx       # Main Routes Configuration
├── backend/              # Node.js API (Server)
│   ├── models/           # MongoDB Schemas (Student, Faculty, Project)
│   ├── controllers/      # API Logic & Database Operations
│   ├── routes/           # API Endpoints / URL paths
│   └── server.js         # Entry point for Server
└── ml-model/             # Python ML Logic
    └── recommendation.py # Project recommendation script

---

##🚀 Setup & Installation

1. Clone the Repository

git clone https://github.com/yourusername/colabx.git

cd colabx

2. Backend Setup

a. Move to backend folder: cd backend

b. Install dependencies: npm install

c. Create a .env file and add:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

d. Start Server: npm start (or npx nodemon server.js)

3. Frontend Setup

a. Open new terminal and move to frontend: cd frontend

b. Install dependencies: npm install

c. Start Frontend: npm run dev

d. Open browser at: http://localhost:5173

---

🔑Key API Endpoints

POST /api/auth/register - User Registration (Student/Faculty)

POST /api/auth/login - User Login & Token generation

GET /api/projects - Get all available projects

POST /api/projects - Post a new project (Faculty only)

GET /api/data/students - Find students for collaboration

---

👨‍💻 Contributor Information

Project Name: ColabX

Developer Name: [Your Name Here]

College: [Your College Name Here]

Specialization: Full Stack Development

Academic Year: 2024-2025
