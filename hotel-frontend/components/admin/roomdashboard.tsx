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
        const response = await axios.get(
          "http://localhost:3001/api/v1/rooms/getall"
        );
        const available = response.data.rooms.filter(
          (room: Room) => room.status === "available"
        );
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
    const filtered = availableRooms.filter(
      (room) =>
        room.room_id.toLowerCase().includes(query) ||
        room.type.toLowerCase().includes(query) ||
        (room.bed && typeof room.bed === "string"
          ? room.bed.toLowerCase()
          : ""
        ).includes(query) ||
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
    <div className="p-6 bg-transparent rounded-lg text-black">
      <h1 className="text-3xl font-bold text-[#5C5C5C]">Available Rooms</h1>

      <div className="w-full flex flex-col gap-5 pt-8">
        {/* 🔍 Search Field */}
        <div className="">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by Room ID, Type, Bed, or Description"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        {/* 💸 Promotion Code */}
        <div className="">
          <input
            type="text"
            value={promotionCode}
            onChange={handlePromotionCode}
            placeholder="Enter promotion code"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          onClick={applyPromotionCode}
          className="mt-2 w-full bg-primary hover:bg-primaryDark text-white p-2 rounded"
        >
          Apply Code
        </button>
      </div>

      <div className="border-t border-gray-300 my-7"></div>

      <div className="mt-6 overflow-hidden border-[2px] rounded-md ">
        <table className="w-full text-left border-collapse">
          <thead className="rounded-md ">
            <tr className="bg-primary border-primary border text-[#ffffff]">
              <th
                onClick={() => handleSort("room_id")}
                className="px-4 py-2 cursor-pointer"
              >
                Room NO.
              </th>
              <th
                onClick={() => handleSort("type")}
                className="px-4 py-2 cursor-pointer"
              >
                Room Type
              </th>
              <th className="px-4 py-2">Bed</th>
              <th className="px-4 py-2">Extra Bed</th>
              <th className="px-4 py-2">Description</th>
              <th
                onClick={() => handleSort("price")}
                className="px-4 py-2 cursor-pointer"
              >
                Price (Net)
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room) => (
              <tr
                key={room.room_id}
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
                  {discount > 0 ? (
                    <span className="text-red-500 line-through mr-2">
                      {room.price}
                    </span>
                  ) : null}
                  {(room.price * (1 - discount / 100)).toFixed(2)}
                </td>
                <td className="px-4 py-2 border-y border-r border-[#5C5C5C] text-right">
                  <button
                    onClick={() => handleBookRoom(room)}
                    className="text-center px-3 py-1 text-primary hover:text-white rounded-full w-full border-2 border-primary hover:bg-primaryDark"
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
      <div className="w-full flex justify-end">
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-primary hover:bg-primaryDark text-white rounded"
          >
            &lt;&lt;
          </button>
          <div className="text-2xl font-thin text-gray-600">{currentPage}</div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary hover:bg-primaryDark text-white rounded"
          >
            &gt;&gt;
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 my-7"></div>

      <RoomBooking />
    </div>
  );
};

export default RoomDashboard;
