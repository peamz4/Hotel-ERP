"use client";
import React, { useState } from "react";

const RoomSection = () => {
    const [activeTab, setActiveTab] = useState("Rooms");

    const content = {
        Rooms: {
            title: "Rooms",
            description1: `The hotel’s distinct design aesthetic continues through spacious, 
            sunlit rooms. Choose classic Thai style with hand-painted murals or a more contemporary take. Enhance your stay with Kasara privileges and views overlooking the RBSC golf course. `,
            description2: `• 42 sqm <br>
            • Garden, cityscape, pool or golf course views <br>
            • Marble bathroom with separate tub and rain shower`,
            image: "/rooms.png",
        },
        Suites: {
            title: "Suites",
            description1: `Suites offer a variety of set-ups to accommodate discerning guests. 
            Choose from open-plan, one or two bedroom suites. All suite guests enjoy Kasara Executive Lounge access and privileges.`,
            description2: `• 72 – 126 sqm <br>
            • Green garden or golf course views <br>
            • Marble bathroom with separate tub and rain shower`,
            image: "/logo/staylonger.png",
        },
    };

    return (
        <div className="flex md:flex-row flex-col items-center px-0 py-[100px] -mt-10">
            <div className=" relative md:w-[600px] w-[500px] md:h-[419px] h-[300px]">
                <img
                    className="w-[595px] md:h-[419px] h-[300px] object-cover"
                    alt={activeTab}
                    src={content[activeTab].image}
                />
                <button
                    onClick={() => setActiveTab("Rooms")}
                    className={`absolute w-[172px] top-0 left-0 
            ${activeTab === "Rooms" ? "bg-[#b4a258] text-white h-[92px]" : "bg-[#d9d9d9] text-black h-[58px]"}
            flex flex-col items-center justify-center text-xl`}
                >
                    Rooms
                    {activeTab === "Rooms" && (
                        <span className="mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 8.25l7.5 7.5 7.5-7.5"
                                />
                            </svg>
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("Suites")}
                    className={`absolute w-[172px] top-0 left-[172px]
            ${activeTab === "Suites" ? "bg-[#b4a258] text-white h-[92px]" : "bg-[#d9d9d9] text-black h-[58px]"}
            flex flex-col items-center justify-center text-xl`}
                >
                    Suites
                    {activeTab === "Suites" && (
                        <span className="mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 8.25l7.5 7.5 7.5-7.5"
                                />
                            </svg>
                        </span>
                    )}
                </button>
            </div>
            <div className="bg-[#EBEBEB] -ml-1">
                <p className="md:w-[600px] w-[500px] md:h-[419px] h-[400px] text-black text-xl p-10 flex flex-col">
                    <span className="text-black text-xl">
                        {content[activeTab].title}
                        <br />
                        <br />
                    </span>
                    <span className="text-base">
                        {content[activeTab].description1}
                    </span>
                    <span className="text-base mt-10"
                        dangerouslySetInnerHTML={{ __html: content[activeTab].description2 }}>
                    </span>
                    
                </p>
            </div>
        </div>
    );
};

export default RoomSection;
