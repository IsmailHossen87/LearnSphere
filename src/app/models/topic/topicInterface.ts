import { Types } from "mongoose";

export interface ITopic extends Document {
  title: string;
  content: string;
  lesson: Types.ObjectId; 
  quiz?: any;
}