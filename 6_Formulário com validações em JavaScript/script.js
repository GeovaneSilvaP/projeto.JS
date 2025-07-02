const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMenssage = document.querySelectorAll(".error-menssage");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    resetError();
    validateInputs();
});

function setError(input, errorMenssage){
    const errorMenssageElements = input.nextElementSibling;
    errorMenssageElements.textContent = errorMenssage;
    input.parentElement.classList.add("error");
};

function resetError(){
    errorMenssage.forEach((msg) =>{
        msg.textContent = "";
    });

    nome.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    assunto.parentElement.classList.remove("error");
    mensagem.parentElement.classList.remove("error");
};

function validateInputs(){
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === ""){
        setError(nome, "Nome não pode ficar em branco");
    };

    if(emailValue === ""){
        setError(email, "Email não pode ficar em branco");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Email inválido")
    };

    if(assuntoValue === ""){
        setError(assunto, "Assunto não pode ficar em branco");
    };

    if(mensagemValue === ""){
        setError(mensagem, "Mensagem não pode ficar em branco");
    };

};

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}