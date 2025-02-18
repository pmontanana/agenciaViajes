import express, {json} from 'express';
import router from './routers/index.js';
import session from 'express-session';
import db from './config/db.js';
import dotenv from 'dotenv';
import favicon from 'serve-favicon';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Conectar a la BBDD
db.authenticate()
    .then(()=> console.log('Conectado a la base de datos'))
    .catch(err=>console.log(err));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

//Habilitar pug
app.set('view engine', 'pug');

app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use((req,res,next) => {
    const year = new Date().getFullYear();
    res.locals.year = year;
    res.locals.nombreP  = 'Agencia de Viajes';
    next();
});

app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static('public'));

app.use("/", router);
