import { z } from "zod";

export const SignupSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email" }).trim(),
    password: z.string().min(5, "Password must be atleast 5 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type SignupSchemaTypes = z.infer<typeof SignupSchema>;

export const SignInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(5, "Password must be atleast 5 characters"),
});

export type SigninSchemaTypes = z.infer<typeof SignInSchema>;
