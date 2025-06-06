let form = document.querySelector("form");
let map = L.map("map").setView([51.505, -0.09], 13);

let destination = document.querySelector("#champ");
let submit = document.querySelector("#rechercher");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

getStorage();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valueInput = destination.value;
    fetch(
        "https://nominatim.openstreetmap.org/search?q=" +
            valueInput +
            "&format=json"
    ).then((response) => {
        return response.json().then((data) => {
            console.log(data);

            if (data.length === 0) {
                Swal.fire({
                    title: "Erreur",
                    text: "Ce lieu semble ne pas exister",
                    icon: "question",
                });
            } else {
                let latitude = data[0].lat;
                let longitude = data[0].lon;
                const marker = L.marker([latitude, longitude]).addTo(map);

                setStorage(latitude, longitude);
                console.log(setStorage);
            }
        });
    });
});

function getStorage() {
    const storage = localStorage.getItem("coordonnes");

    if (storage) {
        return JSON.parse(storage);
    }

    return [];
}

function setStorage(lat, lon) {
    recupStorage = [];
    recupStorage.push(lat, lon);
    let arrayJson = JSON.stringify(recupStorage);
    localStorage.setItem("REPLIQUES", arrayJson);
    console.log(arrayJson);
}

function displayHistorique() {
    const markerList = getStorage();
    console.log(markerList);
}
