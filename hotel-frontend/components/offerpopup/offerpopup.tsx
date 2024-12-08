"use client";
import React, { useState } from "react";

const HotelOffer = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleSelectClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
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
                                get <span className="text-xl">20% Discount</span>
                            </p>
                        </div>
                        <button
                            className="mr-20 ml-20 mt-10 px-5 py-3 bg-[#b4a258] text-white text-lg rounded"
                            onClick={handleSelectClick}
                        >
                            get offer!
                        </button>
                    </div>
                </div>
            </div>

            {/* Pop-up Modal */}
            {isPopupVisible && (
                <div className="fixed flex justify-center inset-0 bg-black bg-opacity-80 items-center max-md:items-center max-md:justify-center z-50">
                    <div className="bg-[#EBEBEB] shadow-lg w-[500px] h-[750px] relative">

                        <div className="flex justify-center flex-col p-2">
                            <div className="justify-center flex pt-8">
                                <h1 className="text-4xl text-yellow-600 font-bold">GET THE OFFER</h1>

                            </div>
                            <div className="m-2">
                                <img
                                    className="w-full h-[261px] object-cover rounded-xl"
                                    alt="Stay Longer Special"
                                    src="/logo/staylonger.png"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-black text-sm sm:text-base font-normal">
                                    Stay Longer Special
                                </p>
                                <p className="text-black text-sm sm:text-base h-20 font-normal mt-5">
                                    The longer you stay, the more you save. Extend your journey and luxuriate in savings of up 20%.
                                </p>
                            </div>
                            <div className="flex justify-center bg-white rounded-xl w-auto mx-20 p-2">
                            <h1 className="text-4xl text-black font-bold">LONGER888</h1>
                            </div>
                            <button
                                className="absolute top-2 right-2 text-black text-4xl"
                                onClick={handleClosePopup}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button 
                                className="flex justify-center w-[100px] py-3 bg-[#b4a258] text-white rounded mt-4"
                                onClick={() => {
                                    navigator.clipboard.writeText("LONGER888");
                                    alert("Promotion code copied to clipboard!");
                                }}
                            >
                                Get Code!
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default HotelOffer;