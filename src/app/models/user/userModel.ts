import { model, Schema } from "mongoose";
import { IUser } from "./userInterface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String,  },
  password: { type: String, required: true },
  role: { type: String, enum: ["Student", "Teacher"], required: true },
  followingTeachers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export const User = model<IUser>("User", userSchema);