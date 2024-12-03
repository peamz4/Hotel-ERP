import Navbar from "@/components/navbar/navber";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen">
        <div className="p-6">
          <h1 className="">Test Page</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
