import Navbar from "@/components/navbar/homenav";
import MobileNavigationBar from "@/components/navbar/mobilenavbar";

const Header = () => {
    return (
        <header className="w-full h-auto text-white flex flex-col">
            <div className="mx-auto w-full flex ">
                <div className="hidden xl:flex items-center">
                    <Navbar />
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNavigationBar />
                </div>
            </div>
        </header>
    );
}

export default Header;