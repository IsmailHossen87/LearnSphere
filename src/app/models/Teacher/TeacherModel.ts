
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


// Update Course to get 
const teacherFollowSchema = new Schema({
  teacherId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
},{
  versionKey:false,timestamps:true
});

teacherFollowSchema.index({ teacherId: 1, studentId: 1 }, { unique: true });
export const TeacherFollow = model("TeacherFollow", teacherFollowSchema);



export const CourseModel = model<ICourse>("Course", courseSchema);





