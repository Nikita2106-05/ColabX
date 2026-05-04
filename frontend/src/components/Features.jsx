import React from 'react';
import { BrainCircuit, Users, BookOpen, Trophy } from 'lucide-react';

const cardData = [
  { 
    icon: <BrainCircuit />, 
    title: "ML Matching", 
    desc: "Advanced neural networks match your unique skill set with high-impact projects.", 
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  { 
    icon: <Users />, 
    title: "Dynamic Teams", 
    desc: "Real-time collaboration tools to filter and connect with top-tier campus talent.", 
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  { 
    icon: <BookOpen />, 
    title: "Faculty Lab", 
    desc: "Direct access to official academic research and high-stakes projects from mentors.", 
    color: "from-emerald-500 to-teal-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  { 
    icon: <Trophy />, 
    title: "Elite Events", 
    desc: "Curated list of national hackathons and competitions to showcase your builds.", 
    color: "from-amber-500 to-orange-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Toolkit</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Engineered for the next generation of builders. Everything you need to scale your ideas from dorm rooms to the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((f, i) => (
            <div 
              key={i} 
              className={`reveal group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-xl flex flex-col items-start ${f.glow}`}
            >
              {/* Icon Container with Gradient Background */}
              <div className={`bg-gradient-to-br ${f.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {React.cloneElement(f.icon, { size: 30, strokeWidth: 1.5 })}
              </div>

              {/* Glowing Dot on top-right */}
              <div className={`absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">
                {f.desc}
              </p>

              {/* Hover Bottom Decoration */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r ${f.color} group-hover:w-1/2 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}