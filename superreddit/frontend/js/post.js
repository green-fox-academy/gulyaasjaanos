"use strict";

const user = "anonymus";
const query = window.location.search;
const queryParams = new URLSearchParams(query);
const id = queryParams.get("id");

const $form = document.querySelector("form");
const $title = document.querySelector("textarea");
const $url = document.querySelector("input");
const $submit = document.querySelector("button");
const $p = document.querySelector("p");

let access = true;

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (access) {
        fetch(`http://localhost:8080/posts`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "user": user
            },
            body: JSON.stringify({
                "title": $title.value,
                "url": $url.value
            })
        })
        .then( () => window.location.href = "http://localhost:8080" )
        .catch( (error) => $p.innerHTML = error );
    }
});