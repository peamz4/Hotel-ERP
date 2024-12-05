import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className="flex w-full justify-between items-center px-12 h-14 relative bg-[#5b5b5b]">
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
                <span className="text-white">
                    Discover our world at{" "}
                </span>

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
