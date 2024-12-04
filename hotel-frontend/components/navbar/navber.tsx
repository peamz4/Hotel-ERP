"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#5C5C5C] px-4 md:px-12 h-14 flex items-center justify-between">
      {/* Logo */}
      <Image src="/logo/logo.png" alt="Logo" width={70} height={40} />

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-white md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <div
        className={`navbar-menu ${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row gap-4 md:gap-14 text-white absolute md:static top-14 left-0 right-0 bg-[#5C5C5C] md:bg-transparent z-10`}
      >
        <Link href="/home">
          <p className="navbar-item hover:underline underline-offset-8 px-4 py-2 md:px-0 md:py-0">HOME</p>
        </Link>
        <Link href="/">
          <p className="navbar-item hover:underline underline-offset-8 px-4 py-2 md:px-0 md:py-0">ACCOMMODATION</p>
        </Link>
        <Link href="/offers">
          <p className="navbar-item hover:underline underline-offset-8 px-4 py-2 md:px-0 md:py-0">OFFERS</p>
        </Link>
        <Link href="/">
          <p className="navbar-item hover:underline underline-offset-8 px-4 py-2 md:px-0 md:py-0">FACILITIES</p>
        </Link>
        <Link href="/">
          <p className="navbar-item hover:underline underline-offset-8 px-4 py-2 md:px-0 md:py-0">GALLERY</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

