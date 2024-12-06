const mongoose = require('mongoose');

const roomTypeSchema = new mongoose.Schema({
    type_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('RoomType', roomTypeSchema);
