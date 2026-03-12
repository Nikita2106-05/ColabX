import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Landing Page (Home) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 2. Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* 3. Register Page */}
        <Route path="/register" element={<Register />} />

        {/* 4. Catch-all: If user types a wrong URL, redirect to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;