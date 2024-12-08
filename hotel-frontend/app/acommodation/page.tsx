"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { useEffect } from "react";


const Page: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-class");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center relative bg-white w-full">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-2.5 py-0 relative w-full bg-white">
            <div className="flex flex-col lg:flex-row items-start justify-center md:gap-56 pt-32 md:pt-52 pb-0 w-full">
              <div className="inline-flex flex-col items-start gap-5">
                <h1 className="text-[#b4a258] font-bold text-3xl sm:text-[40px] leading-normal">
                  ACCOMMODATION
                </h1>
                <img
                  className="w-20 sm:w-[165px] h-[3px]"
                  alt="Line"
                  src="https://c.animaapp.com/AgpdKMcU/img/line-7.svg"
                />
              </div>
              <div className="flex flex-col w-full md:w-[723px] items-start gap-6 md:mt-0 mt-10">
                <h2 className="text-black font-bold text-xl sm:text-[28px] leading-normal">
                  A tropical sanctuary on former royal land surrounded by
                  world-class retail and culture
                </h2>
                <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                  Find refuge from the city’s urban energy in our flagship urban
                  oasis in the heart of Bangkok. Catch a glimpse of some of the
                  most exciting chapters of recent history in an architectural
                  landmark dating back to the 1980s, with leading art galleries,
                  fashion boutiques and leafy Lumphini Park, often called the
                  "Central Park of Bangkok", right on your doorstep. Stay in a
                  historic property that saw the era’s leading architects ,
                  scholars and artists collaborate to create a spectacular urban
                  resort that gives full credit to the former royal land it sits
                  on.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center sm:gap-[50px] px-0 py-10 md:py-[100px] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 w-full place-items-center">
                <div className="flex flex-col w-full shadow-lg">
                  <img
                    className="w-full h-[261px] object-cover"
                    alt="Stay Longer Special"
                    src="/img/Premier Room.png"
                  />
                  <div className="flex flex-col p-10 bg-white">
                    <p className="text-black text-sm sm:text-base font-normal">
                      Deluxe Room
                    </p>
                    <p className="text-sm py-3 text-black">
                      42 sqm / 452 sqft <br></br>
                      Maximum 2 adults or 1 adult + 1 children
                    </p>
                    <ul className="text-black list-disc pl-5">
                      <li>Classic Thai Style</li>
                      <li>Cityscape Views</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-right text-sm sm:text-base py-7">
                        from <span className="text-xl">5,220 THB</span>
                      </p>
                    </div>
                    <a href="acommodation/deluxeroom" className="px-5 py-3 bg-[#b4a258] text-white text-lg rounded text-center">
                      Select
                    </a>
                  </div>
                </div>

                <div className="flex flex-col w-full shadow-lg">
                  <img
                    className="w-full h-[261px] object-cover"
                    alt="Stay Longer Special"
                    src="/img/Deluxe Room.png"
                  />
                  <div className="flex flex-col p-10 bg-white">
                    <p className="text-black text-sm sm:text-base font-normal">
                      Premier Room
                    </p>
                    <p className="text-sm py-3 text-black">
                      42 sqm / 452 sqft <br></br>
                      Maximum 2 adults or 1 adult + 1 children
                    </p>
                    <ul className="text-black list-disc pl-5">
                      <li>Contemporary Thai Style</li>
                      <li>Cityscape</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-right text-sm sm:text-base py-7">
                        from <span className="text-xl">5,220 THB</span>
                      </p>
                    </div>
                    <a href="acommodation/kasaraclubroom" className="px-5 py-3 bg-[#b4a258] text-white text-lg rounded text-center">
                      Select
                    </a>
                  </div>
                </div>

                <div className="flex flex-col w-full shadow-lg">
                  <img
                    className="w-full h-[261px] object-cover"
                    alt="Stay Longer Special"
                    src="/img/Kasara Club Room.png"
                  />
                  <div className="flex flex-col p-10 bg-white">
                    <p className="text-black text-sm sm:text-base font-normal">
                      Kasara Club Room
                    </p>
                    <p className="text-sm py-3 text-black">
                      42 sqm / 452 sqft <br></br>
                      Maximum 2 adults or 1 adult + 1 children
                    </p>
                    <ul className="text-black list-disc pl-5">
                      <li>Club floor with golf course view</li>
                      <li>Privileges of Kasara Executive Lounge</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-right text-sm sm:text-base py-7">
                        from <span className="text-xl">6,663 THB</span>
                      </p>
                    </div>
                    <a href="acommodation/premieroom" className="px-5 py-3 bg-[#b4a258] text-white text-lg rounded text-center">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center md:gap-[450px] pb-0 w-full ">
              <div className="inline-flex flex-col items-start gap-5 animate-class">
                <h1 className="text-[#b4a258] font-bold text-3xl sm:text-[40px] leading-normal">
                  SUITES
                </h1>
                <img
                  className="w-20 sm:w-[165px] h-[3px]"
                  alt="Line"
                  src="https://c.animaapp.com/AgpdKMcU/img/line-7.svg"
                />
              </div>
              <div className="flex flex-col w-full md:w-[723px] items-start gap-6 md:mt-0 mt-10 animate-class">
                <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                  Find a serene respite in the retail jungle of central Bangkok
                  amid tropical landscaping and sweeping golf course panoramas.
                  Stay in iconic suites that have hosted an impressive array of
                  dignitaries or opt for accommodation with garden views
                  surrounded by authentic artefacts, teak furnishings and silk
                  fabrics.
                </p>
                <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                  Every suite booking also includes floor Butler service
                  privilege, and Kasara Executive Lounge access along with
                  exclusive amenities.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center sm:gap-[50px] px-0 py-10 md:py-[100px] w-full animate-class">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 w-full place-items-center">
                <div className="flex flex-col w-full shadow-lg">
                  <img
                    className="w-full h-[261px] object-cover"
                    alt="Stay Longer Special"
                    src="/img/Kasara Club Room.png"
                  />
                  <div className="flex flex-col p-10 bg-white">
                    <p className="text-black text-sm sm:text-base font-normal">
                      Kasara Club Room
                    </p>
                    <p className="text-sm py-3 text-black">
                      42 sqm / 452 sqft <br></br>
                      Maximum 2 adults or 1 adult + 1 children
                    </p>
                    <ul className="text-black list-disc pl-5">
                      <li>Club floor with golf course view</li>
                      <li>Privileges of Kasara Executive Lounge</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <p className="text-black text-right text-sm sm:text-base py-7">
                        from <span className="text-xl">6,663 THB</span>
                      </p>
                    </div>
                    <a href="acommodation/kasaraclubroom" className="px-5 py-3 bg-[#b4a258] text-white text-lg rounded text-center">
                      Select
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
