"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var messagesRoute_1 = require("./routes/messagesRoute");
var PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/messages', messagesRoute_1.messageRouter);
app.listen(PORT, function () {
    console.log('Servidor corriendose satisfactoriamente!');
});
