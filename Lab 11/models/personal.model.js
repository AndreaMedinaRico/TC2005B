const datosPersonales = [
    {
        nombre: 'Andreita',
        edad: 20,
        personaje: 'Dazai Osamu'
    },
    {
        nombre: 'Diego',
        edad: 21,
        personaje: 'Atsushi Nakajima'
    }
];

module.exports = class Personal {
    // CONSTRUCTOR --> Crear nuevo objeto
    constructor(miNombre, miEdad, miPersonaje) {
        this.nombre = miNombre;
        this.edad = miEdad;
        this.personaje = miPersonaje;
    }

    // Guarda objeto de manera persistente
    save() {
        datosPersonales.push({
            nombre: this.nombre,
            edad: this.edad,
            personaje: this.personaje
        });
        // datosPersonales.push(this);
    }

    // Devuelve los objetos del almacenamiento persistente
    static  fetchAll() {
        return datosPersonales;
    }
}