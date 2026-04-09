import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Rocket, Users, MessageSquare, 
  Calendar, CheckCircle2, LogOut, Terminal, 
  PlusCircle, BookOpen, Settings
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  
  // 1. LocalStorage se User ka data nikalna
  const userJson = localStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : { name: "Guest", role: "student" };

  // 2. Logout Function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // 3. Role ke hisaab se Menu Items decide karna
  const studentLinks = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Rocket size={20} />, label: 'Recommended', path: '/recommended' },
    { icon: <Users size={20} />, label: 'Find Teammates', path: '/teammates' },
    { icon: <Calendar size={20} />, label: 'Events', path: '/events' },
    { icon: <CheckCircle2 size={20} />, label: 'My Progress', path: '/progress' },
  ];

  const facultyLinks = [
    { icon: <LayoutDashboard size={20} />, label: 'Faculty Panel', path: '/faculty-dashboard' },
    { icon: <PlusCircle size={20} />, label: 'Post Project', path: '/faculty-dashboard' },
    { icon: <BookOpen size={20} />, label: 'Manage Projects', path: '/manage-projects' },
    { icon: <Users size={20} />, label: 'Student List', path: '/students' },
  ];

  const activeLinks = user.role === 'faculty' ? facultyLinks : studentLinks;

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 fixed left-0 top-0 flex flex-col z-50">
      {/* Brand Logo */}
      <div className="p-6 flex items-center gap-3 text-blue-600">
        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
          <Terminal size={24} strokeWidth={3} />
        </div>
        <span className="text-2xl font-black tracking-tighter text-slate-900 italic">ColabX</span>
      </div>

      {/* User Profile Summary */}
      <div className="px-6 py-4 mb-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Logged in as</p>
          <p className="font-bold text-slate-900 truncate">{user.name}</p>
          <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase mt-1 inline-block">
            {user.role}
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {activeLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all
              ${isActive 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
            `}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Settings & Logout */}
      <div className="p-4 border-t border-slate-100 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-all">
          <Settings size={20} />
          Settings
        </button>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;