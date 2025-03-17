"use client";
import { Star } from "lucide-react";
import { useState } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const reviews = [
  {
    name: "Fahd Al-Ali",
    review:
      "I submitted my order and was worried that I had designed it incorrectly. When I received the product, I was very happy because everything went well and due to the quality.",
    time: "17 days ago",
  },
  {
    name: "Ali Al-Rifai",
    review:
      "I received my new product, and I was very excited to see it. I was impressed by its high quality and unique design. I will definitely come back to buy more.",
    time: "2 months ago",
  },
  {
    name: "Sami Al-Jubouri",
    review:
      "I was very excited to see the result. When I received the product, my joy was indescribable! The design was amazing, and the quality exceeded my expectations. Everything was neat and organized, which made my experience extremely enjoyable.",
    time: "1 year ago",
  },
  {
    name: "Ali Al-Rifai",
    review:
      "I received my new product, and I was very excited to see it. I was impressed by its high quality and unique design. I will definitely come back to buy more.",
    time: "2 months ago",
  },
  {
    name: "Sami Al-Jubouri",
    review:
      "I was very excited to see the result. When I received the product, my joy was indescribable! The design was amazing, and the quality exceeded my expectations. Everything was neat and organized, which made my experience extremely enjoyable.",
    time: "1 year ago",
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="md:px-20 px-[16px] py-10 3xl:px-40 ">
      <h2 className="text-xl font-semibold">Most recent reviews</h2>
      <div className="flex items-center gap-2 mt-2 border-b-2 border-[#E2E8F0] py-4 mb-6">
        <Star className="text-[#6366F1] w-[20px] h-[19px]" fill="currentColor" />
        <span className="text-lg font-semibold">4.8/5.0</span>
        <span className="text-gray-500 text-sm">50 Reviews</span>
      </div>

      <ul className="space-y-4">
        {(showAll ? reviews : reviews.slice(0, 3)).map((review, index) => (
          <li key={index} className="border-b-2 border-[#E2E8F0] pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-[#6366F1]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-[16px] h-[16px]" fill="currentColor" />
                  ))}
                  <FaRegStarHalfStroke className="w-[16px] h-[16px]" fill="currentColor" />
                </div>
              </div>
              <span className="text-gray-400 text-sm ml-auto">{review.time}</span>
            </div>
            <h1 className="  text-[16px] font-[600] text-[#0F172A] pt-2">{review.name}</h1>

            <p className="text-[#0F172A] font-[400] text-[14px] py-2">{review.review}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          className="px-10 py-2 bg-[#F1F5F9] text-gray-700 rounded-[20px] hover:bg-gray-200"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `Read all ${reviews.length} reviews`}
        </button>
      </div>
    </div>
  );
}
