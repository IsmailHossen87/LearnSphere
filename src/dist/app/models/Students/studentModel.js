"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const mongoose_1 = require("mongoose");
const enrollmentSchema = new mongoose_1.Schema({
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", required: true },
    progress: { type: Number, default: 0 },
    isFollowing: { type: Boolean, default: true },
    lastAccessed: { type: Date, default: Date.now },
}, { timestamps: true, versionKey: false });
exports.Enrollment = (0, mongoose_1.model)("Enrollment", enrollmentSchema);
