"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./app/routes");
const globalErrorHandlare_1 = require("./app/middleware/globalErrorHandlare");
const notFound_1 = require("./app/middleware/notFound");
const passport_1 = __importDefault(require("passport"));
require("./app/config/passport");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use("/api/v1", routes_1.router);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome LearnSphere System Backend"
    });
});
app.use(globalErrorHandlare_1.globalErrorHandler);
app.use(notFound_1.notFound);
exports.default = app;
