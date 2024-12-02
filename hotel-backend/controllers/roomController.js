const Room = require('../models/roomModel');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const { type, status } = req.body;

        const room = new Room({
            type,
            status,
        });

        await room.save();
        res.status(201).json({ message: 'Room created successfully', room });
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find().populate('type'); // Populate the RoomType for reference
        res.status(200).json({ rooms });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rooms', error: error.message });
    }
};

// Get a single room by ID
exports.getRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id).populate('type');

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ room });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room', error: error.message });
    }
};

// Update a room
exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const room = await Room.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        }).populate('type');

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room updated successfully', room });
    } catch (error) {
        res.status(500).json({ message: 'Error updating room', error: error.message });
    }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByIdAndDelete(id);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room', error: error.message });
    }
};
