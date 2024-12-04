import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-[120px] bg-[#5C5C5C] p-4 pl-12 pr-12  flex flex-row justify-between">
        <Image src="/logo/logo.png" className="" alt="Logo" width={170} height={130} />
        <div className="flex justify-center items-center gap-5 text-[18px]">
          <a href="">HOME</a>
          <a href="">ACOMMODATION</a>
          <a href="">OFFERS</a>
          <a href="">FACILITIES</a>
          <a href="">GALLERY</a>
        </div>
    </nav>
  );
};

export default Navbar;
