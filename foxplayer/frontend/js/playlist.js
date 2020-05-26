"use strict";

const alltrackURL = "http://localhost:8000/alltrack";
const playlistsURL = "http://localhost:8000/playlists";
const addtrackURL = "http://localhost:8000/playlist-tracks/";
const listtrackURL = "http://localhost:8000/playlist-tracks/";
let playlistArray = [];
let playlistIndex = 0;
let playlistId = 0;
let trackIndex = 0;
let trackArray = [];
const $playlists = document.querySelector(".playlists");
const $tracks = document.querySelector(".tracks");
const $currentTrack = document.querySelector(".track_control");
const $audioBuffer = document.querySelector(".audiobuffer");
const $playlistAdder = document.querySelector(".add_playlist");
const $playlistAdderForm = document.querySelector(".playlist.adder");
const $playlistAdderText = document.querySelector(".playlist.adder input");
const $playlistRemoverForm = document.querySelector(".playlist.remover");
const $playlistRemoverText = document.querySelector('.playlist.remover input[type="text"]');
const $playlistRemoverId = document.querySelector('.playlist.remover input[name="removelistID"]');
const $playlistRemoverIndex = document.querySelector('.playlist.remover input[name="removelistIndex"]');
const $trackModifier = document.querySelector(".track_control nav");
const $trackAdder = document.querySelector(".add_to_playlist");
const $trackRemover = document.querySelector(".remove_from_playlist");
const $trackFavorite = document.querySelector(".add_to_favorites");

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
        fetch(listtrackURL,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then( (response) => response.json() )
            .then( (json) => trackArray = json );
        createPlaylists(json);
    });

const createPlaylists = (alltrack) => {
    playlistArray.push({
        id: 0,
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
            json.forEach( e => {
                playlistArray.push({
                    id: e.id,
                    name: e.title,
                    tracks: processPlaylistTracks(e.id,trackArray),
                    system: e.system
                });
            });
            renderPlaylists();
            renderTracklist(playlistArray[playlistIndex].tracks);
            renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],false);
        });
};

const processPlaylistTracks = (id,list) => {
    const files = playlistArray[0].tracks.map( e => e.file);
    const idList = list.filter( (e) => e.playlist_id === parseInt(id) && files.includes(e.track_file)).map( e => e.track_file );
    const trackList = playlistArray[0].tracks.filter( e => idList.includes(e.file) );
    return trackList;
};

const renderPlaylists = () => {
    while ($playlists.firstChild) {
        $playlists.removeChild($playlists.firstChild);
    }
    let renderArray = [];
    playlistArray.forEach( (e,i) => {
        const $listItem = document.createElement("article");
        $listItem.innerHTML = (e.system === 1) ?  
            `<h3>${e.name}</h3>` :
            `<h3>${e.name}</h3>
            <div class="delete_list" data-id=${e.id} data-index=${i} data-name="${e.name}">X</div>`;
        if (i === 0) $listItem.classList.add("selected");
        $listItem.dataset.playlistIndex = i;
        $listItem.dataset.playlistId = e.id || 0;
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
        
        if (playlistIndex !== "0" && playlistIndex !== "1") {
            playlistId = event.target.parentNode.dataset.playlistId || event.target.dataset.playlistId;
            document.querySelectorAll(".playlists article").forEach( e => e.classList.remove("marked"));
            document.querySelector(`article[data-playlist-id="${playlistId}"]`).classList.add("marked");
        }
    }
});

const renderTracklist = (tracklist) => {
    while ($tracks.firstChild) {
        $tracks.removeChild($tracks.firstChild);
    }
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
    document.querySelector(".track_control header h1").innerHTML = track.title;
    document.querySelector(".track_control header h2").innerHTML = track.artist;
    document.querySelector(".track_control nav div.add_to_playlist").dataset.title = track.file;
    document.querySelector(".track_control nav div.remove_from_playlist").dataset.title = track.file;
    document.querySelector(".track_control nav div.add_to_favorites").dataset.title = track.file;
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
    $playlistRemoverForm.classList.remove("visible");
});

$playlists.addEventListener("click", (event) => {
    if (event.target.className === "delete_list") {
        $playlistRemoverText.value = event.target.dataset.name;
        $playlistRemoverId.value = event.target.dataset.id;
        $playlistRemoverIndex.value = event.target.dataset.index;
        $playlistRemoverForm.classList.toggle("visible");
        $playlistAdderForm.classList.remove("visible");
    }
});

$playlistAdderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(playlistsURL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({title: $playlistAdderText.value})
        })
        .then( (response) => response.json() )
        .then( (json) => {
            playlistArray.push({
                id: json.id,
                name: $playlistAdderText.value,
                tracks: [],
                system: 0
            })
            renderPlaylists();
            $playlistAdderForm.classList.remove("visible");
        });
});

$playlistRemoverForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(playlistsURL+"/"+$playlistRemoverId.value,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then( () => {
            playlistArray.splice($playlistRemoverIndex.value,1);
            renderPlaylists();
            if (playlistIndex === $playlistRemoverIndex.value) {
                playlistIndex = 0;
                renderTracklist(playlistArray[playlistIndex].tracks);
                renderCurrentTrack(playlistArray[playlistIndex].tracks[trackIndex],false);
            }
            $playlistRemoverForm.classList.remove("visible");
        });
});

$trackModifier.addEventListener("click", (event) => {
    const method = (event.target === $trackRemover) ? "DELETE" : "POST";
    const targetId = (event.target === $trackFavorite) ? 1 : playlistId;
    fetch(addtrackURL+targetId,
        {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({file: playlistArray[playlistIndex].tracks[trackIndex].file})
        })
        .then( (response) => response.json() )
        .then( (json) => {
            if(!json.error) playlistArray[idToIndex(targetId)].tracks = processPlaylistTracks(targetId,json);
        })
        .catch( console.log );
});

const idToIndex = (id) => {
    let backId = -1;
    playlistArray.forEach( (e,i) => {
        if(e.id === parseInt(id)) backId = i;
    });
    return backId;
};