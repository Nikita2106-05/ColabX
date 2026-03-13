import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { Rocket, Sparkles, Zap, Search, Bell } from 'lucide-react';
const dummyProjects = [
  {
    id: 1,
    title: "AI-Powered Mental Health Tracker",
    skills: ["Python", "React", "NLP", "TensorFlow"],
    difficulty: "Hard",
    faculty: "Dr. Arvinder Singh",
    matchScore: 98
  },
  {
    id: 2,
    title: "Blockchain-based Voting System",
    skills: ["Solidity", "React", "Node.js"],
    difficulty: "Medium",
    faculty: "Prof. Megha Sahni",
    matchScore: 85
  },
  {
    id: 3,
    title: "Smart Campus Navigation App",
    skills: ["React Native", "Firebase", "Maps API"],
    difficulty: "Easy",
    faculty: "Mr. Rajesh Kumar",
    matchScore: 72
  },
  {
    id: 4,
    title: "Sentiment Analysis of Social Media",
    skills: ["Python", "NLTK", "Flask"],
    difficulty: "Medium",
    faculty: "Dr. Sunita Sharma",
    matchScore: 91
  },
  {
    id: 5,
    title: "IoT Based Home Automation",
    skills: ["Arduino", "C++", "MQTT"],
    difficulty: "Hard",
    faculty: "Prof. Amit Verma",
    matchScore: 65
  },
  {
    id: 6,
    title: "E-Commerce Personalization Engine",
    skills: ["Machine Learning", "Node.js", "MongoDB"],
    difficulty: "Medium",
    faculty: "Ms. Pooja Hegde",
    matchScore: 88
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = dummyProjects.filter(p => 
    filter === 'All' ? true : p.difficulty === filter
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <Rocket className="text-blue-600" size={32} />
              Project Recommendations
            </h1>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              ML-generated picks based on your skill set: <span className="text-blue-600 font-bold">React, Python, Node.js</span>
            </p>
          </div>

          {/* Difficulty Filter */}
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm self-start">
            {['All', 'Easy', 'Medium', 'Hard'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  filter === lvl ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar Placeholder */}
        <div className="relative mb-8 max-w-xl">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by technology or faculty..." 
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Tip */}
        <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl text-white">
            <Zap size={24} />
          </div>
          <div>
            <h4 className="font-bold text-blue-900">How does this work?</h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              Our AI engine analyzes your profile skills and compares them with faculty-posted requirements. 
              The higher the match score, the more suitable the project is for your current expertise.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;