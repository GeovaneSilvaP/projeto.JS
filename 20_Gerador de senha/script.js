//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbol")
const copyPasswordButton = document.querySelector("#copy-passoword")

//Funções
const getLetterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
    
}

const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
    
}
const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () =>{
    const symbols = "(){}[]+=<>/?!@#$%&*.-_"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{

    let password = ""

    //Segunda versão
    const passwordLength = +lengthInput.value;

    const generators = []

    if(lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if(numbersInput.checked){
        generators.push(getNumber)
    }

    if(symbolsInput.checked){
        generators.push(getSymbol)
    }
    
    if(generators.length === 0){
        return
    }

    for (let i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(()=>{

            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
            
        })
        
    }
    password = password.slice(0, passwordLength)
   
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
    
    
}



//Eventos
generatePasswordButton.addEventListener("click", ()=>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,)
    
});

openCloseGeneratorButton.addEventListener("click", () =>{
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) =>{
    e.preventDefault()

    const passoword = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(passoword).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso!"

        setTimeout(() =>{
            copyPasswordButton.innerText = "Copiar"
        }, 1000)
    })
    
})