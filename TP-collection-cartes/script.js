let form = document.querySelector("form");

let nameInput = document.querySelector("#nom");
let typeInput = document.querySelector("#type");
let pouvoirInput = document.querySelector("#pouvoir");

const buttonDelete = document.querySelector("#delete");
const container = document.querySelector(".container");

displayAllCard();

let recupDecoded = [];
let recup = localStorage.getItem("CARTES");
if (recup !== null) {
    recupDecoded = JSON.parse(recup);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const type = typeInput.value;
    const pouvoir = pouvoirInput.value;

    const carte = {
        name: name,
        type: type,
        pouvoir: pouvoir,
    };

    storage(carte);
    displayAllCard();
});

function displayAllCard() {
    container.innerHTML = "";
    let recup = localStorage.getItem("CARTES");

    if (recup === null) {
        return;
    }
    let recupDecoded = JSON.parse(recup);
    console.log(recupDecoded);

    for (let i = 0; i < recupDecoded.length; i++) {
        container.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
                <h2><span>${recupDecoded[i].type}</span>${recupDecoded[i].name}</h2>
                <p>pouvoir : <span>${recupDecoded[i].pouvoir}</span></p>
            </div>
        `
        );
    }
}

// event bouton delete ( delete la liste des cartes)
// delete egalement le local storage !!!
buttonDelete.addEventListener("click", function () {
    let carteList = document.querySelectorAll(".card");
    console.log(carteList);
    for (let i = 0; i < carteList.length; i++) {
        carteList[i].remove();
        localStorage.clear();
        recupDecoded = [];
    }
});

function storage(carte) {
    recupDecoded.push(carte);
    let arrayJson = JSON.stringify(recupDecoded);
    localStorage.setItem("CARTES", arrayJson);
}
