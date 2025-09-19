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
exports.CourseControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const TeacherService_1 = require("./TeacherService");
// Create Profile
const createCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jwtInfo = req.user;
    const personalInfo = yield TeacherService_1.courseService.courseInfoService(req.body, jwtInfo);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Course Created successfully",
        data: personalInfo,
    });
}));
// Get All Courses
const getAllCourses = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const courses = yield TeacherService_1.courseService.getAllCoursesService(query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Courses retrieved successfully",
        data: courses,
    });
}));
// Get Single Course by ID
const getSingleCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const course = yield TeacherService_1.courseService.getSingleCourseService(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course retrieved successfully",
        data: course,
    });
}));
// Update Course
const updateCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jwtInfo = req.user;
    const updatedCourse = yield TeacherService_1.courseService.updateCourseService(id, req.body, jwtInfo);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course updated successfully",
        data: updatedCourse,
    });
}));
// Delete
const deleteCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jwtInfo = req.user;
    const result = yield TeacherService_1.courseService.deleteCourseService(id, jwtInfo);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course deleted successfully",
        data: result,
    });
}));
exports.CourseControllers = {
    createCourse, getAllCourses, getSingleCourse, updateCourse, deleteCourse
};
