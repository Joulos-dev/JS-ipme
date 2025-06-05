.addEventListener("click", () => {
    fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito`
    ).then((response) => {
        if (response.status === 200) {
            console.log(response);
        }
    });
});
