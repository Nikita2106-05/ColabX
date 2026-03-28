🚀 ColabX - College Project Collaboration Platform

ColabX is a full-stack web application designed to help college students find projects, collaborate with teammates, and connect with faculty guides. The platform uses Machine Learning to recommend projects based on a student's skill set and interest.

🌟 Key Features

👨‍🎓 For Students

Skill-based Profiles: Create professional profiles highlighting technical skills and academic details.

ML Project Recommendations: Get personalized project suggestions based on your skills using a Scikit-learn recommendation engine.

Teammate Finder: Search for collaborators by branch, year, or specific skills (e.g., React, Python, IoT).

Project Progress Tracker: Monitor the status of ongoing collaborations.

Event Alerts: Stay updated with the latest college hackathons and technical events.

👩‍🏫 For Faculty

Project Posting: Post subject-based projects with detailed guidance steps.

Mentorship: Guide student teams and track their progress.

Hackathon Announcements: Post and manage department-level events.

🛠️ Tech Stack

Frontend:

React.js (Vite)

Tailwind CSS (v4.0)

Lucide React (Icons)

React Router DOM

Backend:

Node.js & Express.js

MongoDB & Mongoose (ODM)

JWT (JSON Web Tokens) for Authentication

Bcrypt.js (Password Encryption)

Machine Learning:

Python

Scikit-learn (Content-based filtering)

Flask (To serve the ML model as an API)

📂 Project Structure

code

Text
ColabX/
├── frontend/             # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/   # Reusable UI (Cards, Navbar, Sidebar)
│   │   ├── pages/        # Dashboard, Login, Register, Teammates
│   │   └── App.jsx       # Routing logic
├── backend/              # Node.js + Express
│   ├── models/           # Mongoose Schemas (Student, Faculty, Project)
│   ├── routes/           # API Endpoints
│   ├── controllers/      # Business Logic
│   └── server.js         # Entry point
└── ml-model/             # Python ML Logic
    └── recommendation.py # Scikit-learn model

🚀 Getting Started

1. Clone the Repository

code

Bash

git clone https://github.com/your-username/ColabX.git

cd ColabX

2. Backend Setup

code

Bash

cd backend

npm install

Create a .env file in the backend folder:

code

Env

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Start the server:

code

Bash

npm start

3. Frontend Setup

code

Bash

cd ../frontend

npm install

npm run dev

4. ML Model Setup (Optional for now)

code

Bash

cd ../ml-model

pip install scikit-learn pandas flask

python recommendation.py

📈 Database Schema (Core Models)


User (Student/Faculty): Name, Email, Password, Role, Skills, Department.

Project: Title, Subject, Skills Required, Difficulty, PostedBy (Faculty ID).

Post: Author (Student ID), Requirements, Content.

Event: Title, Date, Type (Hackathon/Workshop).

📸 Screenshots

(Add your screenshots here after building the UI)

Landing Page: Professional hero section.

Student Dashboard: Personalized project cards.

Teammate Search: Filterable student list.

Faculty Portal: Form to post new projects.

🤝 Contributing

Fork the Project.


Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

🎓 Faculty Guide

Project Developed by: [Your Name]

College: [Your College Name]

Year: 2024-25
