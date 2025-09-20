// src/validation/user.validation.ts
import { z } from "zod";

// Create User Validation
export const createUserZodSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").optional(), 
  password: z.string().min(6, "Password must be at least 6 characters"),
   role: z.enum(["Student", "Teacher"]).optional(),
  followingTeachers: z
    .array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid teacher ObjectId"))
    .optional(),
});

// Update User Validation
export const updateUserZodSchema = createUserZodSchema.partial();
