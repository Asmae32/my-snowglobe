const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const messages = [
  "Someone still laughs at a joke you said.",
  "The thing you are building counts, even half finished.",
  "You are allowed to be a beginner for as long as you need.",
  "Someone is going to love you the way you are, be yourself and never change for someone else.",
  "Hot chocolate tastes better after a hard day. You've earned one.",
  "You ask good questions. That is the whole skill.",
];
button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});