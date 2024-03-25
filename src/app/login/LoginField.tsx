import React from "react";
import { LoginFieldProps } from "./type";

const FormField = ({
  type,
  placeholder,
  name,
  valueAsNumber,
  register,
  error,
  design,
}: LoginFieldProps) => {
  return (
    <>
      <input
        className={design}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <p className="text-red-500 mb-5">{error.message}</p>}
    </>
  );
};

export default FormField;
