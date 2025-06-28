const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

function relogioDigital(){
    const agora = new Date();

    const hours = agora.getHours().toString().padStart(2, "0");
    const minutes = agora.getMinutes().toString().padStart(2, "0");
    const segunts = agora.getSeconds().toString().padStart(2, "0");

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = segunts;

}

setInterval(relogioDigital, 1000)