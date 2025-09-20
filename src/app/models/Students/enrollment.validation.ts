
import { z } from "zod";

// Create Enrollment Validation
export const createEnrollmentZodSchema = z.object({
  student: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId").optional(),
  course: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId").optional(),
  progress: z.number().int().min(0).max(100).optional(), 
  isFollowing: z.boolean().optional(),
  lastAccessed: z.date().optional(), 
});


