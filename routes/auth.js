/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

import { Router } from "express";
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth.js';
const router = Router();


router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

export default router;
