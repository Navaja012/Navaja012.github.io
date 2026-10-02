const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const reloj = document.getElementById("reloj");


function update() {
    const date = new Date();
    const hora = date.getHours() * 3600;
    const minutos = date.getMinutes() * 60
    const segundos = date.getSeconds()

    const segundosTotales = hora + minutos + segundos;
    reloj.textContent = segundosTotales
}

let numero = 0;

boton.addEventListener("click", function() {
    numero++;
    console.log(numero)
    texto.textContent = numero;
    texto.style.fontSize = "200%";
});

update();

setInterval(update, 1000);