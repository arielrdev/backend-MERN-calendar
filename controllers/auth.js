import { response } from "express"
import Usuario from "../models/Usuario.js"


export const crearUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Correo ya registrado'
            })
        }

        usuario = new Usuario( req.body );   
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

export const loginUsuario = ( req, res = response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

export const revalidarToken = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

