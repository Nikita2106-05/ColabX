import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, skills, difficulty }) => {
  const diffColor = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${diffColor[difficulty]}`}>
          {difficulty}
        </span>
        <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-600 cursor-pointer" />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;