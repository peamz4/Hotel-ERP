import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#5b5b5b]">
      <div className="container px-4 md:px-12 h-full gap-5 md:h-[80px] flex flex-col md:flex-row items-center justify-between py-10">
        <Link href="/admin">
          <p className="relative text-white text-base md:text-base text-[10px] mr-2 ml-2">
            © 2024 Anantara Hotels &amp; Resorts
          </p>
        </Link>
        <img
          className="relative w-[155px] h-6 object-cover"
          alt="Footer_logo"
          src="/logo/footer_logo.png"
        />

        <p className="relative text-white md:text-base text-[10px] ml-2 mr-2">
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
    </div>
  );
};

export default Footer;
