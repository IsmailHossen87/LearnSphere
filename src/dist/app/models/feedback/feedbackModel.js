"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", required: true },
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
}, { timestamps: true });
exports.Feedback = (0, mongoose_1.model)("Feedback", feedbackSchema);
