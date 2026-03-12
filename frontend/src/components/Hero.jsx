import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>India's #1 Student Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Build Projects. <br />
              <span className="text-blue-600 underline decoration-blue-200">Find Teams.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A smart collaboration platform for students to discover projects, build incredible teams, and win hackathons together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore Projects <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Join Now
              </button>
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-full h-[400px] bg-blue-600/10 rounded-[3rem] animate-float relative flex items-center justify-center border border-blue-100 shadow-inner">
               {/* This is a placeholder for your image/illustration */}
               <div className="absolute inset-10 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
                  <div className="h-6 w-1/2 bg-blue-100 rounded"></div>
                  <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="flex gap-2 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                    <div className="w-10 h-10 rounded-full bg-indigo-400"></div>
                    <div className="w-10 h-10 rounded-full bg-emerald-400"></div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}