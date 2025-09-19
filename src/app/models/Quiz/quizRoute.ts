// quiz.routes.ts
import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { QuizController } from "./quizController";

const router = Router();

// Teacher creates quiz
router.post("/:courseId", checkAuth(IRole.TEACHER), QuizController.createQuizController);

// Student submits quiz
router.post("/submit/:quizId", checkAuth(IRole.STUDENT), QuizController.submitQuizController);

export const QuizRouter = router;
