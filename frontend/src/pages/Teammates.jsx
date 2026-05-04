import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StudentCard from '../components/StudentCard';
import { Search, Filter, Users, SlidersHorizontal, Sparkles, Zap } from 'lucide-react';

const dummyStudents = [
  { id: 1, name: "Arjun Mehta", branch: "CSE", year: "3rd", skills: ["React", "Node.js", "Firebase"] },
  { id: 2, name: "Sneha Kapoor", branch: "IT", year: "2nd", skills: ["Python", "Machine Learning"] },
  { id: 3, name: "Ishaan Sharma", branch: "ECE", year: "4th", skills: ["Arduino", "C++", "IoT"] },
  { id: 4, name: "Ananya Iyer", branch: "CSE", year: "3rd", skills: ["UI/UX", "Figma", "Tailwind"] },
  { id: 5, name: "Rohan Das", branch: "ME", year: "2nd", skills: ["AutoCAD", "SolidWorks"] },
  { id: 6, name: "Kriti Verma", branch: "IT", year: "3rd", skills: ["Java", "Spring Boot", "SQL"] },
];

const Teammates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredStudents = dummyStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesBranch = selectedBranch === 'All' || student.branch === selectedBranch;
    const matchesYear = selectedYear === 'All' || student.year === selectedYear;
    
    return matchesSearch && matchesBranch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Sidebar />
      
      <main className="flex-1 ml-64 p-8 relative z-10 overflow-y-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Network Directory</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter flex items-center gap-4">
            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Teammates</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium max-w-xl">
            Discover the brightest minds on campus. Filter by expertise, branch, or year to build your dream team.
          </p>
        </div>

        {/* Futuristic Search & Filters Bar */}
        <div className="bg-white/[0.03] backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/10 mb-12 flex flex-wrap gap-6 items-center shadow-2xl">
          
          {/* Search Input */}
          <div className="relative flex-1 min-w-[320px] group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-500 group-focus-within:text-purple-400 transition-colors" size={20} />
            </div>
            <input 
              type="text"
              placeholder="Search by name, skills, or stack..."
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/40 transition-all text-white placeholder:text-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Select Menus */}
          <div className="flex gap-4">
            <div className="relative">
              <select 
                className="appearance-none px-6 py-4 bg-black/40 border border-white/5 rounded-2xl outline-none focus:border-blue-500/40 text-gray-300 font-bold text-sm cursor-pointer pr-10"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="All">All Branches</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={16} />
            </div>

            <div className="relative">
              <select 
                className="appearance-none px-6 py-4 bg-black/40 border border-white/5 rounded-2xl outline-none focus:border-cyan-500/40 text-gray-300 font-bold text-sm cursor-pointer pr-10"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="All">All Years</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
              <Zap className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center gap-2 ml-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Showing {filteredStudents.length} matches found in the network
            </span>
        </div>

        {/* Grid of StudentCards */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStudents.map(student => (
              <div key={student.id} className="reveal">
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[40vh] flex flex-center items-center justify-center flex-col text-center border-2 border-dashed border-white/5 rounded-[3rem]">
            <Users className="text-gray-700 mb-4" size={64} strokeWidth={1} />
            <h3 className="text-xl font-bold text-gray-500">No collaborators found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Teammates;