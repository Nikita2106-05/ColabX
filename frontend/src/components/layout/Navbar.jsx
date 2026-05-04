import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`relative flex justify-between items-center h-20 px-8 rounded-[2rem] transition-all duration-500 border ${
          isScrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-transparent'
        }`}>
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-2.5 rounded-xl shadow-lg transition-transform group-hover:rotate-[15deg]">
                <Rocket className="text-white w-6 h-6" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter">
              Colab<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">X</span>
            </span>
          </Link>

          {/* Desktop Menu - Glass Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Features', 'Projects', 'Community'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white font-medium text-sm transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-6">
            <Link 
              to="/login" 
              className="hidden sm:block text-gray-400 font-semibold text-sm hover:text-white transition-colors"
            >
              Log In
            </Link>

            {/* Glowing CTA Button */}
            <Link 
              to="/register" 
              className="relative group px-7 py-3 rounded-xl font-bold text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative text-white">Get Started</span>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}