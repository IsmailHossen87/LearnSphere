import { Document, Types } from "mongoose";

export interface IFeedback {
  student: Types.ObjectId;
  comment: string;
  createdAt?: Date;
}

export interface ICourse extends Document {
  title: string;
  description: string;
  teacher: Types.ObjectId;        
  lessons: Types.ObjectId[];      
  views?: number;                   
  likes?: number;                 
  likedBy?: Types.ObjectId[];      
  feedbacks?: IFeedback[];         
}
