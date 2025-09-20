
import { z } from "zod";

// Course Create Validation
export const createCourseZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  teacher: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid teacher ObjectId").optional(),
  lessons: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid lesson ObjectId")).optional().transform((val) => val ?? []),
  views: z.number().int().nonnegative().optional(),
  likes: z.number().int().nonnegative().optional(),
  feedbacks: z
    .array(
      z.object({
        student: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId"),
        comment: z.string().optional(),
        createdAt: z.date().optional(),
      })
    )
    .optional(),
});

// Course Update Validation
export const updateCourseZodSchema = createCourseZodSchema.partial();


