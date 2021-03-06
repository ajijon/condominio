"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};
var rolesdePago = {
    valido: ['PAGADO', 'NO_PAGADO'],
    message: ['{valido} no es una forma de pago valida']
};
exports.usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellidoP: { type: String, required: [true, 'El apellido es necesario'] },
    apellidoM: { type: String, required: [true, 'El apellido materno es necesario'] },
    casa_num: { type: String, unique: true, required: [true, 'El numero de casa es necesario'] },
    tel_casa: { type: String, required: [false] },
    celular: { type: String, required: [true, ' El numero de celular es necesaio'] },
    email: { type: String, unique: true, required: [true, ' EL correo es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] },
    role: { type: String, enum: rolesValidos, default: 'USER_ROLE' },
    pago: { type: String, enum: rolesdePago, default: 'NO_PAGADO' }
}, { collection: 'usuario' });
exports.usuarioSchema.plugin(mongoose_unique_validator_1.default, { message: '{ PATH } debe ser unico ' });
exports.Usuario = mongoose_1.model("Usuario", exports.usuarioSchema);
