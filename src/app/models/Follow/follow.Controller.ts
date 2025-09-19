// teacherFollow.controller.ts
import { Request, Response } from "express";

import { JwtPayload } from "jsonwebtoken";
import { TeacherFollow } from "../Teacher/TeacherModel";

const followTeacher = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params;
    const studentId = (req.user as JwtPayload)?.userId;

    const existing = await TeacherFollow.findOne({ teacherId, studentId });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Already followed this teacher",
      });
    }

    const doc = await TeacherFollow.create({ teacherId, studentId });

    return res.status(201).json({
      success: true,
      message: "Teacher followed successfully",
      data: doc,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const unfollowTeacher = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params;
    const studentId = (req.user as JwtPayload)?.userId;

    const deleted = await TeacherFollow.findOneAndDelete({ teacherId, studentId });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "You are not following this teacher",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Unfollowed teacher successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};


const getFollowers = async (req: Request, res: Response) => {
    const { teacherId } = req.params;
    const followers = await TeacherFollow.find({ teacherId }).populate("studentId", "name email");
    return res.json({ success: true, data: followers });
};

const getFollowing = async (req: Request, res: Response) => {
    const studentId =(req.user as JwtPayload)?.userId;
    
    const following = await TeacherFollow.find({ studentId }).populate("teacherId", "name bio");
    return res.json({ success: true, data: following });
};

export const TeacherFollowController = { followTeacher, unfollowTeacher, getFollowers, getFollowing };
