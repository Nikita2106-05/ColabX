import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <span className="text-2xl font-black text-slate-900">Colab<span className="text-blue-600">X</span></span>
            <p className="mt-4 text-slate-500 max-w-xs">Building the future of student collaboration, one project at a time.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600">Find Teams</a></li>
              <li><a href="#" className="hover:text-blue-600">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Support</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} ColabX. Built for students, by students.
        </div>
      </div>
    </footer>
  );
}