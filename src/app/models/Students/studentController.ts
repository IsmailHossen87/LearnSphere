import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { studentServices } from "./studentService";
import { JwtPayload } from "jsonwebtoken";



const trackCourseView = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const updatedCourse = await studentServices.increaseCourseView(courseId);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.CREATED,
        data: null,
    });
};
// Like
const trackCourseLike = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const updatedCourse = await studentServices.likeCourse(courseId);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.CREATED,
        data: null,
    });
};
// Comment
const addCourseFeedback = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const { feedback } = req.body;

    // JWT থেকে student ID ধরে নিচ্ছি req.user এ আছে
    const studentId = req.user as JwtPayload;

    const updatedCourse = await studentServices.addCourseFeedback(courseId, feedback, studentId.userId);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Your feedback sent successfully",
        data: updatedCourse,
    });
};
// Analytics
// Like
const courseAnalytics = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const analytics = await studentServices.likeCourse(courseId);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.OK,
        data: analytics,
    });
};

export const studentsController = { trackCourseView, trackCourseLike, addCourseFeedback, courseAnalytics }