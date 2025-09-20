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
        data: updatedCourse,
    });
};
// Like
const trackCourseLike = async (req: Request, res: Response) => {
    const { courseId } = req.params;
 await studentServices.likeCourse(courseId);

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
const courseAnalytics = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const analytics = await studentServices.likeCourse(courseId);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.OK,
        data: analytics,
    });
};
// Browse Course
const browseCoursesController = async (req: Request, res: Response) => {
    const { searchTerm, page, limit } = req.query;
    const courses = await studentServices.getAllCourses(
        searchTerm as string,
        Number(page) || 1,
        Number(limit) || 10
    );

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Courses retrieved successfully",
        data: courses,
    });
};
// Enroll in course
const enrollCourseController = async (req: Request, res: Response) => {
    const { courseId } = req.body;
    const studentId = (req.user as JwtPayload)?.userId;

    const enrollment = await studentServices.enrollCourse(studentId as string, courseId);

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Enrolled in course successfully",
        data: enrollment,
    });

}

// Get lessons & topics
const getCourseLessonsController = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const studentId = (req.user as JwtPayload)?.userId;

    const course = await studentServices.getCourseLessons(studentId as string, courseId as string);

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Course lessons retrieved successfully",
        data: course,
    });

}


export const studentsController = { trackCourseView, trackCourseLike, addCourseFeedback, courseAnalytics, browseCoursesController, enrollCourseController, getCourseLessonsController }