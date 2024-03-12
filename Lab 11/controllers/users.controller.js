// Destructuring --> extrae propiedad RESPONSE del objeto EXPRESS
const { response } = require("express");

exports.getLogin = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: false,            // No se muestra el formulario de REGISTRO, solo inicio de sesión
    });
}

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
}

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');                 //Este código se ejecuta cuando la sesión se elimina.
    });
}

exports.getSignup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: true,             // Se muestra el formulario de REGISTRO 
    });
}

exports .postSignup = (request, response, next) => {
    response.redirect('/users/login')
}