"use client";
import React, { useState } from "react";

export default function PaymentMethod() {
  const [activeTab, setActiveTab] = useState("CreditCard");

  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold mb-4">Choose a payment method</h2>
      <div className="flex gap-4">
        {/* Credit Card Button */}
        <button
          onClick={() => setActiveTab("CreditCard")}
          className={`px-4 py-2 border rounded flex items-center gap-2 ${
            activeTab === "CreditCard" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <img src="/logo/payment_credit_card.png" alt="Credit Card" className="h-6 w-6" />
          Credit Card
        </button>

        {/* Bank Transfer Button */}
        <button
          onClick={() => setActiveTab("BankTransfer")}
          className={`px-4 py-2 border rounded flex items-center gap-2 ${
            activeTab === "BankTransfer" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <img src="/logo/payment_bank_transfer.png" alt="Bank Transfer" className="h-6 w-6" />
          Bank Transfer
        </button>

        {/* Cash on Delivery Button */}
        <button
          onClick={() => setActiveTab("CashOn")}
          className={`px-4 py-2 border rounded flex items-center gap-2 ${
            activeTab === "CashOn" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <img src="/logo/payment_cash_on.png" alt="Cash on Delivery" className="h-6 w-6" />
          Cash on
        </button>
      </div>

      <div className="mt-5">
        {activeTab === "CreditCard" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Credit Card Payment</h3>
            <div className="mb-3">
              <label className="block font-medium mb-1">*Name on Card:</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium mb-1">*Card Number:</label>
              <input
                type="text"
                placeholder="Enter card number"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium mb-1">*Expiration Date:</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium mb-1">*CVC:</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        )}
        {activeTab === "BankTransfer" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Bank Transfer</h3>
            <img src="/logo/qr_code.png" alt="QR Code" className="mb-2" />
            <p className="text-gray-700">10.00</p>
          </div>
        )}
        {activeTab === "CashOn" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Cash on Delivery</h3>
            <p className="text-gray-700">You will pay in cash upon delivery.</p>
          </div>
        )}
      </div>
    </div>
  );
}
