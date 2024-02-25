// *** Función 1 ***
var numero1 = parseInt(prompt("1. Ingresa un número:"));

document.write(`<span class="subtitulo"> 1. Tabla con los cuadrados y cubos del 1 al </span> 
        <span class "subtitulo" id="num1"> 0 </span> <br> <br>
    <table>
    <tr>
        <th> Número </th>
        <th> Cuadrado </th>
        <th> Cubo </th>
    </tr>`)
for (let i = 1; i <= numero1; i++) {
    let cuadrado = i * i;
    let cubo = i * i * i; 
    document.write(`<tr>
        <td> ${i} </td>
        <td> ${cuadrado} </td>
        <td> ${cubo} </td>
    </tr>`)
}
document.write(`</table> <br>`)
num1.innerText = numero1.toString();


// *** Función 2 ***
document.write(`<span class="subtitulo"> 2. Suma de dos números aleatorios </span> <br> <br>`);

var numero1_2 = Math.floor(Math.random() * 101);
var numero2_2 = Math.floor(Math.random() * 101);
var resultado2 = numero1_2 + numero2_2;

var time_ini = new Date().getTime();
var result2 = parseInt(prompt(`2. Ingresa la suma entre ${numero1_2} y ${numero2_2}`));
var time_end = new Date().getTime();

    // Milisegundos a segundos
var full_time = (time_end - time_ini) / 1000;

if (result2 == resultado2) {
    document.write(`<span> La suma entre ${numero1_2} y ${numero2_2} es... !correcta! </span>`);
} else {
    document.write(`<span> La suma entre ${numero1_2} y ${numero2_2} es... ¡incorrecta! </span>`);
}
document.write(`<p> Respuesta registrada: ${numero1_2} + ${numero2_2} = ${result2} </p>
    <p> Respuesta correcta: ${numero1_2} + ${numero2_2} = ${resultado2} </p>
    <p> Tiempo de respuesta: ${full_time} segundos </p> <br>`);


// *** Función 3 ***
document.write(`<span class="subtitulo"> 3. Contador de números positivos, negativos y ceros </span> <br>`);

var arreglo3 = [];
numero3 = parseInt(prompt(" 3. ¿Cuántos números deseas en el arreglo?"));
for (let i = 1; i <= numero3; i++) {
    arreglo3.push(parseInt(prompt(`Ingresa el número ${i}`)));
}

contador = (arreglo) => {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] == 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    document.write(`<p> El arreglo tiene ${negativos} números negativos, ${ceros} ceros y ${positivos} números positivos </p> <br>`);
    return;
}
contador(arreglo3);


// *** Función 4 ***
document.write(`<span class="subtitulo"> 4. Promedio de cada fila en una matriz </span> <br>`);

var matriz4 = [];
var numero1_4 = parseInt(prompt("4. ¿Cuántas filas deseas en tu matriz?"));
var numero2_4 = parseInt(prompt("¿Cuántas columnas deseas en tu matriz?"));
for (let i = 0; i < numero1_4; i++) {
    matriz4[i] = [];
    for (let j = 0; j < numero2_4; j++) {
        matriz4[i][j] = parseInt(prompt(`Ingresa el valor de la posición [${i}][${j}]`));
    }
}

promedios = (matriz) => {
    let promedio = 0;
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        promedio = suma / matriz[i].length;
        document.write(`<p> El promedio de la fila ${i} es ${promedio} </p>`);
    }
    return;
}
promedios(matriz4);


// *** Función 5 ***
// Regresar el número invertido
document.write(`<br> <span class="subtitulo"> 5. Número invertido </span> <br>`);

numero5 = prompt("5. Ingresa un número:");
arreglo5 = numero5.split("").reverse().join("");

document.write(`<p> El número ingresado es: ${numero5} </p>
    <p> El número invertido es: ${arreglo5} </p>`);