import express, {json} from 'express';
import {paginaRegistro, crearCuenta, login, paginaInicio, paginaNosotros , paginaViajes , paginaTestimonios , guardarTestimonios , paginaDetalleViajes} from "../controllers/paginaController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimonios", paginaTestimonios);
router.post("/testimonios", guardarTestimonios);
router.get("/viajes/:slug", paginaDetalleViajes);
router.get("/login", login);
router.get("/registro", paginaRegistro);
router.post("/registro", crearCuenta);


router.get("/viajes/:slug", async (req, res) => {
    try {
        const { slug } = req.params;
        const viaje = await Viaje.findOne({ where: { slug } });

        if (!viaje) {
            return res.redirect("/viajes");
        }

        res.render("viaje", {
            titulo: viaje.titulo,
            resultado: viaje
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/registro", (req, res) => {
    res.render("registro", {
        titulo: "Crear Cuenta"
    });
});
router.post("/registro", async (req, res) => {
    const { email, password } = req.body;
    try {
        await Usuarios.create({
            email,
            password
        });
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
});

export default router;