const progresso = document.querySelector(".progresso");
const btnVoltar = document.querySelector("#btn-voltar");
const btnProximo = document.querySelector("#btn-proximo");

let progress = 0;

function updateProgressBar(){
    progresso.style.width = progress + "%";
}


function proximoPasso() {
  progress += 10;
  if (progress > 100) progress = 10;
  updateProgressBar();
}

function voltarPasso() {
  progress -= 10;
  if (progress < 0) progress = 0;
  updateProgressBar();
}

btnProximo.addEventListener("click", proximoPasso)
btnVoltar.addEventListener("click", voltarPasso)
