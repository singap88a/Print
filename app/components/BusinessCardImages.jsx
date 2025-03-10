"use client";
import Image from "next/image";
import { useState } from "react";
import business_1 from "../../public/business_1.png";
import business_2 from "../../public/business_2.png";

export default function BusinessCardImages() {
  const [mainImage, setMainImage] = useState(business_1);
  const images = [business_1, business_2, business_1, business_1];

  return (
    <div className="sticky top-0">  
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
            <li>Lorim Epsum Dolore Set Amet, Concrete Edbesching Elite.</li>
            <li>
              Mr. Akomsan XA O Orna Comodo Rartrum., Festolum Volbetat Henererett
              Lacos, in Voga Nessi Veninsneh Nick.
            </li>
            <li>
              Coe Di Set Amet Sim Penilisky Empiret., Vivamos Tizitics Set Borus
              Set Indiredom.
            </li>
            <li>
              Morty Inn Lorim in the Dolore Tinysident Mobility A Sayed Nula.
            </li>
            <li>
              Bruyne Libre Nonk, Maleswada Ak Tortor in, Porta Gravida Dawi.,
              Society Putnte.
            </li>
            <li>
              Vivamos Portter, Metos Vital Empiret, Bhaicula, Neb Nunk
              Condemmintom Coam, Nick Feverira Epsum Essom in Magna.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}