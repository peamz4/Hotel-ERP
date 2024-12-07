const express = require('express');
const router = express.Router();
const {
  createRoomBooking,
  getAllRoomBookings,
  getRoomBookingById,
  deleteRoomBooking,
  getRoomBookingsByCustomerId,
} = require('../controllers/roomBookingController');

// POST: Create new room booking
router.post('/create', createRoomBooking);

// GET: Get all room bookings
router.get('/getall', getAllRoomBookings);

// GET: Get a specific booking by ID
router.get('/get/:id', getRoomBookingById);

// DELETE: Delete a specific booking by ID
router.delete('/get/:id', deleteRoomBooking);

// GET: Get all bookings by customer ID
router.get('/getinvoice/:id', getRoomBookingsByCustomerId);

module.exports = router;
