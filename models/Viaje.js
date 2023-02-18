import Sequelize from 'sequelize';
import db from '../config/db.js';

// creacion de un modelo, que es una abstraccion que representa una tabla en la bd.
// El modelo le dice a sequelize sobre que entidad representa, como el nombre de la tabla y sus columnas con sus tipos de datos.
export const Viaje = db.define('viajes', {
    //atributos del modelo
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})