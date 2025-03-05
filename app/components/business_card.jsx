"use client";
import { useState } from "react";
import Express_Delivery from "./Express_Delivery/Express_Delivery";
import business_1 from "../../public/business_1.png";
import business_2 from "../../public/business_2.png";
import Image from "next/image";
import FileUpload from "./FileUpload";
import ServiceOptions from "./ServiceOptions";
import { FaCartPlus, FaStar } from "react-icons/fa";
import Link_Pages from "./Link_Pages";

export default function Business_card() {
  const [size, setSize] = useState("2 x 3.5");
  const [sides, setSides] = useState("one face");
  const [color, setColor] = useState("Blue");
  const [quantity, setQuantity] = useState(50);
  const [price, setPrice] = useState(35.53);
  const [installation, setInstallation] = useState(false);
  const [sizeAdjustment, setSizeAdjustment] = useState(false);
  const [files, setFiles] = useState([]);
  const [gildingColor, setGildingColor] = useState("Gold");
  const [paperType, setPaperType] = useState("Matte");
  const [edges, setEdges] = useState("Rounded");
  const [mainImage, setMainImage] = useState(business_1);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const validFiles = uploadedFiles.filter((file) =>
      ["application/pdf", "image/png", "image/jpeg"].includes(file.type)
    );
    setFiles(validFiles);
  };

  const images = [business_1, business_2, business_1, business_1];

  return (
    <div className=" md:pt-[150px] pt-[120px] ">
      <div className="px-5 md:px-20">
        <Link_Pages />
      </div>

      <div className="max-w-5xl mx-auto p-6 ">
        <div className="md:hidden">
          <h1 className="text-[#0F172A] text-[20px] font-[600]">
            Gold Business Cards
          </h1>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="text-[#6366F1] w-[11px] h-[10px]"
              />
            ))}
            <span className="text-sm text-gray-600">(50 rating)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <Image
              src={mainImage}
              alt="Business Cards"
              className="rounded-lg w-[492px] h-[328px]"
            />
            <div className="flex gap-2 mt-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 cursor-pointer rounded-lg border-2 border-gray-300 hover:border-black"
                  onClick={() => setMainImage(image)}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <div className="mt-4">
                <h3 className="text-[15px] text-[#2E2E2E] font-[500] pt-2 pb-4">
                  Product details
                </h3>
                <ul className="list-disc pl-5 text-[12px] font-[300] text-[#000000]">
                  <li>
                    Lorim Epsum Dolore Set Amet, Concrete Edbesching Elite.
                  </li>
                  <li>
                    Mr. Akomsan XA O Orna Comodo Rartrum., Festolum Volbetat
                    Henererett Lacos, in Voga Nessi Veninsneh Nick.
                  </li>
                  <li>
                    Coe Di Set Amet Sim Penilisky Empiret., Vivamos Tizitics Set
                    Borus Set Indiredom.
                  </li>
                  <li>
                    Morty Inn Lorim in the Dolore Tinysident Mobility A Sayed
                    Nula.
                  </li>
                  <li>
                    Bruyne Libre Nonk, Maleswada Ak Tortor in, Porta Gravida
                    Dawi., Society Putnte.
                  </li>
                  <li>
                    Vivamos Portter, Metos Vital Empiret, Bhaicula, Neb Nunk
                    Condemmintom Coam, Nick Feverira Epsum Essom in Magna.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <h1 className="text-[#0F172A] text-[20px] font-[600]">
                Gold Business Cards
              </h1>
              <div className="flex items-center gap-2 mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-[#6366F1] w-[11px] h-[10px]"
                  />
                ))}
                <span className="text-sm text-gray-600">(50 rating)</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
              <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
                Size
              </label>
              <select
                className="border border-[#94A3B8] text-[#94A3B8] w-[248px] h-[36px] rounded-[20px] text-center px-4"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>2 x 3.5"</option>
              </select>
            </div>
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
              <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
                Sides
              </label>
              <select
                className="border border-[#94A3B8] text-[#94A3B8] w-[248px] h-[36px] rounded-[20px] text-center px-4"
                value={sides}
                onChange={(e) => setSides(e.target.value)}
              >
                <option>one face</option>
                <option>double face</option>
              </select>
            </div>
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
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
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
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
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
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
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
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
            <div className="flex items-center justify-between border-[#94A3B8] border-b py-4">
              <label className="block mt-4 text-[16px] font-bold text-[#0F172A]">
                Quantity
              </label>
              <select
                className="border border-[#94A3B8] text-[#94A3B8] w-[248px] h-[36px] rounded-[20px] text-center px-4"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option>50 Card</option>
              </select>
            </div>
            <div className="border-[#94A3B8] border-b py-3">
              <Express_Delivery />
            </div>
            <div className="border-[#94A3B8] border-b py-3">
              <ServiceOptions />
            </div>
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
            <p className="mt-4 text-[20px] font-bold text-center">
              {price} SAR
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 w-[314px] h-[44px] rounded-full mx-auto  flex justify-center items-center gap-3">
              <FaCartPlus className="text-xl" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
