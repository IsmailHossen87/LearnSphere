import { Router } from "express"
import { UserControllers } from "./userController"
import { checkAuth } from "../../middleware/checkAuth"
import { IRole } from "./userInterface"
import { validateRequest } from "../../middleware/validateRequest"
import { createUserZodSchema } from "./userValidate"

const router = Router()


router.post("/register", validateRequest(createUserZodSchema),UserControllers.createUser) 
router.get("/me", checkAuth(...Object.values(IRole)),UserControllers.getME)

export const UserRoutes = router