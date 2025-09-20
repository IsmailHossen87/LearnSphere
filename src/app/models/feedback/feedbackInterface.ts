
import { Types } from "mongoose";

export interface IFeedback {
  _id?: Types.ObjectId;
  courseId: Types.ObjectId;   
  studentId: Types.ObjectId; 
  feedback: string;          
  rating: number;           
}
