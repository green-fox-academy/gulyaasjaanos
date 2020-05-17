"use strict";

const $main = document.querySelector("main");
const $newpost = document.querySelector("button");
const $form = document.querySelector("form");

const user = "anonymus";

fetch("http://localhost:8080/posts",
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
        renderList(json);
        console.log(json);
    })
    .catch( (error) => console.log(error) );


const renderList = (listelEments) => {
    let articleArray = [];
    listelEments.forEach( (e) => {
        const $article = document.createElement("article");
            const $section = document.createElement("section");
                $article.append($section);
                const $h2 = document.createElement("h2");
                    $h2.innerHTML = `${e.title} <br><span>(${e.url})</span>`;
                    $section.append($h2);
                const $p = document.createElement("p");
                    $p.innerHTML = `submitted ${e.timestamp} by ${e.owner}`;
                    $section.append($p);
                const $nav = document.createElement("nav");
                    $section.append($nav);
                        const $a1 = document.createElement("a");
                            $a1.innerHTML = "modify";
                            if (e.owner === user) $a1.href = `http://localhost:8080/edit.html?id=${e.id}`;
                            if (e.owner === user) $a1.classList.add("modify_clickable");
                            $nav.append($a1);
                        const $a2 = document.createElement("a");
                            $a2.innerHTML = "remove";
                            if (e.owner === user) $a2.href = `http://localhost:8080/delete.html?id=${e.id}`;
                            if (e.owner === user) $a2.classList.add("remove_clickable");
                            $nav.append($a2);
            const $votenav = document.createElement("nav");
                $article.append($votenav);
                    const $v1 = document.createElement("a");
                        $votenav.append($v1);
                            const $img1 = document.createElement("img");
                                $img1.dataset.id = e.id;
                                $img1.dataset.vote = "upvote";
                                $img1.src = (e.vote === 1)? "./assets/upvoted.png" : "./assets/upvote.png";
                                if (e.vote === 0) $img1.classList.add("vote_clickable");
                                $v1.append($img1);
                    const $score = document.createElement("div");
                        $score.innerHTML = `${e.score}`;
                        $score.dataset.id = e.id;
                        $votenav.append($score);
                    const $v2 = document.createElement("a");
                        $votenav.append($v2);
                            const $img2 = document.createElement("img");
                                $img2.dataset.id = e.id;
                                $img2.dataset.vote = "downvote";
                                $img2.src = (e.vote === -1)? "./assets/downvoted.png" : "./assets/downvote.png";
                                if (e.vote === 0) $img2.classList.add("vote_clickable");
                                $v2.append($img2);
        articleArray.push($article);
    });
    $main.append(...articleArray);
};

$main.addEventListener("click", (event) => {
    if (event.target.className === "vote_clickable") {  
        fetch(`http://localhost:8080/posts/${event.target.dataset.id}/${event.target.dataset.vote}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({"user": user})
        })
            .then( (response) => response.json(response) )
            .then( (json) => {
                console.log(json);
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