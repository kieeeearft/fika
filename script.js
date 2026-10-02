const music = document.getElementById("music");
const button = document.getElementById("musicButton");

let playing = false;

button.addEventListener("click", () => {

  if (!playing) {
    music.play();
    button.innerHTML = "❚❚";
    playing = true;
  } else {
    music.pause();
    button.innerHTML = "♫";
    playing = false;
  }

});
