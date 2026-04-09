import React, { useState } from 'react';
import axios from 'axios';
import { Plus, Trash2, BookOpen, Code, ListChecks, Send, Loader2 } from 'lucide-react';

const AddProjectForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(['']);
  
  // 1. Ensure projectData state is defined correctly
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
      // 2. LocalStorage se user check karein
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        alert("Session expired. Please login again.");
        return;
      }
      const user = JSON.parse(storedUser);

      // 3. Backend API call
      // Dhyaan dein: backend 'skillsRequired' expect kar raha ho sakta hai ya 'skills'
      const response = await axios.post('http://localhost:5000/api/projects/create', {
        title: projectData.title,
        subject: projectData.subject,
        skills: projectData.skills, // Ye backend mein split hoga
        steps: steps,
        facultyId: user.id || user._id // Check karein aapki ID 'id' hai ya '_id'
      });

      if (response.status === 201) {
        alert("✅ Project Posted Successfully!");
        setProjectData({ title: '', subject: '', skills: '' }); // Form clear karein
        setSteps(['']);
        if (onSuccess) onSuccess(); // Dashboard refresh karein
      }
    } catch (err) {
      console.error("Frontend Error Detail:", err.response?.data);
      alert(err.response?.data?.message || "Failed to post project. Check Console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Project Title</label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. AI Chatbot"
            value={projectData.title}
            onChange={(e) => setProjectData({...projectData, title: e.target.value})}
          />
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700 block mb-2">Subject</label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Machine Learning"
            value={projectData.subject}
            onChange={(e) => setProjectData({...projectData, subject: e.target.value})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-bold text-slate-700 block mb-2">Skills (Comma separated)</label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Python, React, NLP"
            value={projectData.skills}
            onChange={(e) => setProjectData({...projectData, skills: e.target.value})}
          />
        </div>
      </div>

      {/* Steps Input Section */}
      <div className="space-y-4 mb-8">
        <label className="text-sm font-bold text-slate-700 block">Guidance Steps</label>
        {steps.map((step, index) => (
          <div key={index} className="flex gap-2">
            <input 
              type="text"
              required
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              placeholder={`Step ${index + 1}`}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
            />
            {steps.length > 1 && (
              <button type="button" onClick={() => removeStep(index)} className="text-red-500"><Trash2 size={20}/></button>
            )}
          </div>
        ))}
        <button type="button" onClick={addStep} className="text-blue-600 text-sm font-bold flex items-center gap-1"><Plus size={16}/> Add Step</button>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
      >
        {loading ? <Loader2 className="animate-spin" /> : <><Send size={20}/> Post Project</>}
      </button>
    </form>
  );
};

export default AddProjectForm;