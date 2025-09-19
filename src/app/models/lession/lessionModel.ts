import { model, Schema } from "mongoose";
import { ILesson } from "./lession.interface";
import { TopicModel } from "../topic/topicModel";

const lessonSchema = new Schema<ILesson>(
  {
    title: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
  },
  { timestamps: true ,versionKey:false}
);
// if some topic delete

lessonSchema.pre("findOneAndDelete", async function (next) {
  const lesson = await this.model.findOne(this.getFilter());
  if (lesson) {
    await TopicModel.deleteMany({ lesson: lesson._id });
  }
  next();
});

export const LessonModel = model<ILesson>("Lesson", lessonSchema);