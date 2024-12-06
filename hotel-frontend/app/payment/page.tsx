"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navber";
import PaymentMethod from "@/components/payment/paymentmethod";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar />
            {/* Add the PaymentMethod component here */}
            <div className="my-10">
                <PaymentMethod />
            </div>
            <Footer />
        </div>
    );
};

export default Page;
