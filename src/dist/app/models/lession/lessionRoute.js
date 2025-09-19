"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonRoutes = void 0;
const express_1 = __importDefault(require("express"));
const lessionController_1 = require("./lessionController");
const checkAuth_1 = require("../../middleware/checkAuth");
const userInterface_1 = require("../user/userInterface");
const router = express_1.default.Router();
router.post("/", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), lessionController_1.LessonController.createLesson);
router.get("/", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), lessionController_1.LessonController.getLessons);
router.get("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), lessionController_1.LessonController.getSingleLesson);
router.patch("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), lessionController_1.LessonController.updateLesson);
router.delete("/:id", (0, checkAuth_1.checkAuth)(userInterface_1.IRole.TEACHER), lessionController_1.LessonController.deleteLesson);
exports.LessonRoutes = router;
