import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import SpaSection from "@/components/facilities/facilityswitch";
import Header from "@/components/header";

const Page: React.FC = () => {
  return (
    <main>
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="flex-col items-center gap-2.5 py-0 self-stretch w-full flex-[0_0_auto] bg-white flex relative">
        <div className="container">
          <div className="flex flex-col w-full max-w-[1600px] items-center gap-14 pt-32 md:pt-40 relative">
            <div className="w-full text-center font-bold text-[#b4a258] text-[40px]">
              SPA &amp; WELLNESS
            </div>

            <div className="flex flex-col xl:flex-row w-full justify-between gap-20 py-10">
              <img
                className="h-[320px] object-cover w-auto rounded-md"
                alt="Image"
                src="/spa.png"
              />

              <div className="flex flex-col justify-center ">
                <p className="text-base text-black">
                  A luxurious spa sanctuary in the heart of Bangkok
                  <br />
                  Rooted in Thailand, the essence of Anantara’s philosophy,
                  ‘without end’, has ancient Sanskrit origins, and our renowned
                  spa encapsulates this ethos by paying tribute to Bangkok’s
                  rich heritage and multicultural vibrancy.
                  <br />
                  <br />
                  In an opulent escape from the capital’s hustle and bustle,
                  exotic aromas soothe the senses, exquisite Thai design
                  celebrates tradition, and our exclusive service lavishes you
                  with personal attention. Hide away in a luxury treatment suite
                  and let expert intuitive hands unwind you with Thailand’s
                  exotic wellness traditions, trusted ancient therapies from
                  across Asia and advanced Western spa wisdom.
                </p>
              </div>
            </div>
          </div>
          <SpaSection />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
