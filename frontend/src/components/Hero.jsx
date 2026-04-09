import React from 'react';
import { ArrowRight, Sparkles, Rocket, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#FDFCFE] overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-[#C8ACD6]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#433D8B]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#C8ACD6]/40 border border-[#433D8B]/20 text-[#17153B] px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in">
              <Sparkles size={16} className="text-[#2E236C]" />
              <span>India's #1 Student Collaboration Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-[#17153B] leading-[1.1] mb-8">
              Build Projects. <br />
              <span className="text-[#433D8B] relative inline-block">
                Find Teams.
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[#C8ACD6] -z-10 rounded-full opacity-60"></div>
              </span>
            </h1>

            <p className="text-[#17153B]/70 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join a community of innovators. Get ML-powered project recommendations and find the perfect teammates to bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              {/* Primary Action */}
              <button 
                onClick={() => navigate('/login')}
                className="group cursor-pointer bg-[#2E236C] text-white px-8 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-[#2E236C]/30 hover:bg-[#17153B] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Explore Projects 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Action */}
              <button 
                onClick={() => navigate('/register')}
                className="cursor-pointer bg-white border-2 border-[#C8ACD6] text-[#17153B] px-8 py-5 rounded-2xl font-black text-lg hover:bg-[#C8ACD6]/20 hover:border-[#433D8B] transition-all active:scale-95"
              >
                Join the Network
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-60">
                <div className="flex items-center gap-2 text-[#17153B] font-bold text-sm">
                    <Rocket size={18} /> 500+ Projects
                </div>
                <div className="flex items-center gap-2 text-[#17153B] font-bold text-sm">
                    <ShieldCheck size={18} /> Verified Profiles
                </div>
            </div>
          </div>

          {/* Right Content - Modern Illustration */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-lg aspect-square">
                {/* Main Floating Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E236C] to-[#433D8B] rounded-[3rem] rotate-3 animate-float shadow-2xl"></div>
                
                {/* Content Card Overlay */}
                <div className="absolute inset-4 bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 shadow-inner flex flex-col gap-6 -rotate-3 transition-transform hover:rotate-0 duration-500 cursor-pointer border border-white/50">
                    <div className="flex justify-between items-center">
                        <div className="w-12 h-12 bg-[#C8ACD6] rounded-xl flex items-center justify-center">
                            <Sparkles className="text-[#2E236C]" />
                        </div>
                        <div className="px-4 py-1.5 bg-[#17153B] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                            Recommended
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-6 w-3/4 bg-[#17153B]/10 rounded-lg"></div>
                        <div className="h-4 w-full bg-[#17153B]/5 rounded-lg"></div>
                        <div className="h-4 w-5/6 bg-[#17153B]/5 rounded-lg"></div>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-[#C8ACD6] flex items-center justify-center text-[10px] font-bold text-[#2E236C]`}>
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <div className="h-10 w-24 bg-[#433D8B] rounded-xl"></div>
                    </div>
                </div>

                {/* Smaller Side Cards */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#C8ACD6] rounded-3xl -z-10 shadow-xl border border-[#433D8B]/20 animate-pulse-slow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}