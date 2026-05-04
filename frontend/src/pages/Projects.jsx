import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { Rocket, Loader2, Sparkles, Filter, Search } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects/all');
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
      {/* Sidebar - Assuming it will be updated to dark theme soon */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-6 md:p-10 relative h-screen overflow-y-auto custom-scrollbar">
        
        {/* Futuristic Background Blur Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Header Section */}
        <div className="relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="reveal">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Sparkles size={18} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Discovery Engine</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter flex items-center gap-4">
              Available 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Projects
              </span>
            </h1>
            <p className="text-gray-500 mt-3 max-w-lg font-medium">
              Real-time feed of academic ventures and high-stakes collaborations.
            </p>
          </div>

          {/* Quick Stats/Actions */}
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{projects.length} Active Feeds</span>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-500">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
              <Loader2 className="animate-spin text-purple-500 relative z-10" size={48} />
            </div>
            <p className="font-bold tracking-widest uppercase text-sm animate-pulse">Fetching Encrypted Data...</p>
          </div>
        ) : projects.length > 0 ? (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10 pb-20">
            {projects.map((project) => (
              <ProjectCard 
                key={project._id} 
                title={project.title}
                skills={project.skillsRequired}
                difficulty={project.subject} 
                faculty={project.faculty?.name || "Anonymous Lab"}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="relative group max-w-2xl mx-auto mt-20 p-16 rounded-[3rem] border border-dashed border-white/10 bg-white/[0.02] backdrop-blur-md text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Rocket className="mx-auto text-gray-700 mb-6 group-hover:text-purple-500 transition-colors" size={60} />
            <h3 className="text-2xl font-bold text-white mb-2">No Active Ventures Found</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              The neural network is currently clear. Contact your faculty leads to initialize new project nodes.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;