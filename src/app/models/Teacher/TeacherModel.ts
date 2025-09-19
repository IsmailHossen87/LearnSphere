// src/models/course.model.ts
import { Schema, model } from "mongoose";
import { ICourse } from "./TeacherInterface";


const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    feedbacks: [{
      student: { type: Schema.Types.ObjectId, ref: "User" },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now }
    }]

  },
  { timestamps: true, versionKey: false }
);

export const CourseModel = model<ICourse>("Course", courseSchema);





