const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Routes
router.post('/create', bookingController.createBooking);
router.get('/getall', bookingController.getAllBookings);
router.get('/get/:id', bookingController.getBookingById);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/delete/:id', bookingController.deleteBooking);


module.exports = router;
