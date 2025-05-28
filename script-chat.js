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

let lifeDisplay = document.querySelector(".catLife");
let strenghDisplay = document.querySelector(".forceUtilisateur");

let chatImg = document.querySelector("img.chat");
console.log(chatImg);
chatImg.addEventListener("click", () => {
    catLife = catLife - forceUtilisateur;
    lifeDisplay.innerHTML = catLife;
    if (catLife === 0) {
        console.log("!");
        window.alert("vous etes un monstre");
        chatImg.src = "./assets/explosion.gif";
        setTimeout(() => {
            chatImg.remove(chatImg);
        }, 100);
    }
});

// element.classList (accéder a toute les classes d'un élement)
// input.value (récuperer la valeur d'un input en str )
