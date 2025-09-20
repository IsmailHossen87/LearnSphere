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
exports.QuizService = void 0;
const quiz_Model_1 = require("./quiz.Model");
const createQuiz = (courseId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(data)) {
        const quizzes = data.map((quiz) => (Object.assign(Object.assign({}, quiz), { courseId })));
        return yield quiz_Model_1.Quiz.insertMany(quizzes);
    }
    return yield quiz_Model_1.Quiz.create(Object.assign(Object.assign({}, data), { courseId }));
});
const submitQuiz = (quizId, studentId, selectedAnswer) => __awaiter(void 0, void 0, void 0, function* () {
    const quiz = yield quiz_Model_1.Quiz.findById(quizId);
    if (!quiz)
        throw new Error("Quiz not found");
    const isCorrect = quiz.correctAnswer === selectedAnswer;
    return yield quiz_Model_1.QuizSubmission.create({ quizId, studentId, selectedAnswer, isCorrect });
});
exports.QuizService = { createQuiz, submitQuiz };
