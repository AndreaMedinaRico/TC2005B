exports.getPersonajes = (request, response, next) => {
    response.render('personajes.ejs', {
        username: request.session.username || ''
    });
};

exports.getSecundarios = (request, response, next) => {
    response.render('secundarios.ejs', {
        username: request.session.username || ''
    });
};

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404', {
        username: request.session.username || ''
    });
};