const seekBar = document.getElementById("seek-bar");

seekBar.addEventListener("input", (event) => {
  const value = event.target.value;
  seekBar.style.setProperty("--value", `${value}%`);
});
