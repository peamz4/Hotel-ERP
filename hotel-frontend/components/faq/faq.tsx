"use client";
import React, { useState } from "react";

const FaqData = [
    {
        question: "What are the check-in and Check-out times at Anantara Siam Bangkok Hotel?",
        answer: "Check-in at Anantara Siam Bangkok Hotel is from 3:00 pm, and check-out is until 12:00 noon.",
    },
    {
        question: "How far is Anatara Siam Bangkok Hotel from the airport?",
        answer: "The hotel is approximately 45 minutes by car from Suvarnabhumi Airport.",
    },
    {
        question: "Is Anantara Siam Bangkok Hotel close to the BTS skytrain stations?",
        answer: "Yes, the hotel is a short walk from Rajdamri BTS Station.",
    },
    {
        question: "Is Anantara Siam Bangkok Hotel a smoking-free hotel?",
        answer: "Smoking inside rooms and public areas including restaurants are prohibited. Smoking is only allowed at the designated area.",
    },
    {
        question: "Is Anantara Siam Bangkok Hotel pet-friendly?",
        answer: "While we do love our furry little friends, we are unfortunately not equipped to cater to pets at this time."
    }
]

const FAQSection: React.FC = () => {
    const [activeIndex, SetActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        SetActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mt-5 md:px-20 px-5 py-10">
            <h3 className="text-[#b4a258] text-lg md:text-2xl font-bold text-center mb-10">
                FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="space-y-4">
                {FaqData.map((faq, index) => (
                    <div key={index} className="border-b pb-2">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left">
                            <span className="text-black text-base md:text-lg">{faq.question}</span>
                            <span className="text-black text-sm md:text-base ml-5">
                                {activeIndex === index ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 15.75l-7.5-7.5-7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 8.25l7.5 7.5 7.5-7.5"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-2 text-sm md:text-base text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;