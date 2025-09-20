import { z } from "zod";

// Create Lesson Validation
export const createLessonZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  course: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId"),
  topics: z
  .union([
    z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid topic ObjectId"),
    z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid topic ObjectId"))]).optional().transform((val) => {if (!val) return [];return Array.isArray(val) ? val : [val];}),


});

// Update Lesson Validation
export const updateLessonZodSchema = createLessonZodSchema.partial();
