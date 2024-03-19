exports.getHome = (request, response, next) => {
    response.render('home',{
        username: request.session.username || '',
        privilegios: request.session.privilegios || [],
    });
}

exports.getInfo = (request, response, next) => {
    response.render('info', {
        username: request.session.username || '',
        privilegios: request.session.privilegios || [],
    });
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404', {
        username: request.session.username || ''
    });
}