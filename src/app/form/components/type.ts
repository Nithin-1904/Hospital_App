import { FieldError, UseFormRegister } from "react-hook-form";

// export type ValidElements =
//   | "registration_date"
//   | "id"
//   | "doctor_name"
//   | "department"
//   | "patient_name"
//   | "dob"
//   | "age"
//   | "gender"
//   | "father_name"
//   | "mother_name";

export interface FormElements {
  registration_date: Date;
  id: number;
  department: string;
  dob: string;
  age: number;
  gender: string;
  first_name:string;
  last_name:string;
}

export interface InputFieldProps {
  name: string;
  register: any;
  label?: string;
  placeholder?: string;
  errorMessage?: string|undefined;
  valueAsNumber?: boolean;
}

export interface OptionsFieldProps {
  label?: string;
  options: Option[];
  name: string;
}

export interface Option {
  value: string;
  label: string;
}
