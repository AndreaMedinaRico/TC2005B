const precio_elem1 = parseInt(document.getElementById('precio1').innerText);
const precio_elem2 = parseInt(document.getElementById('precio2').innerText);
const precio_elem3 = parseInt(document.getElementById('precio3').innerText);

const cant_elem1 = document.getElementById('input_cant_elem1').value;
const cant_elem2 = document.getElementById('input_cant_elem2').value;
const cant_elem3 = document.getElementById('input_cant_elem3').value;


const total_pago = parseInt(document.getElementById('total_pagar').value);

const btn_total = document.getElementById('botton_total');

btn_total.onclick = () => {
    let total = 0;
    total = (precio_elem1 * cant_elem1) + (precio_elem2 * cant_elem2) + (precio_elem3 * cant_elem3);
    console.log(precio_elem1, cant_elem1, precio_elem2, cant_elem2, precio_elem3, cant_elem3)
    console.log(total);
    total_pago.innerText = total;
}
