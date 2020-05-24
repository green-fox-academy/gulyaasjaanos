"use strict";

const alltrackURL = "http://localhost:8000/alltrack";
const playlistsURL = "http://localhost:8000/playlists";
let playlistArray = [];
let playlistIndex = 0;
let trackIndex = 0;
const $playlists = document.querySelector(".playlists");
const $tracks = document.querySelector(".tracks");
const $currentTrack = document.querySelector(".track_control");
const $audioBuffer = document.querySelector(".audiobuffer");
const $playlistAdder = document.querySelector(".add_playlist");
const $playlistAdderForm = document.querySelector(".playlist.adder");
const $playlistRemoverForm = document.querySelector(".playlist.remover");
const $playlistRemoverText = document.querySelector(".playlist.remover input");

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
    });

const createPlaylists = (alltrack) => {
    playlistArray.push({
        name: "All tracks",
        tracks: alltrack.mp3List.filter( e => !e.error ),
        system: 1
    });
    fetch(playlistsURL,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then( (response) => response.json() )
        .then( (json) => {
            json.forEach( e => playlistArray.push({
                name: e.title,
                tracks: [],
                system: e.system
            }) );
            renderPlaylists();
            renderTracklist(playlistArray[playlistIndex].tracks);
            renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],false);
        });
};

const renderPlaylists = () => {
    
    let renderArray = [];
    playlistArray.forEach( (e,i) => {
        const $listItem = document.createElement("article");
        $listItem.innerHTML = (e.system === 1) ?  
            `<h3>${e.name}</h3>` :
            `<h3>${e.name}</h3>
            <div class="delete_list" data-id=${i} data-name="${e.name}">X</div>`;
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
    newTrack();
});

const setTrack = () => {
    document.querySelectorAll(".tracks article").forEach( e => e.classList.remove("selected"));
    document.querySelector(`article[data-track-index="${trackIndex}"]`).classList.add("selected");
    renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],true);
};

$audio.addEventListener("ended", () => {
    $playBtn.src = "../asset/play.svg";
    newTrack();
});

const newTrack = () => {
    if (shuffle) {
        trackIndex = Math.floor(Math.random() * playlistArray[playlistIndex].tracks.length);
        setTrack();
    } else {
        if (trackIndex+1 === playlistArray[playlistIndex].tracks.length) {
            if (loop) {
                trackIndex = 0;
                setTrack();
            }
        } else {
            trackIndex++;
            setTrack();
        }
    }
}

const formatDuration = (duration) => {
    let minutes = Math.floor(duration % 3600 / 60);
    let seconds = Math.floor(duration % 3600 % 60);
    return (minutes+":"+seconds);
};

$playlistAdder.addEventListener("click", (event) => {
    if (event.target === $playlistAdder) $playlistAdderForm.classList.toggle("visible");
});

$playlists.addEventListener("click", (event) => {
    if (event.target.className === "delete_list") {
        $playlistRemoverText.value = event.target.dataset.name;
        $playlistRemoverForm.classList.toggle("visible");
    }
});