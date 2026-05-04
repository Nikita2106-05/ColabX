import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        ...formData,
        role: role
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      if (response.data.user.role === 'faculty') {
        navigate('/faculty-dashboard');
      } else {
        navigate('/dashboard');
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Futuristic Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="relative w-full max-w-md">
        {/* Decorative Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-black/40 backdrop-blur-2xl w-full rounded-[2.5rem] border border-white/10 p-10 shadow-2xl">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <ShieldCheck className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">
              Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Hub</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Identify yourself to proceed</p>
          </div>

          {/* Futuristic Role Switcher */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl mb-10 border border-white/5 relative">
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-xl transition-all duration-500 ease-out shadow-lg ${role === 'faculty' ? 'left-[calc(50%+3px)]' : 'left-1.5'}`}
            ></div>
            <button
              onClick={() => setRole('student')}
              className={`relative z-10 flex-1 py-3 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${role === 'student' ? 'text-white' : 'text-gray-500'}`}
            >
              Student
            </button>
            <button
              onClick={() => setRole('faculty')}
              className={`relative z-10 flex-1 py-3 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${role === 'faculty' ? 'text-white' : 'text-gray-500'}`}
            >
              Faculty
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Secure Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                <input 
                  type="email" 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all text-white placeholder:text-gray-600"
                  placeholder="id@college.edu"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                <input 
                  type="password" 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="group relative w-full py-5 bg-white text-black font-black rounded-2xl transition-all active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                    <span className="uppercase tracking-widest text-sm relative z-10">Initialize Session</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm font-medium">
              New to the platform? 
              <Link to="/register" className="ml-2 text-purple-400 font-bold hover:text-purple-300 transition-colors group">
                Register Now
                <span className="block h-px w-0 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;