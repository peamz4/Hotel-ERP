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
                                from <span className="text-xl">6,000 THB</span>
                            </p>
                        </div>
                        <button
                            className="mr-20 ml-20 mt-10 px-5 py-3 bg-[#b4a258] text-white text-lg rounded"
                            onClick={handleSelectClick}
                        >
                            Select
                        </button>
                    </div>
                </div>
            </div>

            {/* Pop-up Modal */}
            {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex max-md:items-center max-md:justify-center z-50">
                    <div className="bg-[#EBEBEB] shadow-lg w-[500px] h-[750px] relative">
                        {/* Header */}
                        <div className="bg-[#b4a258] flex justify-center items-center h-20">
                            <button
                                className="text-white text-4xl text-center"
                                onClick={handleClosePopup}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="bg-white pt-5 flex">
                            <h3 className="text-black text-base flex justify-center  font-medium mb-3">
                                Advance Purchase Special
                            </h3>
                            <button
                                className="text-black text-4xl flex justify-end text-center pl-5"
                                onClick={handleClosePopup}
                            >
                                &times;
                            </button>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col justify-center px-20">

                            {/* Date Selection */}
                            <div className="flex justify-center my-10">
                                <div className="flex flex-col justify-center bg-white text-center">
                                    <p className="text-sm bg-[#EBEBEB] px-5">Check in</p>
                                    <p className="text-6xl">01</p>
                                    <p className="text-sm">DEC 2024</p>
                                    <p className="text-sm ">Sunday</p>
                                </div>
                                <div className="h-full w-[2px] mx-5 border-black" />
                                <div className="flex flex-col justify-center bg-white text-center">
                                    <p className="text-sm bg-[#EBEBEB] px-5">Check out</p>
                                    <p className="text-6xl">01</p>
                                    <p className="text-sm">DEC 2024</p>
                                    <p className="text-sm">Sunday</p>
                                </div>
                            </div>

                            {/* Guest Selection */}
                            <div className="mb-5">
                                <div className="flex justify-between items-center mb-2">
                                    <p>Adults</p>
                                    <div className="flex items-center">
                                        <button className="border-2 border-black rounded-full h-6 w-6">+</button>
                                        <p className="mx-2">1</p>
                                        <button className="border-2 border-black rounded-full h-6 w-6">-</button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p>Children (4–11 yrs)</p>
                                    <div className="flex items-center">
                                        <button className="border-2 border-black rounded-full h-6 w-6">+</button>
                                        <p className="mx-2">1</p>
                                        <button className="border-2 border-black rounded-full h-6 w-6">-</button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>Infant (0–3 yrs)</p>
                                    <div className="flex items-center">
                                        <button className="border-2 border-black rounded-full h-6 w-6">+</button>
                                        <p className="mx-2">1</p>
                                        <button className="border-2 border-black rounded-full h-6 w-6">-</button>
                                    </div>
                                </div>
                            </div>

                            {/* Promotion Code */}
                            <div className="mb-5">
                                <label htmlFor="promo-code" className="block text-gray-600 text-sm">
                                    Promotion code
                                </label>
                                <input
                                    type="text"
                                    id="promo-code"
                                    placeholder="Type your code here"
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            {/* Book Now Button */}
                            <div className="flex justify-center">
                                <button className="flex justify-center w-[100px] py-3 bg-[#b4a258] text-white rounded">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelOffer;