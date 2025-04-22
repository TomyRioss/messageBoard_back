"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
var express_1 = require("express");
var messagesControllers_1 = require("@/controllers/messagesControllers");
exports.messageRouter = (0, express_1.Router)();
exports.messageRouter.get('/', messagesControllers_1.getMessages);
