"use strict";

const $main = document.querySelector("main");

fetch("http://localhost:8080/posts",
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
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
                    $h2.innerHTML = `${e.title} <span>${e.url}</span>`;
                    $section.append($h2);
                const $p = document.createElement("p");
                    $p.innerHTML = `submitted ${e.timestamp} by ${e.owner}`;
                    $section.append($p);
                const $nav = document.createElement("nav");
                    $section.append($nav);
                        const $a1 = document.createElement("a");
                            $a1.innerHTML = "Modify";
                            $nav.append($a1);
                        const $a2 = document.createElement("a");
                            $a2.innerHTML = "Remove";
                            $nav.append($a2);
            const $votenav = document.createElement("nav");
                $article.append($votenav);
                    const $v1 = document.createElement("a");
                        $v1.innerHTML = "upvote";
                        $votenav.append($v1);
                    const $score = document.createElement("div");
                        $score.innerHTML = e.score;
                        $votenav.append($score);
                    const $v2 = document.createElement("a");
                        $v2.innerHTML = "downvote";
                        $votenav.append($v2);
        articleArray.push($article);
    });
    $main.append(...articleArray);
};