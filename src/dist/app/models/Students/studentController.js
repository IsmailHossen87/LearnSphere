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
exports.studentsController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const studentService_1 = require("./studentService");
const trackCourseView = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const updatedCourse = yield studentService_1.studentServices.increaseCourseView(courseId);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        data: updatedCourse,
    });
});
// Like
const trackCourseLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    yield studentService_1.studentServices.likeCourse(courseId);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        data: null,
    });
});
// Comment
const addCourseFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const { feedback } = req.body;
    // JWT থেকে student ID ধরে নিচ্ছি req.user এ আছে
    const studentId = req.user;
    const updatedCourse = yield studentService_1.studentServices.addCourseFeedback(courseId, feedback, studentId.userId);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Your feedback sent successfully",
        data: updatedCourse,
    });
});
// Analytics
const courseAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const analytics = yield studentService_1.studentServices.likeCourse(courseId);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        data: analytics,
    });
});
// Browse Course
const browseCoursesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page, limit } = req.query;
    const courses = yield studentService_1.studentServices.getAllCourses(searchTerm, Number(page) || 1, Number(limit) || 10);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Courses retrieved successfully",
        data: courses,
    });
});
// Enroll in course
const enrollCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { courseId } = req.body;
    const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const enrollment = yield studentService_1.studentServices.enrollCourse(studentId, courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Enrolled in course successfully",
        data: enrollment,
    });
});
// Get lessons & topics
const getCourseLessonsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { courseId } = req.params;
    const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const course = yield studentService_1.studentServices.getCourseLessons(studentId, courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course lessons retrieved successfully",
        data: course,
    });
});
exports.studentsController = { trackCourseView, trackCourseLike, addCourseFeedback, courseAnalytics, browseCoursesController, enrollCourseController, getCourseLessonsController };
