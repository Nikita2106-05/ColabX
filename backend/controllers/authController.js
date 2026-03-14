const Student = require('../models/Student'); 
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    try {
        const { name, enrollment, branch, year, skills, email, password } = req.body;

        // Check user
        const existingUser = await Student.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new Student({
            name,
            enrollment,
            branch,
            year,
            // Safe split: Agar skills hai toh split karo, nahi toh khali array
            skills: skills ? skills.split(',').map(s => s.trim()) : [], 
            email,
            password: hashedPassword
        });

        await newStudent.save();
        res.status(201).json({ msg: "Student Registered Successfully!" });
    } catch (err) {
        console.log("Error during registration:", err); // Ye backend console mein error dikhayega
        res.status(500).json({ msg: "Database Error", error: err.message });
    }
};