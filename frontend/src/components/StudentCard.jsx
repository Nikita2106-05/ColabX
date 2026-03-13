import React from 'react';
import { UserPlus, Code, GraduationCap } from 'lucide-react';

const StudentCard = ({ student, name, branch, skills, year }) => {
  // Logic: Agar data 'student' object mein aaya hai toh wo use karo, 
  // nahi toh direct props use karo (Dashboard ke liye)
  const displayName = student?.name || name || "Unknown";
  const displayBranch = student?.branch || branch || "N/A";
  const displaySkills = student?.skills || skills || [];
  const displayYear = student?.year || year || "";

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar logic with safety check */}
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-100">
            {displayName[0]} 
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
              {displayName}
            </h3>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              <GraduationCap size={14} /> {displayBranch} {displayYear && `• ${displayYear} Year`}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 flex items-center gap-1"
            >
              <Code size={12} className="text-blue-500" />
              {skill}
            </span>
          ))}
        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all active:scale-[0.98]">
          <UserPlus size={18} />
          Invite to Team
        </button>
      </div>
    </div>
  );
};

export default StudentCard;