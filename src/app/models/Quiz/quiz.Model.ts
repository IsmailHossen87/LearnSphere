// quiz.model.ts
import { Schema, model } from "mongoose";
import { IQuiz, IQuizSubmission } from "./quiz.Interface";

const quizSchema = new Schema<IQuiz>({
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    question: { type: Schema.Types.String, required: true },
    options: [{ type: Schema.Types.String, required: true }],
    correctAnswer: { type: Number, required: true },
}, { timestamps: true, versionKey: false });

export const Quiz = model("Quiz", quizSchema);

// quizSubmission.model.ts
const quizSubmissionSchema = new Schema<IQuizSubmission>({
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    selectedAnswer: { type: Number, required: true },
    isCorrect: { type: Boolean, required: true },
}, { timestamps: true, versionKey: false });

export const QuizSubmission = model<IQuizSubmission>("QuizSubmission", quizSubmissionSchema);
