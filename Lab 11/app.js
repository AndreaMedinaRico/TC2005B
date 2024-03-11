const filesystem = require('fs');
const express = require('express');
const app = express();

const path = require('path');
    // express.static() --> archivos estáticos --> html, css, img
    // __dirname --> variable de RUTA del directorio
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');      // EJS como motor de vistas
app.set('views', 'views');          // Carpeta de vistas

// SESSION
const session = require('express-session');

app.use(session({
    secret: 'aguapasapormicasacatedemicorazon', 
    resave: false,                  //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false,       //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// MIDDLEWARE
    // Permite hacer cambios a la petición antes de que llegue a su destino
    // Funciona para toda la aplicación
app.use((request, response, next) => {
    console.log('Middleware!');
    next();                             // Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasClases = require('./routes/home.routes.js');
const rutasClasesPersonajes = require('./routes/personajes.routes.js');
const rutasPersonal = require('./routes/personal.routes.js');
const rutasUsuarios = require('./routes/users.routes.js')

app.use('/personajes', rutasClasesPersonajes);
app.use('/personal', rutasPersonal);
app.use('/usuarios', rutasUsuarios);
app.use('/', rutasClases);

app.listen(3000);
