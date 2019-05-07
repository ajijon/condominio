import { Router, Request, Response } from 'express';
import { Usuario } from '../modelo/usuario';
import bcrypt from 'bcrypt';
import jwd from 'jsonwebtoken';
import { SEED } from '../global/environment';
import verificaToken from '../middlewares/autentication';

const loginRoutes = Router();

loginRoutes.post('./', (req: Request, res: Response)=>{

    const body = req.body;
    Usuario.findOne({ nombre: body.nombre}, (error, usuarioDB) =>{

        if (error){
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                error: error
            });
        }

        if (!usuarioDB){
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas -email',
                error: error
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas -password'
            });
        }

        const token = jwd.sign({usuario: usuarioDB}, SEED, { expiresIn:14400});
        usuarioDB.password= ':)';

        res.status(200).json({
            ok: true,
            usuario: usuarioDB,
            id: usuarioDB.id,
            token: token
        });
    });
});

export default loginRoutes;