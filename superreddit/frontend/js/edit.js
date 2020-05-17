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

fetch(`http://localhost:8080/post/${id}`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"user": user})
    })
    .then( (response) => response.json(response) )
    .then( (json) => {
        if (json.owner !== user) {
            access = false;
            throw "You are not supposed to modify this.";
        }
        $title.value = json.title;
        $url.value = json.url;
    })
    .catch( (error) => $p.innerHTML = error );

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (access) {
        fetch(`http://localhost:8080/post/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "user": user,
                "title": $title.value,
                "url": $url.value
            })
        })
        .then( () => window.location.href = "http://localhost:8080" )
        .catch( (error) => $p.innerHTML = error );
    }
});