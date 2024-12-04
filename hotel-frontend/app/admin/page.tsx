"use client";
import { useState } from "react";
import AdminSidebar from "@/components/admin/sidebar";
import Overview from "@/components/admin/overview";
import RoomDashboard from "@/components/admin/roomdashboard";
import Booking from "@/components/admin/roombooking";
import InvoicingReceipts from "@/components/admin/InvoicingReceipt";
import PromotionsDiscounts from "@/components/admin/PromotionsDiscounts";


export default function HotelReportPage() {
  const [activeComponent, setActiveComponent] = useState("overview");

  const renderContent = () => {
    switch (activeComponent) {
      case "overview":
        return <Overview />;
      case "roomDashboard":
        return <RoomDashboard />;
      case "Booking":
        return <Booking />;
      case "invoicingReceipts":
        return <InvoicingReceipts />;
      case "promotionsDiscounts":
        return <PromotionsDiscounts />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex bg-[#FFFDF6]">
      <AdminSidebar setActiveComponent={setActiveComponent} />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}
