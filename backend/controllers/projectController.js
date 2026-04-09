const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const { title, subject, skills, steps, facultyId } = req.body;

        if(!title || !subject || !facultyId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProject = new Project({
            title,
            subject,
            skillsRequired: skills.split(',').map(s => s.trim()),
            steps,
            faculty: facultyId
        });

        await newProject.save();
        res.status(201).json({ message: "Project posted successfully!", project: newProject });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating project", error: error.message });
    }
};

exports.getFacultyProjects = async (req, res) => {
    try {
        const projects = await Project.find({ faculty: req.params.facultyId });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects" });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const Project = require('../models/Project'); // Model import hona chahiye
        const projects = await Project.find().populate('faculty', 'name').sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects", error: error.message });
    }
};