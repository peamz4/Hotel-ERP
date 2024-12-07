const Room = require('../models/roomModel');

// 📌 Create a new room
exports.createRoom = async (req, res) => {
    try {
        const { room_id, type, bed, extra_bed, description, price, status } = req.body;

        // Validate required fields
        if (!room_id || !type || bed == null || !extra_bed || price == null || !status) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        const room = new Room({
            room_id,
            type,
            bed,
            extra_bed,
            description,
            price,
            status,
        });

        await room.save();
        res.status(201).json({ message: 'Room created successfully', room });
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
};

// 📌 Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({ rooms });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rooms', error: error.message });
    }
};

// 📌 Get a single room by **room_id**
exports.getRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findOne({ room_id: id }); // 🔥 Use room_id instead of _id

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ room });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room', error: error.message });
    }
};

// 📌 Update a room by **room_id**
exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const room = await Room.findOneAndUpdate(
            { room_id: id },  // 🔥 Use room_id instead of _id
            updatedData, 
            { 
                new: true, 
                runValidators: true 
            }
        );

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room updated successfully', room });
    } catch (error) {
        res.status(500).json({ message: 'Error updating room', error: error.message });
    }
};

// 📌 Delete a room by **room_id**
exports.deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findOneAndDelete({ room_id: id }); // 🔥 Use room_id instead of _id

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room', error: error.message });
    }
};
