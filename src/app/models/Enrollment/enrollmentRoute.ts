import { Router } from "express";
import { EnrolledController } from "./enrollmentController";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";

const router = Router();

router.post("/follow",checkAuth(IRole.STUDENT), EnrolledController.followCourseController);
router.post("/unfollow",checkAuth(IRole.STUDENT), EnrolledController.unfollowCourseController);
router.patch("/progress", checkAuth(IRole.STUDENT),EnrolledController.updateProgressController);
router.get("/course/students/:courseId",checkAuth(IRole.TEACHER), EnrolledController.getCourseStudentsController);

export  const EnrollmentRoute =router
