"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedbackZodSchema = void 0;
const zod_1 = require("zod");
// Create Feedback Validation
exports.createFeedbackZodSchema = zod_1.z.object({
    courseId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId").optional(),
    studentId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId").optional(),
    feedback: zod_1.z.string().min(1, "Feedback is required"),
    rating: zod_1.z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
});
