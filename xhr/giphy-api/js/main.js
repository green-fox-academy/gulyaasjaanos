"use strict";

const LINK = "http://api.giphy.com/v1/gifs/search?q=funny&api_key=S4BuXxdt3rXs7fEMnXkesz3juln82Li3";

callXHR(LINK, (response) => {
    responseToDOM(response);
});