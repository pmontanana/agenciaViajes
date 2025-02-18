import {Viaje} from "../models/viaje.js";
import {Testimonial} from "../models/testimoniales.js";
import {Usuarios} from "../models/usuarios.js";
import moment from 'moment';


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
    });
    
}

const paginaNosotros = (req, res) => {
    const titulo = 'Nosotros';
    res.render('nosotros', {
        titulo,
    });
};

const paginaViajes = async (req, res) => {
    const titulo = 'Viajes';
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        titulo,
        viajes,
    });
};

const paginaTestimonios = async (req, res) => {
    try{
        const testimonios = await Testimonial.findAll({
            limit: 6,
            order: [["Id", "DESC"]],
        });
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios: testimonios,
            moment: moment,
        });
    }catch(err){
        console.log(err);
    }
};

const guardarTestimonios = async (req, res) => {
    console.log(req.body);
    const{nombre, correo, mensaje}=req.body;

    const errores= [];

    if(nombre.trim()===''){
        errores.push({mensaje: 'El nombre está vacio'});
    }

    if(correo.trim()===''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim()===''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length>0){
        res.render('testimonios', {
            titulo: 'Testimonios',
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
        })
    } else{
        try{
            await Testimonial.create({nombre: nombre, correoelectronico: correo,mensaje: mensaje,});
            res.redirect('/testimonios'); //Guardo en la base de datos y lo envío a la misma vista
        }catch(error){
            console.log(error);
        }
    }
};

const paginaDetalleViajes = async (req, res) => {
    const{slug} = req.params;

    try{
        const resultado = await Viaje.findOne({where:{slug:slug}});

        res.render('viaje', {
            titulo: "Informacion del Viaje",
            resultado,
            moment:moment,
        });

    }catch(err){
        console.log(err);
    }
};

const login = (req, res) => {
    const titulo = 'Iniciar Sesión';
    res.render('login', {
        titulo,
    });
};

const paginaRegistro = (req, res) => {
    res.render('registro', {
        titulo: 'Crear Cuenta',
    });
};

const crearCuenta = async (req, res) => {
    const {email, password} = req.body;
    try{
        await Usuarios.create({email, password});
        res.redirect('/login');
    }catch(err){
        console.log(err);
    }
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
}