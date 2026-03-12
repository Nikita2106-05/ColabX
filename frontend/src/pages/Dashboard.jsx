import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import StudentCard from '../components/StudentCard';
import { Search, Bell, Calendar as CalIcon } from 'lucide-react';

const Dashboard = () => {
  // Dummy Data
  const projects = [
    {title: "Fake News Detection", skills: ["Python", "NLP", "React"], difficulty: "Medium" },
    { title: "Smart Agri-Tech IoT", skills: ["Arduino", "Python", "ML"], difficulty: "Hard" },
    { title: "Library Auth System", skills: ["Node.js", "MongoDB"], difficulty: "Easy" },
  ];

  const students = [
    { name: "Rahul Sharma", branch: "CSE - 3rd Year", skills: ["React", "UI Design"] },
    { name: "Priya Verma", branch: "IT - 2nd Year", skills: ["Python", "Flask"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, Student 👋</h1>
            <p className="text-slate-500">Here's what's happening with your projects.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={20} />
              <input 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-64"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-xl relative">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Projects & Teammates */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            
            {/* Recommended Projects Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">Recommended for You</h2>
                <button className="text-blue-600 text-sm font-semibold">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((proj, i) => <ProjectCard key={i} {...proj} />)}
              </div>
            </section>

            {/* Teammate Finder Section */}
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Find Teammates</h2>
              <div className="space-y-3">
                {students.map((stu, i) => <StudentCard key={i} {...stu} />)}
              </div>
            </section>

            {/* Skill Posts Section */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">Project Skill Requirements</h2>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-2xl text-white">
                <p className="text-blue-100 text-sm mb-1 font-medium">NEW POST</p>
                <h3 className="text-xl font-bold mb-4">Need UI Designer for AI Study Planner</h3>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white"></div>
                  </div>
                  <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-bold text-sm">Apply Now</button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Events & Calendar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <CalIcon className="text-blue-600" size={20} />
                <h2 className="text-lg font-bold text-slate-900">Upcoming Events</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase">Mar</p>
                    <p className="text-xl font-black text-slate-900">25</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-sm">AI Hackathon 2024</h4>
                    <p className="text-xs text-slate-500">Main Seminar Hall • 10:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase">Apr</p>
                    <p className="text-xl font-black text-slate-900">02</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-sm">Python Workshop</h4>
                    <p className="text-xs text-slate-500">Lab 04 • 02:00 PM</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border border-slate-100 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-50 transition-all">
                View Academic Calendar
              </button>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;