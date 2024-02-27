//fs es el módulo con las funciones para MANIPULAR sistema de archivos
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

// FUNCIÓN 1. Recibe arreglo de números y devuelve el promedio
const prom_numeros = (arreglo) => {
    let acum = 0;
    let size = arreglo.length;
    for (let i = 0; i < size; i++) {
        acum += arreglo[i];
    }
    return acum / size;
}
arreglo = [10, 20, 30, 40, 50];
console.log(prom_numeros(arreglo));

// FUNCIÓN 2. Recibe string y lo escribe en archivo de texto
const string_a_archivo = (nombre_archivo, string) => {
    filesystem.writeFileSync(nombre_archivo, string);
    return "Se creó el archivo y escribió la frase :)";
}
console.log(string_a_archivo('hola.txt', 'Hola desde node 2'));

// FUNCIÓN 3. Recibe un número y devuelve el factorial
const factorial = (numero) => {
    let acum = 1;
    for (let i = 1; i <= numero; i++) {
        acum *= i;
    }
    return acum;
}
console.log(factorial(5));

const http = require('http');
// Escrito en paradigma FUNCIONAL
    // Escucha las peticiones de HTTP en el PUERTO 3000
    // Puede ser cualquier puerto mientras no esté ocupado
const server = http.createServer( (request, response) => {

    if (request.url == "/") {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');        // Navegador se prepara para recibir HTML

        response.write(`<!DOCTYPE html>

        <html>
            <head>
                <title> Laboratorio #1 </title>
                <link rel="stylesheet" type="text/css" href="Lab1_css.mini.css">
            </head>
            
            <body>
                <h1 class="titulo"> Laboratorios #1, #2 y #3 </h1>
                <h4 class="subtitulo"> Andrea Medina Rico </h4>
                <h4 class="subtitulo"> A01705541 </h4>
                <h4 class="subtitulo"> a01705541@tec.mx </h4>
        
                <h3> <br> Preguntas de Laboratorio #1: HTML </h3>
            
                <p class="pregunta"> 1. ¿Cuál es la diferencia entre internet y la World Wide Web? </p>  
                <p class="respuesta"> El internet es una extensa red de computadoras conectadas entre sí alrededor del mundo. En cambio, 
                    la World Wide Web es un sistema que, a través de internet, nos permite navegar entre páginas con
                    hipervínculos. </p>
                
                    
                <p class="pregunta"> 2. ¿Cuáles son las partes de un URL? </p>
                <list>
                    <li> Protocolo HTTPS: HyperText Transfer Protocol. Transfiere información entre actores dentro de la WWW.
                        La 'S' hace referencia a la seguridad, pues cifra la información para prevenir daños en caso ser interceptada. </li>
                    <li> Subdominio: Se encuentra entre el protocolo y el dominio. </li>
                    <li> Dominio: Nombre único que identifica a una página web.  </li>
                    <li> TLD: Top Level Domain. Se encuentra al final del dominio. </li>
                    <li> Ruta: Páginas y subpáginas que pueden encontrarse en el sitio </li>
                    <li> Parámetro: Después del signo '?' y separado con '&'. Puede referirse a búsqueda. </li>
                </list>

            </body>
            <footer>
                <p> <br> Visual studio code </p>
                <a> https://code.visualstudio.com/ </a>
            </footer>
        </html>`);

        response.end();    
        response.statusCode                                      // return  --> se detiene la carga de la página
    }  


}).listen(3000);
// Lo mismo que --> server.listen(3000);  