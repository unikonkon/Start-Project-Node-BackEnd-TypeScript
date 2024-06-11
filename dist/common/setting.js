"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const env = process.env.NODE_ENV;
const envFile = `.env.${env}`;
if (fs_1.default.existsSync(envFile)) {
    console.log(`Using ${envFile} file to supply config environment variables`);
    dotenv_1.default.config({ path: envFile });
}
exports.PORT = process.env.PORT || 3000;
