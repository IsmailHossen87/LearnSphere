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
exports.studentServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const AppError_1 = __importDefault(require("../../errorHelper/AppError"));
const TeacherModel_1 = require("../Teacher/TeacherModel");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const studentModel_1 = require("./studentModel");
// View
const increaseCourseView = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield TeacherModel_1.CourseModel.findByIdAndUpdate(courseId, { $inc: { views: 1 } }, { new: true });
});
// Like
const likeCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield TeacherModel_1.CourseModel.findByIdAndUpdate(courseId, { $inc: { likes: 1 } }, { new: true });
});
// Comment
const addCourseFeedback = (courseId, feedback, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield TeacherModel_1.CourseModel.findOne({ _id: courseId });
    if (!course) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "This course is not Available");
    }
    const feedbackObj = {
        student: studentId,
        comment: feedback,
        createdAt: new Date()
    };
    const updatedCourse = yield TeacherModel_1.CourseModel.findByIdAndUpdate(courseId, { $push: { feedbacks: feedbackObj } }, { new: true });
    return updatedCourse;
});
// analytics
const getCourseAnalytics = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield TeacherModel_1.CourseModel.findById(courseId)
        .select("title views likes feedbacks")
        .lean();
});
// GetALL COURSE
const getAllCourses = (searchTerm_1, ...args_1) => __awaiter(void 0, [searchTerm_1, ...args_1], void 0, function* (searchTerm, page = 1, limit = 10) {
    const query = {};
    if (searchTerm) {
        query.title = { $regex: searchTerm, $options: "i" };
    }
    const courses = yield TeacherModel_1.CourseModel.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("lessons");
    return courses;
});
// Enroll Student
const enrollCourse = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.Enrollment.findOneAndUpdate({ student: studentId, course: courseId }, { student: studentId, course: courseId, isFollowing: true, lastAccessed: new Date() }, { upsert: true, new: true, setDefaultsOnInsert: true });
});
// Lession Topic
const getCourseLessons = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    // Update lastAccessed automatically
    yield studentModel_1.Enrollment.findOneAndUpdate({ student: studentId, course: courseId }, { lastAccessed: new Date() }, { upsert: true, new: true });
    const course = yield TeacherModel_1.CourseModel.findById(courseId)
        .populate({
        path: "lessons",
        populate: { path: "topics" }
    });
    if (!course)
        throw new Error("Course not found");
    return course;
});
exports.studentServices = { increaseCourseView, likeCourse, addCourseFeedback, getCourseAnalytics, getAllCourses, enrollCourse, getCourseLessons };
