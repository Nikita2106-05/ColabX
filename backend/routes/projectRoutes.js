const express = require('express');
const router = express.Router();
const { createProject, getFacultyProjects, getAllProjects } = require('../controllers/projectController');

router.post('/create', createProject);
router.get('/faculty/:facultyId', getFacultyProjects);
router.get('/all', getAllProjects);

module.exports = router;