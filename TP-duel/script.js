let form = document.querySelector("form");

const pOne = document.querySelector("#nom-un");
console.log(pOne);
const pTwo = document.querySelector("#nom-deux");
console.log(pTwo);
const mOne = document.querySelector("#maison-un");
console.log(mOne);
const mTwo = document.querySelector("#maison-deux");
console.log(mTwo);

const newPOne = document.querySelector(".nom-duelliste-un");
console.log(newPOne);
const newPTwo = document.querySelector(".nom-duelliste-deux");
console.log(newPTwo);
const newMOne = document.querySelector(".maison-duelliste-un");
console.log(newMOne);
const newMTwo = document.querySelector(".maison-duelliste-deux");
console.log(newMTwo);

let forceMin = 5;
let forceMax = 15;
let degats = Math.floor(Math.random() * (forceMax - forceMin + 1)) + forceMin;
console.log(degats);
let hpMax = 200;
let hpActuel = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    newPOne.innerHTML = pOne.value;
    newPTwo.innerHTML = pTwo.value;
    newMOne.innerHTML = mOne.value;
    newMTwo.innerHTML = mTwo.value;

    while (hpActuel > 0) {
        n++;
        hpActuel += hpMax - degats;
    }
});
