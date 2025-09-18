import { Router } from "express"
import { UserRoutes } from "../models/user/userRoute"
import { authRoute } from "../models/auth/authRoute"
import { CourseRoute } from "../models/Teacher/TeacherRoute"

export const router = Router()

const moduleRoutes = [
    { path: "/user", route: UserRoutes },
    { path: "/auth", route: authRoute },
    { path: "/course", route: CourseRoute },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})