
import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { FeedbackController } from "./feedbackController";
import { validateRequest } from "../../middleware/validateRequest";
import { createFeedbackZodSchema } from "./feedback.validation";


const router = Router();

router.post("/:courseId", checkAuth(IRole.STUDENT), validateRequest(createFeedbackZodSchema),FeedbackController.addFeedbackController);
router.get("/:courseId", checkAuth(IRole.TEACHER), FeedbackController.getCourseFeedbacksController);

export const FeedbackRouter = router;
