import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddProjectForm from '../components/AddProjectForm';
import { Layout, Users, BookOpen, Clock, Plus, BarChart3, ChevronRight } from 'lucide-react';

const FacultyDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  // Dummy stats
  const stats = [
    { label: "Total Projects", value: "12", icon: <BookOpen className="text-blue-600" />, bg: "bg-blue-50" },
    { label: "Active Students", value: "45", icon: <Users className="text-emerald-600" />, bg: "bg-emerald-50" },
    { label: "Pending Requests", value: "08", icon: <Clock className="text-amber-600" />, bg: "bg-amber-50" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Faculty Management</h1>
            <p className="text-slate-500 font-medium">Create and manage your subject-based projects.</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            {showForm ? "View Dashboard" : <><Plus size={20} /> Create New Project</>}
          </button>
        </div>

        {showForm ? (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 flex items-center gap-2 text-slate-500">
               <button onClick={() => setShowForm(false)} className="hover:text-blue-600">Dashboard</button>
               <ChevronRight size={16} />
               <span className="text-slate-900 font-bold">New Project</span>
            </div>
            <AddProjectForm onSuccess={() => setShowForm(false)} />
          </div>
        ) : (
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                  <div className={`p-4 ${stat.bg} rounded-2xl`}>{stat.icon}</div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Projects Table/List */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900">Your Posted Projects</h2>
                <BarChart3 className="text-slate-400" size={20} />
              </div>
              
              <div className="divide-y divide-slate-50">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-600">
                        0{item}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Advanced Machine Learning Lab</h4>
                        <p className="text-sm text-slate-500 font-medium">Subject: CS201 • Posted on 12 March</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">14 Students</p>
                        <p className="text-xs text-slate-400">Joined</p>
                      </div>
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400 hover:text-blue-600">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FacultyDashboard;