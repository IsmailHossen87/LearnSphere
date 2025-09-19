// teacherFollow.controller.ts
import { Request, Response } from "express";

import { JwtPayload } from "jsonwebtoken";
import { TeacherFollow } from "../Teacher/TeacherModel";

const followTeacher = async (req: Request, res: Response) => {
    const { teacherId } = req.params;
    const studentId = (req.user as JwtPayload)?.userId;

    const doc = await TeacherFollow.create({ teacherId, studentId });
    return res.status(201).json({ success: true, data: doc });
};

const unfollowTeacher = async (req: Request, res: Response) => {
    const { teacherId } = req.params;
    const studentId = (req.user as JwtPayload)?.userId;

    await TeacherFollow.findOneAndDelete({ teacherId, studentId });
    return res.json({ success: true });
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
