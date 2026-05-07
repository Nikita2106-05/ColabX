import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { Rocket, Loader2, Sparkles, BrainCircuit, Info, ShieldCheck, Zap, Lightbulb } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  // We now store two types of projects
  const [data, setData] = useState({ faculty_projects: [], ai_innovations: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHybridDiscovery = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.id) { navigate('/login'); return; }

        // Fetching from the new Hybrid Endpoint we discussed
        const response = await axios.get(`http://localhost:5000/api/projects/discovery/${user.id}`);
        
        setData({
          faculty_projects: response.data.faculty_projects || [],
          ai_innovations: response.data.ai_innovations || []
        });
      } catch (err) {
        console.error("Discovery Engine Error", err);
        setError("Neural link failed. Ensure ML and Backend servers are active.");
      } finally {
        setLoading(false);
      }
    };

    fetchHybridDiscovery();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10 relative h-screen overflow-y-auto custom-scrollbar">
        
        {/* Background FX */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Dynamic Header */}
        <header className="relative z-10 mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-3 text-purple-400 mb-3">
            <div className="p-2 bg-purple-500/10 rounded-lg backdrop-blur-md border border-purple-500/20">
              <BrainCircuit size={22} className="animate-pulse" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.4em]">Hybrid Discovery Engine v2.0</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Horizon</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg font-medium leading-relaxed">
            AI has analyzed your skill signature. Explore real faculty assignments and synthetic innovation concepts tailored just for you.
          </p>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
              <Loader2 className="animate-spin text-blue-400 relative z-10" size={60} />
            </div>
            <p className="font-black tracking-[0.3em] uppercase text-xs text-blue-400 animate-pulse">Mapping Skill Vectors & Generating Ideas...</p>
          </div>
        ) : error ? (
          <div className="max-w-md mx-auto mt-20 p-10 rounded-[2.5rem] border border-red-500/20 bg-red-500/5 backdrop-blur-xl text-center">
            <Info className="mx-auto text-red-500 mb-4" size={44} />
            <h3 className="text-xl font-bold mb-2">Neural Link Terminated</h3>
            <p className="text-gray-400 text-sm mb-6">{error}</p>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest transition-transform hover:scale-105">Reconnect</button>
          </div>
        ) : (
          <div className="space-y-24 relative z-10 pb-20">
            
            {/* SECTION 1: AI INNOVATION LAB */}
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                  <h2 className="text-3xl font-black flex items-center gap-3">
                    AI Innovation Lab <Sparkles className="text-purple-400" />
                  </h2>
                </div>
                <div className="hidden md:block h-[1px] flex-1 mx-10 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {data.ai_innovations.map((idea, index) => (
                  <div key={index} className="group relative bg-[#0A0A0A] border border-purple-500/20 p-8 rounded-[2.5rem] hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-2xl">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                        <Lightbulb size={24} />
                      </div>
                      <span className="text-[10px] font-black px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full uppercase tracking-tighter border border-purple-500/30">Synthetic Idea</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{idea.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {idea.skills.split(',').map((skill, i) => (
                        <span key={i} className="text-[10px] font-bold text-gray-500 uppercase border border-white/5 px-2 py-1 rounded-md">{skill.trim()}</span>
                      ))}
                    </div>

                    <button className="w-full py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-purple-500 hover:text-white group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                      <Zap size={18} fill="currentColor" />
                      Initialize Concept
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 2: FACULTY VENTURES */}
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                  <h2 className="text-3xl font-black flex items-center gap-3">
                    Faculty Ventures <ShieldCheck className="text-blue-400" />
                  </h2>
                </div>
                <div className="hidden md:block h-[1px] flex-1 mx-10 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {data.faculty_projects.map((project) => (
                  <ProjectCard 
                    key={project._id} 
                    title={project.title}
                    skills={project.skillsRequired}
                    difficulty={project.subject} 
                    faculty={project.faculty?.name || "Dept. Lead"}
                    isFaculty={true} // Add this prop to change card style slightly
                  />
                ))}
              </div>
            </section>

          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;