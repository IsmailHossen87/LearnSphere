"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTopicZodSchema = exports.createTopicZodSchema = void 0;
// src/validation/topic.validation.ts
const zod_1 = require("zod");
// Create Topic Validation
exports.createTopicZodSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    content: zod_1.z.string().min(1, "Content is required"),
    lesson: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid lesson ObjectId").optional(),
    quiz: zod_1.z
        .object({})
        .optional(),
});
exports.updateTopicZodSchema = exports.createTopicZodSchema.partial();
