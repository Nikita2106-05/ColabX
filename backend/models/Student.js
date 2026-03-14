const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    enrollment: { type: String, required: true },
    branch: { type: String },
    year: { type: String },
    skills: [String], // Array of strings
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Student', studentSchema);