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
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

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
    const selectedInvoiceData: InvoiceData = {
      id: `INV-${room.room.room_id}`,
      customerName: `${room.firstName} ${room.lastName}`,
      payeeName: "Hotel Booking Inc.",
      payeeAddress: "123 Hotel Street, City, Country",
      payeePhone: "+1 (555) 123-4567",
      subTotal: room.totalPrice,
      discount: 50, // Assuming a fixed discount of $50
      total: room.totalPrice - 50, // Subtract discount from total
    };

    setInvoiceData(selectedInvoiceData);
    setCustomerDetails({
      firstName: room.firstName,
      lastName: room.lastName,
      customerId: room.room.room_id,
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

    const content = document.getElementById("invoice-section");
    if (content) {
      const originalClassName = content.className;
      content.className = "bg-white text-black";

      const options = {
        margin: 10,
        filename: `${invoiceData.id}.pdf`,
        html2canvas: { scale: 1, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .from(content)
        .set(options)
        .save()
        .finally(() => {
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

  // Handle refresh button click
  const handleRefreshClick = () => {
    setSearchTerm(""); // Clear the search term
    setFilteredData(data); // Reset to show all data
  };

  // Handle sorting by time (check-in date)
  const handleSortByTime = () => {
    const sortedData = [...filteredData].sort((a, b) =>
      new Date(a.checkInDate).getTime() > new Date(b.checkInDate).getTime() ? 1 : -1
    );
    setFilteredData(sortedData);
  };

  // Ensure the current page always has 10 rows, even if there are fewer on the last page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = [...filteredData.slice(indexOfFirstRow, indexOfLastRow)];

  // Pad with empty rows if there are fewer than 10 rows on the last page
  while (currentRows.length < rowsPerPage) {
    currentRows.push({
      room: {
        room_id: "",
        type: "",
      },
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      checkInDate: "",
      totalPrice: 0,
    });
  }

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 flex flex-col gap-5 text-black">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-3xl font-extrabold text-[#5C5C5C]">Invoicing & Receipt</h1>
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

      {/* Table with sorting and pagination */}
      <div className="overflow-auto">
        <table className="w-full text-left border-collapse rounded">
          <thead>
            <tr className="bg-[#D9D9D9] border-[#5C5C5C] border text-[#5C5C5C]">
              <th className="px-4 py-2" onClick={handleSortByTime}>
                Room NO.
              </th>
              <th className="px-4 py-2">Booker</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Room Type</th>
              <th className="px-4 py-2">Check-In</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((room, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-transparent text-[#5C5C5C] cursor-pointer hover:bg-gray-200"
                onClick={() => handleRowClick(room)}
              >
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.room.room_id || "-"}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.firstName} {room.lastName || "-"}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.phoneNumber || "-"}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.room.type || "-"}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">
                  {room.checkInDate ? new Date(room.checkInDate).toLocaleString() : "-"}
                </td>
                <td className="px-4 py-2 border border-[#5C5C5C]">Booked</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Invoice Section */}
      <div className="mt-8">
        {invoiceData ? (
          <div id="invoice-section" className="p-5 border rounded-lg bg-gray-50 text-black">
            <h3 className="font-bold">Invoice</h3>
            <p><strong>Invoice ID:</strong> {invoiceData.id}</p>
            <p><strong>Customer Name:</strong> {invoiceData.customerName}</p>
            <p><strong>Payee:</strong> {invoiceData.payeeName}</p>
            <p><strong>Address:</strong> {invoiceData.payeeAddress}</p>
            <p><strong>Phone:</strong> {invoiceData.payeePhone}</p>
            <div className="mt-4">
              <h3 className="font-bold">Amount</h3>
              <p>Subtotal: ${invoiceData.subTotal}</p>
              <p>Discount: -${invoiceData.discount}</p>
              <p>Total: ${invoiceData.total}</p>
            </div>

          </div>
        ) : (
          <p>Select a booking to view the invoice.</p>
        )}
      </div>
      <div className="mt-4">
        <button
          onClick={saveAsPDF}
          className="bg-primary text-white px-5 py-2 rounded-lg hover:scale-[0.99] transition-all"
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
};

export default InvoicingAndReceipt;
