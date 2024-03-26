import { ZodType, z } from "zod";
import { FormElements } from "./components/type";

export const FormValidation:ZodType<FormElements>=z.object({
    doctor_name:z.string({required_error:"Name.isrequired"})
})