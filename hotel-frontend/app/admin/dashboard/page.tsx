"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook for routing
import AdminSidebar from "@/components/admin/sidebar";
import Overview from "@/components/admin/overview";
import RoomDashboard from "@/components/admin/roomdashboard";
import Booking from "@/components/admin/roombooking";
import InvoicingReceipts from "@/components/admin/InvoicingReceipt";
import PromotionsDiscounts from "@/components/admin/PromotionsDiscounts";
import LoadingPage from "@/components/LoadingPage"; // Import the loading screen component

export default function HotelReportPage() {
    const [activeComponent, setActiveComponent] = useState("overview");
    const [isLoading, setIsLoading] = useState(true); // State for loading screen
    const router = useRouter();

    // Redirect to login if user is not logged in
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        if (isLogin !== "true") {
            alert("You are not logged in. Redirecting to login page...");
            router.push("/admin"); // Redirect to the login page if not logged in
        }
    }, [router]); // Dependency on router, runs on mount

    // Simulate loading screen for 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Stop loading after 3 seconds
        }, 1500);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

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

    // Show loading screen if loading state is true
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="flex bg-[#FFFDF6]">
            <AdminSidebar setActiveComponent={setActiveComponent} />
            <main className="flex-1 p-6">{renderContent()}</main>
        </div>
    );
}
