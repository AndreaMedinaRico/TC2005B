exports.getPersonajes = (request, response, next) => {
    response.render('personajes.ejs');
}

exports.getSecundarios = (request, response, next) => {
    response.render('secundarios');
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404');
};