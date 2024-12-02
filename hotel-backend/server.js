const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Route
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const customerRoutes = require('./routes/customerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const roomRoutes = require('./routes/roomRoutes');
const roomTypeRoutes = require('./routes/roomTypeRoutes');

const cors = require('cors');

const app = express();
dotenv.config({ path: "./config/config.env" });
connectDB();


// Middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/roomtypes', roomTypeRoutes);


const PORT = process.env.PORT || 3001;
app.listen(
  PORT,
  console.log("Server running in", process.env.NODE_ENV, "mode on port", PORT)
);

// Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});
