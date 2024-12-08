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

const RoomList = () => {
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("room_id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const roomsPerPage = 10;

  // Fetch rooms data from the API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/api/v1/rooms/getall");
        setAvailableRooms(response.data.rooms || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching rooms");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Search filter
  const filteredRooms = availableRooms.filter((room) =>
    room.room_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort rooms
  const sortedRooms = filteredRooms.sort((a, b) => {
    if (sortField === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else {
      const fieldA = a[sortField as keyof Room];
      const fieldB = b[sortField as keyof Room];
      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    }
  });

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = sortedRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(sortedRooms.length / roomsPerPage);

  if (loading) {
    return <div className="p-6 text-center text-xl">Loading rooms...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-transparent rounded-lg">
      <h1 className="text-3xl font-bold text-[#5C5C5C]">
        Room Management
      </h1>

      {/* Search */}
      <div className="mt-6 mb-4">
        <input
          type="text"
          placeholder="Search rooms..."
          className="px-4 py-2 w-full border border-[#5C5C5C] text-black rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sort */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-[#5C5C5C] mr-2">Sort By:</label>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="mt-4 border w-[160px] bg-[#5C5C5C] border-gray-300 rounded px-4 py-2"
          >
            <option value="room_id">Room ID</option>
            <option value="type">Room Type</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <label className="mr-2 text-[#5C5C5C]">Sort Order:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="mt-4 border w-[160px] bg-[#5C5C5C] border-gray-300 rounded px-4 py-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="mt-6 overflow-auto border-[2px] border-[#5C5C5C]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th className="px-4 py-2 ">Room NO.</th>
              <th className="px-4 py-2 ">Room Type</th>
              <th className="px-4 py-2 ">Bed</th>
              <th className="px-4 py-2 ">Extra Bed</th>
              <th className="px-4 py-2 ">Description</th>
              <th className="px-4 py-2 ">Price (Net)</th>
              <th className="px-4 py-2 ">Status</th>
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

export default RoomList;
