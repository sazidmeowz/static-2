let clicks = 0;

const button = document.getElementById("clickMe");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {
  clicks += 1;
  counter.textContent = `You've clicked ${clicks} time${clicks === 1 ? "" : "s"}.`;
});
