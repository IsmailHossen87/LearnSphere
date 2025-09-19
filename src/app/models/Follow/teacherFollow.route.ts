// teacherFollow.routes.ts
import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { TeacherFollowController } from "./follow.Controller";


const router = Router();

router.post("/:teacherId", checkAuth(IRole.STUDENT), TeacherFollowController.followTeacher);
router.post("/unfollow/:teacherId", checkAuth(IRole.STUDENT), TeacherFollowController.unfollowTeacher);
router.get("/teacher/followers/:teacherId", checkAuth(IRole.TEACHER), TeacherFollowController.getFollowers);
router.get("/student/following", checkAuth(IRole.STUDENT), TeacherFollowController.getFollowing);

export const teacherFollowRoute = router;
