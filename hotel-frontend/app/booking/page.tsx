import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navber";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="px-20">
                <div>
                    <h1 className="text-[#b4a258] text-3xl sm:text-[40px] leading-normal max-md:flex max-md:justify-center">
                        YOUR BOOKING
                    </h1>
                </div>
                <div className="md:flex">
                    <div className="md:w-[300px] w-full h-[200px] mr-10 md:mb-0 mb-10">
                        <img 
                            className="w-full h-full object-cover"
                            src="/bookingimg.png"
                            alt="Booking image"/>
                    </div>
                    <div className="flex flex-col mr-10">
                        <h3>
                            Deluxe Room
                        </h3>
                        <p>Maximum 2 adults or 1 adult + 1 children</p>
                        <p className="text-[#388626]">Include Breakfast</p>
                        <p>Non-refunable</p>
                        <p>Cancellation Policy:</p>
                        <p>Reservation may not be cancelled. Full<br />payment will be forfeited.</p>
                        <p>Deposit Policy:</p>
                        <p>A deposit is not required to garantee<br />this reservation.</p>
                        <div className="flex justify-center">
                            <button
                                className="text-[#b4a258] border-2 border-[#b4a258] w-48 md:mb-0 mb-10">
                                    Additional rooms
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col md:w-[400px] shadow-lg rounded">
                            <h3 className="w-full bg-[#5C5C5C] text-white py-2 pl-2">Selection Details</h3>
                            <p className="text-[#b4a258]">CHECK - IN:</p>
                            <p>Fri 29 Nov 2024</p>
                            <p className="text-[#b4a258]">CHECK - OUT:</p>
                            <p className="">Sun 01 Dec 2024</p>
                            <p className="text-[#b4a258]">NIGHT(S):</p>
                            <p>2 Nights</p>
                            <p className="text-[#b4a258]">FOR:</p>
                            <p>2 Adults, 1 Rooms</p>
                            <div className="border-b-2"/>
                            <p>Price Breakdown</p>
                            <div className="flex flex-row justify-between">
                                <p>Fri 29 Nov 2024</p>
                                <p>THB 5,220.00</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Sun 01 Dec 2024</p>
                                <p>THB 5,220.00</p>
                            </div>
                            <div className="border-b-2"/>
                            <div className="flex flex-row justify-between">
                                <p>ROOM:</p>
                                <p>THB 10,440.00</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>TAX & FEES:</p>
                                <p>THB 1,847.80</p>
                            </div>
                            <div className="flex flex-row justify-between pb-4">
                                <p>TOTAL PRICE:</p>
                                <p>THB 12,287.88</p>
                            </div>
                        </div>
                        <div className="my-10 flex flex-row justify-between">
                            <p className="text-[#b4a258]">TOTAL PRICE</p>
                            <p>THB 12,287.88</p>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="w-full bg-[#5C5C5C] text-white py-2 pl-10">
                        <h3>Guest Details</h3>
                    </div>
                        <p className="flex justify-end md:pr-10 pr-2">*Required fields</p>
                    <div className="md:flex">
                        <div className="md:mr-5">
                            <label>*First Name :</label><br />
                            <input type="text" className="border-2 py-2 md:w-full w-full" />
                        </div>
                        <div>
                            <label>*Last Name :</label><br />
                            <input type="text" className="border-2 py-2 md:w-full w-full" />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="md:mr-5">
                            <label>*Email :</label><br />
                            <input type="email" className="border-2 py-2 md:w-full w-full" />
                        </div>
                        <div className="md:mr-5">
                            <label>*Confirm Email :</label><br />
                            <input type="email" className="border-2 py-2 md:w-full w-full" />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div>
                            <label>*Mobile Phone :</label><br />
                            <input type="text" className="border-2 py-2 md:w-[300px] w-full" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <button
                        className="bg-[#b4a258] text-white w-48 py-2"
                    >Proceed to payment

                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page;