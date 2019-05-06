import Server from './clases/server';
import mongoose from 'mongoose';
import { SERVER_PORT } from './global/environment';

const server = new Server();

//conexion a la base de datos
mongoose.connect('mongodb://localhost/condominio', { useCreateIndex: true, useNewUrlParser: true}, ( err: any ) =>{
    
    if (err) throw err;
        console.log('Conectado a la base de datos puerto 27017');
})

server.satart( () => {
   console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`)

});
