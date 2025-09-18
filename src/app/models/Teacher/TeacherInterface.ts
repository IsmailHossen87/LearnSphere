import { Document, Types } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  teacher: Types.ObjectId; 
  lessons: string[]; 
}



