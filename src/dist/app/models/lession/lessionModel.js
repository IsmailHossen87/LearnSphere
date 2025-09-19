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
exports.LessonModel = void 0;
const mongoose_1 = require("mongoose");
const topicModel_1 = require("../topic/topicModel");
const lessonSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", required: true },
    topics: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Topic" }],
}, { timestamps: true, versionKey: false });
// if some topic delete
lessonSchema.pre("findOneAndDelete", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const lesson = yield this.model.findOne(this.getFilter());
        if (lesson) {
            yield topicModel_1.TopicModel.deleteMany({ lesson: lesson._id });
        }
        next();
    });
});
exports.LessonModel = (0, mongoose_1.model)("Lesson", lessonSchema);
