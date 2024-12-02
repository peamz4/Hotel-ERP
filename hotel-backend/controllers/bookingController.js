const Booking = require('../models/bookingModel');
const Customer = require('../models/customerModel');
const Room = require('../models/roomModel');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { customer, room, check_in_date, check_out_date, adults, children, total_price, payment_status } = req.body;

        // Ensure the referenced customer and room exist
        const existingCustomer = await Customer.findById(customer);
        const existingRoom = await Room.findById(room);

        if (!existingCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        if (!existingRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        const booking = new Booking({
            customer,
            room,
            check_in_date,
            check_out_date,
            adults,
            children,
            total_price,
            payment_status
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('customer', 'customer_name email phone') // Populate customer details
            .populate('room', 'room_status'); // Populate room details
        res.status(200).json({ bookings });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id)
            .populate('customer', 'customer_name email phone')
            .populate('room', 'room_status');

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ booking });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booking', error: error.message });
    }
};

// Update a booking
exports.updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const booking = await Booking.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        })
        .populate('customer', 'customer_name email phone')
        .populate('room', 'room_status');

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking updated successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking', error: error.message });
    }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking', error: error.message });
    }
};
