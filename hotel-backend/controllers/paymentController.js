const Payment = require('../models/paymentModel');

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const { booking, customer, type, date } = req.body;

        const payment = new Payment({ booking, customer, type, date });
        await payment.save();

        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error: error.message });
    }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find()
            .populate('booking', 'check_in_date check_out_date')
            .populate('customer', 'name email phone');

        res.status(200).json({ payments });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error: error.message });
    }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findById(id)
            .populate('booking', 'check_in_date check_out_date')
            .populate('customer', 'name email phone');

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ payment });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payment', error: error.message });
    }
};

// Update a payment
exports.updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const payment = await Payment.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        });

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ message: 'Payment updated successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment', error: error.message });
    }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByIdAndDelete(id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error: error.message });
    }
};
