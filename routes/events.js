/**
 * Rutas de Eventos
 * host + /api/events
 */
import { Router } from "express";

import { getEventos, crearEvento, actualizarEvento, eliminarEvento } from "../controllers/events.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { isDate } from "../helpers/idDate.js";

const router = Router();

//* Todas debe pasar por la validacion del JWT - Evita pasar el middleware en cada router
router.use( validarJWT );

router.get('/', getEventos );

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ], 
    crearEvento );

router.put(
    '/:id', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento );

router.delete('/:id', eliminarEvento );

export default router;