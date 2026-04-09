import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { Rocket, Loader2 } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Rocket className="text-blue-600" size={32} />
            Available Projects
          </h1>
          <p className="text-slate-500 mt-2">Explore projects posted by faculty and start collaborating.</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p className="font-medium">Fetching latest projects...</p>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project._id} 
                title={project.title}
                skills={project.skillsRequired}
                difficulty={project.subject} // Hum subject ko badge mein dikha sakte hain
                faculty={project.faculty?.name || "Faculty"}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-20 rounded-3xl border border-dashed border-slate-200 text-center">
            <p className="text-slate-500 font-bold text-xl">No projects posted yet!</p>
            <p className="text-slate-400">Tell your faculty to post some projects.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;