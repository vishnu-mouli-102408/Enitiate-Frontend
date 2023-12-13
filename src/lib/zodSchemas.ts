import { z } from "zod";

export const SignupSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email" }).trim(),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

export type SignupSchemaTypes = z.infer<typeof SignupSchema>;

export const SignInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type SigninSchemaTypes = z.infer<typeof SignInSchema>;
