"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = require("zod");
exports.createUserZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    role: zod_1.z.enum(["Student", "Teacher"]).optional(),
    followingTeachers: zod_1.z
        .array(zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid teacher ObjectId"))
        .optional(),
});
exports.updateUserZodSchema = exports.createUserZodSchema.partial();
