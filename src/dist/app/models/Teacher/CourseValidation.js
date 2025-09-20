"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourseZodSchema = exports.createCourseZodSchema = void 0;
const zod_1 = require("zod");
// Course Create Validation
exports.createCourseZodSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    teacher: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid teacher ObjectId").optional(),
    lessons: zod_1.z.array(zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid lesson ObjectId")).optional().transform((val) => val !== null && val !== void 0 ? val : []),
    views: zod_1.z.number().int().nonnegative().optional(),
    likes: zod_1.z.number().int().nonnegative().optional(),
    feedbacks: zod_1.z
        .array(zod_1.z.object({
        student: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId"),
        comment: zod_1.z.string().optional(),
        createdAt: zod_1.z.date().optional(),
    }))
        .optional(),
});
// Course Update Validation
exports.updateCourseZodSchema = exports.createCourseZodSchema.partial();
