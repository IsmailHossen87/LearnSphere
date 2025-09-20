import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { CourseControllers } from "./TeacherController";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseZodSchema } from "./CourseValidation";

const router = Router();

router.post("/", checkAuth(IRole.TEACHER), validateRequest(createCourseZodSchema),CourseControllers.createCourse);
router.get("/getAll", CourseControllers.getAllCourses);
router.get("/:id", checkAuth(IRole.TEACHER), CourseControllers.getSingleCourse);
router.patch("/:id", checkAuth(IRole.TEACHER), CourseControllers.updateCourse);

router.delete("/:id", checkAuth(IRole.TEACHER), CourseControllers.deleteCourse);



export const CourseRoute = router;
