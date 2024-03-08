exports.getPersonal = (request, response, next) => {
    response.render('personal');
}

exxports.postPersonal = (request, response, next) => {
    filesystem.writeFileSync('personal.txt', 'Nombre: ' + request.body.nombre + ', Personaje favorito: ' + request.body.personaje + '\n', {flag: 'a'});
    response.render('personalPost');
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404');
}