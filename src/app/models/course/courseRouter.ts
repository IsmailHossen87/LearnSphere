import { Router } from "express"


const router = Router()


    .route("/").get(getCourses)
    .post(protect, restrictTo("Teacher"), createCourse);

 .route("/:id").patch(protect, restrictTo("Teacher"), updateCourse)
.delete(protect, restrictTo("Teacher"), deleteCourse);
export const authRoute = router