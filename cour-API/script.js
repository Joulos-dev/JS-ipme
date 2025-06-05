let body = document.querySelector("body");

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
