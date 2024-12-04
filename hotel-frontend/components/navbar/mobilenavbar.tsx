"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", name: "HOME" },
  { href: "/acommodation", name: "ACOMMODATION" },
  { href: "/offers", name: "OFFERS" },
  { href: "/facilities", name: "FACILITIES" },
  { href: "/gallery", name: "GALLERY" },
];

const MobileNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav className="w-screen h-[140px] bg-[#5C5C5C] p-4 flex flex-row justify-center">
        <Image
          src="/logo/logo.png"
          className=""
          alt="Logo"
          width={200}
          height={120}
        />
        <div>
        <button
        className="text-primary p-4 text-2xl font-bold absolute right-1 top-1" 
        onClick={toggleMenu}
      >
        ☰
      </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-primaryBackground shadow-lg`}
      >
        <button
          className="absolute top-4 right-4 text-primary p-4"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav className="flex flex-col gap-4 mt-16 p-8 bg-primaryBackground font-line-bold">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`${
                link.href === pathname &&
                "text-lime border-b-2 text-primary border-primary"
              }
                                font-line-Regular text-md hover:text-primaryDark transition-all
                                `}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileNavigationBar;
