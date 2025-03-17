"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Switch } from "./Switch";
import { TbTruckDelivery } from "react-icons/tb";

export default function ExpressDelivery() {
  const [enabled, setEnabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "1 Day", date: "Tomorrow", price: "40 SAR" },
    { label: "2 Days", date: "13 Aug", price: "32 SAR" },
    { label: "3 Days", date: "14 Aug", price: "25 SAR" },
  ];

  return (
    <div className=" py-4  w-full  ">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium flex items-center gap-3">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="text-[16px] font-bold text-[#0F172A]">
              {" "}
              Express Delivery
            </span>
          </div>
        </div>
        <Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
      </div>

      {enabled && (
        <div className="p-3   rounded-lg bg-[#F8FAFC]">
          <RadioGroup value={selectedOption} onChange={setSelectedOption}>
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center justify-between p-2   cursor-pointer 
                          hover:bg-gray-100 transition-all"
              >
                <div className=" flex items-center gap-2">
                  <RadioGroupItem
                    value={option.label}
                    checked={selectedOption === option.label}
                    onChange={setSelectedOption}
                  />
                  <div className="">
                    <span className="text-[#6366F1] font-medium">
                      {option.label}
                    </span>
                  </div>
                </div>

                <div className="">
                  <h1 className="text-[#0F172A] text-[14px] ">{option.date}</h1>
                </div>

                <div className="">
                  <span className="font-semibold">{option.price}</span>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  );
}
