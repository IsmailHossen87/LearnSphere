import express from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { studentsController } from "./studentController";


const router = express.Router();

router.post("/courses/view/:courseId", checkAuth(IRole.STUDENT), studentsController.trackCourseView);
router.post("/courses/like/:courseId", checkAuth(IRole.STUDENT), studentsController.trackCourseLike);
// different start
router.get("/allCourse", checkAuth(IRole.STUDENT), studentsController.browseCoursesController);
router.post("/enroll", checkAuth(IRole.STUDENT), studentsController.enrollCourseController);
router.get("/lessons/:courseId", checkAuth(IRole.STUDENT), studentsController.getCourseLessonsController);

// different end
router.post("/courses/feedback/:courseId", checkAuth(IRole.STUDENT), studentsController.addCourseFeedback);
router.get("/courses/analytics/:courseId", studentsController.courseAnalytics);


export const StudentsRoute = router;
