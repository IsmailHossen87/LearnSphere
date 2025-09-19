// quiz.interface.ts
import { Types } from "mongoose";

export interface IQuiz {
  _id?: Types.ObjectId;
  courseId: Types.ObjectId;   
  question: string;          
  options: string[];       
  correctAnswer: number;     
}

// quiz submission interface
export interface IQuizSubmission {
  _id?: Types.ObjectId;
  quizId: Types.ObjectId;     
  studentId: Types.ObjectId;  
  selectedAnswer: number;    
  isCorrect: boolean;        
}
