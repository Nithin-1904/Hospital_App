import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export const FormValidation:ZodType<FormProps>=z.object({
  
})

export type ValidFieldNames =
| "doctor_name"
| "department"
| "patient_name"
| "dob"
| "gender"
| "age"
| "parent_guardian"
| "telephone_no"
| "email"
| "martial_status"
| "employment"
| "address_1"
| "address_2"
| "pincode"

export interface Option {
  value: string;
  label: string;
}

export interface OptionsProps {
  label: string;
  options: Option[];
}

export interface FormProps{
  doctor_name:string;
  department:string
  patient_name:string
  dob:string
  gender:string
  age:string
  parent_guardian:string
  telephone_no:number
  email:string
  martial_status:string
  employment:string
  address_1:string
  address_2:string
  pincode:number
}

export interface InputProps{
  label?: string;
  design?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormProps>;
  error: FieldError | undefined;
  type?: string;
  hint?: string;
}

export interface DateProps {
  label: string;
}

export interface HeadingProps {
  title: string;
}
