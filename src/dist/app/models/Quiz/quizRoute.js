"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRouter = void 0;
// quiz.routes.ts
const express_1 = require("express");
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const quizController_1 = require("./quizController");
const router = (0, express_1.Router)();
// Teacher creates quiz
router.post("/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), quizController_1.QuizController.createQuizController);
// Student submits quiz
router.post("/submit/:quizId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), quizController_1.QuizController.submitQuizController);
exports.QuizRouter = router;
