import React from "react";
import { InputFieldProps } from "./type";

const Name = ({ label, name, register, error }: InputFieldProps) => {
  return (
    <>
      <div className="items-center" >
        <div>
          <label className="text-xl font-medium">{label}</label>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Firstname"
            className="p-2 w-full rounded-md border-2 border-slate-300"
          />
            {error && <p className="text-red-500 mb-5">{error.message}</p>}
          <input
            type="text"
            placeholder="Lastname"
            className="p-2 rounded-md border-2 w-full border-slate-300"
          />
        </div>
      </div>
    </>
  );
};

export default Name;
