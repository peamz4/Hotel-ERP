const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    type: { type: String, required: true }, // e.g., 'Credit Card', 'Cash'
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);
