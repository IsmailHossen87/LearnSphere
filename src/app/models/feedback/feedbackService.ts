// feedback.service.ts

import { Feedback } from "./feedbackModel";


const addFeedback = async (courseId: string, studentId: string, feedback: string, rating: number) => {
  return await Feedback.create({ courseId, studentId, feedback, rating });
};

const getCourseFeedbacks = async (courseId: string) => {
  return await Feedback.find({ courseId }).populate("studentId", "name");
};

export const FeedbackService = { addFeedback, getCourseFeedbacks };
