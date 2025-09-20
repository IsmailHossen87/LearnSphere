"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = exports.TeacherFollow = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    lessons: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Lesson" }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    feedbacks: [{
            student: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
            comment: { type: String },
            createdAt: { type: Date, default: Date.now }
        }]
}, { timestamps: true, versionKey: false });
// Update Course to get 
const teacherFollowSchema = new mongoose_1.Schema({
    teacherId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
}, {
    versionKey: false, timestamps: true
});
teacherFollowSchema.index({ teacherId: 1, studentId: 1 }, { unique: true });
exports.TeacherFollow = (0, mongoose_1.model)("TeacherFollow", teacherFollowSchema);
exports.CourseModel = (0, mongoose_1.model)("Course", courseSchema);
