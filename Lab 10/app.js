const filesystem = require('fs');           // Sistema de archivos

const traka = () => {
    console.log("Traka kheee");
}
setTimeout(traka, 7000);

// HTML header y footer
const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <title> Lab 10 </title>
        <style> 
            body {
                background-color: #033a26; color: #f2f2f2; font-family: system-ui;
            }
            .centrado { 
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 class="centrado"> Bungou Stray Dogs </h1>
        <p class="centrado"> Información actualizada del anime </p> <br>
`;

const html_footer = `
            <footer>
            <p class="centrado"> ¡ Gracias por visitar esta página ! </p>
            <p class="centrado"> Vuelve pronto </p>
        </footer>
    </body>
</html>
`;

const http = require('http');               // Protocolo HTTP

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
            <br> <h2> Rutas a las que puedes acceder: </h2> <br>
            <ul> 
                <li> /info: Información sobre el anime </li>
                <li> /personajes: Personajes principales </li>
                <li> /personal: Cuéntanos sobre ti </li>
            </ul> <br>
        `);
        response.write(html_footer);
        response.end();

    } else if (request.url == "/info" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
            <br> <h2> Resumen del anime: </h2> <br>
            <p> 
                Bungou Stray Dogs es un anime que sigue la historia de Atsushi Nakajima, un huérfano que 
                es expulsado de su orfanato y se encuentra con un hombre que intenta suicidarse. Este hombre 
                es Osamu Dazai, un detective con habilidades sobrenaturales que forma parte de la Agencia de 
                Detectives Armados. Atsushi se une a la agencia y comienza a trabajar con ellos para resolver 
                casos que involucran a otros usuarios de habilidades sobrenaturales.
            </p>
        `);
        response.write(html_footer);
        response.end();

    } else if (request.url == "/personajes" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
            <br> <h2> Personajes principales: </h2> <br>
            <ul>
                <li> Atsushi Nakajima </li>
                <li> Osamu Dazai </li>
                <li> Doppo Kunikida </li>
                <li> Ranpo Edogawa </li>
                <li> Junichirou Tanizaki </li>
                <li> Kenji Miyazawa </li>
                <li> Akiko Yosano </li>
                <li> Yukichi Fukuzawa </li>
        `);
        response.write(html_footer);
        response.end();

    } else if (request.url == "/personal" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
            <form method="POST">
                <label for="nombre"> Nombre: </label>
                <input type="text" id="nombre" name="nombre" required> <br>

                <label> Personaje favorito: </label>
                <input type="text" id="personaje" name="personaje"> <br>

                <input type="submit" value="Enviar">
            </form> <br>
        `);
        response.write(html_footer);
        response.end();

    } else if (request.url == "/personal" && request.method == "POST") {
        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();

            const nombre = datos_completos.split('&')[0].split('=')[1];
            const personaje = datos_completos.split('&')[1].split('=')[1];

            filesystem.writeFileSync('personal.txt', `Nombre: ${nombre}, Personaje favorito: ${personaje}`);
            return response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write("<h2> Error 404: Página no encontrada ): </h2>");
        response.write(html_footer);
        response.end();
    }
});

server.listen(3000);