import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

const PORT = process.env.PORT || 4000

//conectar a la bd
db.authenticate()
    .then(() => {
        console.log('Base de datos Conectada')
    })
    .catch( (error) => {
        console.log(error);
    })

//habilitar pug
app.set('view engine', 'pug');

//creamos un middleware para obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//definir la carpeta publica
app.use(express.static('public'));

//se agrega router en la ruta determinada y lo pasamos como argumento.
//por lo tanto en la sgte ruta se manejara todas las solicitudes.
app.use('/', router); 


app.listen( PORT, () => {
    console.log('El servidor esta funcionando en el puerto ${PORT}');
})


 