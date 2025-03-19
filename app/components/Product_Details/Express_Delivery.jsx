import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function ExpressDelivery() {
  const [selected, setSelected] = useState(true);

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg ${
        selected ? " " : "bg-transparent"
      } cursor-pointer transition-all`}
      onClick={() => setSelected(!selected)}
    >
      <div
        className={`w-[31px] h-[31px] flex items-center justify-center rounded-[5px] ${
          selected ? "bg-[#6366F1] text-white" : "border border-gray-400"
        }`}
      >
        {selected && <FaCheck className="w-4 h-4" />}
      </div>

      <TbTruckDelivery className="text-[#0F172A] w-[35px] h-[35px]" />

      <span className="text-[20px] font-[600] text-[#0F172A]">
        Express Delivery
      </span>
    </div>
  );
}
