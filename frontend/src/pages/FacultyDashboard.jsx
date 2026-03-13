import React from 'react';
import Sidebar from '../components/Sidebar';
import AddProjectForm from '../components/AddProjectForm';
import { Megaphone, Calendar, Users, Briefcase, Plus } from 'lucide-react';

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Faculty Header */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">Faculty Portal</span>
            <h1 className="text-3xl font-black text-slate-900 mt-1">Hello, Dr. Amit Verma 👋</h1>
            <p className="text-slate-500">Manage your subject projects and track student progress.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 flex items-center gap-3">
              <Users className="text-indigo-600" size={20} />
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Active Teams</p>
                <p className="text-sm font-bold text-slate-900">12 Groups</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Left: Add Project Section */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Plus className="bg-indigo-600 text-white rounded-md p-1" size={24} />
                Post New Subject Project
              </h2>
              <AddProjectForm />
            </section>
          </div>

          {/* Right: Events & Hackathons */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-100">
              <div className="flex items-center gap-2 mb-4">
                <Megaphone size={24} />
                <h2 className="text-xl font-bold">Post Event</h2>
              </div>
              <p className="text-indigo-100 text-sm mb-6">Announce hackathons, workshops, or guest lectures to all students.</p>
              
              <div className="space-y-4">
                <input 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-indigo-200 outline-none focus:bg-white/20"
                  placeholder="Event Name"
                />
                <input 
                  type="date"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-indigo-100 outline-none"
                />
                <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                  Post Hackathon
                </button>
              </div>
            </section>

            {/* Quick Stats/Recent Activity */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-slate-400" /> Recent Posts
              </h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-800">Advanced Java Lab Projects</p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase font-medium">Posted 2 days ago</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;