let btnClick = (id, onclick) => document.getElementById(id).addEventListener("click", onclick);

let video = document.querySelector("video");

btnClick("start", () => video.play());
btnClick("stop", () => video.pause());
btnClick("startstop", () => video.paused ? video.play() : video.pause())

btnClick("slow", () => video.playbackRate = 0.75);
btnClick("normal", () => video.playbackRate = 1);
btnClick("fast", () => video.playbackRate = 2);
