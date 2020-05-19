"use strict";

const $main = document.querySelector("main");
const $login = document.querySelector('button[type="button"]');
const $label = document.querySelector("label");
const $input = document.querySelector("input");
const $form = document.querySelector("form");

const user = (localStorage.getItem("user"))? localStorage.getItem("user") : "anonymus";
$label.innerHTML = `You are logged in as <span>${user}</span>.`;
$input.value = "";

fetch("http://localhost:8080/posts",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "user": user
        }
    })
    .then( (response) => response.json(response) )
    .then( (json) => {
        renderList(json);
    })
    .catch( (error) => console.log(error) );


const renderList = (listelEments) => {
    let articleArray = [];
    listelEments.forEach( (e) => {
        const $article = createArticle(e);
        articleArray.push($article);
    });
    $main.append(...articleArray);
};

const createArticle = (e) => {
    const $article = document.createElement("article");
    $article.innerHTML =
    `
    <section>
        <h2>${e.title} <br><span>(${e.url})</span></h2>
        <p>submitted ${timeAgo(e.timestamp).days} days ago by ${e.owner}</p>
        <nav>
            <a ${(e.owner === user)? `href="http://localhost:8080/edit.html?id=${e.id}"` : ""} class=${(e.owner === user)? "clickable" : ""}>edit</a>
            <a ${(e.owner === user)? `href="http://localhost:8080/delete.html?id=${e.id}"` : ""} class=${(e.owner === user)? "clickable" : ""}>delete</a>
        </nav>
    </section>
    <nav>
        <img src="${(e.vote === 1)? `./assets/upvoted.png` :   `./assets/upvote.png`}" alt="upvote"
        data-id="${e.id}" data-vote="upvote" class=${(e.vote === 0)? "vote_clickable" : ""}>
        <div data-id="${e.id}">${e.score}</div>
        <img src="${(e.vote === -1)? `./assets/downvoted.png` :   `./assets/downvote.png`}" alt="downvote"
        data-id="${e.id}" data-vote="downvote" class=${(e.vote === 0)? "vote_clickable" : ""}>
    </nav>
    `
    return $article;
};

$main.addEventListener("click", (event) => {
    if (event.target.className === "vote_clickable") {  
        fetch(`http://localhost:8080/posts/${event.target.dataset.id}/${event.target.dataset.vote}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "user":user
            }
        })
            .then( (response) => response.json(response) )
            .then( (json) => {
                document.querySelectorAll(`img[data-id='${event.target.dataset.id}']`)[0].classList.remove("vote_clickable");
                document.querySelectorAll(`img[data-id='${event.target.dataset.id}']`)[1].classList.remove("vote_clickable");
                event.target.src = (event.target.dataset.vote === "upvote")? "./assets/upvoted.png" : "./assets/downvoted.png";
                document.querySelector(`div[data-id='${event.target.dataset.id}']`).innerHTML = `${json.score}`;
            })
            .catch( (error) => console.log(error) );
    }
});

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "http://localhost:8080/post.html"
});

$login.addEventListener("click", () => {
    fetch(`http://localhost:8080/user`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "user": $input.value
            }
        })
        .then( (response) => {
            if (response.status === 200) {
                localStorage.setItem("user", $input.value);
                window.location.href = "http://localhost:8080"
            } else {
                $label.innerHTML = `We cannot logged you in. You are still logged in as <span>${user}</span>.`
            }
        })
        .catch( (error) => $label.innerHTML = `You are still logged in as ${user}.`);
    
});

const timeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp*1000;
    const dateTime = new Date(diff);
    const ago = {
        days: Math.floor(diff / (1000*60*60*24))
    };
    return ago;
}