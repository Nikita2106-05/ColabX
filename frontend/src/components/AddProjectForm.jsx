import React, { useState } from 'react';
import axios from 'axios';
import { Plus, Trash2, BookOpen, Code, ListChecks, Send, Loader2, Sparkles, Rocket, Target } from 'lucide-react';

const AddProjectForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        alert("Session expired. Please login again.");
        return;
      }
      const user = JSON.parse(storedUser);

      const response = await axios.post('http://localhost:5000/api/projects/create', {
        title: projectData.title,
        subject: projectData.subject,
        skills: projectData.skills,
        steps: steps,
        facultyId: user.id || user._id 
      });

      if (response.status === 201) {
        setProjectData({ title: '', subject: '', skills: '' });
        setSteps(['']);
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("Frontend Error Detail:", err.response?.data);
      alert(err.response?.data?.message || "Failed to post project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Decorative Background Glows */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg shadow-purple-500/20">
            <Rocket className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Launch New Venture</h2>
            <p className="text-gray-500 text-sm">Deploy a project to the collaboration hub</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Project Title */}
          <div className="group">
            <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-purple-400">
              <Target size={14} /> Project Title
            </label>
            <input 
              type="text"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none transition-all focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 placeholder:text-gray-600"
              placeholder="e.g. Neural Nexus AI"
              value={projectData.title}
              onChange={(e) => setProjectData({...projectData, title: e.target.value})}
            />
          </div>

          {/* Subject */}
          <div className="group">
            <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-blue-400">
              <BookOpen size={14} /> Domain / Subject
            </label>
            <input 
              type="text"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none transition-all focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 placeholder:text-gray-600"
              placeholder="e.g. Deep Learning"
              value={projectData.subject}
              onChange={(e) => setProjectData({...projectData, subject: e.target.value})}
            />
          </div>

          {/* Skills */}
          <div className="md:col-span-2 group">
            <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-cyan-400">
              <Code size={14} /> Tech Stack (Comma separated)
            </label>
            <input 
              type="text"
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none transition-all focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-gray-600"
              placeholder="React, Node.js, TensorFlow, AWS"
              value={projectData.skills}
              onChange={(e) => setProjectData({...projectData, skills: e.target.value})}
            />
          </div>
        </div>

        {/* Guidance Steps Section */}
        <div className="mb-10">
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            <ListChecks size={14} /> Implementation Roadmap
          </label>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="flex-1 relative">
                    <input 
                      type="text"
                      required
                      className="w-full px-5 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white outline-none focus:border-white/30 transition-all placeholder:text-gray-700"
                      placeholder={`Milestone ${index + 1}`}
                      value={step}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                    />
                </div>
                {steps.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => removeStep(index)} 
                    className="p-3 text-rose-500/50 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all"
                  >
                    <Trash2 size={20}/>
                  </button>
                )}
              </div>
            ))}
          </div>
          <button 
            type="button" 
            onClick={addStep} 
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-blue-400 hover:bg-blue-500/10 transition-all group"
          >
            <Plus size={16} className="group-hover:rotate-90 transition-transform" /> Add Milestone
          </button>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="group relative w-full overflow-hidden py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative flex items-center justify-center gap-3 text-white font-black uppercase tracking-widest text-sm">
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Sparkles size={20} />
                Deploy Project
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </div>
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;