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

router.get('/personajes', (request, response, next) => {
    let html = html_header;
    html += `
            <br> <h2> Personajes principales: </h2> <br>
            <ul>
                <li> Atsushi Nakajima </li>
                <li> Osamu Dazai </li>
                <li> Doppo Kunikida </li>
                <li> Ranpo Edogawa </li>
                <li> Junichirou Tanizaki </li>
                <li> Kenji Miyazawa </li>
                <li> Akiko Yosano </li>
                <li> Yukichi Fukuzawa </li>
    `;
    html += html_footer;
    response.send(html);
});

router.get('/personal', (request, response, next) => {
    let html = html_header;
    html += `
            <form method="POST">
                <label for="nombre"> Nombre: </label>
                <input type="text" id="nombre" name="nombre" required> <br>

                <label> Personaje favorito: </label>
                <input type="text" id="personaje" name="personaje"> <br>

                <input type="submit" value="Enviar">
            </form> <br>
    `;
    html += html_footer;
    response.send(html);
});

router.post('/personal', (request, response, next) => {

});

router.use((request, response, next) => {
    response.status(404);
    let html = html_header;
    html += '<h2 class="centrado"> Error 404: Página no encontrada ): </h2>';
    html += html_footer;
    response.send(html);
});

module.exports = router;