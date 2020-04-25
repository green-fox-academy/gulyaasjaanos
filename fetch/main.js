 "use strict";

const URL = 'http://api.icndb.com/jokes/random';
const BTN = document.querySelector("button");
const SEC = document.querySelector("section");

const addToSection = (text) => {
    let p = document.createElement("p");
    p.innerHTML = text;
    SEC.insertBefore(p, SEC.childNodes[0]);
};


/*const findNerdyChuck = (cb) => {
    fetch(URL)
        .then( (response) => response.json() )
        .then( (json) => {
            if ( json.value.categories.includes("nerdy") ) {
                return cb(json.value.joke);
            } else {
                return findNerdyChuck(cb);
            }
        });
};

BTN.addEventListener("click", () => {
    findNerdyChuck( addToSection );
});*/

/*const findNerdyChuck = () => {
    return new Promise ( (resolve) => {
        fetch(URL)
        .then( (response) => response.json() )
        .then( (json) => {
            if ( json.value.categories.includes("nerdy") ) {
                resolve(json.value.joke);
            } else {
                resolve(findNerdyChuck());
            }
        });
    });
};*/

const fetchChuck = () => {
    return new Promise( (resolve) => {
        fetch(URL)
        .then( (response) => response.json() )
        .then( (json) => {
            resolve ({
                joketext: json.value.joke,
                category: json.value.categories
            });
        });
    });
};

async function findNerdyChuck() {
        let found = false;
        let text = "";
        do {
            const joke = await fetchChuck();
            if ( joke.category.includes("nerdy") ) {
                found = true;
                text = joke.joketext;
            }
        } while (!found);
        addToSection(text);
};

BTN.addEventListener("click", () => {
    findNerdyChuck();
});

/*BTN.addEventListener("click", () => {
    findNerdyChuck().then(addToSection);
});*/