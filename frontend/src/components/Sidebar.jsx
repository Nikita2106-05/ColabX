import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Rocket, Users, MessageSquare, 
  Calendar, CheckCircle2, LogOut, Terminal, 
  PlusCircle, BookOpen, Settings, Sparkles
} from 'lucide-react';
import gsap from 'gsap';

const Sidebar = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  
  // 1. User Data Fetching
  const userJson = localStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : { name: "Guest", role: "student" };

  // 2. Entrance Animation
  useEffect(() => {
    gsap.fromTo(sidebarRef.current, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

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
    <aside 
      ref={sidebarRef}
      className="w-72 h-screen bg-[#050505]/80 backdrop-blur-2xl border-r border-white/10 fixed left-0 top-0 flex flex-col z-[100] shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
    >
      {/* Brand Logo - Futuristic Style */}
      <div className="p-8 flex items-center gap-3">
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl text-white">
            <Terminal size={22} strokeWidth={3} />
          </div>
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">
          Colab<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">X</span>
        </span>
      </div>

      {/* User Profile - Glassmorphic Card */}
      <div className="px-6 mb-8">
        <div className="relative overflow-hidden bg-white/[0.03] p-5 rounded-[2rem] border border-white/10 group">
          {/* Subtle Glow background */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
          
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">System User</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold border-2 border-white/10">
                {user.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-white truncate text-sm">{user.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                    {user.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">Main Navigation</p>
        
        {activeLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              group relative flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition-all duration-300
              ${isActive 
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'}
            `}
          >
            {/* Active Indicator Line */}
            {({ isActive }) => (
              <>
                <div className={`absolute left-0 w-1 h-6 rounded-r-full bg-gradient-to-b from-purple-500 to-blue-500 transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                
                <span className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-purple-400' : 'group-hover:text-purple-400'}`}>
                  {item.icon}
                </span>
                <span className="text-sm tracking-wide">{item.label}</span>
                
                {isActive && (
                  <Sparkles size={12} className="ml-auto text-purple-400 animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout Section */}
      <div className="p-6 mt-auto border-t border-white/5 space-y-2 bg-[#080808]/50">
        <button className="w-full flex items-center gap-4 px-5 py-3 text-gray-500 font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all group">
          <Settings size={20} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-sm">Settings</span>
        </button>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-3 text-red-500/80 font-bold hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wide">Logout Session</span>
        </button>
      </div>

      {/* Styling for custom scrollbar in sidebar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;