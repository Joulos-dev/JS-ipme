let form = document.querySelector("form");
let map = L.map("map").setView([51.505, -0.09], 13);

let destination = document.querySelector("#champ");
let submit = document.querySelector("#rechercher");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valueInput = destination.value;
    fetch(
        "https://nominatim.openstreetmap.org/search?q=" +
            valueInput +
            "&format=json"
    ).then((response) => {
        return response.json().then((data) => {
            let latitude = data[0].lat;
            console.log(latitude);
            let longitude = data[0].lon;
            console.log(data);

            const marker = L.marker([latitude, longitude]).addTo(map);
        });
    });
});
