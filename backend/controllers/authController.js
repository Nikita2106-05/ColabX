const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    try {
        const { role, name, email, password, ...rest } = req.body;

        // 1. Check if user already exists in either collection
        const studentExists = await Student.findOne({ email });
        const facultyExists = await Faculty.findOne({ email });

        if (studentExists || facultyExists) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // 2. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Save based on Role
        let newUser;
        if (role === 'faculty') {
            newUser = new Faculty({
                name, email, password: hashedPassword,
                department: rest.department,
                designation: rest.designation,
                role: 'faculty'
            });
        } else {
            newUser = new Student({
                name, email, password: hashedPassword,
                enrollment: rest.enrollment,
                branch: rest.branch,
                year: rest.year,
                skills: rest.skills ? rest.skills.split(',') : [],
                role: 'student'
            });
        }

        await newUser.save();
        res.status(201).json({ message: `${role} registered successfully!` });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // 1. Role ke hisaab se Model select karein
        const Model = role === 'faculty' ? Faculty : Student;
        
        // 2. User ko dhoondein
        const user = await Model.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // 3. Password check karein (Bcrypt use karke)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 4. Token banayein (Digital Key)
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' } // 1 din baad expire hoga
        );

        // 5. Response bhejein
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};