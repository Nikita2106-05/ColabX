import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Building, GraduationCap, Hash } from 'lucide-react';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    enrollment: '', branch: '', year: '1',
    department: '', designation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend API call
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-100 p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <UserPlus className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Create Account</h2>
          <p className="text-slate-500 mt-2">Join the ColabX community today</p>
        </div>

        {/* Role Switcher */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
          <button
            onClick={() => setRole('student')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${role === 'student' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
          >
            I am a Student
          </button>
          <button
            onClick={() => setRole('faculty')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${role === 'faculty' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
          >
            I am Faculty
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Common Fields */}
          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={20} />
              <input name="name" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={20} />
              <input name="email" type="email" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@college.edu" />
            </div>
          </div>

          {/* Conditional Fields: Student Only */}
          {role === 'student' && (
            <>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Enrollment No.</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3 text-slate-400" size={20} />
                  <input name="enrollment" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="0123CS21..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Branch</label>
                <select name="branch" onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                </select>
              </div>
            </>
          )}

          {/* Conditional Fields: Faculty Only */}
          {role === 'faculty' && (
            <>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Department</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 text-slate-400" size={20} />
                  <input name="department" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Computer Science" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Designation</label>
                <input name="designation" onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Professor" />
              </div>
            </>
          )}

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
              <input name="password" type="password" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="md:col-span-2 w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 mt-2">
            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <p className="text-center mt-8 text-slate-600">
          Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;