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
exports.TopicController = void 0;
const topicService_1 = require("./topicService");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicService_1.TopicService.createTopic(req.body);
    res.status(http_status_codes_1.default.CREATED).json({
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Topic created successfully",
        data: result,
    });
});
const getTopicsByLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lessonId } = req.query;
    const result = yield topicService_1.TopicService.getTopicsByLesson(lessonId);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Topics retrieved successfully",
        data: result,
    });
});
const getSingleTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicService_1.TopicService.getSingleTopic(req.params.id);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Topic retrieved successfully",
        data: result,
    });
});
const updateTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicService_1.TopicService.updateTopic(req.params.id, req.body);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Topic updated successfully",
        data: result,
    });
});
const deleteTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield topicService_1.TopicService.deleteTopic(req.params.id);
    res.status(http_status_codes_1.default.OK).json({
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Topic deleted successfully",
        data: null,
    });
});
exports.TopicController = {
    createTopic,
    getTopicsByLesson,
    getSingleTopic,
    updateTopic,
    deleteTopic,
};
