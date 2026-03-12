import React from 'react';
import { BrainCircuit, Users, BookOpen, Trophy } from 'lucide-react';

const cardData = [
  { icon: <BrainCircuit />, title: "ML Matching", desc: "Get recommendations based on your unique skill set.", color: "bg-blue-600" },
  { icon: <Users />, title: "Find Teammates", desc: "Filter students by skills and connect instantly.", color: "bg-indigo-600" },
  { icon: <BookOpen />, title: "Faculty Projects", desc: "Official academic projects posted by your teachers.", color: "bg-emerald-600" },
  { icon: <Trophy />, title: "Hackathons", desc: "Stay updated with campus and national events.", color: "bg-amber-600" }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Build with tools designed specifically for college collaboration.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((f, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all group">
              <div className={`${f.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                {React.cloneElement(f.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}