"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down by any amount
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` w-screen p-4 pl-12 pr-12 flex flex-row justify-between bg-[#5C5C5C] transition-all duration-300 ${
      isScrolled ? "sticky top-0 bg-opacity-100 z-50 h-[80px]" : "relative h-[120px] bg-opacity-5"
      }`}
    >
      <Image src="/logo/logo.png" alt="Logo" className="h-auto w-auto" width={1000} height={1000} />
      <div className="flex justify-center items-center gap-5 text-[18px]">
      <a href="/home" className="hover:scale-110 transition-all">HOME</a>
      <a href="/acommodation" className="hover:scale-110 transition-all">ACOMMODATION</a>
      <a href="/offers" className="hover:scale-110 transition-all">OFFERS</a>
      <a href="/facilities" className="hover:scale-110 transition-all">FACILITIES</a>
      <a href="/gallery" className="hover:scale-110 transition-all">GALLERY</a>
      </div>
    </nav>
  );
};

export default Navbar;
