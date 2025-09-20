"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLessonZodSchema = exports.createLessonZodSchema = void 0;
const zod_1 = require("zod");
// Create Lesson Validation
exports.createLessonZodSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    course: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId"),
    topics: zod_1.z
        .union([
        zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid topic ObjectId"),
        zod_1.z.array(zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid topic ObjectId"))
    ]).optional().transform((val) => { if (!val)
        return []; return Array.isArray(val) ? val : [val]; }),
});
// Update Lesson Validation
exports.updateLessonZodSchema = exports.createLessonZodSchema.partial();
