import React from "react";

export function RadioGroup({ value, onChange, children }) {
  return <div className="space-y-2">{children}</div>;
}

export function RadioGroupItem({ value, checked, onChange }) {
  return (
    <input
      type="radio"
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="w-4 h-4 text-[#6366F1] focus:ring-[#6366F1]"
    />
  );
}
