import express from "express";
import { LessonController } from "./lessionController";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { validateRequest } from "../../middleware/validateRequest";
import { createLessonZodSchema } from "./lessionValidation";
import { updateCourseZodSchema } from "../Teacher/CourseValidation";


const router = express.Router();

router.post("/",checkAuth(IRole.TEACHER), validateRequest(createLessonZodSchema),LessonController.createLesson);
router.get("/", LessonController.getLessons);
router.get("/:id", LessonController.getSingleLesson);
router.patch("/:id",checkAuth(IRole.TEACHER), validateRequest(updateCourseZodSchema),LessonController.updateLesson);
router.delete("/:id",checkAuth(IRole.TEACHER), LessonController.deleteLesson);

export const LessonRoutes = router;
