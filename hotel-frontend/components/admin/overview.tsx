import React, { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
  room: {
    room_id: string;
    type: string;
  };
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  checkInDate: string;
  totalPrice: number;
}

const Overview = () => {
  const [data, setData] = useState<Booking[]>([]);
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [allTimeBooked, setAllTimeBooked] = useState(0);
  const [netIncome, setNetIncome] = useState(0);

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://localhost:3001/api/v1/book/getall")
      .then(response => {
        if (response.data.message === "Bookings retrieved successfully") {
          setData(response.data.data);

          // Calculate total customers (unique customers based on email)
          const uniqueCustomers = new Set(response.data.data.map((item: { email: any; }) => item.email));
          setTotalCustomer(uniqueCustomers.size);

          // Calculate all-time bookings (total number of records)
          setAllTimeBooked(response.data.data.length);

          // Calculate net income (sum of totalPrice from all bookings)
          const totalIncome = response.data.data.reduce((sum: any, item: { totalPrice: any; }) => sum + item.totalPrice, 0);
          setNetIncome(totalIncome);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-6 bg-transparent rounded-md text-black">
      {/* Header */}
      <div className="mb-6 w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#5C5C5C]">Hotel Report</h1>
        <select className="mt-4 border w-[130px] bg-primary border-gray-300 text-white rounded-md px-5 py-2 *:">
          <option value="monthly" className="text-white">Monthly</option>
          <option value="weekly" className="text-white">Weekly</option>
          <option value="daily" className="text-white">Daily</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8 text-black">
        <div className="bg-transparent p-4 rounded-md text-center border border-primary">
          <p className="text-sm text-gray-500">Total Customer</p>
          <h2 className="text-3xl font-bold">{totalCustomer}</h2>
        </div>
        <div className="bg-transparent p-4 rounded-md text-center border border-primary">
          <p className="text-sm text-gray-500">All Time Booked</p>
          <h2 className="text-3xl font-bold">{allTimeBooked}</h2>
        </div>
        <div className="bg-transparent p-4 rounded-md text-center border border-primary">
          <p className="text-sm text-gray-500">Rating</p>
          <h2 className="text-3xl font-bold">4.7</h2>
          <p className="text-green-500 text-sm mt-1">+2%</p>
        </div>
        <div className="bg-transparent p-4 rounded-md text-center border border-primary">
          <p className="text-sm text-gray-500">Net Income</p>
          <h2 className="text-3xl font-bold">฿{netIncome.toLocaleString()}</h2>
        </div>
      </div>
      

      {/* Room Table */}
      <div className="overflow-auto mb-8">
        <table className="w-full text-left border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary border-primary border text-[#ffffff]">
              <th className="px-4 py-2 ">Room NO.</th>
              <th className="px-4 py-2 ">Booker</th>
              <th className="px-4 py-2 ">Contact</th>
              <th className="px-4 py-2 ">Room Type</th>
              <th className="px-4 py-2 ">Check-In</th>
              <th className="px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((room, index) => (
              <tr key={index} className="odd:bg-white even:bg-transparent text-[#5C5C5C]">
                <td className="px-4 py-2 border border-primary">{room.room.room_id}</td>
                <td className="px-4 py-2 border border-primary">{room.firstName} {room.lastName}</td>
                <td className="px-4 py-2 border border-primary">{room.phoneNumber}</td>
                <td className="px-4 py-2 border border-primary">{room.room.type}</td>
                <td className="px-4 py-2 border border-primary">{new Date(room.checkInDate).toLocaleString()}</td>
                <td className="px-4 py-2 border border-primary">Booked</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistics and Feedback */}
      <div className="grid grid-cols-2 gap-6 text-[#5C5C5C]">
        <div className="bg-transparent p-4 rounded-md border border-primary">
          <h3 className="font-bold mb-2">Statistics</h3>
          <p className="text-sm">Top 3 room types last month</p>
          <ul className="list-disc list-inside text-sm">
            <li>Deluxe - 60%</li>
            <li>Standard - 25%</li>
            <li>Studio - 15%</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-md border border-primary">
          <h3 className="font-bold mb-2">Feedback Log</h3>
          <ul className="text-sm">
            <li className="mb-1">Layla R. (4.5) Excellent services</li>
            <li className="mb-1">Layla R. (4.5) Excellent services</li>
            <li className="mb-1">Layla R. (4.5) Excellent services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
