import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="flex w-full justify-between items-center px-12 h-14 relative bg-[#5b5b5b]">

            <p className="relative text-white text-base">
                © 2024 Anantara Hotels &amp; Resorts
            </p>

            <img
                className="relative w-[143px] h-6 object-cover"
                alt="Footer_logo"
                src="/logo/footer_logo.png"
            />

            <p className="relative text-white">
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
