import express from "express";
import { LessonController } from "./lessionController";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";


const router = express.Router();

router.post("/",checkAuth(IRole.TEACHER), LessonController.createLesson);
router.get("/",checkAuth(IRole.TEACHER), LessonController.getLessons);
router.get("/:id",checkAuth(IRole.TEACHER), LessonController.getSingleLesson);
router.patch("/:id",checkAuth(IRole.TEACHER), LessonController.updateLesson);
router.delete("/:id",checkAuth(IRole.TEACHER), LessonController.deleteLesson);

export const LessonRoutes = router;
