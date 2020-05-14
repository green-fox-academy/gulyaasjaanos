console.log("running");

const h3 = document.querySelector("h3");
const urlField = document.querySelector('input[id="url"]');
const aliasField = document.querySelector('input[id="alias"]');
const submitBtn = document.querySelector("button");
const formElement = document.querySelector("form");

formElement.addEventListener("click", (event) => {
    if( event.target === submitBtn ) {
        event.preventDefault();
        console.log(formElement["url"].value);
        const toJson = { url: formElement["url"].value, alias: formElement["alias"].value };
        fetch("/api/links",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toJson),
        })
        .then( (response) => response.json() )
        .then( (json) => {
            const text = ( !json.error )? `Your URL is aliased to ${json.alias} and your secret code is ${json.secretCode}.` : json.error;
            h3.innerHTML = text;
            if ( !json.error ) {
                formElement.reset(); 
                formElement["url"].value = "";
                formElement["alias"].value = "";
            }
        });
    }
});