const Admin = require('../models/adminModel');

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if username already exists
        const adminExists = await Admin.findOne({ username });
        if (adminExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create a new admin
        const admin = await Admin.create({ username, password, role });
        res.status(201).json({
            message: 'Admin created successfully',
            admin: { id: admin._id, username: admin.username, role: admin.role }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password'); // Exclude password for security
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id).select('-password'); // Exclude password

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update admin
exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, role } = req.body;

        // Find and update the admin
        const updatedAdmin = await Admin.findByIdAndUpdate(
            id,
            { username, role },
            { new: true, runValidators: true }
        );

        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({
            message: 'Admin updated successfully',
            admin: { id: updatedAdmin._id, username: updatedAdmin.username, role: updatedAdmin.role }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
