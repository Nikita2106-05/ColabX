const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');

// URL banega: http://localhost:5000/api/auth/register
router.post('/register', register);

module.exports = router;