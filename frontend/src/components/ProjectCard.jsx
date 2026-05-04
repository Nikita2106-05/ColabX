import React from 'react';
import { ExternalLink, User, Zap, ChevronRight, Book, Sparkles } from 'lucide-react';

const ProjectCard = ({ project, title, skills, difficulty, faculty, matchScore }) => {
  
  // Data Extraction Logic
  const displayTitle = project?.title || title || "Untitled Project";
  const displaySkills = project?.skills || skills || [];
  const displayDifficulty = project?.difficulty || difficulty || "Medium";
  const displayFaculty = project?.faculty || faculty || "Faculty Guide";
  const displayMatch = project?.matchScore || matchScore || null;

  // Futuristic Neon Difficulty Styles
  const diffStyles = {
    Easy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    Hard: "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
  };

  return (
    <div className="group relative bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 transition-all duration-500 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] hover:-translate-y-2 overflow-hidden">
      
      {/* Top Border Glow Line (Visible on Hover) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex justify-between items-center mb-6">
        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold border uppercase tracking-widest ${diffStyles[displayDifficulty] || diffStyles.Medium}`}>
          {displayDifficulty}
        </span>
        
        {displayMatch && (
          <div className="flex items-center gap-1.5 text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20 animate-pulse">
            <Zap size={14} fill="currentColor" />
            <span className="text-xs font-black tracking-tighter">{displayMatch}% Match</span>
          </div>
        )}
      </div>

      {/* Project Title with Gradient Hover Effect */}
      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
        {displayTitle}
      </h3>
      
      {/* Faculty Info */}
      <div className="flex items-center gap-2 text-gray-500 mb-6 text-sm font-medium">
        <div className="p-1.5 bg-white/5 rounded-lg border border-white/5">
          <User size={14} className="text-purple-400" />
        </div>
        <span className="group-hover:text-gray-300 transition-colors">{displayFaculty}</span>
      </div>

      {/* Tags / Skills with Glass Styling */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white/5 text-gray-400 text-[11px] font-bold rounded-lg border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-300"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>

      {/* High-Tech Slide-Up Button */}
      <button className="relative w-full group/btn overflow-hidden py-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-transparent">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
        
        <div className="relative flex items-center justify-center gap-2 text-white font-bold text-sm">
          <Sparkles size={16} className="text-purple-400 group-hover/btn:text-white transition-colors" />
          <span>Launch Project</span>
          <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* Subtle Background Glow Orb */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default ProjectCard;