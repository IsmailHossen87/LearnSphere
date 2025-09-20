// src/validation/lesson.validation.ts
import { z } from "zod";

// Create Lesson Validation
export const createLessonZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  course: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId"),
  topics: z
    .array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid topic ObjectId"))
    .optional(),
});

// Update Lesson Validation
export const updateLessonZodSchema = createLessonZodSchema.partial();
