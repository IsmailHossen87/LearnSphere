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
exports.TeacherFollowController = void 0;
const TeacherModel_1 = require("../Teacher/TeacherModel");
const followTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { teacherId } = req.params;
        const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
        const existing = yield TeacherModel_1.TeacherFollow.findOne({ teacherId, studentId });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: "Already followed this teacher",
            });
        }
        const doc = yield TeacherModel_1.TeacherFollow.create({ teacherId, studentId });
        return res.status(201).json({
            success: true,
            message: "Teacher followed successfully",
            data: doc,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
});
const unfollowTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { teacherId } = req.params;
        const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
        const deleted = yield TeacherModel_1.TeacherFollow.findOneAndDelete({ teacherId, studentId });
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "You are not following this teacher",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Unfollowed teacher successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
});
const getFollowers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teacherId } = req.params;
    const followers = yield TeacherModel_1.TeacherFollow.find({ teacherId }).populate("studentId", "name email");
    return res.json({ success: true, data: followers });
});
const getFollowing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const studentId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const following = yield TeacherModel_1.TeacherFollow.find({ studentId }).populate("teacherId", "name bio");
    return res.json({ success: true, data: following });
});
exports.TeacherFollowController = { followTeacher, unfollowTeacher, getFollowers, getFollowing };
