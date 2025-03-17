"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is this FAQ section for?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up and follow the on-screen instructions to begin using the platform.",
  },
  {
    question: "Where can I find more information?",
    answer:
      "You can check our documentation or contact support for further details.",
  },
  {
    question: "Can I customize this platform?",
    answer: "Yes! The platform allows full customization to suit your needs.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email or through our contact form.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:px-20 px-[16px] py-10 3xl:px-40">
      <h2 className="text-2xl font-semibold mb-4">Business Card FAQs</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#D2D6DB]   overflow-hidden"
          >
            <button
              className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                openIndex === index ? "bg-[#ececfd]" : "bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-2   text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
