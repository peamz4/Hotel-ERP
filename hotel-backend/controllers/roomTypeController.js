const RoomType = require('../models/roomTypeModel');

// Create a new room type
exports.createRoomType = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const roomType = new RoomType({
            name,
            description,
            price,
        });

        await roomType.save();
        res.status(201).json({ message: 'Room type created successfully', roomType });
    } catch (error) {
        res.status(500).json({ message: 'Error creating room type', error: error.message });
    }
};

// Get all room types
exports.getAllRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        res.status(200).json({ roomTypes });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room types', error: error.message });
    }
};

// Get a single room type by ID
exports.getRoomTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const roomType = await RoomType.findById(id);

        if (!roomType) {
            return res.status(404).json({ message: 'Room type not found' });
        }

        res.status(200).json({ roomType });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room type', error: error.message });
    }
};

// Update a room type
exports.updateRoomType = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const roomType = await RoomType.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });

        if (!roomType) {
            return res.status(404).json({ message: 'Room type not found' });
        }

        res.status(200).json({ message: 'Room type updated successfully', roomType });
    } catch (error) {
        res.status(500).json({ message: 'Error updating room type', error: error.message });
    }
};

// Delete a room type
exports.deleteRoomType = async (req, res) => {
    try {
        const { id } = req.params;
        const roomType = await RoomType.findByIdAndDelete(id);

        if (!roomType) {
            return res.status(404).json({ message: 'Room type not found' });
        }

        res.status(200).json({ message: 'Room type deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room type', error: error.message });
    }
};
