"use client";
import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <div className="sticky  top-0">
      <nav
        className={`w-screen h-[140px] p-4 flex flex-row justify-center transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-[#333333]" : "bg-[#5C5C5C]"
        }`}
        style={{ height: isOpen ? "140px" : "80px" }}
      >
        <Image
          src="/logo/logo.png"
          alt="Logo"
          className="h-auto w-auto"
          width={1000}
          height={1000}
        />

        <div
          className="text-primary p-4 text-2xl font-bold absolute right-1 top-1"
          onClick={toggleMenu}
        >
          ☰
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
