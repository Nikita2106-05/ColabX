import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StudentCard from '../components/StudentCard';
import { Search, Filter, Users, SlidersHorizontal } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Users className="text-blue-600" size={32} />
            Find Teammates
          </h1>
          <p className="text-slate-500 mt-2">Connect with talented students across branches.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-3 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by name or skills..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <select 
              className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="All">All Branches</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>

            <select 
              className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </main>
    </div>
  );
};

// YEH LINE ZAROORI HAI:
export default Teammates;