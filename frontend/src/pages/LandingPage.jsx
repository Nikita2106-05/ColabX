import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
            {[
              { n: "01", t: "Join", d: "Create your profile with skills." },
              { n: "02", t: "Find", d: "Get matched with great projects." },
              { n: "03", t: "Build", d: "Work with your team and ship it." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[250px]">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-2xl font-black text-blue-600 mb-4 shadow-xl">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.t}</h3>
                <p className="text-slate-600 font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* CTA Section - Updated with navigation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-300 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to collaborate <br /> across campus?</h2>
              
              {/* 3. Button updated with onClick */}
              <button 
                onClick={() => navigate('/register')}
                className="cursor-pointer bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 hover:scale-105 transition-all active:scale-95"
              >
                Create Profile Now
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}