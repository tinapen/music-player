const playBtn = document.getElementById("play-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const artistImg = document.getElementById("artist-img");
const title = document.getElementById("title");
const artistName = document.getElementById("artist-name");
const playIcon = document.querySelector(".fa-play");
const seekBarContainer = document.getElementById("seek-bar-container");
const seekBar = document.getElementById("seek-bar");
const seekEclipse = document.getElementById("seek-eclipse");
const startTime = document.getElementById("start-time");
const endTime = document.getElementById("end-time");

const track = {
  source:
    "./music/Taylor Swift - All Too Well (Taylor's Version) (Lyric Video).mp3",
};

// Initial values
let audio = null;
let barWidth = null;
let duration = null;
let currentTime = null;
let isTimerPlaying = false;

// Set values
audio = new Audio();
audio.src = track.source;

// Play button
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    isTimerPlaying = true;
  } else {
    audio.pause();
    isTimerPlaying = false;
  }
});

// Dynamic Play Button, Song Time and Seekbar
audio.ontimeupdate = function () {
  if (audio.duration) {
    barWidth = (100 / audio.duration) * audio.currentTime;

    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

    if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;

    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

    duration = durationMinutes + ":" + durationSeconds;
    currentTime = currentMinutes + ":" + currentSeconds;

    seekBar.style.width = `${barWidth}%`;
    seekEclipse.style.setProperty("left", `${barWidth}%`);
    startTime.innerText = `${currentTime}`;
    endTime.innerText = `${duration}`;

    if (isTimerPlaying) {
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    } else {
      playIcon.classList.add("fa-play");
      playIcon.classList.remove("fa-pause");
    }
  }
};
