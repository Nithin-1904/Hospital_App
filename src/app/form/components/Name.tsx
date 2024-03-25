import React from "react";
import { InputProps } from "./type";

const Name = ({ label, design, name, register, error }: InputProps) => {
  return (
    <>
      <div className={`${design} flex-col`}>
        <div className="mb-2">
          <label className="text-xl font-semibold">{label}</label>
        </div>
        <div className={`grid grid-cols-2 gap-5 ${design}`}>
          <input
            {...register(name)}
            type="text"
            className="p-3 rounded-md border-slate-300 border-2 w-full"
            placeholder="First Name"
          />
          {error && <p className="text-red-500 mb-5">{error.message}</p>}
          <input
            {...register(name)}
            type="text"
            className="p-3 rounded-md border-slate-300 border-2"
            placeholder="Last Name"
          />
          {error && <p className="text-red-500 mb-5">{error.message}</p>}
        </div>
      </div>
    </>
  );
};

export default Name;
