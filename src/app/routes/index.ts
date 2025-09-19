import { Router } from "express"
import { UserRoutes } from "../models/user/userRoute"
import { authRoute } from "../models/auth/authRoute"
import { CourseRoute } from "../models/Teacher/TeacherRoute"
import { LessonRoutes } from "../models/lession/lessionRoute"
import { TopicRoutes } from "../models/topic/topicRoute"
import { StudentsRoute } from "../models/Students/studentRoute"
import { EnrollmentRoute } from "../models/Enrollment/enrollmentRoute"
import { FeedbackRouter } from "../models/feedback/feedbackRoute"
import { QuizRouter } from "../models/Quiz/quizRoute"

export const router = Router()

const moduleRoutes = [
    { path: "/user", route: UserRoutes },
    { path: "/auth", route: authRoute },
    { path: "/course", route: CourseRoute },
    { path: "/lession", route: LessonRoutes },
    { path: "/topic", route: TopicRoutes },
    { path: "/student", route: StudentsRoute },
    { path: "/enrollment", route: EnrollmentRoute },
    { path: "/feedback", route: FeedbackRouter },
    { path: "/quiz", route: QuizRouter },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})