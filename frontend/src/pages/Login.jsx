import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. useNavigate import kiya
import { LogIn, Lock, UserCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate(); // 2. Navigate hook initialize kiya
  
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    
    // 3. Abhi ke liye hum bina backend ke seedha dashboard par bhej rahe hain
    // Jab backend ban jayega tab hum yahan check karenge ki email/pass sahi hai ya nahi
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-100 p-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <LogIn className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-serif">Welcome Back</h2>
          <p className="text-slate-500 text-sm">Log in to your ColabX account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Role Selector */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'student'})}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${formData.role === 'student' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'faculty'})}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${formData.role === 'faculty' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
            >
              Faculty
            </button>
          </div>

          {/* Email/Enrollment Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email or Enrollment</label>
            <div className="relative">
              <UserCircle className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                placeholder="e.g. 21103XXX"
                value={formData.identifier}
                onChange={(e) => setFormData({...formData, identifier: e.target.value})}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
              <input
                type="password"
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-slate-500 text-sm font-medium">
          Don't have an account? {' '}
          <Link to="/register" className="text-blue-600 font-bold hover:underline underline-offset-4">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;