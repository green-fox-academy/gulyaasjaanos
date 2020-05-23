"use strict";

console.log("player ready");
const $audio = document.querySelector("audio");
const $playBtn = document.querySelector(".play.button");
const $rewindBtn = document.querySelector(".rewind.button");
const $forwardBtn = document.querySelector(".forward.button");
const $timeMeter = document.querySelector("#timemeter");
const $volumeMeter = document.querySelector("#volumemeter");
const $volumeBtn = document.querySelector(".volume.button");
const $shuffleBtn = document.querySelector(".shuffle.button");
const $repeatBtn = document.querySelector(".repeat.button");
const $timeProgress = document.querySelector('progress[id="time"]');
const $volumeProgress = document.querySelector('progress[id="volume"]');
$timeMeter.value = 0;
$volumeMeter.value = 8;
$audio.volume = 0.8;
$timeProgress.value = 0;
$volumeProgress.value = 80;
let loop = false;


$playBtn.addEventListener("click", (event) => {
    if ($audio.paused) {
        $audio.play();
    } else if ($audio.ended) {
        $audio.currenttime = 0;
    } else {
        $audio.pause();
    }
});

$audio.addEventListener("play", () => {
    $playBtn.classList.add("pause");
    $playBtn.classList.remove("play");
});

$audio.addEventListener("pause", () => {
    $playBtn.classList.add("play");
    $playBtn.classList.remove("pause");
});

$audio.addEventListener("timeupdate", () => {
    $timeMeter.value = $audio.currentTime/$audio.duration * 100;
    $timeProgress.value = $audio.currentTime/$audio.duration * 100 || 0;
});
$timeMeter.addEventListener("input", () => {
    $audio.currentTime = $audio.duration/100 * $timeMeter.value;
});

$rewindBtn.addEventListener("click", () => {
    $audio.currentTime = 0;
});

$audio.addEventListener("volumechange", () => {
    $volumeMeter.value = $audio.volume*100;
    $volumeProgress.value = $audio.volume*100;
});
$volumeMeter.addEventListener("input", () => {
    $audio.volume = $volumeMeter.value/100;
});

let timeChange = false;
$timeProgress.addEventListener("mousedown", () => {
    timeChange = true;
    const progress = ((event.clientX - $timeProgress.getBoundingClientRect().left) / $timeProgress.offsetWidth) * 100;
    $audio.currentTime = $audio.duration/100 * progress;
});
$timeProgress.addEventListener("mouseup", () => {
    timeChange = false;
});
$timeProgress.addEventListener("mouseleave", () => {
    timeChange = false;
});
$timeProgress.addEventListener("mousemove", (event) => {
    if (timeChange) {
        const progress = ((event.clientX - $timeProgress.getBoundingClientRect().left) / $timeProgress.offsetWidth) * 100;
        $audio.currentTime = $audio.duration/100 * progress;
    }
});

let volumeChange = false;
$volumeProgress.addEventListener("mousedown", () => {
    volumeChange = true;
    const progress = ((event.clientX - $volumeProgress.getBoundingClientRect().left) / $volumeProgress.offsetWidth) * 100;
    $audio.volume = progress/100;
});
$volumeProgress.addEventListener("mouseup", () => {
    volumeChange = false;
});
$volumeProgress.addEventListener("mouseleave", () => {
    volumeChange = false;
});
$volumeProgress.addEventListener("mousemove", (event) => {
    if (volumeChange) {
        const progress = ((event.clientX - $volumeProgress.getBoundingClientRect().left) / $volumeProgress.offsetWidth) * 100;
        $audio.volume = progress/100;
    }
});

$volumeBtn.addEventListener("click", () => {
    if ($volumeProgress.value === 0) {
        $volumeProgress.value = 99.9;
    } else {
        $volumeProgress.value = 0;
    }
    $volumeBtn.classList.toggle("pressed");
    $audio.volume = $volumeProgress.value/100;
});

$shuffleBtn.addEventListener("click", () => {
    $shuffleBtn.classList.toggle("pressed");
});

$repeatBtn.addEventListener("click", () => {
    if (loop) {
        loop = false;
    } else {
        loop = true;
    }
    $repeatBtn.classList.toggle("pressed");
});