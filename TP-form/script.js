let form = document.querySelector("form");
console.log(form);
const prenom = document.querySelector("#prenom");
console.log(prenom);
const nom = document.querySelector("#nom");
console.log(nom);
const age = document.querySelector("#age");
console.log(age);
const sexe = form.sexe;
console.log(sexe);
const profession = document.querySelector("#profession");
console.log(profession);
const region = document.querySelector("#region");
console.log(region);
const hobbies = form.hobbies;
console.log(hobbies);
const lien = document.querySelector("#lien-linked-in");
console.log(lien);

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
