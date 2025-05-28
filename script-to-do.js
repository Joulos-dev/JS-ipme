// element.classList (accéder a toute les classes d'un élement)
// input.value (récuperer la valeur d'un input en str )

const buttonAdd = document.querySelector(".add");
console.log(buttonAdd);
const buttonDelete = document.querySelector(".delete");
console.log(buttonDelete);
const toDoInput = document.querySelector("input");
console.log(toDoInput);
const toDoList = document.querySelectorAll("li");
console.log(toDoList);
const container = document.querySelector(".container");
console.log(container);

// function pour créer un "li" avec la class "notCheck"
// dans le container
function createToDo() {
    const newLi = document.createElement("li");
    newLi.innerHTML = toDoInput.value;
    // newLi.className = "notCheck";
    newLi.addEventListener("click", function () {
        newLi.classList.toggle("checked");
    });
    container.append(newLi);
}

//retour de fonction pour créer un TO DO sur le bouton add
buttonAdd.addEventListener("click", function () {
    createToDo();
});

//boucle 'for-of" pour toggle les "li" natifs
for (const item of toDoList) {
    item.addEventListener("click", function () {
        item.classList.toggle("checked");
    });
}

//code pour pouvoir delete tout les "li" (natif et nouvo)
buttonDelete.addEventListener("click", function () {
    const toDoList = document.querySelectorAll("li");
    for (let i = 0; i < toDoList.length; i++) {
        toDoList[i].remove();
    }
});

//retour de fonction pour créer un "li" avec keypress "Enter"
toDoInput.addEventListener("keypress", function (event) {
    console.log(event);
    if (event.code === "Enter") {
        createToDo();
    }
});

//cursor : pointer dans css sur 'li'
