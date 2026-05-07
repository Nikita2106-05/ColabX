const express = require('express');
const router = express.Router();

// Yahan bracket ke andar 'getDiscoveryProjects' add karna zaroori hai
const { 
  createProject, 
  getFacultyProjects, 
  getAllProjects,
  getRecommendations,
  getDiscoveryProjects  // <--- Ye line add karein
} = require('../controllers/projectController');

router.post('/create', createProject);
router.get('/faculty/:facultyId', getFacultyProjects);
router.get('/all', getAllProjects);
router.get('/recommendations/:studentId', getRecommendations);

// Aapka frontend '/discovery/' call kar raha hai, toh route ye hona chahiye:
router.get('/discovery/:studentId', getDiscoveryProjects);

module.exports = router;