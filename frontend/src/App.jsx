import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <header className="text-center">
          <div className="flex justify-center mb-4">
            <Rocket className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to <span className="text-blue-600">ColabX</span>
          </h1>
          <p className="text-gray-600">The ultimate collaboration platform for students.</p>
        </header>
        
        <main className="mt-10 p-6 bg-white shadow-xl rounded-2xl">
          <p className="text-green-600 font-medium">
            Frontend Setup Complete: Vite + React + Tailwind + Lucide
          </p>
        </main>
      </div>
    </Router>
  );
}

export default App;