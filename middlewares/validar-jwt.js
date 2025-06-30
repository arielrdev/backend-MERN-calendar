import { response } from "express";
import jwt from 'jsonwebtoken';


export const validarJWT = ( req, res = response, next ) => {
    //* x-token de los headers

    const token = req.header('x-token');
    
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const { uid, name } = jwt.verify(
            token, 
            process.env.SECRET_JWT_SEED
        );

        //* Es lo que se pasa por referencia al controller
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }

    next();
}