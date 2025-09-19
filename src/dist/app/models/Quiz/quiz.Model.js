"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizSubmission = exports.Quiz = void 0;
// quiz.model.ts
const mongoose_1 = require("mongoose");
const quizSchema = new mongoose_1.Schema({
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", required: true },
    question: { type: mongoose_1.Schema.Types.String, required: true },
    options: [{ type: mongoose_1.Schema.Types.String, required: true }],
    correctAnswer: { type: Number, required: true },
}, { timestamps: true, versionKey: false });
exports.Quiz = (0, mongoose_1.model)("Quiz", quizSchema);
// quizSubmission.model.ts
const quizSubmissionSchema = new mongoose_1.Schema({
    quizId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Quiz", required: true },
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    selectedAnswer: { type: Number, required: true },
    isCorrect: { type: Boolean, required: true },
}, { timestamps: true, versionKey: false });
exports.QuizSubmission = (0, mongoose_1.model)("QuizSubmission", quizSubmissionSchema);
