import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AddProjectForm from '../components/AddProjectForm';
import { Layout, Users, BookOpen, Clock, Plus, BarChart3, ChevronRight, Zap, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const FacultyDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  // Entrance Animation
  useEffect(() => {
    gsap.fromTo(".dashboard-content", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, [showForm]);

  const stats = [
    { label: "Total Projects", value: "12", icon: <BookOpen />, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Active Students", value: "45", icon: <Users />, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { label: "Pending Requests", value: "08", icon: <Clock />, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Sidebar />

      <main className="flex-1 ml-64 p-10 relative z-10 overflow-y-auto h-screen no-scrollbar">
        {/* Header Section */}
        <div className="dashboard-content flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              <Zap size={14} fill="currentColor" />
              <span>Faculty Portal</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
              Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-shimmer">Hub</span>
            </h1>
            <p className="text-gray-500 font-light max-w-md">Oversee your research labs and student collaborations from a centralized futuristic interface.</p>
          </div>

          <button 
            onClick={() => setShowForm(!showForm)}
            className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm overflow-hidden transition-all hover:border-purple-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-2 group-hover:text-white transition-colors">
              {showForm ? "Return to Overview" : <><Plus size={18} /> Deploy New Project</>}
            </div>
          </button>
        </div>

        {showForm ? (
          <div className="max-w-4xl mx-auto dashboard-content">
            <div className="mb-8 flex items-center gap-2 text-gray-500 text-sm font-medium">
               <button onClick={() => setShowForm(false)} className="hover:text-purple-400 transition-colors">Dashboard</button>
               <ChevronRight size={14} />
               <span className="text-white">Project Deployment</span>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <AddProjectForm onSuccess={() => setShowForm(false)} />
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dashboard-content">
              {stats.map((stat, i) => (
                <div key={i} className={`relative group p-8 rounded-[2rem] bg-white/[0.02] border ${stat.border} hover:bg-white/[0.04] transition-all duration-500 overflow-hidden`}>
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`p-4 ${stat.bg} ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(stat.icon, { size: 28 })}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-3xl font-black text-white">{stat.value}</p>
                    </div>
                  </div>
                  {/* Subtle Background Icon */}
                  <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity ${stat.color}`}>
                    {React.cloneElement(stat.icon, { size: 100 })}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Projects Table - Dark Styled */}
            <div className="dashboard-content">
              <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Your Posted Projects</h2>
                    <p className="text-xs text-gray-500">Live projects active on the network</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400">
                    <BarChart3 size={20} />
                  </div>
                </div>
                
                <div className="divide-y divide-white/5">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-8 hover:bg-white/[0.03] transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center font-bold text-purple-400 group-hover:border-purple-500/50 transition-colors">
                          0{item}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">Neural Network Optimization Lab</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs text-gray-500 font-medium bg-white/5 px-2 py-1 rounded-md">ID: HUB-20{item}</span>
                            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                               <Sparkles size={12} className="text-cyan-400" /> Subject: CS201
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-10">
                        <div className="text-right">
                          <p className="text-lg font-bold text-white">14</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Students Joined</p>
                        </div>
                        <button className="p-4 bg-white/5 hover:bg-purple-600 rounded-2xl border border-white/10 hover:border-transparent transition-all text-gray-400 hover:text-white shadow-lg">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 text-center border-t border-white/5 bg-white/[0.01]">
                    <button className="text-xs font-bold text-gray-500 hover:text-white tracking-widest uppercase transition-colors">View All Deployments</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FacultyDashboard;