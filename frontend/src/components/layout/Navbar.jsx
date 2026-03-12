import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Colab<span className="text-blue-600">X</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#events" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Events</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-slate-700 font-medium hover:text-blue-600 transition-colors">
              Login
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;