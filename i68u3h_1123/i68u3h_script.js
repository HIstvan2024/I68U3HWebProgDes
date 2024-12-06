let btnClick = (id, onclick) => document.getElementById(id).addEventListener("click", onclick);

let video = document.querySelector("video");

btnClick("start", () => video.play());
btnClick("stop", () => video.pause());
btnClick("startstop", () => video.paused ? video.play() : video.pause());

btnClick("mute", () => video.volume = 0);
btnClick("quite", () => video.volume = 0.5);
btnClick("loud", () => video.volume = 1);

btnClick("veryslow", () => video.playbackRate = 0.5);
btnClick("slow", () => video.playbackRate = 0.75);
btnClick("normal", () => video.playbackRate = 1);
btnClick("fast", () => video.playbackRate = 1.25);
btnClick("veryfast", () => video.playbackRate = 1.5);

btnClick("small", () => video.width = 400);
btnClick("normalsize", () => video.width = 600);
btnClick("big", () => video.width = 800);

btnClick("hasitended", () => alert(video.ended));
btnClick("length", () => alert(video.duration));
btnClick("currently", () => alert(video.currentTime));
