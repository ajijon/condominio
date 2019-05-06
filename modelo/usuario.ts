import { Document, Schema, Model, model} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { IUsuario } from '../interfaces/usuario';

export interface IUsuarioModel extends IUsuario, Document{
    fullName: string;
}

const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'], 
    message: '{VALUE} no es un rol permitido'
}

const rolesdePago = {
    valido: [ 'PAGADO', 'NO_PAGADO'],
    message: [ '{valido} no es una forma de pago valida']
}

export var usuarioSchema: Schema = new Schema({
    
    nombre: { type: String, required:[ true, 'El nombre es necesario']},
    apellidoP: { type: String, required:[ true, 'El apellido es necesario']},
    apellidoM: { type: String, required:[ true, 'El apellido materno es necesario']},
    casa_num: { type: String, required: [ true, 'El numero de casa es necesario']},
    tel_casa: { type: String, required: [ false] },
    celular: { type: String, required: [ true, ' El numero de celular es necesaio']},
    email: { type: String, unique: true, required: [ true, ' EL correo es necesario']},
    password: { type: String, required: [ true, 'La contraseña es necesaria']},
    role: { type: String, enum: rolesValidos, default: 'USER_ROLE'},
    pago: { type: String, enum: rolesdePago, default: 'NO_PAGADO'}

},

{ collection: 'usuario' }

);

usuarioSchema.plugin(uniqueValidator, { message: '{ PATH } debe ser unico ' });