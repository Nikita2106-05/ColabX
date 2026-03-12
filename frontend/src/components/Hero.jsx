import React from 'react';
import { ArrowRight, Code, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Build Projects. <br />
          <span className="text-blue-600">Find Teams.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
          A smart collaboration platform for students to discover industry-grade projects, 
          connect with skilled teammates, and bring ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all">
            Explore Projects <Code size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
            Join Now <Users size={20} />
          </button>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-64 bg-blue-100/50 blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default Hero;