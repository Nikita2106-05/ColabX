import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/layout/Footer';
import { UserPlus, Sparkles, Rocket } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      
      <main>
        <Hero />

        {/* How It Works Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <Step 
                icon={<UserPlus className="text-blue-600" />} 
                number="01" 
                title="Create Profile" 
                desc="Add your skills, tech stack, and academic interests." 
              />
              <Step 
                icon={<Sparkles className="text-purple-600" />} 
                number="02" 
                title="Get Recommendations" 
                desc="Our ML model suggests the best projects matching your skill set." 
              />
              <Step 
                icon={<Rocket className="text-emerald-600" />} 
                number="03" 
                title="Build and Ship" 
                desc="Find teammates, message them, and start building your project." 
              />
            </div>
          </div>
        </section>

        <Features />

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Start collaborating with students across campus</h2>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
                  Create Your Profile
                </button>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-20 -mb-20 blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Helper Sub-component for Steps
const Step = ({ icon, number, title, desc }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 relative">
      {icon}
      <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
        {number}
      </span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
);

export default LandingPage;