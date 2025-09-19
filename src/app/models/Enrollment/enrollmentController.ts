import { Request, Response } from "express";
import { EnrollmentService } from "./enrollmentService";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";

// Follow a course
const followCourseController = async (req: Request, res: Response) => {
  const { courseId } = req.body;
  const studentId = (req.user as JwtPayload)?.userId;

  const result = await EnrollmentService.followCourse(studentId!, courseId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Course followed successfully",
    data: result,
  });
};

// Unfollow a course
const unfollowCourseController = async (req: Request, res: Response) => {
  const { courseId } = req.body;
  const studentId = (req.user as JwtPayload)?.userId;

  const result = await EnrollmentService.unfollowCourse(studentId!, courseId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Course unfollowed successfully",
    data: result,
  });
};

// Update progress
const updateProgressController = async (req: Request, res: Response) => {
  const { courseId, progress } = req.body;
  const studentId = req.user as JwtPayload; 
  const result = await EnrollmentService.updateCourseProgress(studentId?.userId, courseId, progress);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Progress updated successfully",
    data: result,
  });
};

// Get students following a course (Teacher Analytics)
const getCourseStudentsController = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const result = await EnrollmentService.getCourseStudents(courseId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Students retrieved successfully",
    data: result,
  });
};

export const EnrolledController = {
  getCourseStudentsController,
  updateProgressController,
  unfollowCourseController,
  followCourseController,
};
