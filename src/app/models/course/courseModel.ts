import { model, Schema } from "mongoose";

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teacher: { type: Schema.Types.ObjectId, ref: "User", required: true },
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  likes: { type: Number, default: 0 },
}, { timestamps: true });


export const Course = model<ICourse>("Course", courseSchema);