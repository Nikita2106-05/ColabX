import React from 'react';
import { BrainCircuit, Users, BookOpen, Trophy } from 'lucide-react';

const features = [
  {
    title: "ML Project Recommendation",
    desc: "Our AI analyzes your skills to suggest projects that help you grow.",
    icon: <BrainCircuit className="w-10 h-10 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Find Teammates",
    desc: "Search students by specific tech stacks and collaborate on shared goals.",
    icon: <Users className="w-10 h-10 text-purple-600" />,
    color: "bg-purple-50"
  },
  {
    title: "Faculty Subject Projects",
    desc: "Work on official academic projects posted directly by your faculty members.",
    icon: <BookOpen className="w-10 h-10 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Events and Hackathons",
    desc: "Stay updated with campus hackathons and tech events all in one place.",
    icon: <Trophy className="w-10 h-10 text-amber-600" />,
    color: "bg-amber-50"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
          <p className="text-slate-600">Powerful features built specifically for the modern college ecosystem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;