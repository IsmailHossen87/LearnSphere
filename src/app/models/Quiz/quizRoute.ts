// quiz.routes.ts
import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { QuizController } from "./quizController";
import { validateRequest } from "../../middleware/validateRequest";
import { createQuizSubmissionZodSchema } from "./Quiz.validation";


const router = Router();

// Teacher creates quiz
router.post("/:courseId", checkAuth(IRole.TEACHER),QuizController.createQuizController);

// Student submits quiz
router.post("/submit/:quizId", checkAuth(IRole.STUDENT), validateRequest(createQuizSubmissionZodSchema),QuizController.submitQuizController);

export const QuizRouter = router;
