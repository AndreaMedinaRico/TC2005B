// Destructuring --> extrae propiedad RESPONSE del objeto EXPRESS
const { response } = require("express");
const Usuario = require('../models/usuario.model');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: false,            // No se muestra el formulario de REGISTRO, solo inicio de sesión
    });
}

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([usuarios, fieldData]) => {
            if (usuarios.length == 1) {
                request.session.username = request.body.username;
                response.redirect('/tropas');
            } else {
                response.redirect('/users/login');
            }
        })
        .catch((error) => {console.log(error);});
    
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
    const nuevo_usuario = new Usuario(
        request.body.username, 
        request.body.name, 
        request.body.password
    );
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
        });
}