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
exports.EnrolledController = void 0;
const enrollmentService_1 = require("./enrollmentService");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
// Follow a course
const followCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { courseId } = req.body;
    const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const result = yield enrollmentService_1.EnrollmentService.followCourse(studentId, courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course followed successfully",
        data: result,
    });
});
// Unfollow a course
const unfollowCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { courseId } = req.body;
    const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const result = yield enrollmentService_1.EnrollmentService.unfollowCourse(studentId, courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Course unfollowed successfully",
        data: result,
    });
});
// Update progress
const updateProgressController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId, progress } = req.body;
    const studentId = req.user;
    const result = yield enrollmentService_1.EnrollmentService.updateCourseProgress(studentId === null || studentId === void 0 ? void 0 : studentId.userId, courseId, progress);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Progress updated successfully",
        data: result,
    });
});
// Get students following a course (Teacher Analytics)
const getCourseStudentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    const result = yield enrollmentService_1.EnrollmentService.getCourseStudents(courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Students retrieved successfully",
        data: result,
    });
});
exports.EnrolledController = {
    getCourseStudentsController,
    updateProgressController,
    unfollowCourseController,
    followCourseController,
};
