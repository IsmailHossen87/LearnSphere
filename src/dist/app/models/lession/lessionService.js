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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonService = void 0;
const lessionModel_1 = require("./lessionModel");
const createLesson = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionModel_1.LessonModel.create(payload);
    return result;
});
const getLessons = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = courseId ? { course: courseId } : {};
    const result = yield lessionModel_1.LessonModel.find(filter)
        .populate("course")
        .populate("topics");
    return result;
});
const getSingleLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionModel_1.LessonModel.findById(id)
        .populate("course")
        .populate("topics");
    return result;
});
const updateLesson = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionModel_1.LessonModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lessionModel_1.LessonModel.findByIdAndDelete(id);
    return result;
});
exports.LessonService = {
    createLesson,
    getLessons,
    getSingleLesson,
    updateLesson,
    deleteLesson,
};
