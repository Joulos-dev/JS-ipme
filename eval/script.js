let form = document.querySelector("form");
let container = document.querySelector("#quote-list");
// let buttonDelete = document.querySelector(".buttonDelete");

let authorInput = document.querySelector("#quote-author");
let textInput = document.querySelector("#quote-text");
let typeInput = document.querySelector("#quote-type");

let recupStorage = getStorage();
displayAllCitation();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = typeInput.value;
    const author = authorInput.value;
    const text = textInput.value;

    const carte = {
        type: type,
        name: author,
        text: text,
    };

    if (carte.name === "" || carte.text === "") {
        Swal.fire({
            title: "Erreur",
            text: "Vous devez renseigner tous les champs",
            icon: "question",
        });
    } else {
        setStorage(carte);
        displayAllCitation();
    }
});

function getStorage() {
    const storage = localStorage.getItem("citation");

    if (storage) {
        return JSON.parse(storage);
    }

    return [];
}

function setStorage(param) {
    recupStorage.push(param);
    let arrayJson = JSON.stringify(recupStorage);
    localStorage.setItem("citation", arrayJson);
}

function displayAllCitation() {
    container.innerHTML = "";
    const citationList = getStorage();

    if (citationList === null) {
        return;
    }

    for (let i = 0; i < citationList.length; i++) {
        container.insertAdjacentHTML(
            "beforeend",
            `
                <li class="card" style="background-color: burlywood">
                <div class="top-card">
                <h2> <span class="titre-card">Citation:</span> ${citationList[i].type}</h2>
                <button class="buttonDelete">Supprimer</button>
                </div>
                
                    <p><span class="author">${citationList[i].name} : </span> ${citationList[i].text}</p>
             
                </li>
            
            `
        );
        buttonDelete = document.querySelector("buttonDelete");
    }
}

// j'ai essayer 10000 facon différente pendant 3h
//  rien ne marche pour le bouton delete je n'arrive pas a le récuperer
//  et donc je ne peut rien essayer pour comprendre comment ca fonctionne

// buttonDelete.addEventListener("click", function () {
//     thisCard = citationList[i];
//     citationList.remove(thisCard);
//     localStorage.clear(thisCard);
// });
