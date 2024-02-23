let total_pago = parseInt(document.getElementById('total_pagar').innerText);

const button_suma1 = document.getElementById('suma1');
const button_resta1 = document.getElementById('resta1');
const precio_elem1 = parseInt(document.getElementById('precio1').innerText);

button_suma1.onclick = () => {
    let cant_elem1 = document.getElementById('cant1');
    cant_elem1 = parseInt(cant1.innerText);

    if (cant_elem1 < 5) {
        cant_elem1++;
        cant1.innerText = cant_elem1;
        total_pago += precio_elem1;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
    
}

button_resta1.onclick = () => {
    let cant_elem1 = document.getElementById('cant1');
    cant_elem1 = parseInt(cant1.innerText);

    if (cant_elem1 > 0) {
        cant_elem1--;
        cant1.innerText = cant_elem1;
        total_pago -= precio_elem1;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
}

const button_suma2 = document.getElementById('suma2');
const button_resta2 = document.getElementById('resta2');
const precio_elem2 = parseInt(document.getElementById('precio2').innerText);

button_suma2.onclick = () => {
    let cant_elem2 = document.getElementById('cant2');
    cant_elem2 = parseInt(cant2.innerText);

    if (cant_elem2 < 5) {
        cant_elem2++;
        cant2.innerText = cant_elem2;
        total_pago += precio_elem2;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
}

button_resta2.onclick = () => {
    let cant_elem2 = document.getElementById('cant2');
    cant_elem2 = parseInt(cant2.innerText);

    if (cant_elem2 > 0) {
        cant_elem2--;
        cant2.innerText = cant_elem2;
        total_pago -= precio_elem2;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
}

const button_suma3 = document.getElementById('suma3');
const button_resta3 = document.getElementById('resta3');
const precio_elem3 = parseInt(document.getElementById('precio3').innerText);

button_suma3.onclick = () => {
    let cant_elem3 = document.getElementById('cant3');
    cant_elem3 = parseInt(cant3.innerText);

    if (cant_elem3 < 5) {
        cant_elem3++;
        cant3.innerText = cant_elem3;
        total_pago += precio_elem3;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
}

button_resta3.onclick = () => {
    let cant_elem3 = document.getElementById('cant3');
    cant_elem3 = parseInt(cant3.innerText);

    if (cant_elem3 > 0) {
        cant_elem3--;
        cant3.innerText = cant_elem3;
        total_pago -= precio_elem3;
        total_pagar.innerText = total_pago.toString();
        iva.innerText = (total_pago * 0.16).toString();
    }
}

const titulo_camb = document.getElementById('titulo_cambio');

titulo_camb.addEventListener('mousemove', function() {
    titulo_camb.innerText = "¡Los artículos más recientes del mercado!";
});
titulo_camb.addEventListener('mouseout', function () {
    titulo_camb.innerText = "Jujutsu Kaisen";
});

const info_iva = document.getElementById('info');
info_iva.ondblclick = () => {
    alert('El IVA es un impuesto indirecto que grava la venta de bienes y servicios en México');
}