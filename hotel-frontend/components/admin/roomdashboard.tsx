import React, { useState, useEffect } from "react";
import axios from "axios";
interface Room {
  room_id: string;
  description: string;
  type: string;
  bed: string;
  extra_bed: string;
  price: number;
  status: string;
}

const RoomDashboard = () => {
  const [availableRooms, setAvailableRooms] = useState<any[]>([]); // Change type to 'any' if you don't have Room interface from API response
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const roomsPerPage = 10;

  // Fetch rooms data from the API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/api/v1/rooms/getall");
        // Filter rooms to show only available ones
        const available = response.data.rooms.filter((room: any) => room.status === "available");
        setAvailableRooms(available);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Calculate the index of the first and last rooms to display
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = availableRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(availableRooms.length / roomsPerPage);

  if (loading) {
    return <div className="p-6 text-center text-xl">Loading rooms...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-transparent rounded-lg">
      <h1 className="text-2xl font-bold text-[#5C5C5C] text-[40px]">
        Available Rooms
      </h1>
      <div className="mt-6 overflow-auto border-[2px] border-[#5C5C5C]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th className="px-4 py-2">Room NO.</th>
              <th className="px-4 py-2">Room Type</th>
              <th className="px-4 py-2">Bed</th>
              <th className="px-4 py-2">Extra Bed</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price (Net)</th>
              <th className="px-4 py-2">status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-transparent text-[#5C5C5C] hover:bg-gray-50"
              >
                <td className="px-4 py-2 border-y border-l border-[#5C5C5C]">
                  {room.room_id}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.type}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.bed}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.extra_bed}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.description}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.price}
                </td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {room.status}
                </td>
                <td className="px-4 py-2 border-y border-r border-[#5C5C5C] text-right">
                  <button className="text-center text-black rounded w-full bg-[#fcdf39]">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-4">
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
