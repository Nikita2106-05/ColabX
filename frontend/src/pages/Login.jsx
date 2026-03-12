import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Lock, UserCircle } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500">Log in to your ColabX account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'student'})}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'student' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'faculty'})}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'faculty' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              Faculty
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email or Enrollment</label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="21103XXX"
                onChange={(e) => setFormData({...formData, identifier: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg">
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-slate-600 text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 font-bold">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

// YAHAN DHAYAN DEIN: Ye line function ke bahar honi chahiye
export default Login;