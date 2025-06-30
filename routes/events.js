/**
 * Rutas de Eventos
 * host + /api/events
 */
import { Router } from "express";

import { getEventos, crearEvento, actualizarEvento, eliminarEvento } from "../controllers/events.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

//* Todas debe pasar por la validacion del JWT - Evita pasar el middleware en cada router
router.use( validarJWT );

router.get('/', getEventos );

router.post('/', crearEvento);

router.put('/:id', actualizarEvento );

router.delete('/:id', eliminarEvento );

export default router;