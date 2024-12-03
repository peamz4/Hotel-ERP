import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[100px] bg-[#5C5C5C]">
        <Image src="/asset/logo/logo.png" className="" alt="Logo" width={50} height={50} />
        <div className="flex justify-center items-center gap-5">
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
