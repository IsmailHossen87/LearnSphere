"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuizSubmissionZodSchema = exports.createQuizZodSchema = void 0;
const zod_1 = require("zod");
exports.createQuizZodSchema = zod_1.z.array(zod_1.z.object({
    courseId: zod_1.z.string().min(1, "Course ID is required").optional(),
    question: zod_1.z.string().min(1, "Question is required"),
    options: zod_1.z.array(zod_1.z.string().min(1, "Option cannot be empty"))
        .min(2, "At least 2 options required"),
    correctAnswer: zod_1.z.number().min(0, "Index must be >= 0"),
}));
// ✅ Quiz Submission Zod Schema
exports.createQuizSubmissionZodSchema = zod_1.z.object({
    quizId: zod_1.z.string().min(1, "Quiz ID is required").optional(),
    studentId: zod_1.z.string().min(1, "Student ID is required").optional(),
    selectedAnswer: zod_1.z.number().min(0, "Index must be >= 0"),
    isCorrect: zod_1.z.boolean(),
});
