import { z } from "zod";

const createUserValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string({ message: "Passwoed must be string" })
    .min(6, { message: "Password must contain 6 character" })
    .max(20, { message: "Passwoed can not be more than 20 character" }),
});

export const userValidations = {
  createUserValidationSchema,
};
