import { response } from "express";
import Evento from "../models/Evento.js";

export const getEventos = async ( req, res = response ) => {
    const eventos = await Evento.find()
                                .populate('user', 'name');

    res.json({
        ok: true,
        eventos
    })
}

export const crearEvento = async ( req, res = response ) => {
    
    const evento = new Evento( req.body );    

    try {

        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuniquese con el administrador'
        })
        
    }
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