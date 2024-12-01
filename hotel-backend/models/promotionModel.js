const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    discount_rate: { type: Number, required: true },
    valid_until: { type: Date, required: true }
});

module.exports = mongoose.model('Promotion', promotionSchema);
