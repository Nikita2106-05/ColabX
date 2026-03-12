import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, User, Hash, BookOpen, GraduationCap, Code, Mail, Lock, Briefcase } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState('student'); // 'student' or 'faculty'
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '', // Student ke liye Enrollment, Faculty ke liye Employee ID
    department: '', // Branch for students, Dept for faculty
    year: '1',
    designation: '', // Only for Faculty
    skills: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registering as ${role}:`, formData);
    // Yahan backend API call hogi
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-100 p-8">
        
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Join ColabX</h2>
          <p className="text-slate-500">Create your account to start collaborating</p>
        </div>

        {/* Role Selector Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-8 max-w-xs mx-auto">
          <button
            onClick={() => setRole('student')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'student' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
          >
            Student
          </button>
          <button
            onClick={() => setRole('faculty')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'faculty' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
          >
            Faculty
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Common Field: Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Conditional Field: ID Number */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Hash className="w-4 h-4" /> {role === 'student' ? 'Enrollment Number' : 'Employee ID'}
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder={role === 'student' ? '0123CS211XXX' : 'EMP12345'}
              onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
            />
          </div>

          {/* Conditional Field: Department / Branch */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> {role === 'student' ? 'Branch' : 'Department'}
            </label>
            <select
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, department: e.target.value})}
            >
              <option value="">Select {role === 'student' ? 'Branch' : 'Dept'}</option>
              <option value="CSE">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics</option>
              <option value="ME">Mechanical</option>
            </select>
          </div>

          {/* Conditional Field: Year (Student) or Designation (Faculty) */}
          {role === 'student' ? (
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Current Year
              </label>
              <select
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setFormData({...formData, year: e.target.value})}
              >
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          ) : (
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Designation
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Assistant Professor"
                onChange={(e) => setFormData({...formData, designation: e.target.value})}
              />
            </div>
          )}

          {/* Common Field: Email */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> {role === 'student' ? 'College Email ID' : 'Official Email ID'}
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="email@college.edu"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Student Specific: Skills (Optional for faculty) */}
          {role === 'student' && (
            <div className="space-y-1 md:col-span-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Code className="w-4 h-4" /> Skills (Comma separated)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="React, Python, Node.js"
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
              />
            </div>
          )}

          {/* Common Field: Password */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-4"
          >
            Create {role === 'student' ? 'Student' : 'Faculty'} Account
          </button>
        </form>

        <p className="text-center mt-6 text-slate-600 text-sm font-medium">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;