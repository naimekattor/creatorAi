"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import CTABanner from "../../components/cta-banner";
const faqData = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    nestedContent: "Enrollment Process for Different Courses",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors offer comprehensive support, including office hours, email assistance, and dedicated forum discussions. We're here to help you succeed!",
    nestedContent: null,
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Our courses are designed to be self-paced, giving you the flexibility to learn on your own schedule. There are no strict start or end dates.",
    nestedContent: null,
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. You can find detailed information about any required knowledge or skills on each course's dedicated page.",
    nestedContent: null,
  },
  {
    question: "Can I download the course materials for offline access?",
    answer:
      "Yes, many of our course materials, such as lectures and handouts, are available for download so you can access them offline.",
    nestedContent: null,
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it.
    // Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div className="bg-black min-h-screen sm:p-8 font-sans antialiased text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 pt-8 rounded-2xl">
        {/* Left Section - Title and description */}
        <div className="lg:w-1/3 flex flex-col justify-start p-4 lg:p-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 ">
            Frequently Asked Questions
          </h1>
          <p className="text-[#A7A7A7] text-lg mb-2">
            Still you have any questions? Contact our Team via
          </p>
          <a href="mailto:Demo@pdfresume.com" className=" hover:underline">
            Demo@pdfresume.com
          </a>
        </div>

        {/* Right Section - Accordion FAQ Items */}
        <div className="lg:w-2/3 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
            >
              {/* Question container with a toggle button */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-semibold pr-4 text-[#000000]">
                  {item.question}
                </span>
                {/* Dynamically render Plus or Minus icon based on the state */}
                {openIndex === index ? (
                  <Minus size={24} className="text-black" />
                ) : (
                  <Plus size={24} className="text-black" />
                )}
              </div>

              {/* Answer container, conditionally rendered */}
              {openIndex === index && (
                <div className="pt-4 text-[#000000]">
                  <p className="mb-4">{item.answer}</p>
                  {/* Conditionally render nested content if it exists */}
                  {item.nestedContent && (
                    <div className="bg-gray-50 p-4 mt-4 rounded-xl shadow-inner border border-gray-200">
                      <span className="text-sm font-medium text-[#A7A7A7">
                        {item.nestedContent}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <CTABanner />
      </div>
    </div>
  );
}
