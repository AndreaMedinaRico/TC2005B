exports.getLogin = (request, response, next) => {
    response.render('login', {
        username: request.session.username || ''
    });
}

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
}