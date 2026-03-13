import React from 'react';
import { ExternalLink, User, Zap, ChevronRight, Book } from 'lucide-react';

// Humne yahan 'project' object aur baaki props dono ko destructure kiya hai
const ProjectCard = ({ project, title, skills, difficulty, faculty, matchScore }) => {
  
  // Logic: Agar 'project' object hai toh usse data lo, nahi toh direct props se lo
  const displayTitle = project?.title || title || "Untitled Project";
  const displaySkills = project?.skills || skills || [];
  const displayDifficulty = project?.difficulty || difficulty || "Medium";
  const displayFaculty = project?.faculty || faculty || "Faculty Guide";
  const displayMatch = project?.matchScore || matchScore || null;

  const diffStyles = {
    Easy: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-100 text-amber-700 border-amber-200",
    Hard: "bg-rose-100 text-rose-700 border-rose-200"
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${diffStyles[displayDifficulty] || diffStyles.Medium}`}>
          {displayDifficulty}
        </span>
        
        {displayMatch && (
          <div className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
            <Zap size={14} fill="currentColor" />
            <span className="text-xs font-bold">{displayMatch}% Match</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {displayTitle}
      </h3>
      
      <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm font-medium">
        <User size={16} className="text-slate-400" />
        <span>{displayFaculty}</span>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 hover:shadow-blue-200">
        Start Project
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default ProjectCard;