const filesystem = require('fs');
const Personal = require('../models/personal.model');

exports.getPersonal = (request, response, next) => {
    response.render('personal');
}

exports.postPersonal = (request, response, next) => {
    filesystem.writeFileSync('personal.txt', 'Nombre: ' + request.body.nombre + ', Personaje favorito: ' + request.body.personaje + '\n', {flag: 'a'});
    
    const mi_personal = new Personal(
        request.body.nombre,
        request.body.edad,
        request.body.personaje
    );
    mi_personal.save();

    response.render('personalPost', {
        datosPersonales: Personal.fetchAll()
    });
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404');
}