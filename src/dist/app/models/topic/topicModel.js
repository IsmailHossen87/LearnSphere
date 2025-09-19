"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicModel = void 0;
const mongoose_1 = require("mongoose");
const topicSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    lesson: { type: mongoose_1.Schema.Types.ObjectId, ref: "Lesson", required: true },
    quiz: { type: Object },
}, { timestamps: true });
exports.TopicModel = (0, mongoose_1.model)("Topic", topicSchema);
