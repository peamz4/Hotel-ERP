import React, { useState } from "react";

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
  });

  const [generatedCustomerId] = useState("CUST-" + Math.floor(Math.random() * 1000));
  const [generatedBookId] = useState("BOOK-" + Math.floor(Math.random() * 1000));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Room booked successfully!");
    // Handle booking submission logic
  };

  const price = 12800; // Example base price for the room
  const extraBedPrice = 500;
  const taxesFees = 500;

  const totalPrice = price + formData.extraBed * extraBedPrice + taxesFees;

  return (
    <div className="p-6 bg-transparent rounded-lg ">
      <h1 className="text-2xl font-bold text-[#5C5C5C]">Booking Room</h1>

      <div className="mt-6">
        <p className="font-medium text-black">Selecting: B2 - 304 (Studio)</p>

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
              <h2 className="text-xl font-medium text-[#5C5C5C] mt-12">Extra bed & Taxes</h2>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label htmlFor="extraBed" className="block text-sm font-medium text-gray-700">
                    Extra bed
                  </label>
                  <input
                    id="extraBed"
                    type="number"
                    name="extraBed"
                    min="0"
                    value={formData.extraBed}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                    Adults
                  </label>
                  <input
                    id="adults"
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                    Children
                  </label>
                  <input
                    id="children"
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium text-[#5C5C5C]">Total (Include Taxes & Fees): {totalPrice} ฿</p>
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
