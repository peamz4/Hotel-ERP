"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navber";
import PaymentMethod from "@/components/payment/paymentmethod";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="px-20">
                <div>
                    <h1 className="text-[#b4a258] text-3xl sm:text-[40px] leading-normal max-md:flex max-md:justify-center">
                        PAYMENT
                    </h1>
                </div>

                {/* Add the PaymentMethod component here */}
                <div className="mt-10">
                    <PaymentMethod />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
