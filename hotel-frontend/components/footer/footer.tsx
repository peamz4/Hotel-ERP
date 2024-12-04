import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center px-12 h-20 relative bg-[#5b5b5b]">
      <Link href="/admin">
        <p className="relative text-white text-base">
          © 2024 Anantara Hotels &amp; Resorts
        </p>
      </Link>

      <img
        className="relative  h-6 object-cover"
        alt="Footer_logo"
        src="/logo/footer_logo.png"
      />

      <p className="relative text-white">
        <span className="text-white">Discover our world at </span>

        <a
          href="https://www.minorhotels.com/en"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="underline">minorhotels.com</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
