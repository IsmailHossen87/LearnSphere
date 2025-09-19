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
exports.globalErrorHandler = void 0;
const AppError_1 = __importDefault(require("../errorHelper/AppError"));
const handleCastError_1 = require("../helper/handleCastError");
const handle_zoderror_1 = require("../helper/handle.zoderror");
const handleDuplicateError_1 = require("../helper/handleDuplicateError");
const helperValidateError_1 = require("../helper/helperValidateError");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorSources = [];
    if (err.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.handleDuplicateError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        // It has no Source
    }
    else if (err.name === "CastError") {
        const simplifiedError = (0, handleCastError_1.handleCastError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        // It has no Source
    }
    else if (err.name === "ZodError") {
        const simplifiedError = (0, handle_zoderror_1.handleZodError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources || [];
    }
    else if (err.name === "ValidationError") {
        const simplifiedError = (0, helperValidateError_1.handleValidationError)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources || [];
    }
    else if (err instanceof AppError_1.default) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else if (err instanceof Error) {
        message = err.message;
        statusCode = 500;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
    });
});
exports.globalErrorHandler = globalErrorHandler;
