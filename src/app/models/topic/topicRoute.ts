import express from "express";
import { TopicController } from "./topicController";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";
import { validateRequest } from "../../middleware/validateRequest";
import { createTopicZodSchema, updateTopicZodSchema,  } from "./topic.validation";


const router = express.Router();

router.post("/", checkAuth(IRole.TEACHER),validateRequest(createTopicZodSchema),TopicController.createTopic);
router.get("/" ,TopicController.getTopicsByLesson); 
router.get("/:id", TopicController.getSingleTopic);
router.patch("/:id",checkAuth(IRole.TEACHER), validateRequest(updateTopicZodSchema),TopicController.updateTopic);
router.delete("/:id",checkAuth(IRole.TEACHER), TopicController.deleteTopic);

export const TopicRoutes = router;
