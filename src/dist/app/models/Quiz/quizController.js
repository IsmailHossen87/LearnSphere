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
exports.QuizController = void 0;
const Queze_Service_1 = require("./Queze.Service");
const createQuizController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const data = req.body;
    const result = yield Queze_Service_1.QuizService.createQuiz(courseId, data);
    res.status(201).json({ success: true, data: result });
});
const submitQuizController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { quizId } = req.params;
    const { selectedAnswer } = req.body;
    const studentId = req.user;
    const result = yield Queze_Service_1.QuizService.submitQuiz(quizId, studentId === null || studentId === void 0 ? void 0 : studentId.userId, selectedAnswer);
    res.status(201).json({ success: true, data: result });
});
exports.QuizController = { createQuizController, submitQuizController };
