import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {

    //consultar 3 viajes del modelo viaje
    try{

        //desctructuring de arrays
        const [viajes, testimoniales] = await Promise.all([Viaje.findAll({ limit: 3 }), Testimonial.findAll({ limit: 3 })])

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });

    }catch(error){
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {

    //se pasa como parametro el nombre la vista para que renderize la vista en el navegador.
    res.render('nosotros', {
        pagina: 'Nosotros'
    }); 
}

const paginaTestimoniales = async (req, res) => {
    try{
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });

    }catch(error){
        console.log(error)     
    }
    
}

const paginaViajes = async (req, res) => {

    //consultar a la bd
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params
    
    try{
        const viaje = await Viaje.findOne({ where: { slug: slug } })
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    }catch(error){
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}
