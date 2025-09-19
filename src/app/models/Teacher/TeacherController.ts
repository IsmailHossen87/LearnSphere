/* eslint-disable @typescript-eslint/no-unused-vars */
import {  Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

import { JwtPayload } from "jsonwebtoken";
import {  courseService } from "./TeacherService";

// Create Profile
const createCourse  = catchAsync(async (req: Request, res: Response) => { 
  const jwtInfo = req.user as JwtPayload
  const personalInfo = await courseService.courseInfoService(req.body,jwtInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Course Created successfully",
    data: personalInfo,
  });
});

// Get All Courses
const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const courses = await courseService.getAllCoursesService(query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Courses retrieved successfully",
    data: courses,
  });
});
// Get Single Course by ID
const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await courseService.getSingleCourseService(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course retrieved successfully",
    data: course,
  });
});

// Update Course
const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; 
  const jwtInfo = req.user as JwtPayload;
  const updatedCourse = await courseService.updateCourseService(id, req.body, jwtInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course updated successfully",
    data: updatedCourse,
  });
});

// Delete
const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const jwtInfo = req.user as JwtPayload;
  const result = await courseService.deleteCourseService(id, jwtInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course deleted successfully",
    data: result,
  });
});




export const CourseControllers = {
  createCourse,getAllCourses,getSingleCourse,updateCourse,deleteCourse
};