const filesystem = require('fs');
const Personal = require('../models/personal.model');

exports.getPersonal = (request, response, next) => {
    response.render('personal', {
        username: request.session.username || '',
        privilegios: request.session.privilegios || [],
    });
}

exports.postPersonal = (request, response, next) => {
    const mi_personal = new Personal(
        request.body.nombre,
        request.body.edad,
        request.body.personaje,
        request.body.imagen
    );
    mi_personal.save()
    .then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 'ultima_persona=' + request.body.nombre + '; HttpOnly');

    }).catch((error) => {
        console.log(error);
    });
    
    Personal.fetch(request.params.idPersona)
    .then(([rows, fieldData]) => {
        console.log("rows");
        response.render('personalPost', {
            datosPersonales: rows,
            ultima_persona: request.cookies.ultima_persona || '',        // Usando cookie parser
            username: request.session.username || '',
        });
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404', {
        username: request.session.username || ''
    });
}