import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { CourseControllers } from "./TeacherController";

const router = Router();

router.post("/", checkAuth(IRole.TEACHER), CourseControllers.createCourse);

router.patch("/:id", checkAuth(IRole.TEACHER), CourseControllers.updateCourse);

router.delete("/:id", checkAuth(IRole.TEACHER), CourseControllers.deleteCourse);



export const CourseRoute = router;
