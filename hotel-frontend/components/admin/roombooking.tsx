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

  const loadRoomData = () => {
    const roomData = localStorage.getItem("selectedRoom");
    if (roomData) {
      const parsedRoomData = JSON.parse(roomData);
      setSelectedRoom(parsedRoomData);
      setFormData((prevData) => ({
        ...prevData,
        price: parsedRoomData.price || 0,
      }));
    }
  };

  useEffect(() => {
    loadRoomData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadRoomData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'extraBed' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const bookingData = {
      customerId: generatedCustomerId,
      bookId: generatedBookId,
      ...formData,
      room: selectedRoom,
      totalPrice: discountedTotalPrice
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/book/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      console.log(bookingData);
      const result = await response.json();
      if (response.ok) {
        alert('Booking created successfully! 🎉');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the room');
    }
  };

  const extraBedPrice = 500;
  const taxesFees = 0;

  const totalPrice = (selectedRoom?.price || 0) + formData.extraBed * extraBedPrice + taxesFees;
  const discountedTotalPrice = ((totalPrice - (totalPrice * (parseFloat(localStorage.getItem("discount") || "0") / 100))) * parseInt(localStorage.getItem("totalDays") || "1")).toFixed(2);

  return (
    <div className="bg-transparent rounded-lg text-black">
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
                <label htmlFor="firstName" className="block text-sm font-medium text-black">
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
                <label htmlFor="lastName" className="block text-sm font-medium text-black">
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
                <label htmlFor="email" className="block text-sm font-medium text-black">
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
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
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
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-black">
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
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-black">
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
                    min={formData.checkInDate}
                  />
                </div>
                <div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="extraBed" className="block text-sm font-medium text-black">
                Extra Bed
              </label>
              <select
                id="extraBed"
                name="extraBed"
                value={formData.extraBed}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>

            <div className="mt-6">

              <h1 className="text-lg font-medium text-[#5C5C5C]">


               Total : {((totalPrice - (totalPrice * (parseFloat(localStorage.getItem("discount") || "0") / 100))) * parseInt(localStorage.getItem("totalDays") || "1")).toFixed(2)} ฿
                {localStorage.getItem("discount") && (
                  <p className="text-lg font-medium text-[#5C5C5C]">
                    Discount: {localStorage.getItem("discount")}%
                  </p>
                )}
              </h1>
              <h1 className="text-lg font-medium text-[#5C5C5C]">
                Total Day : {formData.checkInDate && formData.checkOutDate
                  ? (() => {
                    const totalDays = Math.ceil(
                      (new Date(formData.checkOutDate).getTime() -
                        new Date(formData.checkInDate).getTime()) /
                      (1000 * 60 * 60 * 24) + 1
                    );
                    localStorage.setItem("totalDays", totalDays.toString());
                    return totalDays;
                  })()
                  : 0} Days

              </h1>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  localStorage.setItem("discount", "0");

                }}
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md  transition"
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
