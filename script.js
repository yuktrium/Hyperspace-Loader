const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const loader = document.getElementById("loader");
const longfazers = document.getElementById("longfazers");

startBtn.addEventListener("click", () => {
  loader.classList.add("running");
  longfazers.classList.add("running");
  startBtn.disabled = true;
  startBtn.textContent = "Running…";
  startBtn.classList.add("is-running");
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  loader.classList.remove("running");
  longfazers.classList.remove("running");
  startBtn.disabled = false;
  startBtn.textContent = "Start";
  startBtn.classList.remove("is-running");
  stopBtn.disabled = true;
});
