// src/validation/feedback.validation.ts
import { z } from "zod";

// Create Feedback Validation
export const createFeedbackZodSchema = z.object({
  courseId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId").optional(),
  studentId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId").optional(),
  feedback: z.string().min(1, "Feedback is required"),
  rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
});



