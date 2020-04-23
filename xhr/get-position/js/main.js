"use strict";

const LINK = "http://api.giphy.com/v1/gifs/search?q=funny&api_key=S4BuXxdt3rXs7fEMnXkesz3juln82Li3";
const API_KEY = "AIzaSyDBxGXvjr9dY5lT1RkuYS-eREC3SPFoHBw";

callXHR(LINK, (response) => {
    responseToDOM(response);
});