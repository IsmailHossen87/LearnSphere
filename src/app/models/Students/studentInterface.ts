import { Types } from "mongoose";

export interface IEnrollment extends Document {
  student: Types.ObjectId;
  course: Types.ObjectId;
  progress: number;  
  isFollowing: boolean; 
  lastAccessed?: Date;  
}