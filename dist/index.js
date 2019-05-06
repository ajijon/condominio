"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./clases/server"));
var mongoose_1 = __importDefault(require("mongoose"));
var environment_1 = require("./global/environment");
var server = new server_1.default();
//conexion a la base de datos
mongoose_1.default.connect('mongodb://localhost/condominio', { useCreateIndex: true, useNewUrlParser: true }, function (err) {
    if (err)
        throw err;
    console.log('Conectado a la base de datos puerto 27017');
});
server.satart(function () {
    console.log("Servidor corriendo en el puerto " + environment_1.SERVER_PORT);
});
