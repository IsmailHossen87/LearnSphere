"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const AppError_1 = __importDefault(require("../../errorHelper/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const TeacherModel_1 = require("./TeacherModel");
// create
const courseInfoService = (payload, jwtInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (jwtInfo.role !== "Teacher") {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "You are not authorized to create a course");
    }
    // 3️⃣ Create course
    const newCourse = yield TeacherModel_1.CourseModel.create({
        title: payload.title,
        description: payload.description,
        teacher: jwtInfo.userId,
        lessons: Array.isArray(payload.lessons) ? payload.lessons : [payload.lessons]
    });
    return newCourse;
});
const getAllCoursesService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (query.title) {
        filter.title = { $regex: query.title, $options: "i" };
    }
    if (query.teacher) {
        filter.teacher = query.teacher;
    }
    const courses = yield TeacherModel_1.CourseModel.find(filter)
        .populate("teacher", "name email")
        .sort({ createdAt: -1 });
    return courses;
});
// Get Single
const getSingleCourseService = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield TeacherModel_1.CourseModel.findById(courseId)
        .populate("teacher", "name email")
        .populate("lessons");
    if (!course) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Course not found");
    }
    return course;
});
// Update
const updateCourseService = (courseId, payload, jwtInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield TeacherModel_1.CourseModel.findById(courseId);
    if (!course) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Course Not Fournd");
    }
    // 2️⃣ Role & ownership check
    if (jwtInfo.role !== "ADMIN" && course.teacher.toString() !== jwtInfo.userId) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "You are not authorized to this Course");
    }
    // 3️⃣ Update course using findByIdAndUpdate
    const updatedCourse = yield TeacherModel_1.CourseModel.findByIdAndUpdate(courseId, { $set: payload }, { new: true, runValidators: true });
    return updatedCourse;
});
// Delete
const deleteCourseService = (courseId, jwtInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (jwtInfo.role !== "Teacher") {
        throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, "You are not authorized to delete a course");
    }
    const course = yield TeacherModel_1.CourseModel.findById(courseId);
    if (!course) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Course not found");
    }
    if (course.teacher.toString() !== jwtInfo.userId) {
        throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, "You can only delete your own courses");
    }
    yield TeacherModel_1.CourseModel.findByIdAndDelete(courseId);
    return { message: "Course deleted successfully" };
});
exports.courseService = { courseInfoService, getAllCoursesService, getSingleCourseService, updateCourseService, deleteCourseService };
