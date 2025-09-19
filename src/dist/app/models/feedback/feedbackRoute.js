"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRouter = void 0;
// feedback.routes.ts
const express_1 = require("express");
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const feedbackController_1 = require("./feedbackController");
const router = (0, express_1.Router)();
router.post("/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.STUDENT), feedbackController_1.FeedbackController.addFeedbackController);
router.get("/:courseId", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), feedbackController_1.FeedbackController.getCourseFeedbacksController);
exports.FeedbackRouter = router;
