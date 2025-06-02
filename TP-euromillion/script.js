const numberList = document.querySelectorAll(".card button");
console.log(numberList);

//code pour selectionner les boutons clické et leur donner la valeur "checked"
for (let i = 0; i < numberList.length; i++) {
    numberList[i].addEventListener("click", function () {
        numberList[i].classList.toggle("checked");
    });
}

//function pour récuperer les valeur inner html des boutons checked
// et les réunir dans un nouveau tableau "validatedNumbers"

const buttonPlay = document.querySelector(".buttonPlay");
console.log(buttonPlay);
buttonPlay.addEventListener("click", createGame);

function createGame() {
    let numberChoosed = document.querySelectorAll(".checked");

    for (let i = 0; i < numberChoosed.length; i++) {
        validatedNumbers.push(numberChoosed[i].innerHTML);
        console.log(validatedNumbers);
    }
}
let validatedNumbers = [];
