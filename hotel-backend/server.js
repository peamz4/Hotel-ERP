const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');

const app = express();
dotenv.config({ path: "./config/config.env" });
connectDB();


// Middleware
app.use(express.json());
app.use(cors());

// Admin routes
app.use('/api/v1/admin', adminRoutes);


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
