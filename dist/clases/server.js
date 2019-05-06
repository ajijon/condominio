"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = require("../global/environment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
    }
    Server.prototype.satart = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
