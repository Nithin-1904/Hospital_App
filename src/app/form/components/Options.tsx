import React from "react";
import { OptionsFieldProps } from "./type";

const Options = ({ label, options, name}: OptionsFieldProps) => {
  return (
    <div className="flex-col mb-[1rem] ">
      <div className="mb-2">
        <label className="text-xl font-semibold">{label}</label>
      </div>
      <div className="item-center grid grid-cols-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={option.value}
              className="w-5 h-5"
              name={name}
              value={option.value}
            />
            <label
              className="text-lg p-1 m-1 font-medium text-green-500 capitalize"
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
