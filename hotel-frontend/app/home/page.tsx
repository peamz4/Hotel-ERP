"use client";
import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import FAQSection from "@/components/faq/faq";
import RoomSection from "@/components/roomtype/roomtypeswitch";
import BookingBar from "@/components/selecter/BookingBar";
import Header from "@/components/homeheader";
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
    <main className="bg-white w-full">
      <div className="fixed z-50">
        <Header />
      </div>

      <div className="w-full h-[800px] bg-cover flex">
        <div className="top-0 left-0 h-auto mb-28 z-0">
          <video
            src="vids/compressed.mp4"
            autoPlay
            loop
            muted
            className="w-full h-4/5 object-cover absolute"
          />

          <div className="absolute w-full h-full flex justify-center items-center bottom-52 z-10">
            <BookingBar />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container flex flex-col gap-10 pt-18 ">
          <div className="text-center">
            <h1 className="text-black text-xl md:text-3xl pb-3">
              Anantara Siam Bangkok Hotel
            </h1>
            <h2 className="text-[#b4a258] text-lg md:text-4xl font-extrabold">
              BANGKOK'S MOST PRESTIGIOUS ADDRESS
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row w-full justify-between gap-20 py-10 animate-class">
            <img
              className="h-[320px] object-cover w-auto rounded-md"
              alt="Image"
              src="https://c.animaapp.com/bZ1whJ5m/img/image-11.png"
            />

            <div className="flex flex-col justify-center ">
              <p className="text-base text-black">
                Anantara Siam Bangkok Hotel combines an unrivalled location with
                iconic design and gracious hospitality. High chandeliered
                ceilings, hand-painted silk murals, and lush gardens provide a
                feeling of sanctuary in this city that never sleeps.
                <br />
                <br />
                Venture out and explore, with the skytrain just steps away.
                Wander on foot to Bangkok's most exclusive malls, just around
                the corner. Return for award-winning dining and unwinding at
                Anantara Spa.
              </p>
              <div className="inline-flex items-start gap-5 pt-10">
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
                <p className="relative w-[354px] h-[18px] mt-[-1.00px] [font-family:'LINE_Seed_Sans_TH-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {" "}
                  CHECK-IN 3:00 PM&nbsp;&nbsp; |&nbsp;&nbsp; CHECK-OUT 12:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-10 animate-class">
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold">
                HIGHLIGHTS
              </h3>
              <ul className="list-none mt-4 text-sm md:text-base text-black space-y-2">
                <li>• A tropical oasis in the most exclusive location</li>
                <li>• 354 rooms and suites</li>
                <li>
                  • Designed with contemporary décor blending with comfortable,
                  elegant furnishings
                </li>
                <li>
                  • Luxurious city living with plush comforts and tropical
                  garden views
                </li>
                <li>• Butler service privilege for suite bookings</li>
              </ul>
            </div>

            <div className="flex gap-5 justify-center items-center">
              <img
                src="/img/mobile.png"
                alt="mobile"
                className="h-[250px] w-auto"
              />
              <div className="flex flex-col justify-between items-start gap-5 ">
                <h1 className="text-black">
                  Unlock a world of boundless luxury with the new Anantara App.
                </h1>
                <div className="flex justify-center items-start gap-5">
                  <a href="">
                    <img
                      src="/img/playstore.png"
                      alt="CTA_Playstore"
                      className="w-[150px] h-auto"
                    />
                  </a>
                  <a href="">
                    <img
                      src="/img/appstore.png"
                      alt="CTA_Appstore"
                      className="w-[150px] h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-class">
            <RoomSection />
          </div>
        </div>

        <div className="bg-[#FFFDF6]">
          <div className="container flex flex-col justify-center items-center py-20 gap-10">
            <div className="text-center">
              <h1 className="text-black text-xl md:text-3xl pb-3">Location</h1>
              <h2 className="text-[#b4a258] text-lg md:text-4xl font-extrabold">
                THE SIGHTS AND SOUNDS OF BANGKOK
              </h2>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center ml-10 mr-10 md:ml-32 md:mr-32 gap-4 mt-8">
              <div style={{ width: "600px", height: "300px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.262274761084!2d100.539878!3d13.740768000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec519fb0c57%3A0xc1a9f1aa0783d16a!2sAnantara%20Siam%20Bangkok%20Hotel!5e0!3m2!1sen!2sth!4v1733457526319!5m2!1sen!2sth" width="600" height="450" loading="lazy"></iframe>
              </div>
              <div className="text-black text-center text-sm md:text-base md:w-[50%] md:ml-10">
                <p className="mt-10">Anantara Siam Bangkok Hotel</p>
                <p>155 Rajadamri Road, Bangkok 10330</p>
                <p className="mt-10">GPS: 13.7410148, 100.5400074</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-12">
          <FAQSection />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
