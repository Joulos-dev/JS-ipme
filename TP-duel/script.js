let form = document.querySelector("form");

const pOne = document.querySelector("#nom-un");
const pTwo = document.querySelector("#nom-deux");
const mOne = document.querySelector("#maison-un");
const mTwo = document.querySelector("#maison-deux");

const newPOne = document.querySelector(".nom-duelliste-un");
const newPTwo = document.querySelector(".nom-duelliste-deux");
const newMOne = document.querySelector(".maison-duelliste-un");
const newMTwo = document.querySelector(".maison-duelliste-deux");

const hBarOne = document.querySelector("#progressOne");
const hBarTwo = document.querySelector("#progressTwo");

// mes deux objets avec les proriété (caractéristiques)

const playerOne = {
    name: "",
    maison: "",
    forceMin: 5,
    forceMax: 15,
    hpActuel: 200,
};

const playerTwo = {
    name: "",
    maison: "",
    forceMin: 5,
    forceMax: 15,
    hpActuel: 200,
};

// event quand on clique sur le bouton soumettre qui trigger toute les variables et démarre le combat

form.addEventListener("submit", (event) => {
    event.preventDefault();
    playerOne.name = pOne.value;
    playerTwo.name = pTwo.value;
    playerOne.maison = mOne.value;
    playerTwo.maison = mTwo.value;
    newPOne.innerHTML = pOne.value;
    newPTwo.innerHTML = pTwo.value;
    newMOne.innerHTML = mOne.value;
    newMTwo.innerHTML = mTwo.value;

    if (playerOne.maison === "ordre-du-phoenix") {
        playerOne.hpActuel += 500;
        console.log("vie ordre trigger");
    }

    if (playerTwo.maison === "mange-mort") {
        playerTwo.hpActuel += 250;
        console.log("mange-mort-vie");
    }

    // buff passif poufsouffle +20 pv

    if (playerOne.maison === "poufsouffle") {
        playerOne.hpActuel += 100;
        console.log("poufsouffle 1 trigger");
    }

    if (playerTwo.maison === "poufsouffle") {
        playerTwo.hpActuel += 100;
        console.log("poufsouffle 2 trigger");
    }

    hBarOne.max = playerOne.hpActuel;
    hBarTwo.max = playerTwo.hpActuel;

    // boucle qui permet de mettre un delay entre chaque itérations avec un timer ( 1000 en ms)

    let toto = setInterval(function () {
        const degatsOne = attack(playerOne, playerTwo);
        const degatsTwo = attack(playerTwo, playerOne);
        hBarOne.value = playerOne.hpActuel;
        hBarTwo.value = playerTwo.hpActuel;
        historique(degatsOne, degatsTwo);

        if (playerOne.hpActuel <= 0 || playerTwo.hpActuel <= 0) {
            clearInterval(toto);
        }
    }, 1000);

    // boucle qui permet de jouer le combat instantané sans delay

    // while (playerOne.hpActuel > 0 && playerTwo.hpActuel > 0) {
    //     const degatsOne = attack(playerOne, playerTwo);
    //     const degatsTwo = attack(playerTwo, playerOne);
    //     hBarOne.value = playerOne.hpActuel;
    //     hBarTwo.value = playerTwo.hpActuel;
    //     console.log(hBarOne.value);
    //     console.log(hBarTwo.value);
    //     historique(degatsOne, degatsTwo);
    // }
});

// fonction qui me donne l'historique de ce qu'il se passe à chaque itération de ma boucle
// et créé des 'li' dans l'endroit renseigner (append)

function historique(degatsOne, degatsTwo) {
    const newLiOne = document.createElement("li");
    const newLiTwo = document.createElement("li");
    newLiOne.classList.add("li-one");
    newLiTwo.classList.add("li-two");
    newLiOne.innerHTML =
        playerOne.name +
        " attaque " +
        playerTwo.name +
        " pour " +
        degatsOne +
        " dégats .Il reste " +
        playerTwo.hpActuel +
        " point de vie à " +
        playerTwo.name +
        ".";
    newLiTwo.innerHTML =
        playerTwo.name +
        " attaque " +
        playerOne.name +
        " pour " +
        degatsTwo +
        " dégats .Il reste " +
        playerOne.hpActuel +
        " point de vie à " +
        playerOne.name +
        ".";
    document.querySelector("ol").append(newLiOne, newLiTwo);
}

// fonction qui fait que a chaque itération de boucle
// mes deux objets interagissent en s'attaquant

function attack(player, target) {
    let min = player.forceMin;
    let max = player.forceMax;
    let degats = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(degats);

    if (player.maison === "ordre-du-phoenix") {
        degats = degats + 5;
        let soin = chance(15);

        if (soin === true) {
            player.hpActuel += 100;
            console.log("SOINS");
        }
    }

    if (player.maison === "mange-mort") {
        let avada = chance(10);

        if (avada === true) {
            degats += 250;
            console.log("AVADA KADAVRA !!!");
        }
    }

    if (player.maison === "gryffondor") {
        degats = degats + 3;
        console.log("gryffondor trigger");
    }

    if (player.maison === "serdaigle") {
        let fireball = chance(10);

        if (fireball === true) {
            degats += 40;
            console.log("FIREBALL");
        }
    }

    if (target.maison === "serpentard") {
        let dodge = chance(25);

        if (dodge === true) {
            degats = 0;
            console.log("DODGE");
        }
    }

    if (target.maison === "mange-mort") {
        let dodge = chance(25);

        if (dodge === true) {
            degats = 0;
            console.log("DODGE");
        }
    }

    target.hpActuel -= degats;
    return degats;
}

// fonction qui permet de créer une chance random sur 100
// ( le pourcentage) est a régler en parametres de fonction

function chance(pourcentage) {
    let min = 1;
    let max = 100;
    let chance = Math.floor(Math.random() * (max - min + 1)) + min;

    return chance <= pourcentage;
}
