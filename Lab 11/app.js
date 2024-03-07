const filesystem = require('fs');
const express = require('express');
const app = express();

const path = require('path');
    // express.static() --> archivos estáticos --> html, css, img
    // __dirname --> variable de RUTA del directorio
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// MIDDLEWARE
    // Permite hacer cambios a la petición antes de que llegue a su destino
    // Funciona para toda la aplicación
app.use((request, response, next) => {
    console.log('Middleware!');
    next();                             // Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasClases = require('./routes/clases.routes');
const rutasClasesPersonajes = require('./routes/clases2.routes.js');

app.use('/personajes', rutasClasesPersonajes);
app.use('/', rutasClases);

app.listen(3000);