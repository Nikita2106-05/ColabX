import React, { useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import StudentCard from '../components/StudentCard';
import { Search, Bell, Calendar as CalIcon, Zap, Sparkles, TrendingUp, Users } from 'lucide-react';
import gsap from 'gsap';

const Dashboard = () => {
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Check if elements exist before animating to prevent black screen
    const ctx = gsap.context(() => {
      gsap.fromTo(".dash-reveal", 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power4.out",
          delay: 0.2 // Chota delay taaki DOM load ho jaye
        }
      );
    }, mainContentRef);
    return () => ctx.revert();
  }, []);

  // Dummy Data
  const projects = [
    { title: "Fake News Detection", skills: ["Python", "NLP", "React"], difficulty: "Medium", faculty: "Dr. Alok Nath", matchScore: 95 },
    { title: "Smart Agri-Tech IoT", skills: ["Arduino", "Python", "ML"], difficulty: "Hard", faculty: "Prof. Sarah", matchScore: 88 },
    { title: "Library Auth System", skills: ["Node.js", "MongoDB"], difficulty: "Easy", faculty: "Mr. Khanna", matchScore: 70 },
  ];

  const students = [
    { name: "Rahul Sharma", branch: "CSE", year: "3rd", skills: ["React", "UI Design"] },
    { name: "Priya Verma", branch: "IT", year: "2nd", skills: ["Python", "Flask"] },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden w-full">
      {/* Background Neon Orbs - Fixed positioning for performance */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Sidebar - Ensure width is consistent (usually 64 or 72) */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main 
        ref={mainContentRef} 
        className="flex-1 h-screen overflow-y-auto relative z-10 p-6 md:p-10 custom-scrollbar"
      >
        
        {/* Top Header - Glassmorphic */}
        <header className="dash-reveal flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <Sparkles className="text-purple-400 animate-pulse" size={20} />
               <h1 className="text-3xl font-black tracking-tighter">
                Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovator</span> 👋
               </h1>
            </div>
            <p className="text-gray-500 font-medium text-sm tracking-wide">Systems online. You have 2 active collaborations today.</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input 
                placeholder="Search projects..." 
                className="w-full md:w-80 pl-12 pr-6 py-3.5 bg-black/40 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/40 outline-none transition-all text-sm font-medium text-white"
              />
            </div>
            <button className="p-3.5 bg-white/5 border border-white/10 rounded-2xl relative hover:bg-white/10 transition-all group active:scale-95">
              <Bell size={20} className="text-gray-400 group-hover:text-white" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] border-2 border-black"></span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            
            {/* Recommended Projects */}
            <section className="dash-reveal">
              <div className="flex justify-between items-end mb-8 px-2">
                <div>
                  <h2 className="text-2xl font-black tracking-tight mb-2">Neural Recommendations</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
                <button className="group text-purple-400 text-sm font-bold hover:text-white transition-all flex items-center gap-2">
                  EXPLORE ALL <TrendingUp size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="hover:z-20">
                    <ProjectCard project={proj} />
                  </div>
                ))}
              </div>
            </section>

            {/* High-Tech Skill Post CTA */}
            <section className="dash-reveal relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-10 rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Zap size={150} className="text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></div>
                    <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em]">Urgent Bounty</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 max-w-lg leading-tight">
                    Wanted: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">UI/UX Designer</span> for AI Logistics Platform
                  </h3>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050505] bg-gray-800 shadow-xl"></div>)}
                      </div>
                      <p className="text-gray-400 text-sm font-bold tracking-tight">
                        <span className="text-white">+18</span> peers already applied
                      </p>
                    </div>
                    <button className="px-10 py-4 bg-white text-black rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] uppercase tracking-widest">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Teammate Matches */}
            <section className="dash-reveal bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <Users size={20}/>
                </div>
                Compatible Collaborators
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {students.map((stu, i) => <StudentCard key={i} student={stu} />)}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-4 space-y-10">
            <section className="dash-reveal bg-white/[0.02] p-8 rounded-[3rem] border border-white/10 backdrop-blur-xl sticky top-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                    <CalIcon size={20} />
                  </div>
                  <h2 className="text-xl font-black tracking-tight">Timeline</h2>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Live Updates</span>
                </div>
              </div>

              <div className="space-y-10 relative before:absolute before:left-[21px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500/50 before:via-white/5 before:to-transparent">
                {[
                  { month: "Mar", day: "25", title: "AI Hackathon 2024", loc: "Seminar Hall", time: "10:00 AM", color: "from-purple-500 to-blue-500" },
                  { month: "Apr", day: "02", title: "Python Deep Dive", loc: "Lab 04", time: "02:00 PM", color: "from-blue-500 to-cyan-500" },
                  { month: "Apr", day: "15", title: "Project Pitch Day", loc: "Auditorium", time: "09:00 AM", color: "from-cyan-500 to-emerald-500" },
                ].map((event, i) => (
                  <div key={i} className="flex gap-8 relative group cursor-pointer">
                    <div className={`absolute left-[17px] top-2.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${event.color} shadow-[0_0_15px_rgba(168,85,247,0.4)] z-10 transition-transform duration-300 group-hover:scale-150`}></div>
                    
                    <div className="bg-white/5 p-3 rounded-2xl text-center min-w-[65px] border border-white/5 group-hover:bg-white/10 transition-colors">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">{event.month}</p>
                      <p className="text-2xl font-black text-white">{event.day}</p>
                    </div>
                    
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-white text-base leading-tight group-hover:text-purple-400 transition-colors">{event.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-2 font-bold uppercase tracking-wider">{event.loc} • {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-12 py-4.5 bg-white/5 border border-white/10 rounded-2xl text-gray-400 font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all active:scale-95 shadow-xl">
                Full Academic Portal
              </button>
            </section>
          </div>
        </div>
      </main>

      {/* Global CSS for scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(168, 85, 247, 0.4); }
      `}} />
    </div>
  );
};

export default Dashboard;