import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

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

interface InvoiceData {
  id: string;
  customerName: string;
  payeeName: string;
  payeeAddress: string;
  payeePhone: string;
  subTotal: number;
  discount: number;
  total: number;
}

const InvoicingAndReceipt: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Booking[]>([]);
  const [filteredData, setFilteredData] = useState<Booking[]>([]); // State for filtered data
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [allTimeBooked, setAllTimeBooked] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    customerId: "",
    email: "",
  });

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:3001/api/v1/book/getall")
      .then((response) => {
        if (response.data.message === "Bookings retrieved successfully") {
          setData(response.data.data);
          setFilteredData(response.data.data); // Initially, show all data

          // Calculate total customers (unique customers based on email)
          const uniqueCustomers = new Set(
            response.data.data.map((item: Booking) => item.email)
          );
          setTotalCustomer(uniqueCustomers.size);

          // Calculate all-time bookings (total number of records)
          setAllTimeBooked(response.data.data.length);

          // Calculate net income (sum of totalPrice from all bookings)
          const totalIncome = response.data.data.reduce(
            (sum: number, item: Booking) => sum + item.totalPrice,
            0
          );
          setNetIncome(totalIncome);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle row click to select customer and display their invoice details
  const handleRowClick = (room: Booking) => {
    // Mock invoice data for selected customer
    const selectedInvoiceData: InvoiceData = {
      id: `INV-${room.room.room_id}`,
      customerName: `${room.firstName} ${room.lastName}`,
      payeeName: "Hotel Booking Inc.",
      payeeAddress: "123 Hotel Street, City, Country",
      payeePhone: "+1 (555) 123-4567",
      subTotal: room.totalPrice,
      discount: 50, // Example discount, you can modify this logic
      total: room.totalPrice - 50, // Subtract discount from total
    };

    setInvoiceData(selectedInvoiceData);
    setCustomerDetails({
      firstName: room.firstName,
      lastName: room.lastName,
      customerId: room.room.room_id, // Assuming room_id is the customer ID here
      email: room.email,
    });
  };

  // Handle customer details input changes
  const handleCustomerDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save the current invoice as PDF
  const saveAsPDF = () => {
    if (!invoiceData) return;

    // Get the content to be printed as PDF
    const content = document.getElementById("invoice-section");

    if (content) {
      // Save the original className
      const originalClassName = content.className;

      // Change the className to your desired values before saving as PDF
      content.className = "bg-white text-black";

      const options = {
        margin: 10,
        filename: `${invoiceData.id}.pdf`, // Use invoice ID as filename
        html2canvas: { scale: 1, useCORS: true }, // Reduce scale for fitting content in one page
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Generate PDF using html2pdf
      html2pdf()
        .from(content)
        .set(options)
        .save()
        .finally(() => {
          // Revert the className back to its original value
          content.className = originalClassName;
        });
    }
  };

  // Handle search button click
  const handleSearchClick = () => {
    const filtered = data.filter(
      (room) =>
        room.room.room_id.includes(searchTerm) ||
        room.email.includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleRefreshClick = () => {
    setSearchTerm(""); // Clear the search term
    setFilteredData(data); // Reset to show all data
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-3xl font-extrabold text-[#5C5C5C]">
          Invoicing & Receipt
        </h1>
        <form className="">
          <div className="flex gap-2 w-[500px]">
            <input
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg p-2 w-full text-black"
            />
            <button
              type="button"
              onClick={handleSearchClick}
              className="bg-primary text-white px-5 py-2 rounded-lg hover:scale-[0.99] transition-all"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleRefreshClick}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:scale-[0.99] transition-all"
            >
              Refresh
            </button>
          </div>
        </form>
      </div>

      {/* Table and other content */}
      <div className="overflow-auto">
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
            {filteredData.map((room, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-transparent text-[#5C5C5C] cursor-pointer hover:bg-gray-200"
                onClick={() => handleRowClick(room)}
              >
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.room.room_id}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.firstName} {room.lastName}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.phoneNumber}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.room.type}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {new Date(room.checkInDate).toLocaleString()}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">Booked</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-300 my-4"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#5C5C5C]">
        {/* Invoice Section */}
        {invoiceData ? (
          <div
            id="invoice-section"
            className="bg-gray-100 p-6 shadow-md rounded-md"
          >
            <h2 className="text-xl font-semibold">Invoice</h2>
            <p>#{invoiceData.id}</p>
            <div className="mt-4">
              <h3 className="font-bold">Billed To:</h3>
              <p>{invoiceData.customerName}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">Pay To:</h3>
              <p>{invoiceData.payeeName}</p>
              <p>{invoiceData.payeeAddress}</p>
              <p>{invoiceData.payeePhone}</p>
            </div>
            <div className="mt-4">
              <p>Sub-Total: ${invoiceData.subTotal}</p>
              <p>Discount: ${invoiceData.discount}</p>
              <p className="font-bold">Total: ${invoiceData.total}</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-[700px] border-2 border-gray-300 border-dashed rounded-md flex justify-center items-center">
            <p>No invoice to display.</p>
          </div>
        )}

        {/* Form Section */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#5C5C5C] pb-5">Detail</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                value={customerDetails.firstName}
                onChange={handleCustomerDetailsChange}
                name="firstName"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                value={customerDetails.lastName}
                onChange={handleCustomerDetailsChange}
                name="lastName"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Customer ID</label>
              <input
                type="text"
                value={customerDetails.customerId}
                onChange={handleCustomerDetailsChange}
                name="customerId"
                className="border rounded-lg p-2 w-full"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                value={customerDetails.email}
                onChange={handleCustomerDetailsChange}
                name="email"
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>

          {/* Button to generate invoice PDF */}
          <button
            onClick={saveAsPDF}
            className="mt-6 w-full bg-primary text-white p-3 rounded-lg hover:scale-[0.99] transition-all"
          >
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicingAndReceipt;
