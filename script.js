// let mySuperH1 = document.getElementsByTagName("h1");
// console.log(mySuperH1);

// let mySuperH1ById = document.getElementById("mon-super-h1");
// console.log(mySuperH1ById);

// let mySuperH1ByClass = document.getElementsByClassName("ma-class-h1");
// console.log(mySuperH1ByClass);

let bla = document.querySelector(".test-p");
console.log(bla);

let blabla = document.querySelector("#bonjour");
console.log(blabla);

let blablabla = document.querySelectorAll("p")[3];
console.log(blablabla);

let blablablabla = document.querySelector("[data-test]");
console.log(blablablabla);

//modifier l'intérieur d'un HTML
blablablabla.innerHTML = "nouveau hello";

// récuperer l'intérieur d'un HTML
// let var = variable.innerHTML;

let span = document.querySelector("span");
console.log(span);

let string = span.innerHTML;
console.log(string);

if (string.length > 15) {
    span.remove();
}

// EXO // 1

let exoUno = document.querySelector("#info");
console.log(exoUno);
exoUno.innerHTML = "Bonjour, ceci est un nouveau texte.";

// EXO // 2

let exoDos = document.querySelectorAll("h2");
console.log(exoDos);
for (i = 0; i < exoDos.length; i++) {
    exoDos[i].innerHTML += " important";
}

//EXO // 3

let exoTres = document.querySelector("#a-supprimer");
console.log(exoTres);
exoTres.remove();

//EXO // 4

// let exoQuatro = document.querySelectorAll("p");
// console.log(exoQuatro);
// for (i = 0; i < exoQuatro.length; i++) {
//     exoQuatro[i].remove();
// }

// EXO // 5

let fruits = document.querySelectorAll("#fruits li");
console.log(fruits);
fruits[0].innerHTML = "Fraise";
fruits[1].innerHTML = "Kiwi";

//EXO // 6

let message = document.querySelector("#message");
console.log(message);
message.innerHTML = "Bienvenue sur la page ! ";

//EXO // 7

let oldDiv = document.querySelectorAll("#contenu p");
console.log(oldDiv);
let h3 = document.createElement("h3");
h3.textContent = "Nouveau titre";
oldDiv[0].replaceWith(h3);
// oldDiv[0].innerHTML = "Nouveau titre";
oldDiv[1].innerHTML = "Nouveau paragraphe";

//EXO // 8

let oldLi = document.querySelectorAll("aside li");
console.log(oldLi);
oldLi[oldLi.length - 1].remove();

//EXO // 9

const oldElements = document.querySelector("[data-super-div]");
console.log(oldElements);

const paragraphs = document.querySelectorAll("[data-super-div] p");
console.log(paragraphs);

for (i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    const text = p.innerHTML;

    if (text.includes("pokemon")) {
        p.remove();
    }
}

// enoncé exo petit chat //

//je récupere la div et je lui ajoute un evenement au click
// let div = document.querySelector('.test');
// div.addEventListener('click', () => {
//     console.log('ici');
// });

//je recupere le lien et je lui change son attribut, je peux lui changer tout ces attributs
// exemple changer un src dans une image !!
// let lien = document.querySelector('#lien');
// lien.href = "https://facebook.fr";

let forceUtilisateur = 10;
let catLife = 100;
