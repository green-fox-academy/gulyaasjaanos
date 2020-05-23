"use strict";

const alltrackURL = "http://localhost:8000/alltrack";
let playlistArray = [];
let playlistIndex = 0;
let trackIndex = 0;
const $playlists = document.querySelector(".playlists");
const $tracks = document.querySelector(".tracks");

fetch(alltrackURL,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then( (response) => response.json() )
    .then( (json) => {
        createPlaylists(json);
        renderPlaylists();
    });

const createPlaylists = (alltrack) => {
    playlistArray.push({
        name: "All tracks",
        tracks: alltrack.mp3List.filter( e => !e.error )
    });
    playlistArray.push({
        name: "Favorites",
        tracks: []
    });
    playlistArray.push({
        name: "Custom",
        tracks: []
    });
    playlistArray.push({
        name: "Cool music",
        tracks: []
    });
    playlistArray.push({
        name: "For programming",
        tracks: []
    });
    playlistArray.push({
        name: "Relaxing",
        tracks: []
    });
    playlistArray.push({
        name: "Ambient",
        tracks: []
    });
};

const renderPlaylists = () => {
    console.log(playlistArray);
    let renderArray = [];
    playlistArray.forEach( (e,i) => {
        const $listItem = document.createElement("article");
        $listItem.innerHTML = (i === 0 || i === 1) ?  
            `<h3>${e.name}</h3>` :
            `<h3>${e.name}</h3>
            <div class="delete list" data-id=${i}>X</div>`;
        if (i === 0) $listItem.classList.add("selected");
        $listItem.dataset.playlistIndex = i;
        renderArray.push($listItem);
    });
    $playlists.append(...renderArray);
};

$playlists.addEventListener("click", (event) => {
    if(event.target.parentNode.dataset.playlistIndex || event.target.dataset.playlistIndex) {
        playlistIndex = event.target.parentNode.dataset.playlistIndex || event.target.dataset.playlistIndex;
        document.querySelectorAll(".playlists article").forEach( e => e.classList.remove("selected"));
        document.querySelector(`article[data-playlist-index="${playlistIndex}"]`).classList.add("selected");
        renderTracklist(playlistArray[playlistIndex].tracks);
    }
});

const renderTracklist = (tracklist) => {
    while ($tracks.firstChild) {
        $tracks.removeChild($tracks.firstChild);
    }
    console.log(tracklist);
    let renderArray = [];
    tracklist.forEach( (e,i) => {
        const $listItem = document.createElement("article");
        $listItem.innerHTML = `
            <section>
                <h4>${e.track}</h4>
                <h3>${e.artist}</h3>
            </section>
            <h4>5:00</h4>
        `;
        renderArray.push($listItem);
    });
    $tracks.append(...renderArray);
};