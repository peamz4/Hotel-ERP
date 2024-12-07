import React, { useState, useEffect } from "react";

const RoomBooking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    extraBed: 0,
    adults: 0,
    children: 0,
    price: 0,
  });

  interface Room {
    room_id: string;
    type: string;
    description: string;
    price: number;
  }

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [generatedCustomerId] = useState("CUST-" + Math.floor(Math.random() * 1000));
  const [generatedBookId] = useState("BOOK-" + Math.floor(Math.random() * 1000));

  // 🔥 โหลดข้อมูลแบบ Real-Time
  const loadRoomData = () => {
    const roomData = localStorage.getItem("selectedRoom");
    if (roomData) {
      const parsedRoomData = JSON.parse(roomData);
      setSelectedRoom(parsedRoomData);
      setFormData((prevData) => ({
        ...prevData,
        price: parsedRoomData.price || 0, // ตั้งค่าเริ่มต้นราคา
      }));
    }
  };

  // 📥 โหลดข้อมูลครั้งแรก
  useEffect(() => {
    loadRoomData();
  }, []);

  // 📡 โหลดข้อมูลแบบ Real-Time ทุกๆ 1 วินาที
  useEffect(() => {
    const intervalId = setInterval(() => {
      loadRoomData();
    }, 1000); // อัปเดตทุก 1 วินาที

    return () => clearInterval(intervalId); // ล้าง interval เมื่อ component unmount
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Room booked successfully!");
    // Handle booking submission logic
  };

  const extraBedPrice = 500;
  const taxesFees = 500;

  const totalPrice = (selectedRoom?.price || 0) + formData.extraBed * extraBedPrice + taxesFees;

  return (
    <div className="p-6 bg-transparent rounded-lg ">
      <h1 className="text-2xl font-bold text-[#5C5C5C]">Booking Room</h1>

      <div className="mt-6">
        {selectedRoom ? (
          <p className="font-medium text-black">
            Selecting: {selectedRoom.room_id} - {selectedRoom.type} ({selectedRoom.description})
          </p>
        ) : (
          <p className="font-medium text-black">Loading room data...</p>
        )}

        <div className="mt-6">
          <h2 className="text-xl font-medium text-[#5C5C5C]">Customer Contact</h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-medium text-[#5C5C5C] mt-12">Room Details</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                    Check-in Date
                  </label>
                  <input
                    id="checkInDate"
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                    Check-out Date
                  </label>
                  <input
                    id="checkOutDate"
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium text-[#5C5C5C]">
                Total (Include Taxes & Fees): {totalPrice} ฿
              </p>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;
