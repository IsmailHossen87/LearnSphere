"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnrollmentZodSchema = void 0;
const zod_1 = require("zod");
// Create Enrollment Validation
exports.createEnrollmentZodSchema = zod_1.z.object({
    student: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid student ObjectId").optional(),
    course: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ObjectId").optional(),
    progress: zod_1.z.number().int().min(0).max(100).optional(),
    isFollowing: zod_1.z.boolean().optional(),
    lastAccessed: zod_1.z.date().optional(),
});
