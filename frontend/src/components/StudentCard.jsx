import React from 'react';
import { UserPlus } from 'lucide-react';

const StudentCard = ({ name, branch, skills }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
        {name[0]}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{name}</h4>
        <p className="text-xs text-slate-500">{branch}</p>
        <p className="text-xs font-medium text-blue-600 mt-1">{skills.join(' • ')}</p>
      </div>
    </div>
    <button className="p-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
      <UserPlus size={18} />
    </button>
  </div>
);

export default StudentCard;