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
exports.TopicService = void 0;
const topicModel_1 = require("./topicModel");
const AppError_1 = __importDefault(require("../../errorHelper/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
// Create a new Topic
const createTopic = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload.lesson) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "Lesson ID is required to create a topic");
    }
    const result = yield topicModel_1.TopicModel.create(payload);
    return result;
});
// Get all Topics by Lesson ID
const getTopicsByLesson = (lessonId) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (lessonId) {
        filter.lesson = lessonId;
    }
    const result = yield topicModel_1.TopicModel.find(filter).populate("lesson");
    return result;
});
// Get single Topic by ID
const getSingleTopic = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicModel_1.TopicModel.findById(id).populate("lesson");
    if (!result) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Topic not found");
    }
    return result;
});
// Update Topic by ID
const updateTopic = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicModel_1.TopicModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Topic not found for update");
    }
    return result;
});
// Delete Topic by ID
const deleteTopic = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield topicModel_1.TopicModel.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Topic not found for deletion");
    }
    return result;
});
exports.TopicService = {
    createTopic,
    getTopicsByLesson,
    getSingleTopic,
    updateTopic,
    deleteTopic,
};
