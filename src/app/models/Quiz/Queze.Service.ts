

import { IQuiz } from "./quiz.Interface";
import { Quiz, QuizSubmission } from "./quiz.Model";


const createQuiz = async (courseId: string, data: IQuiz | IQuiz[]) => {
  if (Array.isArray(data)) {
    const quizzes = data.map((quiz) => ({
      ...quiz,
      courseId,
    }));
    return await Quiz.insertMany(quizzes);
  }
  return await Quiz.create({ ...data, courseId });
};


const submitQuiz = async (quizId: string, studentId: string, selectedAnswer: number) => {
  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new Error("Quiz not found");

  const isCorrect = quiz.correctAnswer === selectedAnswer;
  return await QuizSubmission.create({ quizId, studentId, selectedAnswer, isCorrect });
};

export const QuizService = { createQuiz, submitQuiz };
