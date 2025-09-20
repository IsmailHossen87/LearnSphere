import { z } from "zod";


export const createQuizZodSchema = z.array(
  z.object({
    courseId: z.string().min(1, "Course ID is required").optional(),
    question: z.string().min(1, "Question is required"),
    options: z.array(z.string().min(1, "Option cannot be empty"))
      .min(2, "At least 2 options required"),
    correctAnswer: z.number().min(0, "Index must be >= 0"),
  })
);



// ✅ Quiz Submission Zod Schema
export const createQuizSubmissionZodSchema = z.object({
  quizId: z.string().min(1, "Quiz ID is required").optional(),
  studentId: z.string().min(1, "Student ID is required").optional(),
  selectedAnswer: z.number().min(0, "Index must be >= 0"),
  isCorrect: z.boolean(),
});


