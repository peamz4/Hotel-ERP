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
  const [editRoom, setEditRoom] = useState<Room | null>(null);  // State for the room being edited
  const [newRoomData, setNewRoomData] = useState<Room | null>(null);  // New room data for saving

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

  const handleEdit = (room: Room) => {
    setEditRoom(room);
    setNewRoomData(room);  // Pre-fill the form with current room data
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (newRoomData) {
      setNewRoomData({
        ...newRoomData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const saveChanges = async () => {
    if (newRoomData) {
      try {
        // Save the updated room data (API call to update room)
        await axios.put(`http://localhost:3001/api/v1/rooms/update/${newRoomData.room_id}`, newRoomData);
        // Update local room list after saving
        setAvailableRooms((prevRooms) =>
          prevRooms.map((room) =>
            room.room_id === newRoomData.room_id ? newRoomData : room
          )
        );
        setEditRoom(null);
        alert("Room updated successfully");
      } catch (err) {
        console.error(err);
        setError("Error updating room");
      }
    }
  };

  const cancelEdit = () => {
    setEditRoom(null);
  };

  if (loading) {
    return <div className="p-6 text-center text-xl">Loading rooms...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-xl text-red-500">{error}</div>;
  }

  // const handleDelete = async (room_id: string) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/api/v1/rooms/delete/${room_id}`);
  //     setAvailableRooms((prevRooms) =>
  //       prevRooms.filter((room) => room.room_id !== room_id)
  //     );
  //   } catch (err) {
  //     console.error("Error deleting room", err);
  //   }
  // };

  const handleDelete = async (room_id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/rooms/delete/${room_id}`);
      setAvailableRooms((prevRooms) => prevRooms.filter((room) => room.room_id !== room_id));
      setEditRoom(null);
      alert("Room deleted successfully");
    } catch (err) {
      console.error(err);
      setError("Error deleting room");
    }
  };

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
            className="mt-4 border w-[160px] bg-primary border-gray-300 rounded px-4 py-2"
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
            className="mt-4 border w-[160px] bg-primary border-gray-300 rounded px-4 py-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="mt-6 overflow-auto border-[2px] border-primary rounded-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary border-primary border text-[#ffffff]">
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
                className="odd:bg-white even:bg-transparent text-[#5C5C5C] hover:bg-gray-50 "
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
                  <button
                    className="text-center px-3 py-1 text-primary hover:text-white rounded-full w-full border-2 border-primary hover:bg-primaryDark"
                    onClick={() => handleEdit(room)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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

      {/* Edit Room Modal */}
      {editRoom && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-black">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Room</h2>
            <div>
              <label className="block mb-2">Room ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 mb-4 border"
                value={newRoomData?.room_id || ""}
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2">Room Type</label>
              <input
                type="text"
                name="type"
                className="w-full px-4 py-2 mb-4 border"
                value={newRoomData?.type || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <input
                type="text"
                name="description"
                className="w-full px-4 py-2 mb-4 border"
                value={newRoomData?.description || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                name="price"
                className="w-full px-4 py-2 mb-4 border"
                value={newRoomData?.price || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-row justify-between px-2">
              
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
                onClick={() => handleDelete(newRoomData?.room_id || "")}
              >
                Delete
              </button>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-primary hover:bg-primaryDark text-white rounded"
                  onClick={saveChanges}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomList;
