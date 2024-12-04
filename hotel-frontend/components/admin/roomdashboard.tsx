import React, { useState } from "react";

const RoomDashboard = () => {
  const availableRooms = [
    {
      roomNo: "A1-101",
      roomType: "Deluxe",
      bed: "King",
      extraBed: "No",
      price: "฿2,500",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "B2-201",
      roomType: "Standard",
      bed: "Queen",
      extraBed: "Yes",
      price: "฿1,800",
      freeBreakfast: "No",
    },
    {
      roomNo: "C3-301",
      roomType: "Suite",
      bed: "King",
      extraBed: "Yes",
      price: "฿4,000",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "D4-401",
      roomType: "Penthouse",
      bed: "King",
      extraBed: "Yes",
      price: "฿8,000",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "E5-501",
      roomType: "Standard",
      bed: "Single",
      extraBed: "No",
      price: "฿1,200",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "F6-601",
      roomType: "Deluxe",
      bed: "King",
      extraBed: "Yes",
      price: "฿2,500",
      freeBreakfast: "No",
    },
    {
      roomNo: "G7-701",
      roomType: "Suite",
      bed: "King",
      extraBed: "Yes",
      price: "฿4,500",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "H8-801",
      roomType: "Standard",
      bed: "Queen",
      extraBed: "No",
      price: "฿1,500",
      freeBreakfast: "Yes",
    },
    {
      roomNo: "I9-901",
      roomType: "Penthouse",
      bed: "King",
      extraBed: "Yes",
      price: "฿9,000",
      freeBreakfast: "No",
    },
    {
      roomNo: "J10-101",
      roomType: "Standard",
      bed: "Single",
      extraBed: "No",
      price: "฿1,000",
      freeBreakfast: "Yes",
    },
    {
        roomNo: "J11-101",
        roomType: "Standard",
        bed: "Single",
        extraBed: "No",
        price: "฿1,000",
        freeBreakfast: "Yes",
      },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 10;

  // Calculate the index of the first and last rooms to display
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = availableRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(availableRooms.length / roomsPerPage);

  return (
    <div className="p-6 bg-transparent rounded-lg">
      <h1 className="text-2xl font-bold text-[#5C5C5C] text-[40px]">
        Available Rooms
      </h1>
      <div className="mt-6 overflow-auto border-[2px] border-[#5C5C5C]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th className="px-4 py-2 ">Room NO.</th>
              <th className="px-4 py-2 ">Room Type</th>
              <th className="px-4 py-2 ">Bed</th>
              <th className="px-4 py-2 ">Extra Bed</th>
              <th className="px-4 py-2 ">Price (Net)</th>
              <th className="px-4 py-2 ">Free Breakfast</th>
              <th className="px-4 py-2 "></th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-transparent text-[#5C5C5C]  hover:bg-gray-50"
              >
                <td className="px-4 py-2 border-y border-l border-[#5C5C5C]">
                  {room.roomNo}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.roomType}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.bed}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.extraBed}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.price}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.freeBreakfast}
                </td>
                <td className="px-4 py-2 border-y border-r border-[#5C5C5C] text-right">
                  <button className="text-center text-black rounded w-full bg-[#fcdf39]">
                    Book now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-4 ">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          &lt;&lt;
        </button>
        <span className="self-center text-xl text-[#5C5C5C]">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default RoomDashboard;
