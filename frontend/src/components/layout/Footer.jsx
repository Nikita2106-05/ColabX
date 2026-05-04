import React from 'react';
import { Rocket, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Neon Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Logo & Vision Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                Colab<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">X</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Architecting the future of campus innovation. Join the elite network of student builders and visionaries.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-2">Platform</h4>
            {['Explore Projects', 'Find Teammates', 'Faculty Labs', 'Events'].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-white text-sm transition-colors w-fit relative group">
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-2">Company</h4>
            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-white text-sm transition-colors w-fit relative group">
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Community Section */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Trust</h4>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <p className="text-gray-400 text-xs italic mb-4 leading-relaxed">
                "Trusted by 2000+ students across top engineering campuses worldwide."
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800"></div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-purple-600 flex items-center justify-center text-[10px] font-bold">
                  +1k
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium tracking-wider">
            © {new Date().getFullYear()} COLABX CORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-xs font-medium">
            <span>Made with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>by the ColabX Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}