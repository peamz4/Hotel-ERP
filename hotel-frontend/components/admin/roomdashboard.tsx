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
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof Room | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [promotionCode, setPromotionCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const roomsPerPage = 10;

  // Fetch rooms data from the API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/api/v1/rooms/getall");
        const available = response.data.rooms.filter((room: Room) => room.status === "available");
        setAvailableRooms(available);
        setFilteredRooms(available);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = availableRooms.filter((room) =>
      room.room_id.toLowerCase().includes(query) ||
      room.type.toLowerCase().includes(query) ||
      (room.bed && typeof room.bed === 'string' ? room.bed.toLowerCase() : '').includes(query) || 
      room.description.toLowerCase().includes(query)
    );
    setFilteredRooms(filtered);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSort = (field: keyof Room) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
    const sorted = [...filteredRooms].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredRooms(sorted);
  };

  // Handle promotion code input
  const handlePromotionCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromotionCode(e.target.value);
  };

  // Apply promotion code
  const applyPromotionCode = () => {
    if (promotionCode === "LONGER888") {
      setDiscount(20);
      alert("Promotion code applied! 20% discount activated.");
      localStorage.setItem("discount", "20");
    } else {
      setDiscount(0);
      alert("Invalid promotion code.");
      localStorage.setItem("discount", "0");
    }
  };

  // Calculate pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  const handleBookRoom = (room: Room) => {
    localStorage.setItem("selectedRoom", JSON.stringify(room));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-transparent rounded-lg">
      <h1 className="text-3xl font-bold text-[#5C5C5C]">Available Rooms</h1>

      {/* 🔍 Search Field */}
      <div className="mt-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by Room ID, Type, Bed, or Description"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      {/* 💸 Promotion Code */}
      <div className="mt-4">
        <input
          type="text"
          value={promotionCode}
          onChange={handlePromotionCode}
          placeholder="Enter promotion code"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <button
          onClick={applyPromotionCode}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded"
        >
          Apply Code
        </button>
      </div>

      <div className="mt-6 overflow-auto border-[2px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th onClick={() => handleSort("room_id")} className="px-4 py-2 cursor-pointer">Room NO.</th>
              <th onClick={() => handleSort("type")} className="px-4 py-2 cursor-pointer">Room Type</th>
              <th className="px-4 py-2">Bed</th>
              <th className="px-4 py-2">Extra Bed</th>
              <th className="px-4 py-2">Description</th>
              <th onClick={() => handleSort("price")} className="px-4 py-2 cursor-pointer">Price (Net)</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room) => (
              <tr key={room.room_id} className="odd:bg-white even:bg-transparent text-[#5C5C5C] hover:bg-gray-50">
                <td className="px-4 py-2 border-y border-l border-[#5C5C5C]">{room.room_id}</td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">{room.type}</td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">{room.bed}</td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">{room.extra_bed}</td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">{room.description}</td>
                <td className="px-4 py-2 border-y border-[#5C5C5C]">
                  {discount > 0 
                    ? <span className="text-red-500 line-through mr-2">{room.price}</span> 
                    : null}
                  {(room.price * (1 - discount / 100)).toFixed(2)}
                </td>
                <td className="px-4 py-2 border-y border-r border-[#5C5C5C] text-right">
                  <button
                    onClick={() => handleBookRoom(room)}
                    className="text-center text-black rounded w-full bg-[#fcdf39]"
                  >
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📃 Pagination */}
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-500 text-white rounded">&lt;&lt;</button>
        <span className="text-3xl font-thin text-gray-600">{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-500 text-white rounded">&gt;&gt;</button>
      </div>

      <RoomBooking />
    </div>
  );
};

export default RoomDashboard;
