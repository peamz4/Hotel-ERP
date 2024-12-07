import Image from 'next/image';

const AdminSidebar = ({
  setActiveComponent,
}: {
  setActiveComponent: (component: string) => void;
}) => {
  return (
    <aside className="w-64 bg-[#5C5C5C] text-white h-screen p-6 sticky top-0">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={200}
          height={120}
        />
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveComponent('overview')}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('roomDashboard')}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Available Room
            </button>
          </li>
          <li className="ml-4">
            <button
              onClick={() => setActiveComponent('roomManage')}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Room Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('invoicingReceipts')}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Invoicing & Receipts
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('promotionsDiscounts')}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Promotions & Discounts
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
