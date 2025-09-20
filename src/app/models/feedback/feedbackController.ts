
import { Request, Response } from "express";
import { FeedbackService } from "./feedbackService";
import { JwtPayload } from "jsonwebtoken";


const addFeedbackController = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { feedback, rating } = req.body;
  const studentId = req.user as JwtPayload 

  const result = await FeedbackService.addFeedback(courseId, studentId?.userId, feedback, rating);
  res.status(201).json({ success: true, data: result });
};

const getCourseFeedbacksController = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const result = await FeedbackService.getCourseFeedbacks(courseId);
  res.json({ success: true, data: result });
};

export const FeedbackController = { addFeedbackController, getCourseFeedbacksController };
