"use client";
import React, { useState } from "react";


const SpaSection = () => {
  const [activeTab, setActiveTab] = useState("Programmers");

  const content = {
    Programmers: {
      title: "Rebalance and Renew",
      description: `Retreat into a city-centre sanctuary to re-discover yourself. Choose
      from a variety of relaxing and reinvigorating spa programmes that
      cater to your personal needs. Work with our expert team to select your experiences,
      from massage treatments to yoga sessions, and emerge renewed.`,
      image: "/programmers.png",
    },
    Movement: {
      title: "Squash",
      description: `Challenge a friend or loved one to an enjoyable game
      of squash on our squash court. Practise your shots in an energising 
      round of doubles. We provide all necessary equipment.`,
      image: "/movement.png",
    },
  };

  return (
    <div className="flex md:flex-row flex-col justify-between py-20">
      <div className=" relative md:w-[80%] w-full">
        <img
          className="w-[595px] md:h-[419px] h-[300px] object-cover"
          alt={activeTab}
          src={content[activeTab].image}
        />
        <button
          onClick={() => setActiveTab("Programmers")}
          className={`absolute w-[172px] top-0 left-0 
            ${activeTab === "Programmers" ? "bg-[#b4a258] text-white h-[92px]" : "bg-[#d9d9d9] text-black h-[58px]"}
            flex flex-col items-center justify-center text-xl`}
        >
          Programmers
          {activeTab === "Programmers" && (
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
          onClick={() => setActiveTab("Movement")}
          className={`absolute w-[172px] top-0 left-[172px]
            ${activeTab === "Movement" ? "bg-[#b4a258] text-white h-[92px]" : "bg-[#d9d9d9] text-black h-[58px]"}
            flex flex-col items-center justify-center text-xl`}
        >
          Movement
          {activeTab === "Movement" && (
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
      <div className="bg-[#EBEBEB] w-full">
        <p className="md:w-[600px] w-[500px] md:h-[419px] h-[300px] text-black text-xl p-10">
          <span className="text-black text-xl">
            {content[activeTab].title}
            <br />
            <br />
          </span>
          <span className="text-base">
            {content[activeTab].description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SpaSection;
