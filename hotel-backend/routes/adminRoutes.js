const express = require('express');
const {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
} = require('../controllers/adminController');

const router = express.Router();

// Create admin
router.post('/create', createAdmin);

// Get all admins
router.get('/getall', getAllAdmins);

// Get admin by ID
router.get('/get/:id', getAdminById);

// Update admin
router.put('/update/:id', updateAdmin);

// Delete admin
router.delete('/delete/:id', deleteAdmin);

module.exports = router;
