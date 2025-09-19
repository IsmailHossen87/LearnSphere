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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const studentModel_1 = require("../Students/studentModel");
// Follow a course
const followCourse = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!courseId)
        throw new Error("courseId is required");
    return yield studentModel_1.Enrollment.findOneAndUpdate({ student: studentId, course: courseId }, { student: studentId, course: courseId, isFollowing: true, lastAccessed: new Date() }, { upsert: true, new: true, setDefaultsOnInsert: true });
});
const unfollowCourse = (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!courseId)
        throw new Error("courseId is required");
    return yield studentModel_1.Enrollment.findOneAndUpdate({ student: studentId, course: courseId }, { isFollowing: false, lastAccessed: new Date() }, { new: true });
});
// Update progress (e.g., when student completes a lesson/topic)
const updateCourseProgress = (studentId, courseId, progress) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.Enrollment.findOneAndUpdate({ student: studentId, course: courseId }, { progress, lastAccessed: new Date() }, { new: true, upsert: true });
});
const getCourseStudents = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.Enrollment.find({ course: courseId })
        .populate("student", "name email")
        .select("student isFollowing progress lastAccessed");
});
exports.EnrollmentService = { getCourseStudents, updateCourseProgress, unfollowCourse, followCourse };
