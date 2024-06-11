"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const setting_1 = require("./common/setting");
const route_1 = __importDefault(require("./route"));
// Create an Express application
const app = (0, express_1.default)();
const startServer = () => {
    const httpServer = http_1.default.createServer(app);
    app.use(route_1.default);
    httpServer.listen(setting_1.PORT, () => {
        // Log a message when the server is successfully running
        console.log(`Server is running on http://localhost:${setting_1.PORT}`);
    });
};
startServer();
