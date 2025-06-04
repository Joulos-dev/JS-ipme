let form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const raceInput = document.querySelector("#race");

const buttonDelete = document.querySelector("#relacher");
const container = document.querySelector(".container");

// placé au début car il doit etre actif des l'ouverture de la page
// récuperer mon item avec la key "KEY" /
//décoder mon tableau en string et le remettre en tableau classique
let recup = localStorage.getItem("KEY");
let recupDecoded = JSON.parse(recup);
// si ma variable est vide ( pas d'animal ) cela créé mon tableau
if (recupDecoded === null) {
    recupDecoded = [];
}
// sinon créé mes .card animaux en suivant le tableau recupDecoded
else {
    for (let i = 0; i < recupDecoded.length; i++) {
        const name = recupDecoded[i][0];
        const race = recupDecoded[i][1];

        createCard(name, race);
    }
}
console.log(recupDecoded);

// event de bouton submit du formulaire pour mes fonctions
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const race = raceInput.value;
    createCard(name, race);
    storage();
});

// event bouton delete ( delete la liste des animaux)
// delete egalement le local storage
buttonDelete.addEventListener("click", function () {
    let animalList = document.querySelectorAll(".card");
    for (let i = 1; i < animalList.length; i++) {
        animalList[i].remove();
        localStorage.clear();
    }
});

// function qui créé mes cards d'animaux
function createCard(name, race) {
    // recherche et clonage de la carte déja existante (cacher en display)
    const card = document.querySelector(".card");
    const newCard = card.cloneNode(true);
    // récupere les éléments de la carte cloné
    const cardName = newCard.querySelector(".card-name");
    const cardRace = newCard.querySelector(".card-race");
    cardName.innerHTML = name;
    cardRace.innerHTML = race;
    // donne la destination du nouvel element (parent)
    container.append(newCard);
}

// fonction pour mettre en local storage a chaque event (submit)
// key = le nom de l'animal et value = sa race
function storage() {
    let key = nameInput.value;
    let value = raceInput.value;
    // créer un tableau / adapter ce tableau en string /
    // enregistrer ce tableau en local storage
    recupDecoded.push([key, value]);
    let arrayJson = JSON.stringify(recupDecoded);
    localStorage.setItem("KEY", arrayJson);
}
