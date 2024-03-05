const filesystem = require('fs');
const express = require('express');
const app = express();

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

app.use('/', rutasClases);
app.listen(3000);

/*
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!');      // Manda la respuesta

    // response.statusCode = 404;       VARIABLE
    // respone.status(404).send('404'); FUNCIÓN
});

app.use( (request, response, next) => {
    response.status(404);
    let html = html_header;
    html += html_footer;
    response.send(html);
});
*/
