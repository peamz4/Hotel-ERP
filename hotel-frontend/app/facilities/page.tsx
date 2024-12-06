import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import SpaSection from "@/components/facilities/facilityswitch";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-col items-center gap-2.5 md:px-[120px] py-0 self-stretch w-full flex-[0_0_auto] bg-white flex relative">
                <div className="flex flex-col w-full max-w-[1600px] items-center gap-14 pt-12 pb-0 px-4 relative">
                    <div className="w-full text-center font-bold text-[#b4a258] text-[40px]">
                        SPA &amp; WELLNESS
                    </div>

                    <div className="flex flex-col lg:flex-row w-full max-w-[1600px] items-center relative">
                        <img
                            className="w-full max-w-[496px] h-auto object-cover md:mr-10"
                            alt="Image"
                            src="/spa.png"
                        />
                        <p className="flex-1 font-normal text-black text-base md:text-lg leading-relaxed mr-5 ml-5 md:mt-0 mt-10">
                            A luxurious spa sanctuary in the heart of Bangkok
                            <br />
                            Rooted in Thailand, the essence of Anantara’s philosophy, ‘without end’,
                            has ancient Sanskrit origins, and our renowned spa encapsulates this ethos
                            by paying tribute to Bangkok’s rich heritage and multicultural vibrancy.
                            <br />
                            <br />
                            In an opulent escape from the capital’s hustle and bustle, exotic aromas
                            soothe the senses, exquisite Thai design celebrates tradition, and our
                            exclusive service lavishes you with personal attention. Hide away in a
                            luxury treatment suite and let expert intuitive hands unwind you with
                            Thailand’s exotic wellness traditions, trusted ancient therapies from across
                            Asia and advanced Western spa wisdom.
                        </p>
                    </div>
                </div>

                <SpaSection />
            </div>



            <Footer />
        </div>
    )
}

export default Page;