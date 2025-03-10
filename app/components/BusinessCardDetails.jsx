"use client";
import { useState } from "react";
import Express_Delivery from "./Express_Delivery/Express_Delivery";
import FileUpload from "./FileUpload";
import ServiceOptions from "./ServiceOptions";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Dropdown from "./Dropdown";  

export default function BusinessCardDetails() {
  const [size, setSize] = useState("2 x 3.5");
  const [sides, setSides] = useState("one face");
  const [color, setColor] = useState("Blue");
  const [quantity, setQuantity] = useState("50 Card");
  const [price, setPrice] = useState(35.53);

  const [files, setFiles] = useState([]);
  const [gildingColor, setGildingColor] = useState("Gold");
  const [paperType, setPaperType] = useState("Matte");
  const [edges, setEdges] = useState("Rounded");

  return (
    <div>
      <div className="hidden md:block">
        <h1 className="text-[#0F172A] text-[20px] font-[600]">
          Gold Business Cards
        </h1>
        <div className="flex items-center gap-2 mt-2">
          {[...Array(4)].map((_, index) => (
            <FaStar key={index} className="text-[#6366F1] w-[11px] h-[10px]" />
          ))}
          <FaRegStarHalfStroke className="text-[#6366F1] w-[11px] h-[10px]" />
          <span className="text-sm text-gray-600">
            (50 rating){" "}
            <span className="text-[#9B9B9B] font-[400] text-[13px] underline ">
              Questions and answers (5)
            </span>
          </span>
        </div>
      </div>

      {/* //////////Dropdown/////////// */}
      <div className="border-[#E2E8F0] border-b py-4">
        <Dropdown
          label="Size"
          options={["2 x 3.5"]}
          selected={size}
          onSelect={setSize}
        />
      </div>
      <div className="border-[#E2E8F0] border-b py-4">
        <Dropdown
          label="Sides"
          options={["one face", "double face"]}
          selected={sides}
          onSelect={setSides}
        />
      </div>
       <div className="flex items-center justify-between border-[#E2E8F0] border-b py-4">
        <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
          Color
        </label>
        <div className="flex gap-2">
          {["Blue", "Red", "Black", "Green"].map((c) => (
            <button
              key={c}
              className={`px-3 py-2 border-2 rounded-[24px] text-[14px] text-[#94A3B8] bg-[#F8FAFC] ${
                color === c
                  ? "border-[#6366F1] text-[#6366F1] bg-[#fff]"
                  : "border-gray-300"
              }`}
              onClick={() => setColor(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
       <div className="flex items-center justify-between border-[#E2E8F0] border-b py-4">
        <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
          Gilding Color
        </label>
        <div className="flex gap-3">
          {["Gold", "Silver"].map((c) => (
            <button
              key={c}
              className={`  py-2 border-2 rounded-[24px] text-[14px] text-[#94A3B8] bg-[#F8FAFC] w-[118px] ${
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
       <div className="flex items-center justify-between border-[#E2E8F0] border-b py-4">
        <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
          Paper Type
        </label>
        <div className="flex gap-3">
          {["Matte", "Glossy"].map((c) => (
            <button
              key={c}
              className={`  py-2 border-2 rounded-[24px] text-[14px] text-[#94A3B8] bg-[#F8FAFC] w-[118px] ${
                paperType === c
                  ? "border-[#6366F1] text-[#6366F1] bg-[#fff]"
                  : "border-gray-300"
              }`}
              onClick={() => setPaperType(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
       <div className="flex items-center justify-between border-[#E2E8F0] border-b py-4">
        <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
          Edges
        </label>
        <div className="flex gap-3">
          {["Sharp", "Curved"].map((c) => (
            <button
              key={c}
              className={`  py-2 border-2 rounded-[24px] text-[14px] text-[#94A3B8] bg-[#F8FAFC] w-[118px] ${
                edges === c
                  ? "border-[#6366F1] text-[#6366F1] bg-[#fff]"
                  : "border-gray-300"
              }`}
              onClick={() => setEdges(c)}
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
       <div className="border-[#E2E8F0] border-b py-3">
        <Express_Delivery />
      </div>
       <div className="border-[#E2E8F0] border-b py-3">
        <ServiceOptions />
      </div>
      {/* //////////File Upload/////////// */}
      <div className="py-3">
        <FileUpload />
      </div>
       <ul className="mt-2">
        {files.map((file, index) => (
          <li key={index} className="text-sm">
            {file.name}
          </li>
        ))}
      </ul>
       <p className="mt-4 text-[20px] font-bold text-center">{price} SAR</p>
       <button className="mt-4 bg-black text-white px-6 py-2 w-[314px] h-[44px] rounded-full mx-auto  flex justify-center items-center gap-3">
        <FaCartPlus className="text-xl" /> Add to cart
      </button>
    </div>
  );
}