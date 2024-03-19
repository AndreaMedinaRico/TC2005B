module.exports = (request, response, next) => {
    let canUpload = false; 
    
    for (let privilegio of request.session.privilegios) {
        if (privilegio == 'subir_info_personal') {
            canUpload = true;
        }
    }

    if (canUpload) {        // Si sí tiene privilegio, continua siguiente middleware
        next();
    } else {
        return response.redirect('/users/logout')
    }
}