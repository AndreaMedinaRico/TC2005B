const express = require('express');
const router = express.Router();

const filesystem = require('fs');

router.get('/', (request, response, next) => {
    response.render('personal');
});

router.post('/', (request, response, next) => {
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