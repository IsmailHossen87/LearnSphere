"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const topicController_1 = require("./topicController");
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const router = express_1.default.Router();
router.post("/", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), topicController_1.TopicController.createTopic);
router.get("/", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), topicController_1.TopicController.getTopicsByLesson);
router.get("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), topicController_1.TopicController.getSingleTopic);
router.patch("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), topicController_1.TopicController.updateTopic);
router.delete("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), topicController_1.TopicController.deleteTopic);
exports.TopicRoutes = router;
