"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherFollowRoute = void 0;
// teacherFollow.routes.ts
const express_1 = require("express");
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const follow_Controller_1 = require("./follow.Controller");
const router = (0, express_1.Router)();
router.post("/:teacherId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), follow_Controller_1.TeacherFollowController.followTeacher);
router.post("/unfollow/:teacherId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), follow_Controller_1.TeacherFollowController.unfollowTeacher);
router.get("/teacher/followers/:teacherId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), follow_Controller_1.TeacherFollowController.getFollowers);
router.get("/student/following", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), follow_Controller_1.TeacherFollowController.getFollowing);
exports.teacherFollowRoute = router;
