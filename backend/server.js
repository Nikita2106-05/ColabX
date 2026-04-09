const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

require('dotenv').config();

const app = express();

// Middleware (Frontend se data lene ke liye zaroori)
app.use(express.json()); 
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Ek sample route check karne ke liye
app.get('/', (req, res) => {
    res.send("ColabX Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));