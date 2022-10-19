
import { Router } from 'express';
import { ApiProductos } from "../api/ApiProductos.js";


const routerVistas = Router()

routerVistas.get('/', (solicitud, respuesta)=> {
    respuesta.render("formProductos")
})

routerVistas.get('/productos', (solicitud, respuesta)=> {
    const productos = ApiProductos.obtenerTodos();
    respuesta.render("tableProductos", {productos: productos});
})

routerVistas.post('/productos', (solicitud, respuesta)=> {
    const {title, price, thumbnail} = solicitud.body;
    ApiProductos.guardar ({ title, price, thumbnail });
    respuesta.redirect("/")
})

export { routerVistas } 