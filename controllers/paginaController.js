import {Viaje} from "../models/viaje.js";
import {Testimonial} from "../models/testimoniales.js";
import {Usuarios} from "../models/usuarios.js";
import moment from 'moment';
import bcrypt from 'bcrypt';

const paginaInicio = async (req, res) => {
    const testimonios = await Testimonial.findAll({
        limit: 6,
        order: [["Id", "DESC"]],
    });
    res.render('inicio', {
        titulo: 'Inicio',
        clase: 'home',
        testimonios: testimonios,
        moment: moment,
        usuario: req.session.usuario
    });
};

const paginaNosotros = (req, res) => {
    const titulo = 'Nosotros';
    res.render('nosotros', {
        titulo,
        usuario: req.session.usuario
    });
};

const paginaViajes = async (req, res) => {
    const titulo = 'Viajes';
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        titulo,
        viajes,
        usuario: req.session.usuario
    });
};

const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonial.findAll();
        res.render('testimonios', {
            titulo: 'Testimonios',
            testimonios,
            moment: moment,
            usuario: req.session.usuario
        });
    } catch (err) {
        console.log(err);
    }
};

const guardarTestimonios = async (req, res) => {
    console.log(req.body);
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacio' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    if (errores.length > 0) {
        res.render('testimonios', {
            titulo: 'Testimonios',
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            usuario: req.session.usuario
        });
    } else {
        try {
            await Testimonial.create({ nombre: nombre, correoelectronico: correo, mensaje: mensaje });
            res.redirect('/testimonios'); //Guardo en la base de datos y lo envío a la misma vista
        } catch (error) {
            console.log(error);
        }
    }
};

const paginaDetalleViajes = async (req, res) => {
    const { slug } = req.params;

    try {
        const resultado = await Viaje.findOne({ where: { slug: slug } });

        res.render('viaje', {
            titulo: "Informacion del Viaje",
            resultado,
            moment: moment,
            usuario: req.session.usuario
        });

    } catch (err) {
        console.log(err);
    }
};

const login = (req, res) => {
    const titulo = 'Iniciar Sesión';
    res.render('login', {
        titulo,
        usuario: req.session.usuario
    });
};

const paginaRegistro = (req, res) => {
    res.render('registro', {
        titulo: 'Crear Cuenta',
        usuario: req.session.usuario
    });
};

const crearCuenta = async (req, res) => {
    const { nombre, email, password } = req.body;
    const errores = [];

    if (!nombre) {
        errores.push({ mensaje: 'El nombre es obligatorio' });
    }

    if (!email) {
        errores.push({ mensaje: 'El correo electrónico es obligatorio' });
    }

    if (!password) {
        errores.push({ mensaje: 'La contraseña es obligatoria' });
    }

    if (errores.length > 0) {
        return res.render('registro', {
            titulo: 'Crear Cuenta',
            errores,
            nombre,
            email,
            password,
            usuario: req.session.usuario
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await Usuarios.create({ nombre, email, password: hashedPassword });
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.render('registro', {
            titulo: 'Crear Cuenta',
            errores: [{ mensaje: 'Hubo un error al crear la cuenta' }],
            usuario: req.session.usuario
        });
    }
};

const autenticarUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuarios.findOne({ where: { email } });
        if (!usuario) {
            return res.render('login', {
                titulo: 'Iniciar Sesión',
                errores: [{ mensaje: 'El usuario no existe' }],
                usuario: req.session.usuario
            });
        }

        const passwordValido = await bcrypt.compare(password, usuario.password);
        if (!passwordValido) {
            return res.render('login', {
                titulo: 'Iniciar Sesión',
                errores: [{ mensaje: 'Contraseña incorrecta' }],
                usuario: req.session.usuario
            });
        }

        // Autenticación exitosa
        req.session.usuario = {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email
        };
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('login', {
            titulo: 'Iniciar Sesión',
            errores: [{ mensaje: 'Hubo un error al iniciar sesión' }],
            usuario: req.session.usuario
        });
    }
};
const cerrarSesion = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    guardarTestimonios,
    paginaDetalleViajes,
    login,
    paginaRegistro,
    crearCuenta,
    autenticarUsuario,
    cerrarSesion
};