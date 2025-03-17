import { useState } from "react";
import Image from "next/image";  
import ServiceOptions_1 from "../../../public/ServiceOptions_1.svg";
import ServiceOptions_2 from "../../../public/ServiceOptions_2.svg";

export default function ServiceOptions() {
  const [installation, setInstallation] = useState(false);
  const [sizeAdjustment, setSizeAdjustment] = useState(false);

  return (
    <div className="py-6 space-y-4">
      <label
        className={`flex items-start p-4 rounded-[4px] cursor-pointer ${
          installation ? "bg-[#6366F129]" : "bg-[#0000000D]"
        }`}
      >
        <input
          type="checkbox"
          checked={installation}
          onChange={() => setInstallation(!installation)}
          className="hidden"
        />
        <div className="flex items-start w-full gap-3">
          <div
            className={`w-5 h-5 flex items-center justify-center border rounded-md my-auto ${
              installation ? "bg-[#6366F1] border-[#6366F1]" : "border-gray-400"
            }`}
          >
            {installation && <span className="text-xs text-white">✔</span>}
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-2 font-semibold">
               <Image
                src={ServiceOptions_1}
                alt="Installation Service"
                className="w-[20px] h-[20px]"
              />
              Installation Service
            </p>
            <p className="text-sm text-gray-600">
              We install what has been purchased accurately and professionally.
            </p>
          </div>
          <span className="my-auto font-semibold text-gray-800">45 SAR</span>
        </div>
      </label>

      <div className="px-4 pb-4 text-gray-700 border-b border-gray-300">
        <p>
          • Delivery and installation are estimated for{" "}
          <span className="font-semibold">Riyadh</span>
        </p>
      </div>

      <label
        className={`flex items-start p-4 rounded-[4px] cursor-pointer ${
          sizeAdjustment ? "bg-[#6366F129]" : "bg-[#0000000D]"
        }`}
      >
        <input
          type="checkbox"
          checked={sizeAdjustment}
          onChange={() => setSizeAdjustment(!sizeAdjustment)}
          className="hidden"
        />
        <div className="flex items-start w-full gap-3">
          <div
            className={`w-5 h-5 flex items-center justify-center border rounded-md my-auto ${
              sizeAdjustment
                ? "bg-[#6366F1] border-[#6366F1]"
                : "border-gray-400"
            }`}
          >
            {sizeAdjustment && <span className="text-xs text-white">✔</span>}
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-2 font-semibold">
               <Image
                src={ServiceOptions_2}
                alt="Size Adjustment Service"
                className="w-[20px] h-[20px]"
              />
              Size Adjustment Service
            </p>
            <p className="text-sm text-gray-600">
              We review the dimensions of your design and make adjustments to
              ensure print quality and accuracy.
            </p>
          </div>
          <span className="my-auto font-semibold text-gray-800">15 SAR</span>
        </div>
      </label>
    </div>
  );
}