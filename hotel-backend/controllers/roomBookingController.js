const RoomBooking = require("../models/roomBooking");
const axios = require("axios");


// POST: Create a new room booking
const createRoomBooking = async (req, res) => {
  try {
    const {
      customerId,
      bookId,
      firstName,
      lastName,
      email,
      phoneNumber,
      checkInDate,
      checkOutDate,
      extraBed,
      room,
      totalPrice,
    } = req.body;

    // ✅ Validate required fields
    if (
      !customerId ||
      !bookId ||
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !checkInDate ||
      !checkOutDate ||
      !room ||
      !totalPrice
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // ✅ Create new booking
    const newBooking = new RoomBooking({
      customerId,
      bookId,
      firstName,
      lastName,
      email,
      phoneNumber,
      checkInDate,
      checkOutDate,
      extraBed,
      room,
      totalPrice,
    });

    // ✅ Save the booking to the database
    const savedBooking = await newBooking.save();
    console.log("New booking created:", savedBooking);

    // ✅ Update room status to "occupied"
    console.log("Room ID to be updated:", room.room_id);
    await axios.put(
      `http://localhost:3001/api/v1/rooms/update/${room.room_id}`,
      {
        status: "occupied",
      }
    );
    console.log("Room status updated to 'occupied'");

    res.status(201).json({
      message: "Booking successfully created",
      data: savedBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// GET: Get all room bookings
const getAllRoomBookings = async (req, res) => {
  try {
    const bookings = await RoomBooking.find();
    res.status(200).json({
      message: "Bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// GET: Get a single room booking by ID
const getRoomBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await RoomBooking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Error fetching booking by ID:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// DELETE: Delete a room booking by ID
const deleteRoomBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Find and delete the booking
    const deletedBooking = await RoomBooking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // ✅ Update the room status to "available" (Optional)
    const roomId = deletedBooking.room.room_id;
    console.log("Room ID to be updated:", roomId);
    await axios.put(`http://localhost:3001/api/v1/rooms/update/${roomId}`, {
      status: "available",
    });
    console.log("Room status updated to 'available'");

    res.status(200).json({ message: "Booking successfully deleted" });
  } catch (error) {
    console.error("Error deleting booking:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
// GET: Get room bookings by customerId
const getRoomBookingsByCustomerId = async (req, res) => {
  try {
    const { email } = req.params;

    // ✅ Find all bookings by customerId
    const bookings = await RoomBooking.find({ email });
    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this customer" });
    }

    res.status(200).json({
      message: "Bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings by customerId:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const getBookingByBookId = async (req, res) => {
  try {
    const { bookId } = req.params; // รับค่า bookId จาก params
    console.log("Book ID:", bookId);
    const booking = await RoomBooking.findOne({ bookId }); // ค้นหา booking จาก bookId
    console.log("Booking found:", booking);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ booking });

  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking by bookId', error: error.message });
  }
};

// const getRoomBookingById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const booking = await RoomBooking.findById(id);
//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.status(200).json({
//       message: "Booking retrieved successfully",
//       data: booking,
//     });
//   } catch (error) {
//     console.error("Error fetching booking by ID:", error.message);
//     res
//       .status(500)
//       .json({ message: "An error occurred", error: error.message });
//   }


module.exports = {
  createRoomBooking,
  getAllRoomBookings,
  getRoomBookingById,
  deleteRoomBooking,
getRoomBookingsByCustomerId,
getBookingByBookId,
};
