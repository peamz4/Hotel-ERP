import React, { useState, ChangeEvent, FormEvent } from "react";
import html2pdf from "html2pdf.js";

// Define types for invoice data
interface InvoiceItem {
  description: string;
  rate: number;
  hours: number;
  amount: number;
}

interface InvoiceData {
  id: string;
  customerName: string;
  payeeName: string;
  payeeAddress: string;
  payeePhone: string;
  items: InvoiceItem[];
  subTotal: number;
  discount: number;
  total: number;
}

// Define types for form data
interface FormData {
  firstName: string;
  lastName: string;
  customerId: string;
  phone: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
}

// Mock Data
const mockInvoiceData: InvoiceData = {
  id: "INV12345",
  customerName: "Bamboo pai",
  payeeName: "Bu",
  payeeAddress: "123 Elm Street, Springfield, IL",
  payeePhone: "555-1234",
  items: [
    { description: "Website Development", rate: 50, hours: 30, amount: 1500 },
    { description: "Hosting Setup", rate: 20, hours: 5, amount: 100 },
    { description: "Domain Purchase", rate: 10, hours: 1, amount: 10 },
  ],
  subTotal: 1610,
  discount: 110,
  total: 1500,
};

const mockFormData: FormData = {
  firstName: "Jane",
  lastName: "Smith",
  customerId: "CUST001",
  phone: "555-6789",
  email: "jane.smith@example.com",
  checkInDate: "2024-12-01",
  checkOutDate: "2024-12-10",
};

const InvoicingAndReceipt: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    customerId: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch invoice data based on search term
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate fetching data
    setTimeout(() => {
      if (searchTerm === "1") {
        setInvoiceData(mockInvoiceData);
      } else {
        setError("Customer or invoice not found.");
        setInvoiceData(null);
      }
      setLoading(false);
    }, 1000); // Simulate API delay
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

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit form data to the backend
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate saving data
    setTimeout(() => {
      console.log("Mock Data Submitted:", formData);
      alert("Customer data saved successfully.");
      setLoading(false);
    }, 1000); // Simulate API delay
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-2xl font-extrabold text-[#5C5C5C]">
        Invoicing & Receipt
      </h1>

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
            <table className="w-full mt-6 text-left border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-2 py-1">
                    Description
                  </th>
                  <th className="border border-gray-300 px-2 py-1">Rate</th>
                  <th className="border border-gray-300 px-2 py-1">Hours</th>
                  <th className="border border-gray-300 px-2 py-1">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-2 py-1">
                      {item.description}
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {item.rate}
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {item.hours}
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <div className="px-6 rounded-md flex flex-col gap-2">
          <form
            onSubmit={handleSearch}
            className="flex gap-4 items-center mb-4"
          >
            <input
              type="text"
              placeholder="Search by Customer ID or Email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded-md flex-1"
            />
            <button
              type="submit"
              className="bg-[#5C5C5C] text-white py-2 px-4 rounded-md hover:scale-[0.99] transition-all"
            >
              Search
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          <h2 className="text-xl font-semibold">Details</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-2 text-sm font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="customerId"
                className="mb-2 text-sm font-semibold"
              >
                Customer ID
              </label>
              <input
                type="text"
                id="customerId"
                name="customerId"
                value={formData.customerId}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-[#5C5C5C] text-white py-2 px-4 rounded-md w-full hover:scale-[0.99] transition-all"
            >
              Confirm and Save
            </button>
            {invoiceData ? (
              <button
                onClick={saveAsPDF}
                className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-600"
              >
                Save as PDF
              </button>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoicingAndReceipt;
