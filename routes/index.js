import express from 'express';
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router(); //metodo que permite crear un nuevo objeto Router

//routing
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros)

router.get('/testimoniales', paginaTestimoniales)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje);

router.post('/testimoniales', guardarTestimonial);


export default router;


