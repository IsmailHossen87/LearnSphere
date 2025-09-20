"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRoute_1 = require("../models/user/userRoute");
const authRoute_1 = require("../models/auth/authRoute");
const TeacherRoute_1 = require("../models/Teacher/TeacherRoute");
const lessionRoute_1 = require("../models/lession/lessionRoute");
const topicRoute_1 = require("../models/topic/topicRoute");
const studentRoute_1 = require("../models/Students/studentRoute");
const enrollmentRoute_1 = require("../models/Enrollment/enrollmentRoute");
const feedbackRoute_1 = require("../models/feedback/feedbackRoute");
const quizRoute_1 = require("../models/Quiz/quizRoute");
const teacherFollow_route_1 = require("../models/Follow/teacherFollow.route");
exports.router = (0, express_1.Router)();
//All routes
const moduleRoutes = [
    { path: "/user", route: userRoute_1.UserRoutes },
    { path: "/auth", route: authRoute_1.authRoute },
    { path: "/course", route: TeacherRoute_1.CourseRoute },
    { path: "/lession", route: lessionRoute_1.LessonRoutes },
    { path: "/topic", route: topicRoute_1.TopicRoutes },
    { path: "/student", route: studentRoute_1.StudentsRoute },
    { path: "/enrollment", route: enrollmentRoute_1.EnrollmentRoute },
    { path: "/feedback", route: feedbackRoute_1.FeedbackRouter },
    { path: "/quiz", route: quizRoute_1.QuizRouter },
    { path: "/connection", route: teacherFollow_route_1.teacherFollowRoute },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
