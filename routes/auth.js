/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

import { Router } from "express";
const router = Router();


router.get('/', (req, res) => {
    res.json({
        ok: true
    })
});

export default router;
