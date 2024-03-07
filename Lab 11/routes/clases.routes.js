const express = require('express');
const router = express.Router();

const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <title> Lab 10 </title>
        <style> 
            body {
                background-color: #033a26; color: #f2f2f2; font-family: system-ui;
            }
            .centrado { 
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 class="centrado"> Bungou Stray Dogs </h1>
        <p class="centrado"> Información actualizada del anime </p> <br>
`;

const html_footer = `
        <footer>
            <p class="centrado"> ¡ Gracias por visitar esta página ! </p>
            <p class="centrado"> Vuelve pronto </p>
        </footer>
    </body>
</html>
`;

router.get('/', (request, response, next) => {
    let html = html_header;
    html += `
            <br> <h2> Rutas a las que puedes acceder: </h2> <br>
            <ul> 
                <li> /info: Información sobre el anime </li>
                <li> /personajes: Personajes principales </li>
                <li> /personal: Cuéntanos sobre ti </li>
            </ul> <br>
    `;
    html += html_footer;
    response.send(html);
});

router.get('/info', (request, response, next) => {
    let html = html_header;
    html += `
            <br> <h2> Resumen del anime: </h2> <br>
            <p> 
                Bungou Stray Dogs es un anime que sigue la historia de Atsushi Nakajima, un huérfano que 
                es expulsado de su orfanato y se encuentra con un hombre que intenta suicidarse. Este hombre 
                es Osamu Dazai, un detective con habilidades sobrenaturales que forma parte de la Agencia de 
                Detectives Armados. Atsushi se une a la agencia y comienza a trabajar con ellos para resolver 
                casos que involucran a otros usuarios de habilidades sobrenaturales.
            </p>
    `;
    html += html_footer;
    response.send(html);
});

router.get('/personal', (request, response, next) => {
    response.render('personal');
});

router.post('/personal', (request, response, next) => {
    let html = html_header;
    console.log(request.body);
    filesystem.writeFileSync('personal.txt', 'Nombre: ' + request.body.nombre + ', Personaje favorito: ' + request.body.personaje + '\n', {flag: 'a'});
    html += `
            <br> <h2> Gracias por compartir tu información </h2> <br>
    `;
    html += html_footer;
    response.send(html);
});

router.use((request, response, next) => {
    response.status(404);
    response.render('404')
});

module.exports = router;