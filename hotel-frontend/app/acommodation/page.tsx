import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center relative bg-white w-full">
                <div className="flex flex-col items-center justify-center gap-2.5 px-5 sm:px-10 md:px-[120px] py-0 relative w-full bg-white">

                    <div className="flex flex-col md:flex-row items-start justify-center md:gap-56 pt-10 md:pt-[100px] pb-0 w-full">
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
                            A tropical sanctuary on former royal land surrounded by world-class retail and culture
                            </h2>
                            <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                            Find refuge from the city’s urban energy in our flagship urban oasis in the heart of Bangkok. Catch a glimpse of some of the most exciting chapters of recent history in an architectural landmark dating back to the 1980s, with leading art galleries, fashion boutiques and leafy Lumphini Park, often called the "Central Park of Bangkok", right on your doorstep. Stay in a historic property that saw the era’s leading architects
                            , scholars and artists collaborate to create a spectacular urban resort that gives full credit to the former royal land it sits on.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center sm:gap-[50px] px-0 py-10 md:py-[100px] w-full">
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
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-center md:gap-[450px] pb-0 w-full">
                        <div className="inline-flex flex-col items-start gap-5">
                            <h1 className="text-[#b4a258] font-bold text-3xl sm:text-[40px] leading-normal">
                            SUITES
                            </h1>
                            <img
                                className="w-20 sm:w-[165px] h-[3px]"
                                alt="Line"
                                src="https://c.animaapp.com/AgpdKMcU/img/line-7.svg"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[723px] items-start gap-6 md:mt-0 mt-10">
                            <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                            Find a serene respite in the retail jungle of central Bangkok amid tropical landscaping and sweeping golf course panoramas. Stay in iconic suites that have hosted an impressive array of dignitaries or opt for accommodation with garden views surrounded by authentic artefacts, teak furnishings and silk fabrics.
                            </p>
                            <p className="text-black font-normal text-sm sm:text-xl leading-normal">
                            Every suite booking also includes floor Butler service privilege, and Kasara Executive Lounge access along with exclusive amenities.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center sm:gap-[50px] px-0 py-10 md:py-[100px] w-full">
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
                    </div>

                </div>
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page;