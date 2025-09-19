"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const lessionService_1 = require("./lessionService");
const createLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionService_1.LessonService.createLesson(req.body);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Lesson created successfully",
        data: result,
    });
});
const getLessons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.query;
    const result = yield lessionService_1.LessonService.getLessons(courseId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Lessons retrieved successfully",
        data: result,
    });
});
const getSingleLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionService_1.LessonService.getSingleLesson(req.params.id);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Lesson retrieved successfully",
        data: result,
    });
});
const updateLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionService_1.LessonService.updateLesson(req.params.id, req.body);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Lesson updated successfully",
        data: result,
    });
});
const deleteLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield lessionService_1.LessonService.deleteLesson(req.params.id);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Lesson deleted successfully",
        data: null,
    });
});
exports.LessonController = {
    createLesson,
    getLessons,
    getSingleLesson,
    updateLesson,
    deleteLesson,
};
