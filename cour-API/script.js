let body = document.querySelector("body");

// fetch (recuperer) les données d'un API sur son serveur
// les .then permette de faire dans l'ordre toute les commandes
fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let para = document.createElement("p");
        para.innerHTML = data.slip.advice;
        body.append(para);
    });

// exemple de try-catch qui permet de faire le fetch et
// d'afficher les erreur si il y en as
try {
    const resp = await fetch("truc");
    const json = await resp.json();
    console.log(json);
} catch (err) {
    console.error(err);
}

// exemple de fetch avec le status (erreur ou pas)
// 200 = pas d'erreur / 404 = page non trouvé / 500= server error
// 300 = erreur modification / 400 = erreur client

fetch("truc")
    .then((resp) => {
        if (resp.status === 404) {
            console.error("pas trouvé");
        }

        if (resp.status === 200) {
            resp.json().then((json) => {
                console.log(json);
            });
        }
    })
    .catch((err) => {
        console.log(err);
        alert("c tout peté");
    });
