import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 🔥 นำเข้า Router และ Route
import RoomDashboard from '../components/admin/roomdashboard';
import RoomBooking from '../components/admin/roombooking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomDashboard />} />
        <Route path="/booking" element={<RoomBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
