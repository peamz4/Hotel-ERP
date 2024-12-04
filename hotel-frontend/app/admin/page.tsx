"use client"
import { useState } from 'react';
import AdminSidebar from '@/components/admin/sidebar';
import Overview from '@/components/admin/overview';
import RoomDashboard from '@/components/admin/roomdashboard';

export default function HotelReportPage() {
  const [activeComponent, setActiveComponent] = useState('overview');

  const renderContent = () => {
    switch (activeComponent) {
      case 'overview':
        return <Overview />;
      case 'roomDashboard':
        return <RoomDashboard />;
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
