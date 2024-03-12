const filesystem = require('fs');
const Personal = require('../models/personal.model');

exports.getPersonal = (request, response, next) => {
    response.render('personal', {
        username: request.session.username || ''
    });
}

exports.postPersonal = (request, response, next) => {
    const mi_personal = new Personal(
        request.body.nombre,
        request.body.edad,
        request.body.personaje
    );
    mi_personal.save();

    response.setHeader('Set-Cookie', 'ultima_persona=' + request.body.nombre + '; HttpOnly');

    response.render('personalPost', {
        username: request.session.username || '',
        datosPersonales: Personal.fetchAll(),
        ultima_persona: request.cookies.ultima_persona || '',        // Usando cookie parser
    });
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404', {
        username: request.session.username || ''
    });
}