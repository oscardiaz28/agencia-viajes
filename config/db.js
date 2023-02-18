import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

//creacion de una instancia de la clase Sequelize y que recibe como parametro info sobre la bd
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    poo: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    },
    operatorAliases: false
});

export default db;

