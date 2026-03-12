import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* This defines the "Home" route (/) and tells it to show LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Later, we will add more routes here, like:
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;