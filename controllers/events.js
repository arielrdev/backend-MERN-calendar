import { response } from "express";

export const getEventos = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    })
}

export const crearEvento = ( req, res = response ) => {

    console.log(req.body);
    

    res.json({
        ok: true,
        msg: 'crearEvento'
    })
}

export const actualizarEvento = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento'
    })
}

export const eliminarEvento = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento'
    })
}