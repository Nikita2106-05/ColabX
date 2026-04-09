const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrollment: { type: String, required: true },
    branch: String,
    year: String,
    skills: [String],
    role: { type: String, default: 'student' }
});
module.exports = mongoose.model('Student', studentSchema);