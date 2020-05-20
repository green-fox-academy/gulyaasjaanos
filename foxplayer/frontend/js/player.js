"use strict";

console.log("player ready");

const $playBtn = document.querySelector(".play.button");
const $rewindBtn = document.querySelector(".rewind.button");
const $forwardBtn = document.querySelector(".forward.button");
const $audio = document.querySelector("audio");
const $timeMeter = document.querySelector("#timemeter");
const $volumeMeter = document.querySelector("#volumemeter");
$timeMeter.value = 0;
$volumeMeter.value = 8;
$audio.volume = 0.8;
const $timeProgress = document.querySelector('progress[id="time"]');
$timeProgress.value = 0;
const $volumeProgress = document.querySelector('progress[id="volume"]');
$volumeProgress.value = 80;

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
    $playBtn.src = "../asset/pause.svg";
});

$audio.addEventListener("pause", () => {
    $playBtn.src = "../asset/play.svg";
});

$audio.addEventListener("ended", () => {
    $playBtn.src = "../asset/play.svg";
    $timeMeter.value = 0;
    $timeProgress.value = 0;
});

$audio.addEventListener("timeupdate", () => {
    $timeMeter.value = $audio.currentTime/$audio.duration * 100;
    $timeProgress.value = $audio.currentTime/$audio.duration * 100;
});
$timeMeter.addEventListener("input", () => {
    $audio.currentTime = $audio.duration/100 * $timeMeter.value;
});

$rewindBtn.addEventListener("click", () => {
    $audio.currentTime = 0;
});

$forwardBtn.addEventListener("click", () => {
    $audio.currentTime = $audio.duration;
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