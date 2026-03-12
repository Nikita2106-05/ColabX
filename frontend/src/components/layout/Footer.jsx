import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-black mb-4">Colab<span className="text-blue-500">X</span></h3>
            <p className="font-medium">Building the next generation of student developers.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold mb-2">Quick Links</h4>
            <a href="#" className="hover:text-blue-400">About Us</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Colleges</h4>
            <p className="text-sm italic">Trusted by students across top engineering campuses.</p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          © {new Date().getFullYear()} ColabX. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}