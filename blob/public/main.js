console.log("running");

const h3 = document.querySelector("h3");
const urlField = document.querySelector('input[id="url"]');
const aliasField = document.querySelector('input[id="alias"]');
const submitBtn = document.querySelector("button");
const formElement = document.querySelector("form");

formElement.addEventListener("click", (event) => {
    if( event.target === submitBtn ) {
        event.preventDefault();
        const toJson = { name: "John", age: 30, city: "New York" };
        fetch("/api/links",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toJson),
        })
        .then( (response) => response.json() )
        .then( (json) => h3.innerHTML = `Your URL is aliased to ${json.alias} and your secret code is ${json.secret}.` );
    }
});