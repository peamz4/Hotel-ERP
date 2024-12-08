"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";

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

  const images = [
    "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-siam-hotel/accommodation/details-page-2024/02-premier-room/anantara_siam_bangkok_hotel_premier_room_highlight_gallery_5_880x475.jpg",
    "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-siam-hotel/accommodation/details-page-2024/02-premier-room/anantara_siam_bangkok_hotel_premier_room_highlight_gallery_6_880x475.jpg",
    "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-siam-hotel/accommodation/details-page-2024/02-premier-room/anantara_siam_bangkok_hotel_premier_room_highlight_gallery_7_880x475.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="fixed z-50">
        <Header />
      </div>
      <img
        src="https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1920/media/minor/anantara/images/anantara-siam-hotel/accommodation/details-page-2024/01-deluxe-room/anantara_siam_bangkok_hotel_deluxe_room_banner_image_1920x600.jpg"
        alt="banner"
        className="w-full"
      />
      <div className="bg-white">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-[40px] xl:text-[60px] text-primary pt-10">
            Premier Room
          </h1>
          <div className="flex justify-between w-full">
            <div className="flex flex-col xl:flex-row w-full justify-between gap-20 py-10 animate-class">
              <div className="relative w-full mx-auto">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  ◀
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  ▶
                </button>
                {/* Dots */}
                <div className="flex justify-center mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 mx-1 rounded-full ${
                        index === currentIndex
                          ? "bg-primary"
                          : "bg-primaryLight"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center items-start gap-5 w-full">
                <h1 className="font-bold text-[30px] text-black">
                  Contemporary luxury through the views of Siam Hotel Bangkok
                </h1>
                <h2 className="font-bold text-[20px] text-primary">
                  Room left : 10
                </h2>
                <p className="text-base text-black">
                  The Premier Room has been renovated, with bright silk décor
                  adorning the space in honor of famous silk merchant and
                  businessman Jim Douglas. Thompson for helping to revive the
                  Thai silk industry. Take in the views of the surrounding
                  nature from the comfy sofas Enjoy the luxurious amenities at
                  our Siam Bangkok Hotel.
                </p>
                <h2 className="font-bold text-[20px] text-primary">
                5,670 THB
                </h2>
                <button className="px-14 py-3 bg-[#b4a258] text-white text-lg rounded-md hover:scale-[0.98] transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-10 pb-10">
            <div className="flex flex-col justify-center items-start w-full">
              <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold">
                HIGHLIGHTS
              </h3>
              <ul className="flex justify-start items-start gap-10 list-none mt-4 text-sm md:text-base text-black space-y-2">
                <div className="m-0">
                  <li>• Living area</li>
                  <li>• Flat-screen TV</li>
                  <li>• Separate bathtub and rain shower</li>
                  <li>• Free WiFi</li>
                </div>
                <div className="m-0">
                  <li>• Desk</li>
                  <li>• Nespresso coffee machine</li>
                  <li>• Luxury amenities</li>
                  <li>• Privileges at Kasara Executive Lounge</li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold">
                Room details
              </h3>
              <ul className="list-none mt-4 text-sm md:text-base text-black space-y-2">
                <li>• 42 sq.m.</li>
                <li>• Maximum Quantity 2 Adults</li>
                <li>• 2 King or Twin Beds</li>
              </ul>
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
