import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-[#C8ACD6]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-2 group transition-all">
            <div className="bg-[#2E236C] p-2.5 rounded-xl shadow-lg shadow-[#2E236C]/20 group-hover:rotate-12 transition-transform">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-[#17153B] tracking-tight">
              Colab<span className="text-[#433D8B]">X</span>
            </span>
          </Link>

          {/* Menu - Center (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-[#17153B] hover:text-[#433D8B] font-bold text-sm transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8ACD6] transition-all group-hover:w-full"></span>
            </Link>
            <a href="#features" className="text-[#17153B] hover:text-[#433D8B] font-bold text-sm transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8ACD6] transition-all group-hover:w-full"></span>
            </a>
            <a href="#events" className="text-[#17153B] hover:text-[#433D8B] font-bold text-sm transition-colors relative group">
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8ACD6] transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Auth - Right */}
          <div className="flex items-center gap-6">
            {/* Login Link */}
            <Link 
              to="/login" 
              className="hidden sm:block text-[#17153B] font-black text-sm hover:text-[#2E236C] transition-colors"
            >
              Log In
            </Link>

            {/* Register Link */}
            <Link 
              to="/register" 
              className="bg-[#2E236C] text-white px-7 py-3 rounded-2xl font-black text-sm shadow-xl shadow-[#2E236C]/20 hover:bg-[#17153B] hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}