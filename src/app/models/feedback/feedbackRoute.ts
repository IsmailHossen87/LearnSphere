// feedback.routes.ts
import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { FeedbackController } from "./feedbackController";


const router = Router();

router.post("/:courseId", checkAuth(IRole.STUDENT), FeedbackController.addFeedbackController);
router.get("/:courseId", checkAuth(IRole.TEACHER), FeedbackController.getCourseFeedbacksController);

export const FeedbackRouter = router;
