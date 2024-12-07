import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomBooking from "./roombooking";

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
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
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
        const available = response.data.rooms.filter((room: Room) => room.status === "available");
        setAvailableRooms(available);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Calculate pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = availableRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(availableRooms.length / roomsPerPage);

  const handleBookRoom = (room: Room) => {
    // Save room data to localStorage
    localStorage.setItem("selectedRoom", JSON.stringify(room));
    // Navigate to /admin/dashboard
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-transparent rounded-lg">
      <h1 className="text-2xl font-bold text-[#5C5C5C] text-[40px]">
        Available Rooms
      </h1>
      <div className="mt-6 overflow-auto border-[2px]">
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
            {currentRooms.map((room) => (
              <tr key={room.room_id} className="odd:bg-white even:bg-transparent text-[#5C5C5C] hover:bg-gray-50">
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
                  <button
                    onClick={() => handleBookRoom(room)}
                    className="text-center text-black rounded w-full bg-[#fcdf39]">
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          &lt;&lt;
        </button>
        <span className="text-3xl font-thin text-gray-600">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          &gt;&gt;
        </button>
      </div>
            <RoomBooking />
    </div>
  );
};

export default RoomDashboard;
