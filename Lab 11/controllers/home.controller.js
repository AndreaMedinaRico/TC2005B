exports.getHome = (request, response, next) => {
    response.render(home);
}

exports.getInfo = (request, response, next) => {
    response.render(info);
}

exports.get404 = (request, response, next) => {
    response.status(404);
    response.render('404');
}