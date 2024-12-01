const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'RoomType', required: true },
    status: { type: String, required: true, enum: ['Available', 'Occupied'] }
});

module.exports = mongoose.model('Room', roomSchema);
