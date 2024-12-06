import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import FAQSection from "@/components/faq/faq";
import RoomSection from "@/components/roomtype/roomtypeswitch";

const Page: React.FC = () => {
  return (
    <div className="w-full justify-center items-center">
      <Navbar />
      <div className="flex flex-col h-auto items-center justify-end gap-4 px-4 py-8 relative w-full bg-[url(https://c.animaapp.com/bZ1whJ5m/img/frame-32.png)] bg-cover bg-center">
        <div className="flex flex-wrap md:flex-nowrap md:gap-4 gap-2 md:w-[1000px] w-full  bg-[#ffffff80] shadow-md p-4 md:mr-20 md:ml-20 mt-32">
          <div className="flex items-center gap-2 bg-white px-4 py-2 flex-1">
            <div className="text-black text-sm md:text-base">Nov 28, 24</div>
            <img
              className="w-px h-[30px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/bZ1whJ5m/img/line-1.svg"
            />
            <div className="text-black text-sm md:text-base">Nov 29, 24</div>
        </div>

          {/* Guests */}
          <div className="flex items-center bg-white px-4 py-2 flex-1">
            <div className="text-black text-sm md:text-base">
              1 Adult, 0 Children
            </div>
          </div>

          {/* Special Code */}
          <div className="flex items-center bg-white px-4 py-2 flex-1">
            <input
              type="text"
              defaultValue="Special Code"
              className="w-full bg-white border-none outline-none text-black text-sm md:text-base"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center bg-[#b4a258] px-8 py-2 text-white text-sm md:text-base flex-1 md:flex-none md:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col w-full items-center justify-center gap-6 px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-black text-xl md:text-3xl">Anantara Siam Bangkok Hotel</h1>
          <h2 className="text-[#b4a258] text-lg md:text-4xl font-bold">
            BANGKOK'S MOST PRESTIGIOUS ADDRESS
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 w-full">
          <div className="relative w-full md:w-[50%] md:ml-32 md:mt-5 ml-10 mr-10 md:mr-0">
            <img
              className="w-full h-auto object-cover"
              alt="Image"
              src="https://c.animaapp.com/bZ1whJ5m/img/image-11.png"
            />
          </div>
          <div className="flex flex-col md:mt-5 w-full md:w-[50%]">
            <p className="text-sm md:text-base leading-relaxed md:mr-32 ml-10 mr-10 md:ml-0">
              Anantara Siam Bangkok Hotel combines an unrivalled location with iconic design and gracious hospitality. High chandeliered ceilings, hand-painted silk murals, and lush gardens provide a feeling of sanctuary in this city that never sleeps.
              <br />
              <br />
              Venture out and explore, with the skytrain just steps away. Wander on foot to Bangkok's most exclusive malls, just around the corner. Return for award-winning dining and unwinding at Anantara Spa.
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
              <p className="relative w-[354px] h-[18px] mt-[-1.00px] [font-family:'LINE_Seed_Sans_TH-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {" "}
                CHECK-IN 3:00 PM&nbsp;&nbsp; |&nbsp;&nbsp; CHECK-OUT 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="md:text-start px-4">
        <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold md:ml-[420px] ml-10 mb-5">HIGHLIGHTS</h3>
        <ul className="list-none mt-4 text-sm md:text-base text-black space-y-2 pl-2 md:ml-28 ml-8 mr-10">
          <li>• A tropical oasis in the most exclusive location</li>
          <li>• 354 rooms and suites</li>
          <li>• Designed with contemporary décor blending with comfortable, elegant furnishings</li>
          <li>• Luxurious city living with plush comforts and tropical garden views</li>
          <li>• Butler service privilege for suite bookings</li>
        </ul>
      </div>

      <div className="flex justify-center items-center w-full md:mt-10">
      <RoomSection />
      </div>
      
      {/* Location Section */}
      <div className="bg-[#fffdf6] px-4 py-10 items-center justify-center">
        <div className="text-center">
          <h2 className="text-black text-xl md:text-2xl">Location</h2>
          <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold">
            THE SIGHTS AND SOUNDS OF BANGKOK
          </h3>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center ml-10 mr-10 md:ml-32 md:mr-32 gap-4 mt-8 m-8">
          <img
            className="w-full md:w-[50%] h-auto object-cover "
            alt="Location Image"
            src="https://c.animaapp.com/bZ1whJ5m/img/image-11-1.png"
          />
          <div className="text-black text-center text-sm md:text-base md:w-[50%] md:ml-10">
            <p className="mt-10">Anantara Siam Bangkok Hotel</p>
            <p>155 Rajadamri Road, Bangkok 10330</p>
            <p className="mt-10">GPS: 13.7410148, 100.5400074</p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <FAQSection />

      {/* Footer Content */}
      <Footer />
    </div>
  );
};

export default Page;
