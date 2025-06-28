//Selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//Função para converter as unidades
function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    // converter a entrada para metros
    let metros;

    switch (fromValue) {
        case "m":
            metros = inputElement.value;
            break;
        case "km":
            metros = inputElement.value * 1000;
            break;
        case "cm":
            metros = inputElement.value / 100;
            break;
        case "mm":
            metros = inputElement.value / 1000;
            break;
    }

    //coverter metros para unidade de saida
    let result;

    switch (toValue) {
        case "m":
            result = metros;
            break;
        case "km":
            result = metros / 1000;
            break;
        case "cm":
            result = metros * 100;
            break;
        case "mm":
            result = metros * 1000;
            break;
    }

    //exibir resultado no input
    outputElement.value = result;

    //exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return
   
}

convertButton.addEventListener("click", convert);