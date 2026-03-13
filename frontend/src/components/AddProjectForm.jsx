import React, { useState } from 'react';
import { Plus, Trash2, BookOpen, Code, ListChecks, Send } from 'lucide-react';

const AddProjectForm = () => {
  const [steps, setSteps] = useState(['']);
  const [projectData, setProjectData] = useState({
    title: '',
    subject: '',
    skills: '',
  });

  const addStep = () => setSteps([...steps, '']);
  const removeStep = (index) => setSteps(steps.filter((_, i) => i !== index));
  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...projectData, steps });
    alert("Project Posted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <BookOpen size={18} className="text-indigo-600" /> Project Title
          </label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="e.g. Smart Traffic Management"
            onChange={(e) => setProjectData({...projectData, title: e.target.value})}
          />
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <ListChecks size={18} className="text-indigo-600" /> Subject / Domain
          </label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="e.g. Operating Systems"
            onChange={(e) => setProjectData({...projectData, subject: e.target.value})}
          />
        </div>

        {/* Skills */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Code size={18} className="text-indigo-600" /> Required Skills (Comma separated)
          </label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="React, Python, Node.js"
            onChange={(e) => setProjectData({...projectData, skills: e.target.value})}
          />
        </div>
      </div>

      {/* Dynamic Steps */}
      <div className="space-y-4 mb-8">
        <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
          <span>Project Guidance Steps</span>
          <button 
            type="button" 
            onClick={addStep}
            className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <Plus size={14} /> Add Step
          </button>
        </label>
        
        {steps.map((step, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-none w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <input 
              type="text"
              value={step}
              required
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder={`Step ${index + 1}: Describe the task...`}
              onChange={(e) => handleStepChange(index, e.target.value)}
            />
            {steps.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeStep(index)}
                className="text-red-400 hover:text-red-600 p-2"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
        <Send size={20} />
        Post Project to Dashboard
      </button>
    </form>
  );
};

export default AddProjectForm;