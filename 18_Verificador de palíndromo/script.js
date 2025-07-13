const palavraInput = document.querySelector("#palavra");
const botaoVerificar = document.querySelector("#botao-verificar")
const resultado = document.querySelector("#resultado")

function verificarPalindromo(){
    const palavra = palavraInput.value
    const palavraInvertida = palavra.split("").reverse().join("")

    if(palavra.toLowerCase()=== palavraInvertida.toLowerCase()){
        resultado.textContent = `A palavra "${palavra}" é um palimetro.`
    }else{
        resultado.textContent = `A palavra "${palavra}" não é um palimetro.`
    }

}

botaoVerificar.addEventListener("click", verificarPalindromo)

palavraInput.addEventListener("keyup", (e)=>{
    
    if (e.key === "Enter") {
        e.preventDefault()
        verificarPalindromo()
    }
})