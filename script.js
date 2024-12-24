const playPauseButton = document.getElementById("playpause-icon");
const seekBar = document.getElementById("seek-bar");
const startTimeDisplay = document.getElementById("start-time");
const endTimeDisplay = document.getElementById("end-time");

let songDuration = 10 * 60; // 10 minutes in seconds
let intervalId;
let isPlaying = false;
let currentTime = 0;

// Format time in mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Update seekbar and time display
function updateSeekBar() {
  currentTime++;
  const progressPercentage = (currentTime / songDuration) * 100;
  seekBar.value = progressPercentage;

  // Update track background gradient
  seekBar.style.background = `linear-gradient(to right, #632964 ${progressPercentage}%, #ffffff ${progressPercentage}%)`;

  // Update start time display
  startTimeDisplay.textContent = formatTime(currentTime);

  if (currentTime >= songDuration) {
    clearInterval(intervalId);
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");

    isPlaying = false;
    currentTime = 0; // Reset for replay
    startTimeDisplay.textContent = formatTime(currentTime); // Reset time display
    seekBar.style.background = `linear-gradient(to right, #632964 100%, #ffffff 0%)`;
  }
}

// Initialize end time display
endTimeDisplay.textContent = formatTime(songDuration);

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    clearInterval(intervalId);
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
  } else {
    intervalId = setInterval(updateSeekBar, 1000);
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  }
  isPlaying = !isPlaying;
});
