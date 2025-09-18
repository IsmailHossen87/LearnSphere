import { Router } from "express"
import { UserControllers } from "./userController"
import { checkAuth } from "../../middleware/checkAuth"
import { IRole } from "./userInterface"

const router = Router()


router.post("/register", UserControllers.createUser) 
router.get("/me", checkAuth(...Object.values(IRole)),UserControllers.getME)

export const UserRoutes = router