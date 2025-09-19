"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRoute = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const studentController_1 = require("./studentController");
const router = express_1.default.Router();
router.post("/courses/view/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.trackCourseView);
router.post("/courses/like/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.trackCourseLike);
// different start
router.get("/allCourse", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.browseCoursesController);
router.post("/enroll", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.enrollCourseController);
router.get("/lessons/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.getCourseLessonsController);
// different end
router.post("/courses/feedback/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), studentController_1.studentsController.addCourseFeedback);
router.get("/courses/analytics/:courseId", studentController_1.studentsController.courseAnalytics);
exports.StudentsRoute = router;
