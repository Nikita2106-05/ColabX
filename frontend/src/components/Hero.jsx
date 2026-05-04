import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function Hero() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    // Entrance animations for text
    const tl = gsap.timeline();
    tl.fromTo(".hero-text", 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
    );

    // Floating animation for the 3D Orb
    gsap.to(orbRef.current, {
      y: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[90vh] bg-[#050505] overflow-hidden flex items-center">
      
      {/* Background Neon Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', size: '30px 30px', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="hero-text inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-purple-400 px-4 py-2 rounded-full text-xs font-bold mb-8 tracking-[0.2em] uppercase">
              <Sparkles size={14} />
              <span>Next-Gen Collaboration</span>
            </div>
            
            <h1 className="hero-text text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter">
              Connect. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Collaborate.
              </span> <br />
              Create.
            </h1>

            <p className="hero-text text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience the future of campus innovation. Our ML-engine finds your perfect project matches while you focus on building.
            </p>

            <div className="hero-text flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/login')}
                className="group relative px-8 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-5 rounded-2xl font-bold text-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95"
              >
                Join the Network
              </button>
            </div>

            {/* Stats */}
            <div className="hero-text mt-16 flex items-center justify-center lg:justify-start gap-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">500+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Projects</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">2k+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">Students</span>
                </div>
            </div>
          </div>

          {/* Right Content - Floating Energy Core */}
          <div className="flex justify-center items-center relative py-20 lg:py-0">
            <div ref={orbRef} className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                
                {/* Outer Rotating Ring */}
                <div className="absolute inset-0 border-[1px] border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-[1px] border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* The Core Energy Object */}
                <div className="absolute inset-20 bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
                
                {/* Glass Sphere */}
                <div className="absolute inset-24 bg-white/5 backdrop-blur-2xl rounded-full border border-white/20 shadow-[0_0_100px_rgba(168,85,247,0.4)] overflow-hidden">
                    {/* Inner Plasma Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
                    <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
                </div>

                {/* Floating Tech Labels */}
                <div className="absolute top-0 right-0 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl animate-bounce" style={{animationDuration: '4s'}}>
                   <Zap className="text-yellow-400" size={20} />
                </div>
                <div className="absolute bottom-10 left-0 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl animate-bounce" style={{animationDuration: '5s'}}>
                   <Rocket className="text-blue-400" size={20} />
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}