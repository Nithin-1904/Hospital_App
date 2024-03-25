"use client";
import React, { ChangeEvent, useState } from "react";
import { InputProps } from "./type";


const Text = ({ type, label, design,name, register,error, hint }: InputProps) => {

  return (
    <div className={`${design} flex-col`}>
      <div className="mb-2">
        <label className="text-xl font-semibold">{label}</label>
      </div>
      <input
        {...(register(name))}
        type={type}
        className="p-3 rounded-md border-slate-300 border-2 w-full"
        placeholder={hint ? hint : label}
      />
      {error && <p className="text-red-500 mb-5">{error.message}</p>}
    </div>
  );
};

export default Text;
