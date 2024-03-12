const db = require('../util/database');

module.exports = class Personal {
    // CONSTRUCTOR --> Crear nuevo objeto
    constructor(miNombre, miEdad, miPersonaje, miImagen) {
        this.nombre = miNombre;
        this.edad = miEdad;
        this.personaje = miPersonaje;
        this.imagen = miImagen;
    }

    // Guarda objeto de manera persistente
    save() {
        return db.execute(
            `INSERT INTO persona (nombre, edad, personaje, imagen) 
            VALUES (?, ?, ?, ?)`, 
            [this.nombre, this.edad, this.personaje, this.imagen]);
    }

    // Devuelve los objetos del almacenamiento persistente
    static  fetchAll() {
        return db.execute('SELECT * FROM persona');
    }

    static fetch(idPersona) {
        if (idPersona) 
            return this.fetchOne(idPersona);
        else
            return this.fetchAll();
    }

    static fetchOne(idPersona) {
        return db.execute('SELECT * FROM persona WHERE idPersona = ?', [idPersona]);
    }
}