import { FieldError, UseFormRegister } from "react-hook-form";
import { z,ZodType } from "zod";

export const LoginValidation:ZodType<FormProps>=z.object({
    email:z.string({required_error:"Email is required"}).email(),
    password:z.string({required_error:"Password is required"}).min(8,{message:"Password is short"})
})

export type ValidFieldNames =
| "email"
| "password"

export interface FormProps {
    email: string;
    password: string;
  }

export interface FormFieldProps {
    design?:string;
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    valueAsNumber?: boolean;
    register: UseFormRegister<FormProps>;
    error: FieldError | undefined;
  }