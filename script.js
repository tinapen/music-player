const playBtn = document.getElementById("play-btn");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const artistImg = document.getElementById("artist-img");
const title = document.getElementById("title");
const artistName = document.getElementById("artist-name");
const playIcon = document.querySelector(".fa-play");
const seekBarContainer = document.querySelector(".seek-bar-container");
const seekBar = document.getElementById("seek-bar");
const seekEclipse = document.getElementById("seek-eclipse");
const startTime = document.getElementById("start-time");
const endTime = document.getElementById("end-time");

const track = {
  source:
    "./music/Taylor-Swift_All-Too-Well_(Taylor's-Version)_(Lyric-Video).mp3",
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

seekBar.addEventListener("click", (e) => {
  const scrubTime = (e.offsetX / seekBar.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
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
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  }
};

seekBarContainer.addEventListener("click", (x) => {
  let maxduration = audio.duration;
  let position = x.offsetX - seekBarContainer.offsetLeft;
  let percentage = (100 * position) / seekBarContainer.offsetWidth;
  if (percentage > 100) percentage = 100;
  if (percentage < 0) percentage = 0;
  barWidth = percentage + "%";

  audio.currentTime = (maxduration * percentage) / 100;
  seekBar.style.width = `${barWidth}%`;
  seekEclipse.style.setProperty("left", `${barWidth}%`);
});
