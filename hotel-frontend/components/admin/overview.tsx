import React from "react";

const Overview = () => {
  return (
    <div className="p-6 bg-transparent rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#5C5C5C] text-[40px]">
          Hotel Report
        </h1>
        <select className="mt-4 border w-[130px] bg-[#5C5C5C] border-gray-300 rounded px-4 py-2">
          <option value="monthly" className="text-black">
            Monthly
          </option>
          <option value="weekly" className="text-black">
            Weekly
          </option>
          <option value="daily" className="text-black">
            Daily
          </option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8 text-black">
        <div className="bg-transparent p-4 rounded text-center border border-[#5C5C5C]">
          <p className="text-sm text-gray-500">Total Employee</p>
          <h2 className="text-3xl font-bold">642</h2>
          <p className="text-green-500 text-sm mt-1">+23.8%</p>
        </div>
        <div className="bg-transparent p-4 rounded text-center border border-[#5C5C5C]">
          <p className="text-sm text-gray-500">New Employee</p>
          <h2 className="text-3xl font-bold">153</h2>
        </div>
        <div className="bg-transparent p-4 rounded text-center border border-[#5C5C5C]">
          <p className="text-sm text-gray-500">Rating</p>
          <h2 className="text-3xl font-bold">4.7</h2>
          <p className="text-green-500 text-sm mt-1">+2%</p>
        </div>
        <div className="bg-transparent p-4 rounded text-center border border-[#5C5C5C]">
          <p className="text-sm text-gray-500">Net Income</p>
          <h2 className="text-3xl font-bold">฿492,000</h2>
        </div>
      </div>

      {/* Room Table */}
      <div className="overflow-auto mb-8">
        <table className="w-full text-left border-collapse rounded">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th className="px-4 py-2 ">Room NO.</th>
              <th className="px-4 py-2 ">Booker</th>
              <th className="px-4 py-2 ">Contact</th>
              <th className="px-4 py-2 ">Room Type</th>
              <th className="px-4 py-2 ">Check-In</th>
              <th className="px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            {[
              {
                no: "B2-301",
                booker: "John Doe",
                contact: "+66 12345678",
                type: "Deluxe",
                checkIn: "29-11-24 6:45 AM",
                status: "Busy",
              },
              {
                no: "B2-302",
                booker: "John Doe",
                contact: "+66 12345678",
                type: "Deluxe",
                checkIn: "29-11-24 6:45 AM",
                status: "Cleaning",
              },
              {
                no: "B2-303",
                booker: "-",
                contact: "-",
                type: "Deluxe",
                checkIn: "-",
                status: "Available",
              },
            ].map((room, index) => (
              <tr key={index} className="odd:bg-white even:bg-transparent text-[#5C5C5C]  ">
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.no}</td>
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.booker}</td>
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.contact}</td>
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.type}</td>
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.checkIn}</td>
                <td className="px-4 py-2 border border-[#5C5C5C]">{room.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistics and Feedback */}
      <div className="grid grid-cols-2 gap-6 text-[#5C5C5C]">
        <div className="bg-transparent p-4 rounded border border-black">
          <h3 className="font-bold mb-2">Statistics</h3>
          <p className="text-sm">Top 3 room types last month</p>
          <ul className="list-disc list-inside text-sm">
            <li>Deluxe - 60%</li>
            <li>Standard - 25%</li>
            <li>Studio - 15%</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded border border-black">
          <h3 className="font-bold mb-2">Feedback Log</h3>
          <ul className="text-sm">
            {[
              "Layla R. (4.5) Excellent services",
              "Layla R. (4.5) Excellent services",
              "Layla R. (4.5) Excellent services",
            ].map((feedback, index) => (
              <li key={index} className="mb-1">
                {feedback}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
