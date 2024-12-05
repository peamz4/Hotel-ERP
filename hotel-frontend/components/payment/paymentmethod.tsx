"use client";
import React, { useState } from "react";

export default function PaymentMethod() {
  const [activeTab, setActiveTab] = useState("CreditCard");

  return (
    <div>
      <h2>Choose a payment method</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => setActiveTab("CreditCard")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "CreditCard" ? "#ccc" : "#fff",
          }}
        >
          Credit Card
        </button>
        <button
          onClick={() => setActiveTab("BankTransfer")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "BankTransfer" ? "#ccc" : "#fff",
          }}
        >
          Bank Transfer
        </button>
        <button
          onClick={() => setActiveTab("CashOn")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "CashOn" ? "#ccc" : "#fff",
          }}
        >
          Cash on
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {activeTab === "CreditCard" && (
          <div>
            <h3>Credit Card Payment</h3>
            <label>*Name on Card:</label>
            <input type="text" placeholder="Enter name" />
            <br />
            <label>*Card Number:</label>
            <input type="text" placeholder="Enter card number" />
            <br />
            <label>*Expiration Date:</label>
            <input type="text" placeholder="MM/YY" />
            <br />
            <label>*CVC:</label>
            <input type="text" placeholder="CVC" />
          </div>
        )}
        {activeTab === "BankTransfer" && (
          <div>
            <h3>Bank Transfer</h3>
            <img src="path-to-qr-code.png" alt="QR Code" />
            <p>10.00</p>
          </div>
        )}
        {activeTab === "CashOn" && (
          <div>
            <h3>Cash on Delivery</h3>
            <p>You will pay in cash upon delivery.</p>
          </div>
        )}
      </div>
    </div>
  );
}
