import Sequelize from "sequelize";
import db from "../config/db.js";

export const Usuarios = db.define("usuarios", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false,
    },
   
});

Usuarios.sync({alter: true}).catch(console.error);