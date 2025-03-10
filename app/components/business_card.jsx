"use client";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Link_Pages from "./Link_Pages";
import BusinessCardImages from "./BusinessCardImages";
import BusinessCardDetails from "./BusinessCardDetails";

export default function Business_card() {
  return (
    <div className=" pt-[20px]">
      <div className="px-[16px] md:px-20">
        <Link_Pages />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="md:hidden">
          <h1 className="text-[#0F172A] text-[20px] font-[600]">
            Gold Business Cards
          </h1>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-[#6366F1] w-[11px] h-[10px]" />
            ))}
            <FaRegStarHalfStroke className="text-[#6366F1] w-[11px] h-[10px]" />
            <span className="text-sm text-gray-600">(50 rating)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="sticky">
            <BusinessCardImages />
          </div>
          <div>
            <BusinessCardDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
