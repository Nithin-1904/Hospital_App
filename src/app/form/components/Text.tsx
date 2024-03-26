import React from "react";
import { InputFieldProps } from "./type";

const Text = ({
  type,
  label,
  placeholder,
  name,
  register,
}: InputFieldProps) => {
  return (
    <>
      <div className="items-center">
        <div>
          <label className="text-xl font-medium">{label}</label>
        </div>
        <div className="flex gap-5">
          <input
            type={type}
            placeholder={placeholder}
            className="p-2 rounded-md border-2 w-full border-slate-300"
          />
        </div>
      </div>
    </>
  );
};

export default Text;
