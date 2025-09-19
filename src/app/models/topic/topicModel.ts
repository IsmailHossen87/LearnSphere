import { model, Schema } from "mongoose";
import { ITopic } from "./topicInterface";

const topicSchema = new Schema<ITopic>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    lesson: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    quiz: { type: Object },
  },
  { timestamps: true }
);

export const TopicModel = model<ITopic>("Topic", topicSchema);
