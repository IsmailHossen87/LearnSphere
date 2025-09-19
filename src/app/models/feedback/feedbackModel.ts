// feedback.model.ts
import { Schema, model } from "mongoose";
import { IFeedback } from "./feedbackInterface";


const feedbackSchema = new Schema<IFeedback>(
    {
        courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
        studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        feedback: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5 },
    },
    { timestamps: true }
);

export const Feedback = model<IFeedback>("Feedback", feedbackSchema);
