"use client";

import { useState } from "react";

interface BookingBarProps {}

const BookingBar: React.FC<BookingBarProps> = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [specialCode, setSpecialCode] = useState<string>("");

  const handleSearch = (): void => {
    alert(`Searching for: 
      Start Date: ${startDate},
      End Date: ${endDate},
      Adults: ${adults},
      Children: ${children},
      Special Code: ${specialCode}`);
  };

  return (
    <div className="flex items-center flex-wrap bg-[#ffffff80] rounded-md shadow-md p-4 gap-3 absolute bottom-10 mx-5">
      {/* Start Date */}
      <div className="flex flex-col lg:flex-row items-center space-x-2 bg-white rounded-md overflow-hidden text-black w-full md:w-auto">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-white px-4 py-2 "
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-white px-4 py-2"
        />
      </div>

      {/* Guests */}
      <div className="flex flex-col lg:flex-row items-center  bg-white rounded-md overflow-hidden w-full md:w-auto">
        <select
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="bg-white px-4 py-2 text-black"
        >
          <option value={1}>1 Adult</option>
          <option value={2}>2 Adults</option>
        </select>
        <select
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="bg-white px-4 py-2 text-black"
        >
          <option value={0}>0 Children</option>
          <option value={1}>1 Child</option>
        </select>
      </div>

      {/* Special Code */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Special code"
          value={specialCode}
          onChange={(e) => setSpecialCode(e.target.value)}
          className="border rounded-lg bg-white px-4 py-2"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-[#b4a258] rounded-md px-8 py-2 text-white hover:scale-[0.99] transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default BookingBar;
