const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {

    const error = request.session.error || '';      // ERROR DE SESIÓN o vacío
    request.session.error = '';                     // Limpia ERROR después de mostrarlo

    response.render('login', {
        username: request.session.username || '',
        registro: false,                            // No se muestra el formulario de REGISTRO, solo inicio de sesión
            // Token asignado a csrfToken
        csrfToken: request.csrfToken(),             // Obtiene TOKEN CSRF asociado a la SESIÓN de usuario
            // A utilizarse en el FORMULARIO de inicio de sesión
        error: error,
        privilegios: request.session.privilegios || [],   // Permisos
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
                            Usuario.getPrivilegios(usuario.username)
                                .then(() => {
                                    request.session.privilegios = usuario.privilegios;      
                                    request.session.username = usuario.username;
                                    request.session.isLoggedIn = true;  // Usuario autenticado
                                    response.redirect('/');
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else {
                            request.session.error = 'Usuario o contraseña incorrectos';
                            response.redirect('/users/login');  // De vuelta a iniciar sesión
                        }

                    })
                    .catch((error) => {
                        console.log(error);
                        response.redirect('/users/login');      // De veulta a iniciar sesión
                    });

            } else {
                request.session.error = 'Usuario o contraseña incorrectos';  // ERROR de inicio de sesión
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
    const error = request.session.error || '';      // ERROR DE SESIÓN o vacío
    request.session.error = '';                     // Limpia ERROR después de mostrarlo

    response.render('signup', {
        username: request.session.username || '',
        privilegios: request.session.privilegios || [],
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
            request.session.error = 'Nombre de usuario no disponible';
            response.redirect('/users/signup');
        });
}