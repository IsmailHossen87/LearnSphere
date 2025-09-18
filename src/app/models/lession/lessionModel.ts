import { model, Schema } from "mongoose";
import { ILesson } from "./lession.interface";

const lessonSchema = new Schema<ILesson>(
  {
    title: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
  },
  { timestamps: true }
);

export const LessonModel = model<ILesson>("Lesson", lessonSchema);