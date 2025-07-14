
import { Document } from "mongoose";
import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export const userSchema = z.object({
  fullName : z.string({message: "User's full names are required"}),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  role: z.enum(["teacher", "student"])
})

export type IUser = z.infer<typeof userSchema>