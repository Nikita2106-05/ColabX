import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // navigate add kiya
import axios from 'axios'; // axios import kiya
import { UserPlus, User, Hash, BookOpen, GraduationCap, Code, Mail, Lock } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate(); // redirect karne ke liye
  const [formData, setFormData] = useState({
    name: '',
    enrollment: '',
    branch: '',
    year: '1',
    skills: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend ko data bhej rahe hain
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      if (response.status === 201) {
        alert("Registration Successful! Now please login.");
        navigate('/login'); // Success hone par login page par bhejein
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Registration Failed!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Join ColabX</h2>
          <p className="text-slate-500">Create your student profile</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Enrollment */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Hash className="w-4 h-4" /> Enrollment Number
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder="0123CS211XXX"
              value={formData.enrollment}
              onChange={(e) => setFormData({...formData, enrollment: e.target.value})}
            />
          </div>

          {/* Branch */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Branch
            </label>
            <select
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </div>

          {/* Year */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Current Year
            </label>
            <select
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
            >
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          {/* Email */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> College Email ID
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder="john@college.edu"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Skills */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Code className="w-4 h-4" /> Skills (Comma separated)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder="React, Python, JS"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
            />
          </div>

          {/* Password */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all active:scale-[0.95]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;