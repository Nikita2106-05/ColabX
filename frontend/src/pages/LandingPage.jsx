import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/layout/Footer';
import { ChevronRight, Sparkles, Zap, Target, Users, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.utils.toArray('.reveal').forEach((elem) => {
        gsap.fromTo(elem, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, y: 0, duration: 1, 
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Floating Energy Object */}
      <div className="relative">
        <Hero />
      </div>
      
      {/* How It Works Section - High Tech Look */}
      <section className="py-32 relative">
        {/* Neon Blur Orbs Background */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Evolution</span> of Learning
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light tracking-wide">
              Connect with the brightest minds across campus and turn your ideas into reality through seamless collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { 
                n: "01", t: "Find Synergy", d: "Discover teammates whose skills perfectly complement yours.",
                icon: <Target className="text-purple-400" size={32} />,
                glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              },
              { 
                n: "02", t: "Launch Projects", d: "Start your venture with professional tools and a solid team.",
                icon: <Rocket className="text-blue-400" size={32} />,
                glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" 
              },
              { 
                n: "03", t: "Scale Impact", d: "Go beyond the classroom and build something that matters.",
                icon: <Sparkles className="text-cyan-400" size={32} />,
                glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              }
            ].map((step, idx) => (
              <div key={idx} className={`reveal group relative p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm ${step.glow}`}>
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="absolute top-10 right-10 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {step.n}
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{step.t}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="reveal">
        <Features />
      </div>

      {/* CTA Section - Ultra Modern */}
      <section className="py-32 px-4 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[4rem] p-12 md:p-24 text-center overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.9]">
                Ready to <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-pulse">Collaborate?</span>
              </h2>
              
              <button 
                onClick={() => navigate('/register')}
                className="group relative px-12 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3 mx-auto overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <div className="mt-12 flex items-center justify-center gap-8 text-white/40">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"></div>)}
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Join 500+ Innovators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}