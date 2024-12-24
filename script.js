// const seekBar = document.getElementById("seek-bar");
// const song = document.getElementById("song");
// const playIcon = document.getElementById("play-icon");
// const startTime = document.getElementById("start-time");
// const endTime = document.getElementById("end-time");

// song.onloadedmetadata = function () {
//   seekBar.max = song.duration;
//   seekBar.value = (song.currentTime / song.duration) * 100;
// };

// // startTime = song.currentTime;
// // endTime = song.duration;
// function songPlayPause() {
//   if (playIcon.classList.contains("fa-pause")) {
//     song.pause();
//     playIcon.classList.remove("fa-pause");
//     playIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     playIcon.classList.add("fa-pause");
//     playIcon.classList.remove("fa-play");
//   }
// }

// if (song.play()) {
//   setInterval(() => {
//     const progress = (song.currentTime / song.duration) * 100;
//     seekBar.value = progress;
//     seekBar.style.background = `linear-gradient(to right, #632964 ${progress}%, #ffffff80 ${progress}%)`;
//   }, 100);
//   playIcon.classList.add("fa-pause");
//   playIcon.classList.remove("fa-play");
// }

// seekBar.onchange = function () {
//   song.play();
//   song.currentTime = seekBar.value;
//   playIcon.classList.add("fa-pause");
//   playIcon.classList.remove("fa-play");
// };
const seekBar = document.getElementById("seek-bar");

seekBar.addEventListener("input", (event) => {
  const value = event.target.value;
  seekBar.style.setProperty("--value", `${value}%`);
});
