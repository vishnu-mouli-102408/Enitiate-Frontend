import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email().trim(),
    password: z.string().min(5, "Password must be atleast 5 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type signupSchemaTypes = z.infer<typeof signupSchema>;

export const signInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(5, "Password must be atleast 5 characters"),
});

export type signinSchemaTypes = z.infer<typeof signInSchema>;
