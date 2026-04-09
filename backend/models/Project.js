const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    skillsRequired: [String],
    description: String,
    steps: [String], // Guidance steps
    faculty: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Faculty', // Jisne post kiya
        required: true 
    },
    studentsJoined: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student' 
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);