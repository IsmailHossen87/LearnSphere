import AppError from "../../errorHelper/AppError";
import { ICourse } from "./TeacherInterface";
import httpStatus from "http-status-codes";
import { CourseModel } from "./TeacherModel";
import { JwtPayload } from "jsonwebtoken";
import { FilterQuery } from "mongoose";

// create
const courseInfoService = async (payload: Partial<ICourse>, jwtInfo: JwtPayload) => {
    if (jwtInfo.role !== "Teacher") {
        throw new AppError(httpStatus.NOT_FOUND, "You are not authorized to create a course");
    }

    // 3️⃣ Create course
    const newCourse = await CourseModel.create({
        title: payload.title,
        description: payload.description,
        teacher: jwtInfo.userId,
        lessons: [],
    });

    return newCourse;
};

const getAllCoursesService = async (query: FilterQuery<ICourse>) => {
    const filter: any = {};

    if (query.title) {
        filter.title = { $regex: query.title, $options: "i" };
    }

    if (query.teacher) {
        filter.teacher = query.teacher;
    }

    const courses = await CourseModel.find(filter)
        .populate("teacher", "name email") 
        .sort({ createdAt: -1 });

    return courses;
};

// Get Single
const getSingleCourseService = async (courseId: string) => {
    const course = await CourseModel.findById(courseId)
        .populate("teacher", "name email")
        .populate("lessons"); 

    if (!course) {
        throw new AppError(httpStatus.NOT_FOUND, "Course not found");
    }

    return course;
};
// Update
const updateCourseService = async (courseId: string, payload: Partial<ICourse>, jwtInfo: JwtPayload) => {

    const course = await CourseModel.findById(courseId);
    if (!course) {
        throw new AppError(httpStatus.NOT_FOUND, "Course Not Fournd");
    }

    // 2️⃣ Role & ownership check
    if (jwtInfo.role !== "ADMIN" && course.teacher.toString() !== jwtInfo.userId) {
        throw new AppError(httpStatus.NOT_FOUND, "You are not authorized to this Course");
    }

    // 3️⃣ Update course using findByIdAndUpdate
    const updatedCourse = await CourseModel.findByIdAndUpdate(
        courseId,
        { $set: payload }, 
        { new: true, runValidators: true }
    );

    return updatedCourse;
};
// Delete
const deleteCourseService = async (courseId: string, jwtInfo: JwtPayload) => {
    if (jwtInfo.role !== "Teacher") {
        throw new AppError(httpStatus.FORBIDDEN, "You are not authorized to delete a course");
    }

    const course = await CourseModel.findById(courseId);
    if (!course) {
        throw new AppError(httpStatus.NOT_FOUND, "Course not found");
    }

    if (course.teacher.toString() !== jwtInfo.userId) {
        throw new AppError(httpStatus.FORBIDDEN, "You can only delete your own courses");
    }

    await CourseModel.findByIdAndDelete(courseId);
    return { message: "Course deleted successfully" };
};
export const courseService = { courseInfoService, getAllCoursesService, getSingleCourseService, updateCourseService, deleteCourseService };
