import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-red-400 flex flex-col">
      <div className="px-12 py-4 flex flex-row justify-between">
        <Link href="/">
          <h1 className="navbar-brand ">Hotel ERP</h1>
        </Link>
        <div className="navbar-menu flex flex-row gap-12">
          <Link href="/about">
            <h1 className="navbar-item">About</h1>
          </Link>
          <Link href="/services">
            <h1 className="navbar-item">Services</h1>
          </Link>
          <Link href="/contact">
            <h1 className="navbar-item">Contact</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
