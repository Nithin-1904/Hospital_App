import { ZodType, z } from "zod";
import { FormElements } from "./type";

export const FormValidation: ZodType<FormElements> = z.object({
  registration_date:z.date(),
  id: z.number().max(10000, "No regn number"),
  department: z.string(),
  dob: z.string(),
  age: z.number().min(0, "Not an age").max(110, "Great"),
  gender: z.string(),
  first_name:z.string(),
  last_name:z.string(),
});
