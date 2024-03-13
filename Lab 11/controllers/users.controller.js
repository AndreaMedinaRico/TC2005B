const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: false,                            // No se muestra el formulario de REGISTRO, solo inicio de sesión
            // Token asignado a csrfToken
        csrfToken: request.csrfToken(),             // Obtiene TOKEN CSRF asociado a la SESIÓN de usuario
            // A utilizarse en el FORMULARIO de inicio de sesión
    });
}

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([usuarios, fieldData]) => {

            if (usuarios.length == 1) {                     // Si el usuario EXISTE
                const usuario = usuarios[0];                // usuario del arreglo de la bd
                bcrypt.compare(request.body.password, usuario.password)
                    .then((doMatch) => {

                        if(doMatch) {                       // Si las contraseñas coinciden
                            request.session.username = request.body.username;
                            request.session.isLoggedIn = true;  // Usuario autenticado
                            response.redirect('/');
                        } else {
                            response.redirect('/users/login');  // De vuelta a iniciar sesión
                        }

                    })
                    .catch((error) => {
                        console.log(error);
                        response.redirect('/users/login');      // De veulta a iniciar sesión
                    });

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
    response.render('signup', {
        username: request.session.username || '',
        registro: true,             // Se muestra el formulario de REGISTRO 
        csrfToken: request.csrfToken(),            // Token de sesión de usuario a usarse en formulario
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