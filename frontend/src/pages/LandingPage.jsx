import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/layout/Footer';
import { ChevronRight, Sparkles, Zap, Target } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCFE]"> {/* Very light lilac/white bg */}
      <Navbar />
      
      {/* Hero Section Wrapper - Adding a subtle gradient background */}
      <div className="bg-gradient-to-b from-[#C8ACD6]/20 to-transparent">
        <Hero />
      </div>
      
      {/* How It Works Section - Reimagined with new colors */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8ACD6]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#17153B] mb-4">
              How <span className="text-[#433D8B]">ColabX</span> Works
            </h2>
            <p className="text-[#433D8B] font-medium max-w-xl mx-auto">
              Your journey from a solo learner to a project leader starts here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                n: "01", t: "Join", d: "Create your profile with your unique skill set.",
                icon: <Zap className="text-[#2E236C]" size={24} />,
                color: "bg-[#C8ACD6]"
              },
              { 
                n: "02", t: "Find", d: "Our ML engine matches you with the perfect projects.",
                icon: <Target className="text-[#2E236C]" size={24} />,
                color: "bg-[#C8ACD6]" 
              },
              { 
                n: "03", t: "Build", d: "Collaborate with peers and build something amazing.",
                icon: <Sparkles className="text-[#2E236C]" size={24} />,
                color: "bg-[#C8ACD6]"
              }
            ].map((step, idx) => (
              <div key={idx} className="group relative p-8 rounded-[2rem] bg-white border border-[#C8ACD6]/30 hover:border-[#433D8B]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#433D8B]/10">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-[#17153B] mb-6 transform group-hover:rotate-12 transition-transform`}>
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-5xl font-black text-[#C8ACD6]/20 group-hover:text-[#C8ACD6]/40 transition-colors">
                  {step.n}
                </div>
                <h3 className="text-2xl font-bold text-[#17153B] mb-3">{step.t}</h3>
                <p className="text-[#433D8B]/80 font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Wrapper */}
      <div className="bg-[#FDFCFE]">
        <Features />
      </div>

      {/* CTA Section - Major Color Overhaul */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#17153B] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-[#17153B]/40">
            {/* Background Gradients */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2E236C] rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#433D8B] rounded-full blur-[100px] opacity-50"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white">
                Ready to collaborate <br /> 
                <span className="text-[#C8ACD6]">across campus?</span>
              </h2>
              
              <button 
                onClick={() => navigate('/register')}
                className="group cursor-pointer bg-[#C8ACD6] text-[#17153B] px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all active:scale-95 flex items-center gap-3 mx-auto shadow-xl shadow-black/20"
              >
                Create Profile Now
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="mt-8 text-[#C8ACD6]/60 font-medium">
                Join 500+ students already building the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}