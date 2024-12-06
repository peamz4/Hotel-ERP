"use client"
import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import Header from "@/components/homeheader";
import FAQSection from "@/components/faq/faq";
import RoomSection from "@/components/roomtype/roomtypeswitch";
import Image from "next/image";
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

    <div className="w-full flex flex-col items-center bg-[#fffdf6] ">
      {/* Video Background */}
      <div className=" top-0 left-0 w-full h-auto mb-28 z-10">
        <video
          src="vids/compressed.mp4"
          autoPlay
          loop
          muted
          className="w-full h-4/5 object-cover absolute"
        />
        {/* Search */}
        <div className="flex flex-col h-auto items-center justify-end gap-4 px-4 py-8 w-full relative  2xl:mt-[540px] mt-[420px]">
          <div className="flex flex-wrap md:flex-nowrap md:gap-4 gap-2 md:w-[1000px] w-full bg-[#ffffff95] shadow-md p-4 md:mr-20 md:ml-20 rounded-full">
            <div className="flex items-center gap-2 bg-white px-4 py-2 flex-1 rounded-full">
              <div className="text-black text-sm md:text-base whitespace-nowrap">
                Nov 28, 24
              </div>
              <img
                className="w-px h-[30px] object-cover"
                alt="Line"
                src="https://c.animaapp.com/bZ1whJ5m/img/line-1.svg"
              />
              <div className="text-black text-sm md:text-base whitespace-nowrap">
                Nov 29, 24
              </div>
            </div>
            <div className="flex items-center bg-white px-4 py-2 flex-1 rounded-full">
              <div className="text-black text-sm md:text-base whitespace-nowrap">
                1 Adult, 0 Children
              </div>
            </div>
            <div className="flex items-center bg-white px-4 py-2 flex-1 rounded-full">
              <input
                type="text"
                defaultValue="Special Code"
                className="w-full bg-white border-none outline-none text-black text-sm md:text-base"
              />
            </div>
            <button className="flex items-center justify-center bg-[#b4a258] px-4 py-2 text-white text-sm md:text-base w-full md:w-auto rounded-full">
              Search
            </button>
          </div>
        </div>


      </div>

      {/* Header */}
      <div className="fixed z-50 w-full">
        <Header />
      </div>



      {/* Main Section */}
      <div className="flex flex-col w-full items-center justify-center gap-6 px-4 py-10 bg-[#fffdf6]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-black text-2xl md:text-3xl">
            Anantara Siam Bangkok Hotel
          </h1>
          <h2 className="text-[#b4a258] text-xl md:text-4xl font-bold">
            BANGKOK'S MOST PRESTIGIOUS ADDRESS
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 w-11/12 bg-[#fffdf6] animate-class ">
          <div className="relative w-full md:w-[40%] md:ml-32 md:mt-5 ml-10 mr-10 md:mr-0">
            <img
              className="w-full h-auto object-cover rounded-xl"
              alt="Image"
              src="https://c.animaapp.com/bZ1whJ5m/img/image-11.png"

            />
          </div>
          <div className="flex flex-col md:mt-5 w-full md:w-[50%] ">
            <p className="text-sm md:text-base leading-relaxed md:mr-32 ml-10 mr-10 md:ml-0 text-black">
              Anantara Siam Bangkok Hotel combines an unrivalled location with
              iconic design and gracious hospitality. High chandeliered
              ceilings, hand-painted silk murals, and lush gardens provide a
              feeling of sanctuary in this city that never sleeps.
              <br />
              <br />
              Venture out and explore, with the skytrain just steps away. Wander
              on foot to Bangkok's most exclusive malls, just around the corner.
              Return for award-winning dining and unwinding at Anantara Spa.
            </p>
            <div className="inline-flex items-start gap-5 mt-10 md:ml-0 ml-10">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <p className="relative w-[354px] h-[18px] mt-[-1.00px] font-normal text-black text-base">
                CHECK-IN 3:00 PM | CHECK-OUT 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className=" px-4 bg-[#fffdf6] flex justify-between xl:flex-row flex-col pt-8 animate-class">
        <div className="flex justify-center flex-col items-center  ">
          <h1 className="text-[#b4a258] text-[36px] font-bold ml-10 absolute mb-72">
            HIGHLIGHTS
          </h1>
          <ul className="list-none mt-2 text-[22px] md:text-base text-black space-y-2 pl-2 md:ml-28 ml-8 mr-10">
            <li className="text-[22px]">• A tropical oasis in the most exclusive location</li>
            <li className="text-[22px]">• 354 rooms and suites</li>
            <li className="text-[22px] text-wrap ">
              • Designed with contemporary decor blending with comfortable,
            </li>
            <li className="text-[22px] pl-4">
              elegant furnishings</li>
            <li className="text-[22px]" >• Luxurious city living with plush comforts and tropical garden views</li>
            <li className="text-[22px]">• Butler service privilege for suite bookings</li>
          </ul>
        </div>
        <div className="xl:mt-0 mt-2">
          <img src="assets/mobile.png" alt="" width={600} className="rounded-xl" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:mt-10 animate-class">
        <RoomSection />
      </div>

      {/* Location Section */}
      <div className="bg-[#fffdf6] px-4 py-10 items-center justify-center">
        <div className="text-center">
          <h2 className="text-black text-xl md:text-2xl xl:text-3xl">Location</h2>
          <h3 className="text-[#b4a258] text-lg md:text-2xl xl:text-4xl font-bold">
            THE SIGHTS AND SOUNDS OF BANGKOK
          </h3>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center ml-10 mr-10 md:ml-32 md:mr-32 gap-4 mt-8">
          <div style={{ width: "600px", height: "300px" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.262274761084!2d100.539878!3d13.740768000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec519fb0c57%3A0xc1a9f1aa0783d16a!2sAnantara%20Siam%20Bangkok%20Hotel!5e0!3m2!1sen!2sth!4v1733457526319!5m2!1sen!2sth" width="600" height="450"  loading="lazy"></iframe>
          </div>
          <div className="text-black text-center text-sm md:text-base md:w-[50%] md:ml-10">
            <p className="mt-10">Anantara Siam Bangkok Hotel</p>
            <p>155 Rajadamri Road, Bangkok 10330</p>
            <p className="mt-10">GPS: 13.7410148, 100.5400074</p>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions Section */}
      <div className="mt-24 ">
      <FAQSection />
      </div>

      {/* Footer Content */}
      <Footer />
    </div>
  );
};

export default Page;
