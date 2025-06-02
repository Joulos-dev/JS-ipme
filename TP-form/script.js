let form = document.querySelector("form");

const prenom = document.querySelector("#prenom");
const nom = document.querySelector("#nom");
const age = document.querySelector("#age");
const sexe = form.sexe;
const profession = document.querySelector("#profession");
const region = document.querySelector("#region");
const hobbies = form.hobbies;
const lien = document.querySelector("#lien-linked-in");

const cardPrenom = document.querySelector(".cardPrenom");
const cardNom = document.querySelector(".cardNom");
const cardAge = document.querySelector(".cardAge");
const cardSexe = document.querySelector(".cardSexe");
const cardProfession = document.querySelector(".cardProfession");
const cardRegion = document.querySelector(".cardRegion");
const cardHobbies = document.querySelector(".cardHobbies");
const cardLien = document.querySelector(".cardLien");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    cardPrenom.innerHTML = prenom.value;
    cardNom.innerHTML = nom.value;
    cardAge.innerHTML = age.value;

    for (let i = 0; i < sexe.length; i++) {
        if (sexe[i].checked === true) {
            cardSexe.innerHTML = sexe[i].value;
        }
    }

    cardProfession.innerHTML = profession.value;
    cardRegion.innerHTML = region.value;
    cardHobbies.innerHTML = "";

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked === true) {
            cardHobbies.innerHTML += " / " + hobbies[i].value;
        }
    }

    cardLien.innerHTML = lien.value;

    console.log(event);
});
