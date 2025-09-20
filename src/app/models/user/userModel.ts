import { model, Schema } from "mongoose";
import { IRole, IUser } from "./userInterface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String,  },
  password: { type: String, required: true },
  role: { type: String, enum: ["Student", "Teacher"],default: IRole.STUDENT  },
  followingTeachers: [{ type: Schema.Types.ObjectId, ref: "User" }],
},{
  versionKey:false,
  timestamps:true
});

export const User = model<IUser>("User", userSchema);