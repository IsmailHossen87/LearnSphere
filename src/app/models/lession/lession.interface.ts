import { Types } from "mongoose";

export interface ILesson extends Document {
  title: string;
  course: Types.ObjectId; 
  topics: string[]; 
}
