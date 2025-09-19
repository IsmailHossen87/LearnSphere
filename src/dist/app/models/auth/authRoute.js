"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const authController_1 = require("./authController");
const router = (0, express_1.Router)();
router.post("/login", authController_1.authController.credentialLogin);
exports.authRoute = router;
