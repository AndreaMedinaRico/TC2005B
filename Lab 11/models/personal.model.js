const datosPersonales = [
    {
        nombre: 'Andreita',
        edad: 20,
        personaje: 'Dazai Osamu', 
        imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Fbungou_stray_dogs%2Fpage%2Fitem%2Fosamu-dazai%2FX0LZ_NKpiXI7rZdaXnW7n6DlaMgP3WXGg0v&psig=AOvVaw0aIC0_l1dVk1ZFSAr4VNOa&ust=1710305823354000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi-2u737YQDFQAAAAAdAAAAABAD'
    },
    {
        nombre: 'Diego',
        edad: 21,
        personaje: 'Atsushi Nakajima',
        imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F798896421397357633%2F%3Famp_client_id%3DCLIENT_ID%2528_%2529%26mweb_unauth_id%3D&psig=AOvVaw2TIeB1hhlmFfolvsMVyBd-&ust=1710305935436000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNi466T47YQDFQAAAAAdAAAAABAI'
    }
];

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
        datosPersonales.push({
            nombre: this.nombre,
            edad: this.edad,
            personaje: this.personaje,
            imagen: this.imagen
        });
        // datosPersonales.push(this);
    }

    // Devuelve los objetos del almacenamiento persistente
    static  fetchAll() {
        return datosPersonales;
    }
}