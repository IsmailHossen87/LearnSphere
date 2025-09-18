import { Types } from "mongoose";

export enum IRole {
  STUDENT = "Student",
  TEACHER = "Teacher",
}

export interface IUser {
  _id?: Types.ObjectId
  name: string;
  email: string;
  password: string;
  role: IRole;
  followingTeachers?: string[];
}