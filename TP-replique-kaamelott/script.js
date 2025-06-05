let replique = document.querySelector(".replique");
let nouvelleReplique = document.querySelector("#nouvelle-replique");
let deleteButton = document.querySelector("#delete");

let historique = document.querySelector(".historique");
recupStorage = getStorage();
displayHisto();

//EVENT SUR LE CLICK "nouvelle replique"
nouvelleReplique.addEventListener("click", () => {
    fetch(`https://kaamelott.xyz/api/v1/quote/random`).then((response) => {
        if (response.status === 404) {
            console.error(" erreur 404");
            alert(" erreur 404 ");
        }
        if (response.status === 200) {
            return response.json().then((data) => {
                replique.innerHTML = "";
                console.log(data);
                // création de la réplique(card) principale (jaune)
                let para = document.createElement("p");
                let character = document.createElement("h2");
                character.textContent = data.characts;
                para.textContent = data.content;

                replique.append(character, para);
                // création d'un objet avec les parametre de la réplique principale
                repliqueObjet = {
                    character: data.characts,
                    para: data.content,
                };
                setStorage(repliqueObjet);
                // displayHisto(); // METHODE 1 avec le "innerHTML = "";"
            });
        }
    });
});

//function pour récuperer les infos du storage
function getStorage() {
    const storage = localStorage.getItem("REPLIQUES");

    if (storage) {
        recupStorage = JSON.parse(storage);
        return recupStorage;
    }
    return [];
}

// function pour créer un storage en pushant les infos de l'objet dans un tableau
// puis créer une div avec les param de l'objet (createReplicateHtml)
function setStorage(param) {
    recupStorage = getStorage();
    recupStorage.push(param);
    let arrayJson = JSON.stringify(recupStorage);
    localStorage.setItem("REPLIQUES", arrayJson);
    console.log(arrayJson);

    createRepliqueHtml(param);
}

//function qui utilise le tableau de storage récupérer pour créer
// une 'card' par objet avec les bonne infos dans historique
function displayHisto() {
    // historique.innerHTML = ""; // METHODE 1 AVEC LE displayHisto dans l'event
    const quoteList = getStorage();
    console.log(quoteList);

    for (const quote of quoteList) {
        console.log(quote);
        let card = document.createElement("div");
        card.classList.add("card");
        historique.append(card);
        let titleCard = document.createElement("h2");
        let paraCard = document.createElement("p");
        titleCard.textContent = quote.character;
        paraCard.textContent = quote.para;
        card.append(titleCard, paraCard);
    }
}

// METHODE 2 // pour créer des card en utilisant "insertAdjacentHTML"
function createRepliqueHtml(param) {
    console.log(historique);
    historique.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2>${param.character}</h2>
        <p>${param.para}<p>
        <div>
        `
    );
}

//bouton pour delete les card dans historique et
// clear le local storage
deleteButton.addEventListener("click", function () {
    let cardList = document.querySelectorAll(".card");
    console.log(cardList);

    for (let i = 0; i < cardList.length; i++) {
        cardList[i].remove();
        localStorage.clear();
        recupStorage = [];
    }
});
