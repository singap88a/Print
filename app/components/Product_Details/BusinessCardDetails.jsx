"use client";
import { useState } from "react";
import Express_Delivery from "./Express_Delivery";
import FileUpload from "./FileUpload";
import ServiceOptions from "./ServiceOptions";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import Image from "next/image";
import Size_1 from "../../../public/Product_details/Size_1.svg";
import Size_2 from "../../../public/Product_details/Size_2.svg";

import Edges_1 from "../../../public/Product_details/Edges_1.svg";
import Edges_2 from "../../../public/Product_details/Edges_2.svg";
import PaperTypeSelector from "./PaperTypeSelector";
import { FaRegCommentDots, FaRegUser } from "react-icons/fa";

export default function BusinessCardDetails() {
  const [color, setColor] = useState("Blue");
  const [quantity, setQuantity] = useState("50 Card");
  const [price] = useState(35.53);

  const [files] = useState([]);
  const [gildingColor, setGildingColor] = useState("Gold");
  const [edges, setEdges] = useState("Rounded");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div>
      <div className="hidden md:block border-[#E2E8F0] border-b pb-6">
        <h1 className="text-[#0F172A] text-[24px] font-[600]">
          Gold business cards
        </h1>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center bg-[#FBF3EA] text-[#f59f0bd1] px-2 py-1 rounded-full text-sm font-semibold">
            <FaStar className="w-[14px] h-[14px] mr-1" />
            4.8
          </div>

          <div className="flex items-center bg-[#EDF0F8] text-[#3A4980] px-2 py-1 rounded-full text-sm font-semibold">
            <FaRegCommentDots className="w-[14px] h-[14px] mr-1" />
            67 Reviews
          </div>

          <div className="flex items-center bg-[#EAF7FB] text-[#3B99D4] px-2 py-1 rounded-full text-sm font-semibold">
            <FaRegUser className="w-[14px] h-[14px] mr-1" />
            Questions and answers (5)
          </div>
        </div>
      </div>

      {/* //////////Size/////////// */}
      <div className="border-[#E2E8F0] border-b  pb-8">
        <label className="block text-[20px] font-[600] text-[#0F172A] py-4">
          Size
        </label>
        <div className="flex gap-3 mt-2">
          {[
            { size: "2 x 3.5", text: "Standard" },
            { size: "5.5 x 3.5", text: "Square" },
          ].map(({ size, text }) => (
            <button
              key={size}
              className={`flex flex-col items-start w-[197px] h-[164px] border-2 rounded-[13px] text-[14px]   p-3 ${
                selectedSize === size
                  ? "border-[#6366F1] text-[#6366F1] bg-[#fff]"
                  : "border-gray-300 text-[#94A3B8]"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              <Image
                src={size === "2 x 3.5" ? Size_1 : Size_2}
                alt={size}
                className="self-center mb-2"
              />

              <span className="self-start     text-left font-[600] text-[16px]">
                {text}
              </span>
              <span
                className={`text-[14px] font-[400] text-left self-start  ${
                  selectedSize === size ? "text-[#6366F1] " : "text-[#0F172A]"
                }`}
              >
                {size}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* //////////Color/////////// */}
      <div className="border-[#E2E8F0] border-b pb-8  ">
        <label className="block text-[20px] font-[600] text-[#0F172A] py-4">
          Color
        </label>
        <div className="flex justify-center gap-4">
          {["Blue", "Red", "Black", "Green"].map((c) => (
            <div className="flex flex-col items-center" key={c}>
              <div
                className={`p-[6px] rounded-full border-[3px] cursor-pointer ${
                  color === c
                    ? "border-[#6366F1] shadow-lg"
                    : "border-[#D7DADD]"
                }`}
                onClick={() => setColor(c)}
              >
                <div
                  className="h-[37px] w-[37px] rounded-full"
                  style={{ backgroundColor: c.toLowerCase() }}
                />
              </div>
              {color === c && (
                <div className="mt-1 text-[14px] font-medium text-[#0F172A]">
                  {c}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* //////////Paper Type/////////// */}
      <PaperTypeSelector />

      {/* //////////Edges/////////// */}
      <div className="border-[#E2E8F0] border-b pb-8">
        <label className="block text-[20px] font-[600] text-[#0F172A] py-4">
          Edges
        </label>
        <div className="flex flex-col gap-3 md:flex-row">
          {["Sharp", "Curved"].map((c) => (
            <button
              key={c}
              className={`flex items-center gap-5 px-2 py-2 border-2 rounded-[13px] w-full ${
                edges === c ? "border-[#6366F1] bg-[#fff]" : "border-gray-300"
              }`}
              onClick={() => setEdges(c)}
            >
              {/* الصورة */}
              <Image
                src={c === "Sharp" ? Edges_1 : Edges_2}
                alt={c}
                className="w-[77px] h-[77px]"
              />

              {/* النص، ويتم تلوينه إذا كان محددًا */}
              <span
                className={`mt-2 text-[16px] font-[600] ${
                  edges === c ? "text-[#6366F1]" : "text-[#1E2939]"
                }`}
              >
                {c}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* //////////Gilding Color/////////// */}
      <div className="flex items-center justify-between border-[#E2E8F0] border-b py-4">
        <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
          Gilding Color
        </label>
        <div className="flex gap-3">
          {["Gold", "Silver"].map((c) => (
            <button
              key={c}
              className={`py-2 border-2 rounded-[24px] text-[14px] text-[#94A3B8] bg-[#F8FAFC] w-[118px] ${
                gildingColor === c
                  ? "border-[#6366F1] text-[#6366F1] bg-[#fff]"
                  : "border-gray-300"
              }`}
              onClick={() => setGildingColor(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* //////////Quantity Dropdown/////////// */}
      <div className="border-[#E2E8F0] border-b py-4">
        <Dropdown
          label="Quantity"
          options={["50 Card", "100 Card", "200 Card"]}
          selected={quantity}
          onSelect={setQuantity}
        />
      </div>

      {/* //////////Express Delivery/////////// */}
      <div className="border-[#E2E8F0] border-b py-3">
        <Express_Delivery />
      </div>

      {/* //////////Service Options/////////// */}
      <div className="border-[#E2E8F0] border-b py-3">
        <ServiceOptions />
      </div>

      {/* //////////File Upload/////////// */}
      <div className="py-3">
        <FileUpload />
      </div>

      {/* //////////Uploaded Files/////////// */}
      <ul className="mt-2">
        {files.map((file, index) => (
          <li key={index} className="text-sm">
            {file.name}
          </li>
        ))}
      </ul>

      {/* //////////Price/////////// */}
      <p className="mt-4 text-[20px] font-bold text-center">{price} SAR</p>

      {/* //////////Add to Cart Button/////////// */}
      <button className="mt-4 bg-black text-white px-6 py-2 w-[314px] h-[44px] rounded-full mx-auto flex justify-center items-center gap-3">
        <FaCartPlus className="text-xl" /> Add to cart
      </button>
    </div>
  );
}
