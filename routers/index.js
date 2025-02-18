import express, { json } from 'express';
import {
    paginaRegistro,
    crearCuenta,
    login,
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    guardarTestimonios,
    paginaDetalleViajes,
    autenticarUsuario
} from "../controllers/paginaController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimonios", paginaTestimonios);
router.post("/testimonios", guardarTestimonios);
router.get("/viajes/:slug", paginaDetalleViajes);
router.get("/login", login);
router.post("/login", autenticarUsuario);
router.get("/registro", paginaRegistro);
router.post("/registro", crearCuenta);

export default router;