const express = require('express');
const { loginAdmin } = require('../controllers/authController');

const router = express.Router();

// Create admin
router.post('/login', loginAdmin);



module.exports = router;
