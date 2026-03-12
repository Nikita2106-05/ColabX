import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; // Naya Dashboard import kiya

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

        {/* 4. Student Dashboard - Yahan user login ke baad aayega */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 5. Catch-all: Galat URL par Home par redirect karein */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;