import React from "react";
import { InputFieldProps } from "./type";

const Text = ({
  label,
  placeholder,
  valueAsNumber,
  name,
  register,
  errorMessage
}: InputFieldProps) => {
  return (
    <>
      <div className="items-center">
        <div>
          <label className="text-xl font-medium">{label}</label>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder={placeholder}
            className="p-2 rounded-md border-2 w-full border-slate-300 dark:border-green-500 dark:border-[2.5px] dark:text-black"
            {...register(name)}
          />
        </div>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};

export default Text;
