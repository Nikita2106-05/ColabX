import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              Colab<span className="text-blue-600">X</span>
            </span>
          </div>

          {/* Menu - Center (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Home</a>
            <a href="#features" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Features</a>
            <a href="#events" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">Events</a>
          </div>

          {/* Auth - Right */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-slate-600 font-bold hover:text-blue-600 px-4">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}