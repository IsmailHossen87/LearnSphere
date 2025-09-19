import { model, Schema } from "mongoose";
import { IEnrollment } from "./studentInterface";

const enrollmentSchema = new Schema<IEnrollment>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    progress: { type: Number, default: 0 },
    isFollowing: { type: Boolean, default: true },
    lastAccessed: { type: Date, default: Date.now },
  },
  { timestamps: true,versionKey:false }
);

export const Enrollment = model<IEnrollment>("Enrollment", enrollmentSchema);