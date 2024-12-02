const Promotion = require('../models/promotionModel');

// Create a new promotion
exports.createPromotion = async (req, res) => {
    try {
        const { description, discount_rate, valid_until } = req.body;

        const promotion = new Promotion({
            description,
            discount_rate,
            valid_until,
        });

        await promotion.save();
        res.status(201).json({ message: 'Promotion created successfully', promotion });
    } catch (error) {
        res.status(500).json({ message: 'Error creating promotion', error: error.message });
    }
};

// Get all promotions
exports.getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.status(200).json({ promotions });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotions', error: error.message });
    }
};

// Get a single promotion by ID
exports.getPromotionById = async (req, res) => {
    try {
        const { id } = req.params;
        const promotion = await Promotion.findById(id);

        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }

        res.status(200).json({ promotion });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotion', error: error.message });
    }
};

// Update a promotion
exports.updatePromotion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const promotion = await Promotion.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });

        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }

        res.status(200).json({ message: 'Promotion updated successfully', promotion });
    } catch (error) {
        res.status(500).json({ message: 'Error updating promotion', error: error.message });
    }
};

// Delete a promotion
exports.deletePromotion = async (req, res) => {
    try {
        const { id } = req.params;
        const promotion = await Promotion.findByIdAndDelete(id);

        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }

        res.status(200).json({ message: 'Promotion deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting promotion', error: error.message });
    }
};
