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

router.get('/secundarios', (request, response, next) => {
    let html = html_header;
    html += `
            <br> <h2> Personajes secundarios: </h2> <br>
            <ul>
                <li> Ryunosuke Akutagawa </li>
                <li> Chūya Nakahara </li>
                <li> Ōgai Mori</li>
                <li> Gin Akutagawa </li>
                <li> Sakunosuke Oda </li>
                <li> Michizō Tachihara </li>
            </ul>
    `;
    html += html_footer;
    response.send(html);
});

router.use((request, response, next) => {
    response.status(404);
    let html = html_header;
    html += '<h2 class="centrado"> Error 404: Página no encontrada ): </h2>';
    html += html_footer;
    response.send(html);
});

module.exports = router;