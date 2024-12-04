import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";

const Page: React.FC = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Head offers Section */}
            <div className="flex mt-20 px-4">
                <div className="flex flex-col">
                    <h2 className="text-[#b4a258] text-lg md:text-4xl font-bold">OFFERS</h2>
                    <div className="border-t-4 border-[#b4a258] my-2 w-28"></div>
                    <h2 className="text-[#b4a258] text-lg md:text-4xl">15%</h2>
                    <h3 className="text-[#b4a258] texxt-lg md:text-2xl">GHA DISCOVERY</h3>
                </div>
                <div className="flex flex-col">
                    <h2>Promotion and Packages at Anatara Siam Bangkok Hotel</h2>
                    <p>
                        Experience lavish sophistication at Bangkok's most desired address.
                        Select from our popular promotions below, available exclusively at our luxuary
                        hotel in Bangkok. 
                    </p>
                </div>
            </div>

            {/* Main offer Section */}
            <div className="flex flex-row mt-10 px-4">
                <div className="flex flex-col">
                    <div>
                        <img
                            className=""
                            src=""
                            alt="Mock-up image"
                        />
                    </div>
                    <p>Deluxe Room</p>
                    <p>42 sqm / 452 sqft</p>
                    <p>Maximum 2 adults or 1 adult + 1 children</p>
                    <ul>
                        <li>Classic Thai Stlye</li>
                        <li>Cityscape Views</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page;