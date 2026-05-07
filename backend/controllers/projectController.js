const Project = require('../models/Project');
const Student = require('../models/Student');
const axios = require('axios');

// 1. Create Project (Faculty)
exports.createProject = async (req, res) => {
    try {
        const { title, subject, skills, steps, facultyId } = req.body;

        if(!title || !subject || !facultyId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProject = new Project({
            title,
            subject,
            // Skills ko array mein convert kar rahe hain (agar string mein aaye toh)
            skillsRequired: Array.isArray(skills) ? skills : skills.split(',').map(s => s.trim()),
            steps: Array.isArray(steps) ? steps : [],
            faculty: facultyId
        });

        await newProject.save();
        res.status(201).json({ message: "Project posted successfully!", project: newProject });
    } catch (error) {
        console.error("Create Project Error:", error);
        res.status(500).json({ message: "Error creating project", error: error.message });
    }
};

// 2. Get projects posted by a specific Faculty
exports.getFacultyProjects = async (req, res) => {
    try {
        const projects = await Project.find({ faculty: req.params.facultyId }).sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching faculty projects" });
    }
};

// 3. Get ALL projects (General List)
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('faculty', 'name').sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all projects", error: error.message });
    }
};

// Is poore function ko replace karein
exports.getDiscoveryProjects = async (req, res) => {
    try {
        const { studentId } = req.params;
        
        // 1. Student fetch karein
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).json({ message: "Student not found" });

        // 2. Faculty projects fetch karein
        const facultyProjects = await Project.find().populate('faculty', 'name');

        // 3. Python ML Server ko call karein (Sirf EK baar declare karein)
        const mlResponse = await axios.post('http://localhost:5001/recommend-hybrid', {
            student_skills: student.skills && student.skills.length > 0 
                ? student.skills.join(', ') 
                : "General Computer Science",
            faculty_projects: facultyProjects
        });

        // Debugging ke liye console log yahan check karein
        console.log("ML Server Response received successfully");

        // 4. Final Data bhejein
        res.json(mlResponse.data);

    } catch (error) {
        console.error("Discovery Engine Error:", error.message);
        res.status(500).json({ 
            message: "Neural Link (ML) is offline. Start Python Server on Port 5001.",
            error: error.message 
        });
    }
};

// 5. BASIC RECOMMENDATIONS (Only Faculty Projects - ML Based)
// Iska use "Dashboard" ke "Recommended for you" section mein kar sakte hain
exports.getRecommendations = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId);
        
        if (!student) return res.status(404).json({ message: "Student not found" });

        const projects = await Project.find().populate('faculty', 'name');

        const payload = {
            student_skills: student.skills.join(" "),
            projects: projects
        };

        const pythonResponse = await axios.post('http://localhost:5001/recommend', payload);

        const mlResults = pythonResponse.data; // List of {project_id, score}
        const recommendedIds = mlResults.map(item => item.project_id);

        // Sorting projects according to ML scores
        const sortedProjects = projects
            .filter(p => recommendedIds.includes(p._id.toString()))
            .sort((a, b) => recommendedIds.indexOf(a._id.toString()) - recommendedIds.indexOf(b._id.toString()));

        res.json(sortedProjects);

    } catch (error) {
        console.error("Recommendation Error:", error.message);
        res.status(500).json({ message: "Recommendation system error" });
    }
};