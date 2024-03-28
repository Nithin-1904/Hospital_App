import React from "react";
import { InputFieldProps } from "./type";

const Date = ({
  label,
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
            type="date"
            className="p-2 rounded-md border-2 w-full border-slate-300 dark:border-green-500 dark:border-[2.5px] dark:text-black uppercase"
            {...register(name)}
          />
        </div>
        {errorMessage && <p className="text-green-500">{errorMessage}</p>}
      </div>
    </>
  );
};

export default Date;
