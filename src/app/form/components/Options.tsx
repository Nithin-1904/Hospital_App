import React from "react";
import { OptionsProps } from "./type";


const Options = ({ label, options }: OptionsProps) => {
  return (
    <div className="flex-col mb-[1rem]">
      <div className="mb-2">
        <label className="text-xl font-semibold">{label}</label>
      </div>
      <div className="item-center grid grid-cols-3">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              type="radio"
              id={option.value}
              className="w-4 h-4"
              name={label}
              value={option.value}
            />
            <label
              className="text-md p-1 m-1 font-medium text-gray-900 capitalize"
              htmlFor={option.value}
            >
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;