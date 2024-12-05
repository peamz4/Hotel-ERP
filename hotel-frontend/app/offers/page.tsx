import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import HotelOffer from "@/components/offerpopup/offerpopup";
import Header from "@/components/header";
const Page: React.FC = () => {
    return (
        <div>
            <div className="fixed z-50">
                <Header />
            </div>
            <div className="flex flex-col items-center relative bg-white w-full">
                <div className="flex flex-col items-center justify-center gap-2.5 px-5 sm:px-10 md:px-[120px] py-0 relative w-full bg-white">

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:gap-56 pt-10 md:pt-[100px] pb-0 w-full">
                        <div className="inline-flex flex-col items-start gap-5">
                            <h1 className="text-[#b4a258] font-bold text-3xl sm:text-[40px] leading-normal">
                                OFFERS
                            </h1>
                            <img
                                className="w-20 sm:w-[125px] h-[3px]"
                                alt="Line"
                                src="https://c.animaapp.com/AgpdKMcU/img/line-7.svg"
                            />
                            <div className="flex flex-col">
                                <p className="text-[#b4a258] font-normal text-3xl sm:text-[40px] leading-normal">
                                    15%
                                </p>
                                <p className="text-[#b4a258] font-normal text-base sm:text-xl">
                                    GHA DISCOVERY
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-[723px] items-start gap-6 md:mt-0 mt-10">
                            <h2 className="text-black font-bold text-xl sm:text-[28px] leading-normal">
                                Promotions and packages at Anantara Siam Bangkok Hotel
                            </h2>
                            <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                                Experience lavish sophistication at Bangkok’s most desired address.
                                Select from our popular promotions below, available exclusively at our
                                luxury hotel in Bangkok.
                            </p>
                        </div>
                    </div>

                    {/* Offers Section */}
                    {/* <div className="flex flex-col items-center justify-center sm:gap-[50px] px-0 py-10 md:py-[100px] w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full place-items-center">
                            <div className="flex flex-col w-full sm:w-[371px] shadow-lg">
                                <img
                                    className="w-full h-[261px] object-cover"
                                    alt="Stay Longer Special"
                                    src="/logo/staylonger.png"
                                />
                                <div className="flex flex-col p-5 bg-white">
                                    <p className="text-black text-sm sm:text-base font-normal">
                                        Stay Longer Special
                                    </p>
                                    <p className="text-black text-sm sm:text-base h-20 font-normal mt-5">
                                    The longer you stay, the more you save. Extend your journey and luxuriate in savings of up to 20%.
                                    </p>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="text-black text-right text-sm sm:text-base">
                                            from <span className="text-xl">6,000 THB</span>
                                        </p>
                                    </div>
                                    <button className="mr-20 ml-20 mt-10 px-5 py-3 bg-[#b4a258] text-white text-lg rounded">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <HotelOffer />
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page;