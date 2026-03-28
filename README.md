# 🚀 ColabX | Smart Collaboration Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
</p>

---

### 📝 Project Overview
**ColabX** ek modern web-platform hai jo college students aur faculty ke beech ki gap ko khatam karta hai. Ye platform **Machine Learning** ka use karke students ko unke skills ke basis par projects recommend karta hai aur unhe sahi teammates dhundne mein madad karta hai.

---

### ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **ML Recommendations** | Smart suggestions based on Student skills using Scikit-Learn. |
| **Teammate Finder** | Search students by Branch, Year, and specific Technical Skills. |
| **Faculty Portal** | Faculty can post subject-based projects and track progress. |
| **Project Tracker** | Real-time progress monitoring for ongoing team projects. |
| **Events Hub** | Centralized dashboard for Hackathons and College Events. |

---

### 🛠️ Tech Stack

#### **Frontend**
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS v4.0
- **Icons:** Lucide React
- **Routing:** React Router DOM

#### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT (JSON Web Tokens) & Bcrypt.js

#### **Machine Learning**
- **Library:** Scikit-Learn
- **Language:** Python
- **Algorithm:** Content-based Filtering

---

### 📂 Folder Structure

```text
ColabX/
├── frontend/             # React Client
│   ├── src/
│   │   ├── components/   # UI Reusable Parts
│   │   ├── pages/        # Main Screens (Dashboard, Login, etc.)
│   │   └── App.jsx       # Route Definitions
├── backend/              # Express Server
│   ├── models/           # DB Schemas
│   ├── controllers/      # Business Logic
│   ├── routes/           # API Endpoints
│   └── server.js         # Entry Point
└── ml-model/             # Python Model Logic
