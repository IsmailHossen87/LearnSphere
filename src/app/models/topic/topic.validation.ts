// src/validation/topic.validation.ts
import { z } from "zod";

// Create Topic Validation
export const createTopicZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  lesson: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid lesson ObjectId").optional(),
  quiz: z
    .object({}) 
    .optional(),
});


export const updateTopicZodSchema = createTopicZodSchema.partial();
