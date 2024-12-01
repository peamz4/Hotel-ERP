const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    check_in_date: { type: Date, required: true },
    check_out_date: { type: Date, required: true },
    adults: { type: Number, required: true },
    children: { type: Number },
    total_price: { type: Number, required: true },
    payment_status: { type: String, enum: ['Pending', 'Paid'], required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
