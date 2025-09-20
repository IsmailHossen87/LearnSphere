
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { QuizService } from "./Queze.Service";

const createQuizController = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const data = req.body;
  const result = await QuizService.createQuiz(courseId, data);
  res.status(201).json({ success: true, data: result });
};

const submitQuizController = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { selectedAnswer } = req.body;
  const studentId = req.user as JwtPayload;

  const result = await QuizService.submitQuiz(quizId, studentId?.userId, selectedAnswer);
  res.status(201).json({ success: true, data: result });
};

export const QuizController = { createQuizController, submitQuizController };
