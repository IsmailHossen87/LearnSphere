import { Router } from "express"
import { UserRoutes } from "../models/user/userRoute"
import { authRoute } from "../models/auth/authRoute"
import { CourseRoute } from "../models/Teacher/TeacherRoute"
import { LessonRoutes } from "../models/lession/lessionRoute"
import { TopicRoutes } from "../models/topic/topicRoute"

export const router = Router()

const moduleRoutes = [
    { path: "/user", route: UserRoutes },
    { path: "/auth", route: authRoute },
    { path: "/course", route: CourseRoute },
    { path: "/lession", route: LessonRoutes },
    { path: "/topic", route: TopicRoutes },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})