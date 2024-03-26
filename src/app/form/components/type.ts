import { FieldError, UseFormRegister } from "react-hook-form";

export type ValidElements=
|"doctor_name"
|"department"
|"patient_name"
|"registration_date"
|"dob"

export interface FormElements{
    doctor_name:string;
    department:string;
    patient_name:string;
    registration_date:string;
    dob:string;

}

export interface InputFieldProps{
    name:ValidElements;
    register?:UseFormRegister<FormElements>
    label?:string;
    type?:string
    placeholder?:string
    error?:FieldError|undefined
}