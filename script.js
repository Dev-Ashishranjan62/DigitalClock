const clock = document.getElementById("clock");

setInterval(() => {
  clock.textContent = new Date().toLocaleString();
}, 1000);
