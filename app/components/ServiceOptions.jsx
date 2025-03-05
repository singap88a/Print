import { useState } from "react";
import { Wrench, Ruler } from "lucide-react";

export default function ServiceOptions() {
  const [installation, setInstallation] = useState(false);
  const [sizeAdjustment, setSizeAdjustment] = useState(false);

  return (
    <div className="space-y-4 py-6">
      <label
        className={`flex items-start p-4 rounded-[4px] cursor-pointer  ju ${
          installation ? "bg-[#6366F129] " : "bg-[#0000000D]"
        }`}
      >
        <input
          type="checkbox"
          checked={installation}
          onChange={() => setInstallation(!installation)}
          className="hidden  "
        />
        <div className="flex items-start gap-3 w-full">
          <div
            className={`w-5 h-5 flex items-center justify-center border rounded-md my-auto ${
              installation ? "bg-[#6366F1] border-[#6366F1]" : "border-gray-400"
            }`}
          >
            {installation && <span className="text-white text-xs">✔</span>}
          </div>
          <div className="flex-1">
            <p className="font-semibold flex items-center gap-2">
              <Wrench className="w-5 h-5 text-gray-600" />
              Installation Service
            </p>
            <p className="text-gray-600 text-sm">
              We install what has been purchased accurately and professionally.
            </p>
          </div>
          <span className="font-semibold text-gray-800">45 SAR</span>
        </div>
      </label>

      <div className="border-b border-gray-300   px-4 pb-4  text-gray-700">
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
        <div className="flex items-start gap-3 w-full">
          <div
            className={`w-5 h-5 flex items-center justify-center border rounded-md my-auto ${
              sizeAdjustment
                ? "bg-[#6366F1] border-[#6366F1] "
                : "border-gray-400"
            }`}
          >
            {sizeAdjustment && <span className="text-white text-xs">✔</span>}
          </div>
          <div className="flex-1">
            <p className="font-semibold flex items-center gap-2">
              <Ruler className="w-5 h-5 text-gray-600" />
              Size Adjustment Service
            </p>
            <p className="text-gray-600 text-sm">
              We review the dimensions of your design and make adjustments to
              ensure print quality and accuracy.
            </p>
          </div>
          <span className="font-semibold text-gray-800">15 SAR</span>
        </div>
      </label>
    </div>
  );
}
