const colorsDivs = document.querySelector(".colors");
const generateButton = document.querySelector("#generate-button");

function generateColors(){
    colorsDivs.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color;
        const colorName = document.createElement("p");
        colorName.textContent = color;
        colorName.style.color = color;
        colorDiv.appendChild(colorName);
        colorsDivs.appendChild(colorDiv);
    };
};

function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
};

generateButton.addEventListener("click", generateColors);