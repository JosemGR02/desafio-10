
//Imports
import express from "express";
import { routerProductos } from "./src/rutas/productos.js";
import { routerVistas } from "./src/rutas/vistas.js";
import handlebars from "express-handlebars";

const app = express();

//Puerto
const PORT = process.env.PORT || 8080;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Motor de plantilla
app.engine("hbs", handlebars.engine({ extname: ".hbs", defaultLayout: "main.hbs"}));

app.set("view engine", "hbs");
app.set("views", "./views");


//Rutas
app.use("/", routerVistas);
app.use('/api/productos', routerProductos);


//Servidor
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${server.address().port}`));