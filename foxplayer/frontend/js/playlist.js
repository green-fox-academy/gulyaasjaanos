"use strict";

const alltrackURL = "http://localhost:8000/alltrack";
let playlistArray = [];
let playlistIndex = 0;
let trackIndex = 0;
const $playlists = document.querySelector(".playlists");
const $tracks = document.querySelector(".tracks");
const $currentTrack = document.querySelector(".track_control");
const $audioBuffer = document.querySelector(".audiobuffer");

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
        renderTracklist(playlistArray[playlistIndex].tracks);
        renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],false);
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
                <h3>${e.title}</h3>
            </section>
            <h4 data-id="dur${e.track}">${0}</h4>
            `;
        if (i === 0) $listItem.classList.add("selected");
        $listItem.dataset.trackIndex = i;
        renderArray.push($listItem);
        const $buffedAudio = document.createElement("audio")
            $buffedAudio.src = `../mp3/${e.file}`;
            $buffedAudio.load();
            $buffedAudio.addEventListener("durationchange", () => {
                document.querySelector(`h4[data-id="dur${e.track}"]`).innerHTML = formatDuration($buffedAudio.duration);
                $buffedAudio.removeAttribute("src"); 
            });
    });
    $tracks.append(...renderArray);
};

const renderCurrentTrack = (track,playable) => {
    $currentTrack.innerHTML = `
        <header>
            <h1>${track.title}</h1>
            <h2>${track.artist}</h2>
        </header>
        <nav>
            <div data-title="${track.file}" class="add_to_playlist">+</div>
            <div data-title="${track.file}" class="add_to_favorites"></div>
        </nav>
    `;
    $audio.pause();
    $timeProgress.value = 0;
    $audio.currenttime = 0;
    $audio.src = `../mp3/${track.file}`;
    if (playable) $audio.play();
};

$tracks.addEventListener("click", (event) => {
    if(event.target.parentNode.parentNode.dataset.trackIndex || event.target.dataset.trackIndex) {
        trackIndex = event.target.parentNode.parentNode.dataset.trackIndex || event.target.dataset.trackIndex;
        setTrack();
    }
});

$forwardBtn.addEventListener("click", () => {
    if (trackIndex+1 === playlistArray[playlistIndex].tracks.length) {
        if (loop) {
            trackIndex = 0;
            setTrack();
        }
    } else {
        trackIndex++;
        setTrack();
    }
});

const setTrack = () => {
    document.querySelectorAll(".tracks article").forEach( e => e.classList.remove("selected"));
    document.querySelector(`article[data-track-index="${trackIndex}"]`).classList.add("selected");
    renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],true);
};

$audio.addEventListener("ended", () => {
    $playBtn.src = "../asset/play.svg";
    if (trackIndex+1 === playlistArray[playlistIndex].tracks.length) {
        if (loop) {
            trackIndex = 0;
            setTrack();
        }
    } else {
        trackIndex++;
        setTrack();
    }
});


const formatDuration = (duration) => {
    let minutes = Math.floor(duration % 3600 / 60);
    let seconds = Math.floor(duration % 3600 % 60);
    return (minutes+":"+seconds);
};