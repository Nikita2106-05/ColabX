import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Building, GraduationCap, Hash, ArrowRight, Sparkles } from 'lucide-react';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    enrollment: '', branch: 'CSE', year: '1',
    department: '', designation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        ...formData,
        role: role
      });
      alert(response.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Register Card */}
      <div className="relative w-full max-w-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-10"></div>
        
        <div className="relative bg-black/40 backdrop-blur-2xl w-full rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-40"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <UserPlus className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Account</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Join the next-gen innovation hub</p>
          </div>

          {/* Futuristic Role Switcher */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl mb-10 border border-white/5 relative max-w-sm mx-auto">
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

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Common Fields */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                <input name="name" onChange={handleChange} required className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all text-white placeholder:text-gray-600" placeholder="John Doe" />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email ID</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                <input name="email" type="email" onChange={handleChange} required className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all text-white placeholder:text-gray-600" placeholder="john@college.edu" />
              </div>
            </div>

            {/* Conditional Fields: Student */}
            {role === 'student' && (
              <>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Enrollment No.</label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                    <input name="enrollment" onChange={handleChange} required className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all text-white placeholder:text-gray-600" placeholder="0123CS..." />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Academic Branch</label>
                  <select name="branch" onChange={handleChange} className="w-full px-4 py-4 bg-[#111] border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all text-white appearance-none">
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                  </select>
                </div>
              </>
            )}

            {/* Conditional Fields: Faculty */}
            {role === 'faculty' && (
              <>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Department</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={18} />
                    <input name="department" onChange={handleChange} required className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-white placeholder:text-gray-600" placeholder="Computer Science" />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Designation</label>
                  <input name="designation" onChange={handleChange} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white" placeholder="Professor" />
                </div>
              </>
            )}

            <div className="md:col-span-2 group">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Security Key (Password)</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-rose-400 transition-colors" size={18} />
                <input name="password" type="password" onChange={handleChange} required className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500/50 transition-all text-white placeholder:text-gray-600" placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" className="md:col-span-2 group relative w-full py-5 bg-white text-black font-black rounded-2xl transition-all active:scale-95 overflow-hidden mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                    <span className="uppercase tracking-widest text-sm relative z-10">Initialize Identity</span>
                    <Sparkles size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                </div>
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm font-medium">
              Already a member? 
              <Link to="/login" className="ml-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Sign In to Portal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;