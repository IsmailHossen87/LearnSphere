"use strict";
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
exports.FeedbackController = void 0;
const feedbackService_1 = require("./feedbackService");
const addFeedbackController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const { feedback, rating } = req.body;
    const studentId = req.user;
    const result = yield feedbackService_1.FeedbackService.addFeedback(courseId, studentId === null || studentId === void 0 ? void 0 : studentId.userId, feedback, rating);
    res.status(201).json({ success: true, data: result });
});
const getCourseFeedbacksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const result = yield feedbackService_1.FeedbackService.getCourseFeedbacks(courseId);
    res.json({ success: true, data: result });
});
exports.FeedbackController = { addFeedbackController, getCourseFeedbacksController };
