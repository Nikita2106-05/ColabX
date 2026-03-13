import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Rocket, 
  Users, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  LogOut, 
  Terminal 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Rocket size={22} />, label: 'Recommended', path: '/recommended' },
    // Yahan maine path change kiya hai: /find-teammates -> /teammates
    { icon: <Users size={22} />, label: 'Find Teammates', path: '/teammates' }, 
    { icon: <MessageSquare size={22} />, label: 'Project Posts', path: '/posts' },
    { icon: <Calendar size={22} />, label: 'Events', path: '/events' },
    { icon: <CheckCircle2 size={22} />, label: 'Tracker', path: '/tracker' },
    { icon: <Rocket size={22} />, label: 'Recommended', path: '/recommended' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 fixed left-0 top-0 flex flex-col z-50 shadow-sm">
      
      {/* Brand Logo Section */}
      <div className="p-6 flex items-center gap-3 text-blue-600 border-b border-slate-50">
        <div className="bg-blue-600 p-2 rounded-lg">
           <Terminal size={24} className="text-white" strokeWidth={3} />
        </div>
        <span className="text-2xl font-black tracking-tight text-slate-900 italic">
          Colab<span className="text-blue-600">X</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-200
              ${isActive 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}
            `}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Quick Info / Logout */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border border-blue-200">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold text-slate-900 truncate">John Doe</p>
            <p className="text-[10px] text-slate-500 truncate">Student | CSE</p>
          </div>
        </div>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-bold text-sm hover:bg-red-50 rounded-xl transition-all duration-200 group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;