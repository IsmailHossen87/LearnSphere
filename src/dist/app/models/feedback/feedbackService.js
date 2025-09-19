"use strict";
// feedback.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const feedbackModel_1 = require("./feedbackModel");
const addFeedback = (courseId, studentId, feedback, rating) => __awaiter(void 0, void 0, void 0, function* () {
    return yield feedbackModel_1.Feedback.create({ courseId, studentId, feedback, rating });
});
const getCourseFeedbacks = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield feedbackModel_1.Feedback.find({ courseId }).populate("studentId", "name");
});
exports.FeedbackService = { addFeedback, getCourseFeedbacks };
