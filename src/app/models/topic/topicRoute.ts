import express from "express";
import { TopicController } from "./topicController";
import { checkAuth } from "../../middleware/checkAuth";
import { IRole } from "../user/userInterface";


const router = express.Router();

router.post("/", checkAuth(IRole.TEACHER),TopicController.createTopic);
router.get("/", checkAuth(IRole.TEACHER),TopicController.getTopicsByLesson); 
router.get("/:id",checkAuth(IRole.TEACHER), TopicController.getSingleTopic);
router.patch("/:id",checkAuth(IRole.TEACHER), TopicController.updateTopic);
router.delete("/:id",checkAuth(IRole.TEACHER), TopicController.deleteTopic);

export const TopicRoutes = router;
