const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const messages = [
  "Someone still laughs at a joke you said.",
  "If you don't fail, you're not even trying.",
  "You are allowed to be a beginner for as long as you need.",
  "Someone is going to love you the way you are, be yourself and never change for someone else.",
  "Starting late is only embarrassing when you think life is a race.",
  "Lock in, work hard now, be proud later.",
];
button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});