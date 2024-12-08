
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_id : { type: String, required: true, unique: true},
    type: { type: String, required: true },
    bed: { type: Number, required: true },
    extra_bed: { type: String, required: true, enum: ['yes','no']  },
    description: { type: String },
    price: { type: Number, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model('Room', roomSchema);
